// Cambridge O Level Biology 5090 syllabus structure (exams 2026, 2027 and 2028).
// Topic numbers and titles follow the official syllabus subject content.
// Independent material: not produced or endorsed by Cambridge University Press & Assessment.
//
// Client-safe: metadata only. Notes, revision data and MCQs live in separate
// server-only files so they never land in a client bundle.

export interface BiologyTopicMeta {
  topic: string;       // e.g. "11.2"
  slug: string;        // URL-safe: "11-2"
  topicId: string;     // Storage & Firestore doc id: "o5090-11.2"
  section: number;     // 1..19
  topicTitle: string;
  videoId?: string;    // Optional YouTube video ID when available
  model?: string;      // Optional interactive model key, e.g. "heart"
}

export interface BiologySectionMeta {
  number: number;
  title: string;
  description: string;
  topics: BiologyTopicMeta[];
}

const t = (topic: string, section: number, topicTitle: string, extra: Partial<BiologyTopicMeta> = {}): BiologyTopicMeta => ({
  topic,
  slug: topic.replace(".", "-"),
  topicId: `o5090-${topic}`,
  section,
  topicTitle,
  ...extra,
});

export const O_LEVEL_BIOLOGY_SECTIONS: BiologySectionMeta[] = [
  { number: 1, title: "Cells", description: "Animal, plant and bacterial cells, specialised cells, tissues and organs.", topics: [
    t("1.1", 1, "Cell structure and function"),
    t("1.2", 1, "Specialised cells, tissues and organs"),
  ]},
  { number: 2, title: "Classification", description: "How living things are grouped and named, and the features of the main groups.", topics: [
    t("2.1", 2, "Concept and use of a classification system"),
    t("2.2", 2, "Features of organisms"),
  ]},
  { number: 3, title: "Movement into and out of cells", description: "Diffusion, osmosis and active transport.", topics: [
    t("3.1", 3, "Diffusion and osmosis"),
    t("3.2", 3, "Active transport"),
  ]},
  { number: 4, title: "Biological molecules", description: "Carbohydrates, fats, proteins and DNA, and the food tests.", topics: [
    t("4.1", 4, "Biological molecules"),
  ]},
  { number: 5, title: "Enzymes", description: "How enzymes work and how temperature and pH affect them.", topics: [
    t("5.1", 5, "Enzyme action"),
    t("5.2", 5, "Effects of temperature and pH"),
  ]},
  { number: 6, title: "Plant nutrition", description: "Photosynthesis, leaf structure and mineral ions.", topics: [
    t("6.1", 6, "Photosynthesis"),
    t("6.2", 6, "Leaf structure"),
    t("6.3", 6, "Mineral nutrition"),
  ]},
  { number: 7, title: "Transport in flowering plants", description: "Xylem and phloem, water uptake, transpiration and translocation.", topics: [
    t("7.1", 7, "Uptake and transport of water and ions"),
    t("7.2", 7, "Transpiration and translocation"),
  ]},
  { number: 8, title: "Human nutrition", description: "A balanced diet, the digestive system, absorption and assimilation.", topics: [
    t("8.1", 8, "Diet"),
    t("8.2", 8, "Human digestive system"),
    t("8.3", 8, "Absorption and assimilation"),
  ]},
  { number: 9, title: "Human gas exchange", description: "The breathing system, gas exchange in the alveoli and breathing movements.", topics: [
    t("9.1", 9, "Human gas exchange"),
  ]},
  { number: 10, title: "Respiration", description: "Aerobic and anaerobic respiration and their uses.", topics: [
    t("10.1", 10, "Respiration"),
    t("10.2", 10, "Aerobic respiration"),
    t("10.3", 10, "Anaerobic respiration"),
  ]},
  { number: 11, title: "Transport in humans", description: "The circulatory system, the heart, blood vessels and blood.", topics: [
    t("11.1", 11, "Circulatory system"),
    t("11.2", 11, "Heart", { model: "heart" }),
    t("11.3", 11, "Blood vessels"),
    t("11.4", 11, "Blood"),
  ]},
  { number: 12, title: "Disease and immunity", description: "Pathogens, antibiotics and the immune response.", topics: [
    t("12.1", 12, "Disease"),
    t("12.2", 12, "Antibiotics"),
    t("12.3", 12, "Immunity"),
  ]},
  { number: 13, title: "Excretion", description: "Excretory products and the urinary system.", topics: [
    t("13.1", 13, "Excretion"),
    t("13.2", 13, "Urinary system"),
  ]},
  { number: 14, title: "Coordination and control", description: "Nervous system, sense organs, hormones and homeostasis.", topics: [
    t("14.1", 14, "Mammalian nervous system"),
    t("14.2", 14, "Mammalian sense organs"),
    t("14.3", 14, "Mammalian hormones"),
    t("14.4", 14, "Homeostasis"),
    t("14.5", 14, "Temperature control"),
    t("14.6", 14, "Blood glucose control"),
  ]},
  { number: 15, title: "Coordination and response in plants", description: "Tropisms and plant hormones.", topics: [
    t("15.1", 15, "Coordination and response in plants"),
  ]},
  { number: 16, title: "Development of organisms and continuity of life", description: "Mitosis and meiosis, and sexual and asexual reproduction in plants and humans.", topics: [
    t("16.1", 16, "Nuclear division"),
    t("16.2", 16, "Asexual and sexual reproduction"),
    t("16.3", 16, "Sexual reproduction in plants"),
    t("16.4", 16, "Sexual reproduction in humans"),
  ]},
  { number: 17, title: "Inheritance", description: "Variation, DNA, genetic crosses and selection.", topics: [
    t("17.1", 17, "Variation"),
    t("17.2", 17, "DNA"),
    t("17.3", 17, "Inheritance"),
    t("17.4", 17, "Selection"),
  ]},
  { number: 18, title: "Biotechnology and genetic modification", description: "Using microorganisms, and changing the genes of organisms.", topics: [
    t("18.1", 18, "Biotechnology"),
    t("18.2", 18, "Genetic modification"),
  ]},
  { number: 19, title: "Relationships of organisms with one another and with the environment", description: "Food chains, nutrient cycles, ecosystems, human impact and conservation.", topics: [
    t("19.1", 19, "Energy flow"),
    t("19.2", 19, "Nutrient cycles"),
    t("19.3", 19, "Ecosystems and biodiversity"),
    t("19.4", 19, "Effects of humans on ecosystems"),
    t("19.5", 19, "Conservation"),
  ]},
];

