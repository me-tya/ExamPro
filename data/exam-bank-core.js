// ExamPro PMP Exam Bank — Core
// 180 validated core questions.
const EXAM_BANK_RAW=[...[
{n:1,domain:'People',approach:'Agile',
q:`A scrum master notices that during sprint retrospectives, team members say "everything is fine" while non-verbal cues suggest tension and disengagement. Velocity has dropped 20% over three sprints.

What should the scrum master do?`,
opts:{A:`Redesign the retrospective using anonymous written input before group discussion.`,B:`Meet privately with each team member to understand concerns before the next retrospective.`,C:`Share the velocity trend with the team and ask members to identify root causes together.`,D:`Escalate the psychological safety issue to the sponsor for a team-building intervention.`},
ans:'A',exp:`Psychological safety is built through individual trust before group openness. One-on-ones surface issues privately and help the scrum master redesign the retrospective format.`},

{n:2,domain:'People',approach:'Predictive',
q:`A project manager discovers that two senior engineers have been making technical decisions in isolation, bypassing the team review process. This has caused integration failures affecting the critical path.

What should the project manager do first?`,
opts:{A:`Escalate the bypass to the functional manager and request a formal corrective meeting.`,B:`Meet with the engineers to understand their rationale and establish a decision protocol.`,C:`Document the incidents in the issue log and raise at the next project status meeting.`,D:`Ask both engineers to present their decisions at the next team retrospective for review.`},
ans:'B',exp:`Understanding the root cause (efficiency, distrust in process, unclear ownership) before enforcing compliance leads to a sustainable solution. Escalation before conversation is premature.`},

{n:3,domain:'People',approach:'Hybrid',
q:`An agile team is transitioning to a hybrid model due to regulatory requirements. Senior developers are frustrated, saying their autonomy is being removed. Team morale is declining.

What should the project manager do?`,
opts:{A:`Acknowledge the team's concerns and explain that compliance requirements are fixed constraints.`,B:`Replace resistant members with developers who have regulated-environment experience.`,C:`Involve the team in co-designing how hybrid practices will work while meeting compliance needs.`,D:`Offer to reduce the predictive components of the hybrid model to minimize team disruption.`},
ans:'C',exp:`Involving the team in designing their constrained work model converts resistance to ownership. Acknowledging the loss while co-creating the solution is the most effective approach.`},

{n:4,domain:'People',approach:'Agile',
q:`A product owner consistently provides user stories that are too vague, causing developers to make assumptions that result in rework. Three sprint reviews have ended with stakeholder dissatisfaction.

What should the project manager recommend?`,
opts:{A:`Require the product owner to complete a user story writing course before the next sprint.`,B:`Have developers write their own acceptance criteria when PO stories are too vague.`,C:`Extend sprint length to allow more discovery time during story implementation.`,D:`Implement three-amigos refinement sessions between PO, developer, and tester before planning.`},
ans:'D',exp:`Three-amigos sessions address the root cause by creating shared understanding before commitment. They surface gaps in acceptance criteria and improve story quality without sidelining the PO.`},

{n:5,domain:'People',approach:'Predictive',
q:`A key project resource tells the project manager they have received a competing offer and will leave in two weeks unless their compensation is addressed. The project is three months from completion and this person is on the critical path.

What should the project manager do first?`,
opts:{A:`Engage HR and the functional manager to explore retention while quantifying schedule risk.`,B:`Ask the resource to document their knowledge and identify a suitable internal replacement.`,C:`Offer a completion bonus from the project contingency reserve to retain the resource.`,D:`Immediately begin cross-training another team member to reduce the dependency.`},
ans:'A',exp:`The PM cannot resolve compensation but can initiate the right channels. Quantifying the risk gives the sponsor data to make an informed retention decision. The PM advocates without overstepping authority.`},

{n:6,domain:'People',approach:'Agile',
q:`During a sprint, a team member is visibly struggling with a technical problem for three days but refuses to ask for help, causing them to miss their sprint commitments repeatedly.

What should the project manager or scrum master do?`,
opts:{A:`Ask the team member to document the blocker and raise it at the next standup.`,B:`Have a supportive private conversation to understand the barrier and explore pairing options.`,C:`Make pair programming mandatory for the sprint to ensure collaborative problem-solving.`,D:`Assign the task to a senior developer who can complete it more efficiently.`},
ans:'B',exp:`The reluctance to seek help often signals psychological safety issues or fear of judgment. A private, non-threatening conversation surfaces the real barrier and enables the right support.`},

{n:7,domain:'People',approach:'Hybrid',
q:`A distributed project team spans five countries. Communication breakdowns are frequent, with team members in some regions feeling excluded from key decisions made during calls held in inconvenient time zones.

What is the most effective solution?`,
opts:{A:`Rotate meeting times monthly so each region shares the timezone inconvenience equally.`,B:`Require all team members to attend one synchronous meeting per week regardless of timezone.`,C:`Create asynchronous decision protocols so all regions contribute without live attendance.`,D:`Ask team leads in each region to represent their team's views in the main meeting.`},
ans:'C',exp:`Asynchronous-first decision-making with synchronous touchpoints ensures all regions have a voice. This respects time zones while maintaining collaboration and documentation.`},

{n:8,domain:'People',approach:'Predictive',
q:`A project sponsor sends a message to the team lead directly (bypassing the PM) asking the team lead to add a new feature for a "quick win." The team lead begins working on it.

What should the project manager do?`,
opts:{A:`Let the team lead continue since the sponsor has authority to direct the team.`,B:`Escalate the communication breach to the sponsor's manager immediately.`,C:`Document the bypass and submit a retroactive change request on behalf of the team lead.`,D:`Reinforce communication channels with both parties and submit the request through change control.`},
ans:'D',exp:`The PM needs to restore proper channels without damaging the sponsor relationship. The feature may have merit but needs impact assessment. Private conversations with both parties are the right approach.`},

{n:9,domain:'People',approach:'Agile',
q:`An agile team has been together for a year and is in the performing stage. A new Agile coach joins and immediately restructures all ceremonies, saying the current practices are "not real scrum."

What should the project manager advise?`,
opts:{A:`Ask the coach to assess current team effectiveness first and introduce changes collaboratively.`,B:`Ask the coach to pause new practices until after the current release is complete.`,C:`Let the team vote on which practices to keep and which new ones to adopt.`,D:`Support the coach's authority to implement proper scrum practices without interference.`},
ans:'A',exp:`A performing team has evolved practices that work for them. Inspect-and-adapt means understanding current state before changing it. Imposing changes on a high-performing team can disrupt effectiveness.`},

{n:10,domain:'People',approach:'Predictive',
q:`A team member raises a concern that the project's new AI-powered quality control system will make their job redundant. Other team members share the same concern and engagement is dropping.

What should the project manager do?`,
opts:{A:`Assure the team that AI tools will augment their roles rather than replace them.`,B:`Acknowledge the concern honestly and involve the team in shaping their evolving roles.`,C:`Ask HR to communicate the organizational AI workforce strategy on behalf of the PM.`,D:`Focus the team on delivery first and address job concerns in the project closure phase.`},
ans:'B',exp:`Transparency about uncertainty combined with involving people in shaping their future builds resilience. False assurances erode trust when reality differs. PMI's modern PM role includes navigating organizational change.`},

{n:11,domain:'People',approach:'Agile',
q:`A scrum master observes that the product owner is signing off on user stories without reading them carefully, creating quality issues discovered only during sprint reviews.

What should the scrum master do?`,
opts:{A:`Escalate PO engagement issues to the project sponsor to mandate review participation.`,B:`Add a mandatory PO review sign-off step as a gate before each sprint planning session.`,C:`Discuss the pattern privately with the PO to understand constraints and propose a solution.`,D:`Ask the development team to review stories independently without PO sign-off.`},
ans:'C',exp:`Understanding the PO's constraints is more effective than adding process overhead. Lightweight alternatives (5-minute focused reviews, co-written ACs) can solve the problem without confrontation.`},

{n:12,domain:'People',approach:'Hybrid',
q:`A project is delivering a digital transformation initiative. Change resistance from middle managers is causing adoption failures. The PM has held multiple change briefings with no impact.

What is the most effective next step?`,
opts:{A:`Escalate to senior leadership to mandate middle manager compliance with the initiative.`,B:`Reduce the transformation scope to focus only on departments that are already willing.`,C:`Offer financial incentives for adoption to overcome middle management resistance.`,D:`Identify change champions among respected middle managers and involve them in co-design.`},
ans:'D',exp:`Change champions from within the resistant group are more influential than top-down mandates. Co-designing implementation addresses the root cause (lack of ownership and voice) and converts resistance to advocacy.`},

{n:13,domain:'People',approach:'Agile',
q:`After a reorg, a scrum team's key technical expert is moved to a different team. The remaining team lacks the skills to deliver the sprint goals they committed to.

What should the project manager do?`,
opts:{A:`Communicate the capacity impact to stakeholders, revise the sprint goal, and seek support.`,B:`Request the technical expert be returned from the other team immediately.`,C:`Hire a contractor to fill the skill gap before the sprint begins.`,D:`Tell the team to deliver what they can this sprint and carry the remainder to the next.`},
ans:'A',exp:`Transparency about capacity changes protects the team and stakeholders from false expectations. Revising the sprint goal reflects reality, while a longer-term skill gap plan addresses sustainability.`},

{n:14,domain:'People',approach:'Predictive',
q:`A project manager receives anonymous feedback that team members feel micromanaged and are afraid to make decisions without approval for everything. Delivery speed is suffering.

What should the project manager do?`,
opts:{A:`Create a RACI chart clearly defining approval authority for each decision type.`,B:`Reflect on own behaviors, have team conversations, and deliberately expand team decision space.`,C:`Ask each team member to document decisions where they want more autonomy.`,D:`Share the anonymous feedback in the next team meeting and ask for suggested improvements.`},
ans:'B',exp:`Self-reflection is the required first step for a PM who may be the cause. Having team conversations to understand lived experience before solutions shows leadership maturity and enables genuine change.`},

{n:15,domain:'People',approach:'Agile',
q:`Two developers on a scrum team have opposing views on code architecture. They have been debating the issue for two sprints without resolution, creating tension that is affecting the whole team.

What should the scrum master do?`,
opts:{A:`Make a decision for the team to end the debate and direct both developers to implement it.`,B:`Escalate to the technical architect to make the final architecture decision.`,C:`Facilitate a structured decision session with agreed evaluation criteria for the team to decide.`,D:`Ask each developer to implement their approach in a spike and compare the results.`},
ans:'C',exp:`A structured decision session with clear criteria (performance, maintainability, team experience) enables an objective choice. Team involvement creates buy-in for the final direction.`},

{n:16,domain:'People',approach:'Hybrid',
q:`A project manager is assigned a team where three members have significantly lower proficiency with the newly adopted agile tools. Sprint capacity is reduced and the more experienced members are frustrated.

What should the project manager do?`,
opts:{A:`Separate team members by skill level and assign experienced members to critical path work.`,B:`Replace less experienced members with contractors who already have the required skills.`,C:`Assign less experienced members only to low-priority stories that won't impact velocity.`,D:`Establish structured peer mentoring and dedicate sprint capacity for skill development.`},
ans:'D',exp:`Investment in team capability builds long-term capacity. Adjusting expectations is honest planning. Mentoring creates cross-functional strength and team cohesion — all preferred by PMI.`},

{n:17,domain:'People',approach:'Predictive',
q:`During a project status meeting, a senior stakeholder publicly criticizes a junior team member's work in front of others, causing visible distress.

What should the project manager do immediately?`,
opts:{A:`Redirect the meeting, check in privately with the team member, and address the behavior separately.`,B:`Ask the stakeholder to submit future critiques in writing to maintain a professional record.`,C:`End the meeting to prevent further distress to the team member.`,D:`Defend the team member publicly by providing context about the work quality.`},
ans:'A',exp:`Immediately defending publicly may escalate the situation. Redirecting professionally protects the team member without confrontation. Private follow-up with both parties addresses safety and behavior appropriately.`},

{n:18,domain:'People',approach:'Agile',
q:`A product owner wants to participate in all technical discussions and influence implementation decisions. Developers feel their technical autonomy is being undermined.

What should the scrum master do?`,
opts:{A:`Exclude the product owner from all technical discussions going forward.`,B:`Clarify the PO's role boundary and confirm that implementation decisions belong to the team.`,C:`Ask the team to accommodate the PO's involvement since they are the primary stakeholder.`,D:`Create a separate technical working group that the product owner cannot attend.`},
ans:'B',exp:`Clear role boundaries in scrum protect both the PO's domain (what and why) and the team's domain (how). A respectful conversation reinforcing these boundaries is the scrum master's responsibility.`},

{n:19,domain:'People',approach:'Predictive',
q:`A team member working on a critical deliverable has been absent due to a personal medical situation. The remaining team is stretched thin. The timeline is at risk.

What should the project manager do?`,
opts:{A:`Distribute the absent member's work immediately across the remaining team members.`,B:`Request a project timeline extension from the project sponsor.`,C:`Assess the schedule impact, identify coverage options, and communicate risk to stakeholders.`,D:`Hire a temporary contractor immediately to fill the gap.`},
ans:'C',exp:`Assessing before acting prevents overreaction. Empathy for the team during personal crises maintains morale. Transparent communication about risk allows stakeholders to make informed decisions.`},

{n:20,domain:'People',approach:'Agile',
q:`An agile team consistently demonstrates strong self-organization and delivers above-average velocity. The organization's new PM governance framework now requires detailed weekly status reports from all project managers.

What should the project manager do?`,
opts:{A:`Exempt the high-performing team from governance reporting given their delivery track record.`,B:`Implement the full weekly reporting framework as required by the PMO governance policy.`,C:`Ask the team to prepare the reports themselves to minimize project management overhead.`,D:`Work with the PMO to determine how existing information radiators can satisfy governance needs.`},
ans:'D',exp:`Information radiators (burndown charts, sprint summaries, dashboards) often satisfy governance needs without adding overhead. The PM should bridge the team's agile transparency and organizational governance needs creatively.`},

{n:21,domain:'People',approach:'Hybrid',
q:`A project manager is leading a sustainability initiative that will require significant behavior changes from operations staff. Staff surveys show 60% negative sentiment about the project.

What is the most appropriate approach to change management?`,
opts:{A:`Design a structured change management plan with targeted engagement for resistant staff.`,B:`Pilot the changes in one willing department before expanding to the resistant ones.`,C:`Hire change management consultants to lead stakeholder communication and training.`,D:`Mandate adoption and define clear consequences for departments that do not comply.`},
ans:'A',exp:`A comprehensive OCM plan (awareness, desire, knowledge, ability, reinforcement) with authentic leadership visible support is the most effective approach for large behavioral changes. Pilots without the full plan still risk the same issues.`},

{n:22,domain:'People',approach:'Agile',
q:`Team members report that the project manager frequently joins daily standups and starts directing who should work on what. The scrum master is present but does not intervene.

What should the scrum master do?`,
opts:{A:`Allow the PM to continue since they have formal organizational authority over delivery.`,B:`Speak privately with the PM to explain the impact and agree on appropriate boundaries.`,C:`Ask team members to raise the issue themselves in the next retrospective.`,D:`Stop inviting the PM to standups to protect the team's self-organization.`},
ans:'B',exp:`The scrum master protects the team's self-organization as part of their role. A private conversation with the PM about appropriate standup participation preserves both relationships and team autonomy.`},

{n:23,domain:'People',approach:'Predictive',
q:`A project team is working on an AI implementation project. Two data scientists disagree about the appropriate model, and the PM does not have technical expertise to adjudicate.

What should the project manager do?`,
opts:{A:`Ask the sponsor to make the decision since architecture is a strategic organizational choice.`,B:`Make a decision based on the majority vote of the technical team members.`,C:`Facilitate a structured technical evaluation using agreed criteria so the team decides.`,D:`Hire an external AI consultant to provide an independent technical recommendation.`},
ans:'C',exp:`The PM facilitates structured decision-making with clear criteria. SME input and user perspective ensure technical soundness and adoptability. The PM does not need technical expertise to facilitate a good decision process.`},

{n:24,domain:'People',approach:'Agile',
q:`A high-performing team member announces they are leaving the company in one month. The team is demoralized, and the sprint after the announcement sees a 35% velocity drop.

What should the project manager prioritize?`,
opts:{A:`Post a job requisition for a replacement immediately to minimize disruption.`,B:`Ask the departing member to document all their knowledge before their last day.`,C:`Reassign their work to other team members immediately to reduce anxiety about coverage.`,D:`Acknowledge team feelings, facilitate knowledge transfer planning, and work on backfill.`},
ans:'D',exp:`The velocity drop is an emotional response to loss. Acknowledging feelings first is psychologically sound. A collaborative transition plan (not just documentation) addresses both the practical and human dimensions.`},

{n:25,domain:'People',approach:'Hybrid',
q:`A project manager is leading a cross-functional team where members from different departments have conflicting objectives. The marketing team wants speed to market while the engineering team insists on quality gates.

What is the most effective approach?`,
opts:{A:`Facilitate a joint session where both teams articulate objectives and co-create an integrated plan.`,B:`Apply a weighted scoring model to determine which objectives should take priority.`,C:`Assign separate leads for each team and manage the conflict at the PM level.`,D:`Escalate the conflict to the steering committee to make a priority decision.`},
ans:'A',exp:`Co-created shared success criteria convert opposition into joint ownership. Both teams need to understand each other's legitimate constraints. This is integration management at its best.`},

{n:26,domain:'People',approach:'Agile',
q:`A scrum team discovers that one team member has been completing their tasks early but not helping others, causing some stories to carry over every sprint while their personal metrics look great.

What should the scrum master address?`,
opts:{A:`Add a collaboration metric to the team member's individual performance review.`,B:`Facilitate a team conversation about collective ownership and the value of finishing together.`,C:`Ask the team member to take additional stories when they finish early.`,D:`Remove the team member from sprint commitment until their behavior changes.`},
ans:'B',exp:`Scrum succeeds on collective ownership. Facilitating understanding of why team success matters more than individual task completion builds the right mindset. Punitive or administrative responses miss the cultural point.`},

{n:27,domain:'People',approach:'Predictive',
q:`A project manager is presented with evidence that a team member has been accessing and sharing client data in violation of confidentiality agreements. The team member says the data was needed for "better project outcomes."

What should the project manager do immediately?`,
opts:{A:`Issue a formal warning and closely monitor the team member's access going forward.`,B:`Discuss the situation with the team member to determine if there was a business need.`,C:`Stop the behavior, secure the data, escalate to legal and security, and document everything.`,D:`Quietly remove data access and handle it through internal HR channels.`},
ans:'C',exp:`A data confidentiality breach is a legal and ethical issue requiring immediate escalation regardless of intent. Intentions do not override legal obligations. The PM must follow established security/legal protocols.`},

{n:28,domain:'People',approach:'Agile',
q:`A stakeholder regularly joins sprint reviews and asks detailed technical questions that derail the demo and frustrate the team. The review is meant to gather feedback, not conduct technical audits.

What should the project manager do?`,
opts:{A:`Exclude the stakeholder from sprint reviews to protect the demo agenda.`,B:`Ask developers to prepare answers to anticipated technical questions in advance.`,C:`Shorten sprint reviews to limit opportunities for technical tangents.`,D:`Set ground rules for the sprint review in advance and redirect technical questions post-meeting.`},
ans:'D',exp:`Structuring sprint reviews with agenda and ground rules preserves their purpose. Offering a separate technical session respects the stakeholder's legitimate interest while protecting the feedback loop.`},

{n:29,domain:'People',approach:'Hybrid',
q:`A project manager working on a sustainability project faces pushback from a business unit head who says the green initiatives will increase their operational costs without a clear business benefit.

What should the project manager do?`,
opts:{A:`Work with the business unit head to quantify total value including long-term ESG benefits.`,B:`Remove the business unit's requirements from scope to resolve the cost conflict.`,C:`Present regulatory compliance as the primary justification for the business unit's participation.`,D:`Ask the sponsor to mandate the business unit's compliance with the project scope.`},
ans:'A',exp:`Sustainability business cases require a total value view beyond operational cost. ESG value, regulatory risk, and brand value are legitimate benefits. Engaging the stakeholder in this analysis builds understanding and potential support.`},

{n:30,domain:'People',approach:'Agile',
q:`An agile team's retrospective consistently identifies "unclear requirements" as the top impediment. The scrum master has raised this with the product owner multiple times but nothing changes.

What should the project manager do?`,
opts:{A:`Move to predictive planning to enforce upfront requirement clarity.`,B:`Escalate the PO engagement issue to the sponsor and establish formal availability standards.`,C:`Extend sprint length to allow more time for requirement refinement.`,D:`Have the team write their own acceptance criteria to reduce dependency on the PO.`},
ans:'B',exp:`When a scrum master's coaching has failed to change PO behavior, PM-level escalation is appropriate. Formalizing PO responsibilities with executive sponsorship addresses the structural rather than individual issue.`},

{n:31,domain:'People',approach:'Predictive',
q:`A project manager is leading a team in an organization implementing AI tools for project scheduling. Two team members are anxious about being replaced by automation.

What should the project manager do?`,
opts:{A:`Assure team members that AI tools will not change their project management roles.`,B:`Focus communication on efficiency benefits without raising job security concerns.`,C:`Acknowledge concerns openly and explain how AI tools augment rather than replace PM roles.`,D:`Ask HR to communicate the organizational AI workforce strategy to the team.`},
ans:'C',exp:`Authentic engagement with AI anxiety requires honesty, not reassurance. Involving people in shaping how AI augments their work builds confidence and capability while addressing the underlying concern.`},

{n:32,domain:'People',approach:'Agile',
q:`A product owner is enthusiastic but creates unrealistic sprint goals by consistently committing to more than the team's historical velocity suggests is achievable.

What should the scrum master do?`,
opts:{A:`Tell the PO that sprint goals are the team's responsibility, not the PO's, to define.`,B:`Reduce the PO's involvement in sprint planning to prevent consistent overcommitment.`,C:`Add a buffer to every sprint to compensate for the PO's optimistic commitment pattern.`,D:`Educate the PO on velocity-based planning and co-facilitate sprint planning using capacity data.`},
ans:'D',exp:`The PO sets the sprint goal (what), but the team decides how much they can commit to (how much). Educating the PO on velocity and pull-based planning respects the PO's role while correcting the dysfunction.`},

{n:33,domain:'People',approach:'Hybrid',
q:`A project manager is managing organizational change alongside technical delivery. A respected informal leader among the staff is actively resisting the change and influencing others.

What is the most effective approach?`,
opts:{A:`Engage the informal leader directly to understand their concerns and involve them in co-design.`,B:`Ask formal management to address the informal leader's resistance directly.`,C:`Accelerate change implementation before resistance has a chance to organize.`,D:`Remove the informal leader from the project's sphere of influence.`},
ans:'A',exp:`Informal leaders have earned their influence. Converting them (not suppressing them) is the most powerful change management lever. Direct engagement and genuine listening is the first step.`},

{n:34,domain:'People',approach:'Agile',
q:`A scrum team has been together for 18 months. A retrospective exercise reveals that team members feel the scrum master does most of the facilitation work and they are becoming dependent rather than growing in facilitation capability.

What should the scrum master do?`,
opts:{A:`Explain that retrospective facilitation is the scrum master's core accountability.`,B:`Delegate retrospective facilitation to rotating team members with scrum master coaching.`,C:`Move to biweekly retrospectives since the team has reached a high maturity level.`,D:`Hire an external facilitator to bring fresh perspectives to the retrospective process.`},
ans:'B',exp:`Building team facilitation capability is a sign of mature servant leadership. Rotating facilitation with coaching builds team ownership and reduces scrum master dependency, which is a healthy evolution.`},

{n:35,domain:'People',approach:'Predictive',
q:`During a performance review cycle, a project manager discovers that a team member has been documenting false accomplishments in their self-assessment to improve their rating.

What should the project manager do?`,
opts:{A:`Correct the inaccurate entries silently and provide an accurate assessment without discussion.`,B:`Give a favorable review to avoid damaging trust and team morale at a critical project stage.`,C:`Discuss the discrepancy privately with the team member and provide accurate performance data.`,D:`Ask HR to handle the performance discrepancy to keep the PM out of the conflict.`},
ans:'C',exp:`PMI's Code of Ethics requires honesty in reporting. Addressing the discrepancy privately first is respectful; reporting through appropriate channels is required. Falsifying performance information is an integrity violation.`},

{n:36,domain:'People',approach:'Agile',
q:`A new team member from a highly directive organizational culture struggles to adapt to self-organization in the scrum team. They frequently ask for detailed instructions and feel uncomfortable making decisions without approval.

What should the scrum master do?`,
opts:{A:`Assign a senior developer to supervise and direct the new member on a daily basis.`,B:`Tell the new member that scrum requires self-organization and they must adapt quickly.`,C:`Pair the new member with clearly specified work so they can succeed in the short term.`,D:`Provide agile coaching and start with small autonomous decisions to build confidence gradually.`},
ans:'D',exp:`Cultural transition from directive to self-organizing requires incremental trust-building. Coaching, small autonomous wins, and psychological safety create the conditions for successful adaptation.`},

{n:37,domain:'People',approach:'Hybrid',
q:`A project manager is leading a transformation program. An executive sponsor is enthusiastic about the vision but cannot attend steering committee meetings and makes decisions slowly, creating program delays.

What should the project manager do?`,
opts:{A:`Establish a delegate with decision authority and a pre-agreed escalation framework.`,B:`Escalate to the CEO that the sponsor is not fulfilling their program leadership duties.`,C:`Pause all program activities that require sponsor decisions until they are available.`,D:`Make executive-level decisions independently to keep the program moving forward.`},
ans:'A',exp:`A decision framework and empowered delegate address the structural problem. Pre-agreed parameters allow decisions within boundaries without constant sponsor involvement, maintaining momentum.`},

{n:38,domain:'People',approach:'Agile',
q:`An agile team is asked to incorporate AI-assisted code review tools into their workflow. Some team members enthusiastically embrace the tools while others refuse to use them, creating inconsistency in the development process.

What should the scrum master do?`,
opts:{A:`Make AI code review mandatory as part of the Definition of Done immediately.`,B:`Facilitate a team discussion to agree on AI tool standards and address concerns transparently.`,C:`Ask tool enthusiasts to review code written by those who resist AI assistance.`,D:`Allow each developer to choose their preferred approach to code review tools.`},
ans:'B',exp:`Team standards work best when co-created. Facilitating a discussion that acknowledges concerns, allows experimentation, and reaches consensus creates sustainable adoption rather than compliance or fragmentation.`},

{n:39,domain:'People',approach:'Predictive',
q:`A project sponsor asks the project manager to assign a relative who has the required skills to the project team. The project manager is concerned about perceptions of favoritism.

What should the project manager do?`,
opts:{A:`Accept the assignment since the candidate has the required technical skills.`,B:`Decline the assignment and find an alternative resource to avoid any perception of bias.`,C:`Disclose the relationship, assess objectively against requirements, and involve appropriate governance.`,D:`Assign the relative without disclosing the relationship to avoid creating conflict.`},
ans:'C',exp:`PMI's Code of Ethics requires disclosure of conflicts of interest. Objective assessment and transparent documentation protect all parties. The decision itself may be appropriate — the transparency is mandatory.`},

{n:40,domain:'People',approach:'Agile',
q:`During a sprint, a team member discovers a workaround that allows them to mark acceptance tests as passing without actually running them. Their velocity looks impressive, but quality is deteriorating.

What should the scrum master do?`,
opts:{A:`Remove the team member from sprint activities pending a formal investigation.`,B:`Report the integrity issue to the functional manager for formal disciplinary action.`,C:`Add automated test validation technically to prevent the workaround from working.`,D:`Address the integrity issue directly with the team and reinforce that DoD standards are non-negotiable.`},
ans:'D',exp:`Gaming quality metrics is an integrity and quality issue. Direct transparent handling with the team reinforces that shortcuts violating DoD are unacceptable. The technical fix is secondary to the cultural/behavioral issue.`},

{n:41,domain:'People',approach:'Hybrid',
q:`A project manager is overseeing a team that includes both permanent employees and contractors. Permanent employees are sharing organizational knowledge freely while contractors are keeping expertise to themselves to remain indispensable.

What should the project manager do?`,
opts:{A:`Create structured knowledge-sharing processes including documentation standards and paired work.`,B:`Separate permanent and contractor workstreams to align incentive structures.`,C:`Offer contractors bonuses tied to measurable knowledge transfer outcomes.`,D:`Stop renewing contractors who decline to share their knowledge with permanent staff.`},
ans:'A',exp:`Structural solutions (contract requirements, shared documentation standards, paired work) address knowledge hoarding systematically. Making knowledge transfer a contractual expectation is more reliable than incentives or punitive action.`},

{n:42,domain:'People',approach:'Agile',
q:`A team's daily standup has evolved into a lengthy status report meeting where team members give detailed updates to the scrum master. It now runs 30-45 minutes every day.

What should the scrum master do?`,
opts:{A:`Move to weekly standups to reduce the daily meeting fatigue across the team.`,B:`Return the standup to its coordination purpose, timebox it, and coach on the correct format.`,C:`Switch to asynchronous written standups to eliminate the daily meeting format.`,D:`Make standup attendance optional for experienced and senior team members.`},
ans:'B',exp:`The standup has become a status meeting (anti-pattern). Returning to its purpose — identifying collaboration needs and blockers — with a hard 15-minute timebox restores its value as a coordination tool.`},

{n:43,domain:'People',approach:'Predictive',
q:`A project manager learns that team members in two different locations are developing competing solutions for the same component without knowing about each other's work. Three weeks of effort may need to be discarded.

What immediate action should the project manager take?`,
opts:{A:`Let both teams finish their work and then select the better solution at project end.`,B:`Assign the component to whichever team is furthest ahead in their work.`,C:`Bring both teams together immediately to share approaches and align on a single solution.`,D:`Document the duplication as a lesson learned for the project closure report.`},
ans:'C',exp:`Immediate convergence minimizes further waste and may combine the best elements. The root cause (communication gaps across locations) should also be addressed in the lessons learned and going-forward collaboration plan.`},

{n:44,domain:'People',approach:'Agile',
q:`After implementing a new agile practice, team velocity drops for two sprints. Management is concerned and asks the PM to revert to the previous approach.

What should the project manager do?`,
opts:{A:`Revert to the previous approach immediately to restore management confidence.`,B:`Tell management that agile practices require time and patience to show measurable results.`,C:`Ask the team directly whether they want to continue with the new practice.`,D:`Show management a learning curve analysis and recommend a structured evaluation period.`},
ans:'D',exp:`Evidence-based reasoning (learning curve data, trend analysis) is more persuasive than assertions. A defined evaluation period with clear metrics is more responsible than either immediate reversion or indefinite patience.`},

{n:45,domain:'People',approach:'Hybrid',
q:`A project manager is leading a team through a major organizational restructuring that coincides with project execution. Team members are distracted by uncertainty about their future roles.

What should the project manager do?`,
opts:{A:`Acknowledge uncertainty openly, create protected focus time, and work with leadership for clarity.`,B:`Accelerate project completion to reduce the team's exposure to the restructuring period.`,C:`Ask HR to address the team's concerns so the PM can maintain focus on delivery.`,D:`Tell the team to separate personal concerns from their project work responsibilities.`},
ans:'A',exp:`Compartmentalization directives rarely work during genuine uncertainty. Acknowledgment, protected focus time, and information transparency are the PM's tools for maintaining both wellbeing and productivity.`},

{n:46,domain:'People',approach:'Agile',
q:`A team is using a value stream mapping exercise and discovers that 70% of cycle time is spent waiting — for approvals, reviews, and handoffs outside the team.

What should the project manager or scrum master prioritize?`,
opts:{A:`Increase sprint length to provide more time to absorb the external waiting periods.`,B:`Identify and systematically address the external dependencies causing the most waiting time.`,C:`Hire more reviewers to speed up the external approval and handoff processes.`,D:`Accept the wait time as an unavoidable organizational constraint and adjust capacity planning.`},
ans:'B',exp:`Value stream mapping reveals systemic waste. Addressing external dependencies through stakeholder engagement (pre-scheduling reviews, empowering reviewers, establishing SLAs) eliminates waste rather than accommodating it.`},

{n:47,domain:'People',approach:'Predictive',
q:`A project manager is managing a global team across six time zones and cultures. Decisions made in synchronous meetings routinely favor the perspectives of those in the majority time zone.

What should the project manager do?`,
opts:{A:`Rotate all meetings to different time zones on a monthly schedule.`,B:`Make all decisions asynchronously to eliminate live meeting timezone bias entirely.`,C:`Implement async pre-decision processes that give all regions equal opportunity to contribute.`,D:`Ask regional team leads to represent their teams' views in synchronous meetings.`},
ans:'C',exp:`Asynchronous pre-decision contribution equalizes participation regardless of time zone. Synchronous meetings then discuss pre-submitted perspectives rather than generating them on the spot, favoring those present.`},

{n:48,domain:'People',approach:'Agile',
q:`A senior executive becomes a frequent participant in sprint planning and begins prioritizing sprint backlog items based on personal preferences rather than business value.

What should the product owner do?`,
opts:{A:`Accept the executive's prioritization since they hold senior organizational authority.`,B:`Remove the executive's access to sprint planning to protect the agile process.`,C:`Ask the scrum master to manage the executive's behavior during sprint planning sessions.`,D:`Clarify the PO's backlog authority and create structured channels for executive input.`},
ans:'D',exp:`The PO has accountability for backlog prioritization. Respecting the executive's input while maintaining PO authority requires clear role boundaries and structured input channels (stakeholder reviews, impact scoring) rather than ad-hoc override.`},

{n:49,domain:'People',approach:'Hybrid',
q:`A project manager receives a complaint from the client that the agile delivery team is "constantly changing direction" and the client cannot plan their side of the implementation.

What should the project manager do?`,
opts:{A:`Create a release roadmap with committed milestones at program level while keeping sprint agility.`,B:`Hold weekly status meetings to improve the client's visibility into delivery progress.`,C:`Ask the client to join sprint reviews to better understand iterative delivery.`,D:`Switch to predictive delivery to give the client the certainty they need.`},
ans:'A',exp:`This is a hybrid response: roadmap milestones provide client planning certainty while sprint-level agility is maintained. This demonstrates that agility and predictability can coexist at different planning horizons.`},

{n:50,domain:'People',approach:'Agile',
q:`During a sprint review, a key stakeholder says they love the features delivered but realizes that a fundamental user need has been misunderstood from the beginning, invalidating the approach taken for the past three sprints.

What should the project manager and PO do?`,
opts:{A:`Continue on the current path since abandoning three sprints of work would be wasteful.`,B:`Acknowledge the discovery, treat the three sprints as validated learning, and reassess direction.`,C:`Document the misunderstanding as a lesson learned for future similar projects.`,D:`Ask the stakeholder to formally document requirements to prevent future misunderstandings.`},
ans:'B',exp:`In lean/agile thinking, discovering a fundamental flaw early (relative to full build-out) and pivoting is a success — it prevents larger waste. Treating the sprints as learning validates the agile feedback approach.`},

{n:51,domain:'People',approach:'Predictive',
q:`A project manager is reviewing team performance and notices that a technically strong team member consistently delivers excellent work but shows no interest in mentoring junior members despite multiple requests.

What should the project manager do?`,
opts:{A:`Make mentoring a formal requirement in the team member's performance review criteria.`,B:`Reassign mentoring responsibilities to other senior team members on the project.`,C:`Explore the team member's barriers to mentoring and identify a form that works for them.`,D:`Accept that not all high performers have the aptitude or inclination for mentoring.`},
ans:'C',exp:`Understanding the reason (discomfort, time pressure, preference) before prescribing a solution enables a more effective approach. Connecting knowledge transfer to career goals often works better than mandates.`},

{n:52,domain:'People',approach:'Agile',
q:`An agile team decides in a retrospective to try a two-week "no-meeting" sprint where only the daily standup is held and all other ceremonies are dropped.

What should the scrum master advise?`,
opts:{A:`Support the experiment since retrospective decisions are fully team-driven choices.`,B:`Allow the experiment for one sprint only and evaluate the impact at the next retrospective.`,C:`Check with the project manager before allowing formal ceremonies to be modified.`,D:`Explain that ceremonies serve specific purposes and identify which specific concern to address.`},
ans:'D',exp:`Team empowerment does not mean abandoning agile structures without understanding why they exist. The scrum master's role includes coaching on the purpose of ceremonies and facilitating better solutions to the actual problems causing ceremony fatigue.`},

{n:53,domain:'People',approach:'Hybrid',
q:`A project manager needs to build a business case for a new AI implementation project. The steering committee asks about the project's value delivery approach and how business benefits will be realized.

What should the project manager include?`,
opts:{A:`A benefits realization plan with lead and lag indicators, benefit owners, and milestone reporting.`,B:`A project charter identifying measurable business objectives and key success criteria.`,C:`Technical specifications of the AI system and its key performance and accuracy metrics.`,D:`ROI calculation based on implementation cost versus projected cost savings over five years.`},
ans:'A',exp:`Modern PM practice (and the updated ECO) requires benefits realization planning that extends post-project. Lead indicators (during project) and lag indicators (post-delivery) with benefit owners ensure accountability for actual value.`},

{n:54,domain:'People',approach:'Agile',
q:`A scrum team realizes mid-sprint that they have significantly underestimated a story. Completing it would require abandoning all other sprint commitments.

What should the team do?`,
opts:{A:`Work overtime to complete all sprint commitments as originally agreed in sprint planning.`,B:`Decompose the story into a smaller shippable piece and move the remainder to the next sprint.`,C:`Deliver a partial implementation of the large story to show progress this sprint.`,D:`Cancel the sprint and replan with more accurate estimates for all remaining stories.`},
ans:'B',exp:`Decomposing and delivering the most valuable slice preserves sprint cadence and delivers partial value. Transparent communication about the impact maintains trust. This is preferable to overtime or sprint cancellation for estimation errors.`},

{n:55,domain:'People',approach:'Predictive',
q:`A project manager managing an AI project discovers that the AI model's training data contains biased historical patterns that could lead to discriminatory outcomes for certain user groups.

What should the project manager do?`,
opts:{A:`Continue the project and disclose the bias issue fully in the final documentation.`,B:`Ask the data science team to resolve the bias issue without involving broader stakeholders.`,C:`Halt model development, escalate to the sponsor and ethics/legal teams, and address root cause.`,D:`Narrow the AI application to exclude user groups most affected by the biased training data.`},
ans:'C',exp:`AI bias that could lead to discriminatory outcomes is a legal, ethical, and reputational risk requiring immediate escalation and formal risk assessment. It cannot be handled solely by the technical team.`},

{n:56,domain:'People',approach:'Agile',
q:`Two agile teams working on related products have conflicting interpretations of a shared architecture decision that is causing integration failures. Both teams' scrum masters have tried to resolve it without success.

What should the project manager do?`,
opts:{A:`Ask the enterprise architect to make the final architecture decision for both teams.`,B:`Assign one team sole ownership of the shared architecture decision going forward.`,C:`Create an architecture review board to govern all future cross-team technical decisions.`,D:`Facilitate a joint technical session with both teams and architects to establish a shared standard.`},
ans:'D',exp:`A facilitated joint session creates shared understanding and a documented decision record that both teams own. Architecture decision records prevent future conflicts. Escalation to an authority without team understanding leaves the underlying misalignment unresolved.`},

{n:57,domain:'People',approach:'Hybrid',
q:`A sustainability-focused project manager is leading a data center consolidation project. They realize that the chosen consolidation approach will significantly increase energy consumption compared to alternatives.

What should the project manager do?`,
opts:{A:`Document the sustainability impact and present alternative approaches with tradeoffs to the sponsor.`,B:`Change to the more sustainable approach without escalating for stakeholder approval.`,C:`Add sustainability metrics as a post-go-live monitoring activity without changing the approach.`,D:`Continue with the approved approach since the sponsor has formally endorsed it.`},
ans:'A',exp:`The PM has a responsibility to surface sustainability impacts to decision-makers. Presenting alternatives with quantified trade-offs enables informed decisions. Acting unilaterally or ignoring a known environmental impact both violate professional responsibility.`},

{n:58,domain:'People',approach:'Agile',
q:`A team member who excels at their current role is being considered for a team lead position. The team member expresses interest but fears they will fail at leadership and lose what they are good at.

What should the project manager do?`,
opts:{A:`Tell the team member they are clearly ready for leadership based on their performance record.`,B:`Create a development path with mentoring and small leadership opportunities to build readiness.`,C:`Assign the leadership role to another candidate who expresses more immediate confidence.`,D:`Respect the hesitation and keep the team member in their current high-performing role.`},
ans:'B',exp:`Structured development with low-stakes leadership opportunities builds genuine confidence. This develops talent while respecting the team member's authentic concerns. It serves both the individual and the organization.`},

{n:59,domain:'People',approach:'Predictive',
q:`A project manager working in a country where facilitation payments to officials are common practice is asked by a local team member to approve such a payment to expedite a regulatory permit that is on the project's critical path.

What should the project manager do?`,
opts:{A:`Approve the payment to avoid further schedule delay to a critical project milestone.`,B:`Allow the local team member to handle it discretely without formal PM knowledge.`,C:`Refuse, document the situation, and escalate to legal and senior management for a legal alternative.`,D:`Accept the schedule delay since legal compliance must always take priority over delivery dates.`},
ans:'C',exp:`Facilitation payments are bribes and illegal under anti-corruption laws (FCPA and similar) regardless of local customs. Refusal, documentation, and escalation are required. Legal alternatives should be explored for the permit delay.`},
],...[
{n:60,domain:'Process',approach:'Agile',
q:`A product owner wants to add a high-business-value story to a sprint that is already at full capacity. The team cannot take on additional work without dropping existing commitments.

What should happen?`,
opts:{A:`Add the story to the sprint anyway given its critical business value.`,B:`Ask the team to work overtime this sprint to accommodate the additional high-priority story.`,C:`Cancel the lowest-priority committed story to create capacity for the new one.`,D:`Respect the sprint commitment and add the story to the top of the backlog for next sprint.`},
ans:'D',exp:`Sprint capacity is protected in scrum. Backlog prioritization ensures high-value items are pulled first next sprint. Adding work mid-sprint undermines commitment and flow — a clear agile anti-pattern.`},

{n:61,domain:'Process',approach:'Predictive',
q:`A project has BAC=$600,000, EV=$240,000, AC=$280,000, PV=$300,000. The project manager needs to report the most likely final cost to the sponsor.

What is the EAC?`,
opts:{A:`$700,000 — calculated using EAC formula BAC/CPI: $600,000 divided by 0.88 rounded up.`,B:`$660,000 — calculated using the formula AC plus remaining budget divided by CPI.`,C:`$640,000 — estimated by adding the cost variance to the original budget at completion.`,D:`$620,000 — calculated using the EAC formula BAC divided by CPI.`},
ans:'A',exp:`CPI=EV/AC=240/280=0.857. EAC=BAC/CPI=600,000/0.857=$700,000. The project is both over budget (CPI<1) and behind schedule (SPI=240/300=0.8). EAC using CPI assumes current performance continues.`},

{n:62,domain:'Process',approach:'Hybrid',
q:`A project is using a hybrid approach. The compliance module is planned predictively with a fixed deadline, while the user interface is developed in sprints. A sprint team's UI work is now blocking the compliance module integration.

What should the project manager do?`,
opts:{A:`Pause all UI sprints until the compliance module integration work is completely finished.`,B:`Identify the specific dependency, unblock the compliance team, and establish a shared integration protocol.`,C:`Add the integration issue to the risk register and raise it at the next governance checkpoint.`,D:`Move all workstreams to a single agile approach to simplify cross-stream coordination.`},
ans:'B',exp:`Hybrid projects require managing dependencies between predictive and agile components. Pinpointing and resolving the specific blocking dependency is more effective than pausing entire workstreams.`},

{n:63,domain:'Process',approach:'Agile',
q:`A development team is consistently completing 80% of sprint backlog items. Sprint goals are always met, but carryover creates a growing tail of incomplete stories.

What is the root cause the scrum master should address?`,
opts:{A:`Sprint length is too short for the complexity of the team's typical backlog items.`,B:`Story sizes are too large and need to be broken down into smaller deliverable pieces.`,C:`The team is consistently over-committing relative to their actual velocity and capacity.`,D:`The team is spending excessive time in ceremonies rather than productive development work.`},
ans:'C',exp:`Consistent 80% completion indicates systematic over-commitment. Using historical velocity for capacity-based pull (not push) planning addresses the root cause. Story sizing issues are secondary if the velocity calibration is off.`},

{n:64,domain:'Process',approach:'Predictive',
q:`A project manager is presented with a change request that adds $300,000 in scope. The analysis shows it will reduce customer churn by 15%, saving $2M annually. The change is above the PM's approval threshold.

What should the project manager do?`,
opts:{A:`Approve the change immediately since the $2M benefit clearly justifies the $300K investment.`,B:`Implement the change now and submit formal change documentation retroactively.`,C:`Reject the change since the additional scope exceeds the current approved project budget.`,D:`Prepare a comprehensive impact analysis with the business case and submit it to the CCB.`},
ans:'D',exp:`Even when ROI is compelling, changes above the PM's authority require escalation through proper channels. The PM's role is to provide an analysis that helps decision-makers say yes or no — not to decide unilaterally.`},

{n:65,domain:'Process',approach:'Agile',
q:`An agile team is building an AI recommendation engine. The product owner wants to demo a partially functional model to stakeholders in the next sprint review. The model gives accurate results but is a "black box" — no one can explain why it makes recommendations.

What risk should the project manager flag?`,
opts:{A:`Deploying an unexplainable AI model may violate governance requirements and create legal risk.`,B:`Stakeholders may not have the technical background to interpret an incomplete model demonstration.`,C:`Sprint reviews should not showcase features or models that are not fully production-ready.`,D:`The model may not perform reliably enough for a live production environment yet.`},
ans:'A',exp:`AI explainability (XAI) is increasingly required by regulation (EU AI Act, etc.) and organizational governance. Flagging this risk early allows the PO and stakeholders to make informed decisions about explainability requirements.`},

{n:66,domain:'Process',approach:'Predictive',
q:`A project manager identifies that a vendor is consistently delivering below the contracted quality standard but is meeting the contractual SLA metrics because those metrics were poorly defined.

What should the project manager do?`,
opts:{A:`Accept delivery as compliant since all contractual SLA metrics are currently being met.`,B:`Document the quality shortfall, engage the vendor in corrective discussion, and initiate formal process.`,C:`Implement additional inspection on all vendor deliverables to compensate for the quality gap.`,D:`Terminate the vendor contract immediately given the sustained pattern of quality shortfall.`},
ans:'B',exp:`When contractual metrics don't capture actual quality, the issue is both a vendor performance and contract quality issue. Documenting, engaging the vendor, and amending the contract addresses both dimensions properly.`},

{n:67,domain:'Process',approach:'Hybrid',
q:`A project manager is conducting benefits realization tracking six months after a digital transformation project went live. Adoption is at 40% of the target, and the financial benefits are tracking at only 25% of projection.

What should the project manager recommend?`,
opts:{A:`Close benefits tracking since the project delivery phase is formally complete.`,B:`Declare the project a failure and recommend returning to the previous legacy systems.`,C:`Conduct root cause analysis of the adoption barriers and develop a targeted intervention plan.`,D:`Extend the benefits measurement period and continue monitoring without active intervention.`},
ans:'C',exp:`Benefits realization continues post-project. When benefits lag, understanding root causes (training gaps, process mismatch, insufficient change management) enables targeted interventions. Simply extending monitoring without action does not improve outcomes.`},

{n:68,domain:'Process',approach:'Agile',
q:`During sprint planning, the team estimates a user story at 21 points — significantly higher than typical stories. The story is the highest-priority item in the backlog.

What should happen?`,
opts:{A:`Accept the 21-point story as the highest-priority commitment for the sprint.`,B:`Carry the large story across two sprints to allow adequate development and testing time.`,C:`Ask the product owner to reduce the story scope until it fits within a single sprint.`,D:`Facilitate decomposition into independently deliverable sub-stories that fit the sprint.`},
ans:'D',exp:`Stories too large for a sprint (often called "epics") should be decomposed into independent, valuable slices that each deliver some outcome. Carrying stories across sprints creates tracking complexity and may miss the agile goal of frequent delivery.`},

{n:69,domain:'Process',approach:'Predictive',
q:`A risk response plan was developed for a vendor dependency risk. The risk has now occurred. The team implements the planned response, but the response is not effective. The project is delayed.

What should the project manager do?`,
opts:{A:`Implement the fallback plan and update both the risk register and the issue log accordingly.`,B:`Ask the vendor to compensate for the project delay caused by the risk materializing.`,C:`Update the project schedule to reflect the impact and continue monitoring the situation.`,D:`Escalate immediately to the project sponsor that the risk has materialized into an issue.`},
ans:'A',exp:`When a primary risk response fails, the fallback plan should be activated. Updating the risk register (converting to issue) and issue log maintains accurate project records. This is the risk management process as designed.`},

{n:70,domain:'Process',approach:'Agile',
q:`An organization is implementing a value stream management (VSM) initiative. An agile team's sprint metrics show high velocity but the VSM analysis shows the overall flow efficiency from idea to customer delivery is only 12%.

What does this indicate?`,
opts:{A:`The team's velocity metrics are being measured or reported inaccurately.`,B:`The team is locally efficient but significant systemic waste exists in handoffs and wait times.`,C:`Value stream mapping metrics are not directly applicable to agile delivery frameworks.`,D:`The team needs to increase sprint length to allow more time for improving flow efficiency.`},
ans:'B',exp:`High local velocity with low flow efficiency is a classic systemic waste indicator. Work spends most time waiting between teams, in approval queues, or in handoffs. Improving the system (not the team) is the leverage point.`},

{n:71,domain:'Process',approach:'Hybrid',
q:`A project manager is overseeing an AI governance initiative. The project charter mandates that all AI models deployed in production must have documented bias assessments and explainability reports.

A team wants to skip the explainability report for a low-risk model to save time. What should the project manager do?`,
opts:{A:`Allow the exception since the model has been classified as low risk by the project team.`,B:`Ask the sponsor to formally approve the exception for this specific production deployment.`,C:`Require compliance and facilitate generation of the required explainability documentation.`,D:`Document the charter deviation as an accepted risk and proceed with the deployment.`},
ans:'C',exp:`AI governance requirements exist for a reason, including for "low-risk" models (risk assessment itself requires consistent methodology). Helping the team comply faster addresses their legitimate time concern without compromising governance.`},

{n:72,domain:'Process',approach:'Agile',
q:`A team is using impact mapping to prioritize features. They identify three features that all lead to the same business goal. Feature A has a direct customer impact, Feature B is an internal efficiency gain, and Feature C enables other features.

In what order should these be prioritized?`,
opts:{A:`Feature C first as an architectural enabler, then Feature A, then Feature B.`,B:`Feature B first to improve internal team productivity before adding customer-facing features.`,C:`All three features simultaneously since they all support the same overarching business goal.`,D:`Feature A first for direct customer impact, then C to enable more, then B for internal efficiency.`},
ans:'D',exp:`Prioritization based on value delivery: customer-visible outcomes first (A), then enablers that unlock more value (C), then internal efficiency (B). This ordering maximizes early customer value and investment return.`},

{n:73,domain:'Process',approach:'Predictive',
q:`A project manager is preparing a go/no-go decision for a new regulatory compliance feature. Testing shows the feature meets all documented requirements, but a QA engineer raises concerns that the regulatory interpretation underlying the requirements may have changed.

What should the project manager do?`,
opts:{A:`Pause the go-live and verify the current regulatory interpretation with the compliance team.`,B:`Go live with a disclaimer in the release notes about the regulatory interpretation uncertainty.`,C:`Reject the go-live entirely since any regulatory uncertainty requires a complete feature restart.`,D:`Proceed with go-live since the feature meets all documented technical requirements.`},
ans:'A',exp:`Regulatory compliance is a non-negotiable constraint. The documented requirements being met is insufficient if the regulatory basis may have changed. A brief verification pause is far less costly than a compliance failure.`},

{n:74,domain:'Process',approach:'Agile',
q:`A product owner prioritizes refactoring and technical debt items at the top of the backlog for the next sprint, frustrating business stakeholders who want new features.

How should this be handled?`,
opts:{A:`Override the PO's prioritization and require customer features to be delivered first.`,B:`Facilitate a session where the PO presents the business case for tech investment to stakeholders.`,C:`Defer to the PO's decision since they have formal authority over all backlog prioritization.`,D:`Split the sprint capacity equally between technical debt stories and customer-visible features.`},
ans:'B',exp:`Technical debt prioritization is legitimate but stakeholders need context to understand it. The PO should quantify the benefit (e.g., "spending now prevents 30% velocity loss in three months") to make the trade-off visible. This is value delivery transparency.`},

{n:75,domain:'Process',approach:'Hybrid',
q:`A project manager is delivering an ESG (Environmental, Social, Governance) reporting system. A stakeholder from the sustainability department requests that the system track carbon emissions per project deliverable — a scope item not in the original requirements.

What should the project manager do?`,
opts:{A:`Add the ESG tracking requirement immediately since sustainability is increasingly important.`,B:`Reject the request to protect the original approved scope from any further expansion.`,C:`Analyze the impact, create a change request, and facilitate a scope discussion with stakeholders.`,D:`Add it to a future phase without formal analysis or stakeholder impact discussion.`},
ans:'C',exp:`Even valuable requests require change control. Analyzing impact and facilitating a value discussion enables an informed decision. ESG requirements can be strategically important — but that makes proper evaluation more, not less, important.`},

{n:76,domain:'Process',approach:'Agile',
q:`A team's sprint retrospective data over six months shows a recurring theme: "unclear definition of done for non-functional requirements like performance and security."

What should the team do?`,
opts:{A:`Add performance and security testing to a dedicated end-of-project quality assurance phase.`,B:`Create a separate non-functional requirements backlog track with a dedicated testing team.`,C:`Use a separate team exclusively for all non-functional requirement testing and verification.`,D:`Update the Definition of Done to include specific measurable non-functional requirement thresholds.`},
ans:'D',exp:`Non-functional requirements (NFRs) belong in the DoD so they are tested with every increment, not discovered at the end. Specific, measurable thresholds make the DoD actionable rather than vague.`},

{n:77,domain:'Process',approach:'Predictive',
q:`A project team has completed 60% of the work. The CPI is 0.91 and the SPI is 0.88. The sponsor asks if the project should continue.

What should the project manager recommend?`,
opts:{A:`Present a formal options analysis including EAC, recovery scenarios, and value of sunk investment.`,B:`Stop the project since both CPI and SPI are below 1.0 at the project midpoint.`,C:`Crash the schedule to recover the SPI before making a continuation recommendation.`,D:`Continue: the project is progressing and both metrics show recoverable variance levels.`},
ans:'A',exp:`Go/no-go decisions require more than EVM metrics. Presenting the EAC, recovery options, the value of remaining deliverables versus cost of completion, and whether the business case is still viable enables an informed executive decision.`},

{n:78,domain:'Process',approach:'Agile',
q:`An agile team is assigned to build an AI-powered chatbot for customer service. The team wants to use an iterative approach with frequent user testing. Legal raises concerns about AI-generated responses containing incorrect information.

What should the project manager ensure is in place?`,
opts:{A:`Comprehensive user testing and full security review before any external exposure begins.`,B:`Human review mechanisms, response guardrails, and clear user communication the system is AI.`,C:`An AI system that only provides factual responses sourced from a verified knowledge database.`,D:`Full legal sign-off on all AI model interactions before any user testing can commence.`},
ans:'B',exp:`Responsible AI development in iterative environments requires: human oversight mechanisms, technical guardrails, and transparency to users. This enables learning from real interactions while managing the accuracy and liability risks.`},

{n:79,domain:'Process',approach:'Hybrid',
q:`A project manager realizes that a sustainability metric (carbon footprint reduction) promised in the project business case cannot be measured by the planned system. The metric was a key justification for project approval.

What should the project manager do?`,
opts:{A:`Remove the metric from the business case since it cannot be measured by the project team.`,B:`Report the metric as achieved using reasonable estimated proxy data until measurement is possible.`,C:`Escalate to the sponsor and assess options to add measurement capability or define proxy indicators.`,D:`Wait until project completion before addressing any gaps in the measurement framework.`},
ans:'C',exp:`Business case integrity requires honest benefits measurement. Using estimated data as if measured is misleading. Escalating and assessing options (measurement tools, proxy metrics) maintains integrity and gives stakeholders choices.`},

{n:80,domain:'Process',approach:'Agile',
q:`The team is building features using an AI code generation tool. A developer raises the concern that AI-generated code may contain security vulnerabilities and open-source license conflicts.

What governance should the project manager establish?`,
opts:{A:`Ban AI code generation tools from the project to eliminate security uncertainty entirely.`,B:`Require only senior developers to use AI code generation tools on critical components.`,C:`Add a security review phase at the end of the project to scan all AI-generated code.`,D:`Establish an AI tool usage policy with mandatory security scanning and license compliance checks.`},
ans:'D',exp:`AI-generated code presents legitimate security and IP risks. A governance policy with automated scanning and mandatory review enables productivity benefits while managing risks systematically — not banning the tool or ignoring the risk.`},

{n:81,domain:'Process',approach:'Predictive',
q:`A project has a contract with a fixed-price clause for deliverable A and a cost-plus clause for deliverable B. Deliverable A is clearly defined; deliverable B is still evolving. The vendor claims significant cost increases on deliverable B.

What should the project manager do?`,
opts:{A:`Review scope and time records for deliverable B to assess whether the cost increases are justified.`,B:`Terminate the cost-plus portion and convert it to a fixed-price arrangement going forward.`,C:`Split the additional cost increase equally between the project budget and the vendor.`,D:`Approve the cost increase since deliverable B is governed by a cost-plus contract type.`},
ans:'A',exp:`Cost-plus contracts still require documented justification for actual costs incurred. Reviewing scope and time records allows the PM to validate legitimate increases versus efficiency issues before approving payment.`},

{n:82,domain:'Process',approach:'Agile',
q:`During a program increment planning event, teams identify 23 inter-team dependencies. Many are high-risk. The program manager has only 2 hours to address them.

What is the most effective approach?`,
opts:{A:`Address all 23 dependencies in sequential priority order within the time available.`,B:`Triage by risk level — address high-risk dependencies first with owners, dates, and escalation paths.`,C:`Extend the PI planning event duration to ensure all 23 dependencies are addressed.`,D:`Ask teams to resolve dependencies bilaterally in breakout sessions after the main event.`},
ans:'B',exp:`Risk-based triage under time pressure is the standard approach. High-risk dependencies need immediate structured resolution; lower-risk ones need lightweight tracking. Extending the event is disruptive; bilateral resolution misses shared visibility.`},

{n:83,domain:'Process',approach:'Hybrid',
q:`A project manager is managing a three-year transformation program. After 18 months, the organization's strategic priorities shift significantly. Some program components now deliver less value than planned.

What should the project manager do?`,
opts:{A:`Complete the program as planned since stopping mid-execution wastes significant investment.`,B:`Continue and formally document the strategic misalignment in the program closure report.`,C:`Conduct a structured program review against the new strategy and recommend stop, rescope, or continue.`,D:`Ask the project sponsor to realign the organizational strategy to match the approved program.`},
ans:'C',exp:`Value delivery is the primary purpose of project management. Continuing low-value work because of sunk cost ignores opportunity cost. A structured review with clear recommendations is the PM's professional responsibility when strategy changes.`},

{n:84,domain:'Process',approach:'Agile',
q:`A team has been releasing software every sprint for a year. A new compliance requirement mandates that all releases must pass a security penetration test that takes three weeks to complete.

What should the team do?`,
opts:{A:`Release less frequently to provide more time for penetration testing between releases.`,B:`Hire a dedicated security testing team to run parallel penetration testing for every release.`,C:`Create a security sprint between every two development sprints for dedicated testing time.`,D:`Integrate automated security scanning into CI/CD and reserve penetration testing for release candidates.`},
ans:'D',exp:`Automated security tooling (SAST, DAST) in CI/CD addresses most vulnerabilities continuously, while structured penetration testing for major releases manages the higher-risk exposure efficiently without eliminating continuous delivery.`},

{n:85,domain:'Process',approach:'Predictive',
q:`A project manager realizes that a regulatory submission planned for month 8 has a document freeze requirement at month 6. However, development is still ongoing at month 6 and changes will continue after freezing.

What should the project manager do?`,
opts:{A:`Analyze which changes are expected after month 6, assess regulated component risk, and plan accordingly.`,B:`Request an extension from the regulatory body to allow continued development past month 6.`,C:`Freeze all development at month 6 to achieve full compliance with the document freeze requirement.`,D:`Continue development and update the regulatory submission later through formal amendments.`},
ans:'A',exp:`Regulatory freeze dates are hard constraints. The PM must design a strategy: freeze regulated components, continue unregulated work, plan for amendments if needed. Ignoring the constraint or blanket freezing are both impractical.`},

{n:86,domain:'Process',approach:'Agile',
q:`A team's continuous integration pipeline is failing 40% of the time due to flaky tests, causing significant developer frustration and slow deployment.

What should the project manager prioritize?`,
opts:{A:`Disable the failing tests immediately to restore pipeline stability and release speed.`,B:`Treat flaky tests as high-priority technical debt and allocate sprint capacity to fix them.`,C:`Remove CI requirements for the specific components that have persistent flaky test problems.`,D:`Add manual verification steps for all builds that fail the flaky test checks.`},
ans:'B',exp:`A 40% failure rate makes CI meaningless — developers ignore alerts. Treating flaky tests as technical debt and dedicating sprint capacity to fix them restores CI's reliability and the team's confidence in automated quality checks.`},

{n:87,domain:'Process',approach:'Hybrid',
q:`A project manager is managing a data analytics implementation. Three months from go-live, data governance reviews reveal that the data sharing agreement with a key data provider has lapsed, making a major data source unavailable.

What should the project manager do first?`,
opts:{A:`Request emergency data governance approval to extend the expired agreement immediately.`,B:`Delay the go-live until the data sharing agreement is formally renewed and in place.`,C:`Assess impact on deliverables and business value, identify alternatives, and present options to sponsor.`,D:`Descope all analytics that depend on the unavailable external data source.`},
ans:'C',exp:`Impact assessment before action allows an informed response. Legal expedited renewal, alternative sources, and descoping are all options — but only impact analysis tells us which is appropriate and how urgently each must be pursued.`},

{n:88,domain:'Process',approach:'Agile',
q:`A scrum team is building a product that uses machine learning. The ML model performance degrades as new data patterns emerge, a phenomenon called model drift.

What process should the team embed in their delivery framework?`,
opts:{A:`Schedule annual model retraining to address accumulated performance drift over time.`,B:`Include model drift as an accepted operational risk in the project's risk register.`,C:`Use a simpler non-ML approach to eliminate model drift as a project concern entirely.`,D:`Establish automated performance monitoring with alert thresholds and a model refresh cadence.`},
ans:'D',exp:`ML systems require operational monitoring that traditional software doesn't need. Building automated drift detection and refresh processes into the delivery framework ensures the product maintains its quality commitments post-deployment.`},

{n:89,domain:'Process',approach:'Predictive',
q:`A project manager learns that a regulatory body has issued new guidance that changes how the project's deliverable must be validated. The project is 70% complete.

What should the project manager do?`,
opts:{A:`Assess whether the guidance applies, analyze the change impact, and escalate findings to the sponsor.`,B:`Complete the project deliverable first and address the new compliance in a maintenance phase.`,C:`Request a regulatory exemption for the current project based on its pre-guidance approval date.`,D:`Ignore the new guidance since the project was formally approved under the previous requirements.`},
ans:'A',exp:`Regulatory guidance changes must be assessed for applicability and impact. Ignoring them or deferring is a compliance risk. The analysis should determine whether a change request, phased compliance, or exemption is appropriate.`},

{n:90,domain:'Process',approach:'Agile',
q:`After a year of agile development, a team is asked to produce a detailed project completion report for the steering committee. The team has sprint summaries but no formal project documentation.

What should the project manager do?`,
opts:{A:`Tell the steering committee that agile projects do not produce formal project completion reports.`,B:`Compile a concise narrative from sprint summaries, key decisions, delivered outcomes, and benefits.`,C:`Produce a full formal report using standard waterfall project management documentation templates.`,D:`Reconstruct formal project documentation retrospectively to satisfy governance requirements.`},
ans:'B',exp:`Agile produces working software with lightweight documentation, but closing reports serve legitimate governance purposes. A concise narrative from existing artifacts is more credible and efficient than either refusing to report or retroactive formal documentation.`},

{n:91,domain:'Process',approach:'Hybrid',
q:`A project manager is overseeing a complex integration project connecting five legacy systems. The integration architecture was designed by an architect who has since left. Key design decisions are undocumented.

What should the project manager prioritize?`,
opts:{A:`Proceed with integration using the team's best collective understanding of the architecture.`,B:`Hire the former architect as a consultant to document the full architecture specification.`,C:`Conduct an architecture knowledge recovery session and document findings before proceeding.`,D:`Simplify the integration by reducing the number of connected legacy systems.`},
ans:'C',exp:`Proceeding without documented architecture on a complex integration creates compounding technical risk. Architecture recovery sessions surface what the team knows collectively. Gaps requiring new decisions must be formally addressed before implementation.`},

{n:92,domain:'Process',approach:'Agile',
q:`A team is delivering a product with both agile features and predictive compliance deliverables. The compliance team requires a 3-month validation cycle that doesn't fit the sprint rhythm.

How should the project manager structure delivery?`,
opts:{A:`Move all delivery to a predictive approach to accommodate the compliance validation timeline.`,B:`Delay compliance validation until all agile feature development is fully complete.`,C:`Ask the compliance team to accelerate their validation cycle to match sprint delivery cadence.`,D:`Use a hybrid model with agile feature delivery in parallel with a structured compliance validation track.`},
ans:'D',exp:`A hybrid structure that runs agile and compliance tracks in parallel, synchronizing at milestones, is the optimal solution. It maximizes both delivery velocity and compliance rigor without sacrificing either.`},

{n:93,domain:'Process',approach:'Predictive',
q:`A project manager receives a change request that increases scope by 20% but the sponsor says no budget change is available. The project is currently performing at CPI of 0.95.

What should the project manager do?`,
opts:{A:`Analyze which existing scope could be reduced or deferred to accommodate the addition within budget.`,B:`Reject the change request outright since no additional budget has been approved.`,C:`Implement the change now and submit a formal budget adjustment request afterward.`,D:`Accept the scope increase and absorb the additional cost within the existing project budget.`},
ans:'A',exp:`When scope increases with fixed budget, something must give (other scope, quality, or schedule). Presenting the sponsor with specific options (what to remove or adjust) gives them decision control while solving the constraint objectively.`},

{n:94,domain:'Process',approach:'Agile',
q:`A data science team is building a predictive model for credit risk. An internal audit team requests a complete audit trail of all model training decisions, hyperparameter choices, and data transformations.

How should the project manager ensure this is met?`,
opts:{A:`Keep informal notes that the team can reference if an audit is ever conducted.`,B:`Implement ML experiment tracking tools that automatically capture all training decisions and parameters.`,C:`Produce a post-training report documenting key model decisions and rationale.`,D:`Ask the audit team to observe training sessions directly as a transparency measure.`},
ans:'B',exp:`ML governance and audit requirements in regulated industries require systematic, automated traceability (not manual notes). ML experiment tracking tools provide immutable, comprehensive audit trails as a standard practice in responsible AI development.`},

{n:95,domain:'Process',approach:'Hybrid',
q:`A project manager is closing a Phase 1 of a multi-phase program. Several Phase 1 deliverables have known defects that are not critical but will be difficult to fix later. The sponsor wants to move immediately to Phase 2.

What should the project manager do?`,
opts:{A:`Move to Phase 2 immediately as directed by the project sponsor without further documentation.`,B:`Fix all identified defects before formally closing Phase 1 as a quality governance gate.`,C:`Document defects, assess Phase 2 impact, and formally accept or defer each through change control.`,D:`Move to Phase 2 and fix defects opportunistically if time allows during Phase 2 execution.`},
ans:'C',exp:`Carrying known defects into the next phase is a risk that must be formally accepted, not ignored. Documentation, impact assessment, and formal acceptance (or deferral with a plan) protects the program and ensures Phase 2 is planned accordingly.`},

{n:96,domain:'Process',approach:'Agile',
q:`During a sprint, a developer discovers that implementing a story requires touching a component shared with another team. Any changes risk breaking the other team's features.

What should happen?`,
opts:{A:`Proceed with the change and notify the other team after the modification is made.`,B:`Defer the story to allow adequate time for a full architectural review process.`,C:`Each team should maintain separate independent copies of the shared component.`,D:`Coordinate with the other team immediately and establish shared change protocols for the component.`},
ans:'D',exp:`Shared components require explicit coordination before changes. Establishing protocols in real-time maintains both teams' integrity. If coordination cannot be completed this sprint, deferring is better than an uncoordinated change.`},

{n:97,domain:'Process',approach:'Predictive',
q:`A project is implementing a new governance framework mandated by the board. The project manager finds that the framework requirements conflict with the organization's current IT security policy.

What should the project manager do?`,
opts:{A:`Escalate the conflict to both governance and security stakeholders and facilitate a joint resolution.`,B:`Follow the IT security policy since it represents the established organizational standard.`,C:`Implement the framework with documented exceptions for the specific conflicting security elements.`,D:`Follow the board's governance framework since it supersedes existing IT security policy.`},
ans:'A',exp:`Policy conflicts cannot be resolved unilaterally by the PM. Escalating to both governing bodies and facilitating alignment is the appropriate response. Neither framework should be applied piecemeal until the conflict is formally resolved.`},

{n:98,domain:'Process',approach:'Agile',
q:`An agile team is asked to integrate their sprint deliverables with three other teams' outputs for a quarterly release. Integration has failed the last two quarters due to interface mismatches.

What process should the project manager implement?`,
opts:{A:`Move to a big-bang integration approach to complete all integration before the quarterly release.`,B:`Implement continuous integration across all four teams with a shared integration test environment.`,C:`Assign one team sole ownership of all cross-team integration activities going forward.`,D:`Add a dedicated four-week integration sprint before each quarterly release cycle.`},
ans:'B',exp:`Recurring integration failures require structural solutions. Continuous cross-team integration with shared environments and integration tests in every DoD prevents the mismatch accumulation that causes quarterly failures.`},

{n:99,domain:'Process',approach:'Hybrid',
q:`A project manager is delivering an organizational change program. The program sponsor has high confidence in success, but the project manager's stakeholder analysis shows significant resistance in two critical departments.

What should the project manager do?`,
opts:{A:`Proceed since the sponsor's high confidence indicates sufficient organizational support exists.`,B:`Escalate to the board that the sponsor is significantly underestimating organizational resistance.`,C:`Present the resistance analysis to the sponsor and propose targeted change interventions by department.`,D:`Reduce the program scope to exclude departments showing the highest resistance levels.`},
ans:'C',exp:`The sponsor's confidence does not negate evidenced resistance. Presenting the data transparently and proposing targeted interventions is the PM's professional responsibility. Ignoring evidence to match sponsor optimism violates the PM's honesty obligation.`},

{n:100,domain:'Process',approach:'Agile',
q:`A team is delivering a sustainability data reporting platform. Stakeholders from different regions have conflicting reporting requirements due to different regulatory frameworks (EU, US, Asia-Pacific).

What should the product owner do?`,
opts:{A:`Build one universal reporting template that satisfies the most demanding regulatory jurisdiction.`,B:`Build three separate systems, each optimized for a specific regional regulatory requirement.`,C:`Prioritize EU requirements since they are the most comprehensive and globally influential.`,D:`Facilitate workshops to identify common core requirements and build a configurable reporting platform.`},
ans:'D',exp:`Configurable platforms that share a common core while supporting jurisdictional variations reduce maintenance cost and ensure compliance across regions. Facilitating workshops to find the common core is the PO's key contribution.`},

{n:101,domain:'Process',approach:'Predictive',
q:`A project manager discovers that a subcontractor has been using AI tools to generate project deliverables without disclosing this to the client. The contract prohibits AI-generated content without explicit approval.

What should the project manager do?`,
opts:{A:`Require disclosure, review affected deliverables for quality and IP risk, and update the contract.`,B:`Retroactively update the contract to formally permit AI-generated content going forward.`,C:`Terminate the contract immediately given the undisclosed AI tool usage on client deliverables.`,D:`Allow the AI-generated content since the quality of deliverables has been acceptable.`},
ans:'A',exp:`Contract compliance on AI disclosure is a legitimate contractual right. Enforcement through formal notification, quality review, and requiring disclosure protects both the project and client relationship. Retroactive contract changes or immediate termination are disproportionate first responses.`},

{n:102,domain:'Process',approach:'Agile',
q:`A team builds and ships a machine learning feature. Post-deployment monitoring shows the model is making increasingly biased recommendations against a protected group, a pattern not detected in testing.

What should the project manager do immediately?`,
opts:{A:`Log the bias pattern as a defect to be addressed and corrected in the next sprint.`,B:`Escalate immediately, disable or roll back the feature, and initiate an urgent investigation.`,C:`Communicate the known bias to users and continue operating with enhanced disclosure.`,D:`Improve monitoring capabilities to better track and quantify the emerging bias over time.`},
ans:'B',exp:`Active AI bias causing discriminatory outcomes is an immediate operational and legal risk requiring immediate action — rollback, investigation, and escalation. Logging for the next sprint is completely inadequate for an operational harm.`},

{n:103,domain:'Process',approach:'Hybrid',
q:`A project manager is presenting project value to the CFO who only measures success in financial terms. The project's primary benefits are improved employee experience and sustainability metrics, which are harder to quantify financially.

What should the project manager do?`,
opts:{A:`Convert all benefits to financial equivalents even if the conversion assumptions are rough.`,B:`Focus only on the financial aspects and omit benefits that cannot be quantified in dollars.`,C:`Present a multi-dimensional framework with quantified financial proxies and qualitative evidence.`,D:`Ask the sustainability team to present non-financial benefits to the CFO directly.`},
ans:'C',exp:`Modern value delivery includes financial and non-financial dimensions. A multi-dimensional value framework that uses proxy financial conversions (e.g., turnover cost savings from employee experience improvements) while being transparent about measurement limitations is most credible.`},

{n:104,domain:'Process',approach:'Agile',
q:`A product manager wants to add AI-powered personalization to a feature. The team estimates it would take four sprints but the probability of achieving the desired accuracy is only 60%. The business value if it works is very high.

What should the project manager recommend?`,
opts:{A:`Start the four-sprint development immediately given the high potential business value.`,B:`Include the 40% failure probability in the risk register and proceed with development.`,C:`Select a simpler rule-based approach instead of AI to guarantee delivery within the sprint cycle.`,D:`Run a time-boxed spike to assess technical feasibility before committing to full development.`},
ans:'D',exp:`High-value, high-uncertainty AI features warrant a spike before full commitment. A spike reduces the uncertainty before investing four sprints. The result of the spike informs the go/no-go decision on the full investment.`},

{n:105,domain:'Process',approach:'Predictive',
q:`A project manager is closing a three-year program. The final evaluation reveals that the program delivered 85% of the planned scope within budget but the key business outcome (market share increase) has not materialized.

How should the project manager characterize this in the closure report?`,
opts:{A:`Partially successful: delivery objectives were met but benefit realization is significantly lagging.`,B:`Failed: the primary objective was business outcome realization, not scope or budget delivery.`,C:`On hold: recommend extending the monitoring period until business outcomes fully materialize.`,D:`Successful: the program delivered within budget and substantially within the agreed scope.`},
ans:'A',exp:`Modern PM separates delivery success (scope/budget/schedule) from business outcome success. Honest characterization includes both dimensions. Recommending a post-implementation review to understand why outcomes haven't materialized is a value-driven closure approach.`},

{n:106,domain:'Process',approach:'Agile',
q:`A scrum team's definition of done includes penetration testing. With a two-week sprint cycle, penetration testing cannot be completed within each sprint.

How should the team resolve this?`,
opts:{A:`Remove penetration testing from the Definition of Done to accommodate the sprint timeline.`,B:`Define a security acceptance cadence where penetration testing gates each release candidate.`,C:`Outsource penetration testing to a separate external security team to parallelize the work.`,D:`Extend sprint length to four weeks to accommodate full penetration testing within each cycle.`},
ans:'B',exp:`A tiered security testing approach (automated within sprint, penetration testing at release cadence) balances continuous security assurance with practical sprint constraints. Removing security from DoD creates unacceptable risk.`},

{n:107,domain:'Process',approach:'Hybrid',
q:`An organization is implementing a new project governance framework that requires all projects over $1M to have a dedicated steering committee. An existing agile team resists the additional overhead, saying governance slows delivery.

What should the project manager do?`,
opts:{A:`Exempt the high-performing agile team from governance requirements given their delivery record.`,B:`Accept the governance requirements as mandatory and add all overhead to the project plan.`,C:`Work with the team to design lightweight governance artifacts that satisfy requirements efficiently.`,D:`Escalate to the PMO to reconsider whether the $1M governance threshold is appropriately set.`},
ans:'C',exp:`Governance requirements and agile delivery can coexist with thoughtful design. Lightweight artifacts, async updates, and focused steering committee meetings satisfy governance intent without excessive overhead. Exemptions undermine organizational governance.`},

{n:108,domain:'Process',approach:'Agile',
q:`A team has just completed a successful MVP launch. The product is getting positive user feedback. The product owner wants to immediately add many features. The team warns that the technical foundations need strengthening first.

What should happen?`,
opts:{A:`Add all requested features since the MVP has validated strong market interest.`,B:`Defer all feature additions until the existing technical debt is fully resolved.`,C:`Allow the PO to decide since they hold formal accountability for all backlog prioritization.`,D:`Balance technical foundation work with customer-visible features with the PO presenting the tradeoff.`},
ans:'D',exp:`Post-MVP pressure to add features without addressing technical foundations is a classic path to rapid technical debt accumulation. A joint PO-team agreement on a sustainable investment split maintains both velocity and system health long-term.`},

{n:109,domain:'Process',approach:'Predictive',
q:`A project manager is implementing an AI system that will automate 30% of the work currently done by a team of 50 people. The business case is based on headcount reduction. HR has not been engaged in the project.

What should the project manager do immediately?`,
opts:{A:`Engage HR immediately to develop workforce transition plans and ensure legal compliance.`,B:`Wait until go-live to engage HR to avoid creating premature anxiety among the affected team.`,C:`Reduce scope to only automate work that has no direct headcount impact whatsoever.`,D:`Continue implementation since the business case and approach have been formally approved.`},
ans:'A',exp:`Workforce transitions involving AI-driven headcount changes have legal, ethical, and engagement implications that require HR partnership from the outset. Late HR engagement risks legal non-compliance, morale damage, and resistance that threatens adoption.`},

{n:110,domain:'Process',approach:'Agile',
q:`An agile team is conducting quarterly business reviews with stakeholders. The review reveals that market conditions have changed significantly and two of the six planned epics no longer deliver competitive value.

What should the product owner do?`,
opts:{A:`Continue delivering all six epics to honor the original roadmap commitments to stakeholders.`,B:`Remove or significantly reduce the two low-value epics and redirect capacity to higher-value work.`,C:`Continue the two low-value epics but reduce their scope to minimize further wasted investment.`,D:`Ask the sponsor to approve the roadmap change before redirecting any team capacity.`},
ans:'B',exp:`Quarterly reviews exist precisely for this — to adapt the roadmap to changing conditions. The PO's primary responsibility is value maximization, not plan adherence. Reprioritizing in response to market feedback is core agile practice.`},

{n:111,domain:'Process',approach:'Hybrid',
q:`A project manager is managing a complex transformation with 15 interdependent workstreams. A critical integration milestone is at risk because two workstream leads have conflicting technical approaches that haven't been resolved in three weeks.

What should the project manager do?`,
opts:{A:`Choose one approach and direct all workstreams to adopt it to resolve the conflict quickly.`,B:`Ask the central architect to decide independently to avoid a lengthy cross-team negotiation.`,C:`Facilitate an escalation session with both leads, architects, and the sponsor to align on an approach.`,D:`Split the integration approach to independently accommodate both technical preferences.`},
ans:'C',exp:`Three-week unresolved technical conflicts at critical path milestones require facilitated escalation with decision authority present. Setting criteria, involving the right people, and getting a decision with a deadline is the PM's integration management role.`},

{n:112,domain:'Process',approach:'Agile',
q:`After implementing continuous deployment, the team notices that despite shorter release cycles, user adoption is not improving. Users report they cannot keep up with the pace of change.

What should the team do?`,
opts:{A:`Slow down release frequency to give users more time to absorb each change increment.`,B:`Stop releasing new features entirely until users specifically request them.`,C:`Bundle changes into quarterly releases to reduce the frequency of user-facing disruption.`,D:`Invest in user adoption enablers: in-app guidance, release communication, and progressive rollout.`},
ans:'D',exp:`Value delivery requires user adoption, not just technical deployment. Continuous deployment with poor adoption support reduces value realized. In-app guidance and progressive disclosure enable users to absorb changes without slowing delivery.`},

{n:113,domain:'Process',approach:'Predictive',
q:`A project is approaching a contractual milestone requiring a client sign-off. Testing shows the deliverable meets all technical specifications, but user acceptance testing reveals usability issues that weren't in the specification.

What should the project manager do?`,
opts:{A:`Present the usability findings to the client, assess scope impact, and negotiate the path forward.`,B:`Request acceptance and commit to fixing usability issues as part of a future maintenance phase.`,C:`Fix the usability issues immediately and delay the contractual milestone by one week.`,D:`Request formal acceptance immediately since all documented technical specifications are met.`},
ans:'A',exp:`Transparency with the client before requesting acceptance builds trust and avoids disputes. Engaging the client in the usability findings and negotiating the response (fix now, accept as-is, phase 2 improvement) is the collaborative professional approach.`},

{n:114,domain:'Process',approach:'Agile',
q:`A team is asked to build a feature that uses generative AI to create personalized content. Legal raises concerns about copyright in AI-generated outputs. Development wants to proceed while legal completes their review.

What should the project manager do?`,
opts:{A:`Proceed since development timelines and business commitments take priority over legal review.`,B:`Pause feature development pending legal review and document the dependency and timeline impact.`,C:`Remove the generative AI feature from the project scope entirely to eliminate the legal risk.`,D:`Build a version of the feature without AI first and add generative AI after legal clearance.`},
ans:'B',exp:`Copyright risk in AI-generated content is a legitimate legal risk requiring resolution before development. Pausing with documentation and exploring mitigations in parallel maintains project transparency and addresses legal needs without undue delay.`},

{n:115,domain:'Process',approach:'Hybrid',
q:`A program manager needs to demonstrate the value of the program after six months. The program has delivered three product increments, but the benefits won't materialize fully for 18 months.

What should the program manager present?`,
opts:{A:`Project on track indicators only: schedule performance, cost performance, and scope completion.`,B:`Financial projections only, since the CFO audience measures all value in financial terms.`,C:`A balanced dashboard showing delivery progress, leading benefit indicators, and realization risks.`,D:`Nothing yet — wait until benefits materialize before presenting any program value.`},
ans:'C',exp:`Benefits realization tracking uses leading indicators (adoption, usage) as proxies for lagging financial benefits. A balanced dashboard that connects delivery to benefit indicators provides meaningful evidence of program value before full materialization.`},

{n:116,domain:'Process',approach:'Agile',
q:`A team implements a feature that significantly improves performance. Post-release monitoring shows a 40% reduction in server costs. This benefit was not in the original business case.

What should the project manager do?`,
opts:{A:`Document the benefit informally and notify the sponsor via a brief status update email.`,B:`Include the unexpected benefit in the project closure report only at the end of the project.`,C:`Take no further action since benefits not in the original plan do not require formal tracking.`,D:`Update the benefits realization plan, quantify the benefit, and include it in stakeholder reporting.`},
ans:'D',exp:`Unexpected benefits should be captured and reported — they inform future investment decisions and improve business case accuracy. Updating the benefits realization plan ensures these benefits are tracked and attributed to the project.`},

{n:117,domain:'Process',approach:'Predictive',
q:`A project manager discovers that the organization's data classification policy classifies the project's output data as "confidential" but the current architecture stores it in a shared environment accessible to all staff.

What should the project manager do?`,
opts:{A:`Raise a compliance issue, halt new data ingestion, and work with security on remediation.`,B:`Update the data classification policy to match the current architectural approach.`,C:`Implement access logging on the shared environment as a compensating control.`,D:`Continue with the current architecture since it is functional and performing adequately.`},
ans:'A',exp:`A known data architecture/policy violation must be addressed before go-live, not compensated around. Reclassifying data to match a non-compliant architecture is the wrong direction. Halting and remediating protects the organization.`},

{n:118,domain:'Process',approach:'Agile',
q:`During a sprint, the team realizes a story they are implementing has privacy implications that weren't identified during refinement. Implementing as planned would violate GDPR.

What should the team do?`,
opts:{A:`Continue implementation and raise the privacy concern formally in the next retrospective.`,B:`Stop implementation of the affected story and escalate to the PM and legal team immediately.`,C:`Complete the sprint and implement a fully GDPR-compliant version in the following sprint.`,D:`Implement a technical workaround for now and schedule a GDPR-compliant fix for next sprint.`},
ans:'B',exp:`GDPR violations are legal compliance breaches that cannot be knowingly implemented and fixed later. Stopping, escalating, and properly refining the story with privacy requirements ensures compliance from the start.`},

{n:119,domain:'Process',approach:'Hybrid',
q:`A project manager is leading a 24-month initiative. After 12 months, the project's expected benefits have been reduced by 50% due to market changes, but the cost to complete is only 30% of the original budget.

What framework should be used to decide whether to continue?`,
opts:{A:`Compare the remaining project cost against the original approved budget baseline.`,B:`Complete the project since it is more than halfway through the approved timeline.`,C:`Compare expected remaining benefits against the opportunity cost of continued investment.`,D:`Stop the project immediately since the expected benefits have declined by more than 50%.`},
ans:'C',exp:`Continuation decisions use incremental analysis: do the expected benefits from remaining investment justify that investment compared to alternatives? Sunk cost and percentage completion are irrelevant to this decision.`},

{n:120,domain:'Process',approach:'Agile',
q:`An agile team builds three features in a sprint. After release, analytics show that Feature A is used by 80% of users, Feature B by 15%, and Feature C by 2%. The team is proud of delivering all three.

What lesson should the product owner apply to future prioritization?`,
opts:{A:`Celebrate the team for successfully delivering all three committed sprint features.`,B:`Remove Feature C from the product immediately since it has very low user adoption.`,C:`Increase marketing efforts for Features B and C to drive higher adoption rates.`,D:`Use actual usage data to inform future prioritization — high usage signals what to build more of.`},
ans:'D',exp:`Outcome-based learning is core to product thinking. Usage data validates whether investment was well-placed. Low-adoption features warrant investigation (wrong users, wrong problem, poor discoverability) before removing or continuing similar investments.`},

{n:121,domain:'Process',approach:'Predictive',
q:`A project manager realizes that a recent project used significant computational resources for AI model training, resulting in a much larger carbon footprint than the project charter estimated.

What should the project manager include in the lessons learned?`,
opts:{A:`Specific carbon impact data versus estimates and methodology recommendations for future AI projects.`,B:`An apology to stakeholders for the unexpected environmental impact of AI model training.`,C:`Nothing — carbon impact was not included in the original project scope or success criteria.`,D:`A general note that AI projects may exceed standard computational resource estimates.`},
ans:'A',exp:`Sustainability is an emerging project accountability area. Specific, actionable lessons learned on carbon estimation methodology and mitigation improve future projects. Generic notes or omissions fail to advance organizational learning.`},

{n:122,domain:'Process',approach:'Agile',
q:`A team is building a healthcare AI system. During testing, the model performs significantly better on data from patients under 50 than over 75, a population most in need of the clinical decision support.

What should the project manager do?`,
opts:{A:`Deploy the system for patients under 60 only where model performance is acceptable.`,B:`Halt deployment, escalate to clinical and ethics stakeholders, and investigate the performance bias.`,C:`Add a clinician disclaimer about the known age-related limitation in the model.`,D:`Deploy with full clinical documentation noting the model's performance difference by age group.`},
ans:'B',exp:`Healthcare AI with demographic performance disparities poses patient safety and health equity risks. Deployment (even partial) without resolving a known systematic bias in a clinical context is ethically and legally unacceptable.`},

{n:123,domain:'Process',approach:'Hybrid',
q:`A project manager receives direction from a functional manager to include specific employees on the project team who the PM believes are not the most qualified candidates for the roles.

What should the project manager do?`,
opts:{A:`Accept the team as directed since functional managers control resource allocation decisions.`,B:`Escalate to the project sponsor to override the functional manager's decision.`,C:`Have a professional conversation with the functional manager about the project's skill requirements.`,D:`Accept the team but formally document concerns about their qualifications in project records.`},
ans:'C',exp:`Functional managers control resource assignments. The PM's role is to clearly communicate skill requirements and gaps, not override the decision. A collaborative conversation that offers solutions (training, supplementary resources) is more productive than documentation or escalation.`},

{n:124,domain:'Process',approach:'Agile',
q:`After 10 sprints, a development team has accumulated significant technical debt. New feature velocity is declining despite consistent sprint capacity. The PO wants to focus entirely on new features to satisfy stakeholders.

What should the scrum master do?`,
opts:{A:`Support the PO's decision since they hold formal accountability for the product backlog.`,B:`Convince the PO privately to include tech debt stories without escalating to stakeholders.`,C:`Have the team estimate all tech debt and present an independent debt reduction plan.`,D:`Help the PO and stakeholders understand how technical debt directly reduces future feature velocity.`},
ans:'D',exp:`Making the connection between technical debt and declining velocity explicit gives stakeholders the data to make informed trade-offs. Transparency about the systemic cause of the performance decline is the scrum master's coaching role.`},

{n:125,domain:'Process',approach:'Hybrid',
q:`A project manager must present an honest status report showing a project is significantly behind schedule. The sponsor asks the PM to present it as "on track" to avoid stakeholder concern.

What should the project manager do?`,
opts:{A:`Decline to misrepresent the status and explain the professional obligation to report accurately.`,B:`Present as on track but privately document the sponsor's request for future reference.`,C:`Submit the honest report directly to stakeholders without waiting for sponsor approval.`,D:`Present the status as on track since the project sponsor has formal authority over reporting.`},
ans:'A',exp:`Misrepresenting project status violates PMI's Code of Ethics and creates greater risk when reality surfaces. Working with the sponsor on an honest report with a recovery plan respects both ethics and the sponsor relationship.`},

{n:126,domain:'Process',approach:'Agile',
q:`An agile team is asked to add a feature that uses facial recognition technology for employee time tracking. A team member raises ethical concerns about employee surveillance and privacy.

What should the project manager do?`,
opts:{A:`Proceed since facial recognition is a technically valid and widely used identification method.`,B:`Pause the feature and facilitate an ethical assessment involving HR, legal, and employee representatives.`,C:`Allow the concerned team member to opt out of working on that specific feature.`,D:`Remove the facial recognition feature from scope entirely to eliminate the ethical concern.`},
ans:'B',exp:`Facial recognition for employee surveillance raises significant ethical and legal concerns (privacy, consent, bias in recognition systems). A structured ethical assessment before proceeding is required. The PM has a responsibility to surface ethical risks proactively.`},

{n:127,domain:'Process',approach:'Predictive',
q:`A project manager is implementing a new project portfolio management system that will centralize all project data. Department heads are concerned about loss of data ownership and visibility into their own projects.

What should the project manager do?`,
opts:{A:`Proceed with full centralization since it has been formally approved at the organizational level.`,B:`Keep department-level systems and add a centralized reporting layer as a practical compromise.`,C:`Design role-based access controls that give departments visibility and ownership of their own data.`,D:`Present the governance and efficiency benefits to overcome the departmental resistance.`},
ans:'C',exp:`Resistance to centralization often stems from legitimate concerns about access and control. Designing for departmental data ownership within a central system addresses the root concern. Engaging stakeholders in design converts resistance to input.`},

{n:128,domain:'Process',approach:'Agile',
q:`A team is building a platform that will process sensitive customer data. The team wants to use a cloud-based AI service that processes data on the vendor's servers. The legal team says customer data cannot leave the organization's infrastructure.

What should the project manager do?`,
opts:{A:`Use the cloud AI service and obtain legal approval retroactively after deployment.`,B:`Get explicit customer consent to allow their data to be processed by the vendor's cloud service.`,C:`Remove AI capabilities from the platform to eliminate the legal compliance concern entirely.`,D:`Explore on-premise or private cloud AI options that meet the legal constraint and assess tradeoffs.`},
ans:'D',exp:`Legal constraints on data residency are non-negotiable. Exploring compliant alternatives (on-premise AI, private cloud) and presenting capability trade-offs allows the PO and sponsor to make an informed decision about the right technical path.`},

{n:129,domain:'Process',approach:'Hybrid',
q:`A project manager is leading a program with a tight deadline. An unexpected regulatory requirement adds three weeks of work to a critical path component. The sponsor wants to hold the deadline.

What should the project manager present to the sponsor?`,
opts:{A:`Present a clear analysis of options: fast-track other activities, reduce scope, or extend the timeline.`,B:`Present a plan to reduce quality standards to absorb the new regulatory work in the timeline.`,C:`Request that the regulatory body extend its own deadline to accommodate project constraints.`,D:`Confirm to the sponsor that the original deadline can still be held without detailed analysis.`},
ans:'A',exp:`When regulatory requirements add unavoidable work to a critical path, the PM's job is to present the options with honest trade-offs, not to promise an outcome that requires magic. Sponsors make better decisions with accurate data.`},

{n:130,domain:'Process',approach:'Agile',
q:`A team using event-driven architecture deploys a new service. Three days later, monitoring alerts show the service is consuming significantly more database connections than expected, approaching limits that could impact production stability.

What should the team do?`,
opts:{A:`Log the database connection issue as a defect to be fixed in the next sprint.`,B:`Treat it as an immediate production risk and implement connection pooling or throttling right away.`,C:`Roll back the service deployment until the connection issue is fully diagnosed.`,D:`Increase database connection limits to accommodate the new service's consumption pattern.`},
ans:'B',exp:`An approaching production stability limit is an immediate operational risk requiring immediate mitigation. A quick tactical fix (connection pooling/throttling) prevents the production impact while a proper investigation and fix follows.`},

{n:131,domain:'Process',approach:'Predictive',
q:`A project manager is evaluating a build vs. buy decision for a core component. Build costs $800K with full customization; the best SaaS option costs $200K annually but covers 85% of requirements. The component will be used for 8 years.

What factors should most influence this decision?`,
opts:{A:`Total cost of ownership comparison only between the build and best SaaS option.`,B:`Upfront cost comparison since that is the most immediate and concrete financial consideration.`,C:`Total cost, strategic differentiator status of the custom requirements, and integration risk together.`,D:`The SaaS option is clearly better since it costs significantly less upfront to implement.`},
ans:'C',exp:`Build vs. buy requires multi-dimensional analysis. TCO (8 years: $1.6M SaaS vs $800K build + maintenance) is one input. The strategic importance of the 15% gap, integration risk, and organizational build capability are equally important.`},

{n:132,domain:'Process',approach:'Agile',
q:`An agile team is working on a feature that requires security testing. The security team has a 3-week backlog. The PO wants to demo the feature in the next sprint review without security clearance.

What should the project manager do?`,
opts:{A:`Allow the demo since sprint reviews are for stakeholder feedback, not formal security sign-off.`,B:`Delay the sprint review entirely until security testing is fully complete.`,C:`Ask the security team to prioritize this feature to meet the sprint review date.`,D:`Demo the feature as a preview clearly noting it is pending required security testing completion.`},
ans:'D',exp:`Sprint reviews can show pending features with clear status. Transparency about security clearance status sets correct stakeholder expectations. Deploying without clearance is the risk to avoid — not the demo itself.`},

{n:133,domain:'Process',approach:'Hybrid',
q:`A project manager is completing a complex enterprise system implementation. During user acceptance testing, users report that the system meets all documented requirements but doesn't support the way they actually work. Several critical workflows are much harder than before.

What does this indicate?`,
opts:{A:`Requirements elicitation missed actual usage patterns; facilitate a structured session to close the gap.`,B:`The system is acceptable since all formally documented requirements have been verified and met.`,C:`User training will be sufficient to resolve the workflow concerns raised during testing.`,D:`The users are fundamentally resistant to change and require structured change management support.`},
ans:'A',exp:`"Technically correct but practically unusable" is a requirements quality failure. Critical workflow disruptions in enterprise systems are go-live risks, not training issues. Negotiating usability improvements for the highest-impact workflows before go-live is the right response.`},
],...[
{n:134,domain:'Business',approach:'Hybrid',
q:`An organization's portfolio committee is reviewing active projects. One project is 60% complete and on track technically, but a competitor launched an equivalent product three months ago at half the price. The project's business case assumed first-mover advantage.

What should the project manager recommend?`,
opts:{A:`Continue — the 60% completion level represents too much sunk investment to abandon now.`,B:`Present an updated business case analysis showing revised expected value under new market conditions.`,C:`Pivot the project immediately to add features that the competitor's product currently lacks.`,D:`Accelerate delivery to minimize the remaining investment exposure in the changed market.`},
ans:'B',exp:`Sunk cost is irrelevant to continuation decisions. The PM must provide an honest updated business case. Portfolio decisions belong to the committee, not the PM — but the PM's responsibility is complete, accurate information.`},

{n:135,domain:'Business',approach:'Predictive',
q:`A project manager is working on a project that will collect and process biometric data from employees to improve workplace safety. The project charter has been signed but data privacy impact assessment has not been conducted.

What should the project manager do immediately?`,
opts:{A:`Begin implementation since the project charter has been formally approved by leadership.`,B:`Collect biometric data for the pilot only and conduct the DPIA before the full rollout.`,C:`Pause implementation and conduct a formal data privacy impact assessment before any data collection.`,D:`Ask the legal team whether a formal DPIA is required given the nature of the collected data.`},
ans:'C',exp:`GDPR Article 35 and similar regulations mandate Data Privacy Impact Assessments before processing biometric data, which is a special category under privacy law. This is not optional and cannot be deferred to avoid a known legal requirement.`},

{n:136,domain:'Business',approach:'Agile',
q:`A startup's board of directors asks the project manager to present the quarterly business value delivered by the agile product teams. The PM has velocity, sprint completion rates, and feature counts. The board asks what customer value was actually created.

What should the project manager report?`,
opts:{A:`Velocity and sprint completion rates are the standard agile business value metrics.`,B:`Number of features delivered per sprint compared to the agreed roadmap commitment.`,C:`Story points completed versus the planned sprint velocity target for each team.`,D:`Customer outcome metrics: adoption rates, satisfaction scores, and business KPIs impacted by delivery.`},
ans:'D',exp:`Boards are interested in business value, not delivery mechanics. Outcome metrics (what changed for customers/business) are more meaningful than output metrics (what was built). This is a core shift in modern PM thinking toward value delivery.`},

{n:137,domain:'Business',approach:'Hybrid',
q:`A project manager is leading an organizational transformation to implement OKRs (Objectives and Key Results) across the company. Six months in, teams are writing OKRs but making no behavioral changes — they complete their existing work and then fill in the OKRs.

What does this indicate?`,
opts:{A:`The OKR implementation is treating OKRs as a reporting tool rather than a strategic alignment tool.`,B:`Teams need more OKR training and facilitation support before they can implement them effectively.`,C:`Six months is too short an implementation period to observe meaningful behavioral change.`,D:`OKRs are not the right strategic framework for this organization's culture and structure.`},
ans:'A',exp:`OKRs filled in retrospectively indicate they are disconnected from work prioritization. The implementation has the tool without the mindset change. Behavioral change requires OKRs to drive actual priority decisions, not just report on existing work.`},

{n:138,domain:'Business',approach:'Predictive',
q:`A project manager is managing a carbon neutrality initiative. The project's business case projects $2M in carbon credit savings over five years. Six months in, carbon credit market prices have dropped 40%.

What should the project manager do?`,
opts:{A:`Continue since the carbon neutrality goal has intrinsic value beyond carbon credit pricing.`,B:`Update the financial projections with current market prices and present revised options to the sponsor.`,C:`Wait for carbon credit prices to recover before making any changes to the project direction.`,D:`Close the project since the financial business case no longer holds with current market prices.`},
ans:'B',exp:`Business case assumptions must be updated when market conditions change significantly. The PM's responsibility is honest, updated reporting. The decision to continue belongs to the sponsor/steering committee with accurate data.`},

{n:139,domain:'Business',approach:'Agile',
q:`An organization is implementing AI tools across project management functions. Project managers are concerned about AI replacing their roles. How should the PMO leader frame the AI adoption for the PM community?`,
opts:{A:`Reassure project managers that AI will not change their core roles or responsibilities.`,B:`Focus communication on efficiency gains only without addressing role evolution concerns.`,C:`Be transparent that AI will automate routine tasks while evolving the PM role toward higher-value work.`,D:`Let each project manager individually determine how to incorporate AI tools into their work.`},
ans:'C',exp:`Authentic communication about AI's impact on PM roles builds trust and enables proactive skill development. Denial creates false security; transparency enables adaptation. The PM role evolution toward higher-value human skills is well-supported by evidence.`},

{n:140,domain:'Business',approach:'Hybrid',
q:`A project manager working on a new product line receives direction from the product owner to accelerate delivery by cutting the environmental impact assessment. The sponsor says market timing is critical.

What should the project manager do?`,
opts:{A:`Skip the assessment since the project sponsor has formally approved the delivery approach.`,B:`Conduct a minimal assessment to satisfy the compliance checkbox without thorough analysis.`,C:`Delay the product launch until the full environmental assessment is properly completed.`,D:`Explain the regulatory and reputational risks of skipping the assessment and explore compliant alternatives.`},
ans:'D',exp:`Environmental assessments may be legally required and carry reputational risk. The PM must make the risk explicit even when the sponsor is willing to accept it. Documenting the risk and the sponsor's decision protects the PM and creates accountability.`},

{n:141,domain:'Business',approach:'Agile',
q:`A product team is using outcome-based roadmaps instead of feature-based roadmaps. A key customer is frustrated because they cannot see their requested feature on the roadmap.

How should the product manager respond?`,
opts:{A:`Map the customer's request to the outcome it serves and show how it fits within the roadmap.`,B:`Tell the customer that outcome roadmaps simply do not commit to specific features or timelines.`,C:`Switch back to feature-based roadmaps for all external customer-facing communications.`,D:`Add the feature to the outcome roadmap to maintain this key customer's satisfaction.`},
ans:'A',exp:`Outcome-based roadmaps focus on problems to solve, not solutions to build. Connecting customer feature requests to outcomes demonstrates that their underlying need is being addressed while preserving the team's solution flexibility.`},

{n:142,domain:'Business',approach:'Predictive',
q:`A project manager is implementing a new governance framework for the PMO. A business unit head says governance adds overhead and slows their agile teams.

What is the most effective response?`,
opts:{A:`Exempt all agile teams from governance requirements given their strong delivery performance.`,B:`Differentiate governance requirements by project risk and complexity — lighter governance for low-risk.`,C:`Ask the business unit head to participate in redesigning the governance framework structure.`,D:`Implement the governance framework uniformly across all projects to maintain consistency.`},
ans:'B',exp:`Differentiated governance (tiered by risk and complexity) applies oversight where it provides the most value while minimizing overhead on low-risk work. Uniform governance wastes resources; exemptions create accountability gaps.`},

{n:143,domain:'Business',approach:'Hybrid',
q:`A project manager is delivering a digital transformation initiative. The CEO announces a new company-wide AI strategy that reframes several of the transformation's objectives mid-delivery.

What should the project manager do?`,
opts:{A:`Continue as planned since the project charter was approved before the AI strategy announcement.`,B:`Ask the CEO for a formal written directive before making any scope or approach changes.`,C:`Assess current scope alignment with the new AI strategy and identify where adjustments are needed.`,D:`Complete the current phase and incorporate the AI strategy only in the next program phase.`},
ans:'C',exp:`Strategic realignment during project execution requires proactive assessment of impact and formal reorientation. Waiting for formal directives or completing misaligned work represents missed organizational value.`},

{n:144,domain:'Business',approach:'Agile',
q:`A project manager's organization is adopting a platform operating model where delivery teams have long-term product ownership. A project manager is asked to transition from project thinking to product thinking.

What is the most fundamental shift required?`,
opts:{A:`From managing budgets and timelines to managing product backlogs and sprint ceremonies.`,B:`From waterfall methodology practices to agile methodology tools and frameworks.`,C:`From stakeholder relationship management to direct customer relationship management.`,D:`From delivering outputs with a temporary team to continuously delivering outcomes with a stable team.`},
ans:'D',exp:`The project-to-product shift is fundamentally about continuity (stable teams, ongoing outcomes) versus temporariness (temporary teams, defined deliverables). The PM's scope expands from "deliver and disband" to "continuously improve and optimize value."`,},

{n:145,domain:'Business',approach:'Predictive',
q:`A multi-national organization is standardizing project management practices globally. Legal teams in three different countries identify conflicting requirements for project data retention.

What should the project manager do?`,
opts:{A:`Work with legal in each jurisdiction to design a compliant framework meeting all local requirements.`,B:`Use the home country's requirements as the default global standard for all operations.`,C:`Select the middle-ground retention period to balance the conflicting jurisdictional requirements.`,D:`Apply the most restrictive data retention requirement globally to ensure universal compliance.`},
ans:'A',exp:`Jurisdictional data requirements cannot be resolved by choosing one standard. A jurisdictional data architecture that satisfies each country's requirements is the only compliant solution. This is increasingly important with evolving global data sovereignty laws.`},


// ── MULTI-RESPONSE (15) ─────────────────────────────────
{n:146,domain:'People',approach:'Agile',type:'multi',pick:2,
q:`A scrum master observes that two team members are in open conflict during sprint planning, causing others to disengage. The conflict stems from disagreement over technical approach.

Which TWO actions should the scrum master take first?`,
opts:{A:`Assign one team member to a different sprint to separate them.`,B:`Create space for the two members to voice their concerns openly in a structured conversation.`,C:`Escalate immediately to the functional manager.`,D:`Facilitate a team discussion to explore both technical approaches and let the team decide together.`,E:`Remove the technical decision from sprint planning and decide it offline.`},
ans:['B','D'],exp:`Scrum masters facilitate healthy conflict resolution. Creating structured space for both voices and letting the team own the technical decision builds psychological safety and team ownership. Separation or escalation bypasses the team dynamic.`},

{n:147,domain:'People',approach:'Predictive',type:'multi',pick:2,
q:`A project manager is building a team charter. Two senior stakeholders have conflicting expectations about team decision-making authority.

Which TWO elements should the project manager include in the charter to address this?`,
opts:{A:`A clear RACI matrix defining who is Responsible, Accountable, Consulted, and Informed for key decisions.`,B:`A list of all team members and their contact information.`,C:`Explicit escalation thresholds defining which decisions require stakeholder approval versus team authority.`,D:`A project schedule baseline.`,E:`A team communication style preference survey.`},
ans:['A','C'],exp:`RACI matrices clarify decision authority, while explicit escalation thresholds prevent ambiguity about when stakeholders must be involved. Contact lists and schedules do not resolve the authority conflict.`},

{n:148,domain:'Process',approach:'Agile',type:'multi',pick:2,
q:`An agile team's velocity has been declining for three sprints. The product owner wants to add more stories to compensate. The scrum master disagrees.

Which TWO actions reflect correct agile practice?`,
opts:{A:`Add more stories to the next sprint to recover lost velocity.`,B:`Investigate root causes of velocity decline in the next retrospective.`,C:`Reduce sprint length to create more frequent delivery checkpoints.`,D:`Allow the team to pull less work until the impediment is resolved.`,E:`Replace underperforming team members.`},
ans:['B','D'],exp:`Velocity decline signals systemic impediments, not a capacity problem to solve by adding work. Retrospective investigation addresses root cause; allowing reduced pull protects quality while impediments are cleared.`},

{n:149,domain:'Process',approach:'Predictive',type:'multi',pick:2,
q:`A project is 65% complete when the sponsor requests a scope change that would increase project cost by 18% and extend the timeline by 6 weeks.

Which TWO actions must the project manager perform before approving the change?`,
opts:{A:`Immediately reject the change since the project is past the halfway point.`,B:`Perform an impact analysis covering cost, schedule, quality, risk, and resources.`,C:`Submit the change to the Change Control Board with supporting analysis.`,D:`Update the project schedule baseline.`,E:`Notify all team members of the potential change.`},
ans:['B','C'],exp:`All scope changes must go through formal change control. Impact analysis informs the CCB decision — neither approval nor baseline update occurs before CCB review. Automatic rejection based on project phase is not standard practice.`},

{n:150,domain:'Business',approach:'Hybrid',type:'multi',pick:2,
q:`A project manager is conducting benefits realization review 6 months after project closure. Two of the five expected benefits are not materializing.

Which TWO responses are most appropriate?`,
opts:{A:`Close the benefits realization file since the project is already closed.`,B:`Investigate root causes of the unrealized benefits.`,C:`Document the gap and escalate to the sponsor with recommendations.`,D:`Reopen the project to deliver the missing benefits.`,E:`Reassign the unrealized benefits to a different project team.`},
ans:['B','C'],exp:`Benefits realization extends beyond project closure. Investigating root causes and escalating with recommendations enables the organization to decide on corrective action. Reopening a closed project or reassigning benefits arbitrarily are not standard responses.`},

{n:151,domain:'People',approach:'Hybrid',type:'multi',pick:2,
q:`A hybrid team includes three co-located predictive sub-teams and two distributed agile pods. Communication breakdowns are causing integration failures.

Which TWO interventions would most improve cross-team coordination?`,
opts:{A:`Require all teams to adopt the same methodology.`,B:`Establish a shared integration backlog visible to all teams.`,C:`Hold weekly cross-team synchronization meetings with representatives from each sub-team.`,D:`Replace distributed team members with co-located resources.`,E:`Assign separate project managers to each sub-team.`},
ans:['B','C'],exp:`A shared integration backlog creates transparency across methodology boundaries. Cross-team syncs (similar to Scrum-of-Scrums) surface integration dependencies early. Forcing methodology uniformity or replacing distributed workers addresses symptoms, not the coordination problem.`},

{n:152,domain:'Process',approach:'Hybrid',type:'multi',pick:2,
q:`A project manager discovers that two workstreams have independently developed conflicting assumptions about the system architecture that will cause rework if not resolved now.

Which TWO actions should the project manager take?`,
opts:{A:`Let each workstream continue and resolve the conflict at integration testing.`,B:`Convene a joint architecture review with both workstream leads to align assumptions.`,C:`Document the conflict in the risk register and monitor.`,D:`Escalate to the project sponsor to decide the architecture.`,E:`Update the assumption log and circulate it to all workstream leads for sign-off.`},
ans:['B','E'],exp:`Architectural conflicts must be resolved proactively before integration. A joint review aligns the teams; updating and circulating the assumption log creates a formal shared baseline. Deferring to integration testing or escalating to the sponsor bypasses the project manager's coordination responsibility.`},

{n:153,domain:'Business',approach:'Predictive',type:'multi',pick:2,
q:`A portfolio manager reviews three projects competing for the same limited resource pool. All three claim high priority.

Which TWO criteria should primarily drive prioritization?`,
opts:{A:`Which project manager has the most seniority.`,B:`Strategic alignment of each project to organizational objectives.`,C:`Expected NPV and benefits realization timeline.`,D:`Which project started first.`,E:`Which project has the most stakeholder visibility.`},
ans:['B','C'],exp:`Portfolio prioritization is driven by strategic alignment and financial value metrics like NPV. Seniority, start date, and stakeholder visibility are not portfolio management criteria — they reflect organizational politics rather than value.`},

{n:154,domain:'People',approach:'Agile',type:'multi',pick:3,
q:`An agile team is struggling with remote collaboration. The product owner is in a different time zone, daily standups are poorly attended, and sprint reviews have low stakeholder engagement.

Which THREE changes would most improve this situation?`,
opts:{A:`Move all team members to the same time zone.`,B:`Rotate standup times to share the timezone burden equitably.`,C:`Use asynchronous video updates when live attendance is not feasible.`,D:`Send meeting notes to stakeholders after each standup.`,E:`Create a shared digital workspace where work is visible in real time to all stakeholders.`,F:`Cancel sprint reviews and replace them with written reports.`},
ans:['B','C','E'],exp:`Rotating meeting times shares the timezone burden fairly. Async video updates preserve communication without requiring synchronous attendance. A shared digital workspace increases stakeholder engagement continuously rather than only at reviews. Moving everyone or cancelling reviews are not practical agile responses.`},

{n:155,domain:'Process',approach:'Agile',type:'multi',pick:3,
q:`A product owner is refining the backlog for an upcoming PI Planning event. Three issues are present: stories lack acceptance criteria, dependencies between teams are unmapped, and the backlog has 200+ items with no clear priority.

Which THREE actions should the product owner prioritize before PI Planning?`,
opts:{A:`Write acceptance criteria for at least the top 20 stories.`,B:`Map cross-team dependencies for stories in the next two PIs.`,C:`Archive all backlog items older than 6 months.`,D:`Prioritize the backlog so the top 60 stories are clearly ranked.`,E:`Convert all stories to use points instead of hours.`,F:`Send the full 200-item backlog to all teams for review.`},
ans:['A','B','D'],exp:`PI Planning requires a prioritized, refined backlog with clear acceptance criteria and mapped dependencies. Sending an unranked 200-item list creates noise. Archiving based on age and changing estimation units are not PI Planning prerequisites.`},

{n:156,domain:'Business',approach:'Agile',type:'multi',pick:2,
q:`An agile project is delivering incremental value but the business sponsor is questioning whether the total investment will be recovered given slow adoption rates.

Which TWO artifacts should the project manager present to address this concern?`,
opts:{A:`The sprint burndown chart.`,B:`A benefits realization map showing delivered versus expected value to date.`,C:`The team velocity trend over the last six sprints.`,D:`An updated business case with revised ROI projections based on actual adoption data.`,E:`The product backlog with story point estimates.`},
ans:['B','D'],exp:`Benefits realization maps and updated business cases directly address whether investment will be recovered. Burndowns and velocity are team performance metrics, not business value metrics. The backlog shows planned work, not realized value.`},

{n:157,domain:'People',approach:'Predictive',type:'multi',pick:2,
q:`A project manager is conducting performance reviews for two team members. One consistently delivers high-quality work but misses deadlines. The other meets all deadlines but produces work requiring significant rework.

Which TWO approaches reflect best practice?`,
opts:{A:`Give both team members the same rating since both have one strength and one weakness.`,B:`Provide specific behavioral feedback to each person separately addressing their distinct issue.`,C:`Document the performance gaps and create individual improvement plans with measurable targets.`,D:`Reassign the deadline-misser to documentation tasks and the quality-misser to administrative work.`,E:`Discuss the team-level pattern at the next team meeting without naming individuals.`},
ans:['B','C'],exp:`Effective performance management requires specific behavioral feedback tailored to each person's gap, combined with measurable improvement plans. Generic ratings that average strengths ignore the distinct issues.`},

{n:158,domain:'Process',approach:'Predictive',type:'multi',pick:2,
q:`A project manager is conducting earned value analysis midway through the project. CPI=0.82 and SPI=0.91. The sponsor asks what actions to take.

Which TWO responses are most appropriate?`,
opts:{A:`Reassure the sponsor that both metrics are close to 1.0 and no action is needed.`,B:`Investigate root causes of cost overrun — determine if it is due to scope creep, resource inefficiency, or estimation error.`,C:`Compress the schedule by fast-tracking remaining activities to recover SPI.`,D:`Rebaseline the project immediately to reset performance metrics.`,E:`Review the critical path for opportunities to optimize resource allocation and reduce remaining cost.`},
ans:['B','E'],exp:`CPI=0.82 signals meaningful cost overrun requiring root cause investigation. Reviewing critical path resource allocation addresses both cost and schedule performance. Rebaselining without corrective action hides problems; fast-tracking adds risk.`},

{n:159,domain:'Business',approach:'Predictive',type:'multi',pick:2,
q:`A project manager is preparing a project closure report. Two key deliverables were descoped during execution and the project came in 12% under budget.

Which TWO items are most critical to include in the closure report?`,
opts:{A:`A list of team members and their performance ratings.`,B:`Documentation of the descoped deliverables and the rationale for each decision.`,C:`Lessons learned covering what worked, what did not, and what should be done differently.`,D:`The original project charter.`,E:`A financial reconciliation showing budget versus actual spend with variance explanation.`},
ans:['B','C'],exp:`Closure reports must document scope changes with rationale to ensure organizational memory and accountability. Lessons learned transfer knowledge to future projects. The original charter is input, not output, of a closure report.`},

{n:160,domain:'Business',approach:'Hybrid',type:'multi',pick:2,
q:`An organization is selecting between two project approaches: full predictive with detailed upfront planning, or hybrid with agile delivery workstreams.

Which TWO factors most strongly favor choosing a hybrid approach?`,
opts:{A:`The project has well-defined regulatory compliance requirements.`,B:`Market requirements are expected to evolve significantly during the project.`,C:`The project team is entirely new to agile methods.`,D:`Key stakeholders prefer frequent working increments over formal milestone reports.`,E:`The project has a fixed-price contract with a defined scope.`},
ans:['B','D'],exp:`Hybrid approaches are most valuable when requirements are volatile and stakeholders want frequent working increments. Fixed-price fixed-scope contracts and regulatory compliance favor predictive.`},

// ── MATCHING (6) ────────────────────────────────────────
{n:161,domain:'People',approach:'Hybrid',type:'matching',
q:`Match each agile role to its PRIMARY accountability.`,
left:{A:'Product Owner',B:'Scrum Master',C:'Development Team',D:'Stakeholder'},
right:{1:'Prioritize and manage the product backlog to maximize value',2:'Remove impediments and protect the team from external interference',3:'Self-organize to deliver the sprint goal',4:'Provide feedback during sprint reviews to validate direction'},
ans:{A:'1',B:'2',C:'3',D:'4'},
exp:`Product Owners own the backlog and value decisions. Scrum Masters serve the team by removing impediments. Development Teams self-organize around the sprint goal. Stakeholders validate direction through feedback — not by managing the team.`},

{n:162,domain:'Process',approach:'Predictive',type:'matching',
q:`Match each project document to its PRIMARY purpose.`,
left:{A:'Project Charter',B:'WBS',C:'Risk Register',D:'Lessons Learned Register'},
right:{1:'Formally authorizes the project and grants the PM authority',2:'Decomposes scope into manageable deliverable-focused components',3:'Captures identified threats and opportunities with response strategies',4:'Documents experience for future project reference'},
ans:{A:'1',B:'2',C:'3',D:'4'},
exp:`The charter authorizes the project. The WBS decomposes scope — not activities (that is the activity list). The risk register captures risks and responses. Lessons learned transfer organizational knowledge.`},

{n:163,domain:'Business',approach:'Predictive',type:'matching',
q:`Match each EVM metric to what it measures.`,
left:{A:'CPI',B:'SPI',C:'EAC',D:'VAC'},
right:{1:'Cost efficiency: how much value is received per dollar spent',2:'Schedule efficiency: how much planned work is being completed on time',3:'Estimate at completion: forecast of total project cost',4:'Variance at completion: difference between budget and forecasted final cost'},
ans:{A:'1',B:'2',C:'3',D:'4'},
exp:`CPI=EV/AC measures cost efficiency. SPI=EV/PV measures schedule efficiency. EAC forecasts total cost. VAC=BAC-EAC shows whether the project will finish over or under budget. Confusing SPI with schedule variance is a common exam trap.`},

{n:164,domain:'Process',approach:'Hybrid',type:'matching',
q:`Match each change request type to its correct definition.`,
left:{A:'Corrective Action',B:'Preventive Action',C:'Defect Repair',D:'Updates'},
right:{1:'Realigns future project performance with the plan',2:'Reduces probability of negative risk consequences',3:'Modifies a nonconforming product or component',4:'Changes to formally controlled project documents or plans'},
ans:{A:'1',B:'2',C:'3',D:'4'},
exp:`Corrective actions realign FUTURE performance. Preventive actions reduce risk probability. Defect repair fixes nonconforming products. Updates change documents. The trap: corrective action fixes performance gaps (not defects); defect repair fixes product quality (not performance).`},

{n:165,domain:'People',approach:'Agile',type:'matching',
q:`Match each conflict resolution approach to its characteristic outcome.`,
left:{A:'Collaborating',B:'Compromising',C:'Forcing',D:'Withdrawing'},
right:{1:'Win-win: both parties fully satisfy their concerns through open dialogue',2:'Partial satisfaction: each party gives up something to reach agreement',3:'Win-lose: one party imposes their solution',4:'Lose-lose: conflict is deferred, underlying issues remain unresolved'},
ans:{A:'1',B:'2',C:'3',D:'4'},
exp:`PMI generally favors Collaborating as best practice. Compromising is acceptable when time is limited. Forcing damages relationships. Withdrawing is rarely appropriate — the trap is thinking withdrawal is the same as smoothing, but smoothing acknowledges the conflict.`},

{n:166,domain:'Business',approach:'Predictive',type:'matching',
q:`Match each procurement contract type to its primary risk allocation.`,
left:{A:'Firm Fixed Price (FFP)',B:'Cost Plus Fixed Fee (CPFF)',C:'Time and Material (T&M)',D:'Fixed Price Incentive Fee (FPIF)'},
right:{1:'Seller bears all cost risk',2:'Buyer bears all cost risk — seller reimbursed costs plus fixed fee',3:'Risk shared based on actual time and materials consumed',4:'Risk shared with incentives — seller rewarded for beating cost targets'},
ans:{A:'1',B:'2',C:'3',D:'4'},
exp:`FFP maximizes seller risk. CPFF maximizes buyer risk. T&M shares risk based on consumption. FPIF uses incentives to motivate seller cost control while sharing risk.`},

// ── SEQUENCE (4) ────────────────────────────────────────
{n:167,domain:'Process',approach:'Predictive',type:'sequence',
q:`Arrange the following project integration management activities in the correct chronological order from project initiation to closure.`,
items:{A:'Develop Project Management Plan',B:'Direct and Manage Project Work',C:'Develop Project Charter',D:'Perform Integrated Change Control',E:'Monitor and Control Project Work',F:'Close Project or Phase'},
ans:['C','A','B','E','D','F'],
exp:`Initiating: Charter → Planning: PM Plan → Executing: Direct & Manage → Monitoring finds variances (E) which trigger change control decisions (D) → Closing. The trap: change control (D) is triggered by monitoring findings (E), not the other way around.`},

{n:168,domain:'Process',approach:'Agile',type:'sequence',
q:`Arrange the following Scrum events in the correct order within a single sprint cycle.`,
items:{A:'Sprint Retrospective',B:'Daily Scrum',C:'Sprint Review',D:'Sprint Planning',E:'Backlog Refinement',F:'Sprint Execution'},
ans:['E','D','F','B','C','A'],
exp:`Backlog Refinement prepares the backlog before Sprint Planning. Sprint Planning defines the sprint goal. Sprint Execution runs with Daily Scrums throughout. Sprint Review demonstrates the increment. Sprint Retrospective closes the cycle. The trap: Retrospective comes AFTER Review, not before.`},

{n:169,domain:'People',approach:'Predictive',type:'sequence',
q:`A project manager must address a team member's persistent underperformance. Arrange the following steps in the correct escalation order.`,
items:{A:'Issue a formal written warning with documented expectations',B:'Have a private conversation to understand root causes and set clear expectations',C:'Engage HR to initiate a formal performance improvement plan',D:'Document the performance gap with specific examples',E:'Escalate to functional manager if improvement targets are not met',F:'Monitor performance against agreed targets over a defined period'},
ans:['D','B','A','F','C','E'],
exp:`Document the gap first → private conversation → formal written warning → monitor against targets → engage HR for PIP → escalate to functional manager. The trap: many escalate to HR or functional manager too early, bypassing the PM's direct responsibility.`},

{n:170,domain:'Business',approach:'Hybrid',type:'sequence',
q:`Arrange the following steps for conducting a project phase gate review in correct order.`,
items:{A:'Distribute phase gate report to decision makers',B:'Collect performance data and deliverable status from all workstreams',C:'Facilitate go/no-go decision meeting with sponsor and key stakeholders',D:'Compile phase gate report including EVM data, risk status, and benefits progress',E:'Implement decision: proceed, pause, redirect, or close',F:'Communicate the decision and rationale to all project stakeholders'},
ans:['B','D','A','C','E','F'],
exp:`Collect data → compile report → distribute to decision makers → facilitate decision meeting → implement decision → communicate. The trap: communication (F) comes AFTER implementation (E). Distributing the report (A) before the meeting (C) gives stakeholders time to review.`},

// ── ARTIFACT / DATA ANALYSIS (6) ────────────────────────
{n:171,domain:'Process',approach:'Predictive',type:'artifact',
q:`Review the following Earned Value Management data for a software project at month 6 of 12.`,
artifact:{type:'table',
headers:['Metric','Value'],
rows:[['Budget at Completion (BAC)','$500,000'],['Planned Value (PV)','$275,000'],['Earned Value (EV)','$220,000'],['Actual Cost (AC)','$265,000'],['CPI','0.83'],['SPI','0.80'],['EAC (BAC/CPI)','$602,410']]},
q2:`Based on this data, what is the MOST accurate assessment of the project status?`,
opts:{A:`The project is on schedule and within budget — both EV and PV are above $200k.`,B:`The project is behind schedule and over budget; at the current cost efficiency rate it will overrun by approximately $102,000.`,C:`The project needs schedule compression immediately to recover SPI.`,D:`The project should be rebaselined since more than half the budget is spent.`},
ans:'B',
exp:`CPI=0.83 means for every $1 spent, only $0.83 of value is delivered. SPI=0.80 means only 80% of planned work is complete. EAC=$602,410 versus BAC=$500,000 is a projected overrun of ~$102,000. Schedule compression adds risk and cost; rebaselining hides problems rather than solving them.`},

{n:172,domain:'Process',approach:'Predictive',type:'artifact',
q:`Review the following risk register excerpt for a construction project.`,
artifact:{type:'table',
headers:['Risk ID','Description','Probability','Impact','Score','Response'],
rows:[['R-01','Key subcontractor bankruptcy','Low (0.2)','Very High (5)','1.0','Accept'],['R-02','Permit approval delays','High (0.8)','High (4)','3.2','Mitigate'],['R-03','Material price escalation','Medium (0.5)','Medium (3)','1.5','Transfer'],['R-04','Skilled labor shortage','High (0.7)','High (4)','2.8','Mitigate'],['R-05','Design change requests','Very High (0.9)','Medium (3)','2.7','Accept']]},
q2:`Which risk response assignment is MOST problematic?`,
opts:{A:`R-02: Mitigate permit approval delays.`,B:`R-01: Accept the risk of subcontractor bankruptcy.`,C:`R-05: Accept the very high probability of design change requests.`,D:`R-03: Transfer material price escalation through contract clause.`},
ans:'C',
exp:`R-05 has a 0.9 probability with Medium impact. Accepting a near-certain event is rarely appropriate — it should be mitigated or have a contingency response plan. R-01 accepting a low-probability/very-high-impact risk is defensible. R-02 and R-04 mitigation is appropriate. R-03 transfer via contract is standard practice.`},

{n:173,domain:'Business',approach:'Agile',type:'artifact',
q:`Review the following velocity and quality metrics for an agile team over six sprints.`,
artifact:{type:'table',
headers:['Sprint','Velocity (SP)','Bugs Found in Sprint','Bugs to Production','Team Satisfaction (1-5)'],
rows:[['Sprint 1','34','8','2','4.2'],['Sprint 2','38','10','3','4.0'],['Sprint 3','42','14','5','3.8'],['Sprint 4','45','18','8','3.5'],['Sprint 5','48','22','12','3.1'],['Sprint 6','51','27','15','2.8']]},
q2:`What does this data MOST clearly indicate?`,
opts:{A:`The team is high-performing — velocity has increased 50% over six sprints.`,B:`Velocity is increasing but quality and sustainability are deteriorating — the team is likely accumulating technical debt and cutting corners.`,C:`The team needs to reduce velocity to fix quality issues.`,D:`The product owner should remove bug-fixing stories to protect velocity.`},
ans:'B',
exp:`The data shows a classic technical debt pattern: velocity increases while bugs grow and team satisfaction drops. This suggests shortcuts are being taken. Celebrating velocity while ignoring quality and satisfaction trends is dangerous. Option C oversimplifies by blaming velocity rather than addressing root cause.`},

{n:174,domain:'People',approach:'Agile',type:'artifact',
q:`Review the following team health assessment data collected across three consecutive retrospectives.`,
artifact:{type:'table',
headers:['Dimension','Retro 1','Retro 2','Retro 3','Trend'],
rows:[['Psychological Safety','4.2','3.8','3.1','Declining'],['Clarity of Goal','3.5','3.6','3.7','Improving'],['Cross-functional Collaboration','3.8','3.4','2.9','Declining'],['Delivery Confidence','4.0','3.9','3.8','Slightly Declining'],['Fun and Engagement','3.6','3.0','2.4','Sharply Declining']]},
q2:`Based on the trend data, what should the scrum master address FIRST?`,
opts:{A:`Improve goal clarity since it is the lowest absolute score in Retro 1.`,B:`Focus on delivery confidence since it affects sprint output most directly.`,C:`Address the sharply declining psychological safety and engagement — these are leading indicators of team breakdown.`,D:`Celebrate the improving goal clarity as a team win before addressing other issues.`},
ans:'C',
exp:`Psychological safety (3.1, declining) and fun/engagement (2.4, sharply declining) are leading indicators — when these collapse, all other metrics follow. Goal clarity is improving. The trap is focusing on lowest absolute score rather than most dangerous trends.`},

{n:175,domain:'Process',approach:'Hybrid',type:'artifact',
q:`Review the following project portfolio dashboard for an organization with four active projects.`,
artifact:{type:'table',
headers:['Project','Budget ($K)','Spent ($K)','CPI','Strategic Fit (1-5)','Benefits (%)','Status'],
rows:[['Alpha','2,000','1,200','0.78','5','35%','Red'],['Beta','800','300','1.05','3','60%','Green'],['Gamma','1,500','400','0.95','4','20%','Amber'],['Delta','500','480','0.61','2','85%','Red']]},
q2:`The organization must reduce its portfolio by one project. Which project should MOST likely be terminated?`,
opts:{A:`Project Beta — it has the lowest strategic fit score.`,B:`Project Delta — worst CPI, lowest strategic fit, with nearly exhausted budget.`,C:`Project Alpha — Red status with the worst cost performance among large projects.`,D:`Project Gamma — low benefits realization despite low spend.`},
ans:'B',
exp:`Delta has CPI=0.61 (worst), strategic fit of 2 (lowest), spent 96% of budget, and is Red. This combination of poor efficiency, low strategic value, and near-exhausted budget makes it the strongest termination candidate. Alpha is large and troubled but has high strategic fit (5). Gamma is amber with 4/5 strategic fit — salvageable.`},

{n:176,domain:'Business',approach:'Predictive',type:'artifact',
q:`Review the following business case financial summary for a proposed $3.2M IT infrastructure project.`,
artifact:{type:'table',
headers:['Year','Investment ($K)','Net Benefits ($K)','Net Cash Flow ($K)','Cumulative ($K)'],
rows:[['Year 0','-3,200','0','-3,200','-3,200'],['Year 1','-200','800','+600','-2,600'],['Year 2','0','1,100','+1,100','-1,500'],['Year 3','0','1,100','+1,100','-400'],['Year 4','0','900','+900','+500'],['Year 5','0','800','+800','+1,300']]},
q2:`What is the approximate payback period, and what additional metric BEST complements it for investment decision-making?`,
opts:{A:`Payback is Year 3; ROI percentage is the best complementary metric.`,B:`Payback is mid-Year 4; NPV discounting cash flows at the hurdle rate best complements this analysis.`,C:`Payback is Year 4; IRR calculation is sufficient on its own.`,D:`Payback is Year 5; the project should be rejected since benefits decline in Years 4-5.`},
ans:'B',
exp:`Cumulative cash flow turns positive between Year 3 (-400) and Year 4 (+500), so payback is mid-Year 4. NPV applies a discount rate reflecting the time value of money — a critical complement to payback which ignores both time value and opportunity cost. IRR alone is insufficient. Declining benefits in later years are normal for mature IT systems.`},

// ── CASE STUDY (4) ──────────────────────────────────────
{n:177,domain:'People',approach:'Hybrid',type:'casestudy',
scenario:`SCENARIO — Digital Transformation at MercantileBank

MercantileBank is undertaking a $4.2M digital transformation program to modernize its core banking system. Program manager Sarah is 4 months into execution. She observes: the vendor (Workstream 1) is 3 weeks behind schedule and has not disclosed the reason; the agile team (Workstream 2) product owner is rarely available causing stories to sit unrefined; the audit team has raised a concern that the new platform may not meet updated Central Bank data residency requirements; the CFO has informally told Sarah the board expects go-live 2 months earlier than the current plan; two vendor engineers have bypassed their PM to privately report technical risks they believe are being hidden.`,
questions:[
{q:`The vendor engineers bypassed their PM to report hidden risks to Sarah. What should Sarah do FIRST?`,
opts:{A:`Immediately terminate the vendor contract for concealment of risks.`,B:`Meet privately with the vendor PM to surface the reported risks through proper channels while protecting the engineers from retaliation.`,C:`Hold a joint meeting with the engineers and vendor PM simultaneously to confront the issue.`,D:`Report the engineers to the vendor PM for violating the chain of command.`},
ans:'B'},
{q:`The agile team's product owner is consistently unavailable, leaving stories unrefined. What is the MOST effective intervention?`,
opts:{A:`Assign the scrum master to take over product owner responsibilities.`,B:`Escalate to the product owner's functional manager to enforce attendance.`,C:`Work with the product owner and their manager to either dedicate sufficient time or formally delegate refinement authority to a proxy product owner.`,D:`Allow the team to define their own acceptance criteria in the absence of the PO.`},
ans:'C'},
{q:`The regulatory compliance concern about data residency was raised last month. What does this represent and what should Sarah do?`,
opts:{A:`This is a risk that should be added to the risk register for monitoring.`,B:`This is an issue requiring immediate impact assessment since the regulation is already in effect — not a future uncertainty.`,C:`This is a scope change request that must go through the CCB.`,D:`This is a vendor problem since the platform is being built externally.`},
ans:'B'},
{q:`The CFO informally requested a 2-month schedule acceleration. How should Sarah respond?`,
opts:{A:`Immediately update the program schedule to reflect the board's expectation.`,B:`Acknowledge the expectation, conduct an impact analysis covering cost, scope, risk, and quality, and present options through formal change control.`,C:`Tell the CFO the timeline cannot change since it was already approved by the steering committee.`,D:`Ask the vendor to absorb the schedule compression.`},
ans:'B'},
{q:`Looking at all four issues simultaneously, which is the MOST critical risk to escalate to the sponsor immediately?`,
opts:{A:`The agile team's product owner availability issue.`,B:`The vendor's 3-week schedule delay.`,C:`The regulatory compliance gap — non-compliance with Central Bank requirements could halt the program regardless of other performance.`,D:`The CFO's accelerated go-live expectation.`},
ans:'C'}],
exp:`Regulatory non-compliance with a Central Bank requirement is existential — it cannot be resolved through schedule or resource adjustments alone and may require regulatory engagement. The other issues are serious but manageable within normal program management channels.`},

{n:178,domain:'Process',approach:'Predictive',type:'casestudy',
scenario:`SCENARIO — Infrastructure Modernization at CityGrid Utilities

CityGrid is replacing aging electrical grid infrastructure across three districts. The $28M project is in month 8 of 24. Project manager David reviews: SPI=0.87, CPI=0.91, both below target since month 5; of 47 identified risks, 12 have materialized and 3 had no documented response plan; a key subcontractor on the critical path has notified David they cannot meet the month-10 milestone due to equipment failure; the CCB has rejected 2 of the last 3 change requests for insufficient analysis; a new city ordinance last week requires additional environmental documentation for District 2, adding an estimated 6 weeks.`,
questions:[
{q:`Three risks materialized without response plans. What does this most directly indicate?`,
opts:{A:`The project team is inexperienced and should be replaced.`,B:`The risk register was not regularly reviewed and updated, and responses were not developed for all identified risks.`,C:`Risk registers should only document high-probability risks to avoid information overload.`,D:`The three risks were acceptable since they were presumably low-probability.`},
ans:'B'},
{q:`The critical-path subcontractor cannot meet the month-10 milestone. What should David do FIRST?`,
opts:{A:`Issue a default notice to the subcontractor immediately.`,B:`Identify the schedule impact, review contract terms for remedies, and present options (alternative subcontractor, expedited repair, re-sequencing) to the sponsor before the milestone date.`,C:`Remove the subcontractor and self-perform the work.`,D:`Request a project schedule extension from the city.`},
ans:'B'},
{q:`The CCB has rejected 2 of the last 3 change requests for insufficient analysis. What process improvement should David implement?`,
opts:{A:`Stop submitting change requests and manage changes informally.`,B:`Implement a change request template mandating impact analysis across cost, schedule, quality, risk, and resources before submission.`,C:`Request that the CCB lower its standards given the project complexity.`,D:`Escalate to the sponsor to override the CCB rejections.`},
ans:'B'},
{q:`The new city ordinance adds 6 weeks of compliance work in District 2. How should David classify and process this?`,
opts:{A:`As a risk, since it may or may not affect District 2 depending on interpretation.`,B:`As an issue to be resolved by the legal team without involving the project.`,C:`As an external compliance-driven scope change requiring impact analysis and formal change control, separate from the existing baseline.`,D:`As a force majeure event that automatically extends the project timeline.`},
ans:'C'},
{q:`Given persistent CPI=0.91 and SPI=0.87 since month 5 plus the new compliance requirement, what should David recommend to the sponsor?`,
opts:{A:`Rebaseline the project to reset performance metrics and present a clean picture.`,B:`Present a recovery plan with specific corrective actions, revised EAC incorporating the compliance scope, and honest assessment of whether the original completion date is still achievable.`,C:`Request emergency funding to hire additional resources to recover schedule.`,D:`Recommend project termination since both metrics are below 0.90.`},
ans:'B'}],
exp:`Transparent communication with a realistic recovery plan is the hallmark of professional project management. Rebaselining without corrective action hides problems; emergency funding without analysis is premature; termination at CPI=0.91 is an overreaction for a large infrastructure project.`},

{n:179,domain:'Business',approach:'Agile',type:'casestudy',
scenario:`SCENARIO — AI Product Launch at NovaTech Analytics

NovaTech is developing an AI-powered customer analytics platform using agile methods with 6-week release cycles. Product manager Lisa is preparing Release 3. Context: Release 1 adoption was 62% (target 75%); Release 2 adoption was 71% (target 75%); Release 3 backlog has 52 stories — 38 requested by the 3 largest enterprise clients, 14 internal innovation features; a competitor launched a feature NovaTech planned for Release 5, now urgently requested by two key clients; the development team flagged 4 stories carrying significant ML model integration risk not yet validated; NovaTech's largest client (40% of revenue) has contract renewal in 90 days.`,
questions:[
{q:`Adoption rates are below target. What should Lisa analyze FIRST before finalizing Release 3 scope?`,
opts:{A:`Which features were delivered in Release 1 that did not meet the 75% adoption target.`,B:`The root causes of low adoption in Releases 1 and 2 — whether the issue is feature relevance, discoverability, onboarding, or product-market fit.`,C:`How many stories the team can deliver in Release 3 to maximize feature count.`,D:`Which competitor features to copy to close the gap.`},
ans:'B'},
{q:`A competitor launched a Release-5 feature now urgently requested by two clients. What is the MOST balanced response?`,
opts:{A:`Immediately reprioritize the feature to Release 3 regardless of other commitments.`,B:`Assess the competitive impact, estimate the effort to accelerate, and present the trade-off to stakeholders — what would be removed from Release 3 to accommodate it.`,C:`Inform clients the feature will come in Release 5 as originally planned.`,D:`Build a minimal version in 2 weeks without involving the full team.`},
ans:'B'},
{q:`The team has flagged 4 stories with unvalidated ML integration risk. What should Lisa decide?`,
opts:{A:`Include the stories since the team can resolve risks during development.`,B:`Remove all 4 stories from Release 3 entirely.`,C:`Run a time-boxed technical spike before committing the stories, using findings to inform the go/no-go decision.`,D:`Replace the 4 stories with the competitor feature instead.`},
ans:'C'},
{q:`The largest client (40% of revenue) has a renewal in 90 days. How should this influence Release 3 prioritization?`,
opts:{A:`It should not influence Release 3 — product decisions must be feature-value driven.`,B:`Stories requested by the 3 largest enterprise clients, particularly from the 40% client, should be weighted higher in Release 3 given the renewal timeline.`,C:`NovaTech should promise the client any features they request to secure renewal.`,D:`Delay Release 3 until after the contract renewal is secured.`},
ans:'B'},
{q:`Lisa must decide Release 3 scope under all these constraints. What framework best guides her decision?`,
opts:{A:`Deliver the maximum number of stories to show team productivity.`,B:`Prioritize based on business risk first (renewal), then client-requested value, then competitive response, then innovation — while protecting technical quality through the spike.`,C:`Let the three largest clients vote on which features to include.`,D:`Use only cost of delay calculations to sequence all 52 stories.`},
ans:'B'}],
exp:`Effective product management under multiple constraints requires a coherent prioritization framework weighing business risk, client value, competitive context, and technical risk together — not optimization of any single dimension.`},

{n:180,domain:'Process',approach:'Hybrid',type:'casestudy',
scenario:`SCENARIO — Global ERP Implementation at Meridian Manufacturing

Meridian Manufacturing is implementing a global ERP system across 12 countries in a $45M hybrid program. Program manager James is in month 14 of 30. Status: Cluster A (Americas) completed go-live 3 weeks late, within budget, adoption 68%; Cluster B (Europe) has 2 months to go-live with CPI=0.88, SPI=0.82, and a new local data privacy regulation requiring a custom module not in original scope; Cluster C (Asia-Pacific) is 8 months to go-live, ahead of schedule, but using a non-standard integration approach not reviewed by central architecture; the ERP vendor has announced end-of-support 18 months post-program completion; a senior Cluster B stakeholder is lobbying to delay go-live by 3 months claiming the system is not ready.`,
questions:[
{q:`Cluster B needs a custom data privacy module not in original scope. How should James handle this?`,
opts:{A:`Direct the Cluster B team to build the module without formal approval since regulatory compliance is mandatory.`,B:`Initiate a formal change request documenting the regulatory requirement, cost and schedule impact, and options — present to the CCB for approval before building.`,C:`Remove Cluster B from the program scope and handle it as a separate project.`,D:`Ask the ERP vendor to provide the module at no cost.`},
ans:'B'},
{q:`Cluster C is ahead of schedule but using a non-standard integration approach not reviewed by central architecture. What is the PRIMARY risk?`,
opts:{A:`Cluster C is ahead of schedule so no action is needed.`,B:`The non-standard approach may create integration conflicts with other clusters or violate enterprise architecture standards, creating rework risk at program integration.`,C:`Cluster C should be slowed down to match other clusters.`,D:`The central architecture team should be dissolved since Cluster C succeeded without them.`},
ans:'B'},
{q:`The ERP vendor announced end-of-support 18 months after program completion. When should James raise this?`,
opts:{A:`After program completion since it is outside current scope.`,B:`Immediately — as a program-level risk to the sponsor and steering committee, since it affects the long-term business case and may require scope change to include upgrade planning.`,C:`During the final program retrospective.`,D:`Only if the steering committee asks.`},
ans:'B'},
{q:`A senior Cluster B stakeholder is lobbying to delay go-live by 3 months. What should James do?`,
opts:{A:`Agree to the delay since a senior stakeholder requested it.`,B:`Reject the delay since Cluster B is already behind schedule.`,C:`Engage the stakeholder to understand specific readiness concerns, assess whether they are substantiated, and present a structured go/no-go readiness assessment to the steering committee for an informed decision.`,D:`Escalate the stakeholder's behavior to the sponsor as interference.`},
ans:'C'},
{q:`Cluster A launched with 68% user adoption. What should James implement across remaining clusters based on this lesson?`,
opts:{A:`Nothing — 68% is sufficient for a global ERP launch.`,B:`Proactively build change management and training plans into remaining clusters' go-live preparation, with adoption KPIs tracked from day one post-launch.`,C:`Replace the Cluster A project manager since adoption targets were missed.`,D:`Delay Clusters B and C until Cluster A adoption reaches 85%.`},
ans:'B'}],
exp:`Lessons learned from Cluster A should be systematically applied. 68% adoption in a global ERP rollout indicates insufficient change management — a program-level risk for all remaining deployments.`}

]]
