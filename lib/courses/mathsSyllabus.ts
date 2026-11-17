// Cambridge Mathematics: O Level 4024 and IGCSE 0580 in one course.
// Topic numbers and titles follow the official IGCSE 0580 Extended subject content,
// which contains every O Level 4024 topic. Sources: 4024 syllabus 2028 to 2030,
// 0580 syllabus 2025 to 2027 (2028 to 2030 has the same topics).
// Independent material: not produced or endorsed by Cambridge University Press & Assessment.
//
// Client-safe: metadata only. Notes, revision data and MCQs live in separate
// server-only files so they never land in a client bundle.

/** Which syllabus a student follows. */
export type MathsLevel = "olevel" | "core" | "extended";

export const MATHS_LEVELS: { id: MathsLevel; label: string; short: string; code: string }[] = [
  { id: "olevel", label: "O Level Mathematics (4024)", short: "O Level 4024", code: "4024" },
  { id: "core", label: "IGCSE Mathematics Core (0580)", short: "IGCSE Core", code: "0580" },
  { id: "extended", label: "IGCSE Mathematics Extended (0580)", short: "IGCSE Extended", code: "0580" },
];

export interface MathsTopicMeta {
  /** IGCSE 0580 number, e.g. "2.13". Used as the data key. */
  topic: string;
  /** URL slug from the title, e.g. "functions". */
  slug: string;
  /** Storage and Firestore doc id, e.g. "m0580-2.13". */
  topicId: string;
  section: number;
  topicTitle: string;
  /** O Level 4024 number, or null if the topic is not in O Level. */
  oLevel: string | null;
  /** IGCSE Core: "core" = in Core, "part" = Core has part of it, "extended" = Extended only. */
  igcse: "core" | "part" | "extended";
  videoId?: string;
}

export interface MathsSectionMeta {
  number: number;
  title: string;
  description: string;
  topics: MathsTopicMeta[];
}

const t = (
  topic: string,
  section: number,
  topicTitle: string,
  slug: string,
  oLevel: string | null,
  igcse: MathsTopicMeta["igcse"]
): MathsTopicMeta => ({ topic, slug, topicId: `m0580-${topic}`, section, topicTitle, oLevel, igcse });

