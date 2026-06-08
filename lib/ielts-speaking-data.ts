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
  {
    id: "work",
    theme: "Work & Careers",
    part1: [
      { q: "Do you work or are you a student?", sample: "I'm currently working full-time in the finance sector. I've been in the field for several years now, and I find it genuinely engaging because no two days are quite the same — there's always a new problem to solve." },
      { q: "What do you enjoy most about your job?", sample: "What I enjoy most is the problem-solving side of it. I like being given a complex situation and working out a clear, practical solution. I also value the people I work with, since a supportive team makes even demanding days much easier." },
      { q: "Would you like to change your job in the future?", sample: "Possibly, yes. I'm fairly content at the moment, but I'd like to take on more responsibility over time, perhaps moving into a leadership role. I think it's healthy to keep growing rather than staying in exactly the same position for too long." },
    ],
    cueCard: {
      title: "Describe a job you would like to have in the future.",
      points: ["What the job is", "What skills or qualifications it requires", "Why you are interested in it", "How you plan to achieve it"],
      followUp: "Do you think this job will still exist twenty years from now?",
      sample: "A job I'd really like to have in the future is leading a finance team for a large organisation — essentially a senior management role. It requires a strong grounding in accounting and reporting, professional qualifications, and just as importantly, the ability to communicate clearly and manage people well. I'm drawn to it because I enjoy turning complex numbers into decisions that actually shape how a business operates; there's something satisfying about being trusted with that. To get there, I'm steadily building my technical expertise, taking on more responsibility wherever I can, and working on my leadership skills, since managing people is quite different from managing spreadsheets. I'd say I'm on the right path, but I know it'll take patience and a fair amount of continued learning before I'm ready.",
    },
    part3: [
      { q: "Why do some people stay in the same job for their whole lives while others change frequently?", sample: "It often comes down to personality and circumstances. Some people value security and the comfort of mastering one role, and a stable job lets them build deep expertise. Others are driven by variety or ambition and feel restless if they're not constantly learning something new. Economic factors matter too — in some industries changing jobs is the fastest way to increase your salary, which naturally encourages movement." },
      { q: "How important is job satisfaction compared to a high salary?", sample: "I'd argue satisfaction matters more in the long run, though both clearly count. A high salary can make life comfortable, but if you dread going to work every morning, no amount of money really compensates for that. That said, financial security can't be ignored — it's hard to feel satisfied if you're constantly worried about paying bills. The ideal, of course, is a job that pays adequately and that you find genuinely meaningful." },
    ],
  },
  {
    id: "hometown",
    theme: "Hometown & Living Places",
    part1: [
      { q: "Where is your hometown?", sample: "My hometown is a fairly large city with a real mix of the traditional and the modern. It's a busy place with plenty going on, and although it has changed enormously over the years, it still has a character that feels familiar to me." },
      { q: "What do you like about living there?", sample: "I appreciate the convenience most of all — almost everything I need is close by, from shops to good restaurants. I also like that there's a strong sense of community in my particular neighbourhood, which you don't always find in a big city." },
      { q: "Has your hometown changed much in recent years?", sample: "It's changed dramatically, actually. A lot of new buildings and infrastructure have gone up, and areas that were quiet a decade ago are now thriving. Some of that development is exciting, though I do sometimes miss the slower pace it used to have." },
    ],
    cueCard: {
      title: "Describe a place in your hometown that you like to visit.",
      points: ["Where it is", "How often you go there", "What you do there", "Why you like it"],
      followUp: "Do you think places like this are important for a community?",
      sample: "A place in my hometown I really enjoy visiting is a large park near the city centre. It's only a short drive away, and I try to go there at least once a week, usually at the weekend when I have more free time. I mostly go for long walks, but I also like simply sitting with a coffee and watching the world go by — families having picnics, children playing, people exercising. What I like most about it is the sense of calm it offers in the middle of an otherwise hectic city. It's one of the few places where I can properly switch off and clear my head. After a stressful week, an hour there does me a lot of good, and I always come away feeling refreshed.",
    },
    part3: [
      { q: "Why do many people move from small towns to big cities?", sample: "The main draw is usually opportunity. Big cities tend to offer far more in terms of jobs, education and career advancement, which is hard to resist, especially for young people. Beyond work, cities also offer a wider range of services, entertainment and social options. For someone ambitious or simply looking for variety, a small town can start to feel limiting." },
      { q: "What can be done to make cities better places to live?", sample: "Several things would help. Investing in efficient public transport reduces both traffic and pollution, which improves daily life enormously. Creating more green spaces gives people somewhere to relax and benefits mental health. Affordable housing is crucial too, because when cities become too expensive, ordinary residents get pushed out. Ultimately it's about balancing growth with liveability rather than just expanding endlessly." },
    ],
  },
  {
    id: "family",
    theme: "Family & Relationships",
    part1: [
      { q: "Do you have a large or small family?", sample: "I'd say it's fairly average in size, though we're quite close-knit. We make a real effort to stay in touch and gather regularly, which I think is becoming less common these days, so I feel lucky in that respect." },
      { q: "Who are you closest to in your family?", sample: "I'm probably closest to my sibling. We're similar in age and grew up sharing the same experiences, so there's an easy understanding between us. We can talk about almost anything, and they're usually the first person I turn to for advice." },
      { q: "Do you spend a lot of time with your family?", sample: "As much as I can, though work sometimes gets in the way. We try to have a proper meal together regularly, and I find those shared moments really valuable — it's a chance to catch up properly rather than just exchanging quick messages." },
    ],
    cueCard: {
      title: "Describe a family member you admire.",
      points: ["Who the person is", "What they are like", "What they have done that you admire", "How they have influenced you"],
      followUp: "Do you think children today admire the same qualities in adults as in the past?",
      sample: "The family member I admire most is my father. He's a remarkably patient and hard-working man, the kind of person who rarely complains and quietly gets on with whatever needs doing. What I admire most is the way he built a comfortable life for our family largely through sheer determination, often making sacrifices that he never drew attention to. He started with very little and worked his way up through years of effort. Watching him taught me the value of perseverance and integrity — he always insisted on doing things the right way, even when shortcuts were available. That principle has stayed with me and genuinely shaped how I approach my own work and decisions. I think a lot of who I am today comes directly from his example.",
    },
    part3: [
      { q: "How have families changed in recent decades?", sample: "Families have changed considerably. Households tend to be smaller now, partly because people are having fewer children and marrying later. The traditional model of one earner has largely given way to both partners working. There's also far more geographic separation — people move away for work, so extended families that once lived close together are now often spread across the country or even the world." },
      { q: "Is it better for elderly people to live with their families or independently?", sample: "There are strong arguments on both sides, and a lot depends on the individual. Living with family can provide companionship, support and a sense of belonging, which is valuable as people age. On the other hand, many older people value their independence and dignity, and modern care options can support that. Ideally the choice should rest with the elderly person themselves rather than being decided for them." },
    ],
  },
  {
    id: "hobbies",
    theme: "Hobbies & Free Time",
    part1: [
      { q: "What do you like to do in your free time?", sample: "In my free time I enjoy a mix of things — reading, going for walks, and increasingly working on small personal projects. I find having a creative outlet outside of work really refreshing, and it stops me from feeling like I'm always in 'work mode'." },
      { q: "Have your hobbies changed since you were younger?", sample: "Yes, quite a lot. As a teenager I was much more into sports and video games, whereas now I gravitate towards quieter, more productive activities. I suppose my interests have matured along with me, although I still enjoy the occasional game to unwind." },
      { q: "Do you prefer indoor or outdoor hobbies?", sample: "It really depends on my mood and the weather. I love being outdoors when the weather's good — there's nothing better than a long walk in fresh air. But I'm equally happy indoors with a good book or a project, especially during the hotter months." },
    ],
    cueCard: {
      title: "Describe a hobby you have had for a long time.",
      points: ["What the hobby is", "How and when you started it", "How often you do it", "Why you have continued with it"],
      followUp: "Do you think hobbies are as important for adults as they are for children?",
      sample: "A hobby I've kept up for a long time is reading, particularly non-fiction. I started when I was quite young, when a teacher encouraged me to read beyond the school curriculum, and the habit simply never left me. These days I read most evenings, even if it's only for twenty minutes before bed, and I usually have a book or two on the go at any time. I've stuck with it for so long because it's both relaxing and genuinely enriching — it's a rare activity that entertains me while also teaching me something. Over the years it's broadened the way I think and given me ideas I'd never have come across otherwise. In a world full of quick distractions, I value having one habit that asks for a bit of patience and rewards it.",
    },
    part3: [
      { q: "Why do you think some hobbies become more popular than others?", sample: "Popularity often depends on accessibility and cost. Hobbies that are cheap and easy to start — like fitness apps or photography on a phone — naturally spread quickly. Social influence plays a huge part too; when something is widely shared online, more people are inspired to try it. Trends matter as well, so a hobby that's fashionable one year might fade the next, while genuinely rewarding ones tend to endure." },
      { q: "Do people have more or less free time than in the past?", sample: "It's a paradox, really. In theory, technology and labour-saving devices should have given us more free time, and in some ways they have. But many people feel busier than ever, partly because work increasingly intrudes into personal time through phones and email. So while we may technically have leisure time, it's often fragmented and interrupted, which makes it feel scarcer than it actually is." },
    ],
  },
  {
    id: "music",
    theme: "Music",
    part1: [
      { q: "What kind of music do you like?", sample: "I have fairly broad taste, but I lean towards calmer genres like acoustic and instrumental music. I find it helps me concentrate when I'm working. That said, I'll happily listen to something more upbeat when I want to lift my mood." },
      { q: "Do you play any musical instruments?", sample: "I don't, unfortunately, although it's something I've always wished I'd learned. I dabbled with the guitar briefly years ago but never stuck with it. Learning an instrument properly is still on my list of things to do one day." },
      { q: "Has the way you listen to music changed over the years?", sample: "Completely. When I was younger I bought physical CDs and even downloaded individual songs. Now it's all streaming — I have instant access to virtually any song ever recorded, which is incredible, though I sometimes miss the ritual of choosing an album and listening to it from start to finish." },
    ],
    cueCard: {
      title: "Describe a song or piece of music that is special to you.",
      points: ["What the song is", "When you first heard it", "What the song is about", "Why it is special to you"],
      followUp: "Do you think the music people listen to says something about their personality?",
      sample: "A piece of music that's particularly special to me is a song I associate with a specific period of my life — I first heard it during my university years, at a time when I was figuring out who I wanted to become. It's quite a reflective, hopeful song about perseverance and looking forward, which suited my mood perfectly back then. Whenever I hear it now, it instantly takes me back to that chapter, with all its uncertainty and excitement. That's what makes it special — it's not just the melody or the lyrics, though I do love both, but the way it's become tied to a meaningful time in my life. Music has this remarkable ability to bottle up emotions and memories, and for me this song does exactly that. I'd struggle to explain it fully to someone who wasn't there.",
    },
    part3: [
      { q: "Why do you think music is important in every culture?", sample: "Music seems to fulfil something fundamental in human beings. Across every society it's used to mark important moments — weddings, funerals, religious ceremonies, celebrations. It's also a powerful way of expressing emotions that are difficult to put into ordinary words, and of bringing people together and reinforcing a shared identity. The fact that no known culture exists without music strongly suggests it meets a deep human need." },
      { q: "How has technology changed the music industry?", sample: "The impact has been enormous and double-edged. On the positive side, streaming and social media have made it far easier for new artists to reach a global audience without needing a major record label. On the other hand, the economics have shifted dramatically — artists now earn very little per stream, so many rely on live performances to make a living. So technology has democratised access while making it harder to earn money from recordings alone." },
    ],
  },
  {
    id: "sports",
    theme: "Sports & Exercise",
    part1: [
      { q: "Do you play any sports?", sample: "I'm not especially competitive, but I do try to stay active. I prefer individual activities like jogging and the occasional game of badminton with friends rather than team sports, mainly because they fit more easily around my schedule." },
      { q: "How do you usually keep fit?", sample: "Mostly through walking and light exercise at home. I try to build movement into my daily routine rather than relying on intense gym sessions, since I find that approach far easier to sustain over the long term." },
      { q: "Did you play more sports when you were younger?", sample: "Definitely. At school I was much more involved in team sports — football and cricket especially. As I've got older and busier, my exercise has become more practical and solitary, which suits my lifestyle now even if it's a bit less fun." },
    ],
    cueCard: {
      title: "Describe a sport or physical activity you enjoy watching or doing.",
      points: ["What the activity is", "When and where you usually do or watch it", "Who you do it with", "Why you enjoy it"],
      followUp: "Do you think people watch more sport than they play these days?",
      sample: "An activity I really enjoy is hiking, which I'd describe as somewhere between a sport and a hobby. I usually go at weekends, ideally somewhere with hills or natural scenery, away from the city. Sometimes I go alone when I want time to think, but I prefer going with a couple of friends, because the shared effort and the conversation along the way make it more enjoyable. What I love about it is that it combines physical exercise with being in nature, so it benefits both my body and my mind at the same time. There's also a real sense of achievement when you reach the top of a long climb and take in the view — it makes the effort feel worthwhile. It's the kind of activity that leaves me genuinely refreshed rather than just tired.",
    },
    part3: [
      { q: "Why is it important for people to do regular exercise?", sample: "The benefits are wide-ranging. Physically, regular exercise reduces the risk of serious illnesses like heart disease and diabetes, and helps maintain a healthy weight. But the mental benefits are just as significant — exercise is one of the most effective ways to manage stress and improve mood. Given how sedentary modern lifestyles have become, building activity into daily life is more important than ever." },
      { q: "Should governments do more to encourage people to be active?", sample: "I think they have a clear role to play. Governments can build the infrastructure that makes activity easy — cycle lanes, parks, affordable sports facilities — and run public health campaigns to raise awareness. There's also a strong economic argument, since a healthier population reduces the long-term burden on healthcare systems. That said, governments can only create opportunities; the actual choice to be active ultimately rests with individuals." },
    ],
  },
  {
    id: "books",
    theme: "Books & Reading",
    part1: [
      { q: "Do you enjoy reading?", sample: "Very much so — it's one of my favourite ways to relax and learn at the same time. I tend to read across quite a range of subjects, although I lean towards non-fiction because I like coming away from a book knowing something I didn't before." },
      { q: "What kind of books do you prefer?", sample: "I'm particularly drawn to books on history, science and personal development. I find real stories and ideas more compelling than fiction, generally speaking, though I do enjoy a well-written novel now and then to switch off properly." },
      { q: "Do you prefer physical books or e-books?", sample: "I'm a bit old-fashioned in that I still prefer physical books — I like the feel of them and find I concentrate better without the distractions a screen brings. That said, I appreciate e-books for travel, since carrying a whole library in one device is undeniably convenient." },
    ],
    cueCard: {
      title: "Describe a book that had an impact on you.",
      points: ["What the book is", "When and why you read it", "What it is about", "Why it had an impact on you"],
      followUp: "Do you think people will still read books in the future?",
      sample: "A book that genuinely had a lasting impact on me was a work on habits and personal productivity that I read a few years ago. I picked it up at a point when I felt I was working hard but not necessarily achieving much, and I was looking for a more structured way to approach my goals. The central idea was that small, consistent changes compound into significant results over time, rather than relying on bursts of motivation. That message resonated with me deeply because it reframed success as a matter of systems and routines rather than willpower. After reading it, I genuinely changed several of my daily habits, and I've seen real benefits in both my work and personal life. It's rare for a single book to shift the way you operate, but that one did, and I still recommend it to people regularly.",
    },
    part3: [
      { q: "Why do you think fewer young people read books today?", sample: "The main reason is competition for attention. Young people have endless alternatives — social media, streaming, gaming — that offer instant gratification, whereas reading requires sustained focus and patience. There's also the issue of habit; if reading isn't encouraged early at home and school, it's unlikely to develop later. That said, I'd argue many young people read a great deal online, just not in traditional book form." },
      { q: "What are the benefits of reading compared to watching television?", sample: "Reading is a more active mental process — you have to imagine settings, interpret meaning and follow complex arguments, which exercises the mind in ways passive viewing doesn't. It also tends to improve vocabulary, concentration and writing ability. Television certainly has value, particularly well-made documentaries, but it generally demands less of the viewer. Reading builds mental stamina, which is increasingly rare in an age of short attention spans." },
    ],
  },
  {
    id: "films",
    theme: "Films & Entertainment",
    part1: [
      { q: "Do you enjoy watching films?", sample: "I do, although I'm fairly selective about what I watch. I'd rather watch one film I'm genuinely interested in than have something on in the background. A good film, for me, is a proper way to unwind at the end of a long week." },
      { q: "What kind of films do you like?", sample: "I tend to gravitate towards thrillers and well-crafted dramas, the kind that keep you thinking afterwards. I'm less keen on films that are purely action with little substance, though I do appreciate a light comedy when I just want to switch off." },
      { q: "Do you prefer watching films at the cinema or at home?", sample: "Both have their appeal. The cinema offers an immersive experience that's hard to match — the big screen and sound system really pull you in. But honestly, for convenience and comfort, I more often watch at home these days, especially with so much available through streaming." },
    ],
    cueCard: {
      title: "Describe a film or TV programme that you enjoyed watching.",
      points: ["What it was about", "When and where you watched it", "Who you watched it with", "Why you enjoyed it"],
      followUp: "Do you think films can teach people important lessons?",
      sample: "A film I particularly enjoyed was a biographical drama based on the life of a real scientist, which I watched at home with my family one weekend. It told the story of someone who overcame enormous obstacles and scepticism to make a groundbreaking discovery. I enjoyed it on several levels — it was beautifully made and well-acted, but more than that, it was genuinely inspiring. Watching someone persist in the face of repeated failure was quietly motivating, and it sparked a really good conversation with my family afterwards about perseverance and self-belief. That's what I appreciate most in a film: when it entertains you in the moment but also leaves you with something to think about long after the credits roll. A purely forgettable film is fine, but the ones that stay with you are special.",
    },
    part3: [
      { q: "Why are films from some countries more popular internationally than others?", sample: "A lot of it comes down to industry scale and marketing power — countries with large, well-funded film industries can produce polished work and distribute it globally. Language plays a part too, since films in widely spoken languages reach bigger audiences more easily. Cultural familiarity matters as well; audiences are often more comfortable with themes and styles they recognise, which gives established film cultures an advantage." },
      { q: "Do you think streaming services have changed how people watch films?", sample: "Profoundly. People now watch what they want, when they want, which has shifted power away from cinemas and traditional schedules. It's also changed viewing habits — binge-watching entire series in one sitting was unheard of a generation ago. On the downside, the sheer volume of content can be overwhelming, and the shared cultural experience of everyone watching the same thing at the same time has largely disappeared." },
    ],
  },
  {
    id: "health",
    theme: "Health & Lifestyle",
    part1: [
      { q: "What do you do to stay healthy?", sample: "I try to keep things balanced rather than extreme. I watch what I eat, stay reasonably active with regular walks, and make a real effort to get enough sleep, which I think people underestimate. I find that consistency matters far more than any short-lived crash diet." },
      { q: "Do you think your diet is healthy?", sample: "On the whole, yes, though there's certainly room for improvement. I cook at home most of the time, which gives me control over ingredients, but I do have a weakness for sweet things that I'm trying to keep in check." },
      { q: "How important is sleep to you?", sample: "Extremely important — it's something I've become much more conscious of as I've got older. When I don't sleep well, I notice it immediately in my mood and concentration, so I try to protect my sleep almost as much as my diet or exercise." },
    ],
    cueCard: {
      title: "Describe a healthy habit you have or would like to develop.",
      points: ["What the habit is", "How you developed it or plan to", "What benefits it brings", "How easy or difficult it is to maintain"],
      followUp: "Do you think people today are more health-conscious than in the past?",
      sample: "A healthy habit I've worked hard to develop is going for a brisk walk every morning before I start my day. I began it almost by accident during a quieter period when I had a bit more time, and I was surprised by how much of a difference it made, so I made a conscious decision to keep it up. The benefits have been considerable — not just physically, but mentally. Starting the day with movement and fresh air leaves me noticeably calmer and more focused, and it's become a kind of thinking time where I plan my day. I won't pretend it's always easy; on cold or busy mornings the temptation to skip it is real. But because I've felt the benefits so clearly, the motivation to maintain it usually wins out. It's now such a fixed part of my routine that the day feels off without it.",
    },
    part3: [
      { q: "Why do you think obesity is becoming more common in many countries?", sample: "Several factors are converging. Modern lifestyles have become far more sedentary, with desk jobs and screen time replacing physical activity. At the same time, cheap, calorie-dense processed food is more available than ever, and often heavily marketed. Larger portion sizes and busier lives that leave little time for cooking all add to the problem. It's really a combination of how we live, work and eat that's driving the trend." },
      { q: "Whose responsibility is it to keep people healthy — individuals or the government?", sample: "I'd say it's genuinely shared. Individuals must take responsibility for their own choices, since no one can be forced to live healthily. But governments shape the environment in which those choices are made — through food regulation, public health education, urban planning and access to healthcare. When unhealthy options are cheapest and most convenient, expecting individuals to resist entirely on willpower is unrealistic, so policy and personal responsibility have to work together." },
    ],
  },
  {
    id: "shopping",
    theme: "Shopping & Money",
    part1: [
      { q: "Do you enjoy shopping?", sample: "It depends on what I'm shopping for. I quite enjoy browsing for things I'm genuinely interested in, like books or gadgets, but I find routine shopping such as groceries more of a chore. I'm definitely not someone who shops purely for entertainment." },
      { q: "Do you prefer shopping online or in physical stores?", sample: "Increasingly online, mainly for the convenience and the ability to compare prices easily. That said, for certain things like clothes or fresh food, I still prefer physical stores, because being able to see and try things in person makes a real difference." },
      { q: "Are you good at saving money?", sample: "I'd like to think so — I'm fairly disciplined and tend to budget carefully, probably because of my background in finance. I believe in living within my means and putting something aside regularly rather than spending impulsively." },
    ],
    cueCard: {
      title: "Describe something you bought recently that you were happy with.",
      points: ["What you bought", "Where and why you bought it", "How much it cost", "Why you were happy with it"],
      followUp: "Do you think people buy too many things they don't really need?",
      sample: "Something I bought recently that I've been really happy with is a good-quality ergonomic office chair. I'd been working long hours at a desk and increasingly suffering from back discomfort, so after a fair amount of research I decided it was worth investing in something properly supportive rather than buying the cheapest option. It wasn't exactly cheap — it cost considerably more than I'd normally spend on furniture — but I justified it as an investment in my health and productivity. And honestly, it's been one of the best purchases I've made in a long time. The difference to my comfort during a working day has been remarkable, and the back problems have largely disappeared. It taught me a useful lesson, actually: that paying more for something you use every day often works out cheaper in the long run than repeatedly buying cheap alternatives.",
    },
    part3: [
      { q: "Why do you think advertising is so powerful?", sample: "Advertising is effective because it taps into emotions rather than just presenting facts. Skilled advertisers associate products with feelings — happiness, status, belonging — so we end up buying an image rather than just an object. Repetition reinforces this, making brands feel familiar and trustworthy. With modern data, advertising has also become extraordinarily targeted, reaching us with exactly the right message at the right moment, which makes it harder than ever to resist." },
      { q: "Is it important to teach children about managing money?", sample: "Absolutely essential, in my view. Money management is a fundamental life skill that many adults struggle with, often because they were never taught it properly. Teaching children early about budgeting, saving and the difference between needs and wants gives them habits that last a lifetime and protects them from problems like debt later on. It's arguably as important as many academic subjects, yet it's frequently neglected in formal education." },
    ],
  },
  {
    id: "art",
    theme: "Art & Creativity",
    part1: [
      { q: "Are you a creative person?", sample: "I'd say I'm creative in a practical sense rather than an artistic one. I enjoy building and designing things — websites and projects, for instance — and finding clever solutions to problems. I'm less skilled at traditional arts like painting, though I do appreciate them." },
      { q: "Did you enjoy art classes at school?", sample: "I had mixed feelings about them, to be honest. I enjoyed the freedom of creating something, but I was never particularly talented at drawing or painting, so I sometimes found them a little frustrating. I appreciated the value of the subject more as I got older." },
      { q: "Do you ever visit art galleries or museums?", sample: "Occasionally, yes, especially when I'm travelling somewhere new. I find that visiting a good museum is one of the best ways to understand a place's history and culture. I wouldn't call myself an expert, but I genuinely enjoy the experience." },
    ],
    cueCard: {
      title: "Describe a creative person you admire.",
      points: ["Who the person is", "What kind of creative work they do", "Why their work is impressive", "How their work makes you feel"],
      followUp: "Do you think creativity is something people are born with or can develop?",
      sample: "A creative person I genuinely admire is a designer whose work I follow online — someone who creates clean, elegant visual designs and user interfaces. Strictly speaking they work in digital design rather than fine art, but I'd argue it's just as creative. What impresses me most is the way they make complex things look effortlessly simple; there's a real discipline in stripping away everything unnecessary until only what matters remains. Their work has a calmness and clarity to it that I find genuinely satisfying to look at. It also inspires me directly, because I build web projects myself, and studying their approach has pushed me to think more carefully about how my own work looks and feels to use. I think good design is a quietly powerful form of creativity — it shapes our daily experience without us even noticing, and doing that well takes real talent.",
    },
    part3: [
      { q: "Why is art important in society?", sample: "Art serves several vital functions. It allows people to express ideas and emotions that are difficult to convey in any other way, and it preserves and communicates culture across generations. Art can also challenge how we see the world, prompting reflection and even social change. Beyond all that, it simply enriches life — a world without music, design or visual art would be functional but far poorer in spirit." },
      { q: "Should governments fund the arts, or should artists support themselves?", sample: "I lean towards a balance, but I do think some public funding is justified. Left entirely to the market, only commercially popular art would survive, and a lot of valuable, experimental or culturally important work would disappear. Public funding helps preserve heritage and supports artists whose work has merit but limited commercial appeal. That said, it shouldn't replace personal initiative — funding works best as support rather than a complete substitute for an artist earning a living." },
    ],
  },
  {
    id: "weather",
    theme: "Weather & Seasons",
    part1: [
      { q: "What kind of weather do you like best?", sample: "I'm particularly fond of mild, sunny weather — warm enough to be outdoors comfortably but without the intense heat. Where I live it can get extremely hot, so a pleasant, breezy day feels like a real treat when it comes along." },
      { q: "Does the weather affect your mood?", sample: "More than I'd like to admit, actually. A bright, clear day genuinely lifts my spirits and makes me more productive, whereas grey, gloomy weather can leave me feeling a little sluggish. I think a lot of people are affected this way, even if subtly." },
      { q: "What is the weather usually like in your country?", sample: "Where I live it's predominantly hot and dry, with very long, intense summers and fairly mild winters. We don't get much rainfall at all, so the seasons are less varied than in many countries — it's really a case of hot and hotter." },
    ],
    cueCard: {
      title: "Describe a time when the weather affected your plans.",
      points: ["What you had planned", "What the weather was like", "How it affected your plans", "How you felt about it"],
      followUp: "Do you think weather forecasts are reliable these days?",
      sample: "I remember a time when I'd arranged an outdoor gathering with friends — a barbecue at a park that we'd been looking forward to for weeks. We'd planned everything carefully and the forecast had looked promising, but on the day itself the weather turned unexpectedly, with strong winds and a sudden downpour that simply made being outside impossible. At first I was quite disappointed, because a lot of effort had gone into organising it and everyone had cleared their schedules. But rather than cancel altogether, we improvised and moved everything to my home, cooking indoors instead. In the end it turned out surprisingly well — being indoors actually made it cosier and more relaxed, and we ended up talking for hours. It taught me a small but useful lesson about staying flexible, since some of the best moments come from plans that don't go as intended.",
    },
    part3: [
      { q: "How does weather affect people's daily lives?", sample: "Its influence is enormous, often more than we realise. Weather shapes what we wear, how we travel, and even our moods and energy levels. On a larger scale, it affects entire industries — agriculture depends on it completely, and sectors like tourism, construction and retail are all heavily weather-sensitive. Extreme weather can disrupt transport and the economy significantly, so despite all our technology, we remain surprisingly at the mercy of the elements." },
      { q: "Do you think climate change is affecting the weather?", sample: "The evidence strongly suggests so, yes. Scientists have linked rising global temperatures to more frequent and intense extreme weather events — heatwaves, severe storms, floods and droughts. Weather patterns that were once predictable seem to be becoming more erratic. While individual events are hard to attribute with certainty, the overall trend points clearly in one direction, and it's something that will increasingly affect how and where people are able to live." },
    ],
  },
  {
    id: "festivals",
    theme: "Festivals & Celebrations",
    part1: [
      { q: "What festivals are important in your country?", sample: "Religious festivals are by far the most significant where I'm from — they're occasions when families come together, share special meals and exchange gifts. They have deep cultural and spiritual meaning, and the whole atmosphere of the country changes during these times." },
      { q: "How do you usually celebrate special occasions?", sample: "Typically by gathering with family and close friends over a good meal. We're not particularly extravagant about it; for us the value lies in the company rather than in elaborate decorations or expensive parties. Sharing food together is really at the heart of it." },
      { q: "Do you prefer big celebrations or small gatherings?", sample: "I lean towards smaller, more intimate gatherings. Large celebrations can be fun and lively, but I often find them a little overwhelming. With a smaller group you can have proper conversations and actually connect with people, which I value much more." },
    ],
    cueCard: {
      title: "Describe a festival or celebration that is important in your culture.",
      points: ["What the festival is", "When it takes place", "What people do during it", "Why it is important"],
      followUp: "Do you think traditional festivals are losing their importance today?",
      sample: "One of the most important celebrations in my culture is a major religious festival that takes place once a year and brings the entire community together. In the days leading up to it, there's a real sense of anticipation — homes are cleaned and prepared, special foods are cooked, and people buy new clothes for the occasion. On the day itself, families gather for a large shared meal, visit relatives and neighbours, and give gifts, especially to children. There's a strong emphasis on charity too, with people making a point of helping those less fortunate. What makes it so important is the sense of unity and gratitude it creates — for a few days, everyday differences seem to fade and there's a shared spirit of generosity and togetherness. It's also a time that reconnects people with their faith and their families, which in a busy modern life is increasingly precious.",
    },
    part3: [
      { q: "Why do you think festivals are important for communities?", sample: "Festivals play a powerful role in binding communities together. They create shared experiences and traditions that give people a sense of belonging and continuity across generations. They're also a way of passing cultural values and history down to younger people in a way that feels meaningful rather than dry. On a more human level, festivals simply give people a reason to pause, celebrate and connect, which is increasingly valuable in busy, fragmented modern societies." },
      { q: "How have the ways people celebrate changed over time?", sample: "Celebrations have become more commercialised and, in some ways, more individualistic. Many festivals now have a strong consumer element, with significant spending on gifts and decorations. Technology has changed things too — people often share celebrations online or connect with distant relatives by video rather than in person. Some traditional rituals have faded as a result, though the core idea of marking special occasions together endures, just in updated forms." },
    ],
  },
  {
    id: "friends",
    theme: "Friends & Social Life",
    part1: [
      { q: "Do you have a large group of friends or a few close ones?", sample: "I definitely fall into the 'few close friends' category. I've never been someone with a huge social circle; I'd much rather have a small number of people I can genuinely rely on and be myself around than a large group of acquaintances." },
      { q: "How often do you see your friends?", sample: "Not as often as I'd like, if I'm honest — adult life and work have a way of getting in the way. We make an effort to meet up every few weeks, and in between we keep in touch through messages and calls, which helps maintain the connection." },
      { q: "How did you meet your best friend?", sample: "We met during our school years and simply clicked straight away. We shared similar interests and a similar sense of humour, and the friendship just grew naturally from there. It's lasted all these years, which I think says a lot about how genuine it was from the start." },
    ],
    cueCard: {
      title: "Describe a good friend you have known for a long time.",
      points: ["Who the person is", "How and when you met", "What you usually do together", "Why your friendship has lasted"],
      followUp: "Do you think it is possible to have a real friendship online?",
      sample: "A good friend I've known for a very long time is someone I met back in my school days. We were in the same class and grew close almost immediately, partly because we shared the same outlook on things and could laugh at the same jokes. Over the years, we've stayed in touch despite our lives going in different directions. When we do get the chance to meet, we usually do something low-key — grab a meal, go for a long walk, or simply sit and talk for hours catching up. What I think has kept the friendship alive for so long is honesty and a complete lack of judgement; I can tell this person anything and know it won't change how they see me. There's also a comfort in shared history — they knew me before I became who I am now, and that kind of friendship is genuinely irreplaceable. I consider myself very fortunate to have it.",
    },
    part3: [
      { q: "How have friendships changed because of social media?", sample: "Social media has reshaped friendships in significant ways. On the positive side, it makes staying in touch effortless, especially with people who live far away, and it can help maintain connections that distance might otherwise break. The downside is that it can encourage shallow, quantity-over-quality relationships — people may have hundreds of online 'friends' but few they could turn to in a crisis. It's also created some pressure to present an idealised version of life, which can make genuine connection harder." },
      { q: "Do you think friends or family are more important?", sample: "That's a difficult one, and I think both are essential in different ways. Family offers a kind of unconditional support and a sense of roots that's hard to replicate. Friends, on the other hand, are chosen, which gives those relationships a different quality — they often understand the day-to-day reality of your life better. Rather than ranking them, I'd say a fulfilling life really needs both, since each meets needs the other can't fully satisfy." },
    ],
  },
  {
    id: "childhood",
    theme: "Childhood & Memories",
    part1: [
      { q: "What did you enjoy doing as a child?", sample: "I have fond memories of playing outdoors with the other children in my neighbourhood — simple games that cost nothing but kept us busy for hours. I also loved reading, which started early and, as it turned out, became a lifelong habit." },
      { q: "Where did you grow up?", sample: "I grew up in a fairly typical urban environment, in a close neighbourhood where everyone seemed to know one another. Looking back, it was a secure and friendly place to spend a childhood, and I have largely happy memories of it." },
      { q: "Do you have a happy memory from your childhood?", sample: "Many, thankfully. One that stands out is family trips during the holidays — long journeys, all of us packed together, that felt like a great adventure at the time. They weren't expensive or elaborate, but the sense of togetherness made them special, and I still smile thinking about them." },
    ],
    cueCard: {
      title: "Describe a happy memory from your childhood.",
      points: ["What the memory is", "When and where it happened", "Who was involved", "Why it is a happy memory for you"],
      followUp: "Do you think childhood is the happiest time of a person's life?",
      sample: "A particularly happy memory from my childhood is of a family trip we took to visit relatives one summer when I was quite young. The whole family travelled together, and although the journey itself was long, it felt like a great adventure to me at that age. I remember the excitement of seeing cousins I rarely got to spend time with, days filled with games and exploring, and big family meals where everyone talked and laughed late into the evening. What makes it such a happy memory isn't any single dramatic event — it's the overall feeling of warmth, belonging and carefree joy that defined those days. As a child I had no real worries or responsibilities, so I could simply be in the moment and enjoy it fully. Looking back as an adult, I appreciate just how precious that simplicity was, and it's a memory I return to whenever I want to feel grounded.",
    },
    part3: [
      { q: "Do you think children today have a better childhood than children in the past?", sample: "It's a real trade-off. In many ways children today are better off — they have access to more opportunities, better healthcare and a wealth of information and technology. However, some would argue they've lost certain things, like the unstructured outdoor play that previous generations enjoyed, and they face new pressures from social media and academic competition at younger ages. So it's better in material terms, but not necessarily in every respect that matters." },
      { q: "Why do people often remember their childhood so fondly?", sample: "Part of it is psychological — memory tends to filter out the difficult parts and preserve the good ones, which is sometimes called rosy retrospection. But there are genuine reasons too. Childhood, for many, is a time with fewer responsibilities and worries, more free time, and a sense of wonder that fades with age. Those early experiences also shape us deeply and are often tied to family and security, which gives them a lasting emotional weight." },
    ],
  },
  {
    id: "future-plans",
    theme: "Future Plans & Ambitions",
    part1: [
      { q: "Do you have any plans for the near future?", sample: "Yes, I have a few. In the short term I'm focused on developing a personal project I've been working on, and professionally I'm aiming to take on more responsibility. I like having clear goals to work towards rather than drifting along without direction." },
      { q: "Where would you like to be in five years' time?", sample: "Professionally, I'd like to have advanced into a more senior role, and personally I hope to have grown my side project into something more substantial. Beyond the specifics, I just hope to keep learning and improving rather than standing still." },
      { q: "Do you prefer to plan ahead or be spontaneous?", sample: "I'm naturally a planner — I feel more comfortable when I have a clear sense of where I'm heading. That said, I've learned to leave room for spontaneity, because some of life's best experiences are the unplanned ones, and being too rigid can mean missing out." },
    ],
    cueCard: {
      title: "Describe a goal you would like to achieve in the future.",
      points: ["What the goal is", "Why it is important to you", "What you are doing to achieve it", "How you will feel when you achieve it"],
      followUp: "Do you think it is important for people to set goals?",
      sample: "A goal I'd really like to achieve in the future is to grow an educational project I've been building into something that genuinely helps a large number of people. It started as a personal side project, but it's become important to me because I strongly believe in the power of accessible education to change lives, and I'd love to play even a small part in that. To work towards it, I'm steadily developing the platform, improving its quality and learning new technical skills along the way, usually in whatever free time I can find around my main job. It's slow progress, but it's progress. I think the day I see it making a real difference to people's learning — students passing exams or gaining skills they couldn't access otherwise — I'll feel an enormous sense of fulfilment, far more than any financial reward could provide. It's the kind of goal that gives my spare time a real sense of purpose.",
    },
    part3: [
      { q: "Why do some people achieve their goals while others give up?", sample: "The difference often lies in persistence and realistic planning rather than raw talent. People who succeed tend to break large goals into manageable steps and keep going through setbacks, treating failure as feedback rather than defeat. Those who give up often set vague or unrealistic targets, or lose motivation when results don't come quickly. Support networks and genuine personal investment in the goal also make a big difference to whether someone sees it through." },
      { q: "Is it better to have one big goal or several smaller ones?", sample: "I think there's value in having both working together. A single big goal provides direction and a sense of purpose — something meaningful to aim for over the long term. But that big goal can feel overwhelming on its own, which is where smaller goals come in: they break the journey into achievable stages and provide regular motivation through small wins. So rather than choosing between them, the most effective approach is usually a major goal supported by a series of smaller milestones along the way." },
    ],
  },
  {
    id: "internet-media",
    theme: "The Internet & Media",
    part1: [
      { q: "How do you usually get your news?", sample: "Mostly online these days — through news websites and a few trusted apps on my phone. I rarely watch television news anymore. I do try to check more than one source, though, because I'm aware of how easily news can be slanted one way or another." },
      { q: "Do you use social media a lot?", sample: "Moderately, I'd say. I use it to keep up with friends and follow a few topics I'm interested in, but I'm fairly conscious of not letting it consume too much of my time. I've found I'm happier when I limit how much I scroll." },
      { q: "Do you think the internet is a reliable source of information?", sample: "It can be, but you have to be discerning. There's an extraordinary amount of high-quality information online, but also a great deal of misinformation, so the skill lies in knowing how to evaluate sources critically. The internet is only as reliable as the judgement of the person using it." },
    ],
    cueCard: {
      title: "Describe a useful website or app that you often use.",
      points: ["What it is", "How you found out about it", "What you use it for", "Why you find it useful"],
      followUp: "Do you think people rely too much on apps and the internet?",
      sample: "A website I find genuinely useful and use almost daily is an online learning platform that offers courses and tutorials on a huge range of subjects. I came across it a few years ago when I was trying to teach myself some technical skills for a project, and it quickly became indispensable. I use it to learn everything from coding and design to broader professional skills, usually working through a lesson or two whenever I have a spare half hour. What makes it so valuable to me is that it puts world-class learning within reach of anyone with an internet connection, at little or no cost — something that would have been unimaginable a generation ago. It's allowed me to develop skills I'd never have learned otherwise, entirely at my own pace. For someone like me who enjoys continuous self-improvement, it's been quietly transformative, and it perfectly captures what I think the internet should be used for.",
    },
    part3: [
      { q: "How has the internet changed the way people access information?", sample: "It's been a complete transformation. Information that was once locked away in libraries or available only to experts is now instantly accessible to almost anyone, anywhere. This has democratised knowledge in a remarkable way and enabled self-directed learning on a massive scale. The flip side is information overload and the difficulty of judging what's trustworthy, so while access has improved enormously, the skill of filtering and verifying information has become more important than ever." },
      { q: "What are the dangers of getting news only from social media?", sample: "There are several real risks. Social media algorithms tend to show people content that confirms their existing views, creating echo chambers that narrow perspectives and deepen division. Misinformation can also spread extremely quickly, often faster than corrections can catch up. And because anyone can publish, it's frequently unclear who's behind a piece of news or what their motives are. Relying solely on it, without checking established, accountable sources, can leave people with a distorted picture of reality." },
    ],
  },
  {
    id: "nature-animals",
    theme: "Nature & Animals",
    part1: [
      { q: "Do you like animals?", sample: "I do, very much. I find animals fascinating and often quite calming to be around. I've always had a soft spot for them, and I think there's a lot we can learn from observing how they behave and adapt to their environments." },
      { q: "Have you ever had a pet?", sample: "Yes, we had a pet when I was growing up, and it was very much part of the family. Looking after it taught me a fair amount about responsibility and care from a young age, and it was a genuine source of companionship and joy at home." },
      { q: "Do you prefer spending time in the city or in nature?", sample: "While I live and work in a city and appreciate its convenience, my heart leans towards nature. I find that spending time somewhere green and quiet recharges me in a way the city never does, so I try to escape to natural surroundings whenever I get the opportunity." },
    ],
    cueCard: {
      title: "Describe an animal you find interesting.",
      points: ["What the animal is", "What it looks like", "Where it lives", "Why you find it interesting"],
      followUp: "Do you think zoos are a good way for people to learn about animals?",
      sample: "An animal I find genuinely fascinating is the octopus. It's a remarkable-looking creature, soft-bodied with eight arms lined with sensitive suckers, and it can change both the colour and texture of its skin almost instantly to blend into its surroundings. They live in oceans all around the world, often hiding among rocks and reefs. What makes them so interesting to me is their intelligence, which is extraordinary for an invertebrate — they can solve problems, use tools, and even appear to display distinct personalities. The fact that such a sophisticated intelligence evolved along a completely different path from our own is genuinely thought-provoking; it challenges our assumptions about what intelligence is and where it can arise. I find it humbling, really — a reminder of how much complexity and wonder exists in the natural world that we tend to overlook. Every time I read something new about them, I'm amazed all over again.",
    },
    part3: [
      { q: "Why is it important to protect wild animals and their habitats?", sample: "Protecting wildlife matters for several interconnected reasons. Ecologically, every species plays a role in maintaining the balance of its ecosystem, and losing one can have unpredictable knock-on effects. There's also the simple fact that biodiversity has intrinsic value and, once lost, is gone forever. Beyond that, healthy natural environments provide humans with essential services — clean air and water, pollination, climate regulation — so protecting habitats is ultimately in our own self-interest as much as the animals'." },
      { q: "Do you think humans and wildlife can coexist in modern cities?", sample: "I think they can, and increasingly must, though it requires deliberate effort. As cities expand, they inevitably encroach on natural habitats, creating conflict. But thoughtful urban planning — green corridors, parks, ponds and wildlife-friendly design — can allow many species to thrive alongside people. Some animals adapt remarkably well to urban life. It won't suit every species, of course, but with the right approach, cities don't have to be entirely hostile to nature, and there's real value in keeping that connection alive." },
    ],
  },
  {
    id: "language",
    theme: "Language & Communication",
    part1: [
      { q: "How many languages can you speak?", sample: "I can speak a couple of languages reasonably well, including English, which I use a great deal for both work and my online projects. I'd love to learn another one properly someday, as I think every new language opens a window onto a different way of thinking." },
      { q: "Do you think learning English is important?", sample: "Without question, in today's world. English has become the common language of business, science, and the internet, so being able to use it confidently opens up an enormous range of opportunities — access to information, jobs, and communication with people across the globe." },
      { q: "What is the best way to learn a new language?", sample: "In my experience, the most effective approach combines consistent daily practice with as much real exposure as possible — listening, reading and, crucially, actually speaking it without being afraid of mistakes. Immersion is ideal if you can manage it, but regular, active practice is the real key." },
    ],
    cueCard: {
      title: "Describe a time when you successfully communicated with someone despite a language barrier.",
      points: ["When and where it happened", "Who you were communicating with", "How you managed to communicate", "How you felt afterwards"],
      followUp: "Do you think technology will eventually remove language barriers completely?",
      sample: "I recall an occasion while travelling when I needed directions in a place where I didn't share a common language with the locals. I'd become quite lost, and the person I approached spoke almost no English, just as I spoke none of their language. Rather than give up, we communicated through a combination of gestures, pointing at a map, drawing rough diagrams, and using a translation app on my phone for the trickier parts. It was slow and a little comical at times, but between us we managed perfectly well, and they eventually pointed me in exactly the right direction. Afterwards I felt genuinely uplifted by the experience — it struck me how much human beings can understand one another through goodwill and patience alone, even without a shared language. It was a small but memorable reminder that communication runs much deeper than just words, and that a willingness to try is often enough.",
    },
    part3: [
      { q: "Why do you think some languages are disappearing?", sample: "Languages typically disappear when speakers shift to a more dominant language for practical reasons — usually because it offers better economic or social opportunities. Globalisation accelerates this, as a handful of major languages come to dominate business, media and education. When younger generations stop learning their ancestral language, it can vanish within a generation or two. It's a real loss, because each language carries unique knowledge, culture and ways of seeing the world that can't easily be recovered." },
      { q: "What are the advantages of being able to speak more than one language?", sample: "The advantages are considerable. Practically, it opens up career opportunities and makes travel and communication far easier. Cognitively, research suggests bilingual people often have advantages in areas like attention and even delayed onset of certain age-related decline. Perhaps most valuably, knowing another language gives you genuine insight into another culture and way of thinking — you don't just learn words, you gain a different perspective on the world, which fosters empathy and broad-mindedness." },
    ],
  },
  {
    id: "city-life",
    theme: "City Life & Urban Living",
    part1: [
      { q: "Do you live in a city or the countryside?", sample: "I live in a city, and have done for most of my life. I'm well used to the pace and convenience of urban living, although I do occasionally daydream about the peace and space that the countryside would offer." },
      { q: "What do you like and dislike about living in a city?", sample: "What I like most is the sheer convenience — work, services, shops and entertainment are all close at hand, and there's always something happening. What I dislike is the flip side of that: the traffic, the crowds and the constant noise, which can become wearing over time." },
      { q: "Would you ever consider moving to a different city?", sample: "I'd certainly consider it for the right opportunity — a better job or quality of life, for instance. I'm fairly adaptable and quite enjoy the idea of experiencing somewhere new, though I'd weigh it carefully, since uprooting an established life is no small decision." },
    ],
    cueCard: {
      title: "Describe a city you would like to live in.",
      points: ["Which city it is", "What you know about it", "Why you would like to live there", "What you think life there would be like"],
      followUp: "Do you think big cities will become more or less crowded in the future?",
      sample: "A city I'd genuinely like to live in for a while is one of the well-planned, modern cities known for their excellent quality of life — somewhere that combines economic opportunity with cleanliness, efficiency and green space. I've read and heard a great deal about how such places manage to be both highly developed and remarkably liveable, with superb public transport, low crime, and a strong emphasis on parks and the environment. I'd like to live there partly out of curiosity, to experience first-hand how a city can be organised so well, and partly because I think the lifestyle would suit me. I imagine daily life there would be far smoother than what I'm used to — getting around easily without relying on a car, feeling safe walking at night, and having nature within easy reach despite being in a busy city. It strikes me as the kind of place that proves urban living doesn't have to mean stress and congestion, and I find that genuinely appealing.",
    },
    part3: [
      { q: "What are the main problems facing big cities today?", sample: "Big cities grapple with a familiar set of pressures. Traffic congestion and pollution are among the most visible, alongside overcrowding and a chronic shortage of affordable housing, which pushes ordinary residents to the margins. Many cities also struggle with inequality, as wealth and poverty exist side by side. Add the strain on infrastructure and public services from growing populations, and you have a complex web of challenges that requires careful long-term planning rather than quick fixes." },
      { q: "How can cities be made more sustainable?", sample: "Sustainability requires action on several fronts. Investing in efficient public transport and cycling infrastructure reduces reliance on cars and cuts emissions. Energy-efficient buildings and renewable power lower a city's environmental footprint, while expanding green spaces improves both air quality and residents' wellbeing. Better waste management and recycling matter too. Crucially, all of this depends on forward-thinking urban planning that prioritises long-term liveability over short-term growth — designing cities for people and the planet, not just for expansion." },
    ],
  },
];

export function getSpeakingTest(): SpeakingTopic {
  return pickRandom(SPEAKING_TOPICS);
}