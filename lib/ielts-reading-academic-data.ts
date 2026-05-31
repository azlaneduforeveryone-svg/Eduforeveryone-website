// lib/ielts-reading-academic-data.ts
// 5 Academic Reading test pools — 3 passages × ~13 questions = ~40 total per pool.
// Import this on the Reading page when format === "academic"

import type { AcademicReadingTest } from "./ielts-types";
import { pickRandom } from "./ielts-types";

export const ACADEMIC_READING_POOLS: AcademicReadingTest[] = [

  // ══════════════════════════════════════════════════════════
  // POOL A — Horse Domestication / Light Pollution / Remote Work
  // ══════════════════════════════════════════════════════════
  {
    id: "AR-A",
    label: "Academic Reading Test A",
    passages: [
      {
        title: "Passage 1 – The Domestication of the Horse",
        text: `Few events have altered human history as profoundly as the domestication of the horse. The prevailing archaeological consensus places the first domestication at around 3500 BCE, in the Pontic-Caspian steppe — a vast grassland stretching from modern Ukraine to Kazakhstan. The evidence comes primarily from changes in horse bones and teeth recovered from ancient settlement sites, suggesting human management of herds.

The Botai culture of northern Kazakhstan is frequently cited as the earliest confirmed example. Researchers found lipid residues consistent with mare's milk in pottery fragments from Botai sites, suggesting horses were kept for milk and meat as well as transport. This challenges the assumption that horses were domesticated solely as riding animals.

However, genetic studies published since 2021 have complicated the Botai narrative. Ancient DNA analysis indicates that modern domestic horses do not descend from Botai horses, which appear to have become the Przewalski's horse — the last truly wild horse species. Instead, ancestors of all modern domestic horses appear to have originated in the western Pontic-Caspian steppe, with population expansion beginning around 2200 BCE coinciding with the spread of bronze-age cultures across Eurasia.

The social and military implications were enormous. Cavalry transformed warfare; long-distance communication became feasible; trade networks expanded dramatically. Some historians argue that the spread of Indo-European languages across Eurasia was directly facilitated by horse-riding cultures. This remains contested, but the correlation between archaeological and linguistic evidence is compelling.

Domestication was not a single event — a eureka moment when one person first climbed onto a horse's back. It was a gradual process involving generations of selective breeding, shifting human-animal relationships, and technological innovation, including the development of the bit and bridle, without which effective control of a mounted horse is nearly impossible.`,
        instructions: "Questions 1–5: TRUE / FALSE / NOT GIVEN",
        questions: [
          { id: 1,  type: "tfng", q: "The first horse domestication is agreed by archaeologists to have occurred around 3500 BCE.", answer: "TRUE",      explanation: "Directly stated in paragraph 1." },
          { id: 2,  type: "tfng", q: "The Botai people used horses only for transportation.",                                    answer: "FALSE",     explanation: "Paragraph 2 states they were also kept for milk and meat." },
          { id: 3,  type: "tfng", q: "Przewalski's horse is a descendant of modern domestic horses.",                          answer: "FALSE",     explanation: "The text says Botai horses became Przewalski's — a distinct lineage from modern domestic horses." },
          { id: 4,  type: "tfng", q: "Most historians accept that horse-riding cultures spread Indo-European languages.",       answer: "NOT GIVEN", explanation: "The text says it 'remains contested', not what most historians accept." },
          { id: 5,  type: "tfng", q: "The bit and bridle were essential for effective mounted horse control.",                  answer: "TRUE",      explanation: "Explicitly stated in the final paragraph." },
        ],
      },
      {
        title: "Passage 2 – Light Pollution and Ecological Consequences",
        text: `For most of human history, the night sky was a canopy of stars. Today, more than eighty percent of the world's population lives under light-polluted skies, and in parts of North America and Europe, the Milky Way is completely invisible. Artificial light at night (ALAN) has become one of the fastest-growing forms of environmental pollution, yet remains far less regulated than air or water pollution.

The ecological consequences are wide-ranging. Many animals rely on natural light cycles — photoperiodism — to regulate reproduction, migration, and foraging. Artificial light disrupts these cues in measurable and often harmful ways.

Seabirds such as petrels and shearwaters are particularly vulnerable. Attracted to artificial light, young birds become disoriented and are frequently grounded in urban areas during their first ocean-going flights — a phenomenon known as fallout. Volunteers in coastal towns run rescue operations collecting thousands of grounded birds annually.

For sea turtles, newly hatched hatchlings instinctively move toward the brightest horizon — naturally the ocean's reflected moonlight. Beachfront lighting causes hatchlings to move inland toward roads and buildings, drastically reducing survival rates.

Insects may be the most profoundly affected. Artificial light disrupts the navigational systems of many flying insects, trapping them in spiralling flight paths around light sources until exhaustion. A 2020 study estimated that a single streetlamp can reduce insect numbers in the surrounding area by up to thirty percent.

Solutions exist but require political will. Dark Sky Reserves have been established in over fifty countries. Engineering solutions include shielded luminaires that direct light downward only, amber-frequency LEDs less disruptive to wildlife, and motion-sensitive lighting.`,
        instructions: "Questions 6–10: Choose A, B, C, or D.",
        questions: [
          { id: 6,  type: "mcq",  q: "What percentage lives under light-polluted skies?",                                      opts: ["A. Over 60%", "B. Over 70%", "C. Over 80%", "D. Over 90%"], answer: "C", explanation: "'More than eighty percent' — paragraph 1." },
          { id: 7,  type: "mcq",  q: "The 'fallout' phenomenon describes:",                                                    opts: ["A. Seabirds dying at sea", "B. Young seabirds grounded in urban areas", "C. Seabirds abandoning nesting sites", "D. Declining migration"], answer: "B", explanation: "Defined explicitly in paragraph 3." },
          { id: 8,  type: "mcq",  q: "Sea turtle hatchlings are guided by:",                                                   opts: ["A. Magnetic field", "B. Sound from waves", "C. The brightest horizon", "D. Sand temperature"], answer: "C", explanation: "Stated in paragraph 4." },
          { id: 9,  type: "mcq",  q: "A single streetlamp can reduce insects by up to:",                                       opts: ["A. 10%", "B. 20%", "C. 30%", "D. 40%"], answer: "C", explanation: "Explicitly stated in paragraph 5." },
          { id: 10, type: "mcq",  q: "Which solution directs light downward only?",                                            opts: ["A. Amber LEDs", "B. Motion-sensitive lighting", "C. Shielded luminaires", "D. Dark Sky Reserves"], answer: "C", explanation: "Final paragraph." },
        ],
      },
      {
        title: "Passage 3 – The Shifting Landscape of Remote Work",
        text: `When the COVID-19 pandemic forced hundreds of millions of office workers to work from home in 2020, it triggered what many called the greatest experiment in remote work in human history. Three years on, the results are complex and counterintuitive.

The most robust finding is that productivity, for most knowledge workers, did not collapse. A Stanford study by Nicholas Bloom found fully remote workers approximately thirteen percent more productive than in-office counterparts. Bloom attributed this to fewer interruptions, elimination of commuting, and greater autonomy. However, this gain applied to individual task-based work. For highly collaborative roles and new employees needing mentoring, fully remote work appears to be a net disadvantage.

The mental health picture is similarly nuanced. Remote workers report higher job satisfaction and better work-life balance, but also higher rates of loneliness and blurring of the boundary between work and personal time. The elimination of commuting, for most a source of stress, is offset for some by the loss of a structural boundary between professional and domestic life.

Career progression presents the most under-discussed risk. Research on flexible working arrangements found that workers using such arrangements, even when formally sanctioned, were promoted less frequently and rated lower in performance reviews than comparable on-site colleagues — sometimes called flexibility stigma.

Geographically, remote work accelerated population movements. Cities like San Francisco and New York saw net population losses, while mid-size cities and rural areas experienced housing demand surges. This brought greater geographic equity in economic opportunity but significant pressure on housing costs in destination areas.

The emerging consensus is that hybrid working — typically two to three days in office — has become dominant in knowledge-intensive sectors, though conflicts between employer preferences for greater attendance and employee preferences for flexibility continue.`,
        instructions: "Questions 11–14: TRUE/FALSE/NOT GIVEN. Questions 15–17: Complete the summary.",
        questions: [
          { id: 11, type: "tfng", q: "Bloom's study found remote workers approximately 13% more productive.",               answer: "TRUE",      explanation: "Directly stated in paragraph 2." },
          { id: 12, type: "tfng", q: "New employees benefit equally from remote and in-office environments.",               answer: "FALSE",     explanation: "The text says new employees are at a net disadvantage when fully remote." },
          { id: 13, type: "tfng", q: "Flexibility stigma means remote workers are overlooked for promotion more often.",   answer: "TRUE",      explanation: "Paragraph 4: promoted less frequently." },
          { id: 14, type: "tfng", q: "San Francisco gained population during the pandemic years.",                         answer: "FALSE",     explanation: "The text states it saw net population losses." },
          { id: 15, type: "fill", q: "For _____ task-based roles, remote work improved productivity.",                     answer: "individual", explanation: "Stated in paragraph 2." },
          { id: 16, type: "fill", q: "The phenomenon where flexible workers are promoted less is called _____ stigma.",    answer: "flexibility", explanation: "Named in paragraph 4." },
          { id: 17, type: "fill", q: "The _____ model — 2–3 days in office — has become dominant.",                       answer: "hybrid",    explanation: "Final paragraph." },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════
  // POOL B — Deep Ocean / Urban Heat Islands / Behavioural Economics
  // ══════════════════════════════════════════════════════════
  {
    id: "AR-B",
    label: "Academic Reading Test B",
    passages: [
      {
        title: "Passage 1 – The Deep Ocean: Earth's Final Frontier",
        text: `The deep ocean — generally defined as water below two hundred metres — covers more than sixty percent of the planet's surface and represents over ninety percent of the Earth's liveable space by volume. Yet it remains profoundly unexplored. As of 2023, humans have mapped only around twenty-five percent of the global ocean floor with modern high-resolution sonar, and fewer than thirty people have visited the deepest point on Earth, the Challenger Deep, compared to more than six hundred who have visited space.

The challenge is largely physical. Pressure increases by approximately one atmosphere every ten metres. At the Challenger Deep — nearly eleven thousand metres — pressure reaches over one thousand atmospheres. Designing reliable vehicles for such conditions is expensive and technically demanding.

Despite the difficulties, deep-sea exploration has yielded extraordinary discoveries. In the 1970s, scientists diving to hydrothermal vents along mid-ocean ridges found thriving ecosystems entirely independent of sunlight, powered by chemosynthesis — converting chemical energy from vent emissions into organic matter. This expanded scientists' conception of where life could exist, with implications for the search for extraterrestrial life on moons such as Europa and Enceladus.

The deep ocean also contains vast economic resources. Polymetallic nodules — potato-sized rocks rich in cobalt, manganese, nickel, and copper — litter the abyssal plain. These metals are in high demand for electric vehicle batteries and renewable energy. Companies have begun lobbying for commercial deep-sea mining rights, while scientists and environmental groups warn that mining could devastate poorly understood ecosystems before they are properly studied.

Governance is managed through the International Seabed Authority (ISA), established under the UN Convention on the Law of the Sea. The ISA's effectiveness in balancing economic interests with environmental protection remains deeply controversial.`,
        questions: [
          { id: 1,  type: "fill", q: "The deep ocean is defined as water below _____ metres.",                               answer: "200",           explanation: "Opening sentence." },
          { id: 2,  type: "fill", q: "The ocean floor mapped with modern sonar as of 2023: around _____% ",                 answer: "25",            explanation: "Paragraph 1." },
          { id: 3,  type: "tfng", q: "More people have visited the Challenger Deep than have been to space.",              answer: "FALSE",         explanation: "The opposite is stated." },
          { id: 4,  type: "fill", q: "Water pressure increases by one atmosphere every _____ metres.",                      answer: "10",            explanation: "Paragraph 2." },
          { id: 5,  type: "fill", q: "Deep-sea vent ecosystems are powered by _____.",                                      answer: "chemosynthesis", explanation: "Paragraph 3." },
          { id: 6,  type: "tfng", q: "Hydrothermal vent ecosystems depend on sunlight.",                                   answer: "FALSE",         explanation: "Explicitly independent of sunlight." },
          { id: 7,  type: "mcq",  q: "Polymetallic nodules are found on:",                                                 opts: ["A. Hydrothermal vents", "B. The abyssal plain", "C. Mid-ocean ridges", "D. Continental shelves"], answer: "B", explanation: "Paragraph 4." },
          { id: 8,  type: "tfng", q: "Scientists and environmental groups support deep-sea mining.",                       answer: "FALSE",         explanation: "They 'warn that mining could devastate' ecosystems." },
          { id: 9,  type: "fill", q: "The body managing deep ocean governance: International _____ Authority.",             answer: "Seabed",        explanation: "Final paragraph." },
        ],
      },
      {
        title: "Passage 2 – Urban Heat Islands: Causes, Consequences and Cures",
        text: `On a summer evening, stepping from a park into a city street can feel like entering a different climate. Urban areas are measurably warmer than the surrounding rural landscape — the urban heat island (UHI) effect. In some major cities, the temperature difference between the urban core and rural surroundings can exceed ten degrees Celsius.

The causes are well understood. Traditional urban materials — concrete, asphalt, and brick — absorb solar radiation during the day and release it slowly after dark, preventing the nocturnal cooling that occurs in vegetated landscapes. Buildings create urban canyons that trap longwave radiation and reduce wind speeds. Anthropogenic heat — from vehicles, air conditioning, and industry — adds further warming. And the removal of vegetation eliminates the cooling effect of evapotranspiration, the process by which plants release water vapour, absorbing latent heat.

The health consequences are significant. Heat is the leading weather-related cause of death in many countries. During the 2003 European heatwave, an estimated seventy thousand people died, with urban populations — particularly the elderly living alone — disproportionately affected. Urban heat islands amplify heatwave events and prevent the overnight cooling the human body needs to recover.

Higher temperatures also worsen air quality by accelerating ground-level ozone formation — a secondary pollutant created when sunlight reacts with nitrogen oxides and volatile organic compounds, exacerbating respiratory conditions.

Urban planners are increasingly aware of the need to cool cities. Green infrastructure — urban forests, green roofs, parks — can reduce local temperatures by several degrees. Cool pavements and reflective roofing reduce solar absorption. Water features contribute to localised cooling.

Singapore provides a compelling example of large-scale urban cooling. Its urban forest cover has actually increased over four decades despite rapid urbanisation, integrating green corridors and sky gardens as planning requirements.`,
        questions: [
          { id: 10, type: "fill", q: "Temperature difference between urban core and surroundings can exceed _____ °C.",      answer: "10",      explanation: "Paragraph 1." },
          { id: 11, type: "mcq",  q: "Evapotranspiration describes:",                                                        opts: ["A. Rain absorption by soil", "B. Plant release of water vapour", "C. Urban flooding", "D. Concrete heating"], answer: "B", explanation: "Defined in paragraph 2." },
          { id: 12, type: "fill", q: "Heat is the leading _____ -related cause of death in many countries.",                 answer: "weather",  explanation: "Paragraph 3." },
          { id: 13, type: "fill", q: "Estimated deaths in the 2003 European heatwave: _____.",                               answer: "70,000",   explanation: "'Seventy thousand' — paragraph 3." },
          { id: 14, type: "mcq",  q: "Ground-level ozone forms when sunlight reacts with nitrogen oxides and:",             opts: ["A. Carbon dioxide", "B. Volatile organic compounds", "C. Sulphur dioxide", "D. Methane"], answer: "B", explanation: "Paragraph 4." },
          { id: 15, type: "tfng", q: "Singapore's urban forest cover has decreased as the city has grown.",                 answer: "FALSE",    explanation: "'Has actually increased' — final paragraph." },
          { id: 16, type: "tfng", q: "Cool pavements and reflective roofing reduce solar radiation absorption.",            answer: "TRUE",     explanation: "Paragraph 5." },
        ],
      },
      {
        title: "Passage 3 – The Rise of Behavioural Economics",
        text: `For much of the twentieth century, mainstream economics rested on the assumption that human beings are rational agents who consistently make decisions that maximise their self-interest. This hypothetical creature — Homo economicus — processes information perfectly, considers all options, and chooses the one yielding greatest utility. It was a useful simplifying assumption for elegant models, but bore little resemblance to how real people actually behave.

The rebellion against Homo economicus gathered pace in the 1970s and 1980s, driven above all by the collaboration between psychologist Daniel Kahneman and economist Amos Tversky. Their work documented cognitive biases — predictable deviations from rational choice theory — that affect virtually all human decision-making. Their most celebrated contribution, Prospect Theory, demonstrated that choices are strongly influenced by how options are framed (the framing effect), that we are disproportionately averse to losses relative to equivalent gains (loss aversion), and that we evaluate outcomes relative to a reference point rather than in absolute terms.

Richard Thaler extended this into practical policy. Working with legal scholar Cass Sunstein, he developed nudges — subtle modifications to choice environments that predictably alter behaviour without restricting freedom or using financial incentives. The canonical example is opt-out pension enrolment: where employees must actively opt in, participation rates are typically around forty percent; where enrolment is automatic (opt-out), rates routinely exceed ninety percent.

Thaler won the Nobel Prize in Economics in 2017, signalling mainstream acceptance. Governments worldwide have established behavioural insight units to apply these principles to tax compliance, energy conservation, health behaviour, and charitable giving.

Critics raise two concerns. The first is empirical: many laboratory findings have failed to replicate in real-world settings — a reflection of the broader replication crisis in psychology. The second is philosophical: nudging manipulates behaviour without the subject's awareness, raising questions about autonomy and paternalism.`,
        questions: [
          { id: 17, type: "fill", q: "The hypothetical rational decision-maker is called _____ economicus.",                 answer: "Homo",      explanation: "Paragraph 1." },
          { id: 18, type: "mcq",  q: "Kahneman's collaboration with Tversky was between a psychologist and:",               opts: ["A. A sociologist", "B. A neuroscientist", "C. An economist", "D. A political scientist"], answer: "C", explanation: "Paragraph 2." },
          { id: 19, type: "fill", q: "Evaluating options based on how they are presented: the _____ effect.",              answer: "framing",   explanation: "Named in paragraph 2." },
          { id: 20, type: "fill", q: "Thaler's co-author on nudge theory: _____.",                                          answer: "Sunstein",  explanation: "Named in paragraph 3." },
          { id: 21, type: "mcq",  q: "In opt-out pension schemes, participation rates typically:",                          opts: ["A. Remain around 40%", "B. Drop below 40%", "C. Exceed 90%", "D. Reach 100%"], answer: "C", explanation: "Paragraph 3." },
          { id: 22, type: "fill", q: "Thaler won the Nobel Prize in _____.",                                                answer: "2017",      explanation: "Paragraph 4." },
          { id: 23, type: "tfng", q: "All laboratory behavioural findings have been confirmed in real-world settings.",    answer: "FALSE",     explanation: "Many 'have failed to replicate'." },
          { id: 24, type: "tfng", q: "Critics argue that nudging raises concerns about autonomy and paternalism.",         answer: "TRUE",      explanation: "Final paragraph." },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════
  // POOL C — Rewilding / Ageing Populations / Vaccination
  // ══════════════════════════════════════════════════════════
  {
    id: "AR-C",
    label: "Academic Reading Test C",
    passages: [
      {
        title: "Passage 1 – Rewilding: Restoring Nature at Scale",
        text: `Rewilding — the large-scale restoration of natural processes and ecosystems — has moved from the fringes of conservation to mainstream policy discussion with remarkable speed. Where traditional conservation focused on preserving specific species within defined boundaries, rewilding takes a different philosophy: restore the conditions for natural self-organisation and let nature do the work.

The concept gained significant scientific credibility from the reintroduction of wolves to Yellowstone National Park in 1995. The wolves' return triggered a trophic cascade — a chain of ecological effects flowing through the food web. Elk herds, which had overgrazed riverbanks, changed their behaviour under predation pressure. Vegetation recovered along riverbanks, stabilising stream banks and altering river hydrology. Beavers returned. Songbird populations grew. Even the rivers, it was claimed, moved differently.

The Yellowstone wolf story became enormously influential, perhaps too influential. Some ecologists argue that the popularised version oversimplifies by overstating the causal role of wolves and understating other factors, including reduced hunting pressure and climatic variation.

In Europe, rewilding is pursued through several major initiatives. Rewilding Europe, founded in 2011, aims to rewild one million hectares across the continent, working with local communities to develop wildlife tourism as economic alternatives to traditional farming. Species being reintroduced include the European bison, the Iberian lynx, and wild horses.

The most contested question is the role of large predators. In densely populated Europe, wolf reintroduction has generated intense conflict with farmers. Proponents argue conflicts can be managed through livestock protection measures and compensation schemes. Opponents argue predator reintroduction prioritises abstract ecological values over the concrete livelihoods of rural communities.`,
        questions: [
          { id: 1,  type: "tfng", q: "Traditional conservation and rewilding share the same philosophy.",               answer: "FALSE",     explanation: "The passage explicitly contrasts the two approaches." },
          { id: 2,  type: "fill", q: "Wolves were reintroduced to Yellowstone in _____.",                                answer: "1995",      explanation: "Paragraph 2." },
          { id: 3,  type: "fill", q: "A chain of ecological effects through a food web: a trophic _____.",              answer: "cascade",   explanation: "Defined in paragraph 2." },
          { id: 4,  type: "tfng", q: "All ecologists agree that wolves single-handedly changed Yellowstone's rivers.", answer: "FALSE",     explanation: "Paragraph 3 calls this an 'oversimplification'." },
          { id: 5,  type: "fill", q: "Rewilding Europe aims to rewild _____ hectares.",                                  answer: "1 million", explanation: "Paragraph 4." },
          { id: 6,  type: "mcq",  q: "Which is NOT mentioned as being reintroduced in Europe?",                          opts: ["A. European bison", "B. Iberian lynx", "C. Brown bear", "D. Wild horses"], answer: "C", explanation: "Brown bear is not mentioned." },
          { id: 7,  type: "tfng", q: "Farmers in Europe uniformly support wolf reintroduction.",                       answer: "FALSE",     explanation: "'Intense conflict with farmers' is described." },
        ],
      },
      {
        title: "Passage 2 – The Economics of Ageing Populations",
        text: `The demographic transition underway in high-income countries — from young, fast-growing populations to older, slower-growing ones — is one of the defining economic challenges of the twenty-first century. By 2050, the number of people aged sixty-five and over will outnumber children under fifteen for the first time in human history. Japan, furthest along this transition, already has more than twenty-nine percent of its population over sixty-five.

The primary economic concern is the old-age dependency ratio — the number of retirees relative to working-age adults. Post-war Western pension systems were designed around a ratio of roughly one retiree per five workers. As populations age, this ratio deteriorates. Japan's ratio is now approximately one to two and continuing to worsen, putting pressure on public finances.

Immigration is frequently proposed as a partial solution. Young working-age immigrants contribute to the tax base and restore more favourable dependency ratios. Canada and Germany have explicitly structured immigration policy partly for this reason. However, immigration alone cannot resolve a structural demographic shift — the scale required would be politically implausible in most democracies, and immigrants themselves eventually age.

Productivity growth is the more sustainable long-term solution. If each worker produces significantly more output — driven by automation, artificial intelligence, or better education — the economy can support more retirees without more workers. However, productivity gains must be deliberately distributed to fund pension obligations.

Ageing populations also create economic opportunities. The so-called "silver economy" — healthcare, assisted living, financial products for retirees, and leisure — is among the fastest-growing sector clusters in developed economies. Some economists argue an ageing population, properly planned for, is manageable and even transformative.`,
        questions: [
          { id: 8,  type: "fill", q: "By 2050, people aged 65+ will outnumber children under _____.",                   answer: "15",     explanation: "Paragraph 1." },
          { id: 9,  type: "fill", q: "Japan's current population over 65: more than _____% .",                          answer: "29",     explanation: "Paragraph 1." },
          { id: 10, type: "fill", q: "Post-war pension systems designed for approximately 1 retiree per _____ workers.", answer: "5",      explanation: "Paragraph 2." },
          { id: 11, type: "mcq",  q: "Japan's current old-age dependency ratio is approximately:",                       opts: ["A. 1 to 5", "B. 1 to 3", "C. 1 to 2", "D. 1 to 1"], answer: "C", explanation: "Paragraph 2." },
          { id: 12, type: "tfng", q: "Immigration alone can fully resolve ageing demographics in most countries.",      answer: "FALSE",  explanation: "'Cannot resolve a structural demographic shift' — paragraph 3." },
          { id: 13, type: "tfng", q: "Canada and Germany have used immigration policy partly to manage demographics.",  answer: "TRUE",   explanation: "Explicitly stated in paragraph 3." },
          { id: 14, type: "fill", q: "Sectors serving older populations are collectively called the _____ economy.",    answer: "silver", explanation: "Final paragraph." },
          { id: 15, type: "tfng", q: "All economists agree ageing populations will cause inevitable economic crisis.",  answer: "FALSE",  explanation: "Some see it as 'manageable and even transformative'." },
        ],
      },
      {
        title: "Passage 3 – The History and Science of Vaccination",
        text: `Vaccination is among the most effective public health interventions ever developed. It has eradicated smallpox — once one of humanity's most feared diseases — and brought polio, measles, and other devastating infections to the brink of elimination.

The principle was first demonstrated by Edward Jenner in 1796, when he inoculated eight-year-old James Phipps with material from a cowpox lesion and showed the boy was protected against smallpox. Jenner's insight — that deliberate exposure to a mild related infection could confer protection — was radical for its time. The word "vaccine" derives from the Latin "vacca" (cow), in recognition of Jenner's work.

The immune mechanisms were not understood until the twentieth century. Vaccines work by presenting the immune system with an antigen — a molecule triggering an immune response — without causing disease. The system produces antibodies and memory B and T cells. If vaccinated individuals subsequently encounter the actual pathogen, the immune system responds rapidly, typically preventing disease or reducing severity.

Vaccines vary in design. Live attenuated vaccines — for measles, mumps, and rubella — use weakened pathogen forms and generate robust, long-lasting immunity. Inactivated vaccines use killed pathogens and are generally safer but may require boosters. Subunit vaccines use purified pathogen pieces. The mRNA vaccines developed for COVID-19 represented a new platform, instructing the body's cells to produce an antigen — the spike protein — and generating an immune response.

Vaccine hesitancy — defined by the WHO as reluctance or refusal to vaccinate despite availability — has emerged as a major threat. Andrew Wakefield's 1998 Lancet paper falsely claiming a link between the MMR vaccine and autism has been thoroughly discredited and retracted, and Wakefield was struck off the medical register. Nevertheless, its impact on public trust persists decades later.`,
        questions: [
          { id: 16, type: "fill", q: "Jenner first demonstrated vaccination in _____.",                                  answer: "1796",      explanation: "Paragraph 2." },
          { id: 17, type: "fill", q: "The word 'vaccine' derives from the Latin word for _____.",                       answer: "cow",       explanation: "Paragraph 2." },
          { id: 18, type: "fill", q: "Vaccines present the immune system with an _____ to trigger a response.",         answer: "antigen",   explanation: "Paragraph 3." },
          { id: 19, type: "mcq",  q: "Which type uses a weakened form of the pathogen?",                                opts: ["A. Inactivated", "B. Subunit", "C. mRNA", "D. Live attenuated"], answer: "D", explanation: "Paragraph 4." },
          { id: 20, type: "fill", q: "mRNA vaccines instruct cells to produce an _____ to generate immunity.",          answer: "antigen",   explanation: "Paragraph 4." },
          { id: 21, type: "mcq",  q: "Wakefield's 1998 paper falsely claimed a link between MMR and:",                  opts: ["A. Polio", "B. Autism", "C. Smallpox", "D. Measles complications"], answer: "B", explanation: "Final paragraph." },
          { id: 22, type: "tfng", q: "Wakefield's 1998 paper has been accepted by the mainstream medical community.",  answer: "FALSE",     explanation: "'Thoroughly discredited and retracted'." },
          { id: 23, type: "tfng", q: "Inactivated vaccines may require booster doses.",                                answer: "TRUE",      explanation: "Stated in paragraph 4." },
          { id: 24, type: "tfng", q: "Smallpox has been completely eradicated.",                                       answer: "TRUE",      explanation: "Opening paragraph." },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════
  // POOL D — The Printing Press / Ocean Plastics / Social Media Algorithms
  // ══════════════════════════════════════════════════════════
  {
    id: "AR-D",
    label: "Academic Reading Test D",
    passages: [
      {
        title: "Passage 1 – Gutenberg and the Information Revolution",
        text: `Johannes Gutenberg's development of moveable-type printing in Europe around 1440 is frequently cited as one of the most consequential technological innovations in human history. Yet the full significance of the printing press was not immediately apparent — its revolutionary impact unfolded over decades and centuries, reshaping not just the dissemination of information but the very nature of knowledge, authority, and religious organisation.

Before the press, books were hand-copied, primarily by monks in monastery scriptoria. The process was slow, expensive, and inherently error-prone. A single Bible might take a skilled scribe a year to produce. Only wealthy institutions and individuals could accumulate substantial libraries. The intellectual life of medieval Europe was consequently characterised by limited circulation of ideas and a high degree of deference to established authority, particularly the Catholic Church.

Gutenberg's press dramatically reduced the cost of producing written material. By 1500, an estimated eight million books had been printed across Europe — more than had been produced by hand in all of Western history. This proliferation of text had profound consequences. It standardised spelling and grammar across European languages. It accelerated scientific exchange, as researchers could now share findings more rapidly. Crucially, it enabled the Protestant Reformation: Martin Luther's Ninety-Five Theses, published in 1517, spread across Germany within weeks in a way that would have been impossible without the press.

The press also had destabilising effects that its early adopters could not foresee. The democratisation of information threatened established gatekeepers of knowledge. The Catholic Church, which had previously controlled the reproduction and interpretation of religious texts, found its authority undermined. The Index Librorum Prohibitorum — the Church's list of forbidden books — was a direct response to the perceived dangers of uncontrolled printing.

Historians debate how much credit Gutenberg deserves personally. Moveable type had been developed independently in China and Korea centuries earlier, and several contemporaries contributed to the development of European printing technology. But Gutenberg's particular combination of innovations — including oil-based ink and a screw press adapted from winemaking — proved uniquely effective and spread rapidly across the continent.`,
        questions: [
          { id: 1,  type: "fill", q: "Gutenberg developed moveable-type printing in Europe around _____.",               answer: "1440",      explanation: "Paragraph 1." },
          { id: 2,  type: "tfng", q: "The printing press's impact was immediately apparent to contemporaries.",         answer: "FALSE",     explanation: "Paragraph 1 says it 'was not immediately apparent'." },
          { id: 3,  type: "fill", q: "Before printing, books were produced primarily by _____ in monastery scriptoria.", answer: "monks",     explanation: "Paragraph 2." },
          { id: 4,  type: "fill", q: "By 1500, an estimated _____ million books had been printed across Europe.",        answer: "8",         explanation: "Paragraph 3." },
          { id: 5,  type: "tfng", q: "The printing press standardised spelling and grammar across European languages.",  answer: "TRUE",      explanation: "Paragraph 3." },
          { id: 6,  type: "fill", q: "Luther's Ninety-Five Theses were published in _____.",                            answer: "1517",      explanation: "Paragraph 3." },
          { id: 7,  type: "fill", q: "The Church's list of forbidden books: the Index _____ Prohibitorum.",             answer: "Librorum",  explanation: "Paragraph 4." },
          { id: 8,  type: "tfng", q: "Moveable type was first developed in Europe.",                                   answer: "FALSE",     explanation: "Paragraph 5: 'had been developed in China and Korea centuries earlier'." },
          { id: 9,  type: "mcq",  q: "Gutenberg adapted his screw press from technology used in:",                      opts: ["A. Agriculture", "B. Winemaking", "C. Metalworking", "D. Weaving"], answer: "B", explanation: "Final paragraph." },
        ],
      },
      {
        title: "Passage 2 – Plastic Pollution in the World's Oceans",
        text: `Since the widespread adoption of synthetic plastics in the mid-twentieth century, plastic waste has accumulated in marine environments at an accelerating rate. Current estimates suggest that between eight and twelve million metric tonnes of plastic enter the ocean each year — equivalent to a rubbish truck's worth of plastic being dumped every minute. The long-term consequences for marine ecosystems, human health, and the global economy are increasingly well-documented.

Plastic in the ocean does not biodegrade in the conventional sense. Under ultraviolet radiation and mechanical wave action, it breaks down into progressively smaller fragments known as microplastics — particles smaller than five millimetres. These microplastics have now been detected in virtually every marine environment studied, from Arctic ice to the deepest ocean trenches, and in the bodies of organisms from zooplankton to large marine mammals.

The ecological impacts are diverse. Marine animals mistake plastic for prey, filling their stomachs with indigestible material and reducing food intake. Entanglement in plastic debris — particularly discarded fishing nets, known as ghost gear — causes injury, drowning, and death across dozens of species, including sea turtles, dolphins, and seabirds. Chemical additives leached from plastics, including bisphenol A and phthalates, act as endocrine disruptors in marine organisms, interfering with hormonal function and reproduction.

The economic costs are substantial. The United Nations Environment Programme estimated that marine plastic pollution costs the global economy between thirteen and twenty-two billion US dollars annually through impacts on tourism, fisheries, and aquaculture. Cleanup operations, though necessary, address symptoms rather than causes, and even the most ambitious ocean cleanup technologies can only intercept a fraction of incoming waste.

The most effective solutions operate at source. Producer responsibility schemes, extended to hold manufacturers financially accountable for the end-of-life disposal of their products, have shown promise in several jurisdictions. Single-use plastic bans have reduced pollution in targeted categories. Improved waste management infrastructure in lower-income countries — where land-based leakage of plastic to waterways is highest — offers the greatest potential impact per dollar invested.`,
        questions: [
          { id: 10, type: "fill", q: "Plastic entering the ocean each year: between 8 and _____ million metric tonnes.",   answer: "12",           explanation: "Paragraph 1." },
          { id: 11, type: "fill", q: "Microplastics are defined as particles smaller than _____ millimetres.",            answer: "5",            explanation: "Paragraph 2." },
          { id: 12, type: "tfng", q: "Microplastics have only been found in warm-water marine environments.",            answer: "FALSE",         explanation: "'Virtually every marine environment studied, from Arctic ice to deepest trenches'." },
          { id: 13, type: "fill", q: "Discarded fishing nets are referred to as _____ gear.",                             answer: "ghost",         explanation: "Paragraph 3." },
          { id: 14, type: "mcq",  q: "Bisphenol A and phthalates act as:",                                               opts: ["A. Nutrients for marine animals", "B. Endocrine disruptors", "C. Microplastic sources", "D. UV absorbers"], answer: "B", explanation: "Paragraph 3." },
          { id: 15, type: "fill", q: "UN estimate of marine plastic pollution cost to global economy: $_____ to 22bn pa.", answer: "13",           explanation: "Paragraph 4." },
          { id: 16, type: "tfng", q: "Ocean cleanup technologies can intercept all incoming plastic waste.",             answer: "FALSE",         explanation: "'Only a fraction of incoming waste'." },
          { id: 17, type: "mcq",  q: "Where does greatest potential impact per dollar invested lie?",                    opts: ["A. Ocean cleanup technology", "B. Single-use plastic bans", "C. Waste management in lower-income countries", "D. Producer responsibility in wealthy nations"], answer: "C", explanation: "Final paragraph." },
        ],
      },
      {
        title: "Passage 3 – How Social Media Algorithms Shape What We See",
        text: `The algorithms that govern what content appears in social media feeds are among the most consequential pieces of software in the modern world. They determine which news stories, opinions, products, and social connections are surfaced to billions of users daily, shaping public discourse, purchasing behaviour, political attitudes, and mental health in ways that are only partially understood.

At the core of most major social media platforms is a recommendation system optimised for engagement — broadly defined as the actions users take on content, including likes, shares, comments, and time spent viewing. Engagement-optimised systems have consistently shown a tendency to amplify emotionally provocative content, because such content generates more user reactions. Research at Meta found that content triggering outrage reactions was shared significantly more than content provoking other emotions.

The consequence most discussed in public debate is the filter bubble or echo chamber: the tendency for algorithms to serve users content that confirms their existing beliefs, progressively narrowing the range of perspectives they encounter. Some researchers have questioned whether filter bubbles are as pervasive as popularly assumed — studies have found that social media users often encounter more cross-cutting political content than consumers of traditional media. The debate remains active.

Less contested is the connection between social media use and mental health outcomes, particularly among adolescents. Longitudinal studies have consistently found associations between heavy social media use and elevated rates of anxiety, depression, and low self-esteem, particularly in girls. The mechanisms proposed include social comparison, exposure to cyberbullying, and disruption to sleep patterns from evening screen time. However, establishing causality is methodologically challenging, and the effect sizes found in many studies are modest.

Regulatory responses have accelerated. The European Union's Digital Services Act, in force from 2024, requires very large online platforms to conduct annual risk assessments of their algorithmic systems and to offer users a non-algorithmic, chronological feed. Whether these measures will meaningfully alter the dynamics of algorithmic amplification remains to be seen.`,
        questions: [
          { id: 18, type: "fill", q: "Most social media recommendation systems are optimised for _____.",                  answer: "engagement",  explanation: "Paragraph 2." },
          { id: 19, type: "tfng", q: "Content provoking outrage reactions is shared less than other content.",           answer: "FALSE",       explanation: "'Shared significantly more'." },
          { id: 20, type: "fill", q: "The tendency for algorithms to confirm users' existing beliefs is called a filter _____ or echo chamber.", answer: "bubble", explanation: "Paragraph 3." },
          { id: 21, type: "tfng", q: "All researchers agree that filter bubbles are highly pervasive among social media users.", answer: "NOT GIVEN", explanation: "Some question this — 'debate remains active'." },
          { id: 22, type: "mcq",  q: "Longitudinal studies found heaviest associations with anxiety and depression in:", opts: ["A. Boys", "B. Girls", "C. Adults over 30", "D. Elderly users"], answer: "B", explanation: "Paragraph 4." },
          { id: 23, type: "mcq",  q: "The EU's Digital Services Act requires platforms to offer users:",                 opts: ["A. Content warnings on all posts", "B. A non-algorithmic chronological feed", "C. Reduced advertising", "D. Data portability"], answer: "B", explanation: "Final paragraph." },
          { id: 24, type: "fill", q: "The EU Digital Services Act came into force in _____.",                            answer: "2024",        explanation: "Final paragraph." },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════
  // POOL E — Sleep Science / The Silk Road / Urban Agriculture
  // ══════════════════════════════════════════════════════════
  {
    id: "AR-E",
    label: "Academic Reading Test E",
    passages: [
      {
        title: "Passage 1 – The Science of Sleep",
        text: `Sleep is not a passive state of unconsciousness but an active and highly regulated biological process essential for physical restoration, memory consolidation, immune function, and emotional regulation. Despite spending approximately a third of their lives asleep, humans remained largely ignorant of sleep's functions until the late twentieth century.

The architecture of sleep is divided into two main types: rapid eye movement (REM) sleep and non-REM sleep. Non-REM sleep is itself subdivided into three stages, progressing from light to deep sleep. Deep non-REM sleep — also called slow-wave sleep — is characterised by large, synchronised electrical oscillations in the brain. This stage is when the body repairs tissue, consolidates declarative memories (facts and experiences), and releases growth hormone. REM sleep, by contrast, is associated with vivid dreaming, emotional processing, and the consolidation of procedural memories — the "how to" knowledge of skills and habits.

Adults cycle through these stages approximately every ninety minutes, typically experiencing four to five complete cycles per night. The proportion of slow-wave sleep is highest in the first half of the night; REM sleep predominates in the second half. This has practical implications: cutting sleep short disproportionately curtails REM sleep.

The consequences of insufficient sleep are extensive and well-documented. Cognitive performance — attention, reaction time, working memory, and decision-making — degrades measurably after even a single night of restricted sleep. Metabolic effects include elevated blood glucose and increased appetite, particularly for high-calorie foods. Immune function is compromised: one study found that individuals sleeping fewer than six hours per night were four times more likely to develop a cold when exposed to the virus compared to those sleeping seven or more hours.

The optimal sleep duration for adults is generally considered to be seven to nine hours per night, though genetic variants can shift individual requirements significantly. Short sleepers — individuals who genuinely function well on six hours due to a genetic mutation in the DEC2 gene — are rare, estimated at less than one percent of the population.`,
        questions: [
          { id: 1,  type: "tfng", q: "Sleep is a passive state of unconsciousness.",                                    answer: "FALSE",     explanation: "Opening sentence: 'not a passive state'." },
          { id: 2,  type: "fill", q: "Deep non-REM sleep is also called _____ -wave sleep.",                            answer: "slow",      explanation: "Paragraph 2." },
          { id: 3,  type: "fill", q: "Growth hormone is released during _____ sleep.",                                  answer: "slow-wave", explanation: "Paragraph 2 states this occurs in deep non-REM sleep." },
          { id: 4,  type: "fill", q: "REM sleep is associated with emotional processing and _____ memory consolidation.", answer: "procedural", explanation: "Paragraph 2." },
          { id: 5,  type: "fill", q: "Adults cycle through sleep stages approximately every _____ minutes.",             answer: "90",        explanation: "Paragraph 3." },
          { id: 6,  type: "tfng", q: "Cutting sleep short disproportionately curtails slow-wave sleep.",               answer: "FALSE",     explanation: "It disproportionately curtails REM, which predominates in the second half of the night." },
          { id: 7,  type: "fill", q: "People sleeping under 6 hours were _____ times more likely to develop a cold.",   answer: "4",         explanation: "Paragraph 4." },
          { id: 8,  type: "mcq",  q: "True 'short sleepers' who function well on six hours are estimated at:",          opts: ["A. Less than 1%", "B. About 5%", "C. Around 10%", "D. More than 15%"], answer: "A", explanation: "Final paragraph." },
          { id: 9,  type: "fill", q: "The genetic variant linked to being a genuine short sleeper: the _____ gene.",    answer: "DEC2",      explanation: "Final paragraph." },
        ],
      },
      {
        title: "Passage 2 – The Silk Road: Trade, Ideas, and Disease",
        text: `The Silk Road — the network of overland and maritime trade routes connecting China with Central Asia, the Middle East, and Europe — was not a single road but a shifting web of paths that expanded and contracted over more than a millennium. At its height, during the Tang Dynasty in China (618–907 CE) and again under the Mongol Empire (13th–14th centuries), goods, people, technologies, and ideas flowed across Eurasia with a reach that would not be matched until the age of European maritime expansion.

Silk itself was only one of many commodities traded. From China came porcelain, paper, and gunpowder. From Central Asia came horses, cotton, and glassware. From the west came gold, wine, and wool. The exchange was not merely material: Buddhism spread from India into Central Asia and China along these routes; Islam followed trade networks westward and eastward; printing and paper technologies migrated from China to the Islamic world and eventually to Europe, where they contributed to the development of Gutenberg's press.

The Mongol Empire's political unification of a vast territory from China to Eastern Europe in the thirteenth century created what historians call the Pax Mongolica — a period of relative stability and safe passage that dramatically increased the volume of long-distance trade and cultural exchange. European travellers, most famously Marco Polo, were able to journey to the Far East and return with accounts that transformed European conceptions of Asia.

The Silk Road, however, was also a vector for disease. The Black Death — caused by the bacterium Yersinia pestis — is believed to have spread westward along Central Asian trade routes in the 1340s, reaching the Crimea in 1346 and Western Europe by 1347. The pandemic killed an estimated thirty to sixty percent of Europe's population within a decade — one of the deadliest events in human history.

The concept of the Silk Road itself is a nineteenth-century scholarly construction. The term was coined by German geographer Ferdinand von Richthofen in 1877. Ancient traders had no such overarching concept — they operated on specific regional routes and passed goods between intermediary merchants, rarely travelling the full distance themselves.`,
        questions: [
          { id: 10, type: "tfng", q: "The Silk Road was a single well-defined route from China to Europe.",              answer: "FALSE",     explanation: "'Not a single road' — paragraph 1." },
          { id: 11, type: "fill", q: "The Tang Dynasty in China: _____ to 907 CE.",                                     answer: "618",       explanation: "Paragraph 1." },
          { id: 12, type: "tfng", q: "Paper and printing technology remained confined to China throughout the Silk Road era.", answer: "FALSE", explanation: "Paragraph 2: they migrated westward." },
          { id: 13, type: "fill", q: "The period of Mongol political unification and safe passage: the Pax _____.",      answer: "Mongolica", explanation: "Paragraph 3." },
          { id: 14, type: "mcq",  q: "The Black Death was caused by:",                                                   opts: ["A. A virus", "B. A fungus", "C. The bacterium Yersinia pestis", "D. A prion"], answer: "C", explanation: "Paragraph 4." },
          { id: 15, type: "fill", q: "The Black Death reached Western Europe by _____.",                                  answer: "1347",      explanation: "Paragraph 4." },
          { id: 16, type: "fill", q: "The term 'Silk Road' was coined by _____ in 1877.",                                answer: "von Richthofen", explanation: "Final paragraph." },
          { id: 17, type: "tfng", q: "Ancient traders typically travelled the full length of the Silk Road themselves.", answer: "FALSE",    explanation: "'Rarely travelling the full distance themselves'." },
        ],
      },
      {
        title: "Passage 3 – Urban Agriculture: Feeding the City of the Future",
        text: `As global urbanisation accelerates — the United Nations projects that sixty-eight percent of the world's population will live in urban areas by 2050 — cities face growing pressure to reconfigure their food systems. Urban agriculture, encompassing a range of practices from rooftop gardens and vertical farms to community allotments and aquaponic systems, is increasingly proposed as part of the solution to urban food insecurity, environmental sustainability, and community resilience.

Urban agriculture is not a new phenomenon. Cities throughout history have produced food within their boundaries — the traditional market gardens of Paris's banlieues, the wartime 'Dig for Victory' allotments of Britain, and the extensive urban food production of Havana, which emerged from necessity after the collapse of Soviet food subsidies in the early 1990s and now supplies a significant proportion of the city's vegetables. What is new is the technological sophistication and scale of ambition with which urban farming is now being pursued.

Vertical farming — growing crops in stacked, climate-controlled indoor layers under artificial lighting — has attracted substantial investment over the past decade. Proponents argue that it eliminates the need for pesticides, dramatically reduces water use compared to conventional agriculture (by up to ninety percent through recirculating systems), and enables year-round production regardless of climate. Critics note that the energy costs of artificial lighting remain substantial and, unless powered by renewables, may produce a higher carbon footprint per kilogram of food than conventional farming.

The social dimensions of urban agriculture are as important as the technical ones. Community gardens in dense urban environments have been shown to improve social cohesion, provide access to fresh food in areas with limited supermarket access (often called food deserts), and offer therapeutic benefits — spending time growing food has been linked to reduced stress and improved mental health outcomes in multiple studies.

The limitations are real. Urban agriculture cannot, at current scales, feed a major city. Land scarcity in dense urban environments, the energy intensity of controlled-environment agriculture, and the relatively narrow range of crops that can be produced economically at scale mean that urban agriculture is best understood as a complement to, rather than a replacement for, conventional food systems.`,
        questions: [
          { id: 18, type: "fill", q: "UN projects _____% of the global population will be urban by 2050.",               answer: "68",        explanation: "Paragraph 1." },
          { id: 19, type: "tfng", q: "Urban agriculture is an entirely new phenomenon.",                                 answer: "FALSE",     explanation: "'Not a new phenomenon' — paragraph 2." },
          { id: 20, type: "fill", q: "Havana's urban food production emerged after the collapse of _____ food subsidies.", answer: "Soviet",   explanation: "Paragraph 2." },
          { id: 21, type: "fill", q: "Vertical farming can reduce water use by up to _____% through recirculating systems.", answer: "90",     explanation: "Paragraph 3." },
          { id: 22, type: "tfng", q: "Vertical farming eliminates carbon footprint concerns entirely.",                  answer: "FALSE",     explanation: "Critics note high energy costs — 'may produce a higher carbon footprint' unless powered by renewables." },
          { id: 23, type: "fill", q: "Urban areas with limited supermarket access are often called food _____.",          answer: "deserts",   explanation: "Paragraph 4." },
          { id: 24, type: "mcq",  q: "The passage's conclusion about urban agriculture is that it is:",                  opts: ["A. A full replacement for conventional farming", "B. Currently unable to feed a major city at scale", "C. Too expensive to pursue", "D. Primarily a social initiative"], answer: "B", explanation: "Final paragraph." },
        ],
      },
    ],
  },
];

/** Returns one random Academic Reading test pool */
export function getAcademicReadingTest(): AcademicReadingTest {
  return pickRandom(ACADEMIC_READING_POOLS);
}