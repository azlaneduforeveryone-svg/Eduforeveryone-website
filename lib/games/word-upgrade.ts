import type { WordUpgradeItem, EncouragementConfig } from "./types";

export const WORD_UPGRADE_ENCOURAGEMENT: EncouragementConfig = {
  "style": "sparkles",
  "wrongMessages": [
    "Vocabulary grows with every attempt! Check the explanation and press forward.",
    "Collocations take practice to master. Review the context and keep going!",
    "Even native speakers refine their word choice constantly. Good effort!",
    "Spotting close distractors is how you train for an IELTS Band 7+ Lexical Resource.",
    "Every word you test strengthens your active academic vocabulary bank.",
    "Mistakes help you notice nuances between academic register and informal words.",
    "Keep your momentum going! The next upgrade is waiting for you.",
    "Consistency is the key to mastering high-level academic English.",
    "Notice how the replacement changes the sentence rhythm and precision.",
    "Great attempt! Learning the right register will boost your writing and speaking scores.",
    "Answering challenging vocabulary questions is how you build exam stamina.",
    "Keep practicing — precise words turn everyday ideas into academic arguments."
  ],
  "streak3Message": "🌟 3 in a row! Your academic word choice is sharp today.",
  "streak5Message": "🔥 5 streak! Outstanding grasp of IELTS Band 7+ vocabulary.",
  "lowScoreMessage": "Good practice round! Review the words you missed and play again to build automatic recall.",
  "mediumScoreMessage": "Solid score! You have a good instinct for academic vocabulary. Play another round to aim for 10/10.",
  "highScoreMessage": "Outstanding lexical resource! You consistently selected natural, high-band academic collocations."
};

