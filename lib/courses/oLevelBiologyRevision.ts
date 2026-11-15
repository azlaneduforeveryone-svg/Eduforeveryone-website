// O Level Biology 5090 flashcards and topic maps, original material written for EduForEveryone.
// Mapped to the Cambridge O Level Biology 5090 syllabus for exams in 2026, 2027 and 2028.
// Reviewed by a biology teacher before publishing.
// Independent material: not produced or endorsed by Cambridge University Press & Assessment.
//
// SERVER-ONLY: import this file only from server components (page.tsx files).
// Only the current topic's revision data is passed to the client.
// Rules: plain English, no em dashes, en dashes or arrows.

import type { TopicRevision } from "./oLevelAccountingRevisionTypes";

export const O_LEVEL_BIOLOGY_REVISION: Record<string, TopicRevision> = {
  "1.1": {
    "mindMap": {
      "centre": "Cell structure",
      "branches": [
        {
          "label": "Animal cell parts",
          "items": [
            "Nucleus: holds DNA, controls the cell",
            "Cytoplasm: where reactions happen",
            "Cell membrane: controls what enters and leaves",
            "Mitochondria: aerobic respiration releases energy",
            "Ribosomes: make proteins"
          ]
        },
        {
          "label": "Plant cell extras",
          "items": [
            "Cellulose cell wall: shape and strength",
            "Chloroplasts: photosynthesis",
            "Sap vacuole: stores cell sap, keeps cell firm"
          ]
        },
        {
          "label": "Bacterial cell",
          "items": [
            "No nucleus",
            "Circular DNA and plasmids",
            "Ribosomes, cytoplasm, membrane",
            "Cell wall, not cellulose"
          ]
        },
        {
          "label": "Microscope practical",
          "items": [
            "Onion cells: stain with iodine",
            "Cheek cells: stain with methylene blue",
            "Coverslip at an angle, no air bubbles"
          ]
        },
        {
          "label": "Drawing rules",
          "items": [
            "Sharp pencil, smooth lines, no shading",
            "Ruled label lines, no arrowheads",
            "Large drawing with a title"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "What does the nucleus do?",
        "back": "It holds the DNA and controls the cell's activities.",
        "tag": "Function"
      },
      {
        "front": "What happens in the cytoplasm?",
        "back": "Most of the cell's chemical reactions.",
        "tag": "Function"
      },
      {
        "front": "What does the cell membrane do?",
        "back": "Controls what enters and leaves the cell. It is partially permeable.",
        "tag": "Function"
      },
      {
        "front": "What happens in mitochondria?",
        "back": "Aerobic respiration, which releases energy for the cell.",
        "tag": "Function"
      },
      {
        "front": "What do ribosomes do?",
        "back": "Make proteins (protein synthesis).",
        "tag": "Function"
      },
      {
        "front": "Name the three parts a plant cell has that an animal cell does not.",
        "back": "Cellulose cell wall, chloroplasts and a large sap vacuole."
      },
      {
        "front": "What does the cellulose cell wall do?",
        "back": "Gives the cell shape and strength, and stops it bursting when it takes in water.",
        "tag": "Function"
      },
      {
        "front": "What do chloroplasts do?",
        "back": "Contain chlorophyll, which absorbs light for photosynthesis.",
        "tag": "Function"
      },
      {
        "front": "What does the sap vacuole do?",
        "back": "Stores cell sap and keeps the cell firm.",
        "tag": "Function"
      },
      {
        "front": "Do all plant cells have chloroplasts?",
        "back": "No. Root cells do not, because they get no light."
      },
      {
        "front": "Where is the DNA in a bacterial cell?",
        "back": "In one circular loop in the cytoplasm, plus small rings called plasmids. There is no nucleus."
      },
      {
        "front": "Which two parts do animal cells have that bacteria do not?",
        "back": "A nucleus and mitochondria."
      },
      {
        "front": "Which stain is used for onion cells, and which for cheek cells?",
        "back": "Iodine solution for onion cells. Methylene blue for cheek cells.",
        "tag": "Practical"
      },
      {
        "front": "Why lower the coverslip at an angle?",
        "back": "To stop air bubbles being trapped.",
        "tag": "Practical"
      },
      {
        "front": "Give three rules for a biological drawing.",
        "back": "Any three: sharp pencil, smooth single lines, no shading, ruled label lines, no arrowheads, large size, a title.",
        "tag": "Practical"
      }
    ]
  },
  "1.2": {
    "mindMap": {
      "centre": "Specialised cells and magnification",
      "branches": [
        {
          "label": "Specialised cells",
          "items": [
            "Shape and parts match the job",
            "Always say feature, then function",
            "Ciliated cell: cilia move mucus",
            "Root hair cell: large surface area"
          ]
        },
        {
          "label": "More examples",
          "items": [
            "Palisade cell: many chloroplasts",
            "Neurone: long fibre carries impulses",
            "Red blood cell: haemoglobin, no nucleus",
            "Sperm: tail; egg: food store"
          ]
        },
        {
          "label": "Levels of organisation",
          "items": [
            "Cell",
            "Tissue: similar cells",
            "Organ: different tissues",
            "Organ system: organs together",
            "Organism: whole living thing"
          ]
        },
        {
          "label": "Magnification",
          "items": [
            "Magnification = image size / actual size",
            "Same units before dividing",
            "1 mm = 1000 µm",
            "No units, write as ×400"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "What is a specialised cell?",
        "back": "A cell with a special shape or parts that help it do one job well.",
        "tag": "Definition"
      },
      {
        "front": "How are ciliated cells adapted, and what for?",
        "back": "Cilia beat to push mucus, with trapped dust and germs, up to the throat, away from the lungs."
      },
      {
        "front": "How is a root hair cell adapted?",
        "back": "A long hair-like part gives a large surface area to absorb water and mineral ions."
      },
      {
        "front": "How is a palisade mesophyll cell adapted?",
        "back": "It has many chloroplasts to absorb light for photosynthesis."
      },
      {
        "front": "How is a neurone adapted?",
        "back": "It has a very long fibre to carry impulses over long distances."
      },
      {
        "front": "Give two ways a red blood cell is adapted to carry oxygen.",
        "back": "Full of haemoglobin. No nucleus, so more room for haemoglobin. Biconcave shape gives a large surface area."
      },
      {
        "front": "Give two adaptations of a sperm cell.",
        "back": "Any two: tail (flagellum) to swim, many mitochondria to release energy, enzymes at the tip to enter the egg."
      },
      {
        "front": "Give two adaptations of an egg cell.",
        "back": "Large food store for the early embryo, and a jelly coat that changes so only one sperm can enter."
      },
      {
        "front": "What is a tissue?",
        "back": "A group of similar cells working together to do the same job.",
        "tag": "Definition"
      },
      {
        "front": "What is an organ?",
        "back": "A structure made of different tissues working together.",
        "tag": "Definition"
      },
      {
        "front": "Put in order: organ, cell, organism, tissue, organ system.",
        "back": "Cell, tissue, organ, organ system, organism."
      },
      {
        "front": "State the magnification formula.",
        "back": "Magnification = image size ÷ actual size",
        "tag": "Formula"
      },
      {
        "front": "Image 50 mm, actual size 0.1 mm. Magnification?",
        "back": "50 ÷ 0.1 = ×500",
        "tag": "Calculation"
      },
      {
        "front": "Image 30 mm, magnification ×1500. Actual size in µm?",
        "back": "30 ÷ 1500 = 0.02 mm. 0.02 × 1000 = 20 µm.",
        "tag": "Calculation"
      },
      {
        "front": "How many micrometres are in 1 millimetre?",
        "back": "1000 µm."
      }
    ]
  },
  "2.1": {
    "mindMap": {
      "centre": "Classification systems",
      "branches": [
        {
          "label": "Why classify",
          "items": [
            "Sort organisms by shared features",
            "More shared features: more closely related"
          ]
        },
        {
          "label": "Species",
          "items": [
            "Can breed together",
            "Produce fertile offspring",
            "Horse and donkey: different species"
          ]
        },
        {
          "label": "Binomial system",
          "items": [
            "Two names: genus then species",
            "Genus has a capital letter",
            "Italics, or underline by hand",
            "Example: Panthera leo"
          ]
        },
        {
          "label": "Using a key",
          "items": [
            "Each step has two choices",
            "Follow the steps to a name"
          ]
        },
        {
          "label": "Making a key",
          "items": [
            "Split the group in two each time",
            "Use features you can see and count",
            "Avoid size and colour that change"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "What is classification?",
        "back": "Sorting living things into groups by the features they share.",
        "tag": "Definition"
      },
      {
        "front": "What is a species?",
        "back": "A group of organisms that can reproduce to produce fertile offspring.",
        "tag": "Definition"
      },
      {
        "front": "A horse and a donkey produce a mule that cannot breed. Are they the same species?",
        "back": "No. The offspring is not fertile, so they are different species."
      },
      {
        "front": "What is the binomial system?",
        "back": "An international system that gives each species a two-part name: genus, then species.",
        "tag": "Definition"
      },
      {
        "front": "In Homo sapiens, which word is the genus?",
        "back": "Homo."
      },
      {
        "front": "How is a scientific name written by hand?",
        "back": "Genus with a capital letter, species all lower case, both words underlined."
      },
      {
        "front": "Panthera leo and Panthera tigris share a genus. What does that tell you?",
        "back": "They are closely related."
      },
      {
        "front": "What is a dichotomous key?",
        "back": "A set of steps, each with two choices, used to identify an organism.",
        "tag": "Definition"
      },
      {
        "front": "What does \"dichotomous\" mean?",
        "back": "Dividing into two."
      },
      {
        "front": "Give two good features to use in a key.",
        "back": "Any two that you can see and that do not change: number of legs, wings or no wings, leaf shape, leaf edge."
      },
      {
        "front": "Why is \"large or small\" a bad choice in a key?",
        "back": "It depends on opinion and changes as the organism grows."
      },
      {
        "front": "How many features should each step of a key ask about?",
        "back": "One feature, with two opposite choices."
      }
    ]
  },
  "2.2": {
    "mindMap": {
      "centre": "Features of organisms",
      "branches": [
        {
          "label": "Five kingdoms",
          "items": [
            "Animal: no cell wall, eats food",
            "Plant: cellulose wall, chloroplasts",
            "Fungus: hyphae, wall not cellulose, no chloroplasts",
            "Prokaryote: one cell, no nucleus",
            "Protoctist: mostly one cell with a nucleus"
          ]
        },
        {
          "label": "Vertebrates",
          "items": [
            "Mammals: fur, milk, external ears",
            "Birds: feathers, beak, hard-shelled eggs",
            "Reptiles: dry scales, rubbery eggs on land",
            "Amphibians: moist skin, eggs in water",
            "Fish: wet scales, fins, gills"
          ]
        },
        {
          "label": "Arthropods",
          "items": [
            "Insects: 3 body parts, 6 legs",
            "Arachnids: 2 body parts, 8 legs",
            "Crustaceans: over 8 legs, 2 pairs antennae",
            "Myriapods: many segments, many legs"
          ]
        },
        {
          "label": "Plants",
          "items": [
            "Ferns: fronds, spores, no flowers",
            "Flowering plants: flowers and seeds",
            "Monocots: 1 cotyledon, parallel veins",
            "Dicots: 2 cotyledons, branched veins"
          ]
        },
        {
          "label": "Viruses",
          "items": [
            "Not cells, in no kingdom",
            "Genetic material in a protein coat",
            "Reproduce only inside living cells"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "Name the five kingdoms.",
        "back": "Animal, plant, fungus, prokaryote, protoctist."
      },
      {
        "front": "Give two features of the plant kingdom.",
        "back": "Cellulose cell walls and chloroplasts (they photosynthesise). Also many cells.",
        "tag": "Kingdom"
      },
      {
        "front": "Give two features of fungi.",
        "back": "Any two: made of hyphae (or single cells like yeast), cell wall not made of cellulose, no chloroplasts, feed by releasing enzymes and absorbing food.",
        "tag": "Kingdom"
      },
      {
        "front": "What is the main feature of a prokaryote?",
        "back": "A single cell with no nucleus (circular DNA instead). Example: bacteria.",
        "tag": "Kingdom"
      },
      {
        "front": "How is a protoctist different from a prokaryote?",
        "back": "A protoctist has a nucleus. A prokaryote does not."
      },
      {
        "front": "Which vertebrate group has feathers?",
        "back": "Birds."
      },
      {
        "front": "Give two features only mammals have.",
        "back": "Fur or hair, milk from mammary glands, external ears.",
        "tag": "Vertebrates"
      },
      {
        "front": "How do amphibians and reptiles differ in skin and eggs?",
        "back": "Amphibians: moist smooth skin, eggs laid in water. Reptiles: dry scaly skin, rubbery eggs laid on land.",
        "tag": "Vertebrates"
      },
      {
        "front": "Give three features of all arthropods.",
        "back": "Jointed legs, an exoskeleton, and a body in segments."
      },
      {
        "front": "An arthropod has 6 legs and 3 body parts. Which group?",
        "back": "Insect.",
        "tag": "Arthropods"
      },
      {
        "front": "An arthropod has 8 legs and no antennae. Which group?",
        "back": "Arachnid.",
        "tag": "Arthropods"
      },
      {
        "front": "Which arthropod group has 2 pairs of antennae?",
        "back": "Crustaceans."
      },
      {
        "front": "How do ferns reproduce?",
        "back": "By spores, made under the fronds. They have no flowers."
      },
      {
        "front": "How can you tell a monocot from a dicot by its leaves?",
        "back": "Monocots have parallel veins. Dicots have branched, net-like veins.",
        "tag": "Plants"
      },
      {
        "front": "What is a virus made of?",
        "back": "Genetic material (DNA or RNA) inside a protein coat.",
        "tag": "Viruses"
      },
      {
        "front": "Where can viruses reproduce?",
        "back": "Only inside living cells."
      }
    ]
  },
  "3.1": {
    "mindMap": {
      "centre": "Diffusion and osmosis",
      "branches": [
        {
          "label": "Water as a solvent",
          "items": [
            "Digestion: food dissolved for enzymes",
            "Excretion: urea removed in urine",
            "Transport: plasma carries dissolved substances"
          ]
        },
        {
          "label": "Diffusion",
          "items": [
            "High to low concentration",
            "Random movement, no cell energy",
            "Faster: big surface area, high temperature",
            "Faster: steep gradient, short distance"
          ]
        },
        {
          "label": "Osmosis",
          "items": [
            "Water only",
            "Higher to lower water potential",
            "Through a partially permeable membrane"
          ]
        },
        {
          "label": "Effects on cells",
          "items": [
            "Animal cell in water: swells, bursts",
            "Animal cell in strong solution: shrinks",
            "Plant cell in water: turgid",
            "Plant cell in strong solution: flaccid, plasmolysis"
          ]
        },
        {
          "label": "Practicals",
          "items": [
            "Potato cylinders in sugar solutions",
            "Percentage change in mass",
            "No change: same water potential",
            "Dialysis tubing: level rises"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "Define diffusion.",
        "back": "The net movement of particles from a region of higher concentration to a region of lower concentration, down a concentration gradient, as a result of their random movement.",
        "tag": "Definition"
      },
      {
        "front": "Where does the energy for diffusion come from?",
        "back": "The kinetic energy of the particles' random movement. The cell uses none of its own energy."
      },
      {
        "front": "Give the four factors that affect the rate of diffusion.",
        "back": "Surface area, temperature, concentration gradient and distance."
      },
      {
        "front": "How does temperature affect diffusion?",
        "back": "Higher temperature: faster, because particles have more kinetic energy."
      },
      {
        "front": "Give one example of diffusion in the body.",
        "back": "Oxygen moving from the air in the lungs into the blood."
      },
      {
        "front": "Define osmosis.",
        "back": "The net movement of water molecules from a region of higher water potential to a region of lower water potential, through a partially permeable membrane.",
        "tag": "Definition"
      },
      {
        "front": "Which has the higher water potential: a dilute or a concentrated sugar solution?",
        "back": "The dilute solution. Pure water has the highest water potential of all."
      },
      {
        "front": "What happens to an animal cell in pure water?",
        "back": "Water enters by osmosis, the cell swells and can burst, because it has no cell wall."
      },
      {
        "front": "What does \"turgid\" mean?",
        "back": "A plant cell that is full of water and firm, with the cytoplasm pressing on the cell wall.",
        "tag": "Definition"
      },
      {
        "front": "What is plasmolysis?",
        "back": "When a plant cell loses so much water that the cytoplasm and membrane pull away from the cell wall.",
        "tag": "Definition"
      },
      {
        "front": "What is turgor pressure, and why does it matter?",
        "back": "The pressure of water inside a cell pushing out on the cell wall. It keeps cells firm and supports the plant."
      },
      {
        "front": "Why does a plant wilt?",
        "back": "Its cells lose water and become flaccid, so turgor pressure falls."
      },
      {
        "front": "Give one reason water is important as a solvent.",
        "back": "Any one: food dissolves for digestion and absorption, urea dissolves to be excreted in urine, plasma carries dissolved substances around the body.",
        "tag": "Water"
      },
      {
        "front": "Potato: 2.0 g at the start, 2.3 g at the end. Percentage change?",
        "back": "0.3 ÷ 2.0 × 100 = 15% increase.",
        "tag": "Calculation"
      },
      {
        "front": "Why use percentage change in mass, not just change in mass?",
        "back": "Because the potato pieces may not start with the same mass.",
        "tag": "Practical"
      },
      {
        "front": "Sugar solution in dialysis tubing stands in pure water. What happens?",
        "back": "The liquid level rises, because water moves into the tubing by osmosis.",
        "tag": "Practical"
      }
    ]
  },
  "3.2": {
    "mindMap": {
      "centre": "Active transport",
      "branches": [
        {
          "label": "Definition",
          "items": [
            "Low to high concentration",
            "Against a concentration gradient",
            "Uses energy from respiration",
            "Across the cell membrane"
          ]
        },
        {
          "label": "How it works",
          "items": [
            "Carrier proteins in the membrane",
            "Energy changes the carrier's shape",
            "Cells have many mitochondria"
          ]
        },
        {
          "label": "Root hair cells",
          "items": [
            "Take in mineral ions from soil",
            "Ions are lower in soil than in the cell",
            "Water enters by osmosis, not active transport",
            "Waterlogged soil: no oxygen, uptake stops"
          ]
        },
        {
          "label": "Compare",
          "items": [
            "Diffusion: down gradient, no energy",
            "Osmosis: water only, no energy",
            "Active transport: against gradient, energy"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "Define active transport.",
        "back": "The movement of molecules or ions into or out of a cell through the cell membrane, from a lower concentration to a higher concentration, against a concentration gradient, using energy from respiration.",
        "tag": "Definition"
      },
      {
        "front": "Where does the energy for active transport come from?",
        "back": "Respiration."
      },
      {
        "front": "Which direction does active transport move particles?",
        "back": "From a lower concentration to a higher concentration, against the gradient."
      },
      {
        "front": "What in the membrane carries the particles across?",
        "back": "Carrier proteins."
      },
      {
        "front": "Why do cells that do active transport have many mitochondria?",
        "back": "Mitochondria carry out respiration, which releases the energy needed."
      },
      {
        "front": "Why do root hair cells need active transport?",
        "back": "To take in mineral ions from the soil, where the concentration is lower than inside the cell."
      },
      {
        "front": "Give an example of a mineral ion taken in by root hair cells.",
        "back": "Nitrate ions (or magnesium ions)."
      },
      {
        "front": "How does water enter root hair cells?",
        "back": "By osmosis, not active transport."
      },
      {
        "front": "Why does waterlogged soil stop mineral uptake?",
        "back": "There is no oxygen for the roots to respire, so there is no energy for active transport."
      },
      {
        "front": "Which of diffusion, osmosis and active transport need energy from respiration?",
        "back": "Only active transport."
      },
      {
        "front": "An ion is taken into a cell where it is already more concentrated. Which process?",
        "back": "Active transport."
      },
      {
        "front": "Give two differences between diffusion and active transport.",
        "back": "Diffusion goes down a concentration gradient and needs no energy. Active transport goes against it and needs energy from respiration."
      }
    ]
  }
};

export function getBiologyRevision(topic: string): TopicRevision | null {
  return O_LEVEL_BIOLOGY_REVISION[topic] ?? null;
}