export const ALL_O_LEVEL_BIOLOGY_TOPICS: BiologyTopicMeta[] = O_LEVEL_BIOLOGY_SECTIONS.flatMap((s) => s.topics);

export function getBiologyTopicBySlug(slug: string): BiologyTopicMeta | undefined {
  return ALL_O_LEVEL_BIOLOGY_TOPICS.find((x) => x.slug === slug);
}

export function getBiologyTopicByCode(topic: string): BiologyTopicMeta | undefined {
  return ALL_O_LEVEL_BIOLOGY_TOPICS.find((x) => x.topic === topic);
}

// Takes the URL slug (e.g. "11-2"), the same as getAdjacentTopics in accountingSyllabus.ts
export function getAdjacentBiologyTopics(slug: string): { prev: BiologyTopicMeta | null; next: BiologyTopicMeta | null } {
  const i = ALL_O_LEVEL_BIOLOGY_TOPICS.findIndex((x) => x.slug === slug);
  return {
    prev: i > 0 ? ALL_O_LEVEL_BIOLOGY_TOPICS[i - 1] : null,
    next: i >= 0 && i < ALL_O_LEVEL_BIOLOGY_TOPICS.length - 1 ? ALL_O_LEVEL_BIOLOGY_TOPICS[i + 1] : null,
  };
}
