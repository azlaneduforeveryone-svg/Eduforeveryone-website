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
  },
  "4.1": {
    "mindMap": {
      "centre": "Biological molecules",
      "branches": [
        {
          "label": "Elements",
          "items": [
            "Carbohydrates: C, H, O",
            "Lipids: C, H, O (less O)",
            "Proteins: C, H, O, N",
            "DNA: C, H, O, N, P"
          ]
        },
        {
          "label": "Building blocks",
          "items": [
            "Starch, cellulose, glycogen: glucose",
            "Proteins: amino acids",
            "Lipids: fatty acids and glycerol",
            "DNA: nucleotides"
          ]
        },
        {
          "label": "Starch and sugar tests",
          "items": [
            "Starch: iodine, orange-brown to blue-black",
            "Glucose, maltose: Benedict's, heat",
            "Benedict's: blue to brick-red"
          ]
        },
        {
          "label": "Protein and lipid tests",
          "items": [
            "Protein: biuret, blue to purple",
            "Lipids: ethanol then water",
            "Lipids: cloudy white emulsion"
          ]
        },
        {
          "label": "Safety",
          "items": [
            "Wear eye protection",
            "Ethanol is flammable, no flames",
            "Heat Benedict's in a water bath"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "Which elements are in carbohydrates?",
        "back": "Carbon, hydrogen and oxygen (C, H, O).",
        "tag": "Elements"
      },
      {
        "front": "Which elements are in lipids?",
        "back": "Carbon, hydrogen and oxygen (C, H, O), with much less oxygen than carbohydrates.",
        "tag": "Elements"
      },
      {
        "front": "Which extra element do proteins contain that carbohydrates do not?",
        "back": "Nitrogen (N). Some proteins also contain sulfur.",
        "tag": "Elements"
      },
      {
        "front": "Which elements are in DNA?",
        "back": "Carbon, hydrogen, oxygen, nitrogen and phosphorus (C, H, O, N, P).",
        "tag": "Elements"
      },
      {
        "front": "Which small molecule are starch, cellulose and glycogen made from?",
        "back": "Glucose.",
        "tag": "Building blocks"
      },
      {
        "front": "What are proteins made from?",
        "back": "Amino acids.",
        "tag": "Building blocks"
      },
      {
        "front": "What are lipids made from?",
        "back": "Fatty acids and glycerol.",
        "tag": "Building blocks"
      },
      {
        "front": "What is DNA made from?",
        "back": "Nucleotides.",
        "tag": "Building blocks"
      },
      {
        "front": "Where is glycogen stored?",
        "back": "In the liver and muscles of animals. It is an energy store.",
        "tag": "Building blocks"
      },
      {
        "front": "Which reagent tests for starch, and what is a positive result?",
        "back": "Iodine solution. It turns from orange-brown to blue-black.",
        "tag": "Food tests"
      },
      {
        "front": "Which sugars does Benedict's test detect?",
        "back": "Reducing sugars, such as glucose and maltose.",
        "tag": "Food tests"
      },
      {
        "front": "Describe Benedict's test.",
        "back": "Add Benedict's solution and heat in a hot water bath. Blue changes to green, yellow, orange or brick-red if a reducing sugar is present.",
        "tag": "Food tests"
      },
      {
        "front": "Describe the biuret test and its positive result.",
        "back": "Add biuret solution to the food solution. Blue changes to purple if protein is present.",
        "tag": "Food tests"
      },
      {
        "front": "Describe the ethanol emulsion test.",
        "back": "Shake the food with ethanol, then pour it into water. A cloudy white emulsion shows a lipid is present.",
        "tag": "Food tests"
      },
      {
        "front": "Why must you keep ethanol away from flames?",
        "back": "Ethanol is flammable: it catches fire easily.",
        "tag": "Safety"
      }
    ]
  },
  "5.1": {
    "mindMap": {
      "centre": "Enzyme action",
      "branches": [
        {
          "label": "Catalyst",
          "items": [
            "Speeds up a reaction",
            "Not changed by the reaction",
            "Can be used again"
          ]
        },
        {
          "label": "Enzymes",
          "items": [
            "Proteins",
            "Biological catalysts",
            "Used in all metabolic reactions"
          ]
        },
        {
          "label": "How they work",
          "items": [
            "Substrate fits the active site",
            "Enzyme-substrate complex forms",
            "Products leave",
            "Enzyme unchanged"
          ]
        },
        {
          "label": "Lock and key",
          "items": [
            "Enzyme is the lock",
            "Substrate is the key",
            "Shapes are complementary",
            "Each enzyme is specific"
          ]
        },
        {
          "label": "Examples",
          "items": [
            "Amylase: starch to maltose",
            "Protease: protein to amino acids",
            "Lipase: lipids to fatty acids and glycerol"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "What is a catalyst?",
        "back": "A substance that increases the rate of a chemical reaction and is not changed by the reaction.",
        "tag": "Definition"
      },
      {
        "front": "What is an enzyme?",
        "back": "A protein that functions as a biological catalyst. Enzymes are involved in all metabolic reactions.",
        "tag": "Definition"
      },
      {
        "front": "What type of molecule is every enzyme?",
        "back": "A protein.",
        "tag": "Definition"
      },
      {
        "front": "What is the substrate?",
        "back": "The molecule that an enzyme works on.",
        "tag": "Key words"
      },
      {
        "front": "What is the active site?",
        "back": "The part of the enzyme with a special shape, where the substrate fits.",
        "tag": "Key words"
      },
      {
        "front": "What is an enzyme-substrate complex?",
        "back": "The enzyme and substrate joined together for a short time while the reaction happens.",
        "tag": "Key words"
      },
      {
        "front": "Describe how an enzyme works.",
        "back": "The substrate fits into the active site and forms an enzyme-substrate complex. The reaction happens, the products leave, and the enzyme is unchanged.",
        "tag": "How it works"
      },
      {
        "front": "Why can one enzyme molecule be used many times?",
        "back": "It is not changed or used up by the reaction.",
        "tag": "How it works"
      },
      {
        "front": "In the lock and key idea, which is the lock and which is the key?",
        "back": "The enzyme is the lock. The substrate is the key.",
        "tag": "Lock and key"
      },
      {
        "front": "Why does each enzyme work on only one substrate?",
        "back": "The active site has a shape that is complementary to only that substrate, so only it can fit.",
        "tag": "Lock and key"
      },
      {
        "front": "What does \"complementary\" mean?",
        "back": "Shapes that fit together exactly, like two jigsaw pieces.",
        "tag": "Lock and key"
      },
      {
        "front": "What does amylase break down, and into what?",
        "back": "Starch into maltose.",
        "tag": "Examples"
      },
      {
        "front": "What does protease break down, and into what?",
        "back": "Protein into amino acids.",
        "tag": "Examples"
      },
      {
        "front": "What does lipase break down, and into what?",
        "back": "Lipids into fatty acids and glycerol.",
        "tag": "Examples"
      }
    ]
  },
  "5.2": {
    "mindMap": {
      "centre": "Temperature and pH",
      "branches": [
        {
          "label": "Measuring activity",
          "items": [
            "Substrate goes down",
            "Product goes up",
            "Starch: iodine test every 30 s",
            "Catalase: count oxygen bubbles"
          ]
        },
        {
          "label": "Warming up",
          "items": [
            "More kinetic energy",
            "More effective collisions",
            "Faster rate"
          ]
        },
        {
          "label": "Optimum",
          "items": [
            "Fastest activity",
            "About 37 °C in humans",
            "Each enzyme has an optimum pH"
          ]
        },
        {
          "label": "Too hot or wrong pH",
          "items": [
            "Active site changes shape",
            "Substrate no longer fits",
            "Enzyme is denatured",
            "Cannot be undone"
          ]
        },
        {
          "label": "Cold",
          "items": [
            "Slow, few collisions",
            "Not denatured",
            "Works again when warm"
          ]
        },
        {
          "label": "pH examples",
          "items": [
            "Pepsin: about pH 2",
            "Amylase: about pH 7"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "How can you follow the progress of an enzyme reaction?",
        "back": "Measure how the amount of substrate goes down, or how the amount of product goes up, over time.",
        "tag": "Measuring"
      },
      {
        "front": "In the amylase practical, how do you know all the starch has gone?",
        "back": "A drop of the mixture no longer turns iodine blue-black. The iodine stays orange-brown.",
        "tag": "Measuring"
      },
      {
        "front": "What is the optimum temperature?",
        "back": "The temperature at which an enzyme works fastest. About 37 °C for most human enzymes.",
        "tag": "Temperature"
      },
      {
        "front": "Why does enzyme activity increase as temperature rises towards the optimum?",
        "back": "Molecules have more kinetic energy and move faster, so there are more frequent effective collisions between substrate and active site.",
        "tag": "Temperature"
      },
      {
        "front": "Why does activity fall above the optimum temperature?",
        "back": "The enzyme's shape changes, so the active site changes shape and the substrate no longer fits. The enzyme becomes denatured.",
        "tag": "Temperature"
      },
      {
        "front": "What does denatured mean?",
        "back": "The enzyme's shape, including its active site, has changed permanently, so the substrate cannot fit and the enzyme cannot work.",
        "tag": "Denaturation"
      },
      {
        "front": "Can a denatured enzyme work again if it cools down?",
        "back": "No. Denaturation is permanent.",
        "tag": "Denaturation"
      },
      {
        "front": "What happens to enzymes at low temperatures?",
        "back": "They work slowly because there are fewer effective collisions, but they are not denatured. They work again when warmed.",
        "tag": "Temperature"
      },
      {
        "front": "What is the optimum pH of pepsin?",
        "back": "About pH 2. It works in the acidic stomach.",
        "tag": "pH"
      },
      {
        "front": "What is the optimum pH of salivary amylase?",
        "back": "About pH 7 (neutral).",
        "tag": "pH"
      },
      {
        "front": "Why does activity fall when pH moves away from the optimum?",
        "back": "The active site changes shape, so the substrate fits less well. At extreme pH the enzyme is denatured.",
        "tag": "pH"
      },
      {
        "front": "In a temperature investigation, name two things to keep the same.",
        "back": "Any two of: volume and concentration of starch, volume and concentration of enzyme, pH (use a buffer).",
        "tag": "Practical"
      },
      {
        "front": "How do you control pH in an enzyme investigation?",
        "back": "Use a buffer solution.",
        "tag": "Practical"
      }
    ]
  },
  "6.1": {
    "mindMap": {
      "centre": "Photosynthesis",
      "branches": [
        {
          "label": "The process",
          "items": [
            "Makes carbohydrates using light energy",
            "Raw materials: carbon dioxide and water",
            "Products: glucose and oxygen",
            "Chlorophyll in chloroplasts absorbs light"
          ]
        },
        {
          "label": "Equation",
          "items": [
            "6CO₂ + 6H₂O gives C₆H₁₂O₆ + 6O₂",
            "Needs light and chlorophyll"
          ]
        },
        {
          "label": "Uses of glucose",
          "items": [
            "Starch: energy store",
            "Cellulose: cell walls",
            "Respiration: energy",
            "Sucrose: transport"
          ]
        },
        {
          "label": "Starch test on a leaf",
          "items": [
            "Destarch: 48 hours in the dark",
            "Boil, hot ethanol, soften, iodine",
            "Blue-black means starch"
          ]
        },
        {
          "label": "Limiting factors",
          "items": [
            "Light intensity",
            "Carbon dioxide concentration",
            "Temperature (enzymes)",
            "Shortest supply limits the rate"
          ]
        },
        {
          "label": "Pondweed practical",
          "items": [
            "Count oxygen bubbles",
            "Closer lamp gives more bubbles",
            "Indicator: purple low CO₂, yellow high"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "What is photosynthesis?",
        "back": "The process by which plants make carbohydrates from raw materials using energy from light.",
        "tag": "Definition"
      },
      {
        "front": "What is chlorophyll and where is it found?",
        "back": "A green pigment found in chloroplasts.",
        "tag": "Chlorophyll"
      },
      {
        "front": "What does chlorophyll do?",
        "back": "It transfers light energy into chemical energy for making glucose and other carbohydrates.",
        "tag": "Chlorophyll"
      },
      {
        "front": "Give the word equation for photosynthesis.",
        "back": "Carbon dioxide + water gives glucose + oxygen, using light and chlorophyll.",
        "tag": "Equation"
      },
      {
        "front": "Give the balanced chemical equation for photosynthesis.",
        "back": "6CO₂ + 6H₂O gives C₆H₁₂O₆ + 6O₂, using light and chlorophyll.",
        "tag": "Equation"
      },
      {
        "front": "Name four uses of the glucose a plant makes.",
        "back": "Starch as an energy store, cellulose for cell walls, glucose for respiration, sucrose for transport.",
        "tag": "Uses"
      },
      {
        "front": "Why is a plant destarched before an experiment?",
        "back": "So any starch found afterwards must have been made during the experiment.",
        "tag": "Practical"
      },
      {
        "front": "Why is a leaf put in hot ethanol in the starch test?",
        "back": "To remove the chlorophyll, so the iodine colour can be seen clearly.",
        "tag": "Practical"
      },
      {
        "front": "How do you show chlorophyll is needed for photosynthesis?",
        "back": "Test a variegated leaf for starch. Only the green parts turn blue-black.",
        "tag": "Practical"
      },
      {
        "front": "How do you show carbon dioxide is needed?",
        "back": "Keep a plant with soda lime (absorbs CO₂) and a control without. Only the control's leaves contain starch.",
        "tag": "Practical"
      },
      {
        "front": "What is a limiting factor?",
        "back": "The factor in shortest supply, which stops the rate of photosynthesis rising any higher.",
        "tag": "Limiting factors"
      },
      {
        "front": "Why does the rate level off at high light intensity?",
        "back": "Light is no longer limiting. Another factor, such as carbon dioxide or temperature, is now limiting.",
        "tag": "Limiting factors"
      },
      {
        "front": "Why does the rate fall at high temperatures?",
        "back": "The enzymes that control photosynthesis are denatured.",
        "tag": "Limiting factors"
      },
      {
        "front": "In the pondweed experiment, how is the rate measured?",
        "back": "By counting the oxygen bubbles given off per minute.",
        "tag": "Practical"
      },
      {
        "front": "What colour is hydrogencarbonate indicator when carbon dioxide is low?",
        "back": "Purple. (Orange-red is normal air level, yellow is high.)",
        "tag": "Practical"
      }
    ]
  },
  "6.2": {
    "mindMap": {
      "centre": "Leaf structure",
      "branches": [
        {
          "label": "Leaf shape",
          "items": [
            "Large surface area catches light",
            "Thin: short diffusion distance"
          ]
        },
        {
          "label": "Top layers",
          "items": [
            "Cuticle: waxy, stops water loss",
            "Upper epidermis: see-through",
            "Palisade: most chloroplasts"
          ]
        },
        {
          "label": "Middle layers",
          "items": [
            "Spongy mesophyll: loose cells",
            "Air spaces: gases diffuse",
            "Vascular bundle: xylem and phloem"
          ]
        },
        {
          "label": "Bottom layer",
          "items": [
            "Lower epidermis",
            "Stomata let gases in and out",
            "Guard cells open and close stomata"
          ]
        },
        {
          "label": "Gas exchange",
          "items": [
            "Carbon dioxide diffuses in",
            "Oxygen diffuses out",
            "Through stomata and air spaces"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "How does a large surface area help a leaf?",
        "back": "It absorbs more light and lets more carbon dioxide in, for photosynthesis.",
        "tag": "Leaf shape"
      },
      {
        "front": "Why are leaves thin?",
        "back": "Gases have a short distance to diffuse, and light reaches all the cells.",
        "tag": "Leaf shape"
      },
      {
        "front": "What does the cuticle do?",
        "back": "It is a waxy layer that stops water loss. It is see-through so light passes.",
        "tag": "Layers"
      },
      {
        "front": "Why does the upper epidermis have no chloroplasts?",
        "back": "So light passes straight through to the palisade cells.",
        "tag": "Layers"
      },
      {
        "front": "Where does most photosynthesis happen in a leaf?",
        "back": "In the palisade mesophyll cells.",
        "tag": "Layers"
      },
      {
        "front": "How are palisade cells adapted for photosynthesis?",
        "back": "They are packed with chloroplasts and are near the top of the leaf, where light is strongest.",
        "tag": "Layers"
      },
      {
        "front": "What is the job of the air spaces in the spongy mesophyll?",
        "back": "They let carbon dioxide and oxygen diffuse to and from the cells, and give a large surface for gas exchange.",
        "tag": "Gas exchange"
      },
      {
        "front": "What is in a vascular bundle?",
        "back": "Xylem, which brings water and mineral ions, and phloem, which carries sucrose away.",
        "tag": "Layers"
      },
      {
        "front": "Where are most stomata found?",
        "back": "In the lower epidermis.",
        "tag": "Stomata"
      },
      {
        "front": "What do guard cells do?",
        "back": "They open and close the stoma.",
        "tag": "Stomata"
      },
      {
        "front": "Which epidermis cells contain chloroplasts?",
        "back": "Only the guard cells.",
        "tag": "Chloroplasts"
      },
      {
        "front": "Describe how carbon dioxide reaches the palisade cells.",
        "back": "It diffuses in through the stomata, then through the air spaces to the mesophyll cells.",
        "tag": "Gas exchange"
      }
    ]
  },
  "6.3": {
    "mindMap": {
      "centre": "Mineral nutrition",
      "branches": [
        {
          "label": "Mineral ions",
          "items": [
            "Taken from soil water",
            "Enter through root hair cells",
            "Supply elements glucose lacks"
          ]
        },
        {
          "label": "Nitrate ions",
          "items": [
            "Supply nitrogen",
            "Make amino acids",
            "Amino acids make proteins"
          ]
        },
        {
          "label": "Lack of nitrate",
          "items": [
            "Slow growth, small plant",
            "Older leaves turn yellow"
          ]
        },
        {
          "label": "Magnesium ions",
          "items": [
            "Make chlorophyll",
            "Needed to absorb light"
          ]
        },
        {
          "label": "Lack of magnesium",
          "items": [
            "Yellow leaves",
            "Less photosynthesis"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "Why do plants need nitrate ions?",
        "back": "To make amino acids, which are needed to make proteins.",
        "tag": "Nitrate"
      },
      {
        "front": "Why can't a plant make amino acids from glucose alone?",
        "back": "Glucose has no nitrogen. Amino acids contain nitrogen, which comes from nitrate ions.",
        "tag": "Nitrate"
      },
      {
        "front": "Why do plants need proteins?",
        "back": "For growth, for example new cells and enzymes.",
        "tag": "Nitrate"
      },
      {
        "front": "Give two signs of nitrate deficiency.",
        "back": "Slow, stunted growth and yellow older leaves.",
        "tag": "Nitrate"
      },
      {
        "front": "Why do plants need magnesium ions?",
        "back": "To make chlorophyll.",
        "tag": "Magnesium"
      },
      {
        "front": "Give one sign of magnesium deficiency.",
        "back": "Yellow leaves, especially between the veins.",
        "tag": "Magnesium"
      },
      {
        "front": "Why does magnesium deficiency reduce photosynthesis?",
        "back": "Less chlorophyll is made, so less light is absorbed.",
        "tag": "Magnesium"
      },
      {
        "front": "How do mineral ions get into a plant?",
        "back": "They are taken from the soil water through root hair cells.",
        "tag": "Uptake"
      },
      {
        "front": "What do farmers add to soil to supply mineral ions?",
        "back": "Fertilisers.",
        "tag": "Uptake"
      },
      {
        "front": "A plant is small with yellow older leaves. Which ion is most likely missing?",
        "back": "Nitrate.",
        "tag": "Deficiency"
      }
    ]
  },
  "7.1": {
    "mindMap": {
      "centre": "Water and ion uptake",
      "branches": [
        {
          "label": "Root hair cells",
          "items": [
            "Long hair: large surface area",
            "Close contact with soil water",
            "Many mitochondria for active transport"
          ]
        },
        {
          "label": "How things enter",
          "items": [
            "Water by osmosis",
            "Mineral ions by active transport"
          ]
        },
        {
          "label": "Path of water",
          "items": [
            "Root hair cell",
            "Root cortex",
            "Xylem",
            "Mesophyll cells in leaf"
          ]
        },
        {
          "label": "Stain practical",
          "items": [
            "Stem in coloured water",
            "Cut across the stem",
            "Only xylem is stained"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "How is a root hair cell adapted for absorbing water?",
        "back": "Its long thin hair gives a large surface area and grows between soil particles, in contact with soil water.",
        "tag": "Root hair"
      },
      {
        "front": "How does water enter a root hair cell?",
        "back": "By osmosis.",
        "tag": "Uptake"
      },
      {
        "front": "How do mineral ions usually enter a root hair cell?",
        "back": "By active transport, against the concentration gradient, using energy.",
        "tag": "Uptake"
      },
      {
        "front": "Why do root hair cells have many mitochondria?",
        "back": "To release energy by respiration for active transport of mineral ions.",
        "tag": "Root hair"
      },
      {
        "front": "Give the path of water from soil to leaf.",
        "back": "Root hair cell, root cortex cells, xylem, mesophyll cells.",
        "tag": "Pathway"
      },
      {
        "front": "Which tissue carries water up the stem?",
        "back": "Xylem.",
        "tag": "Pathway"
      },
      {
        "front": "Describe how to show the path of water in a stem.",
        "back": "Stand a leafy stem in water with a stain, then cut across it and look for the coloured tissue.",
        "tag": "Practical"
      },
      {
        "front": "What does the stain experiment show?",
        "back": "Water travels up the stem in the xylem, because only the xylem is coloured.",
        "tag": "Practical"
      },
      {
        "front": "Where is the xylem in a stem?",
        "back": "In vascular bundles, arranged in a ring near the outside.",
        "tag": "Pathway"
      },
      {
        "front": "Why does water move into root hair cells from the soil?",
        "back": "The soil water is more dilute (higher water potential) than the cell sap.",
        "tag": "Uptake"
      }
    ]
  },
  "7.2": {
    "mindMap": {
      "centre": "Transpiration and translocation",
      "branches": [
        {
          "label": "Transpiration",
          "items": [
            "Loss of water vapour from leaves",
            "Evaporates from mesophyll into air spaces",
            "Diffuses out through stomata"
          ]
        },
        {
          "label": "Faster when",
          "items": [
            "Hotter",
            "Windier",
            "Brighter (stomata open)",
            "Less humid"
          ]
        },
        {
          "label": "Transpiration pull",
          "items": [
            "Water lost from leaves",
            "Pulls column of water up xylem",
            "Water molecules attract each other"
          ]
        },
        {
          "label": "Xylem",
          "items": [
            "Transports water and ions, support",
            "Lignin: thick strong walls",
            "Empty, no cross walls: continuous tube"
          ]
        },
        {
          "label": "Translocation",
          "items": [
            "Sucrose and amino acids in phloem",
            "From sources to sinks",
            "Can move up or down"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "What is transpiration?",
        "back": "The loss of water vapour from leaves.",
        "tag": "Definition"
      },
      {
        "front": "Describe how water leaves a leaf.",
        "back": "Water evaporates from mesophyll cell surfaces into the air spaces, then diffuses out through the stomata as water vapour.",
        "tag": "Mechanism"
      },
      {
        "front": "How does wind speed affect transpiration?",
        "back": "More wind increases it, because water vapour is blown away, keeping a steep concentration gradient.",
        "tag": "Factors"
      },
      {
        "front": "How does humidity affect transpiration?",
        "back": "Higher humidity decreases it, because the concentration gradient of water vapour is smaller.",
        "tag": "Factors"
      },
      {
        "front": "Why does higher temperature increase transpiration?",
        "back": "Water molecules have more kinetic energy, so they evaporate and diffuse faster.",
        "tag": "Factors"
      },
      {
        "front": "Why does light increase transpiration?",
        "back": "Stomata open in the light, so more water vapour can diffuse out.",
        "tag": "Factors"
      },
      {
        "front": "Explain how wilting happens.",
        "back": "The plant loses water faster than it takes it up, so cells become flaccid and the plant droops.",
        "tag": "Wilting"
      },
      {
        "front": "Explain transpiration pull.",
        "back": "Water lost from leaves pulls a column of water up the xylem. The column holds together because water molecules attract each other.",
        "tag": "Xylem"
      },
      {
        "front": "State two functions of xylem.",
        "back": "Transporting water and mineral ions, and supporting the plant.",
        "tag": "Xylem"
      },
      {
        "front": "How is xylem adapted to its function?",
        "back": "Thick walls with lignin, no cell contents, and cells joined end to end with no cross walls to form a long tube.",
        "tag": "Xylem"
      },
      {
        "front": "What is translocation?",
        "back": "The movement of sucrose and amino acids in the phloem from sources to sinks.",
        "tag": "Translocation"
      },
      {
        "front": "What is a source? Give an example.",
        "back": "A part that makes or releases sucrose, such as a leaf doing photosynthesis.",
        "tag": "Translocation"
      },
      {
        "front": "What is a sink? Give an example.",
        "back": "A part that uses or stores sucrose, such as a root, fruit or growing bud.",
        "tag": "Translocation"
      },
      {
        "front": "Where is the xylem in a root?",
        "back": "In the centre, often in a star shape.",
        "tag": "Sections"
      },
      {
        "front": "Why must a shoot be cut under water for a potometer?",
        "back": "To stop air bubbles entering the xylem and blocking water flow.",
        "tag": "Practical"
      }
    ]
  },
  "8.1": {
    "mindMap": {
      "centre": "Diet",
      "branches": [
        {
          "label": "Energy foods",
          "items": [
            "Carbohydrates: bread, rice, main energy",
            "Lipids: oil, butter, energy store"
          ]
        },
        {
          "label": "Growth",
          "items": [
            "Proteins: meat, beans",
            "Growth and repair"
          ]
        },
        {
          "label": "Vitamins",
          "items": [
            "C: citrus fruit, skin and gums",
            "D: oily fish, sunlight, calcium uptake"
          ]
        },
        {
          "label": "Minerals",
          "items": [
            "Calcium: milk, bones and teeth",
            "Iron: red meat, haemoglobin"
          ]
        },
        {
          "label": "Fibre and water",
          "items": [
            "Fibre: vegetables, moves food along",
            "Prevents constipation",
            "Water: reactions and transport"
          ]
        },
        {
          "label": "Deficiency diseases",
          "items": [
            "Vitamin C: scurvy",
            "Vitamin D or calcium: rickets",
            "Iron: anaemia"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "What is a balanced diet?",
        "back": "A diet containing all the nutrients the body needs, in the right amounts.",
        "tag": "Balanced diet"
      },
      {
        "front": "Why do we need carbohydrates? Give a source.",
        "back": "For energy. Sources: bread, rice, pasta, potatoes.",
        "tag": "Nutrients"
      },
      {
        "front": "Why do we need proteins? Give a source.",
        "back": "For growth and repair, and to make enzymes. Sources: meat, fish, eggs, beans.",
        "tag": "Nutrients"
      },
      {
        "front": "Why do we need lipids?",
        "back": "As an energy store, for insulation and for cell membranes.",
        "tag": "Nutrients"
      },
      {
        "front": "Why do we need vitamin C? Give a source.",
        "back": "For healthy skin and gums. Source: citrus fruit such as oranges.",
        "tag": "Vitamins"
      },
      {
        "front": "Why do we need vitamin D? Give a source.",
        "back": "To help absorb calcium for bones and teeth. Sources: oily fish, eggs, and sunlight on skin.",
        "tag": "Vitamins"
      },
      {
        "front": "Why do we need calcium? Give a source.",
        "back": "For strong bones and teeth. Source: milk and cheese.",
        "tag": "Minerals"
      },
      {
        "front": "Why do we need iron? Give a source.",
        "back": "To make haemoglobin in red blood cells. Sources: red meat, liver, spinach.",
        "tag": "Minerals"
      },
      {
        "front": "Why do we need fibre?",
        "back": "It helps food move through the gut by peristalsis and prevents constipation.",
        "tag": "Fibre"
      },
      {
        "front": "Which disease is caused by a lack of vitamin C? Give a symptom.",
        "back": "Scurvy. Bleeding gums.",
        "tag": "Deficiency"
      },
      {
        "front": "Which two deficiencies cause rickets?",
        "back": "Lack of vitamin D or lack of calcium.",
        "tag": "Deficiency"
      },
      {
        "front": "What are the symptoms of rickets?",
        "back": "Soft, weak bones that bend, such as bow legs.",
        "tag": "Deficiency"
      },
      {
        "front": "Which disease is caused by a lack of iron? Give a symptom.",
        "back": "Anaemia. Tiredness, because the blood carries less oxygen.",
        "tag": "Deficiency"
      },
      {
        "front": "Give two things that change how much food a person needs.",
        "back": "Any two of: age, activity level, pregnancy.",
        "tag": "Balanced diet"
      }
    ]
  },
  "8.2": {
    "mindMap": {
      "centre": "Digestive system",
      "branches": [
        {
          "label": "Why digest",
          "items": [
            "Large insoluble molecules",
            "Broken into small soluble ones",
            "So they can be absorbed"
          ]
        },
        {
          "label": "Physical digestion",
          "items": [
            "Teeth chew, stomach churns",
            "No change to molecules",
            "Bigger surface area for enzymes"
          ]
        },
        {
          "label": "Teeth",
          "items": [
            "Incisors cut, canines tear",
            "Premolars and molars grind",
            "Enamel, dentine, pulp, cement"
          ]
        },
        {
          "label": "Enzymes",
          "items": [
            "Amylase: starch to maltose",
            "Maltase: maltose to glucose",
            "Protease: protein to amino acids",
            "Lipase: lipids to fatty acids and glycerol"
          ]
        },
        {
          "label": "Helpers",
          "items": [
            "HCl kills bacteria",
            "Bile emulsifies fats",
            "Pancreatic juice is alkaline"
          ]
        },
        {
          "label": "Peristalsis",
          "items": [
            "Waves of muscle contraction",
            "Circular and longitudinal muscles",
            "Push food along"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "Why must most food be digested before absorption?",
        "back": "Large insoluble molecules are too big to be absorbed. They are broken into small soluble molecules.",
        "tag": "Digestion"
      },
      {
        "front": "What is physical digestion?",
        "back": "Breaking food into smaller pieces without changing the food molecules.",
        "tag": "Digestion"
      },
      {
        "front": "What is chemical digestion?",
        "back": "Breaking large molecules into small molecules, using enzymes.",
        "tag": "Digestion"
      },
      {
        "front": "How does physical digestion help chemical digestion?",
        "back": "It increases the surface area of food for enzymes to act on.",
        "tag": "Digestion"
      },
      {
        "front": "Name the four types of teeth and their jobs.",
        "back": "Incisors bite and cut, canines tear, premolars and molars grind and chew.",
        "tag": "Teeth"
      },
      {
        "front": "Name the hard outer layer of a tooth.",
        "back": "Enamel.",
        "tag": "Teeth"
      },
      {
        "front": "What does amylase do and where is it made?",
        "back": "Breaks starch into maltose. Made in salivary glands and pancreas.",
        "tag": "Enzymes"
      },
      {
        "front": "What does maltase do?",
        "back": "Breaks maltose into glucose.",
        "tag": "Enzymes"
      },
      {
        "front": "What does protease do? Name two proteases.",
        "back": "Breaks protein into amino acids. Pepsin (stomach) and trypsin (duodenum).",
        "tag": "Enzymes"
      },
      {
        "front": "What does lipase do and where is it made?",
        "back": "Breaks lipids into fatty acids and glycerol. Made in the pancreas.",
        "tag": "Enzymes"
      },
      {
        "front": "What is the function of hydrochloric acid in the stomach?",
        "back": "To kill bacteria in the food.",
        "tag": "Stomach"
      },
      {
        "front": "Where is bile made and where is it stored?",
        "back": "Made in the liver, stored in the gall bladder.",
        "tag": "Bile"
      },
      {
        "front": "What does bile do?",
        "back": "Emulsifies fats into small droplets, increasing the surface area for lipase.",
        "tag": "Bile"
      },
      {
        "front": "Why do pepsin and trypsin need different conditions?",
        "back": "Pepsin works best at about pH 2 in the stomach; trypsin works best at about pH 8 in the duodenum.",
        "tag": "Enzymes"
      },
      {
        "front": "What is peristalsis?",
        "back": "Waves of contraction of circular and longitudinal muscles that move food through the gut.",
        "tag": "Peristalsis"
      },
      {
        "front": "What does the liver store?",
        "back": "Glycogen.",
        "tag": "Liver"
      }
    ]
  },
  "8.3": {
    "mindMap": {
      "centre": "Absorption and assimilation",
      "branches": [
        {
          "label": "Absorption",
          "items": [
            "Mainly in small intestine (ileum)",
            "Gut into cells, then blood",
            "Diffusion, osmosis, active transport"
          ]
        },
        {
          "label": "Villus features",
          "items": [
            "Villi and microvilli: huge surface area",
            "Wall one cell thick",
            "Capillaries: glucose, amino acids",
            "Lacteal: fatty acids, glycerol"
          ]
        },
        {
          "label": "Water",
          "items": [
            "Absorbed in small intestine and colon",
            "Most in small intestine"
          ]
        },
        {
          "label": "Hepatic portal vein",
          "items": [
            "Ileum to liver",
            "Carries absorbed nutrients"
          ]
        },
        {
          "label": "Assimilation",
          "items": [
            "Cells take up and use nutrients",
            "Glucose for respiration",
            "Amino acids for proteins"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "Where are most nutrients absorbed?",
        "back": "In the small intestine (mainly the ileum).",
        "tag": "Absorption"
      },
      {
        "front": "What is absorption?",
        "back": "The movement of nutrients from the intestines into the cells lining the gut, and then into the blood.",
        "tag": "Absorption"
      },
      {
        "front": "Name three ways nutrients are absorbed.",
        "back": "Diffusion, osmosis (water) and active transport.",
        "tag": "Absorption"
      },
      {
        "front": "What is assimilation?",
        "back": "The uptake and use of nutrients by cells.",
        "tag": "Assimilation"
      },
      {
        "front": "Give one example of assimilation.",
        "back": "Cells using amino acids to build proteins (or glucose for respiration).",
        "tag": "Assimilation"
      },
      {
        "front": "How do villi and microvilli help absorption?",
        "back": "They greatly increase the surface area of the ileum.",
        "tag": "Villi"
      },
      {
        "front": "Why is the wall of a villus only one cell thick?",
        "back": "So nutrients have a short distance to travel into the blood.",
        "tag": "Villi"
      },
      {
        "front": "What do the capillaries in a villus absorb?",
        "back": "Glucose and amino acids.",
        "tag": "Villi"
      },
      {
        "front": "What does the lacteal absorb?",
        "back": "Fatty acids and glycerol.",
        "tag": "Villi"
      },
      {
        "front": "Why does blood flow in the villus help absorption?",
        "back": "It carries nutrients away, keeping a steep concentration gradient.",
        "tag": "Villi"
      },
      {
        "front": "Where is most water absorbed?",
        "back": "In the small intestine. The colon absorbs some too.",
        "tag": "Water"
      },
      {
        "front": "What is the function of the hepatic portal vein?",
        "back": "It carries most absorbed nutrients from the ileum to the liver.",
        "tag": "Liver"
      }
    ]
  }
};

export function getBiologyRevision(topic: string): TopicRevision | null {
  return O_LEVEL_BIOLOGY_REVISION[topic] ?? null;
}
