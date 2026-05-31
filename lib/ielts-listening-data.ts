// lib/ielts-listening-data.ts
// 5 complete listening test pools — each page imports this and calls getListeningTest()
// Format: identical for Academic and General Training (IELTS official policy)
// Structure: 4 sections × 10 questions = 40 total. Audio plays ONCE.

import type { ListeningTest } from "./ielts-types";
import { pickRandom } from "./ielts-types";

export const LISTENING_POOLS: ListeningTest[] = [

  // ══════════════════════════════════════════════════════════
  // POOL 1 — Student Accommodation / City Tour / Consumer Behaviour / Biodiversity
  // ══════════════════════════════════════════════════════════
  {
    id: "L1",
    label: "Listening Test 1",
    sections: [
      {
        sectionNumber: 1,
        title: "Section 1 – Student Accommodation Enquiry",
        context: "Marcus Webb calls City Lettings agency to enquire about available flats near the university.",
        instructions: "Complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        script: `
Agent: Good morning, City Lettings, how can I help you?
Marcus: Hi, I'm looking to rent somewhere near the university. My name is Marcus Webb.
Agent: Are you looking for a room in a shared house, or a self-contained flat?
Marcus: A self-contained flat please. I'd prefer to be within walking distance of the campus.
Agent: And your budget per month?
Marcus: Up to eight hundred and fifty pounds.
Agent: How many bedrooms do you need?
Marcus: Just one. I'm on my own.
Agent: When would you need to move in?
Marcus: The first of September. I'm starting a master's degree.
Agent: We have two options. The first is Hartley Road, number fourteen. It's a first-floor flat, one bedroom, furnished, eight hundred per month including all bills.
Marcus: Is there parking?
Agent: No parking, but the bus stop is right outside.
Agent: The second is on Elm Street, a basement flat, eight hundred and thirty per month, bills excluded. It does come with a small garden.
Marcus: What are the bills roughly?
Agent: Around one hundred and ten per month.
Marcus: That would push me over budget. I think Hartley Road sounds better.
Agent: Excellent. Can I take your phone number and email?
Marcus: My mobile is zero seven eight one, four four two, nine six three one. Email is m dot webb at campus dot ac dot uk.
Agent: We'll need references from your previous landlord and proof of student status. Can you come in Thursday at two-thirty?
Marcus: Perfect.
        `,
        questions: [
          { id: 1,  type: "fill", q: "Type of accommodation: self-contained _____",                               answer: "flat" },
          { id: 2,  type: "fill", q: "Maximum monthly budget: £_____",                                            answer: "850" },
          { id: 3,  type: "fill", q: "Required move-in date: 1st _____",                                          answer: "September" },
          { id: 4,  type: "fill", q: "Hartley Road flat: monthly rent (bills included): £_____",                  answer: "800" },
          { id: 5,  type: "mcq",  q: "The Hartley Road flat is on which floor?",                                  opts: ["A. Ground", "B. First", "C. Second", "D. Basement"], answer: "B" },
          { id: 6,  type: "fill", q: "Hartley Road transport: _____ stop directly outside",                       answer: "bus" },
          { id: 7,  type: "fill", q: "Elm Street estimated monthly bills: £_____",                                answer: "110" },
          { id: 8,  type: "fill", q: "Marcus's mobile: last four digits _____",                                   answer: "9631" },
          { id: 9,  type: "fill", q: "Documents needed: landlord reference and proof of _____ status",            answer: "student" },
          { id: 10, type: "mcq",  q: "Viewing appointment: Thursday at",                                         opts: ["A. 2:00 PM", "B. 2:30 PM", "C. 3:00 PM", "D. 3:30 PM"], answer: "B" },
        ],
      },
      {
        sectionNumber: 2,
        title: "Section 2 – City Heritage Walking Tour",
        context: "Tour guide Diana gives an introductory talk to visitors before a two-hour city walk.",
        instructions: "Answer the questions below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        script: `
Good afternoon and welcome to Heritage Walks. I'm Diana and I'll be your guide for the next two hours. Our route covers approximately three kilometres so please wear comfortable shoes.

We start here at Market Square, then head north along Castle Street to the medieval gatehouse, which dates from thirteen-seventy-two. Photographs are permitted outside but not inside the gatehouse.

After the gatehouse we visit St Agatha's Church. The tower is open to visitors and offers panoramic views of the city. Entry costs three pounds fifty for adults; children under twelve are free.

From the church we cross Millbank to the old tannery district, the city's industrial heart from the seventeenth century. Several original buildings remain. We'll stop for refreshments at the Copper Kettle café — included in your tour price.

Our final stop is the Riverside Museum, which closes at five-thirty. We'll aim to arrive by a quarter past four. The museum has a new exhibition on Viking trade routes running until the end of March.

Please switch phones to silent, and let me know of any medical needs or mobility concerns before we begin.
        `,
        questions: [
          { id: 11, type: "fill", q: "Duration of tour: _____ hours",                                             answer: "2" },
          { id: 12, type: "fill", q: "Total route distance: approximately _____ kilometres",                      answer: "3" },
          { id: 13, type: "fill", q: "The medieval gatehouse was built in _____",                                 answer: "1372" },
          { id: 14, type: "mcq",  q: "Photography at the gatehouse:",                                             opts: ["A. Forbidden entirely", "B. Allowed inside only", "C. Allowed outside only", "D. Allowed everywhere"], answer: "C" },
          { id: 15, type: "fill", q: "Tower entry fee for adults: £_____",                                        answer: "3.50" },
          { id: 16, type: "fill", q: "The tannery district became industrial from the _____ century",             answer: "17th" },
          { id: 17, type: "mcq",  q: "Café refreshments are:",                                                   opts: ["A. Extra cost", "B. Included in tour price", "C. Optional purchase", "D. For seniors only"], answer: "B" },
          { id: 18, type: "fill", q: "Riverside Museum closing time: _____",                                      answer: "5:30" },
          { id: 19, type: "fill", q: "Viking trade routes exhibition runs until end of _____",                    answer: "March" },
          { id: 20, type: "fill", q: "Planned arrival time at museum: _____",                                     answer: "4:15" },
        ],
      },
      {
        sectionNumber: 3,
        title: "Section 3 – Undergraduate Research: Consumer Behaviour",
        context: "Students Priya and Callum meet Dr Osei to discuss their social media consumer behaviour assignment.",
        instructions: "Questions 21–26: Choose the correct letter A, B, or C. Questions 27–30: Complete the notes.",
        script: `
Dr Osei: So what angle have you decided to take?
Priya: We want to focus on how social media influences purchasing decisions in people aged eighteen to thirty.
Dr Osei: That's a crowded field. What will make your work distinctive?
Callum: We're planning to conduct our own survey, which gives us original data.
Dr Osei: Good. How many participants?
Priya: We were thinking one hundred.
Dr Osei: For a quantitative undergraduate study, one hundred is acceptable, but you'll need to justify it in your methodology. What sampling method?
Callum: Convenience sampling — students on campus.
Dr Osei: That's the most common mistake. Your results will have very limited generalisability. Consider stratified sampling — split by age and gender at minimum.
Priya: We thought it seemed complicated.
Dr Osei: It's worth the effort. Now your research questions?
Callum: Three: which platforms have most influence, whether influencer endorsements change behaviour, and whether brand values matter.
Dr Osei: Solid. For your literature review I'd strongly recommend the work of Kim and Johnson from twenty-eighteen — they studied Instagram's effect on impulse buying. Also look at the European Journal of Marketing, volume forty-two, for the meta-analysis on influencer trust.
Priya: We've been using Google Scholar mainly.
Dr Osei: Don't neglect the library's Business Source Complete database. For analysis — are you using software?
Callum: We planned to use Excel manually.
Dr Osei: For one hundred responses, that's very time-consuming. I'd suggest SPSS or the free version of JASP. JASP is on the university computers — third floor of the library. Submission is the fifteenth of November. Have your data collected by end of October.
        `,
        questions: [
          { id: 21, type: "mcq", q: "What makes their research distinctive according to the students?",            opts: ["A. Its theoretical framework", "B. Original survey data", "C. A new age group focus"], answer: "B" },
          { id: 22, type: "mcq", q: "Dr Osei's main criticism of convenience sampling is:",                       opts: ["A. Sample size too large", "B. Results lack generalisability", "C. Collection takes too long"], answer: "B" },
          { id: 23, type: "mcq", q: "Dr Osei recommends splitting the sample by age group and:",                  opts: ["A. Income level", "B. Nationality", "C. Gender"], answer: "C" },
          { id: 24, type: "mcq", q: "The Kim and Johnson (2018) study examined:",                                 opts: ["A. Brand loyalty on Twitter", "B. Instagram's effect on impulse buying", "C. Influencer trust on YouTube"], answer: "B" },
          { id: 25, type: "mcq", q: "Which database does Dr Osei specifically recommend?",                        opts: ["A. JSTOR", "B. Google Scholar", "C. Business Source Complete"], answer: "C" },
          { id: 26, type: "mcq", q: "Why does Dr Osei advise against Excel?",                                    opts: ["A. Lacks statistical functions", "B. Too expensive", "C. Time-consuming with their data volume"], answer: "C" },
          { id: 27, type: "fill", q: "Recommended software: _____ or JASP",                                      answer: "SPSS" },
          { id: 28, type: "fill", q: "JASP available: computer lab, floor _____ of the library",                 answer: "3" },
          { id: 29, type: "fill", q: "Data collection deadline: end of _____",                                   answer: "October" },
          { id: 30, type: "fill", q: "Assignment submission: _____ November",                                    answer: "15th" },
        ],
      },
      {
        sectionNumber: 4,
        title: "Section 4 – Lecture: The Economics of Biodiversity",
        context: "A university lecture on the monetary value of ecosystem services.",
        instructions: "Complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        script: `
Today I want to examine the monetary value of biodiversity — not because nature should be reduced to a price, but because demonstrating economic worth has been one of the most effective ways of securing conservation funding.

Ecosystem services are divided into four categories: provisioning services, such as food and water; regulating services, such as climate regulation and flood control; cultural services, including recreation and tourism; and supporting services, like soil formation and nutrient cycling.

A landmark study by Robert Costanza in nineteen ninety-seven estimated global ecosystem services at thirty-three trillion US dollars per year. Global GDP at the time was approximately eighteen trillion — meaning nature's services exceeded the entire global economy.

The Dasgupta Review, published in twenty-twenty-one by the UK Treasury, introduced the concept of natural capital — framing nature as an asset generating returns like financial capital.

One quantifiable loss is pollination. Pollinators contribute an estimated five hundred and seventy-seven billion dollars annually to global food production. US managed honeybee colonies declined by forty percent between two thousand and nine and two thousand and nineteen.

The Kunming-Montreal Global Biodiversity Framework, agreed in twenty-twenty-two, set a target of protecting thirty percent of land and oceans by twenty-thirty — the thirty-by-thirty commitment — to be delivered through public funding and instruments such as biodiversity credits.
        `,
        questions: [
          { id: 31, type: "fill", q: "Ecosystem category including food and water: _____ services",               answer: "provisioning" },
          { id: 32, type: "fill", q: "Category including climate regulation: _____ services",                    answer: "regulating" },
          { id: 33, type: "fill", q: "Costanza's 1997 global ecosystem value estimate: $_____ trillion/year",    answer: "33" },
          { id: 34, type: "fill", q: "Global GDP compared in Costanza's study: approximately $_____ trillion",   answer: "18" },
          { id: 35, type: "fill", q: "Dasgupta Review published: _____",                                         answer: "2021" },
          { id: 36, type: "fill", q: "Annual pollinator contribution to food production: $_____ billion",         answer: "577" },
          { id: 37, type: "fill", q: "US honeybee colony decline 2009–2019: _____% ",                           answer: "40" },
          { id: 38, type: "fill", q: "Kunming-Montreal framework agreed: _____",                                  answer: "2022" },
          { id: 39, type: "fill", q: "Protection target: _____% of land and oceans by 2030",                    answer: "30" },
          { id: 40, type: "fill", q: "New financial instrument mentioned: biodiversity _____",                    answer: "credits" },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════
  // POOL 2 — Sports Centre / Community Recycling / Geography Field Trip / Neuroscience of Memory
  // ══════════════════════════════════════════════════════════
  {
    id: "L2",
    label: "Listening Test 2",
    sections: [
      {
        sectionNumber: 1,
        title: "Section 1 – Sports Centre Membership",
        context: "Rachel calls Westfield Leisure Centre to enquire about joining the gym.",
        instructions: "Complete the membership form. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        script: `
Staff: Good afternoon, Westfield Leisure Centre.
Rachel: Hi. I'd like to find out about joining the gym. My name is Rachel Dunmore. D-U-N-M-O-R-E.
Staff: Are you looking for a monthly rolling or annual membership?
Rachel: Annual. Is there a discount?
Staff: Yes — annual is five hundred and forty pounds, which works out at forty-five a month. Monthly rolling is fifty-eight.
Rachel: I'll go annual. Does that include all facilities?
Staff: Gym, swimming, and group classes. Squash courts are an extra four pounds per session.
Rachel: What about the sauna?
Staff: That's included in annual membership, yes.
Staff: Date of birth?
Rachel: Third of April, nineteen ninety-one.
Staff: Address?
Rachel: Flat six, thirty-two Beech Avenue, Northfield. Postcode B31 2HT.
Staff: Contact number?
Rachel: Mobile — zero seven nine one two, three three five six seven eight.
Staff: We'll need photo ID and bank details to set up the direct debit. Can you come in Wednesday at twelve?
Rachel: Yes, perfect. Who do I ask for?
Staff: Ask for James at reception.
        `,
        questions: [
          { id: 1,  type: "fill", q: "Applicant's surname: _____",                                               answer: "Dunmore" },
          { id: 2,  type: "fill", q: "Annual membership fee: £_____",                                            answer: "540" },
          { id: 3,  type: "fill", q: "Monthly rolling membership: £_____ per month",                             answer: "58" },
          { id: 4,  type: "mcq",  q: "Annual membership includes:",                                              opts: ["A. Gym and swimming only", "B. Gym, swimming, and group classes", "C. All facilities including squash", "D. Gym only"], answer: "B" },
          { id: 5,  type: "fill", q: "Squash court extra charge: £_____ per session",                            answer: "4" },
          { id: 6,  type: "fill", q: "Date of birth: 3rd April _____",                                          answer: "1991" },
          { id: 7,  type: "fill", q: "House number on Beech Avenue: _____",                                      answer: "32" },
          { id: 8,  type: "fill", q: "Town/area: _____",                                                         answer: "Northfield" },
          { id: 9,  type: "fill", q: "Last four digits of mobile: _____",                                        answer: "5678" },
          { id: 10, type: "fill", q: "Appointment: Wednesday at _____ — ask for James",                          answer: "12:00" },
        ],
      },
      {
        sectionNumber: 2,
        title: "Section 2 – Community Recycling Initiative",
        context: "A council officer presents a new recycling scheme to local residents.",
        instructions: "Questions 11–15: Choose A, B, or C. Questions 16–20: Complete the notes.",
        script: `
Good evening. I'm here to explain our new Green Streets recycling initiative, launching next month.

Two aims: first, to increase recycling rates, currently at forty-two percent — well below our sixty-five percent target. Second, to reduce contamination, currently costing the council eight hundred thousand pounds annually.

Every household gets two new bins. The blue bin is for dry mixed recycling: paper, cardboard, glass bottles, tins, and plastic bottles with a neck. Plastic bags, polystyrene, and food-contaminated packaging cannot go in the blue bin — they cause the entire load to be rejected at the sorting facility.

The green bin is for food waste only, collected every Thursday and sent to an anaerobic digestion facility generating both compost and electricity. Garden waste collection moves to fortnightly from April.

Black bags for general waste will be collected fortnightly, not weekly. Evidence from other councils shows that once the food waste bin is in use, general waste reduces by around forty percent.

If you have mobility difficulties, please register for our assisted collection service — call the number on your leaflet or visit the council website. The dedicated helpline is open Monday to Friday, nine to five.
        `,
        questions: [
          { id: 11, type: "mcq",  q: "Current borough recycling rate:",                                          opts: ["A. 42%", "B. 55%", "C. 65%"], answer: "A" },
          { id: 12, type: "mcq",  q: "Contamination currently costs approximately:",                             opts: ["A. £400,000 pa", "B. £800,000 pa", "C. £1.2 million pa"], answer: "B" },
          { id: 13, type: "mcq",  q: "Which CANNOT go in the blue bin?",                                        opts: ["A. Glass bottles", "B. Cardboard", "C. Plastic bags"], answer: "C" },
          { id: 14, type: "mcq",  q: "Food waste is collected:",                                                 opts: ["A. Twice a week", "B. Every Thursday", "C. Fortnightly"], answer: "B" },
          { id: 15, type: "mcq",  q: "Evidence shows general waste reduces by around:",                          opts: ["A. 30%", "B. 35%", "C. 40%"], answer: "C" },
          { id: 16, type: "fill", q: "Food waste facility type: anaerobic _____ facility",                       answer: "digestion" },
          { id: 17, type: "fill", q: "Garden waste changes to _____ from April",                                 answer: "fortnightly" },
          { id: 18, type: "fill", q: "General waste (black bags): collection becomes _____",                     answer: "fortnightly" },
          { id: 19, type: "fill", q: "Assisted collection: register via phone or council _____",                 answer: "website" },
          { id: 20, type: "fill", q: "Helpline hours: Monday–Friday, _____ to 5",                               answer: "9" },
        ],
      },
      {
        sectionNumber: 3,
        title: "Section 3 – Geography Field Trip Report",
        context: "Students Yemi, Lars, and Fatima discuss their field trip report with Dr Harman.",
        instructions: "Complete the table and notes below.",
        script: `
Yemi: We've split the field trip into three zones.
Dr Harman: Tell me about each.
Fatima: I'm covering Zone A — the coastal area. I'm mapping erosion patterns and measuring cliff retreat using GPS data from the past decade. I'm using DSAS software — Digital Shoreline Analysis System — which gives annual rates in metres.
Dr Harman: Excellent. Lars?
Lars: Zone B — the river valley. I'm looking at sediment deposition and comparing cross-sections from this year with data from nineteen ninety-six. I'm using a surveying staff and a dumpy level — traditional but accurate.
Dr Harman: And Yemi?
Yemi: Zone C — the urban fringe. I'm using questionnaires with local residents about flood risk perceptions, combined with flood zone mapping from the Environment Agency. I've completed sixty-four so far — targeting eighty minimum.
Dr Harman: What about ethical approval?
Yemi: I submitted the form last week, waiting on confirmation. No more questionnaires until that comes through.
Dr Harman: Good. Who's leading the methodology section?
Fatima: I'll write the first draft — I've done the most primary data collection.
Dr Harman: Referencing system?
Lars: Harvard. We checked the department guidelines.
Dr Harman: The report is due twenty-second of March. Have a full draft ready by the eighth so I can give formative feedback.
        `,
        questions: [
          { id: 21, type: "fill", q: "Zone A (Fatima): mapping erosion patterns and cliff _____",                answer: "retreat" },
          { id: 22, type: "fill", q: "Zone A software: _____ (Digital Shoreline Analysis System)",               answer: "DSAS" },
          { id: 23, type: "fill", q: "Zone B (Lars): comparing cross-sections with data from _____",             answer: "1996" },
          { id: 24, type: "fill", q: "Zone B equipment: surveying staff and a _____ level",                      answer: "dumpy" },
          { id: 25, type: "fill", q: "Zone C (Yemi): questionnaires combined with flood zone _____",             answer: "mapping" },
          { id: 26, type: "fill", q: "Questionnaire target minimum: _____",                                      answer: "80" },
          { id: 27, type: "mcq",  q: "Who writes the first draft of the methodology section?",                   opts: ["A. Yemi", "B. Lars", "C. Fatima"], answer: "C" },
          { id: 28, type: "fill", q: "Referencing system: _____",                                               answer: "Harvard" },
          { id: 29, type: "fill", q: "Full draft deadline (for feedback): _____ March",                          answer: "8th" },
          { id: 30, type: "fill", q: "Final submission: _____ March",                                            answer: "22nd" },
        ],
      },
      {
        sectionNumber: 4,
        title: "Section 4 – Lecture: The Neuroscience of Memory",
        context: "A neuroscience lecturer discusses types of memory and how memories are formed.",
        instructions: "Complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        script: `
Memory is not a single unified system. We recognise at least three distinct types relying on different brain regions.

Episodic memory is our autobiographical record — contextualised in time and place. The hippocampus is critical here. Damage to the hippocampus, as in patient H.M. who had both hippocampi removed in nineteen fifty-three, results in anterograde amnesia — the inability to form new long-term episodic memories.

Semantic memory is general world knowledge divorced from personal context — knowing Paris is the capital of France. It can survive hippocampal damage, suggesting storage across the cortex.

Procedural memory — how to ride a bike or play an instrument — is handled by the basal ganglia and cerebellum, and is largely unconscious.

Memory formation involves three stages: encoding, consolidation, and retrieval. Consolidation strengthens the memory trace primarily during sleep — specifically slow-wave sleep in the first part of the night. Matthew Walker at Berkeley showed sleep deprivation reduces consolidation efficiency by up to forty percent.

Retrieval is reconstructive, not passive. Each retrieval slightly modifies the memory, making it susceptible to distortion — with implications for eyewitness testimony.

Practically: spaced repetition — reviewing material at increasing intervals — consistently outperforms cramming for long-term retention.
        `,
        questions: [
          { id: 31, type: "fill", q: "Episodic memories are contextualised in time and _____",                  answer: "place" },
          { id: 32, type: "fill", q: "Critical brain structure for episodic memory: the _____",                  answer: "hippocampus" },
          { id: 33, type: "fill", q: "Patient H.M. had surgery in: _____",                                       answer: "1953" },
          { id: 34, type: "fill", q: "Inability to form new long-term episodic memories: _____ amnesia",         answer: "anterograde" },
          { id: 35, type: "fill", q: "Semantic memory is stored across the _____",                               answer: "cortex" },
          { id: 36, type: "fill", q: "Procedural memory: basal ganglia and the _____",                           answer: "cerebellum" },
          { id: 37, type: "fill", q: "Three memory formation stages: encoding, _____, retrieval",                answer: "consolidation" },
          { id: 38, type: "fill", q: "Consolidation mainly occurs during _____ sleep",                           answer: "slow-wave" },
          { id: 39, type: "fill", q: "Walker (Berkeley): sleep deprivation reduces consolidation by up to _____% ", answer: "40" },
          { id: 40, type: "fill", q: "Study technique outperforming cramming: spaced _____",                     answer: "repetition" },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════
  // POOL 3 — Library / Employment Fair / Documentary Film / Decision-Making
  // ══════════════════════════════════════════════════════════
  {
    id: "L3",
    label: "Listening Test 3",
    sections: [
      {
        sectionNumber: 1,
        title: "Section 1 – Library Membership Registration",
        context: "Postgraduate student Ben Carter registers for a library card at the university library.",
        instructions: "Complete the registration form. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        script: `
Librarian: Good morning. How can I help?
Ben: I'd like to register for a library card. I'm a new postgraduate student. My name is Benjamin Carter.
Librarian: Student ID?
Ben: PG dash four seven two one eight.
Librarian: Department?
Ben: Environmental Science.
Librarian: Full-time or part-time?
Ben: Full-time.
Librarian: Address?
Ben: Twenty-two Maple Drive, Kingsley. Postcode SK4 7RQ.
Librarian: Email?
Ben: b dot carter at unimail dot ac dot uk.
Librarian: With a postgraduate card you can borrow up to fifteen books at a time for six weeks each. You can renew twice online before returning.
Ben: Can I access journals from home?
Librarian: Yes, through the off-campus portal using your student ID and a PIN. I'll set it to your date of birth.
Ben: Fourteenth of June, nineteen ninety-nine.
Librarian: So your PIN will be one-four-zero-six-nine-nine. Change it in your account settings. Your card will be ready in about twenty minutes.
        `,
        questions: [
          { id: 1,  type: "fill", q: "First name: Benjamin. Surname: _____",                                     answer: "Carter" },
          { id: 2,  type: "fill", q: "Student ID: PG-_____",                                                     answer: "47218" },
          { id: 3,  type: "fill", q: "Department: _____ Science",                                                answer: "Environmental" },
          { id: 4,  type: "fill", q: "Street address: 22 _____ Drive",                                           answer: "Maple" },
          { id: 5,  type: "fill", q: "Postcode: _____",                                                          answer: "SK4 7RQ" },
          { id: 6,  type: "mcq",  q: "Maximum books borrowed at one time:",                                       opts: ["A. 10", "B. 12", "C. 15", "D. 20"], answer: "C" },
          { id: 7,  type: "fill", q: "Loan period per item: _____ weeks",                                        answer: "6" },
          { id: 8,  type: "fill", q: "Online renewals permitted before return: _____",                            answer: "2" },
          { id: 9,  type: "fill", q: "Off-campus journal access requires student ID and a _____",                 answer: "PIN" },
          { id: 10, type: "fill", q: "Initial PIN based on: date of _____",                                      answer: "birth" },
        ],
      },
      {
        sectionNumber: 2,
        title: "Section 2 – University Employment Fair",
        context: "A careers adviser gives an orientation talk at the start of the annual careers fair.",
        instructions: "Questions 11–15: Choose A, B, or C. Questions 16–20: Complete the notes.",
        script: `
Welcome to the careers fair. We have sixty-two employers here today across four halls.

Students who make the best impression have researched beforehand. Choose five to eight companies you're genuinely interested in and know something about them.

Hall A contains large graduate schemes — banks, law firms, consultancies. Hall B has SMEs and start-ups, often overlooked but offering more immediate responsibility. Hall C is the public sector — NHS, civil service, local government. Hall D is for postgraduate and research opportunities, including funded PhDs.

There's a CV review service all day in Room twelve on the ground floor — no appointment needed. Three employers give presentations in Lecture Theatre B: Greenfield Consulting at eleven, the NHS Graduate Scheme at one-thirty, and Alderson Technology at three-fifteen.

On approaching stands: introduce yourself confidently and ask a question. Good questions include team culture, development opportunities, or a recent project. Avoid asking about salary at a first meeting.

Finally, collect business cards and send a follow-up email within forty-eight hours — done by fewer than ten percent of students, and employers notice.
        `,
        questions: [
          { id: 11, type: "mcq",  q: "Number of employers at the fair:",                                         opts: ["A. 52", "B. 62", "C. 72"], answer: "B" },
          { id: 12, type: "mcq",  q: "Recommended number of companies to research in advance:",                  opts: ["A. 3 to 5", "B. 5 to 8", "C. 8 to 10"], answer: "B" },
          { id: 13, type: "mcq",  q: "Hall B contains:",                                                         opts: ["A. Large graduate schemes", "B. SMEs and start-ups", "C. Public sector organisations"], answer: "B" },
          { id: 14, type: "mcq",  q: "The CV review service is in:",                                             opts: ["A. Hall A", "B. Room 12, ground floor", "C. Lecture Theatre B"], answer: "B" },
          { id: 15, type: "mcq",  q: "What should you avoid asking at a first meeting?",                        opts: ["A. Team culture", "B. Development opportunities", "C. Salary"], answer: "C" },
          { id: 16, type: "fill", q: "Hall D: postgraduate and _____ opportunities",                             answer: "research" },
          { id: 17, type: "fill", q: "First presentation — Greenfield Consulting: _____",                        answer: "11:00" },
          { id: 18, type: "fill", q: "NHS Graduate Scheme presentation: _____",                                  answer: "1:30" },
          { id: 19, type: "fill", q: "Follow-up emails: send within _____ hours",                                answer: "48" },
          { id: 20, type: "fill", q: "Percentage of students who send follow-ups: fewer than _____%",            answer: "10" },
        ],
      },
      {
        sectionNumber: 3,
        title: "Section 3 – Documentary Film Project",
        context: "Students Sophie and Ethan discuss their urban food poverty documentary with Dr Malik.",
        instructions: "Answer all questions below.",
        script: `
Dr Malik: Tell me about your documentary concept.
Sophie: A fifteen-minute documentary on urban food poverty — specifically the rise of food banks in our city over ten years.
Dr Malik: Have you confirmed interview subjects?
Ethan: Three confirmed — a food bank coordinator, a regular service user happy to be filmed, and a local councillor overseeing social welfare.
Dr Malik: Good range. What about data visualisation?
Sophie: Animated infographics showing the rise in usage statistics. We've sourced data from the Trussell Trust, which publishes annual reports from two thousand and ten.
Dr Malik: Ethical considerations?
Ethan: Written consent from all subjects. The service user doesn't want their face shown — we'll use a profile shot or silhouette.
Dr Malik: Location releases?
Sophie: We have releases for the food bank itself. Still waiting for the council offices.
Dr Malik: That needs sorting before you film there. Shooting schedule?
Ethan: Interviews in week one, B-roll in week two, editing from week three. We want to submit by the twenty-eighth.
Dr Malik: Narration approach?
Sophie: Voiceover — it feels more journalistic given the subject matter.
Dr Malik: Sound design?
Ethan: Minimal — ambient sound from the food bank, plus a royalty-free piano track.
Dr Malik: Equipment?
Sophie: Using department cameras, but hiring a directional microphone — about sixty pounds for the week.
        `,
        questions: [
          { id: 21, type: "fill", q: "Documentary length: _____ minutes",                                        answer: "15" },
          { id: 22, type: "fill", q: "Topic: rise of _____ in the city over 10 years",                          answer: "food banks" },
          { id: 23, type: "mcq",  q: "Number of confirmed interview subjects:",                                   opts: ["A. 2", "B. 3", "C. 4"], answer: "B" },
          { id: 24, type: "fill", q: "Data source for infographics: the _____ Trust",                            answer: "Trussell" },
          { id: 25, type: "fill", q: "Service user request: no shot of their _____",                             answer: "face" },
          { id: 26, type: "mcq",  q: "Which location release is still outstanding?",                             opts: ["A. Food bank", "B. Council offices", "C. Community centre"], answer: "B" },
          { id: 27, type: "fill", q: "Editing begins in week _____",                                             answer: "3" },
          { id: 28, type: "fill", q: "Submission date: the _____",                                               answer: "28th" },
          { id: 29, type: "mcq",  q: "Narration style chosen:",                                                  opts: ["A. On-screen presenter", "B. Voiceover", "C. No narration"], answer: "B" },
          { id: 30, type: "fill", q: "Equipment hire: directional _____ at £60 for the week",                   answer: "microphone" },
        ],
      },
      {
        sectionNumber: 4,
        title: "Section 4 – Lecture: The Psychology of Decision-Making",
        context: "A behavioural economics lecture on cognitive biases and how humans decide under uncertainty.",
        instructions: "Complete the notes. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        script: `
Classical economic theory assumed individuals make decisions by rationally calculating expected utility — weighing outcomes and probabilities to maximise benefit. This idealised rational actor is called Homo economicus.

In the nineteen seventies, Kahneman and Tversky systematically challenged this. Their most influential framework, Prospect Theory, published in nineteen seventy-nine, showed people evaluate outcomes relative to a reference point, not in absolute terms. Losses and gains are treated asymmetrically — the pain of losing one hundred pounds is approximately twice as powerful as the pleasure of gaining one hundred pounds. This is called loss aversion.

Kahneman later developed the two-system model: System One is fast, automatic, and intuitive; System Two is slow, deliberate, and analytical.

The availability heuristic: we judge probability by how easily examples come to mind. This causes people to overestimate dramatic rare events like plane crashes and underestimate common dangers like cardiovascular disease.

Anchoring: when estimating numbers, people rely too heavily on the first number they encounter. In one study, participants who were first shown sixty-five million gave significantly higher population estimates than those shown thirty-five million.

These findings underpin nudge theory — deliberately designing choice environments to promote better decisions without restricting freedom. This field is called libertarian paternalism.
        `,
        questions: [
          { id: 31, type: "fill", q: "Classical economics: individuals maximise expected _____",                  answer: "utility" },
          { id: 32, type: "fill", q: "The idealised rational decision-maker: _____ economicus",                  answer: "Homo" },
          { id: 33, type: "fill", q: "Kahneman and Tversky's key framework: _____ Theory (1979)",                answer: "Prospect" },
          { id: 34, type: "fill", q: "People evaluate outcomes relative to a _____ point",                       answer: "reference" },
          { id: 35, type: "fill", q: "Loss aversion: losing £100 feels roughly _____ times worse than gaining £100 feels good", answer: "2" },
          { id: 36, type: "fill", q: "Kahneman's book: Thinking, _____ and Slow",                               answer: "Fast" },
          { id: 37, type: "fill", q: "System One is: fast, automatic, and _____",                               answer: "intuitive" },
          { id: 38, type: "fill", q: "Judging probability by ease of recall: the _____ heuristic",              answer: "availability" },
          { id: 39, type: "fill", q: "Relying on the first number encountered: _____",                           answer: "anchoring" },
          { id: 40, type: "fill", q: "Designing choice environments for better decisions: _____ theory",         answer: "nudge" },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════
  // POOL 4 — Medical Appointment / Museum Audio Guide / Engineering Project / Astronomy
  // ══════════════════════════════════════════════════════════
  {
    id: "L4",
    label: "Listening Test 4",
    sections: [
      {
        sectionNumber: 1,
        title: "Section 1 – GP Surgery Registration",
        context: "Sarah Chen registers as a new patient at Elmwood Medical Practice.",
        instructions: "Complete the registration form. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        script: `
Receptionist: Good morning, Elmwood Medical Practice.
Sarah: Hi, I'd like to register as a new patient. My name is Sarah Chen. C-H-E-N.
Receptionist: Date of birth?
Sarah: Seventeenth of February, nineteen ninety-five.
Receptionist: Address?
Sarah: Nine Park Crescent, Westbridge. Postcode WB2 4LT.
Receptionist: Phone number?
Sarah: Mobile — zero seven six eight three, two two one four five nine.
Receptionist: Previous GP?
Sarah: Dr Patel at Riverside Surgery, Northtown.
Receptionist: Any existing conditions I should note?
Sarah: Yes — I have asthma. I use a blue reliever inhaler. No hospital admissions in the last two years.
Receptionist: Allergies?
Sarah: Penicillin — causes a rash.
Receptionist: Next available new patient appointment is Thursday the fourth, at ten-fifteen.
Sarah: Perfect. Is it with a specific GP?
Receptionist: Dr Farida Okonkwo — she'll be your named GP.
Sarah: And do I need to bring anything?
Receptionist: Photo ID and your inhaler prescription if you have it.
        `,
        questions: [
          { id: 1,  type: "fill", q: "Patient surname: _____",                                                   answer: "Chen" },
          { id: 2,  type: "fill", q: "Date of birth: 17th February _____",                                       answer: "1995" },
          { id: 3,  type: "fill", q: "Street address: 9 Park _____",                                             answer: "Crescent" },
          { id: 4,  type: "fill", q: "Postcode: _____",                                                          answer: "WB2 4LT" },
          { id: 5,  type: "fill", q: "Previous surgery name: _____ Surgery",                                     answer: "Riverside" },
          { id: 6,  type: "fill", q: "Existing condition: _____",                                               answer: "asthma" },
          { id: 7,  type: "fill", q: "Inhaler type: blue _____ inhaler",                                         answer: "reliever" },
          { id: 8,  type: "fill", q: "Allergy: _____ (causes a rash)",                                          answer: "Penicillin" },
          { id: 9,  type: "fill", q: "First appointment: Thursday _____, at 10:15",                              answer: "4th" },
          { id: 10, type: "fill", q: "Named GP: Dr Farida _____",                                                answer: "Okonkwo" },
        ],
      },
      {
        sectionNumber: 2,
        title: "Section 2 – Natural History Museum Audio Guide Introduction",
        context: "A museum curator gives a recorded welcome talk for the new temporary exhibition on extinct megafauna.",
        instructions: "Complete the notes. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        script: `
Welcome to the Natural History Museum's new exhibition: Giants of the Ice Age. This six-month exhibition runs from the fifteenth of March to the fourteenth of September.

The exhibition spans twelve galleries across two floors. Ground floor galleries one to seven cover the Pleistocene epoch — the period from approximately two million to eleven thousand years ago — and focus on the large mammals that dominated this era: the woolly mammoth, the woolly rhinoceros, the giant ground sloth, and the sabre-toothed cat.

Gallery eight is dedicated to a single spectacular find — a ninety-percent complete mammoth skeleton excavated in Siberia in twenty-fourteen, nicknamed Boris by the excavation team. This is the most complete mammoth skeleton ever displayed in the United Kingdom.

Galleries nine to twelve on the first floor explore causes of the megafauna extinctions — climate change, vegetation shifts, and the role of early human hunting.

Audio guide handsets are available in the main lobby at three pounds each, returnable on exit. The family quiz trail is free and can be collected at the information desk. Photography is permitted throughout without flash.

The café on the ground floor is open from nine-thirty until four. The museum shop is at the exit.
        `,
        questions: [
          { id: 11, type: "fill", q: "Exhibition title: Giants of the _____",                                    answer: "Ice Age" },
          { id: 12, type: "fill", q: "Duration: _____ months",                                                   answer: "6" },
          { id: 13, type: "fill", q: "Exhibition spans _____ galleries across two floors",                       answer: "12" },
          { id: 14, type: "fill", q: "The Pleistocene lasted from approximately 2 million to _____ years ago",   answer: "11,000" },
          { id: 15, type: "mcq",  q: "Gallery 8 features:",                                                      opts: ["A. A woolly rhinoceros skeleton", "B. A near-complete mammoth skeleton", "C. Sabre-toothed cat remains", "D. A giant ground sloth"], answer: "B" },
          { id: 16, type: "fill", q: "Mammoth skeleton was excavated in _____ in 2014",                          answer: "Siberia" },
          { id: 17, type: "fill", q: "Galleries 9–12 explore causes including: climate change, vegetation shifts, and early human _____", answer: "hunting" },
          { id: 18, type: "fill", q: "Audio guide handset hire: £_____",                                        answer: "3" },
          { id: 19, type: "fill", q: "Family quiz trail: _____ (no charge)",                                     answer: "free" },
          { id: 20, type: "fill", q: "Café opens at _____",                                                      answer: "9:30" },
        ],
      },
      {
        sectionNumber: 3,
        title: "Section 3 – Civil Engineering Group Project",
        context: "Students Amara, Jake, and Ling discuss their footbridge design project with their supervisor, Dr Reeves.",
        instructions: "Answer all questions below.",
        script: `
Dr Reeves: Where are you with the footbridge project?
Amara: We've completed the site survey and agreed on a cable-stayed design — it best handles the sixty-metre span.
Dr Reeves: What influenced that choice over a suspension bridge?
Jake: A cable-stayed design uses less cable, is faster to construct, and gives better stiffness for pedestrian loading.
Dr Reeves: What are your material choices?
Ling: High-strength steel for the pylons, and we're proposing a composite deck — steel beams with a concrete slab. It reduces weight while maintaining load capacity.
Dr Reeves: What live load are you designing for?
Amara: Five kilonewtons per square metre — the standard for public pedestrian bridges in the UK.
Dr Reeves: And dynamic loading? Footbridges can be vulnerable to resonance.
Jake: We've modelled pedestrian-induced vibration. Our natural frequency is well above the critical range — three point two hertz, against the problematic one-to-three hertz band.
Dr Reeves: Good. What's your safety factor?
Ling: One point five for dead load and one point six for live load, in accordance with Eurocode.
Dr Reeves: Drainage?
Amara: A two percent cross-fall on the deck with scuppers at twenty-metre intervals.
Dr Reeves: Presentation is the ninth of May. You'll have fifteen minutes plus ten minutes for questions.
Jake: We're planning a physical scale model plus a digital visualisation.
        `,
        questions: [
          { id: 21, type: "fill", q: "Bridge type chosen: _____-stayed design",                                  answer: "cable" },
          { id: 22, type: "fill", q: "Span of the bridge: _____ metres",                                         answer: "60" },
          { id: 23, type: "mcq",  q: "Advantage of cable-stayed over suspension bridge mentioned first:",         opts: ["A. Better aesthetics", "B. Uses less cable", "C. Greater span possible", "D. Cheaper materials"], answer: "B" },
          { id: 24, type: "fill", q: "Deck material: composite — steel beams with a _____ slab",                 answer: "concrete" },
          { id: 25, type: "fill", q: "Live load design standard: _____ kN per square metre",                     answer: "5" },
          { id: 26, type: "fill", q: "Natural frequency of the bridge: _____ hertz",                             answer: "3.2" },
          { id: 27, type: "fill", q: "Problematic pedestrian resonance range: _____ to 3 hertz",                answer: "1" },
          { id: 28, type: "fill", q: "Safety factor for live load: _____",                                       answer: "1.6" },
          { id: 29, type: "fill", q: "Deck drainage: _____ % cross-fall",                                        answer: "2" },
          { id: 30, type: "fill", q: "Presentation: _____ May — 15 min + 10 min Q&A",                           answer: "9th" },
        ],
      },
      {
        sectionNumber: 4,
        title: "Section 4 – Lecture: The Search for Exoplanets",
        context: "An astronomy lecture on the methods and findings of exoplanet research.",
        instructions: "Complete the notes. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        script: `
Since the first confirmed detection of a planet orbiting a sun-like star in nineteen ninety-five, our understanding of planetary systems has been transformed. As of early twenty twenty-four, more than five thousand five hundred exoplanets have been confirmed, with thousands more candidates awaiting verification.

The most productive detection method has been the transit method — detecting the tiny dimming of a star's light as a planet passes in front of it. NASA's Kepler Space Telescope, operational from two thousand and nine to two thousand and eighteen, used this method to discover over two thousand six hundred confirmed planets.

The transit method has a significant limitation: it only detects planets whose orbital plane aligns with the observer — a small fraction of all planetary systems. For this reason, most confirmed transiting planets orbit very close to their stars, giving them short periods.

The second major method is radial velocity, also called Doppler spectroscopy. As a planet orbits its star, it exerts a gravitational pull that causes the star to wobble. This wobble shifts the star's spectral lines, which can be measured from Earth. Radial velocity is particularly effective at detecting large planets — those with masses comparable to Jupiter.

Direct imaging — actually photographing a planet — is possible but extremely challenging because planets are so much fainter than their host stars. Contrast ratios of ten billion to one are typical. Advances in coronagraphy and adaptive optics have allowed about a dozen planetary systems to be directly imaged.

The habitable zone — the range of orbital distances at which liquid water could exist on a planetary surface — is now mapped for hundreds of stars, and several Earth-sized planets in habitable zones have been identified.
        `,
        questions: [
          { id: 31, type: "fill", q: "First confirmed exoplanet around a sun-like star: _____",                  answer: "1995" },
          { id: 32, type: "fill", q: "Confirmed exoplanets as of early 2024: more than _____",                   answer: "5,500" },
          { id: 33, type: "fill", q: "Most productive detection method: the _____ method",                       answer: "transit" },
          { id: 34, type: "fill", q: "NASA's Kepler telescope operational: 2009 to _____",                       answer: "2018" },
          { id: 35, type: "fill", q: "Kepler confirmed planets: over _____",                                     answer: "2,600" },
          { id: 36, type: "fill", q: "Second major method: _____ velocity (Doppler spectroscopy)",               answer: "radial" },
          { id: 37, type: "fill", q: "Radial velocity is best for detecting planets comparable in mass to _____", answer: "Jupiter" },
          { id: 38, type: "fill", q: "Typical star-to-planet contrast ratio for direct imaging: _____ billion to one", answer: "10" },
          { id: 39, type: "fill", q: "Technologies enabling direct imaging: coronagraphy and adaptive _____",    answer: "optics" },
          { id: 40, type: "fill", q: "The range of distances where liquid water could exist: the _____ zone",    answer: "habitable" },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════
  // POOL 5 — Language School / Nature Reserve / Architecture Studio / Cognitive Load
  // ══════════════════════════════════════════════════════════
  {
    id: "L5",
    label: "Listening Test 5",
    sections: [
      {
        sectionNumber: 1,
        title: "Section 1 – Language School Enrolment",
        context: "Hana Novak calls the City Language Academy to enrol on an English language course.",
        instructions: "Complete the enrolment form. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        script: `
Staff: Good morning, City Language Academy.
Hana: Hello. I'd like to enrol on an English course. My name is Hana Novak. N-O-V-A-K.
Staff: Nationality?
Hana: Czech. I've been in the UK for six months.
Staff: Which course are you interested in?
Hana: The upper-intermediate course — I had a placement test online and scored B2.
Staff: That maps to our Advanced Preparation course. Classes are Monday to Thursday, nine-fifteen to twelve-thirty.
Hana: How long is the course?
Staff: Ten weeks. The next intake starts the twelfth of January.
Staff: Address?
Hana: Forty-one Chestnut Road, Brixton. Postcode SW9 0BJ.
Staff: Phone?
Hana: My UK mobile is zero seven four five one, six six three two seven zero.
Staff: The course fee is eight hundred and seventy-five pounds. We require a deposit of one hundred and fifty to hold your place, with the balance due by the first day.
Hana: Can I pay the deposit by card today?
Staff: Of course. And if you'd like to add one-to-one conversation sessions, they're thirty pounds per hour with a thirty-minute minimum booking.
Hana: Maybe later. Do I need to bring anything on the first day?
Staff: Your enrolment confirmation email and one form of photo ID.
        `,
        questions: [
          { id: 1,  type: "fill", q: "Surname: _____",                                                           answer: "Novak" },
          { id: 2,  type: "fill", q: "Nationality: _____",                                                       answer: "Czech" },
          { id: 3,  type: "fill", q: "Placement test score: _____",                                              answer: "B2" },
          { id: 4,  type: "fill", q: "Course name: Advanced _____ course",                                       answer: "Preparation" },
          { id: 5,  type: "fill", q: "Class days: Monday to _____",                                              answer: "Thursday" },
          { id: 6,  type: "fill", q: "Course duration: _____ weeks",                                             answer: "10" },
          { id: 7,  type: "fill", q: "Course start date: _____ January",                                         answer: "12th" },
          { id: 8,  type: "fill", q: "Total course fee: £_____",                                                 answer: "875" },
          { id: 9,  type: "fill", q: "Deposit required to hold place: £_____",                                   answer: "150" },
          { id: 10, type: "fill", q: "One-to-one conversation sessions: £_____ per hour",                        answer: "30" },
        ],
      },
      {
        sectionNumber: 2,
        title: "Section 2 – Nature Reserve Visitor Orientation",
        context: "A reserve warden gives a talk to visitors at the entrance to Cranmore Nature Reserve.",
        instructions: "Questions 11–15: Choose A, B, or C. Questions 16–20: Complete the notes.",
        script: `
Good morning and welcome to Cranmore Nature Reserve. I'm Pete, the head warden.

Cranmore covers six hundred and forty hectares across three distinct habitat types: ancient woodland in the north, wetland and reedbeds in the centre, and open grassland in the south. The reserve is home to over two hundred species of bird recorded annually.

Today is particularly good for spotting bittern — our reedbed is one of only twelve sites in England with a breeding population. Listen for their distinctive booming call, especially in the early morning.

Our main trail is the seven-kilometre green route, which takes approximately two and a half hours at a comfortable pace. Shorter visitors can take the accessible one-kilometre blue route, fully surfaced and suitable for wheelchairs and pushchairs.

Dogs are welcome on all routes but must be kept on leads from the first of March to the thirty-first of July — this is the bird nesting season. Outside this period, dogs may be let off leads in the grassland only.

The visitor centre has a café open ten to four — hot drinks and light meals. Binocular hire is two pounds for the day at the information desk. Entry to the reserve is free; guided walks cost five pounds per person and run at eleven and two on weekends only.

Please do not feed the waterfowl — it disrupts natural foraging and encourages aggressive behaviour.
        `,
        questions: [
          { id: 11, type: "mcq",  q: "The reserve covers:",                                                       opts: ["A. 460 hectares", "B. 540 hectares", "C. 640 hectares"], answer: "C" },
          { id: 12, type: "mcq",  q: "How many bird species are recorded annually?",                              opts: ["A. Over 100", "B. Over 150", "C. Over 200"], answer: "C" },
          { id: 13, type: "mcq",  q: "The bittern lives in:",                                                     opts: ["A. The ancient woodland", "B. The reedbed", "C. The open grassland"], answer: "B" },
          { id: 14, type: "mcq",  q: "The accessible blue route is:",                                             opts: ["A. 1 km, fully surfaced", "B. 3 km, partially surfaced", "C. 7 km, natural surface"], answer: "A" },
          { id: 15, type: "mcq",  q: "Dogs must be on leads from:",                                               opts: ["A. 1 Jan to 31 May", "B. 1 Mar to 31 Jul", "C. 1 Apr to 31 Aug"], answer: "B" },
          { id: 16, type: "fill", q: "Main trail: _____ km green route, approx 2.5 hours",                       answer: "7" },
          { id: 17, type: "fill", q: "Off-lead area outside nesting season: _____ only",                          answer: "grassland" },
          { id: 18, type: "fill", q: "Café hours: _____ to 4",                                                   answer: "10" },
          { id: 19, type: "fill", q: "Binocular hire: £_____ per day",                                           answer: "2" },
          { id: 20, type: "fill", q: "Guided walks cost: £_____ per person (weekends only)",                      answer: "5" },
        ],
      },
      {
        sectionNumber: 3,
        title: "Section 3 – Architecture Studio Final Review",
        context: "Architecture students Kai and Preethi present their sustainable housing design to their tutor Dr Vasquez.",
        instructions: "Answer all questions below.",
        script: `
Dr Vasquez: Walk me through your design concept.
Kai: Our proposal is a community housing scheme for forty-two units on the brownfield site in the east of the city. The design is centred on a shared courtyard — we wanted to prioritise social interaction and passive surveillance.
Dr Vasquez: What's your approach to energy performance?
Preethi: We're targeting a Passivhaus standard. The building fabric achieves a U-value of zero-point-one-five watts per square metre kelvin for external walls, which requires three hundred millimetres of mineral wool insulation. The triple-glazed windows contribute significantly to thermal performance.
Dr Vasquez: Ventilation?
Kai: Mechanical heat recovery ventilation throughout — MVHR — with a heat recovery efficiency of eighty-seven percent. This allows continuous fresh air without significant heat loss.
Dr Vasquez: Water?
Preethi: Rainwater harvesting for toilet flushing and irrigation, reducing mains water use by approximately forty percent. Greywater recycling from showers and basins feeds the garden areas.
Dr Vasquez: Social mix?
Kai: The scheme includes thirty percent affordable housing — set by the local authority planning requirement — a mix of one, two, and three-bedroom units.
Dr Vasquez: Your sustainability assessment — which framework?
Preethi: BREEAM Excellent. We've scored well on energy, transport — the site is two hundred metres from a tram stop — and ecology, where we're adding native planting and bee bricks throughout the scheme.
Dr Vasquez: Structural system?
Kai: Cross-laminated timber — CLT — for the superstructure. It reduces the carbon footprint versus concrete by approximately sixty percent over the building lifecycle.
        `,
        questions: [
          { id: 21, type: "fill", q: "Number of housing units in the scheme: _____",                              answer: "42" },
          { id: 22, type: "fill", q: "Site type: _____ site in the east of the city",                            answer: "brownfield" },
          { id: 23, type: "fill", q: "Energy standard targeted: _____ standard",                                  answer: "Passivhaus" },
          { id: 24, type: "fill", q: "External wall U-value: _____ W/m²K",                                       answer: "0.15" },
          { id: 25, type: "fill", q: "Insulation thickness: _____ mm of mineral wool",                            answer: "300" },
          { id: 26, type: "fill", q: "Ventilation system: MVHR with _____ % heat recovery efficiency",           answer: "87" },
          { id: 27, type: "fill", q: "Rainwater harvesting reduces mains water use by approximately _____%",     answer: "40" },
          { id: 28, type: "fill", q: "Affordable housing proportion: _____%",                                     answer: "30" },
          { id: 29, type: "fill", q: "Sustainability framework: BREEAM _____",                                   answer: "Excellent" },
          { id: 30, type: "fill", q: "Structural material: _____ (CLT) — 60% lower carbon than concrete",        answer: "cross-laminated timber" },
        ],
      },
      {
        sectionNumber: 4,
        title: "Section 4 – Lecture: Cognitive Load Theory and Learning Design",
        context: "An educational psychology lecture on cognitive load theory and its implications for teaching.",
        instructions: "Complete the notes. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        script: `
Cognitive load theory, developed by John Sweller in the nineteen eighties, is one of the most influential frameworks in educational psychology. It explains why some instructional designs are effective and others are not, by examining the demands placed on working memory during learning.

Working memory is severely limited. Research consistently shows it can hold approximately four chunks of information simultaneously — some researchers suggest as few as three, others up to seven, but four is the commonly accepted working estimate. When working memory is overwhelmed, learning breaks down.

Cognitive load theory identifies three types. Intrinsic load is inherent in the material itself — it depends on the complexity of what is being learned and the learner's existing knowledge. Extraneous load is created by poor instructional design — unnecessary complexity, distracting formatting, or unclear instructions that consume working memory without contributing to learning. Germane load is the effortful processing that directly contributes to schema formation — the building of durable knowledge structures.

Sweller's key practical insight was that effective teaching should minimise extraneous load and maximise germane load. Several evidence-based techniques follow from this. The worked example effect shows that studying fully worked-out solutions is more effective for novices than problem-solving, because it reduces extraneous cognitive load. The split-attention effect demonstrates that presenting related information separately — for instance, text away from diagrams — forces learners to mentally integrate them, adding extraneous load. Combining them as an integrated format removes this burden.

The expertise reversal effect is also important: as learners become more expert, instructional designs that benefit novices — such as worked examples and explicit guidance — become redundant and can even impede performance. Adaptive instruction that tracks learner expertise is therefore more effective than one-size-fits-all approaches.
        `,
        questions: [
          { id: 31, type: "fill", q: "Cognitive load theory developed by: John _____ in the 1980s",              answer: "Sweller" },
          { id: 32, type: "fill", q: "Working memory can hold approximately _____ chunks simultaneously",         answer: "4" },
          { id: 33, type: "fill", q: "Type of load inherent in the material itself: _____ load",                 answer: "intrinsic" },
          { id: 34, type: "fill", q: "Load created by poor instructional design: _____ load",                    answer: "extraneous" },
          { id: 35, type: "fill", q: "Effortful processing that builds durable knowledge: _____ load",           answer: "germane" },
          { id: 36, type: "fill", q: "Effective teaching: minimise extraneous load and maximise _____ load",     answer: "germane" },
          { id: 37, type: "fill", q: "Studying fully worked solutions is called the worked _____ effect",        answer: "example" },
          { id: 38, type: "fill", q: "Presenting related information separately creates the _____ effect",       answer: "split-attention" },
          { id: 39, type: "fill", q: "The solution to split-attention: present related content as an _____ format", answer: "integrated" },
          { id: 40, type: "fill", q: "When guidance becomes redundant for experts: the _____ reversal effect",   answer: "expertise" },
        ],
      },
    ],
  },
];

/** Returns one random listening test pool per session */
export function getListeningTest(): ListeningTest {
  return pickRandom(LISTENING_POOLS);
}