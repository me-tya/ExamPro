/*
 * ExamPro Question Quality Gate
 * Step 1/7 — validates the exam bank, ECO metadata, case studies,
 * generated 180-item sets, practice decks, and saved-session inputs.
 *
 * Critical failures block Start Exam / New Set.
 * Non-blocking practice warnings are reported but do not disable the app.
 */
(function (global) {
  'use strict';

  const VERSION = '1.0.0';
  const EXPECTED_EXAM_BANK_SIZE = 550;
  const ALLOWED_DOMAINS = new Set(['People', 'Process', 'Business Environment']);
  const ALLOWED_APPROACHES = new Set(['Predictive', 'Agile', 'Hybrid']);
  const ALLOWED_APPROACH_GROUPS = new Set(['Predictive', 'Adaptive']);
  const ALLOWED_TYPES = new Set(['single', 'multi', 'matching', 'sequence', 'artifact', 'casestudy', 'caseitem']);
  const state = {
    running: false,
    lastReport: null,
    lastRunAt: 0
  };

  function isObject(value) {
    return !!value && typeof value === 'object' && !Array.isArray(value);
  }

  function clean(value) {
    return String(value == null ? '' : value).replace(/\s+/g, ' ').trim();
  }

  function normalizedText(value) {
    return clean(value).toLowerCase();
  }

  function seededRng(seed) {
    let value = (seed >>> 0) || 1;
    return function () {
      value = (Math.imul(1664525, value) + 1013904223) >>> 0;
      return value / 4294967296;
    };
  }

  function createReport() {
    return {
      version: VERSION,
      ranAt: new Date().toISOString(),
      ok: false,
      critical: [],
      warnings: [],
      info: [],
      metrics: {
        examQuestions: 0,
        practiceQuestions: 0,
        caseGroups: 0,
        ecoTasks: 0,
        generatorRuns: 0
      }
    };
  }

  function addIssue(report, severity, code, message, reference, details) {
    const item = {
      code: code,
      message: message,
      reference: reference || '',
      details: details || ''
    };
    if (severity === 'critical') report.critical.push(item);
    else if (severity === 'warning') report.warnings.push(item);
    else report.info.push(item);
  }

  function optionKeys(opts) {
    return isObject(opts) ? Object.keys(opts) : [];
  }

  function validateOptionObject(report, q, path, blocking) {
    const severity = blocking ? 'critical' : 'warning';
    const keys = optionKeys(q.opts);
    if (keys.length < 2) {
      addIssue(report, severity, 'OPTIONS_MISSING', 'Pilihan jawaban tidak lengkap.', path);
      return false;
    }

    const values = keys.map(k => normalizedText(q.opts[k]));
    if (values.some(v => !v)) {
      addIssue(report, severity, 'OPTION_EMPTY', 'Ada pilihan jawaban kosong.', path);
    }
    if (new Set(values).size !== values.length) {
      addIssue(report, 'warning', 'OPTION_DUPLICATE_TEXT', 'Ada pilihan jawaban dengan teks identik.', path);
    }
    return true;
  }

  function validateChoiceAnswer(report, q, path, blocking) {
    const severity = blocking ? 'critical' : 'warning';
    const keys = optionKeys(q.opts);
    const type = q.type || 'single';

    if (type === 'multi') {
      if (!Array.isArray(q.ans) || q.ans.length < 2) {
        addIssue(report, severity, 'MULTI_ANSWER_INVALID', 'Multiple-response harus memiliki minimal dua jawaban.', path);
        return;
      }
      if (new Set(q.ans.map(String)).size !== q.ans.length) {
        addIssue(report, severity, 'MULTI_ANSWER_DUPLICATE', 'Multiple-response memiliki jawaban duplikat.', path);
      }
      q.ans.forEach(a => {
        if (!keys.includes(String(a))) {
          addIssue(report, severity, 'ANSWER_NOT_IN_OPTIONS', 'Jawaban tidak ditemukan dalam pilihan: ' + a, path);
        }
      });
      if (q.pick != null && Number(q.pick) !== q.ans.length) {
        addIssue(report, 'warning', 'MULTI_PICK_MISMATCH', 'Nilai pick tidak sama dengan jumlah jawaban benar.', path);
      }
    } else {
      if (!keys.includes(String(q.ans))) {
        addIssue(report, severity, 'ANSWER_NOT_IN_OPTIONS', 'Jawaban tidak ditemukan dalam pilihan: ' + q.ans, path);
      }
    }
  }

  function validateMatching(report, q, path, blocking) {
    const severity = blocking ? 'critical' : 'warning';
    if (!isObject(q.left) || !isObject(q.right) || !isObject(q.ans)) {
      addIssue(report, severity, 'MATCHING_STRUCTURE_INVALID', 'Struktur matching tidak lengkap.', path);
      return;
    }
    const leftKeys = Object.keys(q.left);
    const rightKeys = Object.keys(q.right);
    if (leftKeys.length < 2 || rightKeys.length < 2) {
      addIssue(report, severity, 'MATCHING_TOO_SHORT', 'Matching memerlukan minimal dua pasangan.', path);
    }
    leftKeys.forEach(k => {
      if (!(k in q.ans)) {
        addIssue(report, severity, 'MATCHING_ANSWER_MISSING', 'Jawaban pasangan tidak tersedia untuk item ' + k + '.', path);
      } else if (!rightKeys.includes(String(q.ans[k]))) {
        addIssue(report, severity, 'MATCHING_TARGET_INVALID', 'Target pasangan tidak ditemukan untuk item ' + k + '.', path);
      }
    });
    const mapped = leftKeys.map(k => String(q.ans[k]));
    if (new Set(mapped).size !== mapped.length) {
      addIssue(report, 'warning', 'MATCHING_TARGET_REUSED', 'Satu target matching digunakan lebih dari sekali.', path);
    }
  }

  function validateSequence(report, q, path, blocking) {
    const severity = blocking ? 'critical' : 'warning';
    if (!isObject(q.items) || !Array.isArray(q.ans)) {
      addIssue(report, severity, 'SEQUENCE_STRUCTURE_INVALID', 'Struktur sequencing tidak lengkap.', path);
      return;
    }
    const keys = Object.keys(q.items);
    if (keys.length < 3) {
      addIssue(report, severity, 'SEQUENCE_TOO_SHORT', 'Sequencing memerlukan minimal tiga item.', path);
    }
    if (q.ans.length !== keys.length || new Set(q.ans.map(String)).size !== keys.length ||
        q.ans.some(k => !keys.includes(String(k)))) {
      addIssue(report, severity, 'SEQUENCE_ANSWER_INVALID', 'Urutan jawaban tidak sesuai dengan daftar item.', path);
    }
  }

  function validateArtifact(report, q, path, blocking) {
    const severity = blocking ? 'critical' : 'warning';
    if (!isObject(q.artifact)) {
      addIssue(report, severity, 'ARTIFACT_MISSING', 'Data artifact tidak tersedia.', path);
      return;
    }
    if (q.artifact.type === 'table') {
      const headers = q.artifact.headers;
      const rows = q.artifact.rows;
      if (!Array.isArray(headers) || headers.length < 2 || !Array.isArray(rows) || !rows.length) {
        addIssue(report, severity, 'ARTIFACT_TABLE_INVALID', 'Tabel artifact tidak lengkap.', path);
      } else {
        rows.forEach((row, idx) => {
          if (!Array.isArray(row) || row.length !== headers.length) {
            addIssue(report, severity, 'ARTIFACT_ROW_INVALID', 'Jumlah kolom baris artifact tidak konsisten.', path + ' row ' + (idx + 1));
          }
        });
      }
    }
    validateOptionObject(report, q, path, blocking);
    validateChoiceAnswer(report, q, path, blocking);
  }

  function resolveScenario(q) {
    try {
      if (typeof ecoResolveCaseScenario === 'function') {
        const resolved = clean(ecoResolveCaseScenario(q));
        if (resolved) return resolved;
      }
    } catch (e) {}
    return clean(q && (q.scenario || q.caseText));
  }

  function validateCaseParent(report, q, path, blocking) {
    const severity = blocking ? 'critical' : 'warning';
    const scenario = resolveScenario(q);
    if (scenario.length < 80) {
      addIssue(report, severity, 'CASE_SCENARIO_MISSING', 'Narasi case study kosong atau terlalu pendek.', path);
    }
    if (!Array.isArray(q.questions) || q.questions.length < 5) {
      addIssue(report, severity, 'CASE_QUESTIONS_MISSING', 'Case study harus memiliki minimal lima subsoal.', path);
      return;
    }
    q.questions.forEach((sq, idx) => {
      const childPath = path + ' subquestion ' + (idx + 1);
      if (!clean(sq.q)) addIssue(report, severity, 'QUESTION_TEXT_EMPTY', 'Teks subsoal kosong.', childPath);
      validateOptionObject(report, sq, childPath, blocking);
      validateChoiceAnswer(report, Object.assign({type: 'single'}, sq), childPath, blocking);
      if (!clean(sq.exp || q.exp)) {
        addIssue(report, severity, 'EXPLANATION_EMPTY', 'Pembahasan subsoal kosong.', childPath);
      }
    });
  }

  function validateCaseItem(report, q, path, blocking) {
    const severity = blocking ? 'critical' : 'warning';
    if (resolveScenario(q).length < 80) {
      addIssue(report, severity, 'CASE_SCENARIO_MISSING', 'Narasi case item kosong atau terlalu pendek.', path);
    }
    if (!clean(q.caseGroupId)) addIssue(report, severity, 'CASE_GROUP_ID_MISSING', 'Case item tidak memiliki caseGroupId.', path);
    if (!(Number(q.casePosition) >= 1) || !(Number(q.caseTotal) >= 1)) {
      addIssue(report, severity, 'CASE_POSITION_INVALID', 'Posisi case item tidak valid.', path);
    }
    if (!clean(q.q)) addIssue(report, severity, 'QUESTION_TEXT_EMPTY', 'Teks case item kosong.', path);
    validateOptionObject(report, q, path, blocking);
    const responseType = q.responseType === 'multi' || Array.isArray(q.ans) ? 'multi' : 'single';
    validateChoiceAnswer(report, Object.assign({}, q, {type: responseType}), path, blocking);
    if (responseType === 'multi' && Number(q.pick) !== q.ans.length) {
      addIssue(report, severity, 'CASE_MULTI_PICK_INVALID', 'Jumlah pilihan yang harus dipilih tidak sesuai dengan jawaban case item.', path);
    }
    if (!clean(q.exp)) addIssue(report, severity, 'EXPLANATION_EMPTY', 'Pembahasan case item kosong.', path);
  }

  function validateQuestion(report, q, path, options) {
    const opts = options || {};
    const blocking = opts.blocking !== false;
    const requireMetadata = !!opts.requireMetadata;
    const severity = blocking ? 'critical' : 'warning';

    if (!isObject(q)) {
      addIssue(report, severity, 'QUESTION_NOT_OBJECT', 'Data soal bukan objek yang valid.', path);
      return;
    }

    const type = q.type || 'single';
    if (!ALLOWED_TYPES.has(type)) {
      addIssue(report, severity, 'QUESTION_TYPE_UNKNOWN', 'Tipe soal tidak dikenal: ' + type, path);
      return;
    }

    if (type === 'casestudy') {
      validateCaseParent(report, q, path, blocking);
    } else if (type === 'caseitem') {
      validateCaseItem(report, q, path, blocking);
    } else if (type === 'matching') {
      if (!clean(q.q)) addIssue(report, severity, 'QUESTION_TEXT_EMPTY', 'Teks matching kosong.', path);
      validateMatching(report, q, path, blocking);
      if (!clean(q.exp)) addIssue(report, severity, 'EXPLANATION_EMPTY', 'Pembahasan matching kosong.', path);
    } else if (type === 'sequence') {
      if (!clean(q.q)) addIssue(report, severity, 'QUESTION_TEXT_EMPTY', 'Teks sequencing kosong.', path);
      validateSequence(report, q, path, blocking);
      if (!clean(q.exp)) addIssue(report, severity, 'EXPLANATION_EMPTY', 'Pembahasan sequencing kosong.', path);
    } else if (type === 'artifact') {
      if (!clean(q.q || q.q2)) addIssue(report, severity, 'QUESTION_TEXT_EMPTY', 'Teks artifact kosong.', path);
      validateArtifact(report, q, path, blocking);
      if (!clean(q.exp)) addIssue(report, severity, 'EXPLANATION_EMPTY', 'Pembahasan artifact kosong.', path);
    } else {
      if (!clean(q.q)) addIssue(report, severity, 'QUESTION_TEXT_EMPTY', 'Teks pertanyaan kosong.', path);
      validateOptionObject(report, q, path, blocking);
      validateChoiceAnswer(report, q, path, blocking);
      if (!clean(q.exp || q.hint)) addIssue(report, severity, 'EXPLANATION_EMPTY', 'Pembahasan dan hint kosong.', path);
    }

    if (requireMetadata) {
      if (!clean(q.bankId)) addIssue(report, severity, 'BANK_ID_MISSING', 'bankId soal kosong.', path);
      if (!ALLOWED_DOMAINS.has(q.domain)) addIssue(report, severity, 'DOMAIN_INVALID', 'Domain ECO tidak valid: ' + q.domain, path);
      if (!ALLOWED_APPROACHES.has(q.approach)) addIssue(report, severity, 'APPROACH_INVALID', 'Approach tidak valid: ' + q.approach, path);
      if (!ALLOWED_APPROACH_GROUPS.has(q.approachGroup)) {
        addIssue(report, severity, 'APPROACH_GROUP_INVALID', 'Approach group tidak valid: ' + q.approachGroup, path);
      } else if ((q.approach === 'Predictive' ? 'Predictive' : 'Adaptive') !== q.approachGroup) {
        addIssue(report, severity, 'APPROACH_GROUP_MISMATCH', 'Approach dan approach group tidak konsisten.', path);
      }
      if (typeof ECO2026_TASKS !== 'undefined') {
        if (!clean(q.ecoTask) || !(q.ecoTask in ECO2026_TASKS)) {
          addIssue(report, severity, 'ECO_TASK_INVALID', 'ECO task tidak valid: ' + q.ecoTask, path);
        } else if (clean(q.ecoTaskName) !== clean(ECO2026_TASKS[q.ecoTask])) {
          addIssue(report, severity, 'ECO_TASK_NAME_MISMATCH', 'Nama ECO task tidak konsisten.', path);
        }
      }
      if (!clean(q.source)) addIssue(report, 'warning', 'SOURCE_MISSING', 'Sumber soal tidak dicantumkan.', path);
    }
  }

  function validateExamBank(report) {
    if (typeof EXAM_FULL_BANK === 'undefined' || !Array.isArray(EXAM_FULL_BANK)) {
      addIssue(report, 'critical', 'EXAM_BANK_NOT_LOADED', 'Bank soal Exam gagal dimuat.', 'EXAM_FULL_BANK');
      return;
    }

    report.metrics.examQuestions = EXAM_FULL_BANK.length;
    if (EXAM_FULL_BANK.length !== EXPECTED_EXAM_BANK_SIZE) {
      addIssue(report, 'critical', 'EXAM_BANK_SIZE', 'Jumlah bank Exam harus ' + EXPECTED_EXAM_BANK_SIZE + ', ditemukan ' + EXAM_FULL_BANK.length + '.', 'EXAM_FULL_BANK');
    }

    const ids = new Set();
    const typeCounts = {};
    const taskCoverage = new Set();

    EXAM_FULL_BANK.forEach((q, idx) => {
      const path = 'EXAM_FULL_BANK[' + idx + '] ' + (q && q.bankId ? q.bankId : '');
      validateQuestion(report, q, path, {blocking: true, requireMetadata: true});
      const type = q && (q.type || 'single');
      typeCounts[type] = (typeCounts[type] || 0) + 1;
      if (q && q.ecoTask) taskCoverage.add(q.ecoTask);
      if (q && clean(q.bankId)) {
        if (ids.has(q.bankId)) addIssue(report, 'critical', 'BANK_ID_DUPLICATE', 'bankId duplikat: ' + q.bankId, path);
        ids.add(q.bankId);
      }
    });

    const minimums = {single: 129, multi: 15, matching: 6, sequence: 4, artifact: 6, casestudy: 4};
    Object.keys(minimums).forEach(type => {
      if ((typeCounts[type] || 0) < minimums[type]) {
        addIssue(report, 'critical', 'TYPE_POOL_INSUFFICIENT', 'Pool tipe ' + type + ' kurang dari kebutuhan minimum.', 'EXAM_FULL_BANK');
      }
    });

    report.metrics.ecoTasks = taskCoverage.size;
    if (typeof ECO2026_TASKS === 'undefined' || Object.keys(ECO2026_TASKS).length !== 26) {
      addIssue(report, 'critical', 'ECO_TASK_CATALOG_INVALID', 'Katalog ECO 2026 harus berisi 26 task.', 'ECO2026_TASKS');
    } else {
      Object.keys(ECO2026_TASKS).forEach(task => {
        if (!taskCoverage.has(task)) addIssue(report, 'critical', 'ECO_TASK_NOT_COVERED', 'Tidak ada soal untuk ECO task ' + task + '.', 'EXAM_FULL_BANK');
      });
    }
  }

  function validateCaseGroups(report) {
    if (typeof EXAM_CASE_GROUPS === 'undefined' || !Array.isArray(EXAM_CASE_GROUPS)) {
      addIssue(report, 'critical', 'CASE_GROUPS_NOT_LOADED', 'Kelompok case study tidak tersedia.', 'EXAM_CASE_GROUPS');
      return;
    }

    report.metrics.caseGroups = EXAM_CASE_GROUPS.length;
    if (EXAM_CASE_GROUPS.length < 4) {
      addIssue(report, 'critical', 'CASE_GROUPS_INSUFFICIENT', 'Minimal empat kelompok case study diperlukan.', 'EXAM_CASE_GROUPS');
    }
    if (EXAM_CASE_GROUPS.length !== 7) {
      addIssue(report, 'warning', 'CASE_GROUP_COUNT_CHANGED', 'Jumlah case-study group saat ini ' + EXAM_CASE_GROUPS.length + ', bukan 7.', 'EXAM_CASE_GROUPS');
    }

    const groupIds = new Set();
    EXAM_CASE_GROUPS.forEach((group, gi) => {
      const path = 'EXAM_CASE_GROUPS[' + gi + ']';
      if (!isObject(group)) {
        addIssue(report, 'critical', 'CASE_GROUP_INVALID', 'Kelompok case study bukan objek.', path);
        return;
      }
      const gid = clean(group.id);
      if (!gid) addIssue(report, 'critical', 'CASE_GROUP_ID_MISSING', 'ID kelompok case study kosong.', path);
      else if (groupIds.has(gid)) addIssue(report, 'critical', 'CASE_GROUP_ID_DUPLICATE', 'ID kelompok case study duplikat: ' + gid, path);
      groupIds.add(gid);

      if (clean(group.scenario).length < 80) {
        addIssue(report, 'critical', 'CASE_GROUP_SCENARIO_MISSING', 'Narasi kelompok case study kosong atau terlalu pendek.', path);
      }
      if (!Array.isArray(group.items) || group.items.length < 5) {
        addIssue(report, 'critical', 'CASE_GROUP_ITEMS_INSUFFICIENT', 'Kelompok case study memerlukan minimal lima item.', path);
        return;
      }
      group.items.forEach((q, qi) => {
        const itemPath = path + '.items[' + qi + ']';
        validateQuestion(report, q, itemPath, {blocking: true, requireMetadata: true});
        if (q.caseGroupId !== group.id) {
          addIssue(report, 'critical', 'CASE_GROUP_LINK_MISMATCH', 'caseGroupId item tidak sesuai dengan kelompok.', itemPath);
        }
        if (clean(q.scenario) !== clean(group.scenario)) {
          addIssue(report, 'critical', 'CASE_SCENARIO_LINK_MISMATCH', 'Narasi item tidak sama dengan narasi kelompok.', itemPath);
        }
      });
    });
  }

  function validateGeneratedSets(report, runs) {
    const runCount = Math.max(1, Number(runs) || 1);
    if (typeof createEco2026ExamSet !== 'function' || typeof validateEco2026ExamSet !== 'function') {
      addIssue(report, 'critical', 'GENERATOR_NOT_LOADED', 'Generator ECO 2026 tidak tersedia.', 'createEco2026ExamSet');
      return;
    }

    for (let i = 0; i < runCount; i++) {
      try {
        const set = createEco2026ExamSet({rng: seededRng(20260804 + i * 7919), recentIds: []});
        const check = validateEco2026ExamSet(set);
        if (!check || !check.ok) {
          addIssue(report, 'critical', 'GENERATED_SET_INVALID', 'Generator menghasilkan set yang tidak valid.', 'generator run ' + (i + 1), check && check.errors ? check.errors.join(', ') : '');
          continue;
        }
        set.forEach((q, idx) => validateQuestion(report, q, 'generated[' + i + '][' + idx + ']', {blocking: true, requireMetadata: true}));
      } catch (error) {
        addIssue(report, 'critical', 'GENERATOR_EXCEPTION', 'Generator melempar error.', 'generator run ' + (i + 1), error && error.message ? error.message : String(error));
      }
    }
    report.metrics.generatorRuns = runCount;
  }

  function validatePracticeQuestionBasic(q) {
    if (!isObject(q)) return 'data bukan objek';
    const type = q.type || 'single';
    if (!clean(q.q) && type !== 'casestudy') return 'teks pertanyaan kosong';
    if (type === 'matching') {
      if (!isObject(q.left) || !isObject(q.right) || !isObject(q.ans)) return 'struktur matching tidak lengkap';
      return '';
    }
    if (type === 'sequence') {
      if (!isObject(q.items) || !Array.isArray(q.ans)) return 'struktur sequence tidak lengkap';
      return '';
    }
    if (type === 'artifact') {
      if (!isObject(q.artifact) || !isObject(q.opts) || !(String(q.ans) in q.opts)) return 'struktur artifact tidak lengkap';
      return '';
    }
    if (type === 'casestudy') {
      if (resolveScenario(q).length < 80 || !Array.isArray(q.questions) || q.questions.length < 1) return 'struktur case study tidak lengkap';
      return '';
    }
    if (!isObject(q.opts) || Object.keys(q.opts).length < 2) return 'pilihan jawaban tidak lengkap';
    if (Array.isArray(q.ans)) {
      if (!q.ans.length || q.ans.some(a => !(String(a) in q.opts))) return 'jawaban multiple-response tidak valid';
    } else if (!(String(q.ans) in q.opts)) return 'jawaban tidak ditemukan dalam pilihan';
    return '';
  }

  function validatePracticeSets(report) {
    if (typeof QDATA === 'undefined' || !isObject(QDATA)) {
      addIssue(report, 'warning', 'PRACTICE_BANK_NOT_AVAILABLE', 'Bank latihan belum tersedia saat validasi.', 'QDATA');
      return;
    }

    const configIds = [];
    if (typeof SET_CONFIG !== 'undefined' && Array.isArray(SET_CONFIG)) {
      SET_CONFIG.forEach(cfg => { if (cfg && cfg.id) configIds.push(cfg.id); });
    } else {
      Object.keys(QDATA).forEach(id => configIds.push(id));
    }

    let total = 0;
    configIds.forEach(id => {
      const questions = QDATA[id];
      if (!Array.isArray(questions) || !questions.length) {
        addIssue(report, 'warning', 'PRACTICE_SET_EMPTY', 'Set latihan kosong atau tidak tersedia: ' + id, 'QDATA.' + id);
        return;
      }
      total += questions.length;
      const problems = [];
      questions.forEach((q, idx) => {
        const problem = validatePracticeQuestionBasic(q);
        if (problem && problems.length < 5) problems.push('#' + (q && q.n != null ? q.n : idx + 1) + ': ' + problem);
      });
      if (problems.length) {
        addIssue(report, 'warning', 'PRACTICE_SET_ISSUES', 'Ditemukan masalah dasar pada set ' + id + '.', 'QDATA.' + id, problems.join('; '));
      }
    });

    if (typeof CAPM_EXAM_BANK_RAW !== 'undefined' && Array.isArray(CAPM_EXAM_BANK_RAW)) {
      total += CAPM_EXAM_BANK_RAW.length;
      const capmProblems = [];
      CAPM_EXAM_BANK_RAW.forEach((q, idx) => {
        const problem = validatePracticeQuestionBasic(q);
        if (problem && capmProblems.length < 5) capmProblems.push('#' + (q && q.n != null ? q.n : idx + 1) + ': ' + problem);
      });
      if (capmProblems.length) {
        addIssue(report, 'warning', 'CAPM_EXAM_BANK_ISSUES', 'Ditemukan masalah dasar pada bank CAPM Exam.', 'CAPM_EXAM_BANK_RAW', capmProblems.join('; '));
      }
    }

    report.metrics.practiceQuestions = total;
  }

  function summarize(report) {
    report.ok = report.critical.length === 0;
    report.summary = report.ok
      ? 'Question bank valid'
      : report.critical.length + ' critical validation error(s)';
    return report;
  }

  function statusMessage(report) {
    if (!report) return '⏳ Memvalidasi question bank...';
    if (!report.ok) return '⛔ Question bank gagal validasi · ' + report.critical.length + ' error kritis';
    if (report.warnings.length) return '✅ Question bank valid · ' + report.warnings.length + ' peringatan nonkritis';
    return '✅ Question bank valid · 550 soal · 7 case study · 26 ECO task';
  }

  function setExamButtonsDisabled(disabled) {
    if (typeof document === 'undefined') return;
    const buttons = document.querySelectorAll(
      '#exam-start-btn, #exam-continue-btn, [onclick*="generateNewExam"]'
    );
    buttons.forEach(button => {
      button.disabled = !!disabled;
      if (disabled) {
        button.dataset.qualityGateDisabled = '1';
        button.style.opacity = '0.48';
        button.style.cursor = 'not-allowed';
      } else if (button.dataset.qualityGateDisabled === '1') {
        delete button.dataset.qualityGateDisabled;
        button.style.opacity = '';
        button.style.cursor = '';
      }
    });
  }

  function renderStatus(report) {
    if (typeof document === 'undefined') return;
    const el = document.getElementById('exam-quality-gate-status');
    if (!el) return;
    el.textContent = statusMessage(report);
    el.style.color = !report ? 'var(--muted)' : report.ok ? 'var(--teal)' : 'var(--coral)';
    el.style.fontWeight = report && !report.ok ? '700' : '600';
    if (report) {
      const details = []
        .concat(report.critical.map(x => 'ERROR ' + x.code + ': ' + x.message + (x.reference ? ' [' + x.reference + ']' : '')))
        .concat(report.warnings.map(x => 'WARNING ' + x.code + ': ' + x.message + (x.reference ? ' [' + x.reference + ']' : '')));
      el.title = details.length ? details.slice(0, 20).join('\n') : 'Seluruh pemeriksaan kritis berhasil.';
    }
    setExamButtonsDisabled(report ? !report.ok : false);
  }

  function logReport(report) {
    if (typeof console === 'undefined') return;
    const method = report.ok ? 'info' : 'error';
    console[method]('[ExamPro Quality Gate]', report.summary, {
      metrics: report.metrics,
      critical: report.critical,
      warnings: report.warnings
    });
  }

  function runAll(options) {
    const opts = options || {};
    if (state.running) return state.lastReport;
    state.running = true;
    const report = createReport();
    try {
      validateExamBank(report);
      validateCaseGroups(report);
      validateGeneratedSets(report, opts.generatorRuns == null ? 2 : opts.generatorRuns);
      validatePracticeSets(report);
    } catch (error) {
      addIssue(report, 'critical', 'QUALITY_GATE_EXCEPTION', 'Quality Gate mengalami error internal.', 'runAll', error && error.stack ? error.stack : String(error));
    }
    summarize(report);
    state.lastReport = report;
    state.lastRunAt = Date.now();
    state.running = false;
    renderStatus(report);
    logReport(report);
    try {
      if (typeof global.dispatchEvent === 'function' && typeof CustomEvent === 'function') {
        global.dispatchEvent(new CustomEvent('exampro:quality-gate', {detail: report}));
      }
    } catch (e) {}
    return report;
  }

  function ensureReady(options) {
    const opts = options || {};
    const maxAge = opts.maxAgeMs == null ? 300000 : Number(opts.maxAgeMs);
    const shouldRun = !state.lastReport || !state.lastReport.ok || (Date.now() - state.lastRunAt > maxAge);
    const report = shouldRun ? runAll({generatorRuns: opts.generatorRuns == null ? 1 : opts.generatorRuns}) : state.lastReport;
    if (!report || !report.ok) {
      if (!opts.silent && typeof alert === 'function') {
        const first = report && report.critical && report.critical[0];
        alert(
          'Question bank tidak dapat digunakan karena gagal validasi.' +
          (first ? '\n\n' + first.message + (first.reference ? '\nLokasi: ' + first.reference : '') : '') +
          '\n\nMuat ulang halaman atau unggah kembali file data terbaru.'
        );
      }
      return false;
    }
    return true;
  }

  function validateSavedExamSet(set) {
    if (!Array.isArray(set)) return {ok: false, errors: ['saved-set-not-array']};
    try {
      if (typeof validateEco2026ExamSet !== 'function') return {ok: false, errors: ['validator-not-loaded']};
      const check = validateEco2026ExamSet(set);
      if (!check.ok) return check;
      const report = createReport();
      set.forEach((q, idx) => validateQuestion(report, q, 'savedExam[' + idx + ']', {blocking: true, requireMetadata: true}));
      summarize(report);
      return {ok: report.ok, errors: report.critical.map(x => x.code), report: report};
    } catch (error) {
      return {ok: false, errors: ['saved-set-exception'], message: error.message};
    }
  }

  function getReport() {
    return state.lastReport;
  }

  global.ExamProQualityGate = Object.freeze({
    version: VERSION,
    runAll: runAll,
    ensureReady: ensureReady,
    validateSavedExamSet: validateSavedExamSet,
    renderStatus: renderStatus,
    getReport: getReport
  });

  if (typeof document !== 'undefined') {
    const boot = function () {
      setTimeout(function () {
        try { runAll({generatorRuns: 2}); }
        catch (error) { console.error('[ExamPro Quality Gate] Boot validation failed.', error); }
      }, 0);
    };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, {once: true});
    else boot();
  }
})(typeof window !== 'undefined' ? window : globalThis);
