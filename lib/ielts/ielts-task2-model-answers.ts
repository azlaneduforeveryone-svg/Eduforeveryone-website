// lib/ielts-task2-model-answers.ts
// Additive content for the individual IELTS Writing Task 2 (essay) prompt pages
// (/ielts/writing/task-2/[slug]). Maps each Task 2 prompt id (from the existing
// task2Pool in ielts-writing-data.ts — NOT modified) to a URL slug, a short topic
// label, and a sample Band 8 model answer.
//
// ⚠️ MODEL ANSWERS PENDING AZLAN'S REVIEW BEFORE DEPLOY. Written by EduForEveryone as
// study guidance, not examiner-authored, and labelled as such on-page.

import type { WritingModelAnswer } from "./ielts-writing-model-answers";

export const TASK2_MODEL_ANSWERS: WritingModelAnswer[] = [
  {
    id: "T2-A",
    slug: "essay-free-university-education",
    topic: "Free University Education",
    modelAnswer:
      "It is sometimes argued that higher education should be entirely state-funded, while others maintain that students ought to contribute towards their own tuition. This essay will consider both positions before concluding that a balanced, means-tested system is preferable.\n\nThose who favour free university education emphasise equality of opportunity. When tuition is funded by the government, talented students from poorer backgrounds are not deterred by debt, allowing society to benefit from their potential. Moreover, a highly educated population tends to drive economic growth and innovation, so the investment arguably repays itself through higher tax revenues and a more skilled workforce.\n\nOn the other hand, supporters of tuition fees point to financial sustainability. Universities are expensive to run, and funding them entirely from taxation places a heavy burden on citizens who may never attend. It can also be argued that graduates earn considerably more over their lifetimes, so it is only fair that they contribute towards a qualification from which they personally profit.\n\nIn my view, both arguments have merit, and the ideal solution lies between the two extremes. Education should not be a privilege reserved for the wealthy, but nor is it reasonable to expect taxpayers to bear the entire cost. A system in which fees are charged but generous, means-tested support is available to those who need it would, I believe, achieve both fairness and sustainability.",
  },
  {
    id: "T2-B",
    slug: "essay-living-alone-trend",
    topic: "The Rise of Living Alone",
    modelAnswer:
      "In many parts of the world, a growing number of individuals are choosing to live by themselves. This essay will examine the reasons behind this trend and argue that, despite some drawbacks, it is largely a positive development.\n\nSeveral factors explain the rise in single-person households. Rising incomes and greater financial independence, particularly among women, mean that more people can now afford to live alone rather than remaining with family. In addition, social attitudes have shifted: marrying later or not at all no longer carries the stigma it once did. Rapid urbanisation has also created large numbers of jobs in cities that attract young, mobile professionals who value their independence.\n\nIn my opinion, this trend is mostly beneficial. Living alone allows people to enjoy a high degree of freedom, to organise their time and space exactly as they wish, and to develop self-reliance. It can also reduce the daily conflicts that sometimes arise in shared households. Admittedly, there are downsides — most notably the risk of loneliness and the higher cost of running a household alone — but these can usually be managed through an active social life.\n\nTo conclude, the increase in people living alone stems mainly from greater prosperity and changing social norms. While isolation is a genuine concern, the independence and personal freedom that solo living offers make it, on balance, a positive reflection of modern society.",
  },
  {
    id: "T2-C",
    slug: "essay-traffic-congestion",
    topic: "Traffic Congestion in Cities",
    modelAnswer:
      "Traffic congestion has become a daily frustration in cities across the globe. This essay will outline the principal causes of the problem and suggest practical measures that both governments and individuals can take to ease it.\n\nThe most significant cause is the overwhelming reliance on private cars. As incomes rise, car ownership increases, yet road networks rarely expand at the same pace. This is compounded by inadequate public transport, which leaves commuters with little alternative, and by rapid, poorly planned urban growth that places homes far from workplaces.\n\nA range of solutions could reduce congestion. Governments should invest heavily in fast, affordable public transport such as metro systems and bus networks, giving people a genuine alternative to driving. Measures like congestion charging in city centres, as introduced in London, also discourage unnecessary car journeys, while dedicated cycle lanes promote greener travel. Individuals, too, have a part to play: car-sharing, working from home where possible, and staggering commuting hours can all help to spread demand and cut the number of vehicles on the road.\n\nIn conclusion, traffic congestion arises chiefly from excessive car use and weak public transport. Tackling it will require coordinated action — substantial government investment alongside more responsible travel choices by individuals. With both working together, the problem can be considerably reduced.",
  },
  {
    id: "T2-D",
    slug: "essay-children-screen-time",
    topic: "Children and Screen Time",
    modelAnswer:
      "Children today devote an enormous amount of time to smartphones and similar devices. This essay will explore why this happens and argue that, despite some benefits, the trend is largely negative for society.\n\nThere are several reasons for this behaviour. Digital devices offer endless, instantly accessible entertainment through games, videos, and social media, which children find far more stimulating than traditional pastimes. Furthermore, many busy parents use screens as a convenient way to keep children occupied, effectively turning devices into a form of digital childcare.\n\nWhile there are some advantages — children develop digital literacy and gain access to a wealth of educational content — I believe the negatives outweigh them. Excessive screen use is linked to reduced physical activity and rising obesity, disrupted sleep, and shortened attention spans. Heavy use of social media can also expose children to cyberbullying and harm their developing social skills, as time online replaces face-to-face interaction.\n\nIn conclusion, children spend so long on devices mainly because of their addictive entertainment value and their use as a parenting aid. Although such technology is not without educational merit, its impact on children's health and development makes it, on balance, a worrying trend that parents and schools should actively manage.",
  },
  {
    id: "T2-E",
    slug: "essay-permanent-working-from-home",
    topic: "Permanent Working From Home",
    modelAnswer:
      "An increasing number of companies now permit staff to work from home on a permanent basis. This essay will examine the advantages and disadvantages of this arrangement for both employees and employers.\n\nFor employees, the benefits are considerable. Eliminating the daily commute saves time and money and reduces stress, while flexible working often improves the balance between professional and personal life. Employers also gain: they can reduce expensive office space, recruit talented people regardless of location, and, for certain roles, benefit from higher productivity as staff face fewer office distractions.\n\nHowever, there are clear drawbacks. Employees may feel isolated without daily contact with colleagues, and the boundary between work and home life can become blurred, leading to longer hours and burnout. From the employer's perspective, remote teams are harder to supervise and coordinate, spontaneous collaboration suffers, and sensitive company data may be more vulnerable when accessed from home networks.\n\nIn conclusion, permanent home working offers genuine advantages in cost, flexibility, and access to talent, but it also brings challenges relating to isolation, management, and security. On balance, I believe a hybrid model, combining home and office work, allows both employees and employers to enjoy the benefits while minimising the drawbacks.",
  },
  {
    id: "T2-F",
    slug: "essay-technology-modern-life",
    topic: "Technology and Modern Life",
    modelAnswer:
      "Opinions are divided over the impact of technology on daily life: some feel it has made existence more complicated, whereas others insist it has made everything simpler. This essay will discuss both perspectives before giving my own view.\n\nOn the one hand, technology has undeniably added new complexities. People are now bombarded with information and expected to be constantly available through email and messaging, which can be exhausting. Each new device or application must be learned, updated, and protected against security threats, creating stress that previous generations never experienced.\n\nOn the other hand, technology has removed a great deal of everyday difficulty. Tasks that once consumed hours — paying bills, shopping, or contacting distant relatives — can now be completed in minutes through online banking, e-commerce, and video calls. The automation of household chores and instant access to information have arguably given people more free time and convenience than ever before.\n\nIn my opinion, technology itself is neutral; its effect depends largely on how it is used. Those who allow notifications to dominate their lives will indeed find things more complicated, whereas those who use technology selectively can simplify countless tasks. On balance, I believe that, used wisely, technology makes modern life considerably easier.",
  },
  {
    id: "T2-G",
    slug: "essay-individuals-and-the-environment",
    topic: "Individuals and the Environment",
    modelAnswer:
      "It is sometimes claimed that ordinary individuals can do little to protect the environment and that the real responsibility lies with governments and large corporations. While I agree that systemic actors are decisive, I disagree that individual action is insignificant.\n\nThere is much truth in the view that governments and corporations hold the greatest power. Only governments can pass and enforce environmental laws, set emissions standards, and invest in clean infrastructure such as renewable energy and public transport. Likewise, large industries are responsible for a substantial share of global pollution, so changes to their practices have a far greater impact than anything a single household could achieve.\n\nNevertheless, I do not accept that individuals are powerless. Collectively, the choices of millions of consumers shape what companies produce; rising demand for recycled goods and electric vehicles, for example, has pushed entire industries to adapt. Individuals also influence policy through how they vote and the causes they support, while everyday habits such as reducing waste and saving energy add up significantly when adopted widely.\n\nIn conclusion, although governments and corporations must lead the fight against environmental damage because of their unique scale and authority, individual action remains an important complement. Real progress, in my view, depends on the two working together rather than one replacing the other.",
  },
  {
    id: "T2-H",
    slug: "essay-longer-prison-sentences",
    topic: "Longer Prison Sentences",
    modelAnswer:
      "Some people argue that the most effective way to cut crime is to impose longer prison sentences, while others believe alternative approaches work better. I largely disagree that lengthy sentences are the best solution.\n\nAdmittedly, there is some logic to harsher punishment. Longer sentences keep dangerous offenders off the streets, may deter potential criminals through fear of consequences, and reassure the public that justice is being done. For violent or repeat offenders, imprisonment is clearly necessary to protect society.\n\nHowever, evidence suggests that simply locking people away for longer does little to reduce crime in the long term. Many offenders reoffend after release, partly because prison rarely addresses the root causes of criminal behaviour. Approaches that tackle these causes — improving education, reducing poverty and unemployment, and offering rehabilitation and drug treatment — are often far more effective and considerably cheaper. Early intervention with at-risk young people, in particular, can prevent criminal careers before they begin.\n\nIn conclusion, while longer sentences have a place for the most serious offenders, I believe they are not the best general strategy for reducing crime. Addressing the social conditions that drive people to offend, together with proper rehabilitation, offers a more lasting and cost-effective solution.",
  },
  {
    id: "T2-I",
    slug: "essay-rising-obesity",
    topic: "Rising Obesity",
    modelAnswer:
      "In many countries, an ever-larger proportion of the population is overweight. This essay will examine the main causes of this trend and propose measures to address it.\n\nTwo causes stand out. First, modern lifestyles have become increasingly sedentary: people drive rather than walk, work at desks, and spend their leisure time in front of screens. Second, diets have deteriorated, as cheap, calorie-dense processed foods and oversized portions have become the norm, while busy schedules leave little time to prepare healthy meals at home.\n\nBoth governments and individuals can respond. Governments could regulate the advertising of junk food, particularly to children, introduce taxes on sugary products, and fund public-health campaigns promoting exercise and nutrition. Designing towns and cities to encourage walking and cycling would also help. At the individual level, people need to take responsibility for their own health by choosing balanced diets, cooking at home, and exercising regularly. Schools have a vital role in instilling these habits from an early age.\n\nIn conclusion, rising obesity is driven mainly by inactive lifestyles and poor diet. Tackling it effectively will require a combination of government regulation and personal responsibility. If both act together, the worrying upward trend in obesity can realistically be reversed.",
  },
  {
    id: "T2-J",
    slug: "essay-choosing-to-stay-single",
    topic: "Choosing to Stay Single",
    modelAnswer:
      "In recent years, a growing number of people have chosen to remain single rather than marry. This essay will consider why this is happening and argue that, overall, it is a positive development for individuals, even if it carries some risks for society.\n\nSeveral factors lie behind this shift. Greater financial independence, especially among women who now enjoy strong career prospects, means that marriage is no longer an economic necessity. Social attitudes have also changed, so remaining single is widely accepted rather than frowned upon. Many people, moreover, prefer to focus on their careers and personal goals, and some are deterred by the high cost and perceived risks of marriage.\n\nIn my view, this trend is largely positive at the individual level. People are free to shape their own lives, to avoid unhappy or pressured marriages, and to pursue personal fulfilment. That said, there are wider concerns: falling marriage rates contribute to declining birth rates and may weaken the traditional family networks that support people in old age.\n\nIn conclusion, the rise in single living results mainly from financial independence and more liberal social attitudes. Although it poses some demographic challenges for society, I believe the freedom and self-determination it gives individuals make it, on the whole, a welcome development.",
  },
  {
    id: "T2-K",
    slug: "essay-studying-abroad",
    topic: "Studying Abroad",
    modelAnswer:
      "It is increasingly common for students to pursue university degrees overseas rather than at home. This essay will argue that, for most students, the advantages of studying abroad clearly outweigh the disadvantages.\n\nThe benefits are substantial. Studying abroad often gives access to higher-quality universities and facilities than may be available at home, enhancing a student's education and career prospects. Living in a foreign country also develops invaluable life skills: students become independent, learn to adapt to new cultures, and frequently improve their command of another language. Such experiences are highly attractive to employers in an increasingly global job market.\n\nThere are, of course, drawbacks. International tuition fees and living costs are high, placing a heavy financial burden on families. Students may also suffer from homesickness and isolation, and adjusting to a different language and culture can be stressful. From a national perspective, there is the risk of a \"brain drain\" if talented graduates choose not to return home.\n\nIn conclusion, although studying abroad is expensive and emotionally challenging, the educational, personal, and professional gains are considerable. Provided a student is well prepared and adequately funded, I firmly believe the advantages outweigh the disadvantages.",
  },
  {
    id: "T2-L",
    slug: "essay-school-starting-age",
    topic: "School Starting Age",
    modelAnswer:
      "There is ongoing debate about the ideal age for children to begin formal schooling, with some favouring a very early start and others believing children should not begin until at least the age of seven. This essay will discuss both views before giving my own.\n\nThose in favour of an early start argue that young children's minds are highly receptive, so beginning literacy and numeracy early gives them a strong foundation. Formal schooling also provides routine and valuable opportunities to develop social skills, and it offers practical support to working parents who would otherwise struggle with childcare.\n\nOthers contend that children learn best through play in their early years and are not developmentally ready for formal instruction until later. Countries such as Finland, where school begins at seven, achieve excellent educational results, suggesting that a later start does no harm. Pushing children into academic work too soon, this view holds, can cause unnecessary stress and discourage a love of learning.\n\nIn my opinion, while early socialisation is beneficial, the emphasis before the age of six or seven should be on play-based rather than formal academic learning. A gentle, gradual introduction that respects children's developmental readiness, I believe, produces the best long-term results.",
  },
  {
    id: "T2-M",
    slug: "essay-social-networking-impact",
    topic: "Social Networking's Impact",
    modelAnswer:
      "It is often claimed that social networking sites have had a hugely damaging effect on individuals and society alike. While I acknowledge their serious drawbacks, I only partly agree with this strongly negative assessment.\n\nThere is no doubt that social media has caused real harm. Constant comparison with others and the pursuit of \"likes\" have been linked to anxiety and low self-esteem, particularly among young people. These platforms also spread misinformation rapidly, raise privacy concerns, and can become addictive, reducing the amount of meaningful face-to-face interaction in people's lives.\n\nNevertheless, it would be unfair to ignore the considerable benefits. Social networking allows people to stay in touch with friends and family across vast distances, and it has become a powerful tool for sharing information, organising communities, and giving a voice to social causes. For many small businesses, these platforms are also an affordable and effective means of reaching customers.\n\nIn conclusion, although I agree that social media carries significant risks to mental health and social cohesion, I do not believe its impact is wholly negative. The technology itself is not the problem; rather, the outcome depends on how responsibly individuals and societies choose to use it.",
  },
  {
    id: "T2-N",
    slug: "essay-urban-wealth-gap",
    topic: "The Urban Wealth Gap",
    modelAnswer:
      "In many large cities, the divide between rich and poor is growing ever wider. This essay will examine the problems this creates and suggest measures that could help to address them.\n\nA widening wealth gap causes a range of serious problems. It often leads to social tension and higher crime rates, as those who feel excluded from prosperity grow resentful. It also produces unequal access to essential services: wealthy residents enjoy good schools and healthcare, while poorer communities are left behind, entrenching disadvantage across generations and reducing social mobility. Cities can even become physically segregated, with affluent and deprived districts existing side by side.\n\nSeveral measures could narrow the gap. Governments can adopt progressive taxation, using revenue from the wealthy to fund services for the poor. Investing in affordable housing and high-quality public education gives disadvantaged residents a genuine chance to improve their circumstances. A fair minimum wage and support for small businesses can also help low earners share more fully in a city's economic success.\n\nIn conclusion, the growing gap between rich and poor in cities threatens social stability and fairness. Through progressive taxation, investment in public services, and policies that raise low incomes, however, governments can do much to create more balanced and cohesive urban societies.",
  },
  {
    id: "T2-O",
    slug: "essay-feeling-unsafe",
    topic: "Feeling Unsafe",
    modelAnswer:
      "Many people today report feeling unsafe both in their own homes and in public. This essay will examine the causes of this growing sense of insecurity and suggest what might be done to help people feel safer.\n\nThere are several explanations. The media plays a major role: rolling news and social media constantly highlight crime and disaster, creating the impression that danger is everywhere, even where crime is actually falling. In some areas, genuine increases in certain crimes contribute to the fear. The decline of close-knit communities, in which neighbours once looked out for one another, has also left people feeling more isolated and vulnerable, as have new threats such as online fraud.\n\nA number of steps could improve matters. Visible community policing reassures the public and deters offenders, while better street lighting and well-designed public spaces reduce opportunities for crime. Rebuilding a sense of community, through local events and neighbourhood groups, helps people feel supported. Finally, more responsible and balanced reporting by the media would help to align people's fears with the actual level of risk.\n\nIn conclusion, feelings of insecurity arise from a mixture of media influence, real crime, and weakened community ties. Through effective policing, thoughtful urban design, stronger communities, and responsible journalism, society can help people feel genuinely safer.",
  },
  {
    id: "T2-P",
    slug: "essay-living-in-large-cities",
    topic: "Living in Large Cities",
    modelAnswer:
      "In a number of countries, growing numbers of people are leaving the countryside to settle in large cities. This essay will consider the advantages and disadvantages of this trend.\n\nUrban migration brings clear benefits. Cities offer far more employment opportunities and generally higher wages than rural areas, along with superior infrastructure such as hospitals, schools, and public transport. They also provide a wealth of cultural and social opportunities, from universities to entertainment, which can greatly enrich people's lives and broaden their horizons.\n\nHowever, the trend has significant downsides. As populations swell, cities suffer from overcrowding, traffic congestion, and a shortage of affordable housing, which drives up the cost of living. Pollution and the fast pace of urban life can also harm residents' physical and mental health. Meanwhile, the countryside is left with an ageing, shrinking population, and rural communities and services gradually decline.\n\nIn conclusion, while the move to large cities offers individuals better jobs, services, and opportunities, it also brings overcrowding, high costs, and rural decline. In my view, these problems are serious but manageable, provided governments invest in urban planning and do not neglect the development of rural regions.",
  },
  {
    id: "T2-Q",
    slug: "essay-public-services-vs-the-arts",
    topic: "Public Services vs the Arts",
    modelAnswer:
      "There is disagreement over how governments should allocate public money: some argue it should go towards public services and infrastructure, while others believe the arts deserve investment too. This essay will discuss both views before giving my opinion.\n\nThose who prioritise public services make a compelling case. Spending on healthcare, transport, and education meets people's most basic and essential needs and benefits the entire population directly. In countries where many citizens still lack adequate hospitals or schools, it is difficult to justify directing scarce funds elsewhere when lives and livelihoods are at stake.\n\nSupporters of arts funding, however, argue that music, theatre, and the visual arts are far from a luxury. They preserve a nation's culture and identity, enhance quality of life, and can attract significant tourism. The creative industries are also a substantial source of employment and economic activity, so investment in them can ultimately repay itself.\n\nIn my opinion, both deserve support, but the right balance depends on a country's circumstances. In a developing nation where basic needs are unmet, essential services must take priority; in a wealthier country that has already met those needs, generous investment in the arts is entirely justified. Ideally, governments should fund both rather than treating the choice as a simple either-or.",
  },
  {
    id: "T2-R",
    slug: "essay-devices-and-literacy",
    topic: "Devices and Literacy",
    modelAnswer:
      "It is frequently argued that the growing use of computers and smartphones for communication has harmed young people's reading and writing abilities. I only partially agree with this claim.\n\nThere is certainly some evidence to support this concern. Relying on autocorrect and predictive text can weaken young people's spelling and grammar, while the informal abbreviations common in messaging may carry over into formal writing. In addition, the habit of skimming short online posts, rather than reading books or long articles, may shorten attention spans and reduce the ability to engage with complex texts.\n\nOn the other hand, it can be argued that young people today actually read and write more than any previous generation, albeit in digital form. They are constantly composing messages, posts, and comments, and they have instant access to an unprecedented range of texts online. The issue, therefore, may not be a decline in literacy itself but a difference between informal digital communication and formal academic writing.\n\nIn conclusion, while I accept that digital communication can encourage careless habits, I do not believe it has simply destroyed young people's literacy. With proper guidance from schools to distinguish informal from formal writing, technology can support rather than damage these essential skills.",
  },
  {
    id: "T2-S",
    slug: "essay-work-life-balance",
    topic: "Work–Life Balance",
    modelAnswer:
      "Many people today struggle to balance the demands of their jobs with their personal lives. This essay will explain why this is so and suggest what both employers and individuals can do to improve the situation.\n\nThe difficulty has several causes. Working hours in many industries remain long, and modern technology means employees are expected to remain reachable by email and phone even after they leave the workplace. Financial pressures push people to take on extra work, while competitive workplace cultures often reward those who appear to sacrifice their personal time.\n\nBoth sides can take action. Employers should offer flexible or remote working, set realistic workloads, and respect employees' time off rather than expecting round-the-clock availability. Some companies have introduced policies discouraging out-of-hours emails, with positive results. Individuals, for their part, can set clear boundaries between work and home, manage their time more effectively, and make their health and relationships a genuine priority rather than an afterthought.\n\nIn conclusion, poor work-life balance stems largely from long hours, constant connectivity, and demanding workplace cultures. By combining supportive employer policies with firmer personal boundaries, however, it is entirely possible for people to lead healthier and more balanced lives.",
  },
  {
    id: "T2-T",
    slug: "essay-working-longer-retiring-later",
    topic: "Working Longer, Retiring Later",
    modelAnswer:
      "In many countries, people are now remaining in work for longer and retiring at an older age than previous generations did. This essay will examine the advantages and disadvantages of this development.\n\nThere are notable benefits. Working longer provides individuals with greater financial security and a continued sense of purpose and identity, which can be good for mental health. Society also gains: experienced older workers pass on valuable knowledge, and keeping them in employment for longer eases the strain on state pension systems at a time when populations are ageing.\n\nThere are, however, real drawbacks. When older employees stay in their posts longer, fewer positions open up for younger people entering the workforce, which can increase youth unemployment. Older workers may also find demanding jobs harder as their health and energy decline, and a later retirement leaves people with less time to enjoy leisure and family while they are still fit and active.\n\nIn conclusion, working longer offers financial and economic advantages and helps address the challenges of an ageing population, but it also limits opportunities for the young and reduces leisure in later life. On balance, I believe the trend is beneficial, provided that retirement remains flexible so that individuals can stop working when it suits their circumstances.",
  },
];

export function getTask2ModelAnswerBySlug(slug: string): WritingModelAnswer | undefined {
  return TASK2_MODEL_ANSWERS.find(m => m.slug === slug);
}

export function getTask2ModelAnswerById(id: string): WritingModelAnswer | undefined {
  return TASK2_MODEL_ANSWERS.find(m => m.id === id);
}
