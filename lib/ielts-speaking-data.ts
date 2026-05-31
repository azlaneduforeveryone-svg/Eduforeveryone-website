// lib/ielts-speaking-data.ts
// 5 speaking test pools. Structure identical for Academic and General Training.
// Each pool: Part 1 (intro questions), Part 2 (cue card), Part 3 (discussion).
// Export: getSpeakingTest()

import { SpeakingTest, pickRandom } from "./ielts-types";

const speakingPool: SpeakingTest[] = [
  {
    id: "SP-A",
    part1Topic: "Your Daily Routine & Hobbies",
    part1Questions: [
      "Can you tell me about where you live?",
      "What do you usually do in the mornings?",
      "Do you have any hobbies? How did you get into them?",
      "How do you usually spend your evenings?",
      "Has your daily routine changed much in recent years?",
    ],
    part2: {
      topic: "Describe a skill you have learned that you consider very useful.",
      points: [
        "What the skill is",
        "When and how you learned it",
        "Why you decided to learn it",
      ],
      followUp:
        "Explain how this skill has benefited you in your daily life or career.",
    },
    part3Questions: [
      "Why do you think people continue learning new skills throughout their lives?",
      "Do you think formal education is the best way to learn skills, or are there better alternatives?",
      "How has technology changed the way people learn new things?",
      "In your opinion, which skills are most important for young people to develop today?",
      "Do you think schools in your country prepare students well for working life? Why or why not?",
    ],
  },
  {
    id: "SP-B",
    part1Topic: "Food & Eating Habits",
    part1Questions: [
      "What kind of food do you enjoy eating most?",
      "Do you prefer eating at home or at restaurants?",
      "Have your eating habits changed since you were a child?",
      "Is there a particular dish from your country that you would recommend to visitors?",
      "How important is mealtimes for your family or social life?",
    ],
    part2: {
      topic:
        "Describe a time when you tried a new type of food and enjoyed it.",
      points: [
        "What the food was and where you tried it",
        "Who you were with at the time",
        "Why it was different from food you normally eat",
      ],
      followUp: "Explain why you would or would not try it again.",
    },
    part3Questions: [
      "How have international travel and migration influenced the food culture in your country?",
      "Do you think fast food is becoming too dominant in people's diets? Why?",
      "What role do governments have in encouraging people to eat more healthily?",
      "How do you think people's food choices will change over the next 20 years?",
      "Is it important for young people to learn to cook? Why or why not?",
    ],
  },
  {
    id: "SP-C",
    part1Topic: "Travel & Transport",
    part1Questions: [
      "How do you usually get to work or study?",
      "Do you enjoy travelling? What kind of trips do you prefer?",
      "Have you ever had a particularly memorable journey? What made it special?",
      "Do you prefer travelling alone or with others?",
      "What form of transport do you think is the most convenient in your city?",
    ],
    part2: {
      topic: "Describe a place outside your home country that you would like to visit.",
      points: [
        "Where the place is and what it is known for",
        "Why you are interested in visiting it",
        "Who you would like to go with",
      ],
      followUp:
        "Explain what you think you would learn or gain from visiting this place.",
    },
    part3Questions: [
      "Why do you think international tourism has grown so rapidly in recent decades?",
      "What are some of the negative effects of mass tourism on local communities?",
      "Do you think people have a responsibility to travel sustainably? Why or why not?",
      "How has the rise of budget airlines changed the way people travel?",
      "Should governments invest more in public transport rather than roads? Why?",
    ],
  },
  {
    id: "SP-D",
    part1Topic: "Technology & Media",
    part1Questions: [
      "How often do you use social media?",
      "What kinds of things do you use the internet for most?",
      "Do you think you spend too much time on your phone or computer?",
      "Has technology changed the way you communicate with friends and family?",
      "Do you prefer reading news online or in print? Why?",
    ],
    part2: {
      topic:
        "Describe a piece of technology that you find particularly useful in your everyday life.",
      points: [
        "What the technology is",
        "How long you have been using it",
        "How you use it on a daily basis",
      ],
      followUp:
        "Explain how your life would be different without this piece of technology.",
    },
    part3Questions: [
      "Do you think people have become too dependent on technology? Can you give examples?",
      "How has social media affected the way people form relationships and friendships?",
      "What are the main risks of storing personal data online?",
      "Do you think artificial intelligence will create more jobs than it destroys? Why or why not?",
      "How should parents manage their children's use of digital devices?",
    ],
  },
  {
    id: "SP-E",
    part1Topic: "Environment & Nature",
    part1Questions: [
      "Do you enjoy spending time outdoors? What do you usually do?",
      "Are there many green spaces or parks near where you live?",
      "How aware are you of environmental issues in your daily life?",
      "Do you do anything to try to reduce your environmental impact?",
      "Was nature an important part of your childhood? How?",
    ],
    part2: {
      topic:
        "Describe an environmental problem that you feel strongly about.",
      points: [
        "What the problem is",
        "What you believe causes it",
        "What effects it has on people or wildlife",
      ],
      followUp:
        "Explain what you think should be done to address this problem.",
    },
    part3Questions: [
      "Do you think individuals or governments have greater responsibility for protecting the environment?",
      "How effective do you think international agreements on climate change have been?",
      "Are people in your country becoming more or less environmentally conscious? Why?",
      "What changes in lifestyle do you think people will need to make over the next 50 years?",
      "Do you think economic development and environmental protection can coexist? How?",
    ],
  },
];

// ─── EXPORT ──────────────────────────────────────────────────

export function getSpeakingTest(): SpeakingTest {
  return pickRandom(speakingPool);
}