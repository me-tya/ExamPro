import {
  AutoProcessor,
  AutoModelForVision2Seq,
  load_image,
} from "https://cdn.jsdelivr.net/npm/@huggingface/transformers@4.2.0/+esm";

const MODEL_ID = "HuggingFaceTB/SmolVLM-256M-Instruct";
let processor = null;
let model = null;

async function loadModel() {
  if (processor && model) return;
  self.postMessage({ status: "loading", message: "Menyiapkan model visual lokal…" });
  const progress_callback = (x) => self.postMessage({ status: "progress", data: x });
  processor = await AutoProcessor.from_pretrained(MODEL_ID, { progress_callback });
  model = await AutoModelForVision2Seq.from_pretrained(MODEL_ID, {
    dtype: "fp32",
    device: "webgpu",
    progress_callback,
  });
  self.postMessage({ status: "ready" });
}

async function analyze({ image, prompt }) {
  await loadModel();
  const messages = [{
    role: "user",
    content: [
      { type: "image", image },
      { type: "text", text: prompt },
    ],
  }];
  const loaded = await load_image(image);
  const text = processor.apply_chat_template(messages, { add_generation_prompt: true });
  const inputs = await processor(text, [loaded]);
  const output = await model.generate({
    ...inputs,
    do_sample: false,
    repetition_penalty: 1.1,
    max_new_tokens: 320,
  });
  const decoded = processor.batch_decode(output, {
    skip_special_tokens: true,
    clean_up_tokenization_spaces: true,
  });
  self.postMessage({ status: "complete", output: decoded?.[0] || "" });
}

self.addEventListener("message", async (event) => {
  const { type, data } = event.data || {};
  try {
    if (type === "load") await loadModel();
    if (type === "analyze") await analyze(data);
  } catch (error) {
    self.postMessage({ status: "error", message: String(error?.message || error) });
  }
});
