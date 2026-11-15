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
  }
};

export function getBiologyRevision(topic: string): TopicRevision | null {
  return O_LEVEL_BIOLOGY_REVISION[topic] ?? null;
}