export const MATHS_SECTIONS: MathsSectionMeta[] = [
  { number: 1, title: "Number", description: "Types of number, fractions, percentages, ratio, standard form, accuracy, money and time.", topics: [
    t("1.1", 1, "Types of number", "types-of-number", "1.1", "core"),
    t("1.2", 1, "Sets", "sets", "1.2", "core"),
    t("1.3", 1, "Powers and roots", "powers-and-roots", "1.3", "core"),
    t("1.4", 1, "Fractions, decimals and percentages", "fractions-decimals-and-percentages", "1.4", "core"),
    t("1.5", 1, "Ordering", "ordering", "1.5", "core"),
    t("1.6", 1, "The four operations", "the-four-operations", "1.6", "core"),
    t("1.7", 1, "Indices I", "indices-i", "1.7", "core"),
    t("1.8", 1, "Standard form", "standard-form", "1.8", "core"),
    t("1.9", 1, "Estimation", "estimation", "1.9", "core"),
    t("1.10", 1, "Limits of accuracy", "limits-of-accuracy", "1.10", "core"),
    t("1.11", 1, "Ratio and proportion", "ratio-and-proportion", "1.11", "core"),
    t("1.12", 1, "Rates", "rates", "1.12", "core"),
    t("1.13", 1, "Percentages", "percentages", "1.13", "core"),
    t("1.14", 1, "Using a calculator", "using-a-calculator", "1.14", "core"),
    t("1.15", 1, "Time", "time", "1.15", "core"),
    t("1.16", 1, "Money", "money", "1.16", "core"),
    t("1.17", 1, "Exponential growth and decay", "exponential-growth-and-decay", "1.17", "extended"),
    t("1.18", 1, "Surds", "surds", "1.18", "extended"),
  ]},
  { number: 2, title: "Algebra and graphs", description: "Expressions, equations, inequalities, sequences, graphs and functions.", topics: [
    t("2.1", 2, "Introduction to algebra", "introduction-to-algebra", "2.1", "core"),
    t("2.2", 2, "Algebraic manipulation", "algebraic-manipulation", "2.2", "core"),
    t("2.3", 2, "Algebraic fractions", "algebraic-fractions", "2.3", "extended"),
    t("2.4", 2, "Indices II", "indices-ii", "2.4", "core"),
    t("2.5", 2, "Equations", "equations", "2.5", "core"),
    t("2.6", 2, "Inequalities", "inequalities", "2.6", "core"),
    t("2.7", 2, "Sequences", "sequences", "2.7", "core"),
    t("2.8", 2, "Proportion", "proportion", "2.8", "extended"),
    t("2.9", 2, "Graphs in practical situations", "graphs-in-practical-situations", "2.9", "core"),
    t("2.10", 2, "Graphs of functions", "graphs-of-functions", "2.10", "core"),
    t("2.11", 2, "Sketching curves", "sketching-curves", "2.11", "core"),
    t("2.12", 2, "Differentiation", "differentiation", null, "extended"),
    t("2.13", 2, "Functions", "functions", "2.12", "extended"),
  ]},
  { number: 3, title: "Coordinate geometry", description: "Coordinates, straight-line graphs, gradient, midpoint and length.", topics: [
    t("3.1", 3, "Coordinates", "coordinates", "3.1", "core"),
    t("3.2", 3, "Drawing linear graphs", "drawing-linear-graphs", "3.2", "core"),
    t("3.3", 3, "Gradient of linear graphs", "gradient-of-linear-graphs", "3.3", "core"),
    t("3.4", 3, "Length and midpoint", "length-and-midpoint", "3.4", "extended"),
    t("3.5", 3, "Equations of linear graphs", "equations-of-linear-graphs", "3.5", "core"),
    t("3.6", 3, "Parallel lines", "parallel-lines", "3.6", "core"),
    t("3.7", 3, "Perpendicular lines", "perpendicular-lines", "3.7", "extended"),
  ]},
  { number: 4, title: "Geometry", description: "Angles, constructions, scale drawings, similarity, symmetry and circle theorems.", topics: [
    t("4.1", 4, "Geometrical terms", "geometrical-terms", "4.1", "core"),
    t("4.2", 4, "Geometrical constructions", "geometrical-constructions", "4.2", "core"),
    t("4.3", 4, "Scale drawings", "scale-drawings", "4.3", "core"),
    t("4.4", 4, "Similarity", "similarity", "4.4", "core"),
    t("4.5", 4, "Symmetry", "symmetry", "4.5", "core"),
    t("4.6", 4, "Angles", "angles", "4.6", "core"),
    t("4.7", 4, "Circle theorems I", "circle-theorems-i", "4.7", "part"),
    t("4.8", 4, "Circle theorems II", "circle-theorems-ii", "4.8", "extended"),
  ]},
  { number: 5, title: "Mensuration", description: "Units, perimeter, area, circles, surface area and volume.", topics: [
    t("5.1", 5, "Units of measure", "units-of-measure", "5.1", "core"),
    t("5.2", 5, "Area and perimeter", "area-and-perimeter", "5.2", "core"),
    t("5.3", 5, "Circles, arcs and sectors", "circles-arcs-and-sectors", "5.3", "core"),
    t("5.4", 5, "Surface area and volume", "surface-area-and-volume", "5.4", "core"),
    t("5.5", 5, "Compound shapes and parts of shapes", "compound-shapes-and-parts-of-shapes", "5.5", "core"),
  ]},
  { number: 6, title: "Trigonometry", description: "Pythagoras, sine, cosine and tangent, and triangles in 2D and 3D.", topics: [
    t("6.1", 6, "Pythagoras' theorem", "pythagoras-theorem", "6.1", "core"),
    t("6.2", 6, "Right-angled triangles", "right-angled-triangles", "6.2", "core"),
    t("6.3", 6, "Exact trigonometric values", "exact-trigonometric-values", null, "extended"),
    t("6.4", 6, "Trigonometric functions", "trigonometric-functions", null, "extended"),
    t("6.5", 6, "Non-right-angled triangles", "non-right-angled-triangles", "6.3", "extended"),
    t("6.6", 6, "Pythagoras' theorem and trigonometry in 3D", "pythagoras-theorem-and-trigonometry-in-3d", "6.4", "extended"),
  ]},
  { number: 7, title: "Transformations and vectors", description: "Reflections, rotations, translations, enlargements and vectors.", topics: [
    t("7.1", 7, "Transformations", "transformations", "7.1", "core"),
    t("7.2", 7, "Vectors in two dimensions", "vectors-in-two-dimensions", "7.2", "extended"),
    t("7.3", 7, "Magnitude of a vector", "magnitude-of-a-vector", "7.3", "extended"),
    t("7.4", 7, "Vector geometry", "vector-geometry", "7.4", "extended"),
  ]},
  { number: 8, title: "Probability", description: "Chance, expected frequency, combined events and conditional probability.", topics: [
    t("8.1", 8, "Introduction to probability", "introduction-to-probability", "8.1", "core"),
    t("8.2", 8, "Relative and expected frequencies", "relative-and-expected-frequencies", "8.2", "core"),
    t("8.3", 8, "Probability of combined events", "probability-of-combined-events", "8.3", "core"),
    t("8.4", 8, "Conditional probability", "conditional-probability", null, "extended"),
  ]},
  { number: 9, title: "Statistics", description: "Collecting, showing and describing data.", topics: [
    t("9.1", 9, "Classifying statistical data", "classifying-statistical-data", "9.1", "core"),
    t("9.2", 9, "Interpreting statistical data", "interpreting-statistical-data", "9.2", "core"),
    t("9.3", 9, "Averages and measures of spread", "averages-and-measures-of-spread", "9.3", "part"),
    t("9.4", 9, "Statistical charts and diagrams", "statistical-charts-and-diagrams", "9.4", "core"),
    t("9.5", 9, "Scatter diagrams", "scatter-diagrams", "9.5", "core"),
    t("9.6", 9, "Cumulative frequency diagrams", "cumulative-frequency-diagrams", "9.6", "extended"),
    t("9.7", 9, "Histograms", "histograms", "9.7", "extended"),
  ]},
];

