// lib/gmat/data-insights.ts
import type { GmatSectionBank } from "./types";

const DATA_INSIGHTS_ITEMS: GmatSectionBank["items"] = [
  /* ---- Data Sufficiency (options NEVER shuffled) ---- */
  {
    id: "gmat-ds-0001", section: "data-insights", type: "data-sufficiency",
    difficulty: "Medium", topic: "Data Sufficiency · algebra",
    stem: "What is the value of the integer x?",
    statements: ["x is a prime number between 10 and 20.", "x + 2 is a multiple of 13."],
    correct: 2,
    optionExplanations: [
      "Statement (1) alone leaves x as 11, 13, 17, or 19 — not unique.",
      "Statement (2) alone gives x + 2 ∈ {13, 26, …}, so x could be 11, 24, … — not unique.",
      "Together: x is prime in (10,20) and x + 2 is a multiple of 13, so x + 2 = 13 → x = 11, which is prime. Unique.",
      "Neither statement alone is sufficient, so 'each alone' is wrong.",
      "Together they pin down x = 11, so they are sufficient.",
    ],
    explanation: "(1) alone: primes 11, 13, 17, 19 — not unique. (2) alone: x = 11, 24, … — not unique. Together: x + 2 = 13 gives x = 11, which is prime and in range. Both together are sufficient; neither alone is.",
  },
  {
    id: "gmat-ds-0002", section: "data-insights", type: "data-sufficiency",
    difficulty: "Easy", topic: "Data Sufficiency · arithmetic",
    stem: "Is the integer n even?",
    statements: ["n is divisible by 6.", "n is divisible by 9."],
    correct: 0,
    optionExplanations: [
      "Statement (1): any multiple of 6 is divisible by 2, so n is even — sufficient alone.",
      "Statement (2): multiples of 9 can be odd (9, 27) or even (18), so not sufficient alone.",
      "Statement (1) already suffices, so 'both together' is not the best answer.",
      "Only (1) is sufficient, not each alone.",
      "(1) is sufficient, so the pair is not insufficient.",
    ],
    explanation: "(1) Multiples of 6 are always even — sufficient. (2) Multiples of 9 can be odd or even — not sufficient. So statement (1) alone is sufficient.",
  },
  {
    id: "gmat-ds-0003", section: "data-insights", type: "data-sufficiency",
    difficulty: "Hard", topic: "Data Sufficiency · word problem",
    stem: "A store sold pens and notebooks. How many pens were sold?",
    statements: ["The store sold 30 items in total.", "Each notebook sold for $4 and each pen for $1, and total sales were $75."],
    correct: 2,
    optionExplanations: [
      "Statement (1) alone gives pens + notebooks = 30 — many solutions.",
      "Statement (2) alone gives 4N + P = 75 — many solutions.",
      "Together: P + N = 30 and 4N + P = 75 → 3N = 45 → N = 15, P = 15. Unique.",
      "Neither alone works, so 'each alone' is wrong.",
      "Together they solve uniquely, so they are sufficient.",
    ],
    explanation: "(1): P + N = 30. (2): 4N + P = 75. Each alone is underdetermined. Subtracting gives 3N = 45, so N = 15 and P = 15. Together sufficient; neither alone.",
  },
  {
    id: "gmat-ds-0004", section: "data-insights", type: "data-sufficiency",
    difficulty: "Medium", topic: "Data Sufficiency · statistics",
    stem: "Is the average (arithmetic mean) of five different integers greater than 20?",
    statements: ["The smallest of the integers is 16.", "The largest of the integers is 26."],
    correct: 4,
    optionExplanations: [
      "Statement (1) alone: with a minimum of 16, the set could be {16, 17, 18, 19, 20} (mean = 18 ≤ 20) or {16, 30, 31, 32, 33} (mean = 28.4 > 20). Not sufficient.",
      "Statement (2) alone: with a maximum of 26, the set could be {1, 2, 3, 4, 26} (mean = 7.2 ≤ 20) or {22, 23, 24, 25, 26} (mean = 24 > 20). Not sufficient.",
      "Even together, the three middle values are not fixed, so the mean is not determined.",
      "Neither statement alone is sufficient.",
      "Correct: together, the minimum possible sum for five distinct integers is 16 + 17 + 18 + 19 + 26 = 96 (mean = 19.2 ≤ 20) and the maximum possible sum is 16 + 23 + 24 + 25 + 26 = 114 (mean = 22.8 > 20). Because the mean can be either at most 20 or greater than 20, both statements together are not sufficient.",
    ],
    explanation: "With min = 16 and max = 26 for five distinct integers, the minimum possible average is (16 + 17 + 18 + 19 + 26) / 5 = 19.2, and the maximum possible average is (16 + 23 + 24 + 25 + 26) / 5 = 22.8. Because the average can be either at most 20 or greater than 20, both statements together are insufficient.",
  },
  /* ---- Two-Part Analysis (rows shuffle; both indices remap) ---- */
  {
    id: "gmat-tp-0001", section: "data-insights", type: "two-part-analysis",
    difficulty: "Medium", topic: "Two-Part Analysis · algebra",
    intro: "A company's total monthly cost C (in dollars) to produce q units is given by C = 500 + 8q. Its revenue R is R = 12q.",
    prompt: "Select the number of units that makes total cost equal to $1,300 in the first column, and the number of units at which revenue equals total cost (break-even) in the second column. Make one selection in each column.",
    colHeaders: ["Cost = $1,300", "Break-even"],
    rows: ["75", "100", "125", "150", "175"],
    correctA: 1, // 500 + 8q = 1300 → q = 100
    correctB: 2, // 12q = 500 + 8q → 4q = 500 → q = 125
    explanation: "Cost = $1,300: 500 + 8q = 1300 → 8q = 800 → q = 100. Break-even: 12q = 500 + 8q → 4q = 500 → q = 125.",
  },
  {
    id: "gmat-tp-0002", section: "data-insights", type: "two-part-analysis",
    difficulty: "Hard", topic: "Two-Part Analysis · proportions",
    intro: "A recipe requires sugar and flour in the ratio 2 : 5 by weight. A baker wants to make a batch using a whole number of grams of each.",
    prompt: "In the first column select a possible weight of sugar, and in the second column select the corresponding weight of flour for the same batch, keeping the 2 : 5 ratio. Make one selection in each column.",
    colHeaders: ["Sugar (g)", "Flour (g)"],
    rows: ["40", "60", "100", "150", "175"],
    correctA: 1, // sugar 60
    correctB: 3, // flour 150 (60:150 = 2:5)
    explanation: "For a 2 : 5 ratio, flour = 2.5 × sugar. Among the options, sugar = 60 g pairs with flour = 150 g, since 60 : 150 = 2 : 5.",
  },
  {
    id: "gmat-tp-0003", section: "data-insights", type: "two-part-analysis",
    difficulty: "Medium", topic: "Two-Part Analysis · logic",
    intro: "Two trains leave the same station. Train X travels north at 50 km/h; Train Y travels south at 70 km/h, both starting at noon.",
    prompt: "Select the distance Train X has travelled by 3:00 p.m. in the first column, and the total distance between the two trains at 3:00 p.m. in the second column. Make one selection in each column.",
    colHeaders: ["Train X distance", "Distance apart"],
    rows: ["120 km", "150 km", "210 km", "300 km", "360 km"],
    correctA: 1, // 50 × 3 = 150
    correctB: 4, // (50+70) × 3 = 360
    explanation: "In 3 hours Train X travels 50 × 3 = 150 km. The trains move apart at 50 + 70 = 120 km/h, so after 3 hours they are 120 × 3 = 360 km apart.",
  },
  /* ---- Table Analysis (statements shuffle; all must be correct) ---- */
  {
    id: "gmat-ta-0001", section: "data-insights", type: "table-analysis",
    difficulty: "Medium", topic: "Table Analysis · sales data",
    intro: "The table shows quarterly revenue (in $ thousands) for four regional offices. Sort the columns as needed, then judge each statement.",
    table: {
      columns: ["Office", "Q1", "Q2", "Q3", "Q4"],
      rows: [
        ["North", 120, 135, 150, 160],
        ["South", 90, 95, 80, 110],
        ["East", 200, 180, 210, 220],
        ["West", 75, 85, 95, 100],
      ],
    },
    answerLabels: ["Yes", "No"],
    statements: [
      { text: "East had the highest revenue in every quarter shown.", correct: true },
      { text: "West's revenue increased in every successive quarter.", correct: true },
      { text: "South's revenue increased in every successive quarter.", correct: false },
    ],
    explanation: "East (200, 180, 210, 220) leads every quarter — Yes. West rises 75 → 85 → 95 → 100 every quarter — Yes. South goes 90 → 95 → 80 → 110, dropping in Q3 — so 'increased every quarter' is No.",
  },
  {
    id: "gmat-ta-0002", section: "data-insights", type: "table-analysis",
    difficulty: "Hard", topic: "Table Analysis · demographics",
    intro: "The table lists five countries with their population (millions) and land area (thousand km²). Sort as needed, then evaluate each statement.",
    table: {
      columns: ["Country", "Population (M)", "Area (k km²)"],
      rows: [
        ["Alpha", 50, 500],
        ["Beta", 80, 400],
        ["Gamma", 20, 800],
        ["Delta", 120, 600],
        ["Epsilon", 30, 300],
      ],
    },
    answerLabels: ["Yes", "No"],
    statements: [
      { text: "Delta has the largest population of the five countries.", correct: true },
      { text: "Gamma has the lowest population density (people per km²) of the five.", correct: true },
      { text: "Beta has a larger land area than Alpha.", correct: false },
    ],
    explanation: "Delta's 120 M is the largest population — Yes. Density = population ÷ area: Gamma = 20/800 = 0.025 M per k km², the lowest — Yes. Beta's area is 400 vs Alpha's 500, so Beta is smaller — the statement is No.",
  },
  /* ---- Graphics Interpretation (each blank's options shuffle) ---- */
  {
    id: "gmat-gi-0001", section: "data-insights", type: "graphics-interpretation",
    difficulty: "Medium", topic: "Graphics Interpretation · bar chart",
    intro: "The bar chart shows the number of units sold by a shop over five months. Use it to complete each statement.",
    chart: {
      kind: "bars",
      labels: ["Jan", "Feb", "Mar", "Apr", "May"],
      values: [40, 55, 50, 70, 65],
      yLabel: "Units sold",
    },
    blanks: [
      { prefix: "The month with the highest sales was", options: ["April", "May", "February", "March"], correct: 0 },
      { prefix: "Sales first decreased between", options: ["Jan and Feb", "Feb and Mar", "Mar and Apr", "Apr and May"], correct: 1, suffix: "." },
    ],
    explanation: "Highest bar is April at 70 units. The first month-to-month decrease is Feb (55) to Mar (50).",
  },
  {
    id: "gmat-gi-0002", section: "data-insights", type: "graphics-interpretation",
    difficulty: "Hard", topic: "Graphics Interpretation · line trend",
    intro: "The line graph shows a city's average temperature (°C) over six months. Use it to complete each statement.",
    chart: {
      kind: "line",
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      values: [5, 8, 12, 18, 23, 27],
      yLabel: "Avg temp (°C)",
    },
    blanks: [
      { prefix: "The temperature rose by the largest single-month amount between", options: ["Mar and Apr", "Apr and May", "Jan and Feb", "Feb and Mar"], correct: 0 },
      { prefix: "Over the whole period the trend is", options: ["steadily increasing", "steadily decreasing", "flat", "fluctuating up and down"], correct: 0, suffix: "." },
    ],
    explanation: "Month-to-month rises: +3, +4, +6, +5, +4 — the largest is Mar→Apr (+6). Across all six months the temperature only rises, so the trend is steadily increasing.",
  },
  /* ---- Multi-Source Reasoning (mcq sub-q options shuffle; yn fixed) ---- */
  {
    id: "gmat-msr-0001", section: "data-insights", type: "multi-source-reasoning",
    difficulty: "Hard", topic: "Multi-Source Reasoning · project",
    explanation: "Each sub-question is explained individually below.",
    sources: [
      {
        title: "Email",
        body: "From the project lead: 'The website redesign has three phases — Design, Build, and Test. Design must finish before Build starts, and Build must finish before Test starts. We have 9 weeks total before launch.'",
      },
      {
        title: "Schedule",
        body: "Estimated durations: Design = 3 weeks, Build = 4 weeks, Test = 2 weeks. No phase can overlap another.",
      },
    ],
    questions: [
      {
        id: "gmat-msr-0001-q1",
        kind: "mcq",
        stem: "If all phases run back-to-back with no delay, in which week does the Test phase begin?",
        options: ["Week 5", "Week 8", "Week 7", "Week 6"],
        correct: 1,
        explanation: "Design takes weeks 1–3, Build takes weeks 4–7, so Test begins in week 8.",
      },
      {
        id: "gmat-msr-0001-q2",
        kind: "yn",
        stem: "Based on the two sources, determine whether each statement is supported.",
        statements: [
          { text: "The three phases together fit within the 9-week window.", correct: true },
          { text: "Build can begin before Design is complete.", correct: false },
          { text: "There is at least 1 week of slack before launch.", correct: false },
        ],
        answerLabels: ["Yes", "No"],
        explanation: "Total duration = 3 + 4 + 2 = 9 weeks, exactly filling the 9-week window (fits — Yes; no slack — No). The email says Design must finish before Build starts, so Build cannot begin early — No.",
      },
    ],
  },

  /* ---- Batch 2 (merged from verified set) ---- */
  {
    id: "gmat-ds-0005", section: "data-insights", type: "data-sufficiency",
    difficulty: "Medium", topic: "Data Sufficiency · algebra",
    stem: "Is the integer x greater than 10?",
    statements: [
      "x is a multiple of 4.",
      "x is between 11 and 20, inclusive.",
    ],
    correct: 1,
    optionExplanations: [
      "Statement (1) alone: x could be 4, 8, or 12 — not always > 10.",
      "Statement (2) alone: 11 ≤ x ≤ 20 means x is always greater than 10 — sufficient.",
      "Statement (2) already suffices alone, so 'both together' is not the best answer.",
      "Only (2) is sufficient, not each alone.",
      "(2) is sufficient, so the pair is not insufficient.",
    ],
    explanation: "(1) x could be 4, 8, or 12 — not sufficient. (2) 11 ≤ x ≤ 20 is always greater than 10 — sufficient. Statement (2) alone is sufficient.",
  },
  {
    id: "gmat-ds-0006", section: "data-insights", type: "data-sufficiency",
    difficulty: "Hard", topic: "Data Sufficiency · number properties",
    stem: "Is the positive integer n even?",
    statements: [
      "n² is even.",
      "3n is even.",
    ],
    correct: 3,
    optionExplanations: [
      "Statement (1) alone is sufficient, but so is (2), so this is not the best answer.",
      "Statement (2) alone is sufficient, but so is (1), so this is not the best answer.",
      "Each statement alone already suffices, so 'both together' is not needed.",
      "Correct: (1) n² even → n even; (2) 3n even with 3 odd → n even. EACH alone is sufficient.",
      "Each statement alone is sufficient, so the pair is not insufficient.",
    ],
    explanation: "(1) If n² is even, n is even — sufficient. (2) 3n even and 3 is odd → n must be even — sufficient. EACH statement alone is sufficient.",
  },
  {
    id: "gmat-ta-0003", section: "data-insights", type: "table-analysis",
    difficulty: "Medium", topic: "Table Analysis · quarterly revenue",
    intro: "The table shows quarterly revenue (in $ millions) for four branches. Sort as needed, then evaluate each statement.",
    table: {
      columns: ["Branch", "Q1", "Q2", "Q3", "Q4"],
      rows: [
        ["North", 12, 14, 13, 18],
        ["South", 9, 8, 11, 10],
        ["East", 20, 19, 22, 21],
        ["West", 5, 7, 9, 12],
      ],
    },
    answerLabels: ["Yes", "No"],
    statements: [
      { text: "West's revenue increased in every quarter.", correct: true },
      { text: "East had the highest Q3 revenue of any branch.", correct: true },
      { text: "North's Q4 was more than double its Q1.", correct: false },
    ],
    explanation: "West 5 → 7 → 9 → 12 strictly increases (Yes). East Q3 = 22 is the maximum Q3 (Yes). North Q1 = 12 and Q4 = 18; double of 12 is 24 > 18, so the Q4 claim is No.",
  },
  {
    id: "gmat-tp-0004", section: "data-insights", type: "two-part-analysis",
    difficulty: "Hard", topic: "Two-Part Analysis · cost & break-even",
    intro: "A company's total monthly cost C (in $ thousands) is C = 8 + 0.5u, where u is the number of units produced. Revenue is R = 1.3u (in $ thousands).",
    prompt: "Select the units value at which total cost equals 20 in the first column, and the smallest integer units value at which revenue exceeds cost in the second column. Make one selection in each column.",
    colHeaders: ["Cost = 20", "Break-even"],
    rows: ["10", "11", "20", "24", "30"],
    correctA: 3, // 8 + 0.5u = 20 → u = 24
    correctB: 1, // 1.3u > 8 + 0.5u → 0.8u > 8 → u > 10 → smallest integer 11
    explanation: "Cost = 20: 8 + 0.5u = 20 → 0.5u = 12 → u = 24. Break-even: 1.3u > 8 + 0.5u → 0.8u > 8 → u > 10, so the smallest integer is 11.",
  },
  {
    id: "gmat-msr-0002", section: "data-insights", type: "multi-source-reasoning",
    difficulty: "Hard", topic: "Multi-Source Reasoning · shipping",
    explanation: "Use both sources together; see per-question explanations.",
    sources: [
      {
        title: "Email",
        body: "From Operations: We can ship via Carrier A (3-day, $400) or Carrier B (5-day, $250). The client needs delivery within 4 days.",
      },
      {
        title: "Policy",
        body: "Shipments must use the lowest-cost carrier that still meets the client's deadline. Expedited surcharges require manager approval.",
      },
    ],
    questions: [
      {
        id: "gmat-msr-0002-q1",
        kind: "mcq",
        stem: "Which carrier should be selected without further approval?",
        options: ["Carrier A", "Carrier B", "Neither", "Either is allowed", "Cannot be determined"],
        correct: 0,
        explanation: "The deadline is 4 days; Carrier B (5-day) misses it. Carrier A meets it and is the lowest-cost option that does. No surcharge is noted, so no extra approval is needed.",
      },
      {
        id: "gmat-msr-0002-q2",
        kind: "yn",
        stem: "Indicate whether each statement is supported by the sources.",
        statements: [
          { text: "Carrier B satisfies the client's deadline.", correct: false },
          { text: "Policy requires choosing the cheapest deadline-meeting carrier.", correct: true },
        ],
        answerLabels: ["Supported", "Not supported"],
        explanation: "Carrier B is 5-day against a 4-day deadline (not supported). The policy text states the cheapest deadline-meeting rule (supported).",
      },
    ],
  },
// ---- Easy (DS) ----
{
  id: "gmat-ds-0007", section: "data-insights", type: "data-sufficiency",
  difficulty: "Easy", topic: "Data Sufficiency · arithmetic",
  stem: "What is the value of x + y?",
  statements: [
    "x = 8.",
    "y = 5.",
  ],
  correct: 2,
  optionExplanations: [
    "Statement (1) alone gives x but not y — cannot determine x + y.",
    "Statement (2) alone gives y but not x — cannot determine x + y.",
    "Together: x + y = 8 + 5 = 13. Sufficient.",
    "Neither alone is sufficient.",
    "Together they are sufficient, so this option is wrong.",
  ],
  explanation: "(1) alone: x = 8 but y unknown. (2) alone: y = 5 but x unknown. Together: x + y = 13. Both statements together are sufficient; neither alone is.",
},

// ---- Medium (Graphics Interpretation) ----
{
  id: "gmat-gi-0003", section: "data-insights", type: "graphics-interpretation",
  difficulty: "Medium", topic: "Graphics Interpretation · sales trend",
  intro: "The bar chart shows annual sales (in units) for a company over five years. Use it to complete each statement.",
  chart: {
    kind: "bars",
    labels: ["2019", "2020", "2021", "2022", "2023"],
    values: [80, 60, 90, 85, 110],
    yLabel: "Units sold (000s)",
  },
  blanks: [
    {
      prefix: "Sales were lowest in",
      options: ["2019", "2020", "2021", "2022"],
      correct: 1,
    },
    {
      prefix: "Compared with 2022, sales in 2023 were approximately",
      options: ["30% higher", "15% lower", "29% higher", "10% higher"],
      correct: 2,
      suffix: ".",
    },
  ],
  explanation: "The lowest bar is 2020 at 60. Change 2022→2023: (110 − 85) / 85 ≈ 29.4% higher, so approximately 29% higher.",
},

// ---- Hard (Two-Part Analysis) ----
{
  id: "gmat-tp-0005", section: "data-insights", type: "two-part-analysis",
  difficulty: "Hard", topic: "Two-Part Analysis · algebra",
  intro: "A tank is filled by two pipes. Pipe A alone fills the tank in 6 hours; Pipe B alone fills it in 9 hours. Both pipes are open together.",
  prompt: "Select the fraction of the tank filled after 2 hours in the first column, and the total time (in hours) to fill the tank completely in the second column. Make one selection in each column.",
  colHeaders: ["Fraction filled after 2 h", "Time to fill (hours)"],
  rows: ["5/9", "3.6", "4", "4.5", "7/9"],
  correctA: 0, // combined rate = 1/6 + 1/9 = 5/18 per hour; in 2 h = 10/18 = 5/9
  correctB: 1, // total time = 18/5 = 3.6 hours
  explanation: "Combined rate = 1/6 + 1/9 = 3/18 + 2/18 = 5/18 per hour. After 2 hours: 2 × 5/18 = 10/18 = 5/9. Time to fill = 18/5 = 3.6 hours.",
},
// ---- Easy (DS) ----
{
  id: "gmat-ds-0008", section: "data-insights", type: "data-sufficiency",
  difficulty: "Easy", topic: "Data Sufficiency · arithmetic",
  stem: "Is integer p divisible by 3?",
  statements: [
    "p = 18.",
    "p is an even number.",
  ],
  correct: 0,
  optionExplanations: [
    "Correct: p = 18 = 3 × 6, so p is divisible by 3 — sufficient alone.",
    "Even numbers can be divisible by 3 (e.g. 6) or not (e.g. 4) — not sufficient alone.",
    "Statement (1) alone suffices, so 'both together' is not the best answer.",
    "Only (1) is sufficient, not each alone.",
    "(1) is sufficient, so together they are not insufficient.",
  ],
  explanation: "(1) p = 18, which is divisible by 3 — sufficient. (2) Even numbers may or may not be divisible by 3 — not sufficient. Statement (1) alone is sufficient.",
},
{
  id: "gmat-ds-0009", section: "data-insights", type: "data-sufficiency",
  difficulty: "Easy", topic: "Data Sufficiency · geometry",
  stem: "What is the area of a rectangle?",
  statements: [
    "The length of the rectangle is 10.",
    "The width of the rectangle is 4.",
  ],
  correct: 2,
  optionExplanations: [
    "Length alone cannot determine area without width.",
    "Width alone cannot determine area without length.",
    "Correct: area = length × width = 10 × 4 = 40 — both together are sufficient.",
    "Neither alone is sufficient.",
    "Together they are sufficient, so this is wrong.",
  ],
  explanation: "Area requires both length and width. Neither statement alone is sufficient, but together: area = 10 × 4 = 40.",
},
{
  id: "gmat-ds-0010", section: "data-insights", type: "data-sufficiency",
  difficulty: "Easy", topic: "Data Sufficiency · arithmetic",
  stem: "What is the value of 3n?",
  statements: [
    "n + 5 = 11.",
    "2n = 12.",
  ],
  correct: 3,
  optionExplanations: [
    "Statement (1) gives n = 6, so 3n = 18 — sufficient alone.",
    "Statement (2) gives n = 6, so 3n = 18 — sufficient alone.",
    "Each alone already suffices, so 'both together' is not the best answer.",
    "Correct: each statement independently gives n = 6, so each alone is sufficient.",
    "Each statement is sufficient, so together they are not insufficient.",
  ],
  explanation: "(1) n = 6 → 3n = 18. (2) n = 6 → 3n = 18. Each statement alone is sufficient.",
},
{
  id: "gmat-ds-0011", section: "data-insights", type: "data-sufficiency",
  difficulty: "Easy", topic: "Data Sufficiency · ratios",
  stem: "Is x/y greater than 1?",
  statements: [
    "x > y.",
    "y > 0.",
  ],
  correct: 2,
  optionExplanations: [
    "If y is negative, x > y does not guarantee x/y > 1 (e.g. x = 1, y = −1 gives x/y = −1).",
    "y > 0 alone says nothing about x.",
    "Correct: together, x > y and y > 0 guarantee x > y > 0, so x/y > 1.",
    "Neither alone is sufficient.",
    "Together they are sufficient, so this is wrong.",
  ],
  explanation: "Statement (1) alone fails when y < 0. Statement (2) alone gives no info about x. Together: y > 0 and x > y implies x/y > 1.",
},

// ---- Medium (Table Analysis) ----
{
  id: "gmat-ta-0004", section: "data-insights", type: "table-analysis",
  difficulty: "Medium", topic: "Table Analysis · employee data",
  intro: "The table shows data for five departments: number of employees, average salary ($000s), and training hours per employee last year. Sort as needed to evaluate each statement.",
  table: {
    columns: ["Department", "Employees", "Avg Salary ($000s)", "Training Hrs"],
    rows: [
      ["Finance", 20, 75, 12],
      ["HR", 15, 60, 18],
      ["IT", 35, 90, 22],
      ["Sales", 50, 65, 10],
      ["Operations", 30, 70, 15],
    ],
  },
  answerLabels: ["Yes", "No"],
  statements: [
    { text: "IT has both the highest average salary and the most training hours per employee.", correct: true },
    { text: "Sales has the largest total salary bill (employees × average salary).", correct: true },
    { text: "HR employees receive more training hours than Operations employees.", correct: true },
  ],
  explanation: "IT: salary 90 (highest), training 22 hrs (highest) — Yes. Sales total bill = 50 × 65 = 3,250; IT = 35 × 90 = 3,150; Sales is largest — Yes. HR = 18 hrs, Operations = 15 hrs; HR is higher — Yes.",
},
{
  id: "gmat-ta-0005", section: "data-insights", type: "table-analysis",
  difficulty: "Medium", topic: "Table Analysis · product performance",
  intro: "The table shows three products' units sold, unit price ($), and unit cost ($) last quarter. Evaluate each statement.",
  table: {
    columns: ["Product", "Units Sold", "Unit Price ($)", "Unit Cost ($)"],
    rows: [
      ["Alpha", 500, 40, 25],
      ["Beta", 200, 80, 55],
      ["Gamma", 800, 20, 14],
    ],
  },
  answerLabels: ["Yes", "No"],
  statements: [
    { text: "Alpha generated more total revenue than Beta.", correct: true },
    { text: "Beta had the highest profit margin per unit.", correct: true },
    { text: "Gamma's total profit exceeded Alpha's total profit.", correct: false },
  ],
  explanation: "Revenue: Alpha = 500×40 = 20,000; Beta = 200×80 = 16,000 — Alpha higher (Yes). Margin: Alpha = 15, Beta = 25, Gamma = 6 — Beta highest (Yes). Profit: Gamma = 800×6 = 4,800; Alpha = 500×15 = 7,500 — Gamma does NOT exceed Alpha (No).",
},
// ---- Hard (MSR) ----
{
  id: "gmat-msr-0003", section: "data-insights", type: "multi-source-reasoning",
  difficulty: "Hard", topic: "Multi-Source Reasoning · budget",
  explanation: "Use both sources; see per-question explanations.",
  sources: [
    {
      title: "Memo",
      body: "The marketing team has a Q3 budget of $120,000. Planned spend: digital advertising $50,000; events $40,000; content creation $30,000. Any unplanned spend requires director approval. Savings from one category may be reallocated to another without approval.",
    },
    {
      title: "Update",
      body: "Digital advertising came in $10,000 under budget. The team now wants to spend an additional $15,000 on events.",
    },
  ],
  questions: [
    {
      id: "gmat-msr-0003-q1",
      kind: "mcq",
      stem: "Based on both sources, what action is required before the additional $15,000 events spend can proceed?",
      options: [
        "No action required — savings cover it fully.",
        "Director approval for $5,000.",
        "Director approval for the full $15,000.",
        "Director approval for $10,000.",
        "The spend cannot proceed under any circumstances.",
      ],
      correct: 1,
      explanation: "Planned spend is $50,000 (digital) + $40,000 (events) + $30,000 (content) = $120,000. The $10,000 digital saving can be reallocated to events without approval. The remaining $5,000 exceeds planned funds and is unplanned, requiring director approval for that portion only.",
    },
    {
      id: "gmat-msr-0003-q2",
      kind: "yn",
      stem: "Indicate whether each statement is supported by the two sources.",
      statements: [
        { text: "The team can reallocate the $10,000 digital saving to events without approval.", correct: true },
        { text: "If the director approves the full additional $15,000, total Q3 spend will exceed the original $120,000 budget.", correct: true },
        { text: "Increasing content creation spending above $30,000 would require director approval even if savings were available elsewhere in the budget.", correct: false },
      ],
      answerLabels: ["Supported", "Not supported"],
      explanation: "Savings reallocation needs no approval — supported. With the $10k digital saving reallocated and $5k director-approved extra: total spend = $40k (digital) + $55k (events) + $30k (content) = $125k, exceeding the $120k budget — supported. The memo permits savings from one category to be reallocated to another without approval, so content creation could be increased using the $10k digital saving with no director involvement — not supported.",
    },
  ],
},
// ---- Batch 13 — Data Insights (gmat-ds-0012 to gmat-ds-0021, gmat-ta-0006 to gmat-ta-0008, gmat-gi-0004 to gmat-gi-0005, gmat-tp-0007 to gmat-tp-0008, gmat-msr-0004) ----

/* ---- Data Sufficiency ---- */
{
  id: "gmat-ds-0012", section: "data-insights", type: "data-sufficiency",
  difficulty: "Easy", topic: "Data Sufficiency · arithmetic",
  stem: "What is the value of n + 7?",
  statements: [
    "n = 13.",
    "n − 3 = 10.",
  ],
  correct: 3,
  optionExplanations: [
    "Statement (1) alone: n=13 → n+7=20 — sufficient alone.",
    "Statement (2) alone: n=13 → n+7=20 — sufficient alone.",
    "Each alone already suffices so 'both together' is not the best answer.",
    "Correct: each statement independently gives n=13, so each alone is sufficient.",
    "Each is sufficient so together they are not insufficient.",
  ],
  explanation: "(1) n=13 → n+7=20. (2) n−3=10 → n=13 → n+7=20. Each statement alone is sufficient.",
},
{
  id: "gmat-ds-0013", section: "data-insights", type: "data-sufficiency",
  difficulty: "Easy", topic: "Data Sufficiency · geometry",
  stem: "Is triangle PQR a right triangle?",
  statements: [
    "PQ² + QR² = PR².",
    "Angle Q = 90°.",
  ],
  correct: 3,
  optionExplanations: [
    "Statement (1) alone: Pythagorean identity is satisfied — right triangle confirmed. Sufficient.",
    "Statement (2) alone: angle Q = 90° directly confirms a right triangle. Sufficient.",
    "Each alone suffices so 'both together' is not the best answer.",
    "Correct: each statement independently confirms a right triangle.",
    "Each is sufficient so together they are not insufficient.",
  ],
  explanation: "(1) Pythagorean theorem confirms right triangle. (2) A 90° angle directly confirms it. Each statement alone is sufficient.",
},
{
  id: "gmat-ds-0014", section: "data-insights", type: "data-sufficiency",
  difficulty: "Easy", topic: "Data Sufficiency · arithmetic",
  stem: "Is integer k a multiple of 6?",
  statements: [
    "k is a multiple of 3.",
    "k is a multiple of 2.",
  ],
  correct: 2,
  optionExplanations: [
    "Statement (1) alone: k could be 3, 9, 15 — not necessarily multiples of 6. Not sufficient.",
    "Statement (2) alone: k could be 2, 4, 10 — not necessarily multiples of 6. Not sufficient.",
    "Correct: together k is a multiple of both 2 and 3; LCM(2,3)=6, so k must be a multiple of 6.",
    "Neither alone is sufficient.",
    "Together they are sufficient so this is wrong.",
  ],
  explanation: "Neither statement alone suffices. Together: divisible by 2 AND 3 → divisible by LCM(2,3)=6.",
},
{
  id: "gmat-ds-0015", section: "data-insights", type: "data-sufficiency",
  difficulty: "Medium", topic: "Data Sufficiency · algebra",
  stem: "What is the value of a²+ b²?",
  statements: [
    "a + b = 10.",
    "ab = 20.",
  ],
  correct: 2,
  optionExplanations: [
    "Statement (1) alone: a+b=10 gives (a+b)²=100=a²+2ab+b², but ab unknown — not sufficient.",
    "Statement (2) alone: ab=20 but a+b unknown — not sufficient.",
    "Correct: together a²+b²=(a+b)²−2ab=100−40=60. Sufficient.",
    "Neither alone is sufficient.",
    "Together they are sufficient so this is wrong.",
  ],
  explanation: "a²+b² = (a+b)²−2ab = 10²−2(20) = 100−40 = 60. Both statements together are sufficient; neither alone is.",
},
{
  id: "gmat-ds-0016", section: "data-insights", type: "data-sufficiency",
  difficulty: "Medium", topic: "Data Sufficiency · geometry",
  stem: "What is the area of circle C?",
  statements: [
    "The diameter of circle C is 14.",
    "The circumference of circle C is 14π.",
  ],
  correct: 3,
  optionExplanations: [
    "Statement (1) alone: diameter=14 → radius=7 → area=49π. Sufficient.",
    "Statement (2) alone: circumference=2πr=14π → r=7 → area=49π. Sufficient.",
    "Each alone suffices so 'both together' is not the best answer.",
    "Correct: each statement independently gives radius=7 and thus area=49π.",
    "Each is sufficient so together they are not insufficient.",
  ],
  explanation: "(1) r=7 → area=49π. (2) 2πr=14π → r=7 → area=49π. Each statement alone is sufficient.",
},
{
  id: "gmat-ds-0017", section: "data-insights", type: "data-sufficiency",
  difficulty: "Medium", topic: "Data Sufficiency · statistics",
  stem: "What is the median of a set of 7 distinct integers?",
  statements: [
    "The smallest integer is 5 and the largest is 35.",
    "The 4th value when the integers are arranged in ascending order is 18.",
  ],
  correct: 1,
  optionExplanations: [
    "Statement (1) alone: knowing only min and max of 7 integers does not determine the 4th (median) value. Not sufficient.",
    "Correct: with 7 distinct integers in ascending order, the 4th value is the median. Statement (2) directly gives median=18. Sufficient.",
    "Statement (2) alone suffices so 'both together' is not the best answer.",
    "Only (2) is sufficient, not each alone.",
    "(2) is sufficient so together they are not insufficient.",
  ],
  explanation: "For 7 values the median is the 4th in order. Statement (2) gives it directly. Statement (1) alone cannot determine the median.",
},
{
  id: "gmat-ds-0018", section: "data-insights", type: "data-sufficiency",
  difficulty: "Hard", topic: "Data Sufficiency · number properties",
  stem: "If x and y are positive integers, is x/y an integer?",
  statements: [
    "x is a multiple of 6.",
    "y = 4.",
  ],
  correct: 4,
  optionExplanations: [
    "Statement (1) alone: x could be 6 and y could be 4 → 6/4 not integer; or x=12, y=4 → 3. Not sufficient.",
    "Statement (2) alone: y=4 but x unknown — x/4 may or may not be integer. Not sufficient.",
    "Together: x is a multiple of 6 and y=4; x could be 6 → 6/4=1.5 (not integer) or 12 → 12/4=3 (integer). Still not sufficient.",
    "Neither alone is sufficient.",
    "Correct: even together the statements are insufficient to determine whether x/y is always an integer.",
  ],
  explanation: "x=6, y=4 → 1.5 (not integer). x=12, y=4 → 3 (integer). Both statements together cannot determine the answer. Insufficient.",
},
{
  id: "gmat-ds-0019", section: "data-insights", type: "data-sufficiency",
  difficulty: "Hard", topic: "Data Sufficiency · algebra",
  stem: "Is x > 0?",
  statements: [
    "x² > 0.",
    "x³ > 0.",
  ],
  correct: 1,
  optionExplanations: [
    "Statement (1) alone: x²>0 means x≠0, but x could be positive or negative. Not sufficient.",
    "Correct: x³>0 means x>0 (cubing preserves sign). Sufficient alone.",
    "Statement (2) alone suffices so 'both together' is not the best answer.",
    "Only (2) is sufficient, not each alone.",
    "(2) is sufficient so together they are not insufficient.",
  ],
  explanation: "(1) x²>0 only tells us x≠0 — not whether x is positive or negative. (2) x³>0 means x must be positive. Statement (2) alone is sufficient.",
},
{
  id: "gmat-ds-0020", section: "data-insights", type: "data-sufficiency",
  difficulty: "Hard", topic: "Data Sufficiency · word problem",
  stem: "A jar contains only red and blue marbles. What fraction of the marbles are red?",
  statements: [
    "There are 24 marbles in the jar.",
    "The number of blue marbles is 3 times the number of red marbles.",
  ],
  correct: 1,
  optionExplanations: [
    "Statement (1) alone: total=24 but ratio of red to blue unknown. Not sufficient.",
    "Correct: blue=3×red; total=red+3×red=4×red; fraction red=1/4. Sufficient alone.",
    "Statement (2) alone suffices so 'both together' is not the best answer.",
    "Only (2) is sufficient, not each alone.",
    "(2) is sufficient so together they are not insufficient.",
  ],
  explanation: "If blue = 3×red then red/(red+3×red) = 1/4. Statement (2) alone determines the fraction. Statement (1) adds nothing to the fraction calculation.",
},
{
  id: "gmat-ds-0021", section: "data-insights", type: "data-sufficiency",
  difficulty: "Hard", topic: "Data Sufficiency · rates",
  stem: "Working alone, how many hours does it take Machine X to complete a job?",
  statements: [
    "Working together, Machines X and Y complete the job in 6 hours.",
    "Machine Y alone completes the job in 10 hours.",
  ],
  correct: 2,
  optionExplanations: [
    "Statement (1) alone: combined rate=1/6 but Y's rate unknown — X's rate cannot be isolated. Not sufficient.",
    "Statement (2) alone: Y's rate=1/10 but combined rate unknown — X's rate cannot be found. Not sufficient.",
    "Correct: 1/X = 1/6 − 1/10 = 5/30 − 3/30 = 2/30 = 1/15; X takes 15 hours. Both together sufficient.",
    "Neither alone is sufficient.",
    "Together they are sufficient so this is wrong.",
  ],
  explanation: "1/X + 1/10 = 1/6 → 1/X = 1/6 − 1/10 = 2/30 = 1/15. Machine X takes 15 hours. Both statements together are sufficient; neither alone is.",
},

/* ---- Table Analysis ---- */
{
  id: "gmat-ta-0006", section: "data-insights", type: "table-analysis",
  difficulty: "Easy", topic: "Table Analysis · school results",
  intro: "The table shows examination results for five students: their scores in Maths, English, and Science (all out of 100). Evaluate each statement.",
  table: {
    columns: ["Student", "Maths", "English", "Science"],
    rows: [
      ["Aisha", 88, 76, 92],
      ["Ben", 74, 85, 68],
      ["Clara", 91, 90, 87],
      ["David", 60, 55, 72],
      ["Eva", 78, 82, 80],
    ],
  },
  answerLabels: ["Yes", "No"],
  statements: [
    { text: "Clara has the highest total score across all three subjects.", correct: true },
    { text: "David scored above 60 in every subject.", correct: false },
    { text: "Ben scored higher in English than in Maths.", correct: true },
  ],
  explanation: "Clara totals 268 vs Aisha 256, Ben 227, David 187, Eva 240 — Yes. David scored 60 in Maths, not above 60 — No. Ben: English 85 > Maths 74 — Yes.",
},
{
  id: "gmat-ta-0007", section: "data-insights", type: "table-analysis",
  difficulty: "Medium", topic: "Table Analysis · company financials",
  intro: "The table shows revenue, costs, and headcount for four divisions of a company last year. Evaluate each statement.",
  table: {
    columns: ["Division", "Revenue ($M)", "Costs ($M)", "Headcount"],
    rows: [
      ["Alpha", 120, 80, 200],
      ["Beta", 95, 70, 150],
      ["Gamma", 200, 140, 400],
      ["Delta", 60, 55, 100],
    ],
  },
  answerLabels: ["Yes", "No"],
  statements: [
    { text: "Gamma had the highest profit (Revenue minus Costs) of any division.", correct: true },
    { text: "Delta was the only division to operate at a loss.", correct: false },
    { text: "Beta had a higher revenue per employee than Alpha.", correct: true },
  ],
  explanation: "Profits: Alpha=40, Beta=25, Gamma=60, Delta=5. Gamma highest — Yes. All divisions profitable — No. Beta rev/head=95/150≈0.633; Alpha=120/200=0.60; Beta higher — Yes.",
},
{
  id: "gmat-ta-0008", section: "data-insights", type: "table-analysis",
  difficulty: "Hard", topic: "Table Analysis · investment portfolio",
  intro: "The table shows five investments: initial value ($000s), current value ($000s), and annual dividend ($000s). Evaluate each statement.",
  table: {
    columns: ["Investment", "Initial ($000s)", "Current ($000s)", "Annual Dividend ($000s)"],
    rows: [
      ["Fund A", 50, 65, 2],
      ["Fund B", 80, 72, 5],
      ["Fund C", 100, 130, 3],
      ["Fund D", 40, 44, 1],
      ["Fund E", 60, 60, 4],
    ],
  },
  answerLabels: ["Yes", "No"],
  statements: [
    { text: "Fund C has both the highest capital gain and the highest absolute gain in value.", correct: true },
    { text: "Fund B has declined in value since purchase.", correct: true },
    { text: "Fund E has achieved a capital gain since purchase.", correct: false },
  ],
  explanation: "Gains: A=15, B=−8, C=30, D=4, E=0. Fund C has highest gain in both % and absolute terms — Yes. Fund B: 72<80 so declined — Yes. Fund E: 60=60 so no gain — No.",
},

/* ---- Graphics Interpretation ---- */
{
  id: "gmat-gi-0004", section: "data-insights", type: "graphics-interpretation",
  difficulty: "Easy", topic: "Graphics Interpretation · monthly revenue",
  intro: "The bar chart shows monthly revenue ($000s) for a small business over six months. Use it to complete each statement.",
  chart: {
    kind: "bars",
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    values: [30, 45, 40, 60, 55, 70],
    yLabel: "Revenue ($000s)",
  },
  blanks: [
    {
      prefix: "The month with the lowest revenue was",
      options: ["January", "February", "March", "April"],
      correct: 0,
    },
    {
      prefix: "Revenue decreased between",
      options: ["Jan and Feb", "Feb and Mar", "Mar and Apr", "May and Jun"],
      correct: 1,
      suffix: ".",
    },
  ],
  explanation: "Lowest bar is January at $30,000. The only month-to-month decrease is Feb (45) to Mar (40).",
},
{
  id: "gmat-gi-0005", section: "data-insights", type: "graphics-interpretation",
  difficulty: "Hard", topic: "Graphics Interpretation · population growth",
  intro: "The line graph shows the population (in millions) of a city over five decades. Use it to complete each statement.",
  chart: {
    kind: "line",
    labels: ["1980", "1990", "2000", "2010", "2020"],
    values: [2, 3, 5, 4, 6],
    yLabel: "Population (M)",
  },
  blanks: [
    {
      prefix: "The only decade in which population declined was",
      options: ["1980–1990", "1990–2000", "2000–2010", "2010–2020"],
      correct: 2,
    },
    {
      prefix: "The largest single-decade increase in population was",
      options: ["1 million", "2 million", "3 million", "4 million"],
      correct: 1,
      suffix: ".",
    },
  ],
  explanation: "Population fell from 5M (2000) to 4M (2010) — only decline. Increases: 1980–90=1M, 1990–2000=2M, 2010–2020=2M. Largest = 2M.",
},

/* ---- Two-Part Analysis ---- */
{
  id: "gmat-tp-0007", section: "data-insights", type: "two-part-analysis",
  difficulty: "Easy", topic: "Two-Part Analysis · arithmetic",
  intro: "A student buys pens and notebooks. Pens cost $2 each and notebooks cost $5 each. The student has exactly $24 to spend and wants to spend it all.",
  prompt: "Select the number of pens the student buys in the first column and the number of notebooks in the second column, such that the total cost is exactly $24. Make one selection in each column.",
  colHeaders: ["Number of pens", "Number of notebooks"],
  rows: ["2", "3", "4", "5", "7"],
  correctA: 4,
  correctB: 2,
  explanation: "2×7 + 5×2 = 14 + 10 = 24. ✓ Pens = 7 (index 4), Notebooks = 2 (index 2).",
},
{
  id: "gmat-tp-0008", section: "data-insights", type: "two-part-analysis",
  difficulty: "Medium", topic: "Two-Part Analysis · rates",
  intro: "A car travels from City A to City B. The distance is 360 km. The car uses fuel at a rate of 12 km per litre. Fuel costs $1.50 per litre.",
  prompt: "Select the number of litres of fuel required for the journey in the first column, and the total fuel cost for the journey in the second column. Make one selection in each column.",
  colHeaders: ["Litres required", "Total fuel cost ($)"],
  rows: ["25", "30", "35", "45", "54"],
  correctA: 1,
  correctB: 3,
  explanation: "Litres = 360 ÷ 12 = 30 (index 1). Cost = 30 × $1.50 = $45 (index 3).",
},

/* ---- Multi-Source Reasoning ---- */
{
  id: "gmat-msr-0004", section: "data-insights", type: "multi-source-reasoning",
  difficulty: "Hard", topic: "Multi-Source Reasoning · HR policy",
  explanation: "Use both sources; see per-question explanations.",
  sources: [
    {
      title: "Policy",
      body: "Employees are entitled to 20 days of annual leave per year. Leave must be approved by a line manager at least 5 working days in advance. Unused leave of up to 5 days may be carried over to the following year. Any leave carried over must be used within the first quarter of the new year or it is forfeited.",
    },
    {
      title: "Email",
      body: "From HR to all staff: 'As a reminder, the current leave year ends on 31 December. Any employee who has not submitted leave requests for remaining entitlement should do so immediately. Carried-over leave must be used by 31 March of the following year.'",
    },
  ],
  questions: [
    {
      id: "gmat-msr-0004-q1",
      kind: "mcq",
      stem: "An employee has 7 days of unused leave at year end. How many days will she forfeit if she carries the maximum allowable amount forward?",
      options: ["0 days", "2 days", "5 days", "7 days", "Cannot be determined"],
      correct: 1,
      explanation: "Maximum carry-over = 5 days. She has 7 unused days. Days forfeited = 7 − 5 = 2 days.",
    },
    {
      id: "gmat-msr-0004-q2",
      kind: "yn",
      stem: "Indicate whether each statement is supported by the two sources.",
      statements: [
        { text: "An employee must use carried-over leave by 31 March of the following year.", correct: true },
        { text: "Leave requests require approval from HR.", correct: false },
        { text: "An employee can carry over more than 5 days if they have a valid reason.", correct: false },
      ],
      answerLabels: ["Supported", "Not supported"],
      explanation: "31 March deadline is stated in both sources — supported. Approval must come from the line manager, not HR — not supported. The 5-day cap is absolute with no exceptions mentioned — not supported.",
    },
  ],
},
// ---- Batch 14 — Data Insights (gmat-ds-0022 to gmat-ds-0031, gmat-ta-0009 to gmat-ta-0011, gmat-gi-0006 to gmat-gi-0007, gmat-tp-0009 to gmat-tp-0010, gmat-msr-0005 to gmat-msr-0006) ----

/* ---- Data Sufficiency ---- */
{
  id: "gmat-ds-0022", section: "data-insights", type: "data-sufficiency",
  difficulty: "Easy", topic: "Data Sufficiency · arithmetic",
  stem: "What is the value of 5m?",
  statements: [
    "m = 7.",
    "m + 3 = 10.",
  ],
  correct: 3,
  optionExplanations: [
    "Statement (1) alone: m=7 → 5m=35. Sufficient.",
    "Statement (2) alone: m=7 → 5m=35. Sufficient.",
    "Each alone suffices so 'both together' is not the best answer.",
    "Correct: each statement independently gives m=7, so each alone is sufficient.",
    "Each is sufficient so together they are not insufficient.",
  ],
  explanation: "(1) m=7 → 5m=35. (2) m+3=10 → m=7 → 5m=35. Each statement alone is sufficient.",
},
{
  id: "gmat-ds-0023", section: "data-insights", type: "data-sufficiency",
  difficulty: "Easy", topic: "Data Sufficiency · geometry",
  stem: "What is the perimeter of rectangle R?",
  statements: [
    "The length of rectangle R is 12 and its width is 5.",
    "The area of rectangle R is 60 and its length is 12.",
  ],
  correct: 3,
  optionExplanations: [
    "Statement (1) alone: perimeter=2(12+5)=34. Sufficient.",
    "Statement (2) alone: width=60/12=5; perimeter=2(12+5)=34. Sufficient.",
    "Each alone suffices so 'both together' is not the best answer.",
    "Correct: each statement independently gives enough information to calculate the perimeter.",
    "Each is sufficient so together they are not insufficient.",
  ],
  explanation: "(1) perimeter=2(12+5)=34. (2) width=60÷12=5; perimeter=34. Each statement alone is sufficient.",
},
{
  id: "gmat-ds-0024", section: "data-insights", type: "data-sufficiency",
  difficulty: "Easy", topic: "Data Sufficiency · arithmetic",
  stem: "Is the integer z odd?",
  statements: [
    "z + 1 is even.",
    "z − 1 is even.",
  ],
  correct: 3,
  optionExplanations: [
    "Statement (1) alone: z+1 even → z is odd. Sufficient.",
    "Statement (2) alone: z−1 even → z is odd. Sufficient.",
    "Each alone suffices so 'both together' is not the best answer.",
    "Correct: each statement independently establishes that z is odd.",
    "Each is sufficient so together they are not insufficient.",
  ],
  explanation: "If z+1 is even then z is odd (even minus 1 = odd). Similarly z−1 even → z odd. Each alone is sufficient.",
},
{
  id: "gmat-ds-0025", section: "data-insights", type: "data-sufficiency",
  difficulty: "Medium", topic: "Data Sufficiency · algebra",
  stem: "What is the value of x − y?",
  statements: [
    "x + y = 20.",
    "x = 3y.",
  ],
  correct: 2,
  optionExplanations: [
    "Statement (1) alone: x+y=20 but infinitely many pairs (x,y) satisfy this. Not sufficient.",
    "Statement (2) alone: x=3y but y unknown — x−y=2y is unknown. Not sufficient.",
    "Correct: together x+y=20 and x=3y → 3y+y=20 → y=5, x=15; x−y=10. Sufficient.",
    "Neither alone is sufficient.",
    "Together they are sufficient so this is wrong.",
  ],
  explanation: "x=3y and x+y=20 → 4y=20 → y=5, x=15. x−y=10. Both together sufficient; neither alone is.",
},
{
  id: "gmat-ds-0026", section: "data-insights", type: "data-sufficiency",
  difficulty: "Medium", topic: "Data Sufficiency · probability",
  stem: "A bag contains only red and green balls. What is the probability of drawing a red ball at random?",
  statements: [
    "There are 8 red balls in the bag.",
    "The ratio of red to green balls is 2 : 3.",
  ],
  correct: 1,
  optionExplanations: [
    "Statement (1) alone: 8 red balls but total unknown — probability cannot be determined. Not sufficient.",
    "Correct: ratio 2:3 → P(red)=2/5 regardless of total. Sufficient.",
    "Statement (2) alone suffices so 'both together' is not the best answer.",
    "Only (2) is sufficient, not each alone.",
    "(2) is sufficient so together they are not insufficient.",
  ],
  explanation: "Statement (1) needs total. Statement (2) gives ratio 2:3 → P(red)=2/(2+3)=2/5. Statement (2) alone is sufficient.",
},
{
  id: "gmat-ds-0027", section: "data-insights", type: "data-sufficiency",
  difficulty: "Medium", topic: "Data Sufficiency · statistics",
  stem: "What is the range of a set of 5 positive integers?",
  statements: [
    "The largest integer in the set is 28.",
    "The smallest integer in the set is 9.",
  ],
  correct: 2,
  optionExplanations: [
    "Statement (1) alone: largest=28 but smallest unknown. Not sufficient.",
    "Statement (2) alone: smallest=9 but largest unknown. Not sufficient.",
    "Correct: range=largest−smallest=28−9=19. Both together sufficient.",
    "Neither alone is sufficient.",
    "Together they are sufficient so this is wrong.",
  ],
  explanation: "Range = largest − smallest = 28 − 9 = 19. Neither statement alone suffices; together they do.",
},
{
  id: "gmat-ds-0028", section: "data-insights", type: "data-sufficiency",
  difficulty: "Hard", topic: "Data Sufficiency · algebra",
  stem: "Is x² > x?",
  statements: [
    "x > 1.",
    "x > 0.",
  ],
  correct: 0,
  optionExplanations: [
    "Correct: if x>1 then x²=x×x>x×1=x. So x²>x. Sufficient alone.",
    "Statement (2) alone: if 0<x≤1 then x²≤x; if x>1 then x²>x. Not sufficient.",
    "Statement (1) alone suffices so 'both together' is not the best answer.",
    "Only (1) is sufficient, not each alone.",
    "(1) is sufficient so together they are not insufficient.",
  ],
  explanation: "x>1 guarantees x²>x (since x×x>x×1). Statement (2) alone fails for 0<x≤1. Statement (1) alone is sufficient.",
},
{
  id: "gmat-ds-0029", section: "data-insights", type: "data-sufficiency",
  difficulty: "Hard", topic: "Data Sufficiency · word problem",
  stem: "A shopkeeper sells apples and oranges. How much did he earn from selling apples?",
  statements: [
    "He sold 40 apples and 30 oranges for a total of $34.",
    "Each apple costs $0.50.",
  ],
  correct: 2,
  optionExplanations: [
    "Statement (1) alone: 40a+30r=34 with two unknowns. Not sufficient.",
    "Statement (2) alone: apple price known but quantity unknown. Not sufficient.",
    "Correct: together quantity=40 and price=$0.50; earnings from apples=40×0.50=$20. Sufficient.",
    "Neither alone is sufficient.",
    "Together they are sufficient so this is wrong.",
  ],
  explanation: "Apples earned = 40 × $0.50 = $20. Statement (1) gives quantity=40; Statement (2) gives price=$0.50. Together sufficient; neither alone is.",
},
{
  id: "gmat-ds-0030", section: "data-insights", type: "data-sufficiency",
  difficulty: "Hard", topic: "Data Sufficiency · number properties",
  stem: "If p is a positive integer, is p a prime number?",
  statements: [
    "p has exactly two distinct factors.",
    "p is odd.",
  ],
  correct: 0,
  optionExplanations: [
    "Correct: by definition, a prime number has exactly two distinct factors — 1 and itself. Sufficient alone.",
    "Statement (2) alone: odd numbers include 9, 15, 25 which are not prime. Not sufficient.",
    "Statement (1) alone suffices so 'both together' is not the best answer.",
    "Only (1) is sufficient, not each alone.",
    "(1) is sufficient so together they are not insufficient.",
  ],
  explanation: "Exactly two distinct factors is the definition of a prime number. Statement (1) alone is sufficient. Statement (2) alone fails — not all odd numbers are prime.",
},
{
  id: "gmat-ds-0031", section: "data-insights", type: "data-sufficiency",
  difficulty: "Hard", topic: "Data Sufficiency · inequalities",
  stem: "If a and b are integers, is a + b > 0?",
  statements: [
    "a − b > 0.",
    "a > 3 and b > −1.",
  ],
  correct: 1,
  optionExplanations: [
    "Statement (1) alone: a>b but both could be negative (e.g. a=−1, b=−2: a−b=1>0 but a+b=−3<0). Not sufficient.",
    "Correct: a>3 and b>−1 means a≥4 and b≥0; a+b≥4>0. Sufficient alone.",
    "Statement (2) alone suffices so 'both together' is not the best answer.",
    "Only (2) is sufficient, not each alone.",
    "(2) is sufficient so together they are not insufficient.",
  ],
  explanation: "a>3 → a≥4 and b>−1 → b≥0 (integers). So a+b≥4+0=4>0. Statement (2) alone is sufficient.",
},

/* ---- Table Analysis ---- */
{
  id: "gmat-ta-0009", section: "data-insights", type: "table-analysis",
  difficulty: "Easy", topic: "Table Analysis · sports results",
  intro: "The table shows the results of five teams in a league: games played, wins, losses, and draws. Evaluate each statement.",
  table: {
    columns: ["Team", "Played", "Wins", "Losses", "Draws"],
    rows: [
      ["Falcons", 10, 7, 2, 1],
      ["Eagles", 10, 6, 3, 1],
      ["Hawks", 10, 5, 4, 1],
      ["Kites", 10, 4, 4, 2],
      ["Owls", 10, 2, 7, 1],
    ],
  },
  answerLabels: ["Yes", "No"],
  statements: [
    { text: "Falcons have the most wins.", correct: true },
    { text: "Kites have more draws than any other team.", correct: true },
    { text: "Owls have fewer losses than Kites.", correct: false },
  ],
  explanation: "Falcons: 7 wins — most of any team — Yes. Kites: 2 draws — most of any team — Yes. Owls: 7 losses vs Kites: 4 losses — Owls have more losses, not fewer — No.",
},
{
  id: "gmat-ta-0010", section: "data-insights", type: "table-analysis",
  difficulty: "Medium", topic: "Table Analysis · retail sales",
  intro: "The table shows monthly sales (units) and unit price ($) for four products over a quarter. Evaluate each statement.",
  table: {
    columns: ["Product", "Jan Units", "Feb Units", "Mar Units", "Unit Price ($)"],
    rows: [
      ["Widget A", 200, 250, 300, 10],
      ["Widget B", 150, 150, 200, 20],
      ["Widget C", 400, 350, 380, 5],
      ["Widget D", 100, 120, 110, 50],
    ],
  },
  answerLabels: ["Yes", "No"],
  statements: [
    { text: "Widget D generated the highest total revenue across the quarter.", correct: true },
    { text: "Widget C had the highest total unit sales across the quarter.", correct: true },
    { text: "Widget A's revenue increased every month.", correct: true },
  ],
  explanation: "Revenue: A=(200+250+300)×10=7,500; B=(150+150+200)×20=10,000; C=(400+350+380)×5=5,650; D=(100+120+110)×50=16,500. D highest — Yes. C units=1,130 vs A=750, B=500, D=330 — C highest — Yes. A revenue: Jan=2,000, Feb=2,500, Mar=3,000 — increases every month — Yes.",
},
{
  id: "gmat-ta-0011", section: "data-insights", type: "table-analysis",
  difficulty: "Hard", topic: "Table Analysis · project timeline",
  intro: "The table shows six project tasks: their planned duration (days), actual duration (days), and assigned team. Evaluate each statement.",
  table: {
    columns: ["Task", "Planned (days)", "Actual (days)", "Team"],
    rows: [
      ["Design", 10, 12, "Alpha"],
      ["Development", 20, 18, "Beta"],
      ["Testing", 8, 10, "Alpha"],
      ["Integration", 5, 5, "Beta"],
      ["Review", 3, 4, "Gamma"],
      ["Deployment", 2, 2, "Gamma"],
    ],
  },
  answerLabels: ["Yes", "No"],
  statements: [
    { text: "More tasks were completed over budget (actual > planned) than under budget.", correct: true },
    { text: "Team Beta completed all its tasks on or under budget.", correct: true },
    { text: "The total project took exactly as long as planned.", correct: false },
  ],
  explanation: "Over budget: Design(+2), Testing(+2), Review(+1) = 3 tasks. Under budget: Development(−2) = 1 task. On budget: Integration, Deployment = 2. Over > under — Yes. Beta: Development 18<20 ✓, Integration 5=5 ✓ — Yes. Planned total=48, Actual=51 — not equal — No.",
},

/* ---- Graphics Interpretation ---- */
{
  id: "gmat-gi-0006", section: "data-insights", type: "graphics-interpretation",
  difficulty: "Medium", topic: "Graphics Interpretation · quarterly profit",
  intro: "The bar chart shows quarterly profit ($000s) for a company over four quarters. Use it to complete each statement.",
  chart: {
    kind: "bars",
    labels: ["Q1", "Q2", "Q3", "Q4"],
    values: [40, 65, 55, 80],
    yLabel: "Profit ($000s)",
  },
  blanks: [
    {
      prefix: "The quarter with the highest profit was",
      options: ["Q1", "Q2", "Q3", "Q4"],
      correct: 3,
    },
    {
      prefix: "Profit fell between",
      options: ["Q1 and Q2", "Q2 and Q3", "Q3 and Q4", "Q1 and Q3"],
      correct: 1,
      suffix: ".",
    },
  ],
  explanation: "Q4 profit=$80,000 is the highest. Profit fell from Q2 ($65,000) to Q3 ($55,000).",
},
{
  id: "gmat-gi-0007", section: "data-insights", type: "graphics-interpretation",
  difficulty: "Hard", topic: "Graphics Interpretation · exam score distribution",
  intro: "The bar chart shows the number of students who scored in each grade band in an exam. Use it to complete each statement.",
  chart: {
    kind: "bars",
    labels: ["0–20", "21–40", "41–60", "61–80", "81–100"],
    values: [5, 10, 30, 40, 15],
    yLabel: "Number of students",
  },
  blanks: [
    {
      prefix: "The total number of students who sat the exam was",
      options: ["90", "95", "100", "105"],
      correct: 2,
    },
    {
      prefix: "The percentage of students who scored above 60 was",
      options: ["45%", "50%", "55%", "60%"],
      correct: 2,
      suffix: ".",
    },
  ],
  explanation: "Total = 5+10+30+40+15 = 100 students. Scored above 60 = 40+15 = 55 students = 55% of 100.",
},

/* ---- Two-Part Analysis ---- */
{
  id: "gmat-tp-0009", section: "data-insights", type: "two-part-analysis",
  difficulty: "Hard", topic: "Two-Part Analysis · profit maximisation",
  intro: "A factory produces two products: X and Y. Each unit of X yields a profit of $8 and requires 2 hours of labour. Each unit of Y yields a profit of $12 and requires 3 hours of labour. The factory has 24 hours of labour available.",
  prompt: "Select the number of units of Y that maximises profit if all 24 hours are used producing only Y in the first column, and the resulting maximum profit in the second column. Make one selection in each column.",
  colHeaders: ["Units of Y (all labour on Y)", "Maximum profit ($)"],
  rows: ["0", "3", "6", "8", "96"],
  correctA: 3,
  correctB: 4,
  explanation: "All 24 hours on Y: 24÷3=8 units of Y (index 3). Profit=8×$12=$96 (index 4).",
},
{
  id: "gmat-tp-0010", section: "data-insights", type: "two-part-analysis",
  difficulty: "Easy", topic: "Two-Part Analysis · distance",
  intro: "A cyclist leaves Town A at 9:00 a.m. travelling at 15 km/h toward Town B. Town B is 60 km from Town A.",
  prompt: "Select the time at which the cyclist arrives at Town B in the first column, and the distance covered by 11:00 a.m. in the second column. Make one selection in each column.",
  colHeaders: ["Arrival time", "Distance by 11:00 a.m. (km)"],
  rows: ["1:00 p.m.", "2:00 p.m.", "3:00 p.m.", "30 km", "45 km"],
  correctA: 0,
  correctB: 3,
  explanation: "Time = 60÷15 = 4 hours; departs 9:00 a.m. → arrives 1:00 p.m. (index 0). By 11:00 a.m. = 2 hours elapsed; distance = 15×2 = 30 km (index 3).",
},

/* ---- Multi-Source Reasoning ---- */
{
  id: "gmat-msr-0005", section: "data-insights", type: "multi-source-reasoning",
  difficulty: "Hard", topic: "Multi-Source Reasoning · procurement",
  explanation: "Use both sources; see per-question explanations.",
  sources: [
    {
      title: "Policy",
      body: "All purchases above $500 require written approval from the department head. Purchases above $5,000 additionally require approval from the Finance Director. Recurring monthly expenses approved once do not require re-approval unless the amount changes by more than 10%.",
    },
    {
      title: "Request",
      body: "The IT department has submitted a request to purchase 10 laptops at $480 each. This is the first time this specific purchase has been made. The department also wishes to renew its existing software licence. Last year the licence cost $1,000; this year it costs $1,150.",
    },
  ],
  questions: [
    {
      id: "gmat-msr-0005-q1",
      kind: "mcq",
      stem: "What approvals are required for the laptop purchase?",
      options: [
        "No approval required.",
        "Department head approval only.",
        "Finance Director approval only.",
        "Both department head and Finance Director approval.",
        "Cannot be determined from the sources.",
      ],
      correct: 1,
      explanation: "10 × $480 = $4,800. Above $500 → department head needed. Below $5,000 → Finance Director not needed. Department head only.",
    },
    {
      id: "gmat-msr-0005-q2",
      kind: "yn",
      stem: "Indicate whether each statement is supported by the two sources.",
      statements: [
        { text: "The software licence renewal requires re-approval this year.", correct: true },
        { text: "The laptop purchase requires Finance Director approval.", correct: false },
        { text: "A recurring expense that increases by exactly 10% requires re-approval.", correct: false },
      ],
      answerLabels: ["Supported", "Not supported"],
      explanation: "Licence increase = (1150−1000)/1000 = 15% > 10% → re-approval required — supported. Laptops = $4,800 < $5,000 → no Finance Director approval — not supported. Policy says 'more than 10%' so exactly 10% does not trigger re-approval — not supported.",
    },
  ],
},
{
  id: "gmat-msr-0006", section: "data-insights", type: "multi-source-reasoning",
  difficulty: "Hard", topic: "Multi-Source Reasoning · sales targets",
  explanation: "Use both sources; see per-question explanations.",
  sources: [
    {
      title: "Memo",
      body: "Each sales representative is expected to achieve a minimum of $50,000 in sales per quarter. Representatives who exceed $80,000 in a quarter receive a performance bonus. Representatives who miss the minimum target in two consecutive quarters are placed on a performance improvement plan.",
    },
    {
      title: "Results",
      body: "Q1 and Q2 results for three representatives:\nAlex: Q1 = $55,000, Q2 = $48,000.\nBrenda: Q1 = $82,000, Q2 = $85,000.\nCarlos: Q1 = $45,000, Q2 = $46,000.",
    },
  ],
  questions: [
    {
      id: "gmat-msr-0006-q1",
      kind: "mcq",
      stem: "Based on both sources, which representative will be placed on a performance improvement plan after Q2?",
      options: [
        "Alex only.",
        "Carlos only.",
        "Both Alex and Carlos.",
        "Brenda only.",
        "None of the three.",
      ],
      correct: 1,
      explanation: "A performance improvement plan requires missing the $50,000 minimum in two consecutive quarters. Alex: Q1=$55,000 ✓, Q2=$48,000 ✗ — only one miss. Carlos: Q1=$45,000 ✗, Q2=$46,000 ✗ — two consecutive misses. Only Carlos.",
    },
    {
      id: "gmat-msr-0006-q2",
      kind: "yn",
      stem: "Indicate whether each statement is supported by the two sources.",
      statements: [
        { text: "Brenda received a performance bonus in both Q1 and Q2.", correct: true },
        { text: "Alex missed the minimum sales target in Q1.", correct: false },
        { text: "Carlos will be placed on a performance improvement plan after Q2.", correct: true },
      ],
      answerLabels: ["Supported", "Not supported"],
      explanation: "Brenda: Q1=$82,000>$80,000 ✓ and Q2=$85,000>$80,000 ✓ — supported. Alex Q1=$55,000>$50,000 — he met the target — not supported. Carlos missed both quarters — supported.",
    },
  ],
},
// ---- Batch 15 — Data Insights (gmat-ds-0032 to gmat-ds-0041, gmat-ta-0012 to gmat-ta-0014, gmat-gi-0008 to gmat-gi-0009, gmat-tp-0011 to gmat-tp-0012, gmat-msr-0007 to gmat-msr-0008) ----

/* ---- Data Sufficiency ---- */
{
  id: "gmat-ds-0032", section: "data-insights", type: "data-sufficiency",
  difficulty: "Easy", topic: "Data Sufficiency · arithmetic",
  stem: "What is the value of 4t − 3?",
  statements: [
    "t = 5.",
    "2t = 10.",
  ],
  correct: 3,
  optionExplanations: [
    "Statement (1) alone: t=5 → 4(5)−3=17. Sufficient.",
    "Statement (2) alone: 2t=10 → t=5 → 17. Sufficient.",
    "Each alone suffices so 'both together' is not the best answer.",
    "Correct: each statement gives t=5, making each alone sufficient.",
    "Each is sufficient so together they are not insufficient.",
  ],
  explanation: "(1) t=5 → 4t−3=17. (2) t=5 → same result. Each statement alone is sufficient.",
},
{
  id: "gmat-ds-0033", section: "data-insights", type: "data-sufficiency",
  difficulty: "Easy", topic: "Data Sufficiency · geometry",
  stem: "What is the volume of a cube?",
  statements: [
    "The side length of the cube is 6.",
    "The surface area of the cube is 216.",
  ],
  correct: 3,
  optionExplanations: [
    "Statement (1) alone: volume=6³=216. Sufficient.",
    "Statement (2) alone: 6s²=216 → s²=36 → s=6 → volume=216. Sufficient.",
    "Each alone suffices so 'both together' is not the best answer.",
    "Correct: each statement independently gives side=6 and thus volume=216.",
    "Each is sufficient so together they are not insufficient.",
  ],
  explanation: "(1) volume=6³=216. (2) 6s²=216 → s=6 → volume=216. Each statement alone is sufficient.",
},
{
  id: "gmat-ds-0034", section: "data-insights", type: "data-sufficiency",
  difficulty: "Easy", topic: "Data Sufficiency · arithmetic",
  stem: "Is the product of integers m and n positive?",
  statements: [
    "m > 0.",
    "n > 0.",
  ],
  correct: 2,
  optionExplanations: [
    "Statement (1) alone: m>0 but n could be negative — product sign unknown. Not sufficient.",
    "Statement (2) alone: n>0 but m could be negative — product sign unknown. Not sufficient.",
    "Correct: together m>0 and n>0 → mn>0. Sufficient.",
    "Neither alone is sufficient.",
    "Together they are sufficient so this is wrong.",
  ],
  explanation: "Knowing only one factor is positive does not determine the product's sign. Together: both positive → product positive.",
},
{
  id: "gmat-ds-0035", section: "data-insights", type: "data-sufficiency",
  difficulty: "Medium", topic: "Data Sufficiency · algebra",
  stem: "What is the value of x²?",
  statements: [
    "x² − 5 = 11.",
    "x = 4.",
  ],
  correct: 3,
  optionExplanations: [
    "Statement (1) alone: x²=16. Sufficient — no need to know x itself.",
    "Statement (2) alone: x=4 → x²=16. Sufficient.",
    "Each alone suffices so 'both together' is not the best answer.",
    "Correct: each statement independently gives x²=16.",
    "Each is sufficient so together they are not insufficient.",
  ],
  explanation: "(1) x²=11+5=16 directly. (2) x=4 → x²=16. Each statement alone is sufficient.",
},
{
  id: "gmat-ds-0036", section: "data-insights", type: "data-sufficiency",
  difficulty: "Medium", topic: "Data Sufficiency · word problem",
  stem: "A team of workers can complete a job in d days working 8 hours per day. How many total hours does the job require?",
  statements: [
    "d = 5.",
    "The team has 4 workers.",
  ],
  correct: 0,
  optionExplanations: [
    "Correct: total hours = d × 8 = 5 × 8 = 40. Sufficient alone.",
    "Statement (2) alone: number of workers does not determine total hours without d. Not sufficient.",
    "Statement (1) alone suffices so 'both together' is not the best answer.",
    "Only (1) is sufficient, not each alone.",
    "(1) is sufficient so together they are not insufficient.",
  ],
  explanation: "Total hours = d × 8. Statement (1) gives d=5 → 40 hours. Statement (2) gives worker count which is irrelevant to total hours. Statement (1) alone is sufficient.",
},
{
  id: "gmat-ds-0037", section: "data-insights", type: "data-sufficiency",
  difficulty: "Medium", topic: "Data Sufficiency · statistics",
  stem: "What is the average of five numbers?",
  statements: [
    "The sum of the five numbers is 95.",
    "Four of the five numbers are 15, 20, 22, and 18.",
  ],
  correct: 0,
  optionExplanations: [
    "Correct: average=95/5=19. Statement (1) alone is sufficient.",
    "Statement (2) alone: four numbers sum=75 but fifth unknown — average indeterminate. Not sufficient.",
    "Statement (1) alone already suffices so 'both together' is not the best answer.",
    "Only (1) is sufficient, not each alone.",
    "(1) is sufficient so together they are not insufficient.",
  ],
  explanation: "Average = sum/count. Statement (1) gives sum=95; average=19. Statement (2) alone leaves the fifth number unknown. Statement (1) alone is sufficient.",
},
{
  id: "gmat-ds-0038", section: "data-insights", type: "data-sufficiency",
  difficulty: "Hard", topic: "Data Sufficiency · number properties",
  stem: "If n is a positive integer, is n divisible by 12?",
  statements: [
    "n is divisible by 4.",
    "n is divisible by 6.",
  ],
  correct: 2,
  optionExplanations: [
    "Statement (1) alone: n=8 is divisible by 4 but not 12. Not sufficient.",
    "Statement (2) alone: n=6 is divisible by 6 but not 12. Not sufficient.",
    "Correct: together LCM(4,6)=12; n divisible by both 4 and 6 means n divisible by 12. Sufficient.",
    "Neither alone is sufficient.",
    "Together they are sufficient so this is wrong.",
  ],
  explanation: "LCM(4,6)=12. Divisible by both 4 and 6 → divisible by 12. Neither statement alone suffices; both together are sufficient.",
},
{
    id: "gmat-ds-0039", section: "data-insights", type: "data-sufficiency",
    difficulty: "Hard", topic: "Data Sufficiency · algebra",
    stem: "What is the value of x³ − x?",
    statements: [
      "x² = 9.",
      "x > 0.",
    ],
    correct: 2,
    optionExplanations: [
      "Statement (1) alone: x=3 or x=−3; x³−x=27−3=24 or −27+3=−24. Two possible values. Not sufficient.",
      "Statement (2) alone: x>0 but x unknown. Not sufficient.",
      "Correct: together x²=9 and x>0 determine uniquely that x=3 (the positive root), yielding x³−x = 27−3 = 24. Both statements together are sufficient.",
      "Neither alone is sufficient.",
      "Together the statements determine x uniquely as 3, so they are sufficient; thus E is incorrect.",
    ],
    explanation: "(1) alone gives x=±3 — two answers. (2) alone underdetermined. Together: x=3 (positive) → x³−x=27−3=24. Both statements together sufficient.",
  },
{
  id: "gmat-ds-0040", section: "data-insights", type: "data-sufficiency",
  difficulty: "Hard", topic: "Data Sufficiency · word problem",
  stem: "Train P and Train Q start from stations 480 km apart and travel toward each other. At what time do they meet?",
  statements: [
    "Train P travels at 60 km/h and Train Q travels at 80 km/h.",
    "Both trains depart at 8:00 a.m.",
  ],
  correct: 2,
  optionExplanations: [
    "Statement (1) alone: combined speed=140 km/h; time=480/140≈3.43 hours but departure time unknown — meeting clock time indeterminate. Not sufficient.",
    "Statement (2) alone: departure time known but speeds unknown. Not sufficient.",
    "Correct: together time=480/140=24/7 hours after 8:00 a.m. — meeting time determinable. Sufficient.",
    "Neither alone is sufficient.",
    "Together they are sufficient so this is wrong.",
  ],
  explanation: "Combined speed = 140 km/h. Time to meet = 480/140 hours after 8:00 a.m. Both departure time (2) and speeds (1) are needed. Together sufficient; neither alone is.",
},
{
  id: "gmat-ds-0041", section: "data-insights", type: "data-sufficiency",
  difficulty: "Hard", topic: "Data Sufficiency · geometry",
  stem: "What is the area of triangle ABC?",
  statements: [
    "AB = 10, BC = 8, and angle B = 90°.",
    "The perimeter of triangle ABC is 24.",
  ],
  correct: 0,
  optionExplanations: [
    "Correct: right angle at B with legs AB=10 and BC=8; area=(1/2)×10×8=40. Sufficient alone.",
    "Statement (2) alone: perimeter=24 but triangle shape unknown — area indeterminate. Not sufficient.",
    "Statement (1) alone suffices so 'both together' is not the best answer.",
    "Only (1) is sufficient, not each alone.",
    "(1) is sufficient so together they are not insufficient.",
  ],
  explanation: "Right triangle with legs 10 and 8: area=(1/2)×10×8=40. Statement (1) alone is sufficient. Perimeter alone cannot determine area.",
},

/* ---- Table Analysis ---- */
{
  id: "gmat-ta-0012", section: "data-insights", type: "table-analysis",
  difficulty: "Easy", topic: "Table Analysis · library books",
  intro: "The table shows the number of books borrowed from a library by genre over four weeks. Evaluate each statement.",
  table: {
    columns: ["Genre", "Week 1", "Week 2", "Week 3", "Week 4"],
    rows: [
      ["Fiction", 120, 135, 110, 150],
      ["Non-Fiction", 80, 90, 95, 88],
      ["Science", 40, 35, 50, 45],
      ["History", 25, 30, 28, 32],
    ],
  },
  answerLabels: ["Yes", "No"],
  statements: [
    { text: "Fiction was the most borrowed genre in every week.", correct: true },
    { text: "Science borrowing increased every week.", correct: false },
    { text: "History borrowing in Week 4 was higher than in Week 1.", correct: true },
  ],
  explanation: "Fiction leads every week (120,135,110,150) — Yes. Science: 40,35,50,45 — fell Week 1 to Week 2 — No. History: 32>25 — Yes.",
},
{
  id: "gmat-ta-0013", section: "data-insights", type: "table-analysis",
  difficulty: "Medium", topic: "Table Analysis · airline on-time performance",
  intro: "The table shows on-time arrival rates (%) and average delay (minutes) for five airlines over a year. Evaluate each statement.",
  table: {
    columns: ["Airline", "On-Time Rate (%)", "Avg Delay (min)"],
    rows: [
      ["AirAlpha", 88, 12],
      ["BetaJet", 92, 8],
      ["GammaAir", 79, 22],
      ["DeltaFly", 95, 5],
      ["EpsilonWings", 84, 16],
    ],
  },
  answerLabels: ["Yes", "No"],
  statements: [
    { text: "DeltaFly has both the highest on-time rate and the lowest average delay.", correct: true },
    { text: "GammaAir has a higher on-time rate than EpsilonWings.", correct: false },
    { text: "The airline with the second-highest on-time rate is BetaJet.", correct: true },
  ],
  explanation: "DeltaFly: 95% on-time (highest) and 5 min delay (lowest) — Yes. GammaAir 79% < EpsilonWings 84% — No. Ranking: Delta(95), Beta(92), Alpha(88), Epsilon(84), Gamma(79); second = BetaJet — Yes.",
},
{
  id: "gmat-ta-0014", section: "data-insights", type: "table-analysis",
  difficulty: "Hard", topic: "Table Analysis · manufacturing output",
  intro: "The table shows monthly output (units), defect rate (%), and unit cost ($) for a factory over five months. Evaluate each statement.",
  table: {
    columns: ["Month", "Output (units)", "Defect Rate (%)", "Unit Cost ($)"],
    rows: [
      ["January", 5000, 2.0, 12],
      ["February", 5500, 1.8, 11],
      ["March", 4800, 2.5, 13],
      ["April", 6000, 1.5, 10],
      ["May", 5800, 1.6, 10],
    ],
  },
  answerLabels: ["Yes", "No"],
  statements: [
    { text: "April had both the highest output and the lowest unit cost.", correct: true },
    { text: "The number of defective units was highest in January.", correct: false },
    { text: "Total production cost was lowest in February.", correct: false },
  ],
  explanation: "April: 6000 units (highest) and $10/unit (lowest alongside May) — Yes. Defects: Jan=5000×0.02=100; Mar=4800×0.025=120; Mar is highest not Jan — No. Total cost: Jan=60,000; Feb=5500×11=60,500; Mar=62,400; Apr=60,000; May=58,000. May is lowest not Feb — No.",
},

/* ---- Graphics Interpretation ---- */
{
  id: "gmat-gi-0008", section: "data-insights", type: "graphics-interpretation",
  difficulty: "Medium", topic: "Graphics Interpretation · website traffic",
  intro: "The line graph shows weekly website visitors (thousands) over six weeks. Use it to complete each statement.",
  chart: {
    kind: "line",
    labels: ["Wk1", "Wk2", "Wk3", "Wk4", "Wk5", "Wk6"],
    values: [10, 14, 12, 18, 22, 20],
    yLabel: "Visitors (000s)",
  },
  blanks: [
    {
      prefix: "The week with the highest number of visitors was",
      options: ["Week 3", "Week 4", "Week 5", "Week 6"],
      correct: 2,
    },
    {
      prefix: "The overall trend in visitors across the six weeks is",
      options: ["steadily increasing", "steadily decreasing", "generally increasing with two dips", "flat with no change"],
      correct: 2,
      suffix: ".",
    },
  ],
  explanation: "Week 5 has 22,000 visitors — the highest. The overall trend is generally upward (10→22) but with dips at Week 3 (12) and Week 6 (20).",
},
{
  id: "gmat-gi-0009", section: "data-insights", type: "graphics-interpretation",
  difficulty: "Hard", topic: "Graphics Interpretation · market share",
  intro: "The bar chart shows market share (%) of five companies in an industry. Use it to complete each statement.",
  chart: {
    kind: "bars",
    labels: ["Co A", "Co B", "Co C", "Co D", "Co E"],
    values: [30, 25, 20, 15, 10],
    yLabel: "Market Share (%)",
  },
  blanks: [
    {
      prefix: "The combined market share of the two largest companies is",
      options: ["45%", "50%", "55%", "60%"],
      correct: 2,
      suffix: ".",
    },
    {
      prefix: "Company C's market share is",
      options: ["twice that of Company E", "three times that of Company E", "equal to that of Company D", "half that of Company A"],
      correct: 0,
      suffix: ".",
    },
  ],
  explanation: "Top two: Co A (30%) + Co B (25%) = 55%. Co C (20%) = 2 × Co E (10%) — twice, not three times. Co C ≠ Co D (15%). Co C (20%) ≠ half of Co A (15%).",
},
/* ---- Two-Part Analysis ---- */
{
  id: "gmat-tp-0011", section: "data-insights", type: "two-part-analysis",
  difficulty: "Medium", topic: "Two-Part Analysis · simple interest",
  intro: "A principal amount P is invested at a simple interest rate of 6% per annum.",
  prompt: "Select the interest earned after 5 years when P = $2,000 in the first column, and the total amount (principal + interest) after 5 years in the second column. Make one selection in each column.",
  colHeaders: ["Interest after 5 years ($)", "Total amount after 5 years ($)"],
  rows: ["400", "500", "600", "2,400", "2,600"],
  correctA: 2,
  correctB: 4,
  explanation: "Interest = P×r×t = 2000×0.06×5 = $600 (index 2). Total = 2000+600 = $2,600 (index 4).",
},
{
  id: "gmat-tp-0012", section: "data-insights", type: "two-part-analysis",
  difficulty: "Hard", topic: "Two-Part Analysis · mixture",
  intro: "A chemist has a 20% acid solution and a 50% acid solution. She wants to make 30 litres of a 30% acid solution.",
  prompt: "Select the number of litres of the 20% solution needed in the first column, and the number of litres of the 50% solution needed in the second column. Make one selection in each column.",
  colHeaders: ["Litres of 20% solution", "Litres of 50% solution"],
  rows: ["5", "10", "15", "20", "25"],
  correctA: 3,
  correctB: 1,
  explanation: "Let x = litres of 20% solution; (30−x) = litres of 50% solution. 0.20x + 0.50(30−x) = 0.30×30 → 0.20x+15−0.50x=9 → −0.30x=−6 → x=20 (index 3). 50% solution = 30−20=10 litres (index 1).",
},

/* ---- Multi-Source Reasoning ---- */
{
  id: "gmat-msr-0007", section: "data-insights", type: "multi-source-reasoning",
  difficulty: "Hard", topic: "Multi-Source Reasoning · loan application",
  explanation: "Use both sources; see per-question explanations.",
  sources: [
    {
      title: "Bank Policy",
      body: "Loan applicants must meet all three of the following criteria to be approved: (1) monthly income of at least $3,000, (2) credit score of at least 650, and (3) existing debt-to-income ratio below 40%. Applicants who meet only two criteria may be considered for a reduced loan amount at the manager's discretion.",
    },
    {
      title: "Application",
      body: "Applicant: Sarah. Monthly income: $3,500. Credit score: 620. Existing monthly debt payments: $900.",
    },
  ],
  questions: [
    {
      id: "gmat-msr-0007-q1",
      kind: "mcq",
      stem: "Based on both sources, what is Sarah's debt-to-income ratio and what is the most likely outcome of her application?",
      options: [
        "Debt-to-income ratio 25.7%; full loan approved.",
        "Debt-to-income ratio 25.7%; may be considered for reduced loan at manager's discretion.",
        "Debt-to-income ratio 40%; full loan approved.",
        "Debt-to-income ratio 40%; application rejected outright.",
        "Cannot be determined from the sources.",
      ],
      correct: 1,
      explanation: "Debt-to-income = 900/3500 = 25.7% — below 40% ✓. Income $3,500 ≥ $3,000 ✓. Credit score 620 < 650 ✗. Two of three criteria met → may be considered for reduced loan at manager's discretion.",
    },
    {
      id: "gmat-msr-0007-q2",
      kind: "yn",
      stem: "Indicate whether each statement is supported by the two sources.",
      statements: [
        { text: "Sarah meets the income criterion.", correct: true },
        { text: "Sarah meets the credit score criterion.", correct: false },
        { text: "Sarah's debt-to-income ratio disqualifies her from the loan.", correct: false },
      ],
      answerLabels: ["Supported", "Not supported"],
      explanation: "Income $3,500 ≥ $3,000 — supported. Credit score 620 < 650 — not supported (she fails this criterion). DTI = 25.7% < 40% — she meets this criterion so it does not disqualify her — not supported.",
    },
  ],
},
{
  id: "gmat-msr-0008", section: "data-insights", type: "multi-source-reasoning",
  difficulty: "Hard", topic: "Multi-Source Reasoning · event planning",
  explanation: "Use both sources; see per-question explanations.",
  sources: [
    {
      title: "Venue Contract",
      body: "The venue holds a maximum of 200 guests. The base hire fee is $2,000 for up to 100 guests. Each additional guest beyond 100 costs $15 per person. Cancellations within 30 days of the event forfeit 50% of the total fee. Cancellations within 7 days forfeit the full fee.",
    },
    {
      title: "Event Details",
      body: "The event organiser has booked the venue for a conference with 140 confirmed attendees. The event is scheduled for 15 days from today. Due to budget cuts, the organiser is now considering cancelling.",
    },
  ],
  questions: [
    {
      id: "gmat-msr-0008-q1",
      kind: "mcq",
      stem: "What is the total venue hire fee for 140 guests, and how much would the organiser forfeit if they cancel today?",
      options: [
        "Total fee $2,600; forfeit $1,300.",
        "Total fee $2,600; forfeit $2,600.",
        "Total fee $2,000; forfeit $1,000.",
        "Total fee $3,200; forfeit $1,600.",
        "Total fee $2,600; forfeit $0.",
      ],
      correct: 0,
      explanation: "Fee: $2,000 base + (140−100)×$15 = $2,000+$600 = $2,600. Cancellation 15 days out is within 30 days but not within 7 days → forfeit 50% = $1,300.",
    },
    {
      id: "gmat-msr-0008-q2",
      kind: "yn",
      stem: "Indicate whether each statement is supported by the two sources.",
      statements: [
        { text: "The event exceeds the venue's maximum capacity.", correct: false },
        { text: "Cancelling today would forfeit 50% of the total hire fee.", correct: true },
        { text: "The base hire fee covers guests beyond 100.", correct: false },
      ],
      answerLabels: ["Supported", "Not supported"],
      explanation: "140 guests ≤ 200 maximum — does not exceed capacity — not supported. 15 days away is within 30 days but not 7 days → 50% forfeiture — supported. The contract explicitly charges extra for guests beyond 100 — not supported.",
    },
  ],
},
// ---- Batch 20 — Data Insights (gmat-ds-0042 to gmat-ds-0051, gmat-ta-0015 to gmat-ta-0017, gmat-gi-0010 to gmat-gi-0011, gmat-tp-0013 to gmat-tp-0014, gmat-msr-0009) ----

/* ---- Data Sufficiency ---- */
{
  id: "gmat-ds-0042", section: "data-insights", type: "data-sufficiency",
  difficulty: "Easy", topic: "Data Sufficiency · arithmetic",
  stem: "What is the value of 6k?",
  statements: [
    "k = 9.",
    "k − 4 = 5.",
  ],
  correct: 3,
  optionExplanations: [
    "Statement (1) alone: k=9 → 6k=54. Sufficient.",
    "Statement (2) alone: k=9 → 6k=54. Sufficient.",
    "Each alone suffices so 'both together' is not the best answer.",
    "Correct: each statement independently gives k=9, so each alone is sufficient.",
    "Each is sufficient so together they are not insufficient.",
  ],
  explanation: "(1) k=9 → 6k=54. (2) k−4=5 → k=9 → 6k=54. Each statement alone is sufficient.",
},
{
  id: "gmat-ds-0043", section: "data-insights", type: "data-sufficiency",
  difficulty: "Easy", topic: "Data Sufficiency · geometry",
  stem: "What is the circumference of a circle?",
  statements: [
    "The radius of the circle is 5.",
    "The area of the circle is 25π.",
  ],
  correct: 3,
  optionExplanations: [
    "Statement (1) alone: radius=5 → circumference=2π(5)=10π. Sufficient.",
    "Statement (2) alone: area=πr²=25π → r=5 → circumference=10π. Sufficient.",
    "Each alone suffices so 'both together' is not the best answer.",
    "Correct: each statement independently yields radius=5 and thus circumference=10π.",
    "Each is sufficient so together they are not insufficient.",
  ],
  explanation: "(1) r=5 → circumference=10π. (2) πr²=25π → r=5 → circumference=10π. Each statement alone is sufficient.",
},
{
  id: "gmat-ds-0044", section: "data-insights", type: "data-sufficiency",
  difficulty: "Easy", topic: "Data Sufficiency · arithmetic",
  stem: "Is the sum of integers x and y even?",
  statements: [
    "x is even.",
    "y is even.",
  ],
  correct: 2,
  optionExplanations: [
    "Statement (1) alone: x even but y unknown — sum parity undetermined. Not sufficient.",
    "Statement (2) alone: y even but x unknown — sum parity undetermined. Not sufficient.",
    "Correct: together both even → sum even. Sufficient.",
    "Neither alone is sufficient.",
    "Together they are sufficient so this is wrong.",
  ],
  explanation: "Even + even = even. Neither statement alone fixes both parities; together they do.",
},
{
  id: "gmat-ds-0045", section: "data-insights", type: "data-sufficiency",
  difficulty: "Medium", topic: "Data Sufficiency · algebra",
  stem: "What is the value of x?",
  statements: [
    "3x + 2y = 18.",
    "y = 3.",
  ],
  correct: 2,
  optionExplanations: [
    "Statement (1) alone: one equation, two unknowns — x not determined. Not sufficient.",
    "Statement (2) alone: y=3 but x unknown without the equation. Not sufficient.",
    "Correct: substitute y=3 into 3x+2y=18 → 3x+6=18 → x=4. Sufficient.",
    "Neither alone is sufficient.",
    "Together they are sufficient so this is wrong.",
  ],
  explanation: "Substituting y=3 into 3x+2y=18 gives 3x=12 → x=4. Both statements together are sufficient; neither alone is.",
},
{
  id: "gmat-ds-0046", section: "data-insights", type: "data-sufficiency",
  difficulty: "Medium", topic: "Data Sufficiency · statistics",
  stem: "What is the average of five numbers?",
  statements: [
    "The five numbers are consecutive integers.",
    "The smallest of the five numbers is 8.",
  ],
  correct: 2,
  optionExplanations: [
    "Statement (1) alone: consecutive integers but starting value unknown — average undetermined. Not sufficient.",
    "Statement (2) alone: smallest is 8 but the other four are unknown without the consecutive condition. Not sufficient.",
    "Correct: consecutive integers starting at 8 are 8,9,10,11,12; average=10. Sufficient.",
    "Neither alone is sufficient.",
    "Together they are sufficient so this is wrong.",
  ],
  explanation: "Five consecutive integers starting at 8: 8,9,10,11,12. Average = 10. Both statements together are sufficient; neither alone is.",
},
{
  id: "gmat-ds-0047", section: "data-insights", type: "data-sufficiency",
  difficulty: "Medium", topic: "Data Sufficiency · word problem",
  stem: "How many students are in the class?",
  statements: [
    "If the students are divided into groups of 4, there are exactly 6 groups.",
    "The number of students is between 20 and 30.",
  ],
  correct: 0,
  optionExplanations: [
    "Correct: 6 groups of 4 = 24 students exactly. Sufficient alone.",
    "Statement (2) alone: between 20 and 30 allows many values. Not sufficient.",
    "Statement (1) alone suffices so 'both together' is not the best answer.",
    "Only (1) is sufficient, not each alone.",
    "(1) is sufficient so together they are not insufficient.",
  ],
  explanation: "Statement (1): 6 × 4 = 24 students exactly. Statement (2) alone gives only a range. Statement (1) alone is sufficient.",
},
{
  id: "gmat-ds-0048", section: "data-insights", type: "data-sufficiency",
  difficulty: "Hard", topic: "Data Sufficiency · number properties",
  stem: "If n is a positive integer, is n a perfect square?",
  statements: [
    "n has an odd number of distinct positive factors.",
    "n is even.",
  ],
  correct: 0,
  optionExplanations: [
    "Correct: a positive integer has an odd number of factors if and only if it is a perfect square. Sufficient alone.",
    "Statement (2) alone: even numbers may or may not be perfect squares (4 is, 6 is not). Not sufficient.",
    "Statement (1) alone suffices so 'both together' is not the best answer.",
    "Only (1) is sufficient, not each alone.",
    "(1) is sufficient so together they are not insufficient.",
  ],
  explanation: "An integer has an odd number of factors exactly when it is a perfect square (factors pair up except the square root). Statement (1) alone is sufficient.",
},
{
  id: "gmat-ds-0049", section: "data-insights", type: "data-sufficiency",
  difficulty: "Hard", topic: "Data Sufficiency · algebra",
  stem: "Is xy > 0?",
  statements: [
    "x − y > 0.",
    "x + y < 0.",
  ],
  correct: 4,
  optionExplanations: [
    "Statement (1) alone: x>y but the product sign varies. Not sufficient.",
    "Statement (2) alone: x+y<0 but the product sign varies. Not sufficient.",
    "Together still insufficient — see below.",
    "Neither alone is sufficient.",
    "Correct: even together, counterexamples give both signs. x=3,y=−5: x−y=8>0, x+y=−2<0, xy=−15<0. x=−2,y=−5: x−y=3>0, x+y=−7<0, xy=10>0. Insufficient.",
  ],
  explanation: "Counterexamples: (x=3, y=−5) satisfies both statements with xy<0; (x=−2, y=−5) satisfies both with xy>0. Even together the statements cannot determine the sign of xy — insufficient.",
},
{
  id: "gmat-ds-0050", section: "data-insights", type: "data-sufficiency",
  difficulty: "Hard", topic: "Data Sufficiency · word problem",
  stem: "A worker is paid a fixed hourly rate. What is the worker's hourly rate?",
  statements: [
    "The worker earned $240 for 8 hours of work last Monday.",
    "The worker earned $450 for 15 hours of work last week.",
  ],
  correct: 3,
  optionExplanations: [
    "Statement (1) alone: $240 ÷ 8 = $30 per hour. Sufficient.",
    "Statement (2) alone: $450 ÷ 15 = $30 per hour. Sufficient.",
    "Each alone suffices so 'both together' is not the best answer.",
    "Correct: each statement independently gives an hourly rate of $30.",
    "Each is sufficient so together they are not insufficient.",
  ],
  explanation: "(1) $240 ÷ 8 = $30/hr. (2) $450 ÷ 15 = $30/hr. With a fixed hourly rate, each statement alone is sufficient.",
},
{
  id: "gmat-ds-0051", section: "data-insights", type: "data-sufficiency",
  difficulty: "Hard", topic: "Data Sufficiency · geometry",
  stem: "What is the length of the hypotenuse of right triangle ABC, where the right angle is at B?",
  statements: [
    "AB = 9 and BC = 12.",
    "The area of triangle ABC is 54.",
  ],
  correct: 0,
  optionExplanations: [
    "Correct: with legs AB=9 and BC=12, hypotenuse = √(81+144) = √225 = 15. Sufficient alone.",
    "Statement (2) alone: area=54 means (1/2)(AB)(BC)=54 → AB·BC=108, but many leg pairs satisfy this, giving different hypotenuses. Not sufficient.",
    "Statement (1) alone suffices so 'both together' is not the best answer.",
    "Only (1) is sufficient, not each alone.",
    "(1) is sufficient so together they are not insufficient.",
  ],
  explanation: "Statement (1): hypotenuse = √(9²+12²) = √225 = 15. Statement (2) gives only the product of the legs (108), which many pairs satisfy. Statement (1) alone is sufficient.",
},

/* ---- Table Analysis ---- */
{
  id: "gmat-ta-0015", section: "data-insights", type: "table-analysis",
  difficulty: "Easy", topic: "Table Analysis · weather data",
  intro: "The table shows the average high temperature (°C) and total rainfall (mm) for four cities in a given month. Evaluate each statement.",
  table: {
    columns: ["City", "Avg High (°C)", "Rainfall (mm)"],
    rows: [
      ["Avonford", 22, 45],
      ["Brindle", 28, 20],
      ["Camford", 18, 80],
      ["Denby", 25, 35],
    ],
  },
  answerLabels: ["Yes", "No"],
  statements: [
    { text: "Brindle had the highest average high temperature.", correct: true },
    { text: "Camford had both the lowest temperature and the highest rainfall.", correct: true },
    { text: "Denby had more rainfall than Avonford.", correct: false },
  ],
  explanation: "Brindle 28°C is the highest temperature — Yes. Camford has the lowest temperature (18°C) and the highest rainfall (80mm) — Yes. Denby 35mm < Avonford 45mm — No.",
},
{
  id: "gmat-ta-0016", section: "data-insights", type: "table-analysis",
  difficulty: "Medium", topic: "Table Analysis · product reviews",
  intro: "The table shows five products: average customer rating (out of 5), number of reviews, and price ($). Evaluate each statement.",
  table: {
    columns: ["Product", "Rating", "Reviews", "Price ($)"],
    rows: [
      ["P1", 4.5, 320, 50],
      ["P2", 4.2, 150, 35],
      ["P3", 4.8, 90, 70],
      ["P4", 3.9, 410, 25],
      ["P5", 4.6, 200, 90],
    ],
  },
  answerLabels: ["Yes", "No"],
  statements: [
    { text: "P3 has the highest rating but the fewest reviews.", correct: true },
    { text: "P4 has the most reviews and the lowest price.", correct: true },
    { text: "The most expensive product has the highest rating.", correct: false },
  ],
  explanation: "P3: rating 4.8 (highest), reviews 90 (fewest) — Yes. P4: 410 reviews (most) and $25 (lowest) — Yes. Most expensive is P5 ($90), rating 4.6; highest rating is P3 (4.8), not P5 — No.",
},
{
  id: "gmat-ta-0017", section: "data-insights", type: "table-analysis",
  difficulty: "Hard", topic: "Table Analysis · regional sales",
  intro: "The table shows quarterly units sold and revenue ($000s) for four sales regions. Evaluate each statement.",
  table: {
    columns: ["Region", "Units Sold", "Revenue ($000s)"],
    rows: [
      ["North", 1200, 360],
      ["South", 900, 315],
      ["East", 1500, 375],
      ["West", 800, 280],
    ],
  },
  answerLabels: ["Yes", "No"],
  statements: [
    { text: "East sold the most units and earned the most revenue.", correct: true },
    { text: "South had a higher revenue per unit than North.", correct: true },
    { text: "West had the lowest revenue per unit of the four regions.", correct: false },
  ],
  explanation: "East: 1500 units (most) and $375k (most revenue) — Yes. Revenue per unit: South=315/900=$0.35k; North=360/1200=$0.30k; South higher — Yes. Per unit: North=0.30, South=0.35, East=375/1500=0.25, West=280/800=0.35. East (0.25) is lowest, not West — No.",
},

/* ---- Graphics Interpretation ---- */
{
  id: "gmat-gi-0010", section: "data-insights", type: "graphics-interpretation",
  difficulty: "Medium", topic: "Graphics Interpretation · monthly expenses",
  intro: "The bar chart shows a household's monthly expenses ($) across five categories. Use it to complete each statement.",
  chart: {
    kind: "bars",
    labels: ["Rent", "Food", "Transport", "Utilities", "Other"],
    values: [1200, 600, 300, 250, 150],
    yLabel: "Monthly expense ($)",
  },
  blanks: [
    {
      prefix: "The largest expense category is",
      options: ["Rent", "Food", "Transport", "Utilities"],
      correct: 0,
    },
    {
      prefix: "Rent accounts for approximately",
      options: ["40%", "48%", "55%", "60%"],
      correct: 1,
      suffix: "of total monthly expenses.",
    },
  ],
  explanation: "Rent ($1,200) is the largest category. Total = 1200+600+300+250+150 = 2500. Rent share = 1200/2500 = 48%.",
},
{
  id: "gmat-gi-0011", section: "data-insights", type: "graphics-interpretation",
  difficulty: "Hard", topic: "Graphics Interpretation · sales by quarter",
  intro: "The line graph shows a company's sales ($000s) over six consecutive quarters. Use it to complete each statement.",
  chart: {
    kind: "line",
    labels: ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6"],
    values: [100, 120, 115, 140, 160, 150],
    yLabel: "Sales ($000s)",
  },
  blanks: [
    {
      prefix: "The largest quarter-on-quarter increase occurred between",
      options: ["Q1 and Q2", "Q3 and Q4", "Q4 and Q5", "Q2 and Q3"],
      correct: 1,
      suffix: ".",
    },
    {
      prefix: "Sales in Q6 compared with Q1 represent an increase of",
      options: ["40%", "50%", "55%", "60%"],
      correct: 1,
      suffix: ".",
    },
  ],
  explanation: "Quarter-on-quarter changes: Q1→Q2=+20, Q2→Q3=−5, Q3→Q4=+25, Q4→Q5=+20, Q5→Q6=−10. Largest increase is Q3→Q4 (+25). Q6 vs Q1: (150−100)/100 = 50%.",
},

/* ---- Two-Part Analysis ---- */
{
  id: "gmat-tp-0013", section: "data-insights", type: "two-part-analysis",
  difficulty: "Medium", topic: "Two-Part Analysis · percentages",
  intro: "A store sells a jacket. The cost price to the store is $80. The store applies a markup to set the selling price.",
  prompt: "Select the selling price if the markup is 25% in the first column, and the profit the store makes at that selling price in the second column. Make one selection in each column.",
  colHeaders: ["Selling price ($)", "Profit ($)"],
  rows: ["20", "80", "90", "100", "120"],
  correctA: 3,
  correctB: 0,
  explanation: "Selling price = 80 × 1.25 = $100 (index 3). Profit = 100 − 80 = $20 (index 0).",
},
{
  id: "gmat-tp-0014", section: "data-insights", type: "two-part-analysis",
  difficulty: "Hard", topic: "Two-Part Analysis · rates",
  intro: "Two workers, A and B, are assigned a task. Working alone, A completes the task in 12 hours and B completes it in 6 hours.",
  prompt: "Select the fraction of the task A completes in 4 hours in the first column, and the time in hours for A and B working together to complete the whole task in the second column. Make one selection in each column.",
  colHeaders: ["Fraction A does in 4 h", "Time together (hours)"],
  rows: ["1/3", "1/2", "2/3", "4", "9"],
  correctA: 0,
  correctB: 3,
  explanation: "A's rate = 1/12 per hour; in 4 hours A does 4/12 = 1/3 (index 0). Together: 1/12 + 1/6 = 1/12 + 2/12 = 3/12 = 1/4 per hour → 4 hours (index 3).",
},

/* ---- Multi-Source Reasoning ---- */
{
  id: "gmat-msr-0009", section: "data-insights", type: "multi-source-reasoning",
  difficulty: "Hard", topic: "Multi-Source Reasoning · conference scheduling",
  explanation: "Use both sources; see per-question explanations.",
  sources: [
    {
      title: "Schedule Rules",
      body: "The conference runs from 9:00 a.m. to 5:00 p.m. with a one-hour lunch break from 12:00 to 1:00 p.m. Each session lasts 90 minutes. There must be a 30-minute break between consecutive sessions. No session may run during the lunch break.",
    },
    {
      title: "Organiser Note",
      body: "We have four 90-minute sessions to schedule: Keynote, Panel, Workshop, and Closing. The Keynote must be the first session of the day. The Closing must be the last session of the day.",
    },
  ],
  questions: [
    {
      id: "gmat-msr-0009-q1",
      kind: "mcq",
      stem: "If the Keynote starts at 9:00 a.m., at what time does it end?",
      options: ["10:00 a.m.", "10:30 a.m.", "11:00 a.m.", "11:30 a.m.", "12:00 p.m."],
      correct: 1,
      explanation: "A session lasts 90 minutes. Starting at 9:00 a.m. and adding 90 minutes ends at 10:30 a.m.",
    },
    {
      id: "gmat-msr-0009-q2",
      kind: "yn",
      stem: "Indicate whether each statement is supported by the two sources.",
      statements: [
        { text: "A session can be scheduled to run from 11:45 a.m. to 1:15 p.m.", correct: false },
        { text: "There must be a 30-minute gap between the end of one session and the start of the next.", correct: true },
        { text: "The Panel could be scheduled as the first session of the day.", correct: false },
      ],
      answerLabels: ["Supported", "Not supported"],
      explanation: "A session from 11:45 to 1:15 would overlap the 12:00–1:00 lunch break, which is prohibited — not supported. The rules require a 30-minute break between consecutive sessions — supported. The Keynote must be first, so the Panel cannot be the first session — not supported.",
    },
  ],
},
// ---- Batch 21 — Data Insights (gmat-ds-0052 to gmat-ds-0061, gmat-ta-0018 to gmat-ta-0020, gmat-gi-0012 to gmat-gi-0013, gmat-tp-0015 to gmat-tp-0016, gmat-msr-0010) ----

/* ---- Data Sufficiency ---- */
{
  id: "gmat-ds-0052", section: "data-insights", type: "data-sufficiency",
  difficulty: "Easy", topic: "Data Sufficiency · arithmetic",
  stem: "What is the value of 2a + b?",
  statements: [
    "a = 5 and b = 4.",
    "a + b = 9 and a = 5.",
  ],
  correct: 3,
  optionExplanations: [
    "Statement (1) alone: a=5, b=4 → 2(5)+4=14. Sufficient.",
    "Statement (2) alone: a=5 and a+b=9 → b=4 → 2(5)+4=14. Sufficient.",
    "Each alone suffices so 'both together' is not the best answer.",
    "Correct: each statement independently determines a and b, giving 2a+b=14.",
    "Each is sufficient so together they are not insufficient.",
  ],
  explanation: "(1) a=5, b=4 → 2a+b=14. (2) a=5, b=9−5=4 → 2a+b=14. Each statement alone is sufficient.",
},
{
  id: "gmat-ds-0053", section: "data-insights", type: "data-sufficiency",
  difficulty: "Easy", topic: "Data Sufficiency · geometry",
  stem: "What is the area of a square?",
  statements: [
    "The side length of the square is 7.",
    "The perimeter of the square is 28.",
  ],
  correct: 3,
  optionExplanations: [
    "Statement (1) alone: side=7 → area=49. Sufficient.",
    "Statement (2) alone: perimeter=28 → side=7 → area=49. Sufficient.",
    "Each alone suffices so 'both together' is not the best answer.",
    "Correct: each statement independently gives side=7 and thus area=49.",
    "Each is sufficient so together they are not insufficient.",
  ],
  explanation: "(1) side=7 → area=49. (2) perimeter=28 → side=7 → area=49. Each statement alone is sufficient.",
},
{
  id: "gmat-ds-0054", section: "data-insights", type: "data-sufficiency",
  difficulty: "Easy", topic: "Data Sufficiency · arithmetic",
  stem: "Is integer w divisible by 5?",
  statements: [
    "w ends in the digit 0.",
    "w is divisible by 10.",
  ],
  correct: 3,
  optionExplanations: [
    "Statement (1) alone: a number ending in 0 is divisible by 5. Sufficient.",
    "Statement (2) alone: divisible by 10 implies divisible by 5. Sufficient.",
    "Each alone suffices so 'both together' is not the best answer.",
    "Correct: each statement independently establishes divisibility by 5.",
    "Each is sufficient so together they are not insufficient.",
  ],
  explanation: "Ending in 0 means divisible by 5; divisible by 10 means divisible by 5. Each statement alone is sufficient.",
},
{
  id: "gmat-ds-0055", section: "data-insights", type: "data-sufficiency",
  difficulty: "Medium", topic: "Data Sufficiency · algebra",
  stem: "What is the value of x²− y²?",
  statements: [
    "x + y = 12.",
    "x − y = 4.",
  ],
  correct: 2,
  optionExplanations: [
    "Statement (1) alone: x+y=12 but x−y unknown — x²−y² undetermined. Not sufficient.",
    "Statement (2) alone: x−y=4 but x+y unknown — x²−y² undetermined. Not sufficient.",
    "Correct: x²−y²=(x+y)(x−y)=12×4=48. Sufficient.",
    "Neither alone is sufficient.",
    "Together they are sufficient so this is wrong.",
  ],
  explanation: "x²−y² = (x+y)(x−y) = 12 × 4 = 48. Both statements together are sufficient; neither alone is.",
},
{
  id: "gmat-ds-0056", section: "data-insights", type: "data-sufficiency",
  difficulty: "Medium", topic: "Data Sufficiency · word problem",
  stem: "What is the price of one apple?",
  statements: [
    "Three apples cost $1.80.",
    "A dozen apples cost $7.20.",
  ],
  correct: 3,
  optionExplanations: [
    "Statement (1) alone: $1.80 ÷ 3 = $0.60 per apple. Sufficient.",
    "Statement (2) alone: $7.20 ÷ 12 = $0.60 per apple. Sufficient.",
    "Each alone suffices so 'both together' is not the best answer.",
    "Correct: each statement independently gives a price of $0.60 per apple.",
    "Each is sufficient so together they are not insufficient.",
  ],
  explanation: "(1) $1.80 ÷ 3 = $0.60. (2) $7.20 ÷ 12 = $0.60. Each statement alone is sufficient.",
},
{
  id: "gmat-ds-0057", section: "data-insights", type: "data-sufficiency",
  difficulty: "Medium", topic: "Data Sufficiency · statistics",
  stem: "A list contains five numbers: 3, 7, x, 14, and 20. What is the median of the list?",
  statements: [
    "x = 10.",
    "x is greater than 7 and less than 14.",
  ],
  correct: 0,
  optionExplanations: [
    "Correct: with x=10, the ordered list is 3, 7, 10, 14, 20; the median (3rd value) is 10. Sufficient.",
    "Statement (2): 7 < x < 14 places x in the third position, so the median equals x, but x is only a range, not a single value. Not sufficient.",
    "Statement (1) alone suffices so 'both together' is not the best answer.",
    "Only (1) is sufficient, not each alone.",
    "(1) is sufficient so together they are not insufficient.",
  ],
  explanation: "Statement (1): x=10 gives the ordered list 3,7,10,14,20 with median 10 — sufficient. Statement (2): 7<x<14 means x is the median, but its value is a range, not fixed — not sufficient. Statement (1) alone is sufficient.",
},
{
  id: "gmat-ds-0058", section: "data-insights", type: "data-sufficiency",
  difficulty: "Hard", topic: "Data Sufficiency · number properties",
  stem: "If n is a positive integer, what is the remainder when n is divided by 4?",
  statements: [
    "n is odd.",
    "n is divisible by 3.",
  ],
  correct: 4,
  optionExplanations: [
    "Statement (1) alone: odd numbers leave remainder 1 or 3 when divided by 4 (e.g. 5→1, 7→3). Not sufficient.",
    "Statement (2) alone: multiples of 3 can leave any remainder mod 4 (3→3, 6→2, 9→1, 12→0). Not sufficient.",
    "Together: n is odd and divisible by 3 (e.g. 3→3, 9→1, 15→3, 21→1). Remainders vary. Not sufficient.",
    "Neither alone is sufficient.",
    "Correct: even together, odd multiples of 3 give different remainders mod 4 (3→3, 9→1), so the remainder cannot be determined. Insufficient.",
  ],
  explanation: "Odd multiples of 3: 3 (rem 3), 9 (rem 1), 15 (rem 3), 21 (rem 1). The remainder mod 4 varies, so even both statements together are insufficient.",
},
{
  id: "gmat-ds-0059", section: "data-insights", type: "data-sufficiency",
  difficulty: "Hard", topic: "Data Sufficiency · algebra",
  stem: "Is x > y?",
  statements: [
    "x² > y².",
    "x and y are both positive.",
  ],
  correct: 2,
  optionExplanations: [
    "Statement (1) alone: x²>y² does not fix x>y (e.g. x=−5,y=2: x²>y² but x<y). Not sufficient.",
    "Statement (2) alone: both positive but no size comparison. Not sufficient.",
    "Correct: together both positive and x²>y² → x>y (for positive numbers, larger square means larger value). Sufficient.",
    "Neither alone is sufficient.",
    "Together they are sufficient so this is wrong.",
  ],
  explanation: "For positive x and y, x²>y² implies x>y. Statement (1) alone fails with negatives; (2) alone gives no comparison. Together they are sufficient.",
},
{
  id: "gmat-ds-0060", section: "data-insights", type: "data-sufficiency",
  difficulty: "Hard", topic: "Data Sufficiency · word problem",
  stem: "A car travels from Town X to Town Y. What is the average speed for the journey?",
  statements: [
    "The distance from Town X to Town Y is 180 km.",
    "The journey took 3 hours.",
  ],
  correct: 2,
  optionExplanations: [
    "Statement (1) alone: distance known but time unknown — average speed undetermined. Not sufficient.",
    "Statement (2) alone: time known but distance unknown — average speed undetermined. Not sufficient.",
    "Correct: average speed = distance ÷ time = 180 ÷ 3 = 60 km/h. Sufficient.",
    "Neither alone is sufficient.",
    "Together they are sufficient so this is wrong.",
  ],
  explanation: "Average speed = distance ÷ time = 180 ÷ 3 = 60 km/h. Both statements together are sufficient; neither alone is.",
},
{
  id: "gmat-ds-0061", section: "data-insights", type: "data-sufficiency",
  difficulty: "Hard", topic: "Data Sufficiency · geometry",
  stem: "What is the volume of a rectangular box?",
  statements: [
    "The length is 8 and the width is 5.",
    "The height is 3.",
  ],
  correct: 2,
  optionExplanations: [
    "Statement (1) alone: length and width known but height unknown — volume undetermined. Not sufficient.",
    "Statement (2) alone: height known but length and width unknown. Not sufficient.",
    "Correct: volume = 8 × 5 × 3 = 120. Sufficient.",
    "Neither alone is sufficient.",
    "Together they are sufficient so this is wrong.",
  ],
  explanation: "Volume = length × width × height = 8 × 5 × 3 = 120. Both statements together are sufficient; neither alone is.",
},

/* ---- Table Analysis ---- */
{
  id: "gmat-ta-0018", section: "data-insights", type: "table-analysis",
  difficulty: "Easy", topic: "Table Analysis · class attendance",
  intro: "The table shows the number of students present in five classes across three days. Evaluate each statement.",
  table: {
    columns: ["Class", "Monday", "Tuesday", "Wednesday"],
    rows: [
      ["Class A", 28, 30, 29],
      ["Class B", 25, 24, 26],
      ["Class C", 32, 31, 33],
      ["Class D", 20, 22, 21],
      ["Class E", 27, 28, 27],
    ],
  },
  answerLabels: ["Yes", "No"],
  statements: [
    { text: "Class C had the highest attendance on all three days.", correct: true },
    { text: "Class D had the lowest attendance on Monday.", correct: true },
    { text: "Class B's attendance increased each day.", correct: false },
  ],
  explanation: "Class C leads on Monday (32), Tuesday (31), Wednesday (33) — Yes. Class D Monday=20 is the lowest — Yes. Class B: 25→24→26, fell on Tuesday — No.",
},
{
  id: "gmat-ta-0019", section: "data-insights", type: "table-analysis",
  difficulty: "Medium", topic: "Table Analysis · investment funds",
  intro: "The table shows five funds: their one-year return (%), expense ratio (%), and assets under management ($M). Evaluate each statement.",
  table: {
    columns: ["Fund", "Return (%)", "Expense Ratio (%)", "Assets ($M)"],
    rows: [
      ["Fund A", 8.5, 0.5, 200],
      ["Fund B", 12.0, 1.2, 150],
      ["Fund C", 6.0, 0.3, 400],
      ["Fund D", 10.5, 0.9, 250],
      ["Fund E", 9.0, 0.6, 300],
    ],
  },
  answerLabels: ["Yes", "No"],
  statements: [
    { text: "Fund B had the highest return but also the highest expense ratio.", correct: true },
    { text: "Fund C had the lowest expense ratio and the most assets under management.", correct: true },
    { text: "The fund with the most assets had the highest return.", correct: false },
  ],
  explanation: "Fund B: 12.0% return (highest) and 1.2% expense ratio (highest) — Yes. Fund C: 0.3% expense ratio (lowest) and $400M assets (most) — Yes. Most assets is Fund C ($400M) with 6.0% return; highest return is Fund B (12.0%) — No.",
},
{
  id: "gmat-ta-0020", section: "data-insights", type: "table-analysis",
  difficulty: "Hard", topic: "Table Analysis · factory output",
  intro: "The table shows monthly output (units), defective units, and labour hours for four production lines. Evaluate each statement.",
  table: {
    columns: ["Line", "Output", "Defective", "Labour Hours"],
    rows: [
      ["Line 1", 5000, 100, 500],
      ["Line 2", 4000, 60, 320],
      ["Line 3", 6000, 150, 480],
      ["Line 4", 4500, 90, 360],
    ],
  },
  answerLabels: ["Yes", "No"],
  statements: [
    { text: "Line 3 had the highest output and the most defective units.", correct: true },
    { text: "Line 2 had the lowest defect rate (defective ÷ output) of the four lines.", correct: true },
    { text: "Line 1 produced more units per labour hour than Line 3.", correct: false },
  ],
  explanation: "Line 3: 6000 output (most) and 150 defective (most) — Yes. Defect rates: L1=2.0%, L2=1.5%, L3=2.5%, L4=2.0%; Line 2 lowest — Yes. Units per hour: L1=5000/500=10.0; L3=6000/480=12.5; Line 1 (10.0) < Line 3 (12.5), so Line 1 did NOT produce more per hour — No.",
},

/* ---- Graphics Interpretation ---- */
{
  id: "gmat-gi-0012", section: "data-insights", type: "graphics-interpretation",
  difficulty: "Medium", topic: "Graphics Interpretation · survey results",
  intro: "The bar chart shows the number of respondents who chose each of five favourite colours in a survey. Use it to complete each statement.",
  chart: {
    kind: "bars",
    labels: ["Red", "Blue", "Green", "Yellow", "Purple"],
    values: [45, 60, 30, 25, 40],
    yLabel: "Number of respondents",
  },
  blanks: [
    {
      prefix: "The most popular colour was",
      options: ["Red", "Blue", "Green", "Purple"],
      correct: 1,
    },
    {
      prefix: "The total number of respondents was",
      options: ["180", "190", "200", "210"],
      correct: 2,
      suffix: ".",
    },
  ],
  explanation: "Blue (60) is the most popular. Total = 45+60+30+25+40 = 200 respondents.",
},
{
  id: "gmat-gi-0013", section: "data-insights", type: "graphics-interpretation",
  difficulty: "Hard", topic: "Graphics Interpretation · profit margin",
  intro: "The line graph shows a company's profit margin (%) over five years. Use it to complete each statement.",
  chart: {
    kind: "line",
    labels: ["Year 1", "Year 2", "Year 3", "Year 4", "Year 5"],
    values: [10, 14, 12, 18, 16],
    yLabel: "Profit margin (%)",
  },
  blanks: [
    {
      prefix: "The profit margin peaked in",
      options: ["Year 2", "Year 3", "Year 4", "Year 5"],
      correct: 2,
    },
    {
      prefix: "The margin in Year 4 was higher than in Year 1 by",
      options: ["6 percentage points", "8 percentage points", "10 percentage points", "12 percentage points"],
      correct: 1,
      suffix: ".",
    },
  ],
  explanation: "The margin peaked in Year 4 at 18%. Year 4 (18%) − Year 1 (10%) = 8 percentage points.",
},

/* ---- Two-Part Analysis ---- */
{
  id: "gmat-tp-0015", section: "data-insights", type: "two-part-analysis",
  difficulty: "Medium", topic: "Two-Part Analysis · distance and time",
  intro: "A delivery van travels at a constant speed of 50 km/h. It must make a delivery 200 km away.",
  prompt: "Select the time in hours required to reach the delivery point in the first column, and the distance the van will have travelled after 3 hours in the second column. Make one selection in each column.",
  colHeaders: ["Time to destination (h)", "Distance after 3 h (km)"],
  rows: ["3", "4", "150", "200", "250"],
  correctA: 1,
  correctB: 2,
  explanation: "Time = 200 ÷ 50 = 4 hours (index 1). Distance after 3 hours = 50 × 3 = 150 km (index 2).",
},
{
  id: "gmat-tp-0016", section: "data-insights", type: "two-part-analysis",
  difficulty: "Hard", topic: "Two-Part Analysis · break-even",
  intro: "A small business has fixed monthly costs of $3,000 and produces a single product that sells for $25 per unit. Each unit costs $10 to produce.",
  prompt: "Select the contribution margin per unit (selling price minus variable cost) in the first column, and the number of units that must be sold each month to break even in the second column. Make one selection in each column.",
  colHeaders: ["Contribution per unit ($)", "Break-even units"],
  rows: ["10", "15", "120", "200", "300"],
  correctA: 1,
  correctB: 3,
  explanation: "Contribution per unit = $25 − $10 = $15 (index 1). Break-even units = fixed costs ÷ contribution = $3,000 ÷ $15 = 200 units (index 3).",
},

/* ---- Multi-Source Reasoning ---- */
{
  id: "gmat-msr-0010", section: "data-insights", type: "multi-source-reasoning",
  difficulty: "Hard", topic: "Multi-Source Reasoning · warranty claims",
  explanation: "Use both sources; see per-question explanations.",
  sources: [
    {
      title: "Warranty Terms",
      body: "Products are covered by a one-year warranty from the date of purchase. The warranty covers manufacturing defects but not damage caused by misuse. Claims must be submitted within 30 days of the defect being discovered. Repairs under warranty are free; repairs outside warranty are charged at $80 per hour of labour plus parts.",
    },
    {
      title: "Customer Case",
      body: "A customer purchased a product 8 months ago. The product recently stopped working. An inspection determined the failure was caused by a manufacturing defect. The customer discovered the fault 10 days ago and is submitting a claim now.",
    },
  ],
  questions: [
    {
      id: "gmat-msr-0010-q1",
      kind: "mcq",
      stem: "Based on both sources, what is the most likely outcome of the customer's claim?",
      options: [
        "The claim is rejected because the warranty has expired.",
        "The repair is carried out free of charge under warranty.",
        "The customer is charged $80 per hour for the repair.",
        "The claim is rejected because it was submitted too late.",
        "The outcome cannot be determined from the sources.",
      ],
      correct: 1,
      explanation: "Purchase was 8 months ago (within the 1-year warranty). The failure is a manufacturing defect (covered). The fault was discovered 10 days ago, within the 30-day submission window. All conditions are met → free repair under warranty.",
    },
    {
      id: "gmat-msr-0010-q2",
      kind: "yn",
      stem: "Indicate whether each statement is supported by the two sources.",
      statements: [
        { text: "The product is still within its warranty period.", correct: true },
        { text: "The claim was submitted within the required time window.", correct: true },
        { text: "The customer must pay for the repair because the defect was a manufacturing fault.", correct: false },
      ],
      answerLabels: ["Supported", "Not supported"],
      explanation: "8 months < 12-month warranty — supported. Discovered 10 days ago, within the 30-day window — supported. Manufacturing defects are covered free under warranty, so the customer does not pay — not supported.",
    },
  ],
},
// ---- Batch 22 — Data Insights (gmat-ds-0062 to gmat-ds-0071, gmat-ta-0021 to gmat-ta-0023, gmat-gi-0014 to gmat-gi-0015, gmat-tp-0017 to gmat-tp-0018, gmat-msr-0011) ----

/* ---- Data Sufficiency ---- */
{
  id: "gmat-ds-0062", section: "data-insights", type: "data-sufficiency",
  difficulty: "Easy", topic: "Data Sufficiency · arithmetic",
  stem: "What is the value of 3p − q?",
  statements: [
    "p = 6 and q = 4.",
    "p = 6 and q = 2p − 8.",
  ],
  correct: 3,
  optionExplanations: [
    "Statement (1) alone: p=6, q=4 → 3(6)−4=14. Sufficient.",
    "Statement (2) alone: p=6, q=2(6)−8=4 → 3(6)−4=14. Sufficient.",
    "Each alone suffices so 'both together' is not the best answer.",
    "Correct: each statement independently determines p and q, giving 3p−q=14.",
    "Each is sufficient so together they are not insufficient.",
  ],
  explanation: "(1) p=6, q=4 → 3p−q=14. (2) p=6, q=2(6)−8=4 → 3p−q=14. Each statement alone is sufficient.",
},
{
  id: "gmat-ds-0063", section: "data-insights", type: "data-sufficiency",
  difficulty: "Easy", topic: "Data Sufficiency · geometry",
  stem: "What is the diameter of a circle?",
  statements: [
    "The radius is 9.",
    "The circumference is 18π.",
  ],
  correct: 3,
  optionExplanations: [
    "Statement (1) alone: radius=9 → diameter=18. Sufficient.",
    "Statement (2) alone: circumference=2πr=18π → r=9 → diameter=18. Sufficient.",
    "Each alone suffices so 'both together' is not the best answer.",
    "Correct: each statement independently gives radius=9 and thus diameter=18.",
    "Each is sufficient so together they are not insufficient.",
  ],
  explanation: "(1) radius=9 → diameter=18. (2) 2πr=18π → r=9 → diameter=18. Each statement alone is sufficient.",
},
{
  id: "gmat-ds-0064", section: "data-insights", type: "data-sufficiency",
  difficulty: "Easy", topic: "Data Sufficiency · arithmetic",
  stem: "Is the product of integers a and b negative?",
  statements: [
    "a is negative.",
    "b is positive.",
  ],
  correct: 2,
  optionExplanations: [
    "Statement (1) alone: a negative but b's sign unknown — product sign undetermined. Not sufficient.",
    "Statement (2) alone: b positive but a's sign unknown — product sign undetermined. Not sufficient.",
    "Correct: together a negative and b positive → product negative. Sufficient.",
    "Neither alone is sufficient.",
    "Together they are sufficient so this is wrong.",
  ],
  explanation: "Negative × positive = negative. Neither statement alone fixes both signs; together they do.",
},
{
  id: "gmat-ds-0065", section: "data-insights", type: "data-sufficiency",
  difficulty: "Medium", topic: "Data Sufficiency · algebra",
  stem: "What is the value of x?",
  statements: [
    "2x + y = 14.",
    "y = x − 1.",
  ],
  correct: 2,
  optionExplanations: [
    "Statement (1) alone: one equation, two unknowns — x not determined. Not sufficient.",
    "Statement (2) alone: relates y to x but does not fix x. Not sufficient.",
    "Correct: substitute y=x−1 into 2x+y=14 → 2x+x−1=14 → 3x=15 → x=5. Sufficient.",
    "Neither alone is sufficient.",
    "Together they are sufficient so this is wrong.",
  ],
  explanation: "Substituting y=x−1 into 2x+y=14 gives 3x−1=14 → 3x=15 → x=5. Both statements together are sufficient; neither alone is.",
},
{
  id: "gmat-ds-0066", section: "data-insights", type: "data-sufficiency",
  difficulty: "Medium", topic: "Data Sufficiency · word problem",
  stem: "What is the total cost of 5 notebooks?",
  statements: [
    "Each notebook costs $3.",
    "8 notebooks cost $24.",
  ],
  correct: 3,
  optionExplanations: [
    "Statement (1) alone: $3 each → 5 × $3 = $15. Sufficient.",
    "Statement (2) alone: $24 ÷ 8 = $3 each → 5 × $3 = $15. Sufficient.",
    "Each alone suffices so 'both together' is not the best answer.",
    "Correct: each statement independently gives a unit price of $3, so 5 notebooks cost $15.",
    "Each is sufficient so together they are not insufficient.",
  ],
  explanation: "(1) $3 each → 5 × $3 = $15. (2) $24 ÷ 8 = $3 each → $15. Each statement alone is sufficient.",
},
{
  id: "gmat-ds-0067", section: "data-insights", type: "data-sufficiency",
  difficulty: "Medium", topic: "Data Sufficiency · statistics",
  stem: "What is the range of a set of four positive integers?",
  statements: [
    "The largest integer is 19 and the smallest is 4.",
    "The four integers are 4, 11, 15, and 19.",
  ],
  correct: 3,
  optionExplanations: [
    "Statement (1) alone: range = 19 − 4 = 15. Sufficient.",
    "Statement (2) alone: range = 19 − 4 = 15. Sufficient.",
    "Each alone suffices so 'both together' is not the best answer.",
    "Correct: each statement independently gives a range of 15.",
    "Each is sufficient so together they are not insufficient.",
  ],
  explanation: "(1) range = 19 − 4 = 15. (2) max=19, min=4 → range = 15. Each statement alone is sufficient.",
},
{
  id: "gmat-ds-0068", section: "data-insights", type: "data-sufficiency",
  difficulty: "Hard", topic: "Data Sufficiency · number properties",
  stem: "If n is a positive integer, is n divisible by 8?",
  statements: [
    "n is divisible by 4.",
    "n/4 is an even integer.",
  ],
  correct: 1,
  optionExplanations: [
    "Statement (1) alone: divisible by 4 does not guarantee divisible by 8 (e.g. 12 is divisible by 4 but not 8). Not sufficient.",
    "Correct: n/4 is an even integer means n/4 = 2k, so n = 8k — n is divisible by 8. Sufficient alone.",
    "Statement (2) alone suffices so 'both together' is not the best answer.",
    "Only (2) is sufficient, not each alone.",
    "(2) is sufficient so together they are not insufficient.",
  ],
  explanation: "Statement (1): n=12 is divisible by 4 but not 8 — not sufficient. Statement (2): n/4 = 2k means n = 8k, so n is divisible by 8 — sufficient. Statement (2) alone is sufficient.",
},
{
  id: "gmat-ds-0069", section: "data-insights", type: "data-sufficiency",
  difficulty: "Hard", topic: "Data Sufficiency · algebra",
  stem: "Is x positive?",
  statements: [
    "x³ = x.",
    "x ≠ 0.",
  ],
  correct: 4,
  optionExplanations: [
    "Statement (1) alone: x³=x → x(x²−1)=0 → x=0, 1, or −1. Not all positive. Not sufficient.",
    "Statement (2) alone: x≠0 but could be positive or negative. Not sufficient.",
    "Together: x³=x and x≠0 → x=1 or x=−1; still both signs possible. Not sufficient.",
    "Neither alone is sufficient.",
    "Correct: together x can be 1 (positive) or −1 (negative), so the sign cannot be determined. Insufficient.",
  ],
  explanation: "x³=x gives x ∈ {0, 1, −1}. Excluding 0 leaves x=1 or x=−1 — one positive, one negative. Even together the statements cannot determine the sign of x. Insufficient.",
},
{
  id: "gmat-ds-0070", section: "data-insights", type: "data-sufficiency",
  difficulty: "Hard", topic: "Data Sufficiency · word problem",
  stem: "A rectangular garden is surrounded by a path. What is the area of the garden?",
  statements: [
    "The garden's length is 12 m and its width is 8 m.",
    "The path is 1 m wide on all sides.",
  ],
  correct: 0,
  optionExplanations: [
    "Correct: garden area = length × width = 12 × 8 = 96 m². Sufficient alone.",
    "Statement (2) alone: the path width tells nothing about the garden's dimensions. Not sufficient.",
    "Statement (1) alone suffices so 'both together' is not the best answer.",
    "Only (1) is sufficient, not each alone.",
    "(1) is sufficient so together they are not insufficient.",
  ],
  explanation: "Statement (1): garden area = 12 × 8 = 96 m². Statement (2) about the path is irrelevant to the garden's area. Statement (1) alone is sufficient.",
},
{
  id: "gmat-ds-0071", section: "data-insights", type: "data-sufficiency",
  difficulty: "Hard", topic: "Data Sufficiency · statistics",
  stem: "What is the average (arithmetic mean) of a, b, and c?",
  statements: [
    "a + b + c = 45.",
    "a, b, and c are consecutive multiples of 5.",
  ],
  correct: 0,
  optionExplanations: [
    "Correct: average = (a+b+c)/3 = 45/3 = 15. Sufficient alone.",
    "Statement (2) alone: consecutive multiples of 5 (e.g. 5,10,15 or 10,15,20) give different sums and averages. Not sufficient.",
    "Statement (1) alone suffices so 'both together' is not the best answer.",
    "Only (1) is sufficient, not each alone.",
    "(1) is sufficient so together they are not insufficient.",
  ],
  explanation: "Statement (1): average = 45 ÷ 3 = 15. Statement (2) alone allows different sets with different averages. Statement (1) alone is sufficient.",
},

/* ---- Table Analysis ---- */
{
  id: "gmat-ta-0021", section: "data-insights", type: "table-analysis",
  difficulty: "Easy", topic: "Table Analysis · restaurant orders",
  intro: "The table shows the number of each dish ordered at a restaurant over three days. Evaluate each statement.",
  table: {
    columns: ["Dish", "Friday", "Saturday", "Sunday"],
    rows: [
      ["Pasta", 40, 55, 50],
      ["Pizza", 60, 70, 65],
      ["Salad", 25, 30, 28],
      ["Soup", 15, 18, 20],
    ],
  },
  answerLabels: ["Yes", "No"],
  statements: [
    { text: "Pizza was the most ordered dish on all three days.", correct: true },
    { text: "Soup was the least ordered dish on all three days.", correct: true },
    { text: "Salad orders increased each day.", correct: false },
  ],
  explanation: "Pizza leads on Friday (60), Saturday (70), Sunday (65) — Yes. Soup is lowest on Friday (15), Saturday (18), Sunday (20) — Yes. Salad: 25→30→28, fell on Sunday — No.",
},
{
  id: "gmat-ta-0022", section: "data-insights", type: "table-analysis",
  difficulty: "Medium", topic: "Table Analysis · employee training",
  intro: "The table shows five employees: training hours completed, projects led, and years of experience. Evaluate each statement.",
  table: {
    columns: ["Employee", "Training Hrs", "Projects Led", "Experience (yrs)"],
    rows: [
      ["Emp 1", 40, 3, 5],
      ["Emp 2", 60, 5, 8],
      ["Emp 3", 30, 2, 3],
      ["Emp 4", 50, 4, 6],
      ["Emp 5", 35, 6, 4],
    ],
  },
  answerLabels: ["Yes", "No"],
  statements: [
    { text: "Emp 2 has the most training hours and the most years of experience.", correct: true },
    { text: "Emp 5 led the most projects despite having fewer than 5 years of experience.", correct: true },
    { text: "The employee with the most experience led the most projects.", correct: false },
  ],
  explanation: "Emp 2: 60 training hours (most) and 8 years (most experience) — Yes. Emp 5: 6 projects (most) with 4 years experience (under 5) — Yes. Most experience is Emp 2 (8 yrs) who led 5 projects; most projects is Emp 5 (6) — No.",
},
{
  id: "gmat-ta-0023", section: "data-insights", type: "table-analysis",
  difficulty: "Hard", topic: "Table Analysis · store performance",
  intro: "The table shows five stores: monthly sales ($000s), floor area (m²), and number of staff. Evaluate each statement.",
  table: {
    columns: ["Store", "Sales ($000s)", "Floor Area (m²)", "Staff"],
    rows: [
      ["Store A", 120, 200, 6],
      ["Store B", 90, 150, 6],
      ["Store C", 200, 400, 12],
      ["Store D", 150, 250, 10],
      ["Store E", 80, 100, 5],
    ],
  },
  answerLabels: ["Yes", "No"],
  statements: [
    { text: "Store C had the highest sales and the largest floor area.", correct: true },
    { text: "Store E had the highest sales per square metre of floor area.", correct: true },
    { text: "Store A had higher sales per staff member than Store D.", correct: true },
  ],
  explanation: "Store C: $200k sales (most) and 400m² (largest) — Yes. Sales per m²: A=0.60, B=0.60, C=0.50, D=0.60, E=80/100=0.80; Store E highest — Yes. Sales per staff: A=120/6=20.0, D=150/10=15.0; Store A (20.0) > Store D (15.0) — Yes.",
},

/* ---- Graphics Interpretation ---- */
{
  id: "gmat-gi-0014", section: "data-insights", type: "graphics-interpretation",
  difficulty: "Medium", topic: "Graphics Interpretation · annual revenue",
  intro: "The bar chart shows a company's annual revenue ($M) over five years. Use it to complete each statement.",
  chart: {
    kind: "bars",
    labels: ["2021", "2022", "2023", "2024", "2025"],
    values: [20, 25, 22, 30, 35],
    yLabel: "Revenue ($M)",
  },
  blanks: [
    {
      prefix: "The year with the highest revenue was",
      options: ["2022", "2023", "2024", "2025"],
      correct: 3,
    },
    {
      prefix: "Revenue declined in",
      options: ["2022", "2023", "2024", "2025"],
      correct: 1,
      suffix: "compared with the previous year.",
    },
  ],
  explanation: "2025 had the highest revenue at $35M. Revenue declined in 2023 ($22M) compared with 2022 ($25M).",
},
{
  id: "gmat-gi-0015", section: "data-insights", type: "graphics-interpretation",
  difficulty: "Hard", topic: "Graphics Interpretation · temperature range",
  intro: "The line graph shows the daily maximum temperature (°C) over six days. Use it to complete each statement.",
  chart: {
    kind: "line",
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    values: [18, 22, 20, 25, 28, 24],
    yLabel: "Max temperature (°C)",
  },
  blanks: [
    {
      prefix: "The temperature range over the six days (highest minus lowest) was",
      options: ["8°C", "10°C", "12°C", "14°C"],
      correct: 1,
      suffix: ".",
    },
    {
      prefix: "The largest day-to-day increase occurred between",
      options: ["Mon and Tue", "Wed and Thu", "Thu and Fri", "Tue and Wed"],
      correct: 1,
      suffix: ".",
    },
  ],
  explanation: "Range = 28 (Fri) − 18 (Mon) = 10°C. Day-to-day increases: Mon→Tue=+4, Tue→Wed=−2, Wed→Thu=+5, Thu→Fri=+3, Fri→Sat=−4. Largest increase is Wed→Thu (+5).",
},

/* ---- Two-Part Analysis ---- */
{
  id: "gmat-tp-0017", section: "data-insights", type: "two-part-analysis",
  difficulty: "Medium", topic: "Two-Part Analysis · discount",
  intro: "A laptop is listed at $800. A store offers a discount on the listed price.",
  prompt: "Select the discount amount if the discount rate is 15% in the first column, and the final price the customer pays after that discount in the second column. Make one selection in each column.",
  colHeaders: ["Discount amount ($)", "Final price ($)"],
  rows: ["80", "120", "680", "720", "800"],
  correctA: 1,
  correctB: 2,
  explanation: "Discount = 800 × 0.15 = $120 (index 1). Final price = 800 − 120 = $680 (index 2).",
},
{
  id: "gmat-tp-0018", section: "data-insights", type: "two-part-analysis",
  difficulty: "Hard", topic: "Two-Part Analysis · compound growth",
  intro: "A population of bacteria starts at 1,000 and doubles every hour.",
  prompt: "Select the population after 2 hours in the first column, and the population after 4 hours in the second column. Make one selection in each column.",
  colHeaders: ["After 2 hours", "After 4 hours"],
  rows: ["2,000", "4,000", "8,000", "16,000", "32,000"],
  correctA: 1,
  correctB: 3,
  explanation: "After 2 hours: 1,000 × 2² = 4,000 (index 1). After 4 hours: 1,000 × 2⁴ = 16,000 (index 3).",
},

/* ---- Multi-Source Reasoning ---- */
{
  id: "gmat-msr-0011", section: "data-insights", type: "multi-source-reasoning",
  difficulty: "Hard", topic: "Multi-Source Reasoning · membership tiers",
  explanation: "Use both sources; see per-question explanations.",
  sources: [
    {
      title: "Membership Plans",
      body: "Basic membership costs $20 per month and includes access to the gym floor. Standard membership costs $35 per month and adds group classes. Premium membership costs $50 per month and adds personal training sessions and pool access. All memberships are billed monthly. Members may upgrade or downgrade at the start of any month.",
    },
    {
      title: "Member Request",
      body: "A member currently on the Basic plan wants pool access and group classes but does not need personal training. The member asks which plan would suit their needs.",
    },
  ],
  questions: [
    {
      id: "gmat-msr-0011-q1",
      kind: "mcq",
      stem: "Based on both sources, which plan must the member choose to obtain pool access?",
      options: [
        "Basic",
        "Standard",
        "Premium",
        "Either Standard or Premium",
        "Cannot be determined",
      ],
      correct: 2,
      explanation: "Pool access is included only in the Premium plan. Although the member does not need personal training, pool access is bundled with Premium, so Premium is the only plan that provides it.",
    },
    {
      id: "gmat-msr-0011-q2",
      kind: "yn",
      stem: "Indicate whether each statement is supported by the two sources.",
      statements: [
        { text: "The Standard plan includes group classes.", correct: true },
        { text: "The member can obtain pool access without also receiving personal training.", correct: false },
        { text: "Upgrading the member's plan would increase their monthly cost.", correct: true },
      ],
      answerLabels: ["Supported", "Not supported"],
      explanation: "Standard adds group classes — supported. Pool access is only in Premium, which also bundles personal training, so pool access cannot be obtained without personal training — not supported. Moving from Basic ($20) to a higher tier costs more per month — supported.",
    },
  ],
},
];

export const DATA_INSIGHTS_BANK: GmatSectionBank = {
  id: "data-insights", name: "Data Insights", minutes: 45, realCount: 20,
  items: DATA_INSIGHTS_ITEMS,
};