export const WORD_UPGRADE_ITEMS: WordUpgradeItem[] = [
  {
    "id": "wu-env-01",
    "domain": "environment",
    "targetWord": "big",
    "question": "Climate change presents a [big] danger to low-lying coastal ecosystems.",
    "options": [
      "substantial",
      "colossal",
      "gigantic",
      "monumental"
    ],
    "correct": 0,
    "explanation": "'Substantial danger' is an academic collocation; colossal and gigantic sound overly dramatic or informal."
  },
  {
    "id": "wu-env-02",
    "domain": "environment",
    "targetWord": "bad",
    "question": "Plastic accumulation produces [bad] consequences for marine biodiversity.",
    "options": [
      "evil",
      "detrimental",
      "nasty",
      "corrupt"
    ],
    "correct": 1,
    "explanation": "'Detrimental consequences' is the precise academic term for damaging effects on ecosystems."
  },
  {
    "id": "wu-env-03",
    "domain": "environment",
    "targetWord": "make better",
    "question": "Governments must invest in reforestation to [make better] degraded agricultural land.",
    "options": [
      "renovate",
      "cheer up",
      "rehabilitate",
      "reform"
    ],
    "correct": 2,
    "explanation": "We 'rehabilitate' land or habitats; 'renovate' applies to buildings and 'reform' to legal or political systems."
  },
  {
    "id": "wu-env-04",
    "domain": "environment",
    "targetWord": "cut down",
    "question": "Transitioning to solar power helps nations [cut down] overall carbon emissions.",
    "options": [
      "downgrade",
      "chop down",
      "abridge",
      "curtail"
    ],
    "correct": 3,
    "explanation": "'Curtail emissions' is a formal Band 7+ collocation; 'abridge' is used for written texts and 'chop down' is literal."
  },
  {
    "id": "wu-env-05",
    "domain": "environment",
    "targetWord": "empty",
    "question": "Over-extraction threatens to [empty] underground aquifers in arid zones.",
    "options": [
      "deplete",
      "consume",
      "starve",
      "bankrupt"
    ],
    "correct": 0,
    "explanation": "Natural resources and water reserves are 'depleted'; 'bankrupt' refers to financial insolvency."
  },
  {
    "id": "wu-env-06",
    "domain": "environment",
    "targetWord": "everywhere",
    "question": "Microplastics are now [everywhere] in freshwater reservoirs and oceans.",
    "options": [
      "sprawling",
      "ubiquitous",
      "crowded",
      "globalized"
    ],
    "correct": 1,
    "explanation": "'Ubiquitous' means present everywhere simultaneously and is ideal for academic environmental essays."
  },
  {
    "id": "wu-env-07",
    "domain": "environment",
    "targetWord": "stop",
    "question": "International treaties aim to [stop] the illegal wildlife trafficking trade.",
    "options": [
      "paralyze",
      "blockade",
      "halt",
      "freeze"
    ],
    "correct": 2,
    "explanation": "'Halt the trade' conveys firm, decisive cessation in formal and international policy contexts."
  },
  {
    "id": "wu-edu-08",
    "domain": "education",
    "targetWord": "help",
    "question": "Hands-on laboratory sessions [help] deeper comprehension of abstract scientific theories.",
    "options": [
      "accommodate",
      "alleviate",
      "expedite",
      "facilitate"
    ],
    "correct": 3,
    "explanation": "'Facilitate comprehension' is an academic collocation meaning to make a learning process smoother and more effective."
  },
  {
    "id": "wu-edu-09",
    "domain": "education",
    "targetWord": "important",
    "question": "Early childhood literacy plays an [important] role in long-term academic attainment.",
    "options": [
      "pivotal",
      "heavy",
      "urgent",
      "grand"
    ],
    "correct": 0,
    "explanation": "'A pivotal role' indicates central, decisive significance; 'heavy role' is an unnatural collocation."
  },
  {
    "id": "wu-edu-10",
    "domain": "education",
    "targetWord": "teach",
    "question": "Schools must strive to [teach] critical thinking habits in primary pupils.",
    "options": [
      "drill",
      "instil",
      "indoctrinate",
      "implant"
    ],
    "correct": 1,
    "explanation": "Values, habits, and principles are 'instilled' in learners gradually and firmly over time. 'Indoctrinate' implies forcing dogma without critical thought."
  },
  {
    "id": "wu-edu-11",
    "domain": "education",
    "targetWord": "difference",
    "question": "The socio-economic [difference] between metropolitan and regional schools remains broad.",
    "options": [
      "deviation",
      "discord",
      "disparity",
      "detour"
    ],
    "correct": 2,
    "explanation": "'Disparity' precisely denotes unfair inequality or divergence in resources and outcomes."
  },
  {
    "id": "wu-edu-12",
    "domain": "education",
    "targetWord": "helpful",
    "question": "Small seminar classes foster an environment [helpful] to analytical discussions.",
    "options": [
      "auspicious",
      "amenable",
      "receptive",
      "conducive"
    ],
    "correct": 3,
    "explanation": "An atmosphere or setting is 'conducive to' learning when it provides the ideal conditions for intellectual discussion."
  },
  {
    "id": "wu-edu-13",
    "domain": "education",
    "targetWord": "show",
    "question": "Standardized test scores fail to [show] the full range of a pupil's creative talents.",
    "options": [
      "reflect",
      "advertise",
      "publish",
      "unveil"
    ],
    "correct": 0,
    "explanation": "'Reflect talents' appropriately captures the accurate mirroring or expression of an underlying quality."
  },
  {
    "id": "wu-edu-14",
    "domain": "education",
    "targetWord": "start",
    "question": "The faculty decided to [start] a cross-disciplinary curriculum in biotechnology.",
    "options": [
      "kick off",
      "institute",
      "unleash",
      "embark"
    ],
    "correct": 1,
    "explanation": "'Institute a curriculum' is the formal academic register; 'kick off' is too colloquial for IELTS Task 2."
  },
  {
    "id": "wu-tech-15",
    "domain": "technology",
    "targetWord": "change completely",
    "question": "Generative artificial intelligence will [change completely] traditional diagnostic medicine.",
    "options": [
      "rehabilitate",
      "renovate",
      "revolutionize",
      "recondition"
    ],
    "correct": 2,
    "explanation": "'Revolutionize' indicates profound structural transformation of a discipline; the other options describe physical repairs."
  },
  {
    "id": "wu-tech-16",
    "domain": "technology",
    "targetWord": "spread",
    "question": "The [spread] of automated kiosks has transformed airline check-in counters.",
    "options": [
      "enlargement",
      "scattering",
      "stretching",
      "proliferation"
    ],
    "correct": 3,
    "explanation": "'Proliferation' specifically describes rapid, widespread increase in technology or devices."
  },
  {
    "id": "wu-tech-17",
    "domain": "technology",
    "targetWord": "open to danger",
    "question": "Outdated firmware leaves cloud servers [open to danger] from ransomware infiltration.",
    "options": [
      "vulnerable",
      "fragile",
      "delicate",
      "tender"
    ],
    "correct": 0,
    "explanation": "Systems and networks are 'vulnerable' to external attacks; 'fragile' describes physical objects easily broken."
  },
  {
    "id": "wu-tech-18",
    "domain": "technology",
    "targetWord": "quick",
    "question": "Fiber-optic networks have powered [quick] development across financial services.",
    "options": [
      "hasty",
      "rapid",
      "hurried",
      "abrupt"
    ],
    "correct": 1,
    "explanation": "'Rapid development' is the correct academic collocation; 'hasty' and 'hurried' imply carelessness."
  },
  {
    "id": "wu-tech-19",
    "domain": "technology",
    "targetWord": "capture and use",
    "question": "Offshore turbines allow engineers to [capture and use] the kinetic power of ocean tides.",
    "options": [
      "mobilize",
      "wield",
      "harness",
      "command"
    ],
    "correct": 2,
    "explanation": "We 'harness' natural or kinetic energy to capture its force and convert it into usable power."
  },
  {
    "id": "wu-tech-20",
    "domain": "technology",
    "targetWord": "old",
    "question": "Quantum computing may render classical cryptographic ciphers [old] overnight.",
    "options": [
      "aged",
      "antique",
      "ancient",
      "obsolete"
    ],
    "correct": 3,
    "explanation": "'Obsolete' means no longer useful because superior technology has replaced it."
  },
  {
    "id": "wu-tech-21",
    "domain": "technology",
    "targetWord": "bring together",
    "question": "Smartphones [bring together] multiple sensors, communication radios, and cameras.",
    "options": [
      "integrate",
      "accumulate",
      "congregate",
      "adjoin"
    ],
    "correct": 0,
    "explanation": "'Integrate components' means combining disparate technologies into a unified, harmonious system."
  },
  {
    "id": "wu-hea-22",
    "domain": "health",
    "targetWord": "worsen",
    "question": "Prolonged psychological stress will [worsen] chronic autoimmune symptoms.",
    "options": [
      "deteriorate",
      "exacerbate",
      "degenerate",
      "relapse"
    ],
    "correct": 1,
    "explanation": "'Exacerbate' is the precise academic verb meaning to aggravate or worsen symptoms, medical conditions, or crises."
  },
  {
    "id": "wu-hea-23",
    "domain": "health",
    "targetWord": "not moving",
    "question": "Desk-bound workers often adopt an unhealthy, [not moving] lifestyle.",
    "options": [
      "static",
      "stationary",
      "sedentary",
      "motionless"
    ],
    "correct": 2,
    "explanation": "'Sedentary lifestyle' is the standard public health and sociological collocation for inactive living."
  },
  {
    "id": "wu-hea-24",
    "domain": "health",
    "targetWord": "cure",
    "question": "Physical therapy acts as an effective [cure] for repetitive strain injuries.",
    "options": [
      "tonic",
      "antidote",
      "vaccine",
      "remedy"
    ],
    "correct": 3,
    "explanation": "A 'remedy' is a treatment that relieves an ailment; an 'antidote' counteracts poison."
  },
  {
    "id": "wu-hea-25",
    "domain": "health",
    "targetWord": "prevent",
    "question": "Strict hygiene protocols in clinics help to [prevent] nosocomial pathogen spread.",
    "options": [
      "avert",
      "withhold",
      "quench",
      "prohibit"
    ],
    "correct": 0,
    "explanation": "We 'avert risks or outbreaks'; 'prohibit' means legally banning a person's conduct."
  },
  {
    "id": "wu-hea-26",
    "domain": "health",
    "targetWord": "food value",
    "question": "Ultra-processed ready meals frequently lack essential [food value].",
    "options": [
      "culinary worth",
      "nutritional value",
      "edible quality",
      "dietary profit"
    ],
    "correct": 1,
    "explanation": "'Nutritional value' is the recognized scientific term for nutrient density in dietary analysis."
  },
  {
    "id": "wu-hea-27",
    "domain": "health",
    "targetWord": "spread around",
    "question": "Public health agencies must [spread around] balanced advice regarding immunization.",
    "options": [
      "disperse",
      "dissipate",
      "disseminate",
      "proliferate"
    ],
    "correct": 2,
    "explanation": "'Disseminate' is the standard academic verb for distributing public health advice, findings, and guidance to a wide population."
  },
  {
    "id": "wu-wrk-28",
    "domain": "work",
    "targetWord": "give",
    "question": "Multinational corporations should [give] equal dignity and professional respect to every worker.",
    "options": [
      "surrender",
      "donate",
      "subsidize",
      "accord"
    ],
    "correct": 3,
    "explanation": "'Accord respect' is the established formal collocation for granting due recognition and dignity, upgrading basic everyday words like 'give'."
  },
  {
    "id": "wu-wrk-29",
    "domain": "work",
    "targetWord": "keep",
    "question": "Competitive remuneration helps consulting firms [keep] elite software architects.",
    "options": [
      "retain",
      "withhold",
      "preserve",
      "detain"
    ],
    "correct": 0,
    "explanation": "Organizations 'retain talent'; 'detain' implies physical confinement and 'preserve' applies to specimens."
  },
  {
    "id": "wu-wrk-30",
    "domain": "work",
    "targetWord": "capability",
    "question": "Effective conflict mediation demands high emotional [capability] from managers.",
    "options": [
      "craftiness",
      "competence",
      "dexterity",
      "artfulness"
    ],
    "correct": 1,
    "explanation": "'Emotional competence' denotes professional capability; 'craftiness' and 'artfulness' have deceptive connotations."
  },
  {
    "id": "wu-wrk-31",
    "domain": "work",
    "targetWord": "hand over",
    "question": "Senior managers should [hand over] routine operational duties to capable team members.",
    "options": [
      "consign",
      "relegate",
      "delegate",
      "surrender"
    ],
    "correct": 2,
    "explanation": "'Delegate' is the standard professional verb meaning to entrust tasks and authority to team members."
  },
  {
    "id": "wu-wrk-32",
    "domain": "work",
    "targetWord": "reward",
    "question": "Performance bonuses provide a powerful [reward] for exceptional sales performance.",
    "options": [
      "gratuity",
      "gift",
      "trophy",
      "incentive"
    ],
    "correct": 3,
    "explanation": "An 'incentive' motivates future hard work and sustained effort; 'gratuity' refers to a tip or severance."
  },
  {
    "id": "wu-wrk-33",
    "domain": "work",
    "targetWord": "cooperation",
    "question": "Cross-departmental [cooperation] is vital when rolling out enterprise resource systems.",
    "options": [
      "collaboration",
      "association",
      "cabal",
      "fellowship"
    ],
    "correct": 0,
    "explanation": "'Collaboration' is the precise academic and business term for working together to achieve a goal."
  },
  {
    "id": "wu-wrk-34",
    "domain": "work",
    "targetWord": "boss",
    "question": "Employees must obtain written approval from their immediate [boss].",
    "options": [
      "commander",
      "supervisor",
      "master",
      "ruler"
    ],
    "correct": 1,
    "explanation": "'Supervisor' is the appropriate professional title; 'commander' is military and 'master' is archaic."
  },
  {
    "id": "wu-cit-35",
    "domain": "cities",
    "targetWord": "full of cars",
    "question": "Metropolitan highways inevitably become [full of cars] as thousands of suburban commuters merge onto central routes.",
    "options": [
      "compacted",
      "constricted",
      "congested",
      "stagnant"
    ],
    "correct": 2,
    "explanation": "'Congested' is the standard formal term for roads, corridors, and transport networks overcrowded with traffic."
  },
  {
    "id": "wu-cit-36",
    "domain": "cities",
    "targetWord": "facilities",
    "question": "Suburban expansions require substantial investment in municipal [facilities].",
    "options": [
      "apparatus",
      "appliances",
      "utensils",
      "infrastructure"
    ],
    "correct": 3,
    "explanation": "Roads, utilities, and public transport are collectively termed urban 'infrastructure'."
  },
  {
    "id": "wu-cit-37",
    "domain": "cities",
    "targetWord": "poor area",
    "question": "Urban renewal projects converted the [poor area] into an innovation quarter.",
    "options": [
      "deprived district",
      "broken town",
      "ruined village",
      "needy zone"
    ],
    "correct": 0,
    "explanation": "'Deprived district' uses respectful, formal sociological terminology for underprivileged areas."
  },
  {
    "id": "wu-cit-38",
    "domain": "cities",
    "targetWord": "housing",
    "question": "Zoning regulations restrict heavy industrial manufacturing in [housing] neighborhoods.",
    "options": [
      "domestic",
      "residential",
      "inhabiting",
      "familial"
    ],
    "correct": 1,
    "explanation": "'Residential neighborhoods' is the standard academic and municipal descriptor for housing areas."
  },
  {
    "id": "wu-cit-39",
    "domain": "cities",
    "targetWord": "city growth",
    "question": "Uncontrolled [city growth] devours fertile agricultural greenbelts on the periphery.",
    "options": [
      "town enlarging",
      "metro spreading",
      "urban sprawl",
      "civic inflation"
    ],
    "correct": 2,
    "explanation": "'Urban sprawl' is the standard academic term for the unrestricted expansion of cities."
  },
  {
    "id": "wu-cit-40",
    "domain": "cities",
    "targetWord": "comforts",
    "question": "City planners should ensure equal access to civic [comforts] such as parks and libraries.",
    "options": [
      "indulgences",
      "luxuries",
      "treats",
      "amenities"
    ],
    "correct": 3,
    "explanation": "'Public amenities' refers to communal resources that make city life pleasant and livable."
  },
  {
    "id": "wu-crm-41",
    "domain": "crime",
    "targetWord": "stop",
    "question": "Strict custodial sentences aim to [stop] repeat offenders from committing serious crimes.",
    "options": ["deter", "blockade", "suppress", "intervene"],
    "correct": 0,
    "explanation": "'Deter offenders from' is an academic criminology collocation meaning to discourage criminal conduct through fear of consequences."
  },
  {
    "id": "wu-crm-42",
    "domain": "crime",
    "targetWord": "break",
    "question": "Corporations that knowingly [break] international copyright regulations face punitive damages.",
    "options": ["damage", "infringe", "spoil", "injure"],
    "correct": 1,
    "explanation": "'Infringe regulations or copyright' is the established formal legal term for violating statutory rules."
  },
  {
    "id": "wu-crm-43",
    "domain": "crime",
    "targetWord": "bad behavior",
    "question": "Community youth centers aim to tackle juvenile [bad behavior] before it escalates into gang activity.",
    "options": ["dishonesty", "mischief", "delinquency", "villainy"],
    "correct": 2,
    "explanation": "'Juvenile delinquency' is the recognized sociological term for habitual unlawful actions committed by minors."
  },
  {
    "id": "wu-crm-44",
    "domain": "crime",
    "targetWord": "do",
    "question": "Forensic investigators gathered evidence to prove the suspect had intended to [do] financial fraud.",
    "options": ["enact", "conduct", "perform", "perpetrate"],
    "correct": 3,
    "explanation": "'Perpetrate fraud' is the formal legal and academic collocation for carrying out a deceitful crime."
  },
  {
    "id": "wu-crm-45",
    "domain": "crime",
    "targetWord": "take back",
    "question": "The government introduced a restorative justice framework to [take back] former convicts into civilian life.",
    "options": ["reintegrate", "retrieve", "repossess", "reclaim"],
    "correct": 0,
    "explanation": "'Reintegrate convicts' is the sociological collocation for helping formerly incarcerated people settle productively into society."
  },
  {
    "id": "wu-crm-46",
    "domain": "crime",
    "targetWord": "steal money",
    "question": "Corrupt company directors attempted to [steal money] from the corporate pension reserve.",
    "options": ["plunder", "embezzle", "extort", "hijack"],
    "correct": 1,
    "explanation": "'Embezzle from' is the precise legal term for misappropriating funds placed under one's professional trust."
  },
  {
    "id": "wu-crm-47",
    "domain": "crime",
    "targetWord": "excuse",
    "question": "The defendant claimed self-defense as a legitimate [excuse] for using physical force.",
    "options": ["apology", "pretext", "justification", "alibi"],
    "correct": 2,
    "explanation": "'Legitimate justification' is the formal jurisprudential term for a recognized lawful defense that negates criminal liability, upgrading basic words like 'excuse'."
  },
  {
    "id": "wu-crm-48",
    "domain": "crime",
    "targetWord": "proven guilty",
    "question": "The defendant was formally [proven guilty] of insider trading following a three-month trial.",
    "options": ["blamed", "sentenced", "condemned", "convicted"],
    "correct": 3,
    "explanation": "'Convicted of' is the precise judicial collocation for finding an accused party guilty in court."
  },
  {
    "id": "wu-crm-49",
    "domain": "crime",
    "targetWord": "rule breaker",
    "question": "A persistent [rule breaker] rarely reforms under purely punitive imprisonment conditions.",
    "options": ["recidivist", "trespasser", "fugitive", "conspirator"],
    "correct": 0,
    "explanation": "'Recidivist' is the academic criminological term for an offender who repeatedly relapses into criminal behavior."
  },
  {
    "id": "wu-crm-50",
    "domain": "crime",
    "targetWord": "lessen",
    "question": "Defense counsel presented evidence of extreme hardship to [lessen] the severity of the sentence.",
    "options": ["weaken", "mitigate", "dilute", "shave"],
    "correct": 1,
    "explanation": "'Mitigate the severity' is a standard formal collocation meaning to make a penalty or condition less harsh."
  },
  {
    "id": "wu-gov-51",
    "domain": "government",
    "targetWord": "give",
    "question": "Parliament agreed to [give] twenty million pounds to renewable energy research.",
    "options": ["bequeath", "donate", "allocate", "impart"],
    "correct": 2,
    "explanation": "'Allocate funds to' is the standard public finance term for designating budgetary resources for a specific purpose."
  },
  {
    "id": "wu-gov-52",
    "domain": "government",
    "targetWord": "make happen",
    "question": "Civil servants were instructed to [make happen] the new healthcare directives without delay.",
    "options": ["operate", "impose", "realize", "implement"],
    "correct": 3,
    "explanation": "'Implement directives' is the standard administrative academic collocation for putting policies into effect."
  },
  {
    "id": "wu-gov-53",
    "domain": "government",
    "targetWord": "openness",
    "question": "Independent audits enhance public trust by demonstrating budgetary [openness].",
    "options": ["transparency", "frankness", "candor", "exposure"],
    "correct": 0,
    "explanation": "'Budgetary transparency' is the recognized governance term for making fiscal decisions clear, accessible, and accountable."
  },
  {
    "id": "wu-gov-54",
    "domain": "government",
    "targetWord": "encourage",
    "question": "Tax credits are designed to [encourage] private investment in green technology.",
    "options": ["instigate", "incentivize", "provoke", "agitate"],
    "correct": 1,
    "explanation": "'Incentivize investment' is the established public policy and economics collocation for stimulating desirable economic behavior."
  },
  {
    "id": "wu-gov-55",
    "domain": "government",
    "targetWord": "cancel",
    "question": "The supreme court has constitutional authority to [cancel] statutory laws that violate civil rights.",
    "options": ["terminate", "dismiss", "nullify", "erase"],
    "correct": 2,
    "explanation": "'Nullify laws' is the formal legal term for rendering unconstitutional legislation void and without effect."
  },
  {
    "id": "wu-gov-56",
    "domain": "government",
    "targetWord": "money help",
    "question": "Agricultural export industries rely heavily on central government [money help].",
    "options": ["charity", "alms", "tribute", "subsidies"],
    "correct": 3,
    "explanation": "'Government subsidies' is the formal economic term for direct or indirect financial aid provided to support domestic industries."
  },
  {
    "id": "wu-gov-57",
    "domain": "government",
    "targetWord": "official permission",
    "question": "Local authorities require statutory [official permission] before acquiring private land for urban rail expansion.",
    "options": ["authorization", "toleration", "indulgence", "concession"],
    "correct": 0,
    "explanation": "'Statutory authorization' is formal legal terminology for power granted by legislation to carry out public actions."
  },
  {
    "id": "wu-gov-58",
    "domain": "government",
    "targetWord": "manage",
    "question": "An independent electoral commission was established to [manage] upcoming general elections.",
    "options": ["dominate", "oversee", "command", "police"],
    "correct": 1,
    "explanation": "'Oversee elections' is the standard administrative collocation for supervising an official process impartially."
  },
  {
    "id": "wu-gov-59",
    "domain": "government",
    "targetWord": "honesty",
    "question": "Independent regulatory watchdogs are vital to maintain the institutional [honesty] of public administration.",
    "options": ["fairness", "sincerity", "integrity", "morality"],
    "correct": 2,
    "explanation": "'Integrity' is the precise formal term for uprightness and honesty in public governance, directly upgrading everyday words like 'honesty'."
  },
  {
    "id": "wu-gov-60",
    "domain": "government",
    "targetWord": "divide up",
    "question": "Regional devolution policies seek to [divide up] administrative authority away from the capital.",
    "options": ["disband", "scatter", "splinter", "decentralize"],
    "correct": 3,
    "explanation": "'Decentralize authority' is the precise political science term for transferring administrative functions from central to regional bodies, upgrading basic phrases like 'divide up'."
  },
  {
    "id": "wu-med-61",
    "domain": "media",
    "targetWord": "twist",
    "question": "Tabloid headlines frequently [twist] statistical facts to generate sensational clickbait.",
    "options": ["distort", "mangle", "deform", "fracture"],
    "correct": 0,
    "explanation": "'Distort facts' is the standard academic and journalistic collocation for presenting information misleadingly."
  },
  {
    "id": "wu-med-62",
    "domain": "media",
    "targetWord": "fake",
    "question": "Investigators uncovered hundreds of [fake] user profiles orchestrated to spread political propaganda.",
    "options": ["counterfeit", "fabricated", "synthetic", "mock"],
    "correct": 1,
    "explanation": "'Fabricated profiles' is the established academic term for fictitious accounts manufactured to deceive."
  },
  {
    "id": "wu-med-63",
    "domain": "media",
    "targetWord": "show",
    "question": "Documentary filmmakers strive to [show] the harsh realities of displacement faced by refugees.",
    "options": ["advertise", "brandish", "depict", "exhibit"],
    "correct": 2,
    "explanation": "'Depict realities' is the formal academic register for portraying a complex social condition through media."
  },
  {
    "id": "wu-med-64",
    "domain": "media",
    "targetWord": "one-sidedness",
    "question": "Reputable journalists must adhere to editorial neutrality and avoid overt political [one-sidedness].",
    "options": ["unilateralism", "dogmatism", "sentimentality", "partisanship"],
    "correct": 3,
    "explanation": "'Political partisanship' is the precise academic and journalistic term for biased, uncritical allegiance to a party or faction, upgrading weak expressions like 'one-sidedness'."
  },
  {
    "id": "wu-med-65",
    "domain": "media",
    "targetWord": "check",
    "question": "Responsible journalists always [check] anonymous claims before releasing breaking news stories.",
    "options": ["verify", "audit", "cross-examine", "authenticate"],
    "correct": 0,
    "explanation": "'Verify claims' is the core journalistic collocation meaning to ascertain factual accuracy before publication."
  },
  {
    "id": "wu-med-66",
    "domain": "media",
    "targetWord": "deep impact",
    "question": "Algorithmic recommendation engines exert a [deep impact] on the formation of public opinion.",
    "options": ["heavy crash", "profound influence", "weighty shove", "drastic blow"],
    "correct": 1,
    "explanation": "'Profound influence' is an academic collocation describing deep, transformative effects on societal behavior."
  },
  {
    "id": "wu-med-67",
    "domain": "media",
    "targetWord": "everywhere",
    "question": "Smartphones and push alerts have made digital advertisements [everywhere] in modern daily life.",
    "options": ["abundant", "generous", "omnipresent", "roomy"],
    "correct": 2,
    "explanation": "'Omnipresent' means present everywhere simultaneously and is ideal for academic sociological essays."
  },
  {
    "id": "wu-med-68",
    "domain": "media",
    "targetWord": "harm",
    "question": "Defamatory articles can irreversibly [harm] the professional reputation of innocent individuals.",
    "options": ["fracture", "bruise", "spoil", "tarnish"],
    "correct": 3,
    "explanation": "'Tarnish a reputation' is an established formal collocation meaning to damage how someone is perceived."
  },
  {
    "id": "wu-med-69",
    "domain": "media",
    "targetWord": "criticism",
    "question": "The broadcaster faced widespread public [criticism] after airing unsubstantiated medical claims.",
    "options": ["condemnation", "insult", "abuse", "jeering"],
    "correct": 0,
    "explanation": "'Public condemnation' is the appropriate formal register for strong societal disapproval of institutional misconduct."
  },
  {
    "id": "wu-med-70",
    "domain": "media",
    "targetWord": "believability",
    "question": "Anonymous online sources inherently lack the editorial [believability] expected of scholarly publications.",
    "options": ["loyalty", "credibility", "sincerity", "piety"],
    "correct": 1,
    "explanation": "'Editorial credibility' is the recognized academic and journalistic term for trustworthiness and reliability."
  },
  {
    "id": "wu-trv-71",
    "domain": "travel",
    "targetWord": "crowded tourism",
    "question": "Popular alpine towns are now plagued by [crowded tourism] that strains fragile municipal infrastructure.",
    "options": ["super-travel", "mass-visit", "overtourism", "mega-transit"],
    "correct": 2,
    "explanation": "'Overtourism' is the accepted contemporary sociological term for excessive visitor numbers overwhelming local capacity."
  },
  {
    "id": "wu-trv-72",
    "domain": "travel",
    "targetWord": "untouched",
    "question": "Unregulated resort construction has left previously [untouched] coastal lagoons degraded.",
    "options": ["raw", "innocent", "spotless", "pristine"],
    "correct": 3,
    "explanation": "'Pristine lagoons' is the standard environmental collocation for unspoiled, naturally pure habitats."
  },
  {
    "id": "wu-trv-73",
    "domain": "travel",
    "targetWord": "encourage",
    "question": "National tourist boards launch international campaigns to [encourage] off-season travel.",
    "options": ["stimulate", "provoke", "agitate", "ignite"],
    "correct": 0,
    "explanation": "'Stimulate travel' is the standard economic collocation for encouraging demand and consumer activity."
  },
  {
    "id": "wu-trv-74",
    "domain": "travel",
    "targetWord": "real",
    "question": "Cultural tourists often travel to remote villages seeking [real] folk traditions.",
    "options": ["truthful", "authentic", "candid", "sincere"],
    "correct": 1,
    "explanation": "'Authentic folk traditions' is the standard sociological and anthropological term for original cultural practices that have not been commercialized, upgrading basic words like 'real'."
  },
  {
    "id": "wu-trv-75",
    "domain": "travel",
    "targetWord": "damage",
    "question": "Litter left behind by trekking expeditions can permanently [damage] fragile alpine ecosystems.",
    "options": ["wound", "bruise", "degrade", "handicap"],
    "correct": 2,
    "explanation": "'Degrade ecosystems' is the formal environmental term for deteriorating habitats and natural resources."
  },
  {
    "id": "wu-trv-76",
    "domain": "travel",
    "targetWord": "foreign",
    "question": "Eco-lodges deliberately incorporate [foreign] architectural aesthetics to attract luxury travelers.",
    "options": ["alien", "unfamiliar", "peculiar", "exotic"],
    "correct": 3,
    "explanation": "'Exotic aesthetics' conveys distinctive, evocative design elements originating from a far-off culture."
  },
  {
    "id": "wu-trv-77",
    "domain": "travel",
    "targetWord": "travel plan",
    "question": "Tour operators provide a detailed daily [travel plan] outlining scheduled excursions and transit times.",
    "options": ["itinerary", "blueprint", "manifesto", "chronicle"],
    "correct": 0,
    "explanation": "'Itinerary' is the formal travel industry term for an itemized schedule of planned journeys and visits."
  },
  {
    "id": "wu-trv-78",
    "domain": "travel",
    "targetWord": "bring in",
    "question": "International hospitality chains [bring in] billions in foreign currency reserves for developing economies.",
    "options": ["procure", "generate", "extract", "amass"],
    "correct": 1,
    "explanation": "'Generate foreign currency reserves' is the standard macroeconomic collocation for earning revenue from abroad."
  },
  {
    "id": "wu-trv-79",
    "domain": "travel",
    "targetWord": "journey",
    "question": "Polar researchers embarked on an arduous scientific [journey] across the Antarctic ice shelf.",
    "options": ["outing", "jaunt", "expedition", "ramble"],
    "correct": 2,
    "explanation": "'Expedition' specifically designates an organized, serious journey undertaken for scientific or exploratory purposes."
  },
  {
    "id": "wu-trv-80",
    "domain": "travel",
    "targetWord": "holiday spot",
    "question": "Strategic infrastructure investments transformed the remote valley into a prime eco-tourism [holiday spot].",
    "options": ["getaway", "hideaway", "resort", "destination"],
    "correct": 3,
    "explanation": "'Destination' is the standard formal term in tourism studies and academic writing for a visited location, upgrading informal phrases like 'holiday spot'."
  },
  {
    "id": "wu-soc-81",
    "domain": "society",
    "targetWord": "togetherness",
    "question": "Community sports clubs cultivate intergenerational [togetherness] in multicultural suburbs.",
    "options": ["cohesion", "combination", "amalgamation", "cluster"],
    "correct": 0,
    "explanation": "'Social cohesion' is the standard sociological term for strong communal bonding and unity."
  },
  {
    "id": "wu-soc-82",
    "domain": "society",
    "targetWord": "poor",
    "question": "Charitable foundations target nutritional interventions at [poor] communities in rural provinces.",
    "options": ["bankrupt", "impoverished", "frugal", "cheap"],
    "correct": 1,
    "explanation": "'Impoverished communities' is the established demographic term for populations suffering from economic deprivation."
  },
  {
    "id": "wu-soc-83",
    "domain": "society",
    "targetWord": "spread out",
    "question": "War and persecution forced the worldwide [spread out] of historic minority populations.",
    "options": ["detachment", "evacuation", "diaspora", "partition"],
    "correct": 2,
    "explanation": "'Diaspora' is the established sociological and historical term for the dispersion of a population from their ancestral homeland."
  },
  {
    "id": "wu-soc-84",
    "domain": "society",
    "targetWord": "pushed aside",
    "question": "Without accessible public transport, disabled residents remain socially [pushed aside].",
    "options": ["discarded", "shelved", "demoted", "marginalized"],
    "correct": 3,
    "explanation": "'Marginalized' is the standard sociological term for individuals or groups excluded from full participation in society."
  },
  {
    "id": "wu-soc-85",
    "domain": "society",
    "targetWord": "fitting in",
    "question": "Bilingual education policies support the gradual [fitting in] of immigrant children into schools.",
    "options": ["integration", "admixture", "confusion", "adherence"],
    "correct": 0,
    "explanation": "'Integration' is the recognized educational and sociological term for full participation in a new school community while preserving cultural identity, upgrading basic phrases like 'fitting in'."
  },
  {
    "id": "wu-soc-86",
    "domain": "society",
    "targetWord": "old",
    "question": "Rising life expectancies require healthcare reform tailored to an increasingly [old] population.",
    "options": ["ancient", "ageing", "antique", "obsolete"],
    "correct": 1,
    "explanation": "'Ageing population' is the standard demographic and sociological collocation for a population with an increasing proportion of elderly citizens, upgrading basic words like 'old'."
  },
  {
    "id": "wu-soc-87",
    "domain": "society",
    "targetWord": "social duty",
    "question": "Parents bear a primary moral and legal [social duty] to safeguard the welfare of their offspring.",
    "options": ["burden", "chore", "obligation", "imposition"],
    "correct": 2,
    "explanation": "'Moral obligation' is the standard academic collocation denoting a duty required by ethical or legal standards."
  },
  {
    "id": "wu-soc-88",
    "domain": "society",
    "targetWord": "change",
    "question": "The industrial revolution marked a momentous [change] in family structures and work patterns.",
    "options": ["wobble", "drift", "sway", "transition"],
    "correct": 3,
    "explanation": "'Momentous transition' is an academic historical collocation denoting profound socio-economic transformation."
  },
  {
    "id": "wu-soc-89",
    "domain": "society",
    "targetWord": "prejudice",
    "question": "Anti-discrimination statutes seek to dismantle structural [prejudice] in workplace hiring.",
    "options": ["bias", "dislike", "grudge", "envy"],
    "correct": 0,
    "explanation": "'Structural bias' is the established sociological term for institutional prejudices embedded within societal systems."
  },
  {
    "id": "wu-soc-90",
    "domain": "society",
    "targetWord": "lasting through time",
    "question": "Oral storytelling has proved remarkably [lasting through time] despite the advent of digital media.",
    "options": ["stubborn", "resilient", "hardened", "rigid"],
    "correct": 1,
    "explanation": "'Resilient' is the precise academic adjective denoting the capacity to withstand challenges and endure over time."
  },
  {
    "id": "wu-eco-91",
    "domain": "economy",
    "targetWord": "unstable",
    "question": "Geopolitical tensions have left global oil markets extraordinarily [unstable].",
    "options": ["fickle", "capricious", "volatile", "dizzy"],
    "correct": 2,
    "explanation": "'Volatile markets' is the standard economic collocation for financial conditions subject to rapid and unpredictable price shifts."
  },
  {
    "id": "wu-eco-92",
    "domain": "economy",
    "targetWord": "lack of money",
    "question": "Soaring sovereign debt precipitated a severe [lack of money] crisis for the national treasury.",
    "options": ["shortage", "scarcity", "deficit", "liquidity"],
    "correct": 3,
    "explanation": "'Liquidity crisis' is the formal macroeconomic term for an acute shortage of cash and convertible assets needed to meet obligations."
  },
  {
    "id": "wu-eco-93",
    "domain": "economy",
    "targetWord": "grow",
    "question": "Startups require access to patient venture capital to [grow] during early product cycles.",
    "options": ["flourish", "sprout", "mushroom", "inflate"],
    "correct": 0,
    "explanation": "Businesses 'flourish' when they grow vigorously and develop successfully in a favorable economic environment."
  },
  {
    "id": "wu-eco-94",
    "domain": "economy",
    "targetWord": "shrink",
    "question": "Higher central bank interest rates inevitably cause domestic consumer borrowing to [shrink].",
    "options": ["deflate", "contract", "shrivel", "wither"],
    "correct": 1,
    "explanation": "In macroeconomics, aggregate borrowing and credit demand 'contract' as borrowing costs escalate."
  },
  {
    "id": "wu-eco-95",
    "domain": "economy",
    "targetWord": "pay for",
    "question": "Commercial banks agreed to jointly [pay for] the multi-billion-dollar infrastructure bond issue.",
    "options": ["subsidize", "sponsor", "underwrite", "bail"],
    "correct": 2,
    "explanation": "Financial institutions 'underwrite' bonds or equity issues by guaranteeing payment and assuming financial risk."
  },
  {
    "id": "wu-eco-96",
    "domain": "economy",
    "targetWord": "slump",
    "question": "A prolonged property crisis triggered a broader macroeconomic [slump] across the continent.",
    "options": ["lull", "pause", "stoppage", "recession"],
    "correct": 3,
    "explanation": "'Recession' is the precise macroeconomic term for consecutive quarters of negative GDP growth, upgrading general words like 'slump'."
  },
  {
    "id": "wu-eco-97",
    "domain": "economy",
    "targetWord": "spread risk",
    "question": "Portfolio managers advise clients to [spread risk] across diverse asset classes and geographies.",
    "options": ["diversify", "scatter", "disperse", "diffuse"],
    "correct": 0,
    "explanation": "'Diversify investments' is the standard financial term for allocating capital among varied investments to reduce exposure."
  },
  {
    "id": "wu-eco-98",
    "domain": "economy",
    "targetWord": "single seller",
    "question": "Antitrust regulators sued the tech conglomerate to break up its digital search [single seller].",
    "options": ["cartel", "monopoly", "syndicate", "trust"],
    "correct": 1,
    "explanation": "'Monopoly' is the precise economic term for complete market dominance and control of supply by a single commercial enterprise."
  },
  {
    "id": "wu-eco-99",
    "domain": "economy",
    "targetWord": "extra money",
    "question": "Prudent fiscal management produced a record national budget [extra money] this fiscal year.",
    "options": ["overload", "overflow", "surplus", "excess"],
    "correct": 2,
    "explanation": "'Budget surplus' is the formal public accounting term denoting that government revenues exceeded state expenditures."
  },
  {
    "id": "wu-eco-100",
    "domain": "economy",
    "targetWord": "danger",
    "question": "Commercial lenders face substantial credit [danger] when extending loans to unvetted debtors.",
    "options": ["gamble", "menace", "peril", "risk"],
    "correct": 3,
    "explanation": "'Credit risk' is the standard financial and banking collocation for the potential that a borrower fails to meet obligations, upgrading basic words like 'danger'."
  },
  {
    "id": "wu-env-101",
    "domain": "environment",
    "targetWord": "threatened",
    "question": "Industrial deforestation has left hundreds of rare amphibians critically [threatened].",
    "options": ["endangered", "panicked", "frightened", "unprotected"],
    "correct": 0,
    "explanation": "'Critically endangered' is the official ecological classification for species facing an extremely high risk of extinction in the wild."
  },
  {
    "id": "wu-env-102",
    "domain": "environment",
    "targetWord": "dirty",
    "question": "Untreated industrial runoff continues to [dirty] freshwater streams across the river basin.",
    "options": ["stain", "contaminate", "tarnish", "smudge"],
    "correct": 1,
    "explanation": "'Contaminate streams' is the precise environmental science collocation for polluting natural water bodies with toxic substances."
  },
  {
    "id": "wu-env-103",
    "domain": "environment",
    "targetWord": "ability to last",
    "question": "Policymakers emphasize the long-term ecological [ability to last] of closed-loop recycling loops.",
    "options": ["durability", "toughness", "sustainability", "stubbornness"],
    "correct": 2,
    "explanation": "'Ecological sustainability' is the recognized environmental term for practices that can be maintained without exhausting natural resources."
  },
  {
    "id": "wu-env-104",
    "domain": "environment",
    "targetWord": "take in",
    "question": "Dense mangrove forests naturally [take in] immense volumes of atmospheric carbon.",
    "options": ["inhale", "swallow", "digest", "sequester"],
    "correct": 3,
    "explanation": "'Sequester carbon' is the established biogeochemical term for the long-term capture and storage of atmospheric carbon dioxide."
  },
  {
    "id": "wu-env-105",
    "domain": "environment",
    "targetWord": "drying up",
    "question": "Extended periods without rainfall lead to severe soil [drying up] in sub-Saharan grasslands.",
    "options": ["desiccation", "draining", "parching", "dehydration"],
    "correct": 0,
    "explanation": "'Soil desiccation' is the precise geological and ecological term for extreme moisture loss and drying out of agricultural soils."
  },
  {
    "id": "wu-edu-106",
    "domain": "education",
    "targetWord": "encourage",
    "question": "Inspiring mentors [encourage] intellectual curiosity and independent thinking among undergraduates.",
    "options": ["inflame", "foster", "agitate", "incite"],
    "correct": 1,
    "explanation": "'Foster intellectual curiosity' is the standard academic collocation denoting the patient encouragement and development of learning habits."
  },
  {
    "id": "wu-edu-107",
    "domain": "education",
    "targetWord": "basic rule",
    "question": "Rigorous laboratory empirical verification is a foundational [basic rule] of the scientific method.",
    "options": ["motto", "slogan", "tenet", "catchphrase"],
    "correct": 2,
    "explanation": "'Tenet' is the formal academic term for a fundamental principle, dogma, or doctrine held by a discipline."
  },
  {
    "id": "wu-edu-108",
    "domain": "education",
    "targetWord": "equal",
    "question": "Admissions committees must ensure fair and [equal] consideration for candidates from non-traditional backgrounds.",
    "options": ["equivalent", "uniform", "identical", "equitable"],
    "correct": 3,
    "explanation": "'Fair and equitable consideration' is an established formal collocation denoting impartiality and justice tailored to individual circumstances."
  },
  {
    "id": "wu-edu-109",
    "domain": "education",
    "targetWord": "knowledge bank",
    "question": "The university library serves as a vast [knowledge bank] of rare medieval manuscripts.",
    "options": ["repository", "locker", "bin", "depot"],
    "correct": 0,
    "explanation": "'Repository of knowledge' is the standard scholarly term for a central storehouse or archive where cultural records are preserved."
  },
  {
    "id": "wu-edu-110",
    "domain": "education",
    "targetWord": "gain",
    "question": "Master's students must [gain] proficiency in qualitative and quantitative research methodologies.",
    "options": ["catch", "acquire", "grab", "gather"],
    "correct": 1,
    "explanation": "'Acquire proficiency' is the formal educational collocation for attaining mastery of a specialized skill through study."
  },
  {
    "id": "wu-tech-111",
    "domain": "technology",
    "targetWord": "self-governing",
    "question": "Engineers are testing [self-governing] drones capable of navigating GPS-denied tunnels without human steering.",
    "options": ["automatic", "spontaneous", "autonomous", "involuntary"],
    "correct": 2,
    "explanation": "'Autonomous drones' is the precise robotics and computer science terminology for vehicles capable of independent navigation."
  },
  {
    "id": "wu-tech-112",
    "domain": "technology",
    "targetWord": "flaw",
    "question": "A critical cryptographic [flaw] allowed malicious hackers to decrypt user credentials.",
    "options": ["blemish", "blot", "scuff", "vulnerability"],
    "correct": 3,
    "explanation": "'Cryptographic vulnerability' is the established cybersecurity term for a flaw in software logic that can be exploited by adversaries."
  },
  {
    "id": "wu-tech-113",
    "domain": "technology",
    "targetWord": "make better",
    "question": "Compiler engineers develop novel heuristics to [make better] executable code performance.",
    "options": ["optimize", "embellish", "decorate", "groom"],
    "correct": 0,
    "explanation": "'Optimize performance' is the core computer science term for refining code or algorithms to execute with maximum efficiency."
  },
  {
    "id": "wu-tech-114",
    "domain": "technology",
    "targetWord": "smooth",
    "question": "Cloud APIs enable [smooth] data exchange between disparate enterprise software platforms.",
    "options": ["creamy", "seamless", "slippery", "glossy"],
    "correct": 1,
    "explanation": "'Seamless data exchange' is the standard technology collocation for flawless, uninterrupted interoperability between disparate platforms."
  },
  {
    "id": "wu-tech-115",
    "domain": "technology",
    "targetWord": "spread out",
    "question": "Distributed ledger networks rely on a [spread out] architecture without any central point of failure.",
    "options": ["scattered", "chaotic", "decentralized", "disorganized"],
    "correct": 2,
    "explanation": "'Decentralized architecture' is the recognized computer systems term for an infrastructure distributed across autonomous peers."
  },
  {
    "id": "wu-cit-116",
    "domain": "cities",
    "targetWord": "walkable",
    "question": "Urban planners advocate for transit-oriented neighborhoods that provide direct [walkable] access to metro stations.",
    "options": ["strolling", "hiking", "marching", "pedestrian"],
    "correct": 3,
    "explanation": "'Pedestrian access' is the standard urban planning and transport engineering term for routes designed for foot travel."
  },
  {
    "id": "wu-cit-117",
    "domain": "cities",
    "targetWord": "rebuild",
    "question": "Metropolitan authorities plan to [rebuild] derelict docklands into vibrant commercial hubs.",
    "options": ["redevelop", "recondition", "remodel", "retouch"],
    "correct": 0,
    "explanation": "'Redevelop docklands' is the precise civil planning collocation for converting obsolete industrial zones into modern civic centers."
  },
  {
    "id": "wu-cit-118",
    "domain": "cities",
    "targetWord": "crowdedness",
    "question": "Skyrocketing real estate values have accelerated residential [crowdedness] across inner-city boroughs.",
    "options": ["thickness", "density", "heaviness", "solidness"],
    "correct": 1,
    "explanation": "'Residential density' is the recognized demographic and urban planning metric describing the concentration of households per unit area."
  },
  {
    "id": "wu-cit-119",
    "domain": "cities",
    "targetWord": "nearby area",
    "question": "The tech hub attracted numerous artisan cafes and coworking spaces in its immediate [nearby area].",
    "options": ["orbit", "boundary", "vicinity", "perimeter"],
    "correct": 2,
    "explanation": "'In its immediate vicinity' is the established formal collocation denoting the area closely surrounding a location."
  },
  {
    "id": "wu-cit-120",
    "domain": "cities",
    "targetWord": "traffic jam",
    "question": "A single vehicular collision caused widespread [traffic jam] across the downtown street network.",
    "options": ["pile-up", "bottleneck", "backlog", "gridlock"],
    "correct": 3,
    "explanation": "'Gridlock' is the precise urban transport term for a complete vehicular standstill across an entire street network, upgrading basic expressions like 'traffic jam'."
  }
];
