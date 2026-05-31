// lib/ielts-reading-gt-data.ts
// 5 General Training Reading test pools.
// GT structure differs completely from Academic:
//   Section 1 (~14 Q): 2–3 short everyday/social texts
//   Section 2 (~13 Q): 2 workplace texts
//   Section 3 (~13 Q): 1 longer general-interest article
// Import this on the Reading page when format === "general"

import type { GTReadingTest } from "./ielts-types";
import { pickRandom } from "./ielts-types";

export const GT_READING_POOLS: GTReadingTest[] = [

  // ══════════════════════════════════════════════════════════
  // POOL GT-A
  // ══════════════════════════════════════════════════════════
  {
    id: "GT-A",
    label: "General Training Reading Test A",
    sections: [
      {
        sectionNumber: 1,
        label: "Section 1 – Everyday Texts",
        context: "You will read three short texts about renting property, a local library, and a gym notice.",
        instructions: "Questions 1–14: Answer the questions by choosing TRUE, FALSE, NOT GIVEN, or completing the gaps. Write NO MORE THAN TWO WORDS AND/OR A NUMBER.",
        texts: [
          {
            heading: "Text A – Flat to Let Advertisement",
            text: `SPACIOUS 2-BED FLAT TO LET — OAKFIELD ROAD
Available: 1st March. Rent: £1,150/month (all bills included except council tax).
Ground floor. Private garden. Off-street parking for one vehicle. No pets. References required. Minimum 12-month tenancy. Contact: Harvey Lettings on 0800 312 4422 or email harvey@harveylettings.co.uk. Viewing strictly by appointment.`,
          },
          {
            heading: "Text B – Millbrook Public Library – Opening Hours & Services",
            text: `Monday–Friday: 9:00–19:00 | Saturday: 9:00–17:00 | Sunday: CLOSED
Free internet access (up to 2 hours per day). Printing: 10p per page (black & white), 25p per page (colour). Self-service returns available 24 hours via external slot. Annual membership: FREE. Photocopying available at the circulation desk. Children's Story Hour: Saturdays at 10:30am. The library will be CLOSED on Bank Holidays. Contact us: millbrooklibrary@localgov.uk`,
          },
          {
            heading: "Text C – Riverside Fitness Centre – Member Notice",
            text: `Important: From Monday 15th April, the gym will undergo a 3-week refurbishment. During this period:
• The weights room and gym floor will be CLOSED.
• The swimming pool and fitness classes will remain open as normal.
• Members will receive a 30% reduction on their monthly fee for April.
• Guest passes are suspended during the refurbishment.
We apologise for any inconvenience. For queries, speak to a member of staff at reception.`,
          },
        ],
        questions: [
          { id: 1,  type: "tfng", q: "The flat on Oakfield Road includes council tax in the rental price.",            answer: "FALSE",     explanation: "Bills included 'except council tax'." },
          { id: 2,  type: "tfng", q: "Pets are permitted in the Oakfield Road flat.",                                  answer: "FALSE",     explanation: "'No pets' stated." },
          { id: 3,  type: "fill", q: "The minimum tenancy for the Oakfield Road flat: _____ months",                   answer: "12",        explanation: "Directly stated." },
          { id: 4,  type: "fill", q: "Viewings of the flat must be arranged by _____",                                 answer: "appointment", explanation: "'Strictly by appointment'." },
          { id: 5,  type: "tfng", q: "Millbrook Library is open on Sundays.",                                          answer: "FALSE",     explanation: "Sunday: CLOSED." },
          { id: 6,  type: "fill", q: "Maximum free internet access per day at the library: _____ hours",              answer: "2",         explanation: "Directly stated." },
          { id: 7,  type: "fill", q: "Cost of colour printing at the library: _____p per page",                       answer: "25",        explanation: "Directly stated." },
          { id: 8,  type: "tfng", q: "Library membership has an annual charge.",                                       answer: "FALSE",     explanation: "'Annual membership: FREE'." },
          { id: 9,  type: "fill", q: "Children's Story Hour at the library: Saturdays at _____",                      answer: "10:30",     explanation: "Directly stated." },
          { id: 10, type: "fill", q: "Riverside Fitness refurbishment duration: _____ weeks",                          answer: "3",         explanation: "Directly stated." },
          { id: 11, type: "tfng", q: "The swimming pool will close during the gym refurbishment.",                     answer: "FALSE",     explanation: "'Swimming pool and fitness classes will remain open as normal'." },
          { id: 12, type: "fill", q: "Members' monthly fee reduction during refurbishment: _____%",                   answer: "30",        explanation: "Directly stated." },
          { id: 13, type: "tfng", q: "Guest passes will still be available during the refurbishment.",                 answer: "FALSE",     explanation: "'Guest passes are suspended'." },
          { id: 14, type: "fill", q: "For refurbishment queries, members should speak to staff at _____",              answer: "reception", explanation: "Directly stated." },
        ],
      },
      {
        sectionNumber: 2,
        label: "Section 2 – Workplace Texts",
        context: "You will read extracts from a staff induction handbook and a remote working policy.",
        instructions: "Questions 15–27: Choose the correct letter A, B, C, or D, or complete the gaps.",
        texts: [
          {
            heading: "Text D – Meridian Solutions: New Employee Induction Handbook (Extract)",
            text: `Welcome to Meridian Solutions. Your first week will be structured around three areas:

Security & Access: Your ID badge will be ready at reception on your first morning. You must wear it visibly at all times in the building. Report any loss immediately to the Facilities team on extension 2200. Temporary passes are available while a replacement is processed.

IT Setup: Your laptop and login credentials will be configured before arrival. If you experience any technical issues, contact the IT Helpdesk on extension 4400 (8am–6pm Monday–Friday). After hours, use the self-service portal at it.meridiansolutions.com. Do not install unapproved software on company devices.

Health & Safety: Complete the mandatory online safety training within your first 48 hours — your line manager will send the link. Report all accidents, near-misses, and hazards to your line manager and complete a digital incident form within 24 hours of any incident. First aid boxes are located on every floor near the lift.`,
          },
          {
            heading: "Text E – Meridian Solutions: Remote and Hybrid Working Policy (Extract)",
            text: `Eligibility: Remote working arrangements are available to permanent employees who have completed their probationary period (minimum 3 months). Fixed-term and temporary staff are not eligible.

Arrangements: The standard hybrid arrangement is a minimum of 3 days per week in the office. Variations must be agreed with your line manager and approved by HR in advance. Ad-hoc remote working (e.g. for a medical appointment) does not require formal approval but should be communicated to your manager on the day.

Equipment: The company will provide a laptop and a monitor for approved home working. Employees are responsible for ensuring a safe and appropriate home working environment. The company does not fund additional equipment beyond the standard provision unless agreed in advance by HR.

Data & Security: When working remotely, employees must connect via the company VPN at all times. Company data must not be stored on personal devices. Any security incidents must be reported within one hour to IT Security via security@meridiansolutions.com.`,
          },
        ],
        questions: [
          { id: 15, type: "fill", q: "ID badges are collected from _____ on the first morning",                        answer: "reception",  explanation: "Text D, Security section." },
          { id: 16, type: "fill", q: "Lost ID badges: report immediately to the _____ team",                           answer: "Facilities", explanation: "Text D." },
          { id: 17, type: "mcq",  q: "IT Helpdesk out-of-hours support is available via:",                             opts: ["A. Phone extension 4400", "B. A self-service portal", "C. Email to IT", "D. Your line manager"], answer: "B", explanation: "Text D, IT Setup section." },
          { id: 18, type: "fill", q: "Online safety training must be completed within _____ hours",                    answer: "48",         explanation: "Text D, Health & Safety section." },
          { id: 19, type: "fill", q: "Digital incident forms must be completed within _____ hours of any incident",   answer: "24",         explanation: "Text D." },
          { id: 20, type: "fill", q: "First aid boxes are located near the _____ on every floor",                     answer: "lift",       explanation: "Text D." },
          { id: 21, type: "mcq",  q: "Remote working is available to:",                                               opts: ["A. All employees from day one", "B. Permanent employees after probation", "C. Fixed-term staff", "D. All permanent staff immediately"], answer: "B", explanation: "Text E, Eligibility section." },
          { id: 22, type: "fill", q: "Minimum probationary period: _____ months",                                     answer: "3",          explanation: "Text E." },
          { id: 23, type: "fill", q: "Standard hybrid arrangement: minimum _____ days per week in the office",        answer: "3",          explanation: "Text E, Arrangements section." },
          { id: 24, type: "tfng", q: "Ad-hoc remote working requires formal HR approval.",                             answer: "FALSE",      explanation: "'Does not require formal approval'." },
          { id: 25, type: "tfng", q: "The company will fund any home office equipment the employee requests.",         answer: "FALSE",      explanation: "'Does not fund additional equipment beyond standard provision unless agreed'." },
          { id: 26, type: "fill", q: "When working remotely, employees must connect via company _____",                answer: "VPN",        explanation: "Text E, Data & Security." },
          { id: 27, type: "fill", q: "Security incidents must be reported within _____ hour(s) to IT Security",       answer: "1",          explanation: "Text E." },
        ],
      },
      {
        sectionNumber: 3,
        label: "Section 3 – General Reading",
        context: "A longer general-interest article about the science of habits and behaviour change.",
        instructions: "Questions 28–40: Answer the questions. TRUE/FALSE/NOT GIVEN or fill in the gaps as instructed.",
        texts: [
          {
            heading: "The Habit Loop: Why Behaviour Change Is So Hard (and How to Make It Stick)",
            text: `Every human action is a potential habit. From the route we take to work to the order in which we wash our hair, the brain is constantly seeking opportunities to convert deliberate decisions into automatic behaviours. Understanding why habits are so powerful — and so resistant to change — is now one of the most commercially and clinically relevant areas of behavioural science.

The foundational model of habit formation is the three-part loop: cue, routine, reward. A cue is any trigger that initiates behaviour — a time of day, an emotional state, a location, a preceding action, or the presence of certain people. The routine is the behaviour itself. The reward is what the brain receives at the end, reinforcing the neural pathway that connects cue to routine. Over time, with repetition, this pathway becomes deeply encoded in the basal ganglia — a region of the brain associated with procedural learning — and the behaviour becomes automatic, requiring minimal conscious effort.

This automaticity is both a feature and a bug. It frees conscious attention for more complex tasks; an experienced driver navigates familiar roads while holding a conversation, something a learner cannot do. But it also makes habits stubbornly persistent. Because the neural pathway is encoded in the basal ganglia rather than the prefrontal cortex — the seat of deliberate reasoning — it remains accessible even when the prefrontal cortex is impaired by stress, fatigue, or intoxication. This is why people revert to old habits under pressure.

The concept of willpower as a limited resource was popularised by Roy Baumeister's ego depletion theory, published in 1998, which proposed that self-control draws on a finite pool of mental energy that becomes depleted with use. While subsequent research has challenged whether ego depletion is as straightforward as originally proposed, the practical implication holds: relying solely on willpower for behaviour change is fragile. More durable strategies include environmental design — arranging one's physical environment to make desired behaviours easy and undesired ones difficult — and implementation intentions, which involve specifying in advance when, where, and how a new behaviour will be performed.

Research by Phillippa Lally and colleagues at University College London found that forming a new habit takes an average of sixty-six days — not the commonly cited twenty-one days, which originated from misinterpretation of plastic surgeon Maxwell Maltz's observations about patients adjusting to physical changes. The sixty-six day figure, moreover, varied considerably by individual and behaviour type, from eighteen days for simple behaviours to over two hundred for complex ones. Missing a single day did not meaningfully disrupt habit formation, which has practical implications for behaviour change programmes.`,
          },
        ],
        questions: [
          { id: 28, type: "fill", q: "The habit loop consists of three parts: cue, routine, and _____",               answer: "reward",     explanation: "Paragraph 2." },
          { id: 29, type: "fill", q: "The brain region where habits are encoded: the basal _____",                    answer: "ganglia",   explanation: "Paragraph 2." },
          { id: 30, type: "tfng", q: "An experienced driver cannot hold a conversation while driving.",               answer: "FALSE",     explanation: "The text says they can — 'an experienced driver navigates familiar roads while holding a conversation'." },
          { id: 31, type: "fill", q: "Habits are encoded in the basal ganglia rather than the prefrontal _____",      answer: "cortex",    explanation: "Paragraph 3." },
          { id: 32, type: "tfng", q: "Habitual behaviour is more resistant under stress than under normal conditions.", answer: "FALSE",    explanation: "People 'revert to old habits under pressure' — habits become more dominant under stress." },
          { id: 33, type: "fill", q: "Ego depletion theory was proposed by Roy _____ in 1998",                        answer: "Baumeister", explanation: "Paragraph 4." },
          { id: 34, type: "tfng", q: "Subsequent research has fully confirmed ego depletion theory exactly as proposed.", answer: "FALSE",  explanation: "'Subsequent research has challenged' it." },
          { id: 35, type: "fill", q: "Arranging one's environment to make desired behaviours easy: _____ design",      answer: "environmental", explanation: "Paragraph 4." },
          { id: 36, type: "fill", q: "Specifying in advance when, where, and how to perform a behaviour: _____ intentions", answer: "implementation", explanation: "Paragraph 4." },
          { id: 37, type: "fill", q: "UCL research found new habits take an average of _____ days",                   answer: "66",        explanation: "Final paragraph." },
          { id: 38, type: "fill", q: "The commonly cited '21 days' originated from observations by plastic surgeon _____ Maltz", answer: "Maxwell", explanation: "Final paragraph." },
          { id: 39, type: "tfng", q: "Missing a single day seriously disrupts habit formation.",                       answer: "FALSE",     explanation: "'Missing a single day did not meaningfully disrupt habit formation'." },
          { id: 40, type: "tfng", q: "The time to form a habit is the same regardless of the type of behaviour.",    answer: "FALSE",     explanation: "'Varied considerably by individual and behaviour type'." },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════
  // POOL GT-B
  // ══════════════════════════════════════════════════════════
  {
    id: "GT-B",
    label: "General Training Reading Test B",
    sections: [
      {
        sectionNumber: 1,
        label: "Section 1 – Everyday Texts",
        context: "A car hire booking confirmation, a community notice board post, and a pharmacy information leaflet.",
        instructions: "Questions 1–14: TRUE/FALSE/NOT GIVEN or complete the gaps with NO MORE THAN TWO WORDS AND/OR A NUMBER.",
        texts: [
          {
            heading: "Text A – Sunshine Car Hire: Booking Confirmation",
            text: `Booking Reference: SCH-449201
Customer: James Okafor | Pick-up: Bristol Airport | Date: 14 June | Time: 09:00
Drop-off: Same location | Return date: 21 June | Time: before 09:00
Vehicle: Ford Focus (or similar) | Fuel policy: Full-to-Full (collect full, return full)
Included: Unlimited mileage, third-party liability, breakdown cover
NOT included: Collision Damage Waiver (CDW) — available at desk for £14/day
Driver must present: Driving licence, booking confirmation, credit card in driver's name
Additional driver: £8/day (must be present at collection with own driving licence)
Cancellations: Free up to 48 hours before pick-up. Within 48 hours: one day's rental charge applies.`,
          },
          {
            heading: "Text B – Community Notice Board: Thornton Park Litter Pick",
            text: `JOIN US FOR OUR MONTHLY LITTER PICK — Saturday 22nd June, 9am–12 noon
Meeting point: Thornton Park main gate (Elm Street entrance)
Equipment provided: gloves, litter pickers, and high-visibility vests
Please wear: sturdy footwear and weather-appropriate clothing
Refreshments: tea and biscuits provided afterwards at the park café
All ages welcome. Children under 14 must be accompanied by an adult.
Register in advance at thorntonfriendsgroup.org or simply turn up on the day.
Organised by the Friends of Thornton Park — volunteers always needed!`,
          },
          {
            heading: "Text C – Westgate Pharmacy: Travel Health Services",
            text: `Planning a trip abroad? Our pharmacists offer:
✓ Travel vaccinations (appointment required — book online or call 01332 889441)
✓ Malaria prevention tablets (prescription required for some destinations)
✓ Travel health consultations: 30 minutes — £25 (free for under-16s)
✓ First aid travel kits: from £12.99
Appointments available Monday–Saturday, 9am–5pm. Walk-ins for travel advice accepted during quieter periods (no guarantee). We require at least 4 weeks' notice for full travel vaccination courses. All services subject to availability.`,
          },
        ],
        questions: [
          { id: 1,  type: "fill", q: "Car hire booking reference: _____",                                              answer: "SCH-449201", explanation: "Directly stated." },
          { id: 2,  type: "fill", q: "The vehicle must be returned by _____ on 21 June",                              answer: "09:00",      explanation: "'Before 09:00'." },
          { id: 3,  type: "tfng", q: "Collision Damage Waiver is included in the basic booking price.",                answer: "FALSE",      explanation: "'NOT included'." },
          { id: 4,  type: "fill", q: "Additional driver charge: £_____ per day",                                      answer: "8",          explanation: "Directly stated." },
          { id: 5,  type: "fill", q: "Free cancellation deadline: _____ hours before pick-up",                        answer: "48",         explanation: "Directly stated." },
          { id: 6,  type: "fill", q: "Litter pick event: Saturday _____ June",                                        answer: "22nd",       explanation: "Text B." },
          { id: 7,  type: "fill", q: "Litter pick meeting point: Thornton Park _____ gate",                           answer: "main",       explanation: "Text B." },
          { id: 8,  type: "tfng", q: "Children of any age may attend the litter pick without an adult.",              answer: "FALSE",      explanation: "'Under 14 must be accompanied by an adult'." },
          { id: 9,  type: "tfng", q: "Registration is required to attend the litter pick.",                            answer: "FALSE",      explanation: "'Simply turn up on the day'." },
          { id: 10, type: "fill", q: "Pharmacy travel health consultation fee: £_____ (30 minutes)",                  answer: "25",         explanation: "Text C." },
          { id: 11, type: "tfng", q: "Travel health consultations are free for all customers.",                        answer: "FALSE",      explanation: "Free only for under-16s." },
          { id: 12, type: "fill", q: "Minimum notice required for full vaccination courses: _____ weeks",              answer: "4",          explanation: "Text C." },
          { id: 13, type: "tfng", q: "Walk-in travel advice is guaranteed to be available.",                           answer: "FALSE",      explanation: "'No guarantee'." },
          { id: 14, type: "fill", q: "Pharmacy appointments available: Monday to _____",                               answer: "Saturday",   explanation: "Text C." },
        ],
      },
      {
        sectionNumber: 2,
        label: "Section 2 – Workplace Texts",
        context: "Extracts from a company travel and expenses policy and a performance review procedure.",
        instructions: "Questions 15–27: Answer the questions. Choose A, B, C, or D, or write NO MORE THAN TWO WORDS AND/OR A NUMBER.",
        texts: [
          {
            heading: "Text D – Kestrel Publishing: Travel and Expenses Policy (Extract)",
            text: `1. Pre-approval: All business travel costing over £500 (excluding accommodation) requires written pre-approval from your line manager via the expense portal before booking.

2. Booking: Where possible, book at least 14 days in advance to obtain discounted fares. All bookings must be made through the company's approved travel agent, Meridian Travel (ext. 5500), or the online booking portal. Personal bookings cannot be reimbursed.

3. Accommodation: The standard hotel rate is up to £120 per night in the UK and £150 per night abroad. Exceptions must be justified and approved in advance.

4. Meals: Daily meal allowances are: breakfast £8, lunch £12, dinner £20. Alcohol is not reimbursable. Receipts are required for all individual claims over £10.

5. Mileage: Reimbursed at 45p per mile for the first 10,000 miles per tax year, then 25p per mile thereafter.

6. Submission: Expense claims must be submitted within 30 days of the expense being incurred. Late claims may not be reimbursed.`,
          },
          {
            heading: "Text E – Kestrel Publishing: Annual Performance Review Procedure (Extract)",
            text: `The annual performance review is a two-way conversation between employee and line manager. Reviews must be completed between 1st and 28th February each year.

Preparation: At least one week before the review, employees must complete the self-assessment form on the HR portal. Line managers must review the employee's objectives, any training completed, and any commendations or concerns noted during the year.

The review meeting: typically 60–90 minutes. The meeting should cover: progress against objectives, strengths demonstrated, areas for development, agreed objectives for the following year, and any training or support needed.

Ratings: Each employee receives a performance rating on a five-point scale: 1 (Below expectations), 2 (Partially meets expectations), 3 (Meets expectations), 4 (Exceeds expectations), 5 (Outstanding).

Outcomes: Employees rated 4 or 5 are eligible for a performance bonus (amount determined by the board annually). Employees rated 1 are placed on a formal improvement plan. Ratings of 2 are reviewed again after 3 months.

All review documentation must be submitted to HR within 5 working days of the meeting.`,
          },
        ],
        questions: [
          { id: 15, type: "fill", q: "Travel pre-approval is required for journeys costing over £_____",              answer: "500",        explanation: "Text D, clause 1." },
          { id: 16, type: "fill", q: "Advance booking target to obtain discounted fares: _____ days",                 answer: "14",         explanation: "Text D, clause 2." },
          { id: 17, type: "tfng", q: "Personal travel bookings can be reimbursed if receipts are provided.",          answer: "FALSE",      explanation: "'Personal bookings cannot be reimbursed'." },
          { id: 18, type: "fill", q: "Standard UK hotel rate: up to £_____ per night",                               answer: "120",        explanation: "Text D, clause 3." },
          { id: 19, type: "fill", q: "Daily dinner allowance: £_____",                                               answer: "20",         explanation: "Text D, clause 4." },
          { id: 20, type: "tfng", q: "Alcohol costs can be claimed as part of the meal allowance.",                   answer: "FALSE",      explanation: "'Alcohol is not reimbursable'." },
          { id: 21, type: "fill", q: "Mileage rate for first 10,000 miles: _____p per mile",                         answer: "45",         explanation: "Text D, clause 5." },
          { id: 22, type: "fill", q: "Expense claims must be submitted within _____ days",                            answer: "30",         explanation: "Text D, clause 6." },
          { id: 23, type: "fill", q: "Annual reviews must be completed between 1st and _____ February",              answer: "28th",       explanation: "Text E." },
          { id: 24, type: "fill", q: "Self-assessment form must be completed at least _____ before the review",      answer: "1 week",     explanation: "Text E, Preparation section." },
          { id: 25, type: "mcq",  q: "A performance rating of 2 means the employee:",                                opts: ["A. Is placed on a formal improvement plan", "B. Is eligible for a bonus", "C. Is reviewed again after 3 months", "D. Exceeds expectations"], answer: "C", explanation: "Text E, Outcomes section." },
          { id: 26, type: "fill", q: "Employees rated _____ or 5 are eligible for a performance bonus",              answer: "4",          explanation: "Text E." },
          { id: 27, type: "fill", q: "Review documentation submitted to HR within _____ working days of meeting",    answer: "5",          explanation: "Text E." },
        ],
      },
      {
        sectionNumber: 3,
        label: "Section 3 – General Reading",
        context: "A longer article about the science of colour and its psychological effects.",
        instructions: "Questions 28–40: TRUE/FALSE/NOT GIVEN or complete the gaps.",
        texts: [
          {
            heading: "The Psychology of Colour",
            text: `Colour is one of the most powerful non-verbal communicators available to designers, marketers, and architects. It can alter perceived temperature, affect appetite, influence purchasing decisions, and — in clinical settings — impact patient recovery. Yet the science of colour psychology is considerably more complex than popular accounts suggest, and many widely circulated claims fail to hold up under rigorous experimental scrutiny.

The most-cited finding in colour psychology is the calming effect of blue. Blue environments have been associated with lower heart rates and reduced feelings of tension in multiple studies. Pink — specifically a shade known as Baker-Miller pink, developed in the 1970s by researcher Alexander Schauss — was briefly championed as a tool for reducing aggression in prison cells. However, subsequent research found that any initial calming effect diminishes rapidly, and some studies found no significant effect at all. The story of Baker-Miller pink illustrates a recurring problem in colour psychology: initial findings are often overgeneralised before adequate replication has occurred.

Red presents a similarly complex picture. Studies by Andrew Elliot and colleagues have found that exposure to red before cognitive tests reduces performance, apparently by triggering avoidance motivation — an instinctive response evolved in the context of warning signals and blood. However, red also appears to enhance performance on tasks requiring strength and attention to detail, and the same colour that undermines performance on an intellectual task may enhance performance on a physical one. Context, therefore, mediates the effect of colour in ways that simplistic colour-mood associations fail to capture.

In consumer contexts, colour is used deliberately and strategically. Research on restaurant design has found that cool colours — blue and green — tend to reduce appetite and encourage lingering, while warm colours — red, orange, and yellow — stimulate appetite and encourage faster table turnover. This explains the palette choices of many fast food chains. In retail, studies have found that consumers rate products in more sophisticated packaging colours — notably black, silver, and gold — as higher quality, a finding that has been extensively exploited in premium product marketing.

The relationship between colour and culture adds another layer of complexity. White is associated with purity and weddings in many Western cultures but with mourning in parts of East Asia. Green carries different connotations in Islamic and Irish contexts. These cultural variations mean that colour psychology research conducted in one cultural setting may not generalise to another — a limitation that much of the existing research base does not adequately address.

Despite these complications, the practical applications of colour psychology continue to expand. Hospitals increasingly use colour-differentiated wayfinding systems to reduce patient anxiety. Workplaces are designed with colour-zone principles — green for creative spaces, blue for focused work, red for high-energy collaboration areas. Whether the evidence fully supports these applications remains debatable, but the intuitive appeal of using colour intentionally is unlikely to diminish.`,
          },
        ],
        questions: [
          { id: 28, type: "tfng", q: "Blue environments are associated with lower heart rates in multiple studies.",  answer: "TRUE",      explanation: "Paragraph 2." },
          { id: 29, type: "fill", q: "Baker-Miller pink was developed in the 1970s by _____",                         answer: "Alexander Schauss", explanation: "Paragraph 2." },
          { id: 30, type: "tfng", q: "Subsequent research confirmed that Baker-Miller pink permanently reduces aggression.", answer: "FALSE", explanation: "'Any initial calming effect diminishes rapidly'." },
          { id: 31, type: "fill", q: "Red before cognitive tests reduces performance by triggering _____ motivation", answer: "avoidance", explanation: "Paragraph 3." },
          { id: 32, type: "tfng", q: "Red consistently improves performance on all types of tasks.",                   answer: "FALSE",     explanation: "Red reduces performance on intellectual tasks but may enhance physical ones." },
          { id: 33, type: "fill", q: "Cool restaurant colours — blue and green — tend to reduce _____ and encourage lingering", answer: "appetite", explanation: "Paragraph 4." },
          { id: 34, type: "mcq",  q: "Warm colours in restaurants primarily aim to:",                                 opts: ["A. Reduce appetite", "B. Encourage lingering", "C. Stimulate appetite and faster turnover", "D. Signal food quality"], answer: "C", explanation: "Paragraph 4." },
          { id: 35, type: "tfng", q: "In all cultures, white is associated with mourning.",                           answer: "FALSE",     explanation: "White is associated with mourning 'in parts of East Asia' — not all cultures." },
          { id: 36, type: "tfng", q: "Most colour psychology research adequately accounts for cultural variation.",   answer: "FALSE",     explanation: "'Much of the existing research base does not adequately address' this." },
          { id: 37, type: "fill", q: "Hospitals use colour-differentiated _____ systems to reduce patient anxiety",   answer: "wayfinding", explanation: "Final paragraph." },
          { id: 38, type: "fill", q: "Colour zone for focused work: _____",                                          answer: "blue",      explanation: "Final paragraph." },
          { id: 39, type: "tfng", q: "The evidence fully supports all workplace colour-zone applications.",           answer: "NOT GIVEN", explanation: "'Whether the evidence fully supports these applications remains debatable'." },
          { id: 40, type: "fill", q: "Products in black, silver, or gold packaging are rated as higher _____ by consumers", answer: "quality", explanation: "Paragraph 4." },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════
  // POOL GT-C
  // ══════════════════════════════════════════════════════════
  {
    id: "GT-C",
    label: "General Training Reading Test C",
    sections: [
      {
        sectionNumber: 1,
        label: "Section 1 – Everyday Texts",
        context: "Rail passenger rights notice, airport hotel shuttle information, and a local library services update.",
        instructions: "Questions 1–14: TRUE/FALSE/NOT GIVEN or complete the gaps.",
        texts: [
          {
            heading: "Text A – Train Passenger Rights Summary (National Rail)",
            text: `YOUR RIGHTS WHEN TRAINS ARE DELAYED
• Delays of 15–29 minutes: 25% refund of the single journey price.
• Delays of 30–59 minutes: 50% refund.
• Delays of 60 minutes or more: 100% refund of the single journey price.
• Season ticket holders: compensation calculated on a per-journey basis.
How to claim: Within 28 days of travel via the train operator's website, app, or customer service desk. Proof of purchase required. Cash refunds are not available — compensation is issued as rail vouchers or bank transfer. Claims relating to strikes are not eligible for compensation.`,
          },
          {
            heading: "Text B – Heathrow Premier Inn: Shuttle Bus Information",
            text: `FREE SHUTTLE BUS SERVICE — TERMINAL 5 ONLY
• Departures from hotel: Every 30 minutes, 04:00–23:30 daily.
• Journey time to terminal: approximately 10 minutes.
• Last shuttle from Terminal 5 back to hotel: 23:30.
• Shuttle operates to Terminal 5 only. For Terminals 1, 2, 3, and 4: use the Heathrow Express or London Underground (Piccadilly line).
• Luggage: Maximum 2 pieces per passenger. Oversized items cannot be accommodated.
• Booking: No booking required — just present at the shuttle bay outside the main hotel entrance.`,
          },
          {
            heading: "Text C – Greenford Library: New Services from September",
            text: `We are pleased to announce the following new services from 1st September:
• Digital Lending: Borrow e-books and audiobooks via the LibbyApp — free with your library card, up to 5 titles at a time, 3-week loan period.
• 3D Printing Station: Available Tuesdays and Thursdays, 10am–4pm. Bookings required via our website (max. 1-hour slot per member per week). Small charge applies for materials (from 50p).
• Quiet Study Room: Open to all members aged 16 and over. Available daily 9am–8pm. No food or drinks permitted.
• Family Digital Drop-in: Every Saturday, 10am–12pm — free digital skills sessions for families with children aged 5–12.`,
          },
        ],
        questions: [
          { id: 1,  type: "fill", q: "Refund for a 45-minute delay: _____% of single journey price",                  answer: "50",         explanation: "Text A: 30–59 minutes = 50%." },
          { id: 2,  type: "tfng", q: "Cash refunds are available for delayed journeys.",                               answer: "FALSE",      explanation: "'Cash refunds are not available'." },
          { id: 3,  type: "fill", q: "Deadline for submitting a delay claim: within _____ days of travel",            answer: "28",         explanation: "Text A." },
          { id: 4,  type: "tfng", q: "Delays caused by strikes are eligible for compensation.",                        answer: "FALSE",      explanation: "'Claims relating to strikes are not eligible'." },
          { id: 5,  type: "fill", q: "Shuttle bus service available to: Terminal _____ only",                         answer: "5",          explanation: "Text B." },
          { id: 6,  type: "fill", q: "Shuttle frequency: every _____ minutes",                                        answer: "30",         explanation: "Text B." },
          { id: 7,  type: "fill", q: "Maximum luggage pieces per passenger on shuttle: _____",                        answer: "2",          explanation: "Text B." },
          { id: 8,  type: "tfng", q: "The shuttle bus serves all Heathrow terminals.",                                 answer: "FALSE",      explanation: "'Terminal 5 only'." },
          { id: 9,  type: "tfng", q: "The shuttle service requires advance booking.",                                  answer: "FALSE",      explanation: "'No booking required'." },
          { id: 10, type: "fill", q: "Maximum e-books borrowed at one time via LibbyApp: _____",                      answer: "5",          explanation: "Text C." },
          { id: 11, type: "fill", q: "3D printing available: Tuesdays and _____",                                    answer: "Thursdays",  explanation: "Text C." },
          { id: 12, type: "fill", q: "Maximum 3D printing slot per member per week: _____ hour",                     answer: "1",          explanation: "Text C." },
          { id: 13, type: "fill", q: "Quiet Study Room: minimum age _____",                                          answer: "16",         explanation: "Text C." },
          { id: 14, type: "tfng", q: "Food and drinks are permitted in the Quiet Study Room.",                         answer: "FALSE",      explanation: "'No food or drinks permitted'." },
        ],
      },
      {
        sectionNumber: 2,
        label: "Section 2 – Workplace Texts",
        context: "Extracts from an office relocation guide and an environmental sustainability policy.",
        instructions: "Questions 15–27: Complete the gaps or choose A, B, C, or D.",
        texts: [
          {
            heading: "Text D – Office Relocation: Staff Guide (Extract)",
            text: `We are moving to our new headquarters at 14 Canary Wharf Square on Monday 10th October. Please read the following carefully.

Transport: The new office is a 5-minute walk from Canary Wharf Underground station (Jubilee line) and a 10-minute walk from West India Quay DLR station. Car parking is not provided at the new premises. The company will reimburse monthly public transport costs for employees whose commute costs increase by more than £30 per month — apply via HR within 60 days of the move.

IT and Equipment: All IT equipment will be moved by the company's contracted removals firm on the weekend of 8–9th October. Do not pack your own IT equipment. Personal items (books, plants, desk accessories) should be packed in the labelled boxes that will be distributed the week before the move. Clearly label all boxes with your name and department.

First Day at New Office: Building access cards will be distributed at reception from 8:30am on 10th October. A floor plan and seating guide will be available at reception and on the intranet. A welcome breakfast will be provided in the main meeting room from 8:30am to 9:30am.`,
          },
          {
            heading: "Text E – Cloverfield Group: Environmental Sustainability Policy (Extract)",
            text: `Cloverfield Group is committed to reducing its environmental footprint. The following practices are mandatory for all employees and sites:

Energy: All lights and non-essential electrical equipment must be switched off when leaving the office. Air conditioning should not be set below 22°C in summer or heating above 20°C in winter.

Waste: Paper recycling bins are provided at every workstation. General waste, food waste, and recyclables must be separated into the correctly labelled bins in kitchen areas. Single-use plastic cups and cutlery are banned across all Cloverfield premises from January 2024.

Travel: Video conferencing must be considered before booking any travel. International flights require director-level approval. Domestic rail travel is preferred over air travel where the journey time difference is less than 2 hours. Where driving is necessary, employees are encouraged to use the company's pool electric vehicles.

Reporting: Each department must submit a quarterly sustainability report to the Environmental Manager by the last working day of March, June, September, and December.`,
          },
        ],
        questions: [
          { id: 15, type: "fill", q: "New office address: 14 _____ Square",                                           answer: "Canary Wharf", explanation: "Text D." },
          { id: 16, type: "fill", q: "Moving date: Monday _____ October",                                             answer: "10th",       explanation: "Text D." },
          { id: 17, type: "fill", q: "Walk from Canary Wharf Underground to new office: _____ minutes",               answer: "5",          explanation: "Text D." },
          { id: 18, type: "tfng", q: "Car parking is provided at the new premises.",                                   answer: "FALSE",      explanation: "'Car parking is not provided'." },
          { id: 19, type: "fill", q: "Transport cost reimbursement: commute increase must exceed £_____ per month",    answer: "30",         explanation: "Text D." },
          { id: 20, type: "fill", q: "Deadline to apply for transport reimbursement: within _____ days of the move",  answer: "60",         explanation: "Text D." },
          { id: 21, type: "tfng", q: "Employees should pack their own IT equipment before the move.",                  answer: "FALSE",      explanation: "'Do not pack your own IT equipment'." },
          { id: 22, type: "fill", q: "Building access cards distributed from _____ on the first day",                 answer: "8:30",       explanation: "Text D." },
          { id: 23, type: "fill", q: "Minimum AC temperature in summer: _____ °C",                                   answer: "22",         explanation: "Text E." },
          { id: 24, type: "tfng", q: "Single-use plastic was banned across Cloverfield from January 2024.",            answer: "TRUE",       explanation: "Text E, Waste section." },
          { id: 25, type: "fill", q: "International flights require _____ -level approval",                            answer: "director",   explanation: "Text E, Travel section." },
          { id: 26, type: "mcq",  q: "Rail is preferred over air when the journey time difference is less than:",     opts: ["A. 1 hour", "B. 90 minutes", "C. 2 hours", "D. 3 hours"], answer: "C", explanation: "Text E, Travel section." },
          { id: 27, type: "fill", q: "Quarterly sustainability reports submitted to the _____ Manager",                answer: "Environmental", explanation: "Text E, Reporting section." },
        ],
      },
      {
        sectionNumber: 3,
        label: "Section 3 – General Reading",
        context: "A long article about citizen science and its impact on research.",
        instructions: "Questions 28–40: TRUE/FALSE/NOT GIVEN or complete the gaps.",
        texts: [
          {
            heading: "Citizen Science: When Everyone Becomes a Researcher",
            text: `The term "citizen science" — the involvement of non-professional volunteers in scientific research — has existed in various forms for centuries. Amateur naturalists contributed significantly to natural history in the eighteenth and nineteenth centuries; birdwatchers have been systematically recording species distributions since at least the 1900s. What is genuinely new is the scale at which citizen science now operates, enabled by smartphones, internet connectivity, and a new generation of platforms designed to harness public participation.

The Zooniverse platform, launched in 2007, offers perhaps the best-documented example of modern citizen science at scale. The platform hosts hundreds of projects across disciplines from astronomy to zoology, in which volunteers classify images, transcribe historical documents, or identify features in scientific datasets. In 2017, Galaxy Zoo — one of Zooniverse's flagship projects — published research in which over 100,000 volunteers had classified the morphology of more than 900,000 galaxies, producing a dataset that would have taken professional astronomers many years to generate alone.

The scientific value of citizen science is increasingly well-established. A 2018 meta-analysis of citizen science projects found that volunteer-generated data were comparably accurate to professional scientific data in the majority of cases studied, provided that appropriate quality control mechanisms were in place. These mechanisms typically include requiring multiple volunteers to independently classify the same item, using statistical models to aggregate individual contributions, and providing targeted training.

Critics have raised several objections. The first is sampling bias: citizen scientists do not constitute a random sample of the population, tending instead to be educated, affluent, and concentrated in wealthy countries. This means that species distributions recorded by volunteers may systematically under-represent regions with fewer volunteers. The second objection is the risk of errors propagating through large datasets; while aggregation can mitigate individual mistakes, systematic errors — for example, a shared misidentification of a common species — are harder to detect.

Perhaps the most significant contribution of citizen science extends beyond individual research outputs. The process of participating in data collection has been shown to increase scientific literacy among volunteers, and several studies have found that citizen scientists who engage directly with research questions demonstrate more nuanced understanding of how science works than those who receive science education passively. In an era of declining public trust in scientific institutions, this democratisation of the research process may prove to be citizen science's most enduring legacy.`,
          },
        ],
        questions: [
          { id: 28, type: "tfng", q: "Citizen science is an entirely new phenomenon enabled by smartphones.",         answer: "FALSE",     explanation: "'Has existed in various forms for centuries'." },
          { id: 29, type: "fill", q: "The Zooniverse platform was launched in _____",                                  answer: "2007",      explanation: "Paragraph 2." },
          { id: 30, type: "fill", q: "In Galaxy Zoo, over _____ volunteers classified galaxy morphology",             answer: "100,000",   explanation: "Paragraph 2." },
          { id: 31, type: "fill", q: "Number of galaxies classified in Galaxy Zoo: more than _____",                  answer: "900,000",   explanation: "Paragraph 2." },
          { id: 32, type: "fill", q: "Year of the meta-analysis assessing citizen science data accuracy: _____",      answer: "2018",      explanation: "Paragraph 3." },
          { id: 33, type: "tfng", q: "The 2018 meta-analysis found citizen science data is always less accurate than professional data.", answer: "FALSE", explanation: "'Comparably accurate in the majority of cases'." },
          { id: 34, type: "fill", q: "One quality control method: requiring _____ volunteers to classify the same item independently", answer: "multiple", explanation: "Paragraph 3." },
          { id: 35, type: "fill", q: "A key bias in citizen science: volunteers tend to be educated, affluent, and in _____ countries", answer: "wealthy", explanation: "Paragraph 4." },
          { id: 36, type: "tfng", q: "Aggregation of contributions eliminates all systematic errors in citizen science data.", answer: "FALSE", explanation: "'Systematic errors are harder to detect'." },
          { id: 37, type: "tfng", q: "Participating in citizen science has been shown to increase scientific literacy.", answer: "TRUE",     explanation: "Final paragraph." },
          { id: 38, type: "fill", q: "Citizens who engage directly with research show more nuanced understanding of how _____ works", answer: "science", explanation: "Final paragraph." },
          { id: 39, type: "fill", q: "The author suggests citizen science's most enduring legacy may be the _____ of the research process", answer: "democratisation", explanation: "Final paragraph." },
          { id: 40, type: "tfng", q: "The author believes public trust in scientific institutions is currently increasing.", answer: "FALSE", explanation: "'An era of declining public trust'." },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════
  // POOL GT-D
  // ══════════════════════════════════════════════════════════
  {
    id: "GT-D",
    label: "General Training Reading Test D",
    sections: [
      {
        sectionNumber: 1,
        label: "Section 1 – Everyday Texts",
        context: "A community event bulletin, waste collection schedule update, and pharmacy notice.",
        instructions: "Questions 1–14: TRUE/FALSE/NOT GIVEN or complete the gaps.",
        texts: [
          {
            heading: "Text A – Westbridge Community Centre: October Events",
            text: `• Photography Club — every Tuesday, 7–9pm. Beginners welcome. Bring your camera or smartphone. Annual membership: £30. First session free.
• Zumba Classes — Mondays and Wednesdays, 6:30–7:30pm. Pay-as-you-go: £6 per class or £40 for a block of 8. No experience needed.
• Senior Coffee Morning — Thursdays, 10–11:30am. Free of charge. Light refreshments provided. Open to all aged 60+.
• Halloween Family Disco — Saturday 28th October, 5–8pm. Children under 12 only (accompanied by an adult). Tickets: £5 per child. Fancy dress encouraged but not compulsory. Book via the centre website.`,
          },
          {
            heading: "Text B – Westbridge Council: Waste Collection Changes from November",
            text: `From Monday 4th November, the following changes apply to ALL households:
• Garden waste collections: suspended until March. Residents may deposit garden waste at the Westbridge Recycling Centre (open Mon–Sat, 8am–5pm) free of charge.
• Food waste: weekly collection on Mondays (unchanged).
• Recycling: fortnightly, alternating weeks with general waste.
• General waste: fortnightly (moved from Thursday to Monday for all zones).
Note: The first combined Monday collection (food waste + general waste + recycling, where applicable) will be on 4th November.`,
          },
          {
            heading: "Text C – Clearwater Pharmacy: Flu Vaccination Notice",
            text: `FLU VACCINATIONS NOW AVAILABLE — NO APPOINTMENT NEEDED
Walk in during opening hours. Free for eligible patients (65+, pregnant women, those with certain health conditions — ask at the counter). All others: £12.99. Our pharmacists are fully qualified to administer the vaccine. Allow 10 minutes for the appointment. Please do not attend if you have a fever or are feeling unwell. Not suitable for children under 2 years of age.`,
          },
        ],
        questions: [
          { id: 1,  type: "fill", q: "Photography Club annual membership: £_____",                                    answer: "30",         explanation: "Text A." },
          { id: 2,  type: "fill", q: "Block of 8 Zumba classes: £_____",                                              answer: "40",         explanation: "Text A." },
          { id: 3,  type: "tfng", q: "The Senior Coffee Morning has an entry charge.",                                 answer: "FALSE",      explanation: "'Free of charge'." },
          { id: 4,  type: "fill", q: "Halloween Disco ticket price per child: £_____",                                 answer: "5",          explanation: "Text A." },
          { id: 5,  type: "tfng", q: "Fancy dress is compulsory for the Halloween Disco.",                             answer: "FALSE",      explanation: "'Encouraged but not compulsory'." },
          { id: 6,  type: "fill", q: "Garden waste collections suspended until _____",                                 answer: "March",      explanation: "Text B." },
          { id: 7,  type: "fill", q: "Recycling centre opening hours: Monday to Saturday, 8am to _____",              answer: "5pm",        explanation: "Text B." },
          { id: 8,  type: "fill", q: "Food waste collection day (unchanged): _____",                                   answer: "Monday",     explanation: "Text B." },
          { id: 9,  type: "tfng", q: "General waste is now collected weekly.",                                         answer: "FALSE",      explanation: "'Fortnightly'." },
          { id: 10, type: "fill", q: "Flu vaccine: free for patients aged _____ and over (and eligible groups)",      answer: "65",         explanation: "Text C." },
          { id: 11, type: "fill", q: "Private flu vaccine cost: £_____",                                              answer: "12.99",      explanation: "Text C." },
          { id: 12, type: "fill", q: "Approximate appointment duration: _____ minutes",                               answer: "10",         explanation: "Text C." },
          { id: 13, type: "tfng", q: "Flu vaccinations are suitable for all children.",                                answer: "FALSE",      explanation: "'Not suitable for children under 2'." },
          { id: 14, type: "tfng", q: "An appointment must be booked in advance for a flu vaccination.",               answer: "FALSE",      explanation: "'No appointment needed'." },
        ],
      },
      {
        sectionNumber: 2,
        label: "Section 2 – Workplace Texts",
        context: "Extracts from an IT acceptable use policy and an annual leave policy.",
        instructions: "Questions 15–27: Complete the gaps or choose A, B, C, or D.",
        texts: [
          {
            heading: "Text D – Briar Technology: IT Acceptable Use Policy (Extract)",
            text: `1. Purpose: This policy governs the acceptable use of all IT systems, hardware, and software owned by Briar Technology.

2. Acceptable Use: Company IT systems are provided for business use. Incidental personal use is permitted provided it does not interfere with work duties, consume excessive bandwidth, or involve prohibited content.

3. Prohibited Activities: Users must not use company systems to access, store, or transmit: illegal content; material that is discriminatory, harassing, or offensive; content in breach of copyright; gambling or gaming sites; social media during core working hours (9am–5pm) without manager approval.

4. Passwords: Passwords must be changed every 90 days and must be at least 12 characters long, containing a combination of upper and lower case letters, numbers, and symbols. Sharing passwords is strictly prohibited.

5. Reporting: Any suspected security breach, malware, or unauthorised access must be reported immediately to IT Security at security@briar.tech. Do not attempt to investigate or resolve security incidents independently.

6. Monitoring: Employees should be aware that company IT systems may be monitored for compliance with this policy.`,
          },
          {
            heading: "Text E – Briar Technology: Annual Leave Policy (Extract)",
            text: `Entitlement: Full-time employees are entitled to 25 days annual leave per year plus public holidays. Part-time employees' entitlement is calculated on a pro-rata basis. Employees in their first year of employment accrue leave at 2.08 days per month.

Booking Leave: All leave requests must be submitted via the HR portal at least 5 working days in advance for periods of 1–4 days, and at least 10 working days in advance for 5 or more consecutive days. Requests are subject to manager approval. A maximum of 10 consecutive days may be taken at one time without director approval.

Carrying Over Leave: A maximum of 5 days may be carried over to the following year, to be used by 31st March. Any remaining leave at year-end above the carryover allowance is forfeited.

Sick Leave and Annual Leave: Annual leave cannot be taken during a period of sick leave. However, if a public holiday falls during a period of sick leave, the day will be restored to the employee's annual leave balance.`,
          },
        ],
        questions: [
          { id: 15, type: "tfng", q: "All personal use of company IT systems is strictly prohibited.",                answer: "FALSE",      explanation: "'Incidental personal use is permitted'." },
          { id: 16, type: "tfng", q: "Social media is banned during core hours without manager approval.",            answer: "TRUE",       explanation: "Text D, clause 3." },
          { id: 17, type: "fill", q: "Passwords must be changed every _____ days",                                    answer: "90",         explanation: "Text D, clause 4." },
          { id: 18, type: "fill", q: "Minimum password length: _____ characters",                                    answer: "12",         explanation: "Text D." },
          { id: 19, type: "fill", q: "Suspected security breaches must be reported to _____",                        answer: "IT Security", explanation: "Text D, clause 5." },
          { id: 20, type: "fill", q: "Full-time annual leave entitlement: _____ days plus public holidays",           answer: "25",         explanation: "Text E." },
          { id: 21, type: "fill", q: "First-year leave accrual: _____ days per month",                               answer: "2.08",       explanation: "Text E." },
          { id: 22, type: "fill", q: "Advance notice required for 1–4 days' leave: at least _____ working days",     answer: "5",          explanation: "Text E, Booking section." },
          { id: 23, type: "mcq",  q: "Taking more than 10 consecutive days' leave requires:",                         opts: ["A. 5 days' notice", "B. HR portal submission only", "C. Director approval", "D. 20 days' advance notice"], answer: "C", explanation: "Text E." },
          { id: 24, type: "fill", q: "Maximum carryover of leave to following year: _____ days",                     answer: "5",          explanation: "Text E, Carrying Over section." },
          { id: 25, type: "fill", q: "Carried-over leave must be used by _____ March",                               answer: "31st",       explanation: "Text E." },
          { id: 26, type: "tfng", q: "Annual leave can be taken while an employee is on sick leave.",                 answer: "FALSE",      explanation: "'Cannot be taken during a period of sick leave'." },
          { id: 27, type: "tfng", q: "A public holiday falling during sick leave is added back to leave balance.",   answer: "TRUE",       explanation: "'The day will be restored to the employee's annual leave balance'." },
        ],
      },
      {
        sectionNumber: 3,
        label: "Section 3 – General Reading",
        context: "A long article on the history and science of language learning.",
        instructions: "Questions 28–40: TRUE/FALSE/NOT GIVEN or complete the gaps.",
        texts: [
          {
            heading: "Learning a Language as an Adult: What the Science Says",
            text: `The belief that children are inherently superior language learners — and that adults are essentially condemned to mediocrity — is one of the most persistent myths in popular linguistics. While there is a genuine biological basis for the so-called Critical Period Hypothesis, the full picture is considerably more nuanced, and the practical implications for adult learners are more encouraging than is commonly assumed.

The Critical Period Hypothesis, first proposed by neurologist Eric Lenneberg in 1967, suggests that there is a developmental window — roughly birth to puberty — during which the brain is maximally plastic for language acquisition. Children acquiring their first language within this window do so without formal instruction, using implicit learning mechanisms that extract grammatical patterns from exposure. After puberty, this implicit learning advantage diminishes, and adults must rely more heavily on explicit learning strategies — consciously studying rules and memorising vocabulary.

However, research has consistently found that adults do not simply deteriorate as language learners across the board. In the early stages of learning, adults and older children often outperform young children, because their greater cognitive resources — stronger working memory, better metalinguistic awareness, and prior knowledge of how languages work — give them an advantage in processing new grammatical information and vocabulary. The area where children maintain a genuine advantage is in achieving native-like pronunciation: the phonological systems of languages appear to be particularly sensitive to the Critical Period.

The relationship between language exposure and outcomes is more predictable than age alone. Research consistently shows that the amount of meaningful input — comprehensible material slightly above the learner's current level — is the strongest predictor of acquisition outcomes, regardless of age. Stephen Krashen's Input Hypothesis, proposed in the 1980s, formalised this insight: learners acquire language by understanding messages, not by explicitly studying rules. While Krashen's model has been refined and challenged in various respects, the centrality of comprehensible input remains broadly accepted.

Motivation and identity are also underestimated factors. Studies have found that learners with integrative motivation — a genuine desire to engage with and be accepted by the community of speakers — consistently outperform those with purely instrumental motivation (learning for career advancement or travel). This finding has implications for language pedagogy: creating authentic contexts for engagement with target-language communities, even digitally, may be more effective than additional classroom hours.

The practical conclusion for adult learners is cautiously optimistic. While achieving native-like phonology in a language acquired after puberty is genuinely unlikely, high levels of functional proficiency — sufficient for professional, academic, and social purposes — are attainable with appropriate input, motivation, and time. The ceiling for adult language learning is considerably higher than popular wisdom suggests.`,
          },
        ],
        questions: [
          { id: 28, type: "fill", q: "The Critical Period Hypothesis was proposed by Eric _____ in 1967",             answer: "Lenneberg",  explanation: "Paragraph 2." },
          { id: 29, type: "fill", q: "The approximate developmental window for maximum language plasticity: birth to _____", answer: "puberty", explanation: "Paragraph 2." },
          { id: 30, type: "tfng", q: "Children use explicit learning strategies to acquire their first language.",    answer: "FALSE",     explanation: "'Without formal instruction, using implicit learning mechanisms'." },
          { id: 31, type: "tfng", q: "Adults outperform young children in the early stages of language learning.",   answer: "TRUE",      explanation: "Paragraph 3." },
          { id: 32, type: "fill", q: "The area where children maintain a genuine advantage over adults: native-like _____", answer: "pronunciation", explanation: "Paragraph 3." },
          { id: 33, type: "fill", q: "The strongest predictor of acquisition outcomes: amount of meaningful _____",  answer: "input",     explanation: "Paragraph 4." },
          { id: 34, type: "fill", q: "Krashen's hypothesis: learners acquire language by understanding _____",       answer: "messages",  explanation: "Paragraph 4." },
          { id: 35, type: "tfng", q: "Krashen's Input Hypothesis has been universally accepted without criticism.",  answer: "FALSE",     explanation: "'Refined and challenged in various respects'." },
          { id: 36, type: "mcq",  q: "Integrative motivation is defined as:",                                         opts: ["A. Learning for career advancement", "B. A desire to engage with and be accepted by target-language speakers", "C. Learning for travel purposes", "D. Achieving academic certification"], answer: "B", explanation: "Paragraph 5." },
          { id: 37, type: "tfng", q: "Learners with instrumental motivation consistently outperform those with integrative motivation.", answer: "FALSE", explanation: "The opposite: integrative motivation outperforms instrumental." },
          { id: 38, type: "fill", q: "Creating authentic contexts for engagement with target-language communities may be more effective than additional _____ hours", answer: "classroom", explanation: "Paragraph 5." },
          { id: 39, type: "tfng", q: "Native-like phonology is achievable for most adults learning after puberty.", answer: "FALSE",      explanation: "'Genuinely unlikely' — final paragraph." },
          { id: 40, type: "tfng", q: "The article concludes that adult language learners can achieve high functional proficiency.", answer: "TRUE", explanation: "Final paragraph." },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════
  // POOL GT-E
  // ══════════════════════════════════════════════════════════
  {
    id: "GT-E",
    label: "General Training Reading Test E",
    sections: [
      {
        sectionNumber: 1,
        label: "Section 1 – Everyday Texts",
        context: "A hotel guest information card, a restaurant opening announcement, and a food delivery app's terms of service extract.",
        instructions: "Questions 1–14: TRUE/FALSE/NOT GIVEN or complete the gaps.",
        texts: [
          {
            heading: "Text A – Lakeview Hotel: Guest Information",
            text: `Check-in: from 3:00pm | Check-out: by 11:00am
Late check-out (until 1:00pm): available on request, subject to availability — £20 supplement.
Early check-in (before 3:00pm): subject to availability, no charge if room is ready; otherwise luggage storage is available free of charge from 9:00am.
Breakfast: served daily 7:00am–10:00am in the Garden Restaurant (ground floor). Not included in room rate unless booked as part of a bed & breakfast package.
Parking: Free on-site parking for guests. Max 1 vehicle per room. Overnight parking for non-guests: £12.
Wi-Fi: complimentary throughout the hotel. Network: LakeviewGuest | Password: available at reception.
Pets: small pets (under 10kg) are welcome in standard rooms at a supplement of £15 per night. Not permitted in the restaurant or pool area.`,
          },
          {
            heading: "Text B – Mamma Rosa: Opening Soon!",
            text: `We are delighted to announce the opening of Mamma Rosa, an authentic Neapolitan pizzeria, on Friday 5th July at 12 Harbour Street. 
Opening hours: Tuesday–Sunday, 12pm–10pm (last orders 9:30pm). CLOSED Mondays.
Opening weekend offer (5th–7th July only): 20% off all food. Offer applies to dine-in only, not valid with any other promotion, and cannot be applied to takeaway orders.
Reservations strongly recommended, especially weekends — book via our website or call 01543 228844.`,
          },
          {
            heading: "Text C – QuickBite Delivery App: Terms Extract",
            text: `Service area: QuickBite operates in participating cities only. Coverage is subject to change. Minimum order: £10 (before delivery fee). Delivery fee: £1.99 (free on orders over £25). Estimated delivery time: 25–45 minutes (may vary due to demand or weather). Order cancellations: accepted within 5 minutes of placing the order; after that, cancellations are at the restaurant's discretion. Refunds for quality issues must be requested within 24 hours via the app. QuickBite is not responsible for restaurant preparation delays.`,
          },
        ],
        questions: [
          { id: 1,  type: "fill", q: "Standard hotel check-out time: _____",                                          answer: "11:00",      explanation: "Text A." },
          { id: 2,  type: "fill", q: "Late check-out supplement: £_____",                                             answer: "20",         explanation: "Text A." },
          { id: 3,  type: "tfng", q: "Early check-in is always available for an additional fee.",                      answer: "FALSE",      explanation: "No charge if room ready, and it's 'subject to availability'." },
          { id: 4,  type: "tfng", q: "Breakfast is always included in the room rate at Lakeview Hotel.",              answer: "FALSE",      explanation: "'Not included unless booked as part of a bed & breakfast package'." },
          { id: 5,  type: "fill", q: "Overnight parking for non-guests: £_____",                                      answer: "12",         explanation: "Text A." },
          { id: 6,  type: "fill", q: "Maximum pet weight permitted in standard rooms: _____ kg",                      answer: "10",         explanation: "Text A." },
          { id: 7,  type: "fill", q: "Mamma Rosa restaurant address: 12 _____ Street",                               answer: "Harbour",    explanation: "Text B." },
          { id: 8,  type: "tfng", q: "Mamma Rosa is open on Mondays.",                                                answer: "FALSE",      explanation: "'CLOSED Mondays'." },
          { id: 9,  type: "fill", q: "Opening weekend discount: _____% off all food",                                 answer: "20",         explanation: "Text B." },
          { id: 10, type: "tfng", q: "The opening offer applies to takeaway orders.",                                  answer: "FALSE",      explanation: "'Dine-in only, not valid for takeaway'." },
          { id: 11, type: "fill", q: "QuickBite minimum order value: £_____",                                         answer: "10",         explanation: "Text C." },
          { id: 12, type: "fill", q: "Free delivery threshold: orders over £_____",                                   answer: "25",         explanation: "Text C." },
          { id: 13, type: "fill", q: "Order cancellation window: within _____ minutes of placing",                    answer: "5",          explanation: "Text C." },
          { id: 14, type: "fill", q: "Deadline to request a quality refund: within _____ hours via the app",         answer: "24",         explanation: "Text C." },
        ],
      },
      {
        sectionNumber: 2,
        label: "Section 2 – Workplace Texts",
        context: "An extract from a new employee orientation guide and a flexible benefits policy.",
        instructions: "Questions 15–27: Complete the gaps or choose A, B, C, or D.",
        texts: [
          {
            heading: "Text D – Riverstone Retail: New Employee Orientation (Extract)",
            text: `Working Hours: Standard full-time hours are 37.5 per week. Your specific shift pattern will be provided by your line manager and may vary by week depending on business needs. Shift changes must be agreed at least 72 hours in advance except in emergencies.

Pay: You will be paid monthly by bank transfer on the last working day of each month. Your first payslip will be available on the staff portal. If you believe there is an error on your payslip, contact Payroll within 5 working days of payment.

Breaks: For shifts over 6 hours, you are entitled to one unpaid 30-minute break. For shifts over 9 hours, you are entitled to two breaks totalling 1 hour (unpaid).

Uniform: Riverstone-branded shirts and lanyards are provided. Employees are responsible for their own dark trousers or skirts. Shirts must be clean and ironed at the start of each shift. Lost or damaged uniforms are replaced at no charge for the first occurrence; subsequent replacements cost £10 per item.

Conduct: Riverstone operates a three-stage disciplinary process: verbal warning → written warning → dismissal. A verbal warning may be escalated to written if the behaviour recurs within 6 months.`,
          },
          {
            heading: "Text E – Riverstone Retail: Flexible Benefits Policy (Extract)",
            text: `Riverstone employees may choose from the following flexible benefits during the annual enrolment window (1st–30th November each year):

• Additional Annual Leave: Purchase up to 5 extra days' leave per year (deducted from salary at daily rate).
• Cycle-to-Work Scheme: Bikes and cycling equipment purchased via salary sacrifice up to £1,000 per year.
• Private Health Insurance: Subsidised family or individual plans available — employee contributes 40%, Riverstone 60%.
• Childcare Support Vouchers: Up to £55 per week (employee contribution via salary sacrifice, tax-free).
• Gym Membership Subsidy: Riverstone contributes £25/month toward any gym membership. Employee pays the balance.

Benefits elections are binding for 12 months. Changes can only be made outside of the enrolment window in the event of a qualifying life event (e.g. marriage, birth of a child, change in employment hours).`,
          },
        ],
        questions: [
          { id: 15, type: "fill", q: "Standard full-time working hours: _____ per week",                              answer: "37.5",       explanation: "Text D." },
          { id: 16, type: "fill", q: "Minimum advance notice for shift changes: _____ hours",                         answer: "72",         explanation: "Text D." },
          { id: 17, type: "fill", q: "Pay date: last _____ day of each month",                                        answer: "working",    explanation: "Text D." },
          { id: 18, type: "fill", q: "Payslip errors: report to Payroll within _____ working days of payment",        answer: "5",          explanation: "Text D." },
          { id: 19, type: "mcq",  q: "For a 10-hour shift, total break entitlement is:",                              opts: ["A. 30 minutes", "B. 45 minutes", "C. 1 hour", "D. 1 hour 30 minutes"], answer: "C", explanation: "Text D: shifts over 9 hours = two breaks totalling 1 hour." },
          { id: 20, type: "tfng", q: "Employees pay for their Riverstone-branded shirts.",                             answer: "FALSE",      explanation: "'Provided' by the company." },
          { id: 21, type: "fill", q: "First uniform replacement: free. Subsequent replacements: £_____ per item",     answer: "10",         explanation: "Text D." },
          { id: 22, type: "fill", q: "Second stage in the disciplinary process: _____ warning",                       answer: "written",    explanation: "Text D." },
          { id: 23, type: "fill", q: "Flexible benefits enrolment window: 1st–30th _____",                            answer: "November",   explanation: "Text E." },
          { id: 24, type: "fill", q: "Maximum additional annual leave purchasable: _____ days",                       answer: "5",          explanation: "Text E." },
          { id: 25, type: "fill", q: "Cycle-to-Work Scheme maximum annual spend: £_____",                             answer: "1,000",      explanation: "Text E." },
          { id: 26, type: "fill", q: "Private health insurance: Riverstone pays _____% of the premium",              answer: "60",         explanation: "Text E." },
          { id: 27, type: "fill", q: "Gym membership: Riverstone contributes £_____ per month",                       answer: "25",         explanation: "Text E." },
        ],
      },
      {
        sectionNumber: 3,
        label: "Section 3 – General Reading",
        context: "A long article about contemporary urban architecture and sustainable design.",
        instructions: "Questions 28–40: TRUE/FALSE/NOT GIVEN or complete the gaps.",
        texts: [
          {
            heading: "Building for the Future: Architecture in the Age of Climate Change",
            text: `Architecture has always been a mirror of its time, reflecting the values, technologies, and anxieties of the societies that produce it. In the twenty-first century, no anxiety is more pressing than climate change, and no question more urgent than how we design the built environment to respond to it. The buildings and cities we construct today will still be in use in a hundred years — their energy systems, materials, and spatial patterns will shape carbon emissions, urban temperatures, and human wellbeing long after the architects and clients who commissioned them are gone.

The built environment is currently responsible for approximately forty percent of global energy consumption and an equivalent proportion of greenhouse gas emissions. Of this, the majority is attributable not to the construction process itself — though embodied carbon is increasingly recognised as significant — but to operational energy: the energy used to heat, cool, light, and ventilate buildings over their lifetimes.

The most ambitious response to this challenge is the Passivhaus standard, developed in Germany in the 1990s, which limits a building's space heating demand to fifteen kilowatt-hours per square metre per year — compared to one hundred to two hundred kilowatt-hours typical of older British housing stock. The standard is achieved through a combination of exceptional insulation, triple glazing, airtightness, and mechanical ventilation with heat recovery. Passivhaus buildings are now constructed across Europe, North America, and Asia, in climates ranging from tropical to arctic.

Embodied carbon — the carbon emitted during the production, transportation, and eventual demolition of building materials — is gaining urgent attention. Concrete and steel, which together account for the majority of structural materials in contemporary construction, are among the most carbon-intensive materials in the world. An emerging alternative is mass timber — particularly cross-laminated timber (CLT) — which sequesters carbon during tree growth and produces significantly lower emissions over its lifecycle than equivalent concrete or steel structures. Several cities, including Stockholm and Singapore, are now actively promoting timber construction through planning policy.

The social dimension of sustainable architecture is often neglected in technical discussions. Buildings designed primarily to meet energy performance targets can produce environments that are alienating, monotonous, or poorly adapted to human social needs. The most successful sustainable architecture achieves both — reducing environmental impact without sacrificing the human qualities of shelter, light, community, and beauty. This balance is not inevitable; it requires a commitment by both architects and clients to treat sustainability not as a constraint but as an opportunity for genuine innovation.`,
          },
        ],
        questions: [
          { id: 28, type: "fill", q: "The built environment accounts for approximately _____% of global energy consumption", answer: "40", explanation: "Paragraph 2." },
          { id: 29, type: "fill", q: "Most operational building emissions come from heating, cooling, lighting, and _____", answer: "ventilation", explanation: "Paragraph 2." },
          { id: 30, type: "fill", q: "The Passivhaus standard was developed in _____ in the 1990s",                   answer: "Germany",    explanation: "Paragraph 3." },
          { id: 31, type: "fill", q: "Passivhaus heating demand limit: _____ kWh/m²/year",                           answer: "15",         explanation: "Paragraph 3." },
          { id: 32, type: "fill", q: "Typical older British housing heating demand: _____ to 200 kWh/m²/year",       answer: "100",        explanation: "Paragraph 3." },
          { id: 33, type: "tfng", q: "The Passivhaus standard can only be applied in temperate European climates.",  answer: "FALSE",      explanation: "'Climates ranging from tropical to arctic'." },
          { id: 34, type: "fill", q: "Carbon emitted during production and demolition of materials: _____ carbon",    answer: "embodied",   explanation: "Paragraph 4." },
          { id: 35, type: "tfng", q: "Concrete and steel are low-carbon building materials.",                         answer: "FALSE",      explanation: "'Among the most carbon-intensive materials in the world'." },
          { id: 36, type: "fill", q: "An alternative to concrete and steel: _____ timber (CLT)",                      answer: "cross-laminated", explanation: "Paragraph 4." },
          { id: 37, type: "fill", q: "Two cities promoting timber construction through planning policy: Stockholm and _____", answer: "Singapore", explanation: "Paragraph 4." },
          { id: 38, type: "tfng", q: "The article suggests that social considerations are usually well-addressed in sustainable design discussions.", answer: "FALSE", explanation: "'The social dimension is often neglected'." },
          { id: 39, type: "tfng", q: "The author believes sustainability and human-centred design are inevitably in conflict.", answer: "FALSE", explanation: "'This balance is not inevitable'." },
          { id: 40, type: "fill", q: "The author argues sustainability should be seen not as a _____ but as an opportunity for innovation", answer: "constraint", explanation: "Final paragraph." },
        ],
      },
    ],
  },
];

/** Returns one random GT Reading test pool */
export function getGTReadingTest(): GTReadingTest {
  return pickRandom(GT_READING_POOLS);
}