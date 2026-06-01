// lib/ielts-writing-data.ts
// 5 Academic Task 1 pools, 5 GT Task 1 pools, 5 shared Task 2 pools.
// Exports: getAcademicWritingTest(), getGTWritingTest()

import {
  AcademicWritingTask1,
  GTWritingTask1,
  WritingTask2,
  AcademicWritingTest,
  GTWritingTest,
  pickRandom,
} from "./ielts-types";

// ─── ACADEMIC TASK 1 POOLS ───────────────────────────────────

const academicTask1Pool: AcademicWritingTask1[] = [
  {
    id: "AT1-A",
    chartType: "bar_chart",
    chartTypeLabel: "Bar Chart",
    prompt:
      "The bar chart below shows the percentage of households in six countries that owned at least one car in 1990, 2000, and 2010. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
    chartDescription:
      "A grouped bar chart with three bars per country (1990 / 2000 / 2010) for the USA, Germany, Japan, Brazil, India, and China. USA is consistently highest (~88%, 90%, 92%). Germany and Japan are mid-range and converge over time (both ~79% by 2010). Brazil rises steadily (45% → 58% → 67%). India remains low but grows (8% → 12% → 22%). China shows the most dramatic growth (5% → 15% → 38%). Across all countries, ownership increases in every decade.",
    minWords: 150,
  },
  {
    id: "AT1-B",
    chartType: "line_graph",
    chartTypeLabel: "Line Graph",
    prompt:
      "The line graph below shows the average monthly temperatures (°C) in three cities — London, Cairo, and Sydney — over a twelve-month period. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
    chartDescription:
      "A line graph with months (Jan–Dec) on the x-axis and temperature (°C) on the y-axis (-5 to 40). London (blue): low in Jan (~4°C), peak in Jul (~22°C), dips back in Dec. Cairo (red): peaks in Jul–Aug (~36°C), lowest in Jan (~13°C), always above London. Sydney (green): inverse pattern — peaks in Jan (~26°C), dips Jul (~13°C), reflecting Southern Hemisphere seasons. Cairo and Sydney lines cross in spring/autumn months. London is consistently coolest.",
    minWords: 150,
  },
  {
    id: "AT1-C",
    chartType: "pie_charts",
    chartTypeLabel: "Pie Charts",
    prompt:
      "The two pie charts below show how household energy consumption was divided among different uses in Australia in 2000 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
    chartDescription:
      "Two pie charts comparing household energy use in Australia. 2000 chart: Heating & cooling 38%, Water heating 30%, Appliances 15%, Lighting 12%, Cooking 5%. 2020 chart: Heating & cooling 40%, Appliances 26%, Water heating 20%, Lighting 7%, Cooking 7%. Key shifts: Appliances nearly doubled (15% → 26%); Water heating fell (30% → 20%); Lighting fell (12% → 7%); Heating & cooling grew slightly; Cooking stable. Overall, appliances became a much larger share over the two decades.",
    minWords: 150,
  },
  {
    id: "AT1-D",
    chartType: "table",
    chartTypeLabel: "Table",
    prompt:
      "The table below gives information about the population, GDP per capita, and life expectancy in five countries in 2022. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
    chartDescription:
      "A 5-row table with columns: Country | Population (millions) | GDP per capita (USD) | Life expectancy (years). Data: Norway — 5.4 / $89,000 / 83.2; Brazil — 215 / $9,100 / 75.9; Nigeria — 220 / $2,100 / 55.2; Japan — 125 / $42,000 / 84.3; India — 1,400 / $2,400 / 70.4. Japan has the highest life expectancy despite not the highest GDP. Nigeria has the lowest life expectancy and GDP. Norway has the highest GDP. India and Brazil are middle-income with mid-range life expectancy. Population size does not correlate with wealth.",
    minWords: 150,
  },
  {
    id: "AT1-E",
    chartType: "process",
    chartTypeLabel: "Process Diagram",
    prompt:
      "The diagram below illustrates the process by which rainwater is collected, treated, and distributed for household use in an urban area. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
    chartDescription:
      "A linear process diagram with 8 steps: (1) Rainfall collects in a river/reservoir → (2) Water pumped to a screening plant, large debris removed → (3) Water passes through sedimentation tanks, particles settle → (4) Chemicals added (coagulation/flocculation stage) → (5) Water filtered through sand and gravel → (6) Chlorination and pH adjustment → (7) Treated water stored in covered service reservoirs → (8) Distributed via underground pipes to homes, schools, and businesses. Arrows show a single directional flow. Two branch arrows at step 8 show separate distribution to residential and commercial consumers.",
    minWords: 150,
  },
];

// ─── GT TASK 1 POOLS ─────────────────────────────────────────

