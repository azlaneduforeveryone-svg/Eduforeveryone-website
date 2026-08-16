// lib/ielts-writing-model-answers.ts
// Additive content for the individual IELTS Academic Task 1 prompt pages
// (/ielts/writing/task-1/[slug]). Maps each Academic Task 1 prompt id (from the
// existing academicTask1Pool in ielts-writing-data.ts — NOT modified) to a URL
// slug, a short topic label for SEO titles, and a sample Band 8 model answer.
//
// ⚠️ MODEL ANSWERS ARE PENDING AZLAN'S REVIEW BEFORE DEPLOY. They are written by
// EduForEveryone as study guidance, not examiner-authored, and are labelled as
// such on-page.

export interface WritingModelAnswer {
  id: string;        // matches academicTask1Pool id, e.g. "AT1-A"
  slug: string;      // URL slug for /ielts/writing/task-1/[slug]
  topic: string;     // short topic for SEO title, e.g. "Car Ownership by Country"
  modelAnswer: string;
}

export const TASK1_MODEL_ANSWERS: WritingModelAnswer[] = [
  {
    id: "AT1-A",
    slug: "bar-chart-car-ownership",
    topic: "Car Ownership by Country",
    modelAnswer:
      "The bar chart compares the proportion of households owning at least one car across six countries in 1990, 2000 and 2010.\n\nOverall, car ownership rose in every country over the two decades. The USA had the highest levels throughout, whereas India and China started from very low bases, with China showing by far the most striking growth.\n\nIn 1990, ownership in the USA already stood at 88%, climbing steadily to 92% by 2010. Germany and Japan formed a middle tier; both increased and converged, finishing level at 79% in 2010, up from 71% and 68% respectively. Brazil also rose consistently, from 45% to 67%.\n\nThe two Asian developing economies told a different story. India remained the lowest, although its figure nearly tripled from 8% to 22%. China was the most dramatic case, surging from just 5% in 1990 to 38% in 2010 — a more than sevenfold increase that considerably narrowed the gap with Brazil.",
  },
  {
    id: "AT1-B",
    slug: "line-graph-city-temperatures",
    topic: "Monthly Temperatures in Three Cities",
    modelAnswer:
      "The line graph illustrates how average monthly temperatures varied over a year in London, Cairo and Sydney.\n\nOverall, Cairo was the warmest city for most of the year and London the coolest, while Sydney displayed the opposite seasonal pattern, being warmest when the Northern Hemisphere cities were at their coldest.\n\nLondon experienced a classic Northern Hemisphere cycle, beginning at around 4°C in January, rising to a July peak of about 22°C, and falling back to 5°C by December. Cairo followed a similar shape but was consistently hotter, ranging from 13°C in January to roughly 36°C in July and August.\n\nSydney, by contrast, was warmest at the start and end of the year, reaching about 26°C in January before declining to a July low of around 13°C. As a result, Sydney's line crossed those of the other cities during spring and autumn, when their temperatures briefly coincided at approximately 17–20°C.",
  },
  {
    id: "AT1-C",
    slug: "pie-chart-australia-household-energy",
    topic: "Australian Household Energy Use",
    modelAnswer:
      "The two pie charts compare how Australian households used energy across five categories in 2000 and 2020.\n\nOverall, heating and cooling remained the largest single use in both years, but the most notable change was the sharp rise in the share taken by appliances, while water heating and lighting both declined.\n\nIn 2000, heating and cooling accounted for 38% of consumption, followed by water heating at 30%. Appliances made up 15%, with lighting and cooking taking the smallest shares at 12% and 5% respectively.\n\nBy 2020, heating and cooling had edged up slightly to 40%, retaining first place. The share consumed by appliances, however, had risen dramatically to 26%, almost doubling and moving into second position. Meanwhile water heating fell markedly to 20%, and lighting dropped to just 7%. Cooking rose marginally to 7%, leaving it level with lighting as the smallest category.",
  },
  {
    id: "AT1-D",
    slug: "table-country-population-gdp-life-expectancy",
    topic: "Population, GDP & Life Expectancy",
    modelAnswer:
      "The table presents data on population, GDP per capita and life expectancy for five countries in 2022.\n\nOverall, a country's wealth did not straightforwardly determine its life expectancy or population size; Japan and Norway combined high income with the longest lives, whereas Nigeria lagged behind on every measure.\n\nJapan recorded the highest life expectancy at 84.3 years, marginally ahead of Norway's 83.2, even though Norway had by far the highest GDP per capita at $89,000 compared with Japan's $42,000. India was the most populous nation by a wide margin at 1,400 million, yet its GDP per capita was only $2,400 and life expectancy 70.4 years.\n\nNigeria, with a comparable income of $2,100, had the lowest life expectancy of all at just 55.2 years. Brazil occupied a middle position, with a population of 215 million, GDP per capita of $9,100 and life expectancy of 75.9 years.",
  },
  {
    id: "AT1-E",
    slug: "process-diagram-rainwater-treatment",
    topic: "Urban Rainwater Treatment",
    modelAnswer:
      "The diagram illustrates the stages by which rainwater is collected, treated and supplied to households in an urban area.\n\nOverall, this is a linear, one-directional process that begins with the natural collection of rainwater and ends with treated water being delivered to consumers, with the majority of stages dedicated to cleaning and purification.\n\nAt the first stage, rainfall gathers in a river or reservoir, from which it is pumped to a screening plant where large debris is removed. The water then flows into sedimentation tanks, allowing suspended particles to settle, before chemicals are added during the coagulation and flocculation stage.\n\nFollowing this, the water is filtered through layers of sand and gravel and undergoes chlorination and pH adjustment to make it safe to drink. The purified water is subsequently held in covered service reservoirs. Finally, it is distributed through underground pipes, branching out to supply both residential homes and commercial premises such as schools and businesses.",
  },
  {
    id: "AT1-F",
    slug: "bar-chart-university-subject-choices",
    topic: "University Subject Choices",
    modelAnswer:
      "The bar chart compares the percentage of students choosing five university subjects in 2010 and 2023.\n\nOverall, Computer Science saw the most significant growth and became the most popular subject by 2023, whereas the Arts experienced the steepest decline. Engineering and Law, by contrast, remained completely stable.\n\nIn 2010, Business was the leading choice at 28%, but its share fell to 21% by 2023. Over the same period, Computer Science rose sharply from 17% to 31%, overtaking Business to become the single most popular field and registering the largest increase of any subject.\n\nThe Arts followed the opposite trajectory, declining markedly from 18% to just 11% and ending as the least popular option. Engineering and Law, meanwhile, showed no change whatsoever, holding steady at 22% and 15% respectively across the thirteen-year period. The overall picture is one of growing demand for technology-related study at the expense of the humanities.",
  },
  {
    id: "AT1-G",
    slug: "line-graph-coffee-consumption",
    topic: "Coffee Consumption by Country",
    modelAnswer:
      "The line graph shows annual per-capita coffee consumption in Finland, the USA, Brazil and China between 2000 and 2020.\n\nOverall, consumption increased in all four countries over the period. Finland consumed considerably more coffee per person than the others throughout, while China remained the smallest consumer by a wide margin despite the fastest relative growth.\n\nFinland began as the clear leader at 11 kg per person and rose steadily to 13 kg by 2020. The USA and Brazil followed similar upward paths in the middle of the range: American consumption climbed from 4 kg to 7 kg, while Brazil increased from 3 kg to 6.5 kg, finishing just below the USA.\n\nChina consumed the least at every point, starting at a mere 0.5 kg per person. Although its consumption rose to 2.5 kg — a fivefold increase, the largest in proportional terms — it still remained far below the other three nations in absolute terms.",
  },
  {
    id: "AT1-H",
    slug: "bar-chart-leisure-activities-by-age",
    topic: "Leisure Activities by Age Group",
    modelAnswer:
      "The bar chart compares the average number of minutes per day that four age groups spent on three leisure activities.\n\nOverall, time spent watching television and reading increased with age, whereas social media use declined steeply among older groups. The youngest group dominated social media, while the oldest spent the most time on both television and reading.\n\nWatching television rose consistently across the age groups, from 90 minutes a day among 15–24-year-olds to 210 minutes among those aged 65 and over. Reading showed the same upward pattern, climbing from just 15 minutes in the youngest group to 65 minutes in the oldest.\n\nSocial media displayed the reverse trend. The 15–24 group spent the most time on it by far, at 150 minutes daily, but this fell sharply to 95 and 45 minutes in the middle groups and to a mere 15 minutes among the over-65s. The clearest contrast lies between young people's heavy social-media use and older people's preference for television and reading.",
  },
  {
    id: "AT1-I",
    slug: "line-graph-tourist-attraction-visitors",
    topic: "Visitors to Tourist Attractions",
    modelAnswer:
      "The line graph illustrates visitor numbers, in millions, to museums, theme parks and historic sites in one country between 2005 and 2020.\n\nOverall, theme parks experienced strong and continuous growth, overtaking museums to become the most popular attraction, while historic sites remained both the least visited and the most stable.\n\nIn 2005, museums were the most visited, attracting 6 million people. Their numbers dipped slightly to 5 million around 2010 before recovering to 7 million by 2020. Theme parks, starting lower at 3 million, rose steadily and strongly throughout the period, reaching 8 million in 2020 and overtaking museums at around 2015.\n\nHistoric sites, by contrast, saw little change. Visitor numbers fluctuated only gently between 2 and 3 million across the fifteen years, leaving them consistently the least frequented of the three. The dominant feature is thus the contrast between the dynamic growth of theme parks and the relative stability of the other two attractions.",
  },
  {
    id: "AT1-J",
    slug: "pie-chart-electricity-generation-sources",
    topic: "Electricity Generation Sources",
    modelAnswer:
      "The two pie charts compare the main sources of electricity generation in one country in 2000 and 2020.\n\nOverall, the country shifted decisively away from coal towards renewables and natural gas, with coal losing its dominant position and renewables emerging as a leading source over the two decades.\n\nIn 2000, coal was by far the largest source, generating 52% of electricity. Natural gas and nuclear power followed, at 20% and 18% respectively, while renewables contributed a modest 8% and other sources just 2%.\n\nBy 2020, the picture had changed substantially. Coal's share had more than halved to 24%, while renewables had nearly quadrupled to 30%, making them the single largest source. Natural gas had grown moderately to 28%, leaving it almost level with renewables, whereas nuclear power had declined slightly to 16%. The contribution of other sources remained unchanged at 2%.",
  },
  {
    id: "AT1-K",
    slug: "table-household-expenditure",
    topic: "Household Expenditure by Country",
    modelAnswer:
      "The table compares the percentage of household spending allocated to six categories in three countries, labelled A, B and C.\n\nOverall, housing was the largest expense in Country A, whereas food dominated spending in Country C; in general, Country A devoted more to housing and healthcare, while Country C spent far more on food.\n\nHouseholds in Country A spent the greatest share on housing, at 35%, followed by food at 18%. They also recorded the highest healthcare spending, at 12%. Country C showed the opposite emphasis: food accounted for by far the largest portion of its budget at 38%, while housing took only 22% and healthcare a mere 6%.\n\nCountry B generally fell between the two on most categories, with 28% on housing and 25% on food. Education absorbed a slightly larger share in Countries B and C (12% and 14%) than in Country A (8%), while transport and leisure spending were broadly similar across all three countries.",
  },
  {
    id: "AT1-L",
    slug: "table-international-students",
    topic: "International Student Numbers",
    modelAnswer:
      "The table shows the number of international students, in thousands, studying in the USA, the UK, Australia and Canada in 2010, 2015 and 2020.\n\nOverall, all four countries attracted more international students over the decade. The USA hosted by far the largest numbers throughout, while Canada experienced the most rapid growth, rising from the smallest host to the second largest.\n\nThe USA dominated at every point, with student numbers climbing steadily from 690,000 in 2010 to 1,075,000 in 2020. The UK grew much more slowly, from 405,000 to 485,000, and was overtaken by both Canada and Australia by the end of the period.\n\nCanada saw the steepest increase, more than doubling from 240,000 to 530,000 to become the second-largest destination by 2020. Australia's growth was uneven, rising only modestly from 270,000 to 295,000 between 2010 and 2015 before accelerating sharply to 460,000, which nonetheless left it in fourth place.",
  },
  {
    id: "AT1-M",
    slug: "process-diagram-glass-bottle-recycling",
    topic: "Glass Bottle Recycling",
    modelAnswer:
      "The diagram illustrates the cyclical process through which glass bottles are recycled and reused.\n\nOverall, the process is continuous and repeatable, consisting of eight stages that begin with the collection of used bottles and end with consumers returning them, so that the cycle starts again.\n\nInitially, used glass bottles are collected from homes and recycling banks and transported to a recycling plant. There, the glass is sorted by colour and cleaned to remove labels and caps. Once clean, it is crushed into small fragments known as cullet.\n\nIn the next phase, the cullet is melted in a furnace at a very high temperature until it becomes molten. This molten glass is then poured into moulds and shaped into new bottles. After being inspected, the new bottles are filled and distributed to shops, where consumers purchase and use them. Crucially, the used bottles are then returned to the collection stage, completing the loop and allowing the entire process to repeat indefinitely.",
  },
  {
    id: "AT1-N",
    slug: "process-diagram-butterfly-life-cycle",
    topic: "Life Cycle of a Butterfly",
    modelAnswer:
      "The diagram illustrates the four main stages in the life cycle of a butterfly, a process which is continuous and repeats itself.\n\nOverall, the cycle moves from egg to caterpillar, then to a transforming pupa, and finally to an adult butterfly, which reproduces to begin the sequence again, with the whole process taking roughly four to six weeks.\n\nThe cycle begins when an adult female butterfly lays small eggs on the underside of a leaf. After one to two weeks, each egg hatches into a larva, or caterpillar, which then feeds continuously on leaves and grows rapidly, shedding its skin several times as it expands.\n\nOnce fully grown, the caterpillar attaches itself to a stem and forms a hard protective case called a pupa, or chrysalis. Inside this case its body is transformed over a further one to two weeks. Finally, the case splits open and an adult butterfly emerges, dries and expands its wings, and eventually mates and lays eggs, thereby starting the cycle anew.",
  },
  {
    id: "AT1-O",
    slug: "map-town-centre-development",
    topic: "Town Centre Then & Now",
    modelAnswer:
      "The two maps illustrate the changes that took place in a town centre between 1990 and the present day.\n\nOverall, the town centre was transformed from a small, traditional area into a denser, modern and largely pedestrianised commercial and residential zone, with open spaces giving way to buildings.\n\nThe most striking change occurred in the centre, where the small open-air market was demolished and replaced by a large pedestrianised shopping mall. The several small shops that had lined the high street were correspondingly merged into larger retail units. To the east, the open car park was redeveloped into a multi-storey car park, increasing capacity within the same footprint.\n\nTransport links were also improved: a new bus station was constructed next to the existing railway station in the north. Finally, the farmland that had occupied the area to the south was developed into a residential housing estate, reflecting the overall intensification of land use across the town centre.",
  },
  {
    id: "AT1-P",
    slug: "map-island-tourist-development",
    topic: "Island Before & After Tourism",
    modelAnswer:
      "The two maps show a small island before and after the construction of facilities for tourists.\n\nOverall, the island was transformed from an undeveloped natural environment into a managed tourist resort, although some of the original woodland was retained.\n\nBefore development, the island was largely untouched. It featured a beach along its western shore and dense trees covering most of the interior, with no buildings or roads of any kind.\n\nAfter development, a reception building was constructed near the centre of the island to serve as a focal point. This was connected by footpaths to a cluster of accommodation huts in the east, where some trees had been cleared, and to a restaurant built close to the beach. A pier was added off the western shore to allow access by boat, and swimming and water-sports areas were marked offshore. Vehicle tracks were laid to link the reception with the pier, while the western and southern parts of the island were left wooded.",
  },
  {
    id: "AT1-Q",
    slug: "map-university-campus-2030",
    topic: "University Campus 2005 vs 2030",
    modelAnswer:
      "The two maps compare the layout of a university campus as it was in 2005 with the proposed layout for 2030.\n\nOverall, the plans involve a clear expansion of academic and residential buildings combined with a marked reduction in car parking, reflecting a shift towards a greener and more pedestrian-friendly campus.\n\nIn 2005, the campus centred on a library, with two teaching blocks to the west, a single car park to the south, sports fields to the east and a main entrance road approaching from the north. Under the 2030 proposal, academic provision is to be expanded through the addition of a third teaching block and a new science building.\n\nSeveral changes are designed to reduce car use and add greenery. The southern car park is to be removed and replaced with green space and a cycle path, while a pedestrian plaza will be created around the library. A new student accommodation complex will be built on part of the former sports fields, which are consequently reduced in size, and an additional entrance will be added to the east.",
  },
  {
    id: "AT1-R",
    slug: "bar-chart-waste-recycling-by-country",
    topic: "Waste & Recycling by Country",
    modelAnswer:
      "The stacked bar chart shows the amount of waste, in kilograms per person per year, produced by five countries in 2020, divided into recycled and non-recycled portions.\n\nOverall, the country generating the most waste recycled the smallest proportion of it, whereas countries producing less waste tended to recycle a greater share, suggesting an inverse relationship between total waste and recycling rates.\n\nCountry 1 produced by far the most waste, at 550 kg per person, yet recycled only 30% of it, leaving the largest quantity of non-recycled waste of any country. At the other extreme, Country 4 produced just 350 kg per person and recycled 65% of it — the highest recycling rate in the group.\n\nCountry 5 generated the least waste overall at 300 kg, though it recycled a relatively modest 40%. Countries 2 and 3 occupied the middle ground, producing 480 kg and 400 kg respectively and recycling well over half of their waste, at 60% and 55%.",
  },
  {
    id: "AT1-S",
    slug: "line-graph-ageing-population",
    topic: "Ageing Population Trends",
    modelAnswer:
      "The line graph illustrates the percentage of people aged 65 and over in three countries between 1980 and 2020, together with projections to 2040.\n\nOverall, all three countries are expected to see their elderly populations grow, but Country X is ageing far more rapidly than the others, while Country Z's population is projected to remain comparatively young throughout.\n\nIn 1980, the three countries were relatively close together, ranging from 4% in Country Z to 11% in Country Y. Country X then aged dramatically, climbing from 9% to 28% by 2020 and is projected to reach 34% by 2040, making it easily the oldest of the three.\n\nCountry Y rose more gradually, from 11% to 18% over the actual period, with a forecast of 22% by 2040. Country Z, by contrast, remained almost flat, increasing only from 4% to 7% by 2020, and even by 2040 is expected to reach just 10%, leaving it by far the youngest population.",
  },
  {
    id: "AT1-T",
    slug: "pie-chart-water-use-by-sector",
    topic: "Water Use by Sector",
    modelAnswer:
      "The two pie charts compare the proportion of water used by agriculture, industry and domestic consumers in a developing region (Region A) and an industrialised region (Region B).\n\nOverall, water use in the developing region was overwhelmingly dominated by agriculture, whereas in the industrialised region industry was the leading consumer, highlighting a clear contrast in how the two regions allocate their water.\n\nIn Region A, agriculture accounted for the vast majority of water consumption, at 82%. Industry and domestic use together made up the remaining fifth, taking just 10% and 8% respectively, so that non-agricultural demand was almost negligible.\n\nRegion B presented a very different profile. Here industry was the largest consumer at 52%, while agriculture's share fell to 30% — well under half of its proportion in Region A. Domestic use, at 18%, was the smallest sector in both regions, but it was more than twice as large proportionally in the industrialised region as in the developing one.",
  },
];

export function getModelAnswerBySlug(slug: string): WritingModelAnswer | undefined {
  return TASK1_MODEL_ANSWERS.find(m => m.slug === slug);
}

export function getModelAnswerById(id: string): WritingModelAnswer | undefined {
  return TASK1_MODEL_ANSWERS.find(m => m.id === id);
}