export const ALL_MATHS_TOPICS: MathsTopicMeta[] = MATHS_SECTIONS.flatMap((s) => s.topics);

export function getMathsTopicBySlug(slug: string): MathsTopicMeta | undefined {
  return ALL_MATHS_TOPICS.find((x) => x.slug === slug);
}

export function getMathsTopicByCode(topic: string): MathsTopicMeta | undefined {
  return ALL_MATHS_TOPICS.find((x) => x.topic === topic);
}

/** Is this topic in the given syllabus? */
export function inLevel(topic: MathsTopicMeta, level: MathsLevel): boolean {
  if (level === "olevel") return topic.oLevel !== null;
  if (level === "core") return topic.igcse !== "extended";
  return true;
}

/** Topic number as printed in the student's own syllabus. */
export function numberFor(topic: MathsTopicMeta, level: MathsLevel): string {
  return level === "olevel" ? topic.oLevel ?? topic.topic : topic.topic;
}

/** Topics in this syllabus, in order. */
export function topicsForLevel(level: MathsLevel): MathsTopicMeta[] {
  return ALL_MATHS_TOPICS.filter((x) => inLevel(x, level));
}

/** Previous and next topic in the full list (used for page links and SEO). */
export function getAdjacentMathsTopics(slug: string): { prev: MathsTopicMeta | null; next: MathsTopicMeta | null } {
  const i = ALL_MATHS_TOPICS.findIndex((x) => x.slug === slug);
  return {
    prev: i > 0 ? ALL_MATHS_TOPICS[i - 1] : null,
    next: i >= 0 && i < ALL_MATHS_TOPICS.length - 1 ? ALL_MATHS_TOPICS[i + 1] : null,
  };
}