const gtTask1Pool: GTWritingTask1[] = [
  {
    id: "GT1-A",
    letterType: "formal",
    letterTypeLabel: "Formal Letter",
    prompt:
      "You have recently booked a conference room at a hotel for a business event, but you need to make some changes to your original booking. Write a letter to the hotel manager. In your letter: explain the reason for the changes, specify what changes you need, and ask whether any extra costs will apply. Write at least 150 words. You do NOT need to write any addresses.",
    bulletPoints: [
      "Explain why the changes are necessary",
      "State the specific changes to the booking",
      "Ask about any additional charges",
    ],
    minWords: 150,
  },
  {
    id: "GT1-B",
    letterType: "semi_formal",
    letterTypeLabel: "Semi-Formal Letter",
    prompt:
      "You have been offered a new job in another city, but you are currently renting accommodation. Write a letter to your landlord. In your letter: explain your situation, tell them when you intend to leave, and ask for advice on returning your deposit. Write at least 150 words. You do NOT need to write any addresses.",
    bulletPoints: [
      "Explain your situation and reason for leaving",
      "Give your intended move-out date",
      "Ask about how to get your deposit back",
    ],
    minWords: 150,
  },
  {
    id: "GT1-C",
    letterType: "informal",
    letterTypeLabel: "Informal Letter",
    prompt:
      "A friend from another country is coming to visit you for two weeks. Write a letter to your friend. In your letter: tell them what to expect from the weather, suggest some activities you could do together, and let them know about any practical arrangements you have made. Write at least 150 words. You do NOT need to write any addresses.",
    bulletPoints: [
      "Describe what the weather will be like",
      "Suggest activities to do together",
      "Share practical arrangements (transport, accommodation, etc.)",
    ],
    minWords: 150,
  },
  {
    id: "GT1-D",
    letterType: "formal",
    letterTypeLabel: "Formal Letter",
    prompt:
      "You recently bought a laptop from an electronics store and it has developed a fault. Write a letter to the store manager. In your letter: describe the fault and when it appeared, explain what steps you have already taken, and state what resolution you expect. Write at least 150 words. You do NOT need to write any addresses.",
    bulletPoints: [
      "Describe the fault and when it started",
      "Explain what you have done so far",
      "State what you want the store to do",
    ],
    minWords: 150,
  },
  {
    id: "GT1-E",
    letterType: "semi_formal",
    letterTypeLabel: "Semi-Formal Letter",
    prompt:
      "You have been a member of a local sports club for several years. The club is planning to change its opening hours in a way that is inconvenient for you. Write a letter to the club manager. In your letter: explain how you currently use the club, say why the new hours are a problem for you, and suggest an alternative arrangement. Write at least 150 words. You do NOT need to write any addresses.",
    bulletPoints: [
      "Describe how and when you currently use the club",
      "Explain why the proposed changes are problematic",
      "Suggest an alternative that would work better",
    ],
    minWords: 150,
  },
];

// ─── SHARED TASK 2 POOLS ─────────────────────────────────────

const task2Pool: WritingTask2[] = [
  {
    id: "T2-A",
    taskType: "opinion",
    taskTypeLabel: "Opinion Essay",
    prompt:
      "Some people believe that university education should be free for all students, funded entirely by the government. Others argue that students should pay tuition fees themselves. Discuss both views and give your own opinion. Write at least 250 words.",
    planningHints: [
      "Address the 'free education' argument: equality of access, economic returns to society, public good",
      "Address the 'students pay' argument: financial sustainability, personal responsibility, graduate premium",
      "State your own clear position in the introduction and conclusion",
      "Use specific examples or evidence to support each side",
    ],
    minWords: 250,
  },
  {
    id: "T2-B",
    taskType: "discussion",
    taskTypeLabel: "Discussion Essay",
    prompt:
      "In many countries, the number of people choosing to live alone is increasing. What are the reasons for this trend? Do you think it is a positive or negative development? Write at least 250 words.",
    planningHints: [
      "Reasons: rising incomes, changing social attitudes, later marriage, urbanisation, increased individualism",
      "Positive aspects: personal freedom, independence, reduced household conflict",
      "Negative aspects: loneliness, higher living costs, social fragmentation",
      "Give a clear balanced or one-sided judgement in your conclusion",
    ],
    minWords: 250,
  },
  {
    id: "T2-C",
    taskType: "problem_solution",
    taskTypeLabel: "Problem & Solution Essay",
    prompt:
      "Traffic congestion in cities is becoming an increasingly serious problem. What are the main causes of this problem, and what measures could governments and individuals take to reduce it? Write at least 250 words.",
    planningHints: [
      "Causes: over-reliance on private cars, poor public transport, rapid urbanisation, poor urban planning",
      "Government solutions: invest in public transport, congestion charging, cycle infrastructure, smart traffic systems",
      "Individual solutions: carpooling, remote working, flexible commuting hours",
      "Structure: causes paragraph(s) first, then solutions paragraph(s)",
    ],
    minWords: 250,
  },
  {
    id: "T2-D",
    taskType: "double_question",
    taskTypeLabel: "Double Question Essay",
    prompt:
      "Some children spend hours every day using smartphones and other digital devices. Why do children spend so much time on these devices? Is this a positive or negative trend for society? Write at least 250 words.",
    planningHints: [
      "Reasons: entertainment, social media, gaming, educational apps, parental use of screens as childcare",
      "Negative effects: reduced physical activity, sleep disruption, shorter attention spans, cyberbullying",
      "Positive effects: digital literacy, access to information, connectivity",
      "Answer BOTH questions clearly — they carry equal weight",
    ],
    minWords: 250,
  },
  {
    id: "T2-E",
    taskType: "advantages_disadvantages",
    taskTypeLabel: "Advantages & Disadvantages Essay",
    prompt:
      "Many companies now allow their employees to work from home permanently. What are the advantages and disadvantages of this arrangement for both employees and employers? Write at least 250 words.",
    planningHints: [
      "Employee advantages: flexibility, no commute, better work-life balance",
      "Employee disadvantages: isolation, blurred work-life boundaries, home distractions",
      "Employer advantages: lower office costs, wider talent pool, increased productivity (for some roles)",
      "Employer disadvantages: harder to manage, collaboration challenges, security risks",
    ],
    minWords: 250,
  },
];

// ─── EXPORTS ─────────────────────────────────────────────────

export function getAcademicWritingTest(): AcademicWritingTest {
  return {
    format: "academic",
    task1: pickRandom(academicTask1Pool),
    task2: pickRandom(task2Pool),
  };
}

export function getGTWritingTest(): GTWritingTest {
  return {
    format: "general",
    task1: pickRandom(gtTask1Pool),
    task2: pickRandom(task2Pool),
  };
}