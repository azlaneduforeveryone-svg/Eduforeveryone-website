// lib/ielts-speaking-data.ts
// SINGLE SOURCE OF TRUTH for IELTS Speaking content.
// The standalone Speaking page, the full mock test, and the diagnostic all read
// from here. Add new topics to SPEAKING_TOPICS and every surface picks them up.
import { pickRandom } from "./ielts-types";

export interface SpeakingP1 { q: string; sample: string; }
export interface SpeakingCueCard {
  title: string;
  points: string[];
  followUp: string;
  sample: string;
}
export interface SpeakingP3 { q: string; sample: string; }

export interface SpeakingTopic {
  id: string;
  theme: string;
  part1: SpeakingP1[];
  cueCard: SpeakingCueCard;
  part3: SpeakingP3[];
}

// Fixed IELTS timings (seconds) — same for every cue card.
export const PART2_PREP_SECONDS = 60;
export const PART2_SPEAK_SECONDS = 120;

export const SPEAKING_TOPICS: SpeakingTopic[] = [
  {
    id: "technology",
    theme: "Technology",
    part1: [
      { q: "How often do you use the internet?", sample: "I use the internet constantly throughout the day — mainly for work, keeping in touch with friends and watching educational content. I'd say I'm online for at least six or seven hours on a typical weekday." },
      { q: "What do you mainly use your phone for?", sample: "Primarily for communication — messaging, emails and video calls. I also use it a lot for navigation when I'm in an unfamiliar area, and I listen to podcasts during my commute." },
      { q: "Do you think young people spend too much time on social media?", sample: "I think many do, yes. While social media has genuine benefits for staying connected and discovering new ideas, the endless scrolling can easily become a habit that takes time away from more productive activities like reading or exercise." },
    ],
    cueCard: {
      title: "Describe a piece of technology you use every day.",
      points: ["What it is", "How long you have had it", "What you use it for", "Why it is important to you"],
      followUp: "Would you feel uncomfortable if you didn't have it for a day?",
      sample: "The piece of technology I rely on most every day is my laptop. I've had it for about three years and it's become absolutely central to both my work and my personal life. I use it for everything — writing, research, video calls and online learning. Without it, I'd struggle to complete most of my daily tasks. What I appreciate most about it is the portability — I can work from virtually anywhere, which gives me a lot of flexibility. If I didn't have it for a day, I'd honestly feel quite lost. So much of my routine depends on it that I'd have to completely reorganise my day.",
    },
    part3: [
      { q: "How has technology changed the way people communicate?", sample: "It's transformed communication in ways that would have been unimaginable a few decades ago. We can now connect with people across the world instantly, at virtually no cost. Video calls have made remote relationships feel much more personal than phone calls, and messaging apps have made short, informal communication the norm. However, some argue this has reduced the depth of our interactions — we communicate more frequently but perhaps less meaningfully." },
      { q: "Do you think technology is making us less creative?", sample: "That's an interesting question. I think the relationship between technology and creativity is actually quite complex. On one hand, digital tools like design software, music production apps and video editing platforms have democratised creative expression — anyone with a smartphone can now create content. On the other hand, there's a valid concern that the constant availability of entertainment means people spend less time in quiet reflection, which is often when creative ideas emerge." },
    ],
  },
  {
    id: "education",
    theme: "Education",
    part1: [
      { q: "What subject did you enjoy most at school?", sample: "I particularly enjoyed science, especially biology. I found the study of living systems fascinating — understanding how the human body works or how ecosystems maintain balance felt relevant in a way that some other subjects didn't." },
      { q: "Do you prefer studying alone or with others?", sample: "It depends on the task. For absorbing new material or writing essays, I prefer studying alone because I can concentrate fully. But for reviewing difficult concepts or problem-solving, I find study groups genuinely helpful — hearing how others approach a problem often gives me a new perspective." },
      { q: "Is there anything you would like to learn in the future?", sample: "Absolutely. I've always wanted to learn a third language — probably Spanish, since it would open up communication with so many more people. I'd also like to improve my data analysis skills, which are increasingly valuable across almost every profession." },
    ],
    cueCard: {
      title: "Describe a teacher who had a positive influence on you.",
      points: ["Who the teacher was", "What subject they taught", "What they did that influenced you", "How this affected your life or studies"],
      followUp: "Have you stayed in contact with this teacher since leaving school?",
      sample: "The teacher who had the greatest positive influence on me was my secondary school English teacher, Mr. Hassan. He taught English Literature, and what made him exceptional was his genuine enthusiasm for the subject — it was clear he wasn't just doing a job, but that literature actually mattered to him. He encouraged critical thinking rather than memorisation. Rather than simply telling us what a poem meant, he would ask us what we thought, and then guide us to dig deeper. That approach taught me to think independently and to appreciate complexity. It made me a much stronger writer and reader, and those skills have benefited me in every area of my life since. I genuinely believe his class changed the way I think.",
    },
    part3: [
      { q: "Should education systems focus more on practical skills or academic knowledge?", sample: "I think the most effective systems find a balance between the two. Pure academic knowledge without practical application can leave graduates ill-equipped for the workplace, while focusing exclusively on vocational skills risks narrowing students' intellectual horizons. Ideally, students should develop strong foundational knowledge alongside the practical abilities to apply it — critical thinking, communication and problem-solving are the skills most employers consistently say they value." },
      { q: "How important is it for students to study subjects they are interested in?", sample: "It's enormously important, in my view. Intrinsic motivation is one of the strongest predictors of academic success — when students genuinely care about what they're learning, they engage more deeply and retain information better. However, a purely interest-based curriculum has limitations. Some fundamental skills like mathematics, literacy and scientific reasoning are valuable regardless of personal preference, so there needs to be some core structure even within a more interest-driven system." },
    ],
  },
  {
    id: "food",
    theme: "Food & Eating Habits",
    part1: [
      { q: "What kind of food do you enjoy eating most?", sample: "I'm quite fond of home-cooked South Asian food — dishes like biryani or daal with fresh bread. I find them comforting and full of flavour, and they remind me of family meals. That said, I also enjoy trying cuisines from other cultures whenever I get the chance." },
      { q: "Do you prefer eating at home or at restaurants?", sample: "Generally I prefer eating at home, because the food tends to be healthier and I have control over the ingredients. But I do enjoy restaurants occasionally, particularly for the social side of it — there's something special about sharing a meal out with friends." },
      { q: "Have your eating habits changed since you were a child?", sample: "Yes, considerably. As a child I was quite a fussy eater and stuck to a narrow range of dishes. Now I'm far more adventurous and conscious of nutrition — I eat a lot more vegetables and far less sugar than I used to." },
    ],
    cueCard: {
      title: "Describe a time when you tried a new type of food and enjoyed it.",
      points: ["What the food was and where you tried it", "Who you were with at the time", "Why it was different from food you normally eat", "and explain why you would or would not try it again"],
      followUp: "Do you think people should try foods from other cultures more often?",
      sample: "I'd like to talk about the first time I tried authentic Japanese sushi, at a small restaurant a friend recommended. I was there with two close friends who were already fans of Japanese cuisine, so they guided me through the menu. It was completely different from what I normally eat — the emphasis was on freshness and subtlety rather than spice, which is what I'm used to. At first I was hesitant about the raw fish, but the delicate flavours and the care taken in presentation won me over almost immediately. I'd absolutely try it again; in fact it opened my eyes to how much I'd been missing by sticking to familiar dishes.",
    },
    part3: [
      { q: "How have international travel and migration influenced food culture?", sample: "They've had a profound effect. As people move and travel more, cuisines blend and spread far beyond their origins — you can now find authentic food from almost anywhere in most major cities. This has enriched local food cultures enormously, though some would argue it has also diluted certain traditional dishes as they're adapted for foreign palates." },
      { q: "What role should governments have in encouraging healthy eating?", sample: "I think governments have a legitimate role, particularly through education and regulation. Clear food labelling, restrictions on advertising junk food to children, and subsidies for fresh produce can all nudge people towards better choices without being heavy-handed. Ultimately, though, personal responsibility matters too — the state can inform and incentivise, but it can't make every decision for people." },
    ],
  },
  {
    id: "travel",
    theme: "Travel & Transport",
    part1: [
      { q: "How do you usually get to work or study?", sample: "I mostly travel by car, as public transport options where I live are fairly limited. The journey takes about twenty-five minutes, and I tend to listen to podcasts on the way to make the most of the time." },
      { q: "Do you enjoy travelling? What kind of trips do you prefer?", sample: "I love travelling — it's one of my favourite things. I lean towards trips that combine a bit of culture with some relaxation, so exploring a historic city in the morning and unwinding somewhere scenic in the afternoon would be my ideal." },
      { q: "What form of transport do you think is most convenient in your city?", sample: "Honestly, in my city a private car is still the most convenient, simply because the public network doesn't cover everywhere. In an ideal world I'd prefer a good metro system, since it avoids traffic and is far better for the environment." },
    ],
    cueCard: {
      title: "Describe a place outside your home country that you would like to visit.",
      points: ["Where the place is and what it is known for", "Why you are interested in visiting it", "Who you would like to go with", "and explain what you think you would learn from visiting"],
      followUp: "Do you think people learn more from travelling than from reading about a place?",
      sample: "A place I've long dreamed of visiting is Japan, particularly Kyoto, which is famous for its ancient temples, traditional gardens and beautifully preserved old districts. I'm drawn to it because it seems to balance deep respect for tradition with cutting-edge modernity in a way few countries manage. I'd love to go with my brother, who shares my interest in history and photography. I think the experience would teach me a great deal about a culture that values discipline, craftsmanship and harmony — values that are quite different from what I'm used to, and that I suspect would change how I look at my own daily habits.",
    },
    part3: [
      { q: "Why do you think international tourism has grown so rapidly?", sample: "Several factors have combined. Air travel has become dramatically cheaper thanks to budget airlines, rising incomes mean more people can afford to travel, and social media constantly exposes us to appealing destinations. Together these have turned what was once a luxury for the few into something accessible to the many." },
      { q: "What are some negative effects of mass tourism on local communities?", sample: "Mass tourism can place real strain on communities. Popular destinations often suffer from overcrowding, rising property prices that push out locals, and environmental damage to fragile sites. There's also the risk that local culture becomes commercialised — reduced to a performance for visitors rather than something authentically lived." },
    ],
  },
  {
    id: "environment",
    theme: "Environment & Nature",
    part1: [
      { q: "Do you enjoy spending time outdoors?", sample: "Very much so. I try to get outside every day, even if it's just a short walk, because I find it clears my head. At weekends I prefer longer activities like hiking, which lets me properly disconnect from screens." },
      { q: "Are there many green spaces near where you live?", sample: "There are a few parks within walking distance, which I'm grateful for, though I'd say the city could do with more. The largest one nearby has a lake and walking trails, and it gets quite busy at weekends with families." },
      { q: "Do you do anything to reduce your environmental impact?", sample: "I make a conscious effort, yes. I recycle, try to avoid single-use plastics, and increasingly choose to walk or cycle for short journeys rather than driving. They're small steps, but I think they add up if enough people make them." },
    ],
    cueCard: {
      title: "Describe an environmental problem that you feel strongly about.",
      points: ["What the problem is", "What you believe causes it", "What effects it has on people or wildlife", "and explain what you think should be done about it"],
      followUp: "Do you think individuals can really make a difference to the environment?",
      sample: "The environmental problem I feel most strongly about is plastic pollution, particularly in the oceans. I believe it's caused largely by our throwaway culture and inadequate waste management, especially around single-use packaging. The effects are devastating — marine animals ingest or become trapped in plastic, and microplastics are now found throughout the food chain, which ultimately affects human health too. In my view, tackling it requires action on several fronts: governments should regulate or tax single-use plastics, companies must redesign packaging to be reusable or biodegradable, and individuals need to change their consumption habits. It's a problem that no single group can solve alone.",
    },
    part3: [
      { q: "Who has greater responsibility for protecting the environment — individuals or governments?", sample: "I'd argue the responsibility is shared, but governments hold the more powerful levers. Individuals can recycle and consume less, and those choices matter, but real change at scale comes from policy — emissions regulations, investment in clean energy and infrastructure. That said, governments often only act when there's public pressure, so individual attitudes shape political will. The two are deeply interconnected." },
      { q: "Can economic development and environmental protection coexist?", sample: "I genuinely believe they can, though it requires deliberate choices. The old assumption that growth must come at the planet's expense is increasingly outdated — renewable energy, green technology and sustainable industries are themselves major sources of jobs and investment. The challenge is the transition period, which can be costly in the short term, so strong long-term political commitment is essential." },
    ],
  },
];

export function getSpeakingTest(): SpeakingTopic {
  return pickRandom(SPEAKING_TOPICS);
}
