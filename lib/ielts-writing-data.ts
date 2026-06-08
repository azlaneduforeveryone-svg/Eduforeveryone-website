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
    figure: {
      kind: "bar",
      mode: "grouped",
      unit: "%",
      categories: ["USA", "Germany", "Japan", "Brazil", "India", "China"],
      series: [
        { name: "1990", values: [88, 71, 68, 45, 8, 5] },
        { name: "2000", values: [90, 76, 74, 58, 12, 15] },
        { name: "2010", values: [92, 79, 79, 67, 22, 38] },
      ],
    },
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
    figure: {
      kind: "line",
      unit: "\u00B0C",
      xLabels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      series: [
        { name: "London", values: [4, 5, 8, 11, 15, 18, 22, 21, 18, 13, 8, 5] },
        { name: "Cairo", values: [13, 15, 18, 23, 28, 32, 36, 36, 32, 27, 20, 15] },
        { name: "Sydney", values: [26, 26, 24, 21, 17, 14, 13, 14, 17, 20, 23, 25] },
      ],
    },
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
    figure: {
      kind: "pie",
      unit: "%",
      charts: [
        {
          title: "2000",
          slices: [
            { label: "Heating & cooling", value: 38 },
            { label: "Water heating", value: 30 },
            { label: "Appliances", value: 15 },
            { label: "Lighting", value: 12 },
            { label: "Cooking", value: 5 },
          ],
        },
        {
          title: "2020",
          slices: [
            { label: "Heating & cooling", value: 40 },
            { label: "Appliances", value: 26 },
            { label: "Water heating", value: 20 },
            { label: "Lighting", value: 7 },
            { label: "Cooking", value: 7 },
          ],
        },
      ],
    },
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
    figure: {
      kind: "table",
      columns: ["Country", "Population (millions)", "GDP per capita (USD)", "Life expectancy (years)"],
      rows: [
        ["Norway", "5.4", "89,000", "83.2"],
        ["Brazil", "215", "9,100", "75.9"],
        ["Nigeria", "220", "2,100", "55.2"],
        ["Japan", "125", "42,000", "84.3"],
        ["India", "1,400", "2,400", "70.4"],
      ],
    },
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
    figure: {
      kind: "process",
      cyclical: false,
      steps: [
        { n: 1, text: "Rainfall collects in a river or reservoir." },
        { n: 2, text: "Water is pumped to a screening plant where large debris is removed." },
        { n: 3, text: "Water passes through sedimentation tanks and particles settle." },
        { n: 4, text: "Chemicals are added (coagulation / flocculation stage)." },
        { n: 5, text: "Water is filtered through sand and gravel." },
        { n: 6, text: "Chlorination and pH adjustment take place." },
        { n: 7, text: "Treated water is stored in covered service reservoirs." },
        { n: 8, text: "Water is distributed via underground pipes to homes, schools and businesses." },
      ],
    },
    minWords: 150,
  },
  {
    id: "AT1-F",
    chartType: "bar_chart",
    chartTypeLabel: "Bar Chart",
    prompt:
      "The bar chart below shows the percentage of students who chose five different subjects at a university in 2010 and 2023. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
    chartDescription:
      "A grouped bar chart with two bars per subject (2010 / 2023) for Business, Engineering, Computer Science, Arts, and Law. Business: 28% → 21% (fell). Engineering: 22% → 22% (stable). Computer Science: 17% → 31% (the largest rise, becoming the most popular). Arts: 18% → 11% (the steepest fall). Law: 15% → 15% (unchanged). The headline trend is the sharp rise of Computer Science overtaking Business, while the humanities (Arts) declined.",
    figure: {
      kind: "bar",
      mode: "grouped",
      unit: "%",
      categories: ["Business", "Engineering", "Computer Science", "Arts", "Law"],
      series: [
        { name: "2010", values: [28, 22, 17, 18, 15] },
        { name: "2023", values: [21, 22, 31, 11, 15] },
      ],
    },
    minWords: 150,
  },
  {
    id: "AT1-G",
    chartType: "line_graph",
    chartTypeLabel: "Line Graph",
    prompt:
      "The line graph below shows annual coffee consumption (in kilograms per person) in four countries between 2000 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
    chartDescription:
      "A line graph with years (2000–2020 in five-year intervals) on the x-axis and consumption in kg per person on the y-axis (0–14). Finland (highest throughout): 11kg → 13kg, rising steadily. USA: 4kg → 7kg, gradual climb. Brazil: 3kg → 6.5kg, similar gradual climb, ending just below the USA. China (lowest): 0.5kg → 2.5kg, the largest growth in relative terms (a fivefold increase) but still by far the smallest absolute figure. All four countries saw consumption rise over the period.",
    figure: {
      kind: "line",
      unit: "kg/person",
      xLabels: ["2000", "2005", "2010", "2015", "2020"],
      series: [
        { name: "Finland", values: [11, 11.5, 12, 12.5, 13] },
        { name: "USA", values: [4, 4.8, 5.5, 6.3, 7] },
        { name: "Brazil", values: [3, 4, 5, 5.8, 6.5] },
        { name: "China", values: [0.5, 1, 1.5, 2, 2.5] },
      ],
    },
    minWords: 150,
  },
  {
    id: "AT1-H",
    chartType: "bar_chart",
    chartTypeLabel: "Bar Chart",
    prompt:
      "The bar chart below shows the average daily time (in minutes) that people in four age groups spent on three leisure activities in one country. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
    chartDescription:
      "A grouped bar chart. Age groups on the x-axis: 15–24, 25–44, 45–64, 65+. Three bars each for Watching TV, Using social media, and Reading. Watching TV rises steadily with age (90 → 120 → 160 → 210 minutes). Social media falls sharply with age (150 → 95 → 45 → 15 minutes), highest among the youngest. Reading is lowest among the young and rises with age (15 → 25 → 40 → 65 minutes). The clearest contrast is that the youngest group dominates social media while the oldest dominates both TV and reading.",
    figure: {
      kind: "bar",
      mode: "grouped",
      unit: "minutes/day",
      categories: ["15\u201324", "25\u201344", "45\u201364", "65+"],
      series: [
        { name: "Watching TV", values: [90, 120, 160, 210] },
        { name: "Social media", values: [150, 95, 45, 15] },
        { name: "Reading", values: [15, 25, 40, 65] },
      ],
    },
    minWords: 150,
  },
  {
    id: "AT1-I",
    chartType: "line_graph",
    chartTypeLabel: "Line Graph",
    prompt:
      "The line graph below shows the number of visitors (in millions) to three types of tourist attraction in a country between 2005 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
    chartDescription:
      "A line graph, years 2005–2020 on the x-axis, visitors in millions (0–10) on the y-axis. Museums: started highest at 6m, dipped around 2010 to 5m, then recovered to 7m by 2020. Theme parks: started at 3m and rose steadily and strongly to 8m, overtaking museums around 2015 to become the most visited. Historic sites: remained the lowest and most stable, fluctuating gently between 2m and 3m. The key feature is the strong, consistent growth of theme parks against the relative stability of the other two.",
    figure: {
      kind: "line",
      unit: "millions",
      xLabels: ["2005", "2010", "2015", "2020"],
      series: [
        { name: "Museums", values: [6, 5, 6, 7] },
        { name: "Theme parks", values: [3, 4.5, 6.5, 8] },
        { name: "Historic sites", values: [2.5, 2, 3, 2.5] },
      ],
    },
    minWords: 150,
  },
  {
    id: "AT1-J",
    chartType: "pie_charts",
    chartTypeLabel: "Pie Charts",
    prompt:
      "The two pie charts below show the main sources of electricity generation in a country in 2000 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
    chartDescription:
      "Two pie charts comparing electricity sources. 2000: Coal 52%, Natural gas 20%, Nuclear 18%, Renewables 8%, Other 2%. 2020: Coal 24%, Natural gas 28%, Nuclear 16%, Renewables 30%, Other 2%. Key shifts: Coal more than halved (52% → 24%), losing its dominant position; Renewables nearly quadrupled (8% → 30%) to become the joint-largest source; Natural gas grew moderately (20% → 28%); Nuclear declined slightly. Overall the country moved decisively away from coal towards gas and renewables.",
    figure: {
      kind: "pie",
      unit: "%",
      charts: [
        {
          title: "2000",
          slices: [
            { label: "Coal", value: 52 },
            { label: "Natural gas", value: 20 },
            { label: "Nuclear", value: 18 },
            { label: "Renewables", value: 8 },
            { label: "Other", value: 2 },
          ],
        },
        {
          title: "2020",
          slices: [
            { label: "Coal", value: 24 },
            { label: "Natural gas", value: 28 },
            { label: "Nuclear", value: 16 },
            { label: "Renewables", value: 30 },
            { label: "Other", value: 2 },
          ],
        },
      ],
    },
    minWords: 150,
  },
  {
    id: "AT1-K",
    chartType: "table",
    chartTypeLabel: "Table",
    prompt:
      "The table below gives information about the average monthly household expenditure (as a percentage of total spending) in three countries. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
    chartDescription:
      "A table with rows for spending categories and columns for Country A, Country B, Country C. Housing: 35% / 28% / 22%. Food: 18% / 25% / 38%. Transport: 15% / 14% / 12%. Healthcare: 12% / 9% / 6%. Education: 8% / 12% / 14%. Leisure/Other: 12% / 12% / 8%. Country A spends the largest share on housing and healthcare; Country C spends by far the most on food (a common feature of lower-income economies) and the least on housing and healthcare. Country B sits between the two on most categories.",
    figure: {
      kind: "table",
      columns: ["Category", "Country A", "Country B", "Country C"],
      rows: [
        ["Housing", "35%", "28%", "22%"],
        ["Food", "18%", "25%", "38%"],
        ["Transport", "15%", "14%", "12%"],
        ["Healthcare", "12%", "9%", "6%"],
        ["Education", "8%", "12%", "14%"],
        ["Leisure / Other", "12%", "12%", "8%"],
      ],
    },
    minWords: 150,
  },
  {
    id: "AT1-L",
    chartType: "table",
    chartTypeLabel: "Table",
    prompt:
      "The table below shows the number of international students (in thousands) studying in four countries in 2010, 2015, and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
    chartDescription:
      "A table: columns 2010 / 2015 / 2020, rows for the USA, the UK, Australia, and Canada. USA: 690 / 975 / 1,075 (highest throughout, steady growth). UK: 405 / 435 / 485 (slow, steady growth). Australia: 270 / 295 / 460 (sharp acceleration after 2015). Canada: 240 / 350 / 530 (the fastest growth overall, more than doubling, overtaking the UK by 2020). The clear features are the USA's consistent dominance and Canada's rapid rise from the smallest to the third-largest host country.",
    figure: {
      kind: "table",
      columns: ["Country", "2010", "2015", "2020"],
      rows: [
        ["USA", "690", "975", "1,075"],
        ["UK", "405", "435", "485"],
        ["Australia", "270", "295", "460"],
        ["Canada", "240", "350", "530"],
      ],
    },
    minWords: 150,
  },
  {
    id: "AT1-M",
    chartType: "process",
    chartTypeLabel: "Process Diagram",
    prompt:
      "The diagram below shows how glass bottles are recycled and reused. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
    chartDescription:
      "A cyclical process diagram with arrows forming a loop. Stages: (1) Used glass bottles are collected from homes and recycling banks → (2) Bottles are transported to a recycling plant → (3) Glass is sorted by colour and cleaned to remove labels and caps → (4) The cleaned glass is crushed into small fragments called cullet → (5) The cullet is melted in a furnace at very high temperature → (6) The molten glass is poured into moulds and shaped into new bottles → (7) The new bottles are inspected, filled and distributed to shops → (8) Consumers use the bottles, which are then returned to step 1, completing the cycle. The diagram emphasises that the process is continuous and repeatable.",
    figure: {
      kind: "process",
      cyclical: true,
      steps: [
        { n: 1, text: "Used glass bottles are collected from homes and recycling banks." },
        { n: 2, text: "Bottles are transported to a recycling plant." },
        { n: 3, text: "Glass is sorted by colour and cleaned to remove labels and caps." },
        { n: 4, text: "The cleaned glass is crushed into small fragments called cullet." },
        { n: 5, text: "The cullet is melted in a furnace at very high temperature." },
        { n: 6, text: "The molten glass is poured into moulds and shaped into new bottles." },
        { n: 7, text: "The new bottles are inspected, filled and distributed to shops." },
        { n: 8, text: "Consumers use the bottles, which are then returned to step 1." },
      ],
    },
    minWords: 150,
  },
  {
    id: "AT1-N",
    chartType: "process",
    chartTypeLabel: "Process Diagram",
    prompt:
      "The diagram below illustrates the life cycle of a butterfly. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
    chartDescription:
      "A circular (cyclical) diagram showing four main stages with arrows returning to the start. (1) Egg: an adult female butterfly lays small eggs on the underside of a leaf. (2) Larva (caterpillar): after about one to two weeks the egg hatches into a caterpillar, which feeds continuously on leaves and grows rapidly, shedding its skin several times. (3) Pupa (chrysalis): the fully grown caterpillar attaches itself to a stem and forms a hard protective case, inside which its body transforms over one to two weeks. (4) Adult butterfly: the case splits open and an adult butterfly emerges, expands and dries its wings, and eventually mates and lays eggs, beginning the cycle again. The whole cycle takes roughly four to six weeks.",
    figure: {
      kind: "process",
      cyclical: true,
      steps: [
        { n: 1, text: "Egg: an adult female lays small eggs on the underside of a leaf." },
        { n: 2, text: "Larva (caterpillar): the egg hatches and the caterpillar feeds and grows, shedding its skin several times." },
        { n: 3, text: "Pupa (chrysalis): the caterpillar forms a hard protective case and its body transforms over one to two weeks." },
        { n: 4, text: "Adult butterfly: the case splits open, the butterfly emerges, dries its wings, mates and lays eggs." },
      ],
    },
    minWords: 150,
  },
  {
    id: "AT1-O",
    chartType: "map",
    chartTypeLabel: "Map",
    prompt:
      "The two maps below show a town centre in 1990 and the same town centre today. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
    chartDescription:
      "Two maps of the same town centre for comparison. 1990 map: a central area with a small open-air market in the middle, a railway station to the north, several small shops along the high street, a large car park to the east, and farmland to the south. Today map: the open-air market has been replaced by a large pedestrianised shopping mall; the small shops have been merged into larger retail units; the car park has been converted into a multi-storey car park; a new bus station has been built next to the railway station; and the farmland to the south has been developed into a residential housing estate. The overall change is from a small, traditional centre to a denser, modern, pedestrian-focused commercial and residential area.",
    figure: {
      kind: "map",
      beforeTitle: "1990",
      afterTitle: "Today",
      before: [
        "Small open-air market in the centre",
        "Railway station to the north",
        "Several small shops along the high street",
        "Large open car park to the east",
        "Farmland to the south",
      ],
      after: [
        "Market replaced by a large pedestrianised shopping mall",
        "Small shops merged into larger retail units",
        "Car park converted into a multi-storey car park",
        "New bus station built next to the railway station",
        "Farmland developed into a residential housing estate",
      ],
    },
    minWords: 150,
  },
  {
    id: "AT1-P",
    chartType: "map",
    chartTypeLabel: "Map",
    prompt:
      "The two maps below show an island before and after the construction of tourist facilities. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
    chartDescription:
      "Two maps of a small island. Before: a largely undeveloped island with a beach along the western shore, dense trees covering most of the interior, and no buildings or roads. After: a reception building has been added near the centre, connected by footpaths to a cluster of accommodation huts in the east and a restaurant near the beach; a pier has been built off the western beach for boat access; the beach now has swimming and water-sports areas marked offshore; and vehicle tracks link the reception to the pier. Much of the tree cover in the east has been cleared for the huts, though the western and southern areas remain wooded. The island has been transformed from natural wilderness into a managed tourist resort.",
    figure: {
      kind: "map",
      beforeTitle: "Before",
      afterTitle: "After",
      before: [
        "Beach along the western shore",
        "Dense trees covering most of the interior",
        "No buildings or roads",
      ],
      after: [
        "Reception building added near the centre",
        "Cluster of accommodation huts in the east (trees cleared)",
        "Restaurant near the beach",
        "Pier built off the western beach for boats",
        "Swimming and water-sports areas marked offshore",
        "Vehicle tracks linking reception to the pier",
        "Western and southern areas remain wooded",
      ],
    },
    minWords: 150,
  },
  {
    id: "AT1-Q",
    chartType: "map",
    chartTypeLabel: "Map",
    prompt:
      "The two maps below show the layout of a university campus in 2005 and the proposed layout for 2030. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
    chartDescription:
      "Two maps of a university campus. 2005: a central library, two teaching blocks to the west, a single car park to the south, sports fields to the east, and a main entrance road from the north. Proposed 2030: a third teaching block and a new science building have been added; the southern car park has been removed and replaced with green space and a cycle path; a new student accommodation complex has been built on part of the former sports fields, which have been reduced in size; a pedestrian plaza has been created around the library; and a new entrance has been added to the east. Overall the plan shows expansion of academic and residential facilities, a reduction in car parking, and a shift towards a greener, more pedestrian-friendly campus.",
    figure: {
      kind: "map",
      beforeTitle: "2005",
      afterTitle: "Proposed 2030",
      before: [
        "Central library",
        "Two teaching blocks to the west",
        "Single car park to the south",
        "Sports fields to the east",
        "Main entrance road from the north",
      ],
      after: [
        "Third teaching block and a new science building added",
        "Southern car park removed, replaced with green space and a cycle path",
        "New student accommodation built on part of the former sports fields",
        "Pedestrian plaza created around the library",
        "New entrance added to the east",
      ],
    },
    minWords: 150,
  },
  {
    id: "AT1-R",
    chartType: "bar_chart",
    chartTypeLabel: "Bar Chart",
    prompt:
      "The bar chart below shows the amount of waste (in kilograms per person per year) produced in five countries in 2020, divided into recycled and non-recycled waste. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
    chartDescription:
      "A stacked bar chart with five countries on the x-axis and waste in kg per person per year on the y-axis (0–600). Each bar is split into recycled (lower portion) and non-recycled (upper portion). Country 1: 550 total, 30% recycled (highest total, low recycling). Country 2: 480 total, 60% recycled. Country 3: 400 total, 55% recycled. Country 4: 350 total, 65% recycled (highest recycling rate). Country 5: 300 total, 40% recycled (lowest total waste). The key features are that the country producing the most waste recycles the smallest proportion of it, while countries producing less waste tend to recycle a larger share.",
    figure: {
      kind: "bar",
      mode: "stacked",
      unit: "kg/person/year",
      categories: ["Country 1", "Country 2", "Country 3", "Country 4", "Country 5"],
      series: [
        { name: "Recycled", values: [165, 288, 220, 228, 120] },
        { name: "Non-recycled", values: [385, 192, 180, 122, 180] },
      ],
    },
    minWords: 150,
  },
  {
    id: "AT1-S",
    chartType: "line_graph",
    chartTypeLabel: "Line Graph",
    prompt:
      "The line graph below shows the percentage of the population aged 65 and over in three countries between 1980 and 2020, with projections to 2040. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
    chartDescription:
      "A line graph, years 1980–2040 on the x-axis (the section after 2020 shown as a dashed projection), percentage aged 65+ on the y-axis (0–35%). Country X (e.g. an ageing East Asian economy): rises steeply from 9% in 1980 to 28% in 2020, projected to reach 34% by 2040 — the oldest population. Country Y: rises gradually from 11% to 18% by 2020, projected to 22% by 2040. Country Z (a younger, developing economy): remains low and almost flat, from 4% to 7% by 2020, projected to 10% by 2040. The dominant feature is the rapid ageing of Country X compared with the slow change in Country Z.",
    figure: {
      kind: "line",
      unit: "% aged 65+",
      xLabels: ["1980", "1990", "2000", "2010", "2020", "2030", "2040"],
      projectionFromIndex: 4,
      series: [
        { name: "Country X", values: [9, 13, 18, 23, 28, 31, 34] },
        { name: "Country Y", values: [11, 13, 15, 16, 18, 20, 22] },
        { name: "Country Z", values: [4, 5, 6, 6.5, 7, 8.5, 10] },
      ],
    },
    minWords: 150,
  },
  {
    id: "AT1-T",
    chartType: "pie_charts",
    chartTypeLabel: "Pie Charts",
    prompt:
      "The charts below show the proportion of water used by three sectors — agriculture, industry, and domestic use — in two regions of the world. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
    chartDescription:
      "Two pie charts comparing water use by sector. Region A (a developing region): Agriculture 82%, Industry 10%, Domestic 8% — overwhelmingly dominated by agriculture. Region B (an industrialised region): Agriculture 30%, Industry 52%, Domestic 18% — dominated by industry. The clearest contrast is that agriculture consumes the vast majority of water in the developing region, whereas in the industrialised region industry is the largest consumer and agriculture's share is far smaller. Domestic use is the smallest sector in both regions but is more than twice as large, proportionally, in the industrialised region.",
    figure: {
      kind: "pie",
      unit: "%",
      charts: [
        {
          title: "Region A (developing)",
          slices: [
            { label: "Agriculture", value: 82 },
            { label: "Industry", value: 10 },
            { label: "Domestic", value: 8 },
          ],
        },
        {
          title: "Region B (industrialised)",
          slices: [
            { label: "Agriculture", value: 30 },
            { label: "Industry", value: 52 },
            { label: "Domestic", value: 18 },
          ],
        },
      ],
    },
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
  {
    id: "GT1-F",
    letterType: "formal",
    letterTypeLabel: "Formal Letter",
    prompt:
      "You recently stayed at a hotel and were very impressed with the service provided by one particular member of staff. Write a letter to the hotel manager. In your letter: explain when you stayed at the hotel, describe what the staff member did, and say what you would like the manager to do. Write at least 150 words. You do NOT need to write any addresses.",
    bulletPoints: [
      "Explain when you stayed at the hotel",
      "Describe what the staff member did that impressed you",
      "Say what you would like the manager to do",
    ],
    minWords: 150,
  },
  {
    id: "GT1-G",
    letterType: "informal",
    letterTypeLabel: "Informal Letter",
    prompt:
      "You have just moved to a new city for work. Write a letter to a friend. In your letter: tell them about your new home, describe what your new job is like, and invite them to come and visit you. Write at least 150 words. You do NOT need to write any addresses.",
    bulletPoints: [
      "Tell your friend about your new home",
      "Describe what your new job is like",
      "Invite them to come and visit you",
    ],
    minWords: 150,
  },
  {
    id: "GT1-H",
    letterType: "formal",
    letterTypeLabel: "Formal Letter",
    prompt:
      "You saw an advertisement for a part-time job at a local company, and you would like to apply. Write a letter to the employer. In your letter: explain which job you are applying for and where you saw it, describe your relevant skills and experience, and say when you are available to start. Write at least 150 words. You do NOT need to write any addresses.",
    bulletPoints: [
      "State which job you are applying for and where you saw it",
      "Describe your relevant skills and experience",
      "Say when you are available to start",
    ],
    minWords: 150,
  },
  {
    id: "GT1-I",
    letterType: "formal",
    letterTypeLabel: "Formal Letter",
    prompt:
      "You live in a rented flat, and there has been a serious problem with noise from a nearby building site. Write a letter to the local council. In your letter: describe the problem and how it is affecting you, explain what you have already done about it, and say what action you would like the council to take. Write at least 150 words. You do NOT need to write any addresses.",
    bulletPoints: [
      "Describe the problem and how it affects you",
      "Explain what you have already done about it",
      "Say what action you want the council to take",
    ],
    minWords: 150,
  },
  {
    id: "GT1-J",
    letterType: "semi_formal",
    letterTypeLabel: "Semi-Formal Letter",
    prompt:
      "You recently attended a training course that was organised by your company, but you felt it did not meet your expectations. Write a letter to the training manager. In your letter: explain which course you attended, describe why you were disappointed, and suggest how future courses could be improved. Write at least 150 words. You do NOT need to write any addresses.",
    bulletPoints: [
      "Explain which course you attended and when",
      "Describe why you were disappointed",
      "Suggest how future courses could be improved",
    ],
    minWords: 150,
  },
  {
    id: "GT1-K",
    letterType: "informal",
    letterTypeLabel: "Informal Letter",
    prompt:
      "A friend has agreed to look after your home while you are away on holiday. Write a letter to your friend. In your letter: thank them for their help, explain what you need them to do, and tell them where to find important things in your home. Write at least 150 words. You do NOT need to write any addresses.",
    bulletPoints: [
      "Thank your friend for agreeing to help",
      "Explain what you need them to do",
      "Tell them where to find important things",
    ],
    minWords: 150,
  },
  {
    id: "GT1-L",
    letterType: "formal",
    letterTypeLabel: "Formal Letter",
    prompt:
      "You ordered a product online, but when it arrived it was damaged and did not match the description. Write a letter to the online company. In your letter: give details of your order, explain what was wrong with the product, and say what you want the company to do. Write at least 150 words. You do NOT need to write any addresses.",
    bulletPoints: [
      "Give details of your order",
      "Explain what was wrong with the product",
      "Say what you want the company to do",
    ],
    minWords: 150,
  },
  {
    id: "GT1-M",
    letterType: "semi_formal",
    letterTypeLabel: "Semi-Formal Letter",
    prompt:
      "You would like to take some evening classes at a local college to improve your skills. Write a letter to the college. In your letter: explain what you would like to study and why, ask about the available classes and their times, and ask about the cost and how to enrol. Write at least 150 words. You do NOT need to write any addresses.",
    bulletPoints: [
      "Explain what you would like to study and why",
      "Ask about available classes and their times",
      "Ask about the cost and how to enrol",
    ],
    minWords: 150,
  },
  {
    id: "GT1-N",
    letterType: "informal",
    letterTypeLabel: "Informal Letter",
    prompt:
      "A friend has asked for your advice about visiting your country as a tourist. Write a letter to your friend. In your letter: suggest the best time of year to visit, recommend some places they should see, and give some advice about what to bring. Write at least 150 words. You do NOT need to write any addresses.",
    bulletPoints: [
      "Suggest the best time of year to visit",
      "Recommend places they should see",
      "Give advice about what to bring",
    ],
    minWords: 150,
  },
  {
    id: "GT1-O",
    letterType: "formal",
    letterTypeLabel: "Formal Letter",
    prompt:
      "You recently used the services of a company to repair something in your home, but you were not satisfied with the work. Write a letter to the company. In your letter: explain what work was done and when, describe the problems with the work, and say what you would like the company to do about it. Write at least 150 words. You do NOT need to write any addresses.",
    bulletPoints: [
      "Explain what work was done and when",
      "Describe the problems with the work",
      "Say what you would like the company to do",
    ],
    minWords: 150,
  },
  {
    id: "GT1-P",
    letterType: "semi_formal",
    letterTypeLabel: "Semi-Formal Letter",
    prompt:
      "You work for a company and would like to request some time off to deal with a personal matter. Write a letter to your manager. In your letter: explain why you need time off, say how much time you will need, and suggest how your work could be covered while you are away. Write at least 150 words. You do NOT need to write any addresses.",
    bulletPoints: [
      "Explain why you need time off",
      "Say how much time you will need",
      "Suggest how your work could be covered",
    ],
    minWords: 150,
  },
  {
    id: "GT1-Q",
    letterType: "informal",
    letterTypeLabel: "Informal Letter",
    prompt:
      "You borrowed something valuable from a friend and accidentally damaged it. Write a letter to your friend. In your letter: explain what happened, apologise for the damage, and offer to put things right. Write at least 150 words. You do NOT need to write any addresses.",
    bulletPoints: [
      "Explain what happened",
      "Apologise for the damage",
      "Offer to put things right",
    ],
    minWords: 150,
  },
  {
    id: "GT1-R",
    letterType: "formal",
    letterTypeLabel: "Formal Letter",
    prompt:
      "Your local library is planning to reduce its opening hours due to budget cuts. Write a letter to the library manager. In your letter: explain how you use the library, describe how the reduced hours would affect you, and suggest what could be done instead. Write at least 150 words. You do NOT need to write any addresses.",
    bulletPoints: [
      "Explain how you use the library",
      "Describe how the reduced hours would affect you",
      "Suggest an alternative to reducing the hours",
    ],
    minWords: 150,
  },
  {
    id: "GT1-S",
    letterType: "semi_formal",
    letterTypeLabel: "Semi-Formal Letter",
    prompt:
      "A neighbour has been very helpful to you since you moved into your home. Write a letter to your neighbour. In your letter: thank them for their help, explain how their help made a difference, and invite them to do something with you to show your appreciation. Write at least 150 words. You do NOT need to write any addresses.",
    bulletPoints: [
      "Thank your neighbour for their help",
      "Explain how their help made a difference",
      "Invite them to do something to show your appreciation",
    ],
    minWords: 150,
  },
  {
    id: "GT1-T",
    letterType: "formal",
    letterTypeLabel: "Formal Letter",
    prompt:
      "You recently travelled by train, and your journey was delayed for several hours, causing you problems. Write a letter to the train company. In your letter: give details of your journey, explain what problems the delay caused you, and say what you expect the company to do. Write at least 150 words. You do NOT need to write any addresses.",
    bulletPoints: [
      "Give details of your journey",
      "Explain what problems the delay caused",
      "Say what you expect the company to do",
    ],
    minWords: 150,
  },
];

// ─── SHARED TASK 2 POOLS ─────────────────────────────────────

const task2Pool: WritingTask2[] = [
  {
    id: "T2-A",
    taskType: "discussion",
    taskTypeLabel: "Discussion Essay",
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
  {
    id: "T2-F",
    taskType: "discussion",
    taskTypeLabel: "Discussion Essay",
    prompt:
      "Some people believe that technology has made modern life more complicated, while others argue that technology has made our lives simpler. Discuss both views and give your own opinion. Write at least 250 words.",
    planningHints: [
      "View 1 (more complicated): information overload, constant connectivity, cyber-security worries, pressure to keep up",
      "View 2 (simpler): instant communication, automation of chores, access to information and services",
      "Your opinion: state it clearly in the introduction and conclusion; perhaps that the net effect depends on how technology is used",
      "Use concrete examples for each view (smartphones, online banking, smart home devices)",
    ],
    minWords: 250,
  },
  {
    id: "T2-G",
    taskType: "opinion",
    taskTypeLabel: "Agree/Disagree Essay",
    prompt:
      "Some people think that individuals can do very little to protect the environment and that it is governments and large corporations that must take responsibility. To what extent do you agree or disagree? Write at least 250 words.",
    planningHints: [
      "Decide your position clearly: fully agree, partially agree, or disagree",
      "Arguments that systemic actors matter most: regulation, emissions standards, large-scale infrastructure, industrial pollution",
      "Arguments that individuals matter: collective consumer demand, voting, lifestyle choices that scale up",
      "A balanced position (individuals matter but systemic change is decisive) is acceptable if argued consistently",
    ],
    minWords: 250,
  },
  {
    id: "T2-H",
    taskType: "opinion",
    taskTypeLabel: "Agree/Disagree Essay",
    prompt:
      "Some people believe that the best way to reduce crime is to give longer prison sentences. Others, however, think there are better alternative ways of reducing crime. To what extent do you agree or disagree? Write at least 250 words.",
    planningHints: [
      "Take a clear stance on whether longer sentences are the best approach",
      "Case for longer sentences: deterrence, incapacitation, public reassurance",
      "Alternatives: education, tackling poverty and unemployment, rehabilitation, early intervention",
      "Use evidence/reasoning about reoffending rates rather than emotion",
    ],
    minWords: 250,
  },
  {
    id: "T2-I",
    taskType: "problem_solution",
    taskTypeLabel: "Causes & Solutions Essay",
    prompt:
      "In many countries, the proportion of overweight people is increasing. What do you think are the causes of this problem, and what measures could be taken to solve it? Write at least 250 words.",
    planningHints: [
      "Causes: sedentary lifestyles, cheap calorie-dense processed food, larger portions, less time to cook",
      "Solutions (government): regulation of advertising, taxes on unhealthy food, public health campaigns, urban design for activity",
      "Solutions (individual): better diet, regular exercise, cooking at home",
      "Link each solution back to a specific cause; develop each fully",
    ],
    minWords: 250,
  },
  {
    id: "T2-J",
    taskType: "double_question",
    taskTypeLabel: "Two-Part Question Essay",
    prompt:
      "These days many people choose to remain single rather than get married. Why is this happening? Is it a positive or negative development for society? Write at least 250 words.",
    planningHints: [
      "Reasons: financial independence (especially women), changing social attitudes, career focus, cost of marriage",
      "Positive aspects: personal freedom, fewer unhappy marriages, individual fulfilment",
      "Negative aspects: declining birth rates, weaker family support networks, potential loneliness",
      "Answer BOTH questions explicitly — they carry equal weight",
    ],
    minWords: 250,
  },
  {
    id: "T2-K",
    taskType: "advantages_disadvantages",
    taskTypeLabel: "Advantages & Disadvantages Essay",
    prompt:
      "More and more people are choosing to study at universities in foreign countries rather than in their home country. Do the advantages of studying abroad outweigh the disadvantages? Write at least 250 words.",
    planningHints: [
      "Advantages: higher-quality education, exposure to new cultures and languages, improved job prospects, independence",
      "Disadvantages: high cost, homesickness and isolation, cultural and language barriers, brain drain from the home country",
      "The question asks you to WEIGH them — reach a clear judgement, not just list both",
      "Support with examples; avoid sitting on the fence in the conclusion",
    ],
    minWords: 250,
  },
  {
    id: "T2-L",
    taskType: "discussion",
    taskTypeLabel: "Discussion Essay",
    prompt:
      "Some people think that children should begin formal education at a very early age, while others believe they should not start school until they are at least seven years old. Discuss both views and give your own opinion. Write at least 250 words.",
    planningHints: [
      "View 1 (early start): early literacy and numeracy, routine, social skills, working-parent support",
      "View 2 (later start): importance of play, child development readiness, reduced stress, examples from countries with later starts",
      "Give your own clear opinion and justify it",
      "Reference child development reasoning rather than just preferences",
    ],
    minWords: 250,
  },
  {
    id: "T2-M",
    taskType: "opinion",
    taskTypeLabel: "Agree/Disagree Essay",
    prompt:
      "Many people believe that social networking sites have had a huge negative impact on both individuals and society. To what extent do you agree or disagree? Write at least 250 words.",
    planningHints: [
      "State your position clearly and maintain it throughout",
      "Negative effects: mental health, misinformation, reduced face-to-face interaction, privacy, addiction",
      "Positive counterpoints: connection across distance, access to information, business and activism opportunities",
      "A nuanced 'partly agree' position is fine if argued consistently",
    ],
    minWords: 250,
  },
  {
    id: "T2-N",
    taskType: "problem_solution",
    taskTypeLabel: "Causes & Solutions Essay",
    prompt:
      "In many large cities, the gap between the rich and the poor is becoming wider. What problems does this cause, and what measures can be taken to address them? Write at least 250 words.",
    planningHints: [
      "Problems: social tension and crime, unequal access to education and healthcare, segregation, reduced social mobility",
      "Solutions: progressive taxation, affordable housing, investment in public services and education, minimum wage policy",
      "Note the question asks for PROBLEMS and MEASURES (not causes) — structure accordingly",
      "Keep solutions realistic and clearly linked to the problems identified",
    ],
    minWords: 250,
  },
  {
    id: "T2-O",
    taskType: "double_question",
    taskTypeLabel: "Two-Part Question Essay",
    prompt:
      "Today, many people do not feel safe either at home or when they are out. What are the causes of this, and what can be done to make people feel safer? Write at least 250 words.",
    planningHints: [
      "Causes: media coverage that amplifies fear, real changes in crime, breakdown of community ties, online threats",
      "Solutions: community policing, better street lighting and design, stronger communities, responsible media reporting",
      "Answer both parts explicitly and give each a clear paragraph",
      "Distinguish between perceived safety and actual safety where relevant",
    ],
    minWords: 250,
  },
  {
    id: "T2-P",
    taskType: "advantages_disadvantages",
    taskTypeLabel: "Advantages & Disadvantages Essay",
    prompt:
      "In some countries, an increasing number of people are choosing to live in large cities rather than in the countryside. What are the advantages and disadvantages of this trend? Write at least 250 words.",
    planningHints: [
      "Advantages: more jobs and higher wages, better services and infrastructure, education and cultural opportunities",
      "Disadvantages: overcrowding, high living costs, pollution and stress, depopulation of rural areas",
      "Consider effects on both the individual and society",
      "A balanced discussion is expected; a clear final assessment strengthens it",
    ],
    minWords: 250,
  },
  {
    id: "T2-Q",
    taskType: "discussion",
    taskTypeLabel: "Discussion Essay",
    prompt:
      "Some people believe that governments should spend money on public services and infrastructure, while others think that money should be invested in supporting the arts, such as music and theatre. Discuss both views and give your own opinion. Write at least 250 words.",
    planningHints: [
      "View 1 (public services): essential needs, health, transport, education, direct benefit to most people",
      "View 2 (the arts): cultural value, identity, tourism, quality of life, economic contribution of creative industries",
      "Give a clear personal opinion — perhaps that priorities depend on a country's stage of development",
      "Avoid dismissing either side; present each fairly before judging",
    ],
    minWords: 250,
  },
  {
    id: "T2-R",
    taskType: "opinion",
    taskTypeLabel: "Agree/Disagree Essay",
    prompt:
      "Some people think that the increasing use of computers and smartphones to communicate has had a negative effect on young people's reading and writing skills. To what extent do you agree or disagree? Write at least 250 words.",
    planningHints: [
      "Take a clear position and sustain it",
      "Negative case: reliance on autocorrect, informal abbreviations, shorter attention spans, less long-form reading",
      "Positive/counter case: young people read and write more than ever (just digitally), exposure to diverse texts",
      "Distinguish between informal digital writing and formal literacy",
    ],
    minWords: 250,
  },
  {
    id: "T2-S",
    taskType: "problem_solution",
    taskTypeLabel: "Causes & Solutions Essay",
    prompt:
      "Many people find it difficult to balance the demands of work and their personal lives. Why is this the case, and what can employers and individuals do to improve the situation? Write at least 250 words.",
    planningHints: [
      "Causes: long working hours, always-on technology and email, financial pressure, demanding workplace cultures",
      "Employer solutions: flexible hours, remote working, realistic workloads, respecting time off",
      "Individual solutions: setting boundaries, time management, prioritising health",
      "Address both employers AND individuals as the prompt requires",
    ],
    minWords: 250,
  },
  {
    id: "T2-T",
    taskType: "advantages_disadvantages",
    taskTypeLabel: "Advantages & Disadvantages Essay",
    prompt:
      "In many countries, people are now working longer and retiring at an older age than in the past. What are the advantages and disadvantages of this development? Write at least 250 words.",
    planningHints: [
      "Advantages: greater financial security, continued sense of purpose, retained workplace experience, reduced strain on pensions",
      "Disadvantages: fewer openings for younger workers, health and energy concerns, less leisure in later life",
      "Consider effects on the individual, employers, and the wider economy",
      "Reach a clear overall assessment rather than only listing points",
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
// ─── POOL EXPORTS & API TASK-TYPE MAPPING ────────────────────
// Exposed so standalone practice pages can list available tasks straight from
// this lib (single source of truth) and send the grader the taskType string
// that /api/writing actually branches on.

export { academicTask1Pool, gtTask1Pool, task2Pool };

export function academicT1ApiType(
  chartType: AcademicWritingTask1["chartType"]
): string {
  const map: Record<AcademicWritingTask1["chartType"], string> = {
    bar_chart: "t1-bar-chart",
    line_graph: "t1-line-graph",
    pie_charts: "t1-pie-chart",
    table: "t1-table",
    process: "t1-process",
    map: "t1-map",
  };
  return map[chartType];
}

export function gtT1ApiType(): string {
  return "t1-letter";
}

export function task2ApiType(taskType: WritingTask2["taskType"]): string {
  const map: Record<WritingTask2["taskType"], string> = {
    opinion: "t2-agree-disagree",
    discussion: "t2-discuss-both",
    problem_solution: "t2-causes-solutions",
    double_question: "t2-two-part",
    advantages_disadvantages: "t2-advantages-disadvantages",
  };
  return map[taskType];
}