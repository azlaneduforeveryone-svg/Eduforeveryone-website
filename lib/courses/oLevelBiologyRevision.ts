// O Level Biology 5090 flashcards and topic maps, original material written for EduForEveryone.
// Mapped to Cambridge O Level Biology 5090 and IGCSE Biology 0610 (Core and Extended) for exams in 2026, 2027 and 2028.
// O Level content reviewed by a biology teacher; IGCSE additions (Nov 2026) are waiting for teacher review.
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
      },
      {
        "front": "What are the seven characteristics of living things?",
        "back": "Movement, respiration, sensitivity, growth, reproduction, excretion and nutrition (MRS GREN).",
        "tag": "IGCSE"
      },
      {
        "front": "What does it mean if two species have very similar DNA base sequences?",
        "back": "They share a recent common ancestor, so they are closely related.",
        "tag": "IGCSE Extended"
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
      },
      {
        "front": "How do you test for vitamin C?",
        "back": "Add the food solution drop by drop to blue DCPIP. Vitamin C makes the blue colour disappear.",
        "tag": "IGCSE"
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
  },
  "9.1": {
    "mindMap": {
      "centre": "Gas exchange in humans",
      "branches": [
        {
          "label": "Good exchange surface",
          "items": [
            "Large surface area",
            "Thin surface",
            "Good blood supply",
            "Good air supply"
          ]
        },
        {
          "label": "Airways",
          "items": [
            "Larynx, trachea",
            "Bronchi, bronchioles",
            "Alveoli with capillaries"
          ]
        },
        {
          "label": "Air in and out",
          "items": [
            "Oxygen 21% in, 16% out",
            "Carbon dioxide 0.04% in, 4% out",
            "Out: more water vapour, warmer",
            "Limewater turns milky"
          ]
        },
        {
          "label": "Breathing in",
          "items": [
            "External intercostals contract",
            "Ribs up and out",
            "Diaphragm contracts, flattens",
            "Volume up, pressure down"
          ]
        },
        {
          "label": "Exercise",
          "items": [
            "Faster, deeper breathing",
            "More oxygen for respiration",
            "Remove more carbon dioxide"
          ]
        },
        {
          "label": "Protection",
          "items": [
            "Goblet cells make mucus",
            "Mucus traps dust and pathogens",
            "Cilia move mucus away"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "Give four features of a gas exchange surface.",
        "back": "Large surface area, thin surface, good blood supply and good air supply.",
        "tag": "Surfaces"
      },
      {
        "front": "What percentage of air is oxygen?",
        "back": "About 21%.",
        "tag": "Air"
      },
      {
        "front": "Give the percentages of oxygen and carbon dioxide in expired air.",
        "back": "About 16% oxygen and 4% carbon dioxide.",
        "tag": "Air"
      },
      {
        "front": "Give two other differences between inspired and expired air.",
        "back": "Expired air has more water vapour and is warmer.",
        "tag": "Air"
      },
      {
        "front": "How do you show that expired air has more carbon dioxide?",
        "back": "Breathe through limewater. Expired air turns it milky much faster than inspired air.",
        "tag": "Practical"
      },
      {
        "front": "Name the parts air passes through from the larynx to the alveoli.",
        "back": "Larynx, trachea, bronchi, bronchioles, alveoli.",
        "tag": "Structure"
      },
      {
        "front": "Describe how oxygen gets into the blood in the lungs.",
        "back": "Oxygen diffuses from the air in the alveoli, where its concentration is high, into the blood in the capillaries, where it is low.",
        "tag": "Alveoli"
      },
      {
        "front": "Give two ways alveoli are adapted for gas exchange.",
        "back": "Any two: huge surface area, walls one cell thick, dense capillary network, moist surface, good air supply.",
        "tag": "Alveoli"
      },
      {
        "front": "What happens to the intercostal muscles and ribs when you breathe in?",
        "back": "External intercostals contract (internal relax), so the ribs move up and out.",
        "tag": "Breathing"
      },
      {
        "front": "What happens to the diaphragm when you breathe in?",
        "back": "It contracts and flattens (moves down).",
        "tag": "Breathing"
      },
      {
        "front": "Explain why air moves into the lungs when you breathe in.",
        "back": "The volume of the thorax increases, so the pressure inside falls below air pressure outside.",
        "tag": "Breathing"
      },
      {
        "front": "What happens to the diaphragm when you breathe out?",
        "back": "It relaxes and moves up into a dome.",
        "tag": "Breathing"
      },
      {
        "front": "How does exercise change breathing, and why?",
        "back": "It becomes faster and deeper, to supply more oxygen and remove more carbon dioxide for faster respiration.",
        "tag": "Exercise"
      },
      {
        "front": "What do goblet cells do?",
        "back": "They make mucus, which traps dust and pathogens.",
        "tag": "Protection"
      },
      {
        "front": "What do ciliated cells do?",
        "back": "Their cilia beat to move mucus up and away from the lungs.",
        "tag": "Protection"
      }
    ]
  },
  "10.1": {
    "mindMap": {
      "centre": "Respiration",
      "branches": [
        {
          "label": "Definition",
          "items": [
            "Chemical reactions in all living cells",
            "Release energy from glucose",
            "Not the same as breathing"
          ]
        },
        {
          "label": "Uses of energy",
          "items": [
            "Muscle contraction, growth",
            "Protein synthesis, cell division",
            "Active transport, nerve impulses",
            "Constant body temperature"
          ]
        },
        {
          "label": "Yeast practical",
          "items": [
            "Yeast in glucose solution",
            "Count carbon dioxide bubbles",
            "Water baths at different temperatures"
          ]
        },
        {
          "label": "Results",
          "items": [
            "Faster as temperature rises",
            "Optimum about 35 to 40 °C",
            "Slower above: enzymes denatured"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "What is respiration?",
        "back": "The chemical reactions in all living cells that release energy from glucose.",
        "tag": "Definition"
      },
      {
        "front": "Which cells respire?",
        "back": "All living cells, all the time.",
        "tag": "Definition"
      },
      {
        "front": "How is respiration different from breathing?",
        "back": "Respiration is a chemical reaction in cells. Breathing moves air in and out of the lungs.",
        "tag": "Definition"
      },
      {
        "front": "Give four uses of energy in living things.",
        "back": "Any four: muscle contraction, protein synthesis, cell division, active transport, growth, nerve impulses, keeping body temperature constant.",
        "tag": "Uses"
      },
      {
        "front": "Why do mammals need energy even when resting?",
        "back": "To keep a constant body temperature, and for processes like protein synthesis and active transport.",
        "tag": "Uses"
      },
      {
        "front": "Which gas does yeast give off when it respires?",
        "back": "Carbon dioxide.",
        "tag": "Practical"
      },
      {
        "front": "How can you measure the rate of respiration of yeast?",
        "back": "Count the bubbles of carbon dioxide given off in one minute.",
        "tag": "Practical"
      },
      {
        "front": "How does temperature affect respiration in yeast, up to about 40 °C?",
        "back": "The rate increases as temperature rises.",
        "tag": "Practical"
      },
      {
        "front": "Why does yeast respiration slow down at high temperatures?",
        "back": "The enzymes that control respiration are denatured.",
        "tag": "Practical"
      },
      {
        "front": "Name two things to keep the same in the yeast practical.",
        "back": "Any two: amount of yeast, volume of glucose solution, concentration of glucose.",
        "tag": "Practical"
      }
    ]
  },
  "10.2": {
    "mindMap": {
      "centre": "Aerobic respiration",
      "branches": [
        {
          "label": "Definition",
          "items": [
            "Uses oxygen",
            "Releases a large amount of energy",
            "Breaks down glucose completely"
          ]
        },
        {
          "label": "Word equation",
          "items": [
            "Glucose + oxygen",
            "Gives carbon dioxide + water"
          ]
        },
        {
          "label": "Balanced equation",
          "items": [
            "C₆H₁₂O₆ + 6O₂",
            "Gives 6CO₂ + 6H₂O"
          ]
        },
        {
          "label": "Where",
          "items": [
            "In mitochondria",
            "Muscle cells have many"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "What is aerobic respiration?",
        "back": "The release of a relatively large amount of energy by the breakdown of glucose in the presence of oxygen.",
        "tag": "Definition"
      },
      {
        "front": "Give the word equation for aerobic respiration.",
        "back": "Glucose + oxygen gives carbon dioxide + water (energy is released).",
        "tag": "Equation"
      },
      {
        "front": "Give the balanced equation for aerobic respiration.",
        "back": "C₆H₁₂O₆ + 6O₂ gives 6CO₂ + 6H₂O.",
        "tag": "Equation"
      },
      {
        "front": "Where in the cell does aerobic respiration happen?",
        "back": "In the mitochondria.",
        "tag": "Location"
      },
      {
        "front": "Why do muscle cells have many mitochondria?",
        "back": "They need lots of energy from aerobic respiration for contraction.",
        "tag": "Location"
      },
      {
        "front": "How does the oxygen for respiration reach body cells?",
        "back": "It is absorbed in the lungs and carried by red blood cells.",
        "tag": "Transport"
      },
      {
        "front": "How is carbon dioxide from respiration removed?",
        "back": "Carried in the blood plasma to the lungs and breathed out.",
        "tag": "Transport"
      },
      {
        "front": "How is aerobic respiration related to photosynthesis?",
        "back": "Its equation is the reverse of photosynthesis.",
        "tag": "Compare"
      },
      {
        "front": "Does aerobic respiration release more or less energy than anaerobic?",
        "back": "More: a relatively large amount.",
        "tag": "Compare"
      },
      {
        "front": "Is energy a product in the equation?",
        "back": "No. Energy is released, but it is not a substance.",
        "tag": "Equation"
      }
    ]
  },
  "10.3": {
    "mindMap": {
      "centre": "Anaerobic respiration",
      "branches": [
        {
          "label": "Definition",
          "items": [
            "No oxygen used",
            "Releases a small amount of energy"
          ]
        },
        {
          "label": "In humans",
          "items": [
            "Glucose gives lactic acid",
            "In muscles during hard exercise"
          ]
        },
        {
          "label": "In yeast",
          "items": [
            "Glucose gives ethanol + carbon dioxide",
            "Bread rises (carbon dioxide)",
            "Beer and wine (ethanol)"
          ]
        },
        {
          "label": "Oxygen debt",
          "items": [
            "Not enough oxygen in vigorous exercise",
            "Lactic acid builds up",
            "Extra oxygen needed afterwards"
          ]
        },
        {
          "label": "Paying it back",
          "items": [
            "Fast heart rate: lactic acid to liver",
            "Deep fast breathing: oxygen to liver",
            "Lactic acid broken down"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "What is anaerobic respiration?",
        "back": "The release of a relatively small amount of energy by the breakdown of glucose without using oxygen.",
        "tag": "Definition"
      },
      {
        "front": "Give the word equation for anaerobic respiration in humans.",
        "back": "Glucose gives lactic acid.",
        "tag": "Equation"
      },
      {
        "front": "Give the word equation for anaerobic respiration in yeast.",
        "back": "Glucose gives ethanol + carbon dioxide.",
        "tag": "Equation"
      },
      {
        "front": "Why do muscles respire anaerobically during vigorous exercise?",
        "back": "Oxygen cannot be delivered fast enough for aerobic respiration alone.",
        "tag": "Exercise"
      },
      {
        "front": "What builds up in muscles during vigorous exercise?",
        "back": "Lactic acid.",
        "tag": "Exercise"
      },
      {
        "front": "What is the oxygen debt?",
        "back": "The extra oxygen needed after exercise to break down lactic acid (EPOC).",
        "tag": "Oxygen debt"
      },
      {
        "front": "Why does heart rate stay high after exercise?",
        "back": "To carry lactic acid in the blood from the muscles to the liver.",
        "tag": "Oxygen debt"
      },
      {
        "front": "Why does breathing stay deep and fast after exercise?",
        "back": "To supply oxygen for breaking down lactic acid in the liver.",
        "tag": "Oxygen debt"
      },
      {
        "front": "Where is lactic acid broken down?",
        "back": "In the liver.",
        "tag": "Oxygen debt"
      },
      {
        "front": "Why is yeast used in bread making?",
        "back": "Its carbon dioxide makes the dough rise.",
        "tag": "Yeast"
      },
      {
        "front": "Compare the energy released by aerobic and anaerobic respiration.",
        "back": "Aerobic releases a large amount; anaerobic releases a small amount.",
        "tag": "Compare"
      },
      {
        "front": "Do humans make carbon dioxide in anaerobic respiration?",
        "back": "No. Humans make only lactic acid.",
        "tag": "Compare"
      }
    ]
  },
  "11.1": {
    "mindMap": {
      "centre": "Circulatory system",
      "branches": [
        {
          "label": "Parts",
          "items": [
            "Heart: the pump",
            "Blood vessels",
            "Valves: one-way flow"
          ]
        },
        {
          "label": "Double circulation",
          "items": [
            "Through heart twice per circuit",
            "Right side: to lungs",
            "Left side: to body"
          ]
        },
        {
          "label": "Lung circuit",
          "items": [
            "Low pressure",
            "Protects delicate capillaries"
          ]
        },
        {
          "label": "Body circuit",
          "items": [
            "High pressure",
            "Reaches all tissues quickly"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "Describe the circulatory system.",
        "back": "A system of blood vessels with a pump and valves to make sure blood flows one way.",
        "tag": "Definition"
      },
      {
        "front": "What is the job of valves in the circulatory system?",
        "back": "To stop blood flowing backwards.",
        "tag": "Parts"
      },
      {
        "front": "What is a double circulation?",
        "back": "A system in which blood passes through the heart twice for each complete circuit.",
        "tag": "Double circulation"
      },
      {
        "front": "Which side of the heart pumps blood to the lungs?",
        "back": "The right side.",
        "tag": "Double circulation"
      },
      {
        "front": "Which side of the heart pumps blood to the body?",
        "back": "The left side.",
        "tag": "Double circulation"
      },
      {
        "front": "Is the pressure to the lungs high or low?",
        "back": "Low.",
        "tag": "Pressure"
      },
      {
        "front": "Why is low pressure to the lungs useful?",
        "back": "It does not damage the delicate lung capillaries.",
        "tag": "Pressure"
      },
      {
        "front": "Why is high pressure to the body useful?",
        "back": "Blood reaches all body tissues quickly.",
        "tag": "Pressure"
      },
      {
        "front": "Where does blood pick up oxygen?",
        "back": "In the lungs.",
        "tag": "Double circulation"
      },
      {
        "front": "What colour is oxygenated blood?",
        "back": "Bright red.",
        "tag": "Blood"
      },
      {
        "front": "Describe the circulation of a fish.",
        "back": "A single circulation: blood goes heart, gills, body, then back to the heart, passing through the heart once per circuit.",
        "tag": "IGCSE Extended"
      }
    ]
  },
  "11.2": {
    "mindMap": {
      "centre": "Heart",
      "branches": [
        {
          "label": "Chambers",
          "items": [
            "Right atrium, right ventricle",
            "Left atrium, left ventricle",
            "Septum separates sides"
          ]
        },
        {
          "label": "Valves",
          "items": [
            "Atrioventricular: atria to ventricles",
            "Semilunar: ventricles to arteries",
            "Stop backflow"
          ]
        },
        {
          "label": "Wall thickness",
          "items": [
            "Left ventricle thickest: whole body",
            "Ventricles thicker than atria"
          ]
        },
        {
          "label": "Heartbeat",
          "items": [
            "Atria contract",
            "Ventricles contract",
            "AV valves shut, semilunar open"
          ]
        },
        {
          "label": "Monitoring",
          "items": [
            "ECG",
            "Pulse rate",
            "Valve sounds"
          ]
        },
        {
          "label": "Heart disease",
          "items": [
            "Coronary arteries blocked",
            "Risks: diet, smoking, stress, no exercise",
            "Also genes, age, gender"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "Name the four chambers of the heart.",
        "back": "Right atrium, right ventricle, left atrium, left ventricle.",
        "tag": "Structure"
      },
      {
        "front": "What does the septum do?",
        "back": "Separates the left and right sides, so oxygenated and deoxygenated blood do not mix.",
        "tag": "Structure"
      },
      {
        "front": "What do the coronary arteries do?",
        "back": "Supply the heart muscle with oxygen and glucose.",
        "tag": "Structure"
      },
      {
        "front": "Why is the left ventricle wall thicker than the right?",
        "back": "It pumps blood at high pressure to the whole body; the right only pumps to the nearby lungs.",
        "tag": "Walls"
      },
      {
        "front": "Why are the ventricle walls thicker than the atrium walls?",
        "back": "Ventricles pump blood out of the heart; atria only pump it into the ventricles.",
        "tag": "Walls"
      },
      {
        "front": "What do the atrioventricular valves do?",
        "back": "Stop blood flowing back from the ventricles into the atria.",
        "tag": "Valves"
      },
      {
        "front": "What do the semilunar valves do?",
        "back": "Stop blood flowing back from the arteries into the ventricles.",
        "tag": "Valves"
      },
      {
        "front": "Describe what happens when the ventricles contract.",
        "back": "The atrioventricular valves close and blood is pushed out through the semilunar valves into the arteries.",
        "tag": "Heartbeat"
      },
      {
        "front": "Which vessels carry blood away from the heart?",
        "back": "Arteries.",
        "tag": "Vessels"
      },
      {
        "front": "Give three ways to monitor heart activity.",
        "back": "ECG, pulse rate, and listening to the valves closing.",
        "tag": "Monitoring"
      },
      {
        "front": "Why does heart rate increase during exercise?",
        "back": "To deliver more oxygen and glucose to muscles and remove more carbon dioxide.",
        "tag": "Exercise"
      },
      {
        "front": "What is coronary heart disease?",
        "back": "Blockage of the coronary arteries, so heart muscle gets less oxygen.",
        "tag": "Disease"
      },
      {
        "front": "Give four risk factors for coronary heart disease.",
        "back": "Any four: poor diet, sedentary lifestyle, stress, smoking, genetic predisposition, age, gender.",
        "tag": "Disease"
      },
      {
        "front": "How can diet reduce the risk of coronary heart disease?",
        "back": "Eating less saturated fat and salt reduces fatty deposits in the arteries.",
        "tag": "Disease"
      }
    ]
  },
  "11.3": {
    "mindMap": {
      "centre": "Blood vessels",
      "branches": [
        {
          "label": "Heart and lungs",
          "items": [
            "Vena cava: body to heart",
            "Aorta: heart to body",
            "Pulmonary artery: to lungs",
            "Pulmonary vein: from lungs"
          ]
        },
        {
          "label": "Liver and kidneys",
          "items": [
            "Hepatic artery, hepatic vein",
            "Hepatic portal vein: gut to liver",
            "Renal artery, renal vein"
          ]
        },
        {
          "label": "Arteries",
          "items": [
            "Thick, muscular, elastic walls",
            "Narrow lumen",
            "High pressure, no valves"
          ]
        },
        {
          "label": "Veins",
          "items": [
            "Thin walls, wide lumen",
            "Valves",
            "Low pressure"
          ]
        },
        {
          "label": "Capillaries",
          "items": [
            "Wall one cell thick",
            "Very narrow lumen",
            "Exchange with cells"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "Which vessel carries blood from the body to the heart?",
        "back": "The vena cava.",
        "tag": "Vessels"
      },
      {
        "front": "Which vessel carries blood from the heart to the body?",
        "back": "The aorta.",
        "tag": "Vessels"
      },
      {
        "front": "Which vessel carries blood to the lungs?",
        "back": "The pulmonary artery.",
        "tag": "Vessels"
      },
      {
        "front": "Which vessel carries oxygenated blood from the lungs to the heart?",
        "back": "The pulmonary vein.",
        "tag": "Vessels"
      },
      {
        "front": "Which vessel carries blood from the gut to the liver?",
        "back": "The hepatic portal vein.",
        "tag": "Vessels"
      },
      {
        "front": "Which vessels carry blood to and from the kidneys?",
        "back": "The renal artery (to) and the renal vein (from).",
        "tag": "Vessels"
      },
      {
        "front": "Describe the wall of an artery.",
        "back": "Thick, with lots of muscle and elastic tissue, and a narrow lumen.",
        "tag": "Structure"
      },
      {
        "front": "Why do arteries have thick, elastic walls?",
        "back": "To withstand high blood pressure and stretch and recoil with each heartbeat.",
        "tag": "Structure"
      },
      {
        "front": "Describe the structure of a vein.",
        "back": "Thin wall with little muscle, a wide lumen, and valves.",
        "tag": "Structure"
      },
      {
        "front": "Why do veins have valves?",
        "back": "Blood pressure is low, so valves stop blood flowing backwards.",
        "tag": "Structure"
      },
      {
        "front": "Describe the wall of a capillary.",
        "back": "One cell thick.",
        "tag": "Structure"
      },
      {
        "front": "Why are capillary walls one cell thick?",
        "back": "To give a short diffusion distance for exchange between blood and cells.",
        "tag": "Structure"
      },
      {
        "front": "Which artery carries deoxygenated blood?",
        "back": "The pulmonary artery.",
        "tag": "Vessels"
      }
    ]
  },
  "11.4": {
    "mindMap": {
      "centre": "Blood",
      "branches": [
        {
          "label": "Red blood cells",
          "items": [
            "Carry oxygen",
            "Haemoglobin",
            "No nucleus, biconcave"
          ]
        },
        {
          "label": "White blood cells",
          "items": [
            "Phagocytes engulf pathogens",
            "Lymphocytes make antibodies"
          ]
        },
        {
          "label": "Platelets",
          "items": [
            "Help clotting",
            "Fibrinogen to fibrin",
            "Stop blood loss and pathogens"
          ]
        },
        {
          "label": "Plasma",
          "items": [
            "Transports cells, glucose, ions",
            "Hormones, urea, carbon dioxide",
            "Vitamins, plasma proteins"
          ]
        },
        {
          "label": "Tissue fluid",
          "items": [
            "Plasma leaks from capillaries",
            "Substances diffuse to cells",
            "Wastes diffuse back"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "List the four components of blood.",
        "back": "Red blood cells, white blood cells, platelets and plasma.",
        "tag": "Components"
      },
      {
        "front": "What is the function of red blood cells?",
        "back": "To transport oxygen.",
        "tag": "Red cells"
      },
      {
        "front": "Name the protein in red blood cells that carries oxygen.",
        "back": "Haemoglobin.",
        "tag": "Red cells"
      },
      {
        "front": "Why do red blood cells have no nucleus?",
        "back": "To leave more room for haemoglobin.",
        "tag": "Red cells"
      },
      {
        "front": "What do phagocytes do?",
        "back": "Engulf and digest pathogens.",
        "tag": "White cells"
      },
      {
        "front": "What do lymphocytes do?",
        "back": "Make antibodies.",
        "tag": "White cells"
      },
      {
        "front": "How can you tell a lymphocyte from a phagocyte?",
        "back": "A lymphocyte has a large round nucleus; a phagocyte has a lobed nucleus.",
        "tag": "White cells"
      },
      {
        "front": "What is the function of platelets?",
        "back": "Clotting, by converting soluble fibrinogen to insoluble fibrin.",
        "tag": "Platelets"
      },
      {
        "front": "Why is blood clotting important?",
        "back": "It prevents blood loss and the entry of pathogens.",
        "tag": "Platelets"
      },
      {
        "front": "Name five things transported in plasma.",
        "back": "Any five: blood cells, ions, glucose, amino acids, hormones, carbon dioxide, urea, vitamins, plasma proteins.",
        "tag": "Plasma"
      },
      {
        "front": "How is tissue fluid formed?",
        "back": "Plasma leaks out of capillaries under pressure.",
        "tag": "Tissue fluid"
      },
      {
        "front": "How does oxygen get from the blood into a body cell?",
        "back": "It diffuses out of the capillary into the tissue fluid, then into the cell.",
        "tag": "Tissue fluid"
      },
      {
        "front": "Which waste is carried in plasma to the kidneys?",
        "back": "Urea.",
        "tag": "Plasma"
      }
    ]
  },
  "12.1": {
    "mindMap": {
      "centre": "Disease",
      "branches": [
        {
          "label": "Basics",
          "items": [
            "Pathogen: disease-causing organism",
            "Transmissible: passed host to host",
            "Direct or indirect spread"
          ]
        },
        {
          "label": "Barriers",
          "items": [
            "Skin",
            "Nose hairs, mucus",
            "Stomach acid"
          ]
        },
        {
          "label": "Malaria",
          "items": [
            "Parasite carried by mosquito (vector)",
            "Drain still water, oil on water",
            "Nets and insecticides"
          ]
        },
        {
          "label": "HIV",
          "items": [
            "A virus, can lead to AIDS",
            "Sex, needles, blood, mother to baby",
            "Condoms, blood tests, no shared needles"
          ]
        },
        {
          "label": "Cholera",
          "items": [
            "Bacterium in dirty water",
            "Toxin: chloride ions, osmosis",
            "Diarrhoea, dehydration"
          ]
        },
        {
          "label": "Alcohol and tobacco",
          "items": [
            "Alcohol: depressant, liver damage",
            "Tar: cancer; CO: less oxygen",
            "Nicotine: addictive"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "What is a pathogen?",
        "back": "A disease-causing organism.",
        "tag": "Definitions"
      },
      {
        "front": "What is a transmissible disease?",
        "back": "A disease where the pathogen can be passed from one host to another.",
        "tag": "Definitions"
      },
      {
        "front": "Give two indirect ways pathogens spread.",
        "back": "Any two: contaminated surfaces, contaminated food, animals, the air.",
        "tag": "Spread"
      },
      {
        "front": "Name four barriers to pathogens.",
        "back": "Skin, hairs in the nose, mucus, stomach acid.",
        "tag": "Barriers"
      },
      {
        "front": "What is a vector?",
        "back": "An organism that carries a pathogen from one host to another, such as a mosquito.",
        "tag": "Malaria"
      },
      {
        "front": "How is malaria transmitted?",
        "back": "A female mosquito carrying the parasite bites a person and passes it into their blood.",
        "tag": "Malaria"
      },
      {
        "front": "Give two ways to control mosquitoes using their life cycle.",
        "back": "Any two: drain still water, oil on water to kill larvae, fish that eat larvae, insecticides, mosquito nets.",
        "tag": "Malaria"
      },
      {
        "front": "Give three ways HIV is transmitted.",
        "back": "Any three: unprotected sex, sharing needles, infected blood, mother to baby (placenta, birth, breast milk).",
        "tag": "HIV"
      },
      {
        "front": "Give two ways to control the spread of HIV.",
        "back": "Any two: condoms, not sharing needles, testing donated blood, medicines.",
        "tag": "HIV"
      },
      {
        "front": "What causes cholera and how is it spread?",
        "back": "A bacterium, spread in contaminated water.",
        "tag": "Cholera"
      },
      {
        "front": "Explain how cholera causes diarrhoea.",
        "back": "Its toxin makes cells release chloride ions into the gut; water follows by osmosis, causing diarrhoea and dehydration.",
        "tag": "Cholera"
      },
      {
        "front": "Give three ways to control cholera.",
        "back": "Any three: clean water, hygienic food preparation, hand washing, waste disposal, sewage treatment.",
        "tag": "Cholera"
      },
      {
        "front": "Give three effects of drinking too much alcohol.",
        "back": "Any three: reduced self-control, depressant, slower reactions, liver damage, social problems.",
        "tag": "Alcohol"
      },
      {
        "front": "What do tar and carbon monoxide in smoke do?",
        "back": "Tar causes cancer and damages cilia; carbon monoxide reduces the oxygen carried by the blood.",
        "tag": "Tobacco"
      },
      {
        "front": "Name three diseases linked to smoking.",
        "back": "Any three: bronchitis, emphysema, lung cancer, heart disease.",
        "tag": "Tobacco"
      }
    ]
  },
  "12.2": {
    "mindMap": {
      "centre": "Antibiotics",
      "branches": [
        {
          "label": "Drugs",
          "items": [
            "Change chemical reactions in the body",
            "Medicines, alcohol, nicotine"
          ]
        },
        {
          "label": "Antibiotics",
          "items": [
            "Treat bacterial infections",
            "Kill bacteria",
            "Do not affect viruses"
          ]
        },
        {
          "label": "Resistance",
          "items": [
            "Mutation by chance",
            "Antibiotic kills others",
            "Resistant ones survive, reproduce"
          ]
        },
        {
          "label": "Prevention",
          "items": [
            "Use only when essential",
            "Not for viral infections",
            "Finish the course"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "What is a drug?",
        "back": "Any substance taken into the body that modifies or affects chemical reactions in the body.",
        "tag": "Drugs"
      },
      {
        "front": "What are antibiotics used for?",
        "back": "To treat bacterial infections.",
        "tag": "Antibiotics"
      },
      {
        "front": "Do antibiotics work against viruses?",
        "back": "No. They kill bacteria but do not affect viruses.",
        "tag": "Antibiotics"
      },
      {
        "front": "Why should antibiotics not be used for a cold?",
        "back": "Colds are caused by viruses, which antibiotics do not affect.",
        "tag": "Antibiotics"
      },
      {
        "front": "What is an antibiotic-resistant bacterium?",
        "back": "A bacterium that is not killed by an antibiotic.",
        "tag": "Resistance"
      },
      {
        "front": "What is MRSA?",
        "back": "A bacterium resistant to many antibiotics.",
        "tag": "Resistance"
      },
      {
        "front": "How does a population of resistant bacteria develop?",
        "back": "A chance mutation makes some bacteria resistant; the antibiotic kills the others; the resistant ones survive and reproduce.",
        "tag": "Resistance"
      },
      {
        "front": "How can the development of resistance be minimised?",
        "back": "Use antibiotics only when essential.",
        "tag": "Prevention"
      },
      {
        "front": "Who becomes resistant: the patient or the bacteria?",
        "back": "The bacteria.",
        "tag": "Resistance"
      },
      {
        "front": "Why finish a course of antibiotics?",
        "back": "So all the bacteria are killed and none survive to become resistant.",
        "tag": "Prevention"
      }
    ]
  },
  "12.3": {
    "mindMap": {
      "centre": "Immunity",
      "branches": [
        {
          "label": "Antigens and antibodies",
          "items": [
            "Antigens on pathogens, specific shapes",
            "Antibodies: proteins from lymphocytes",
            "Complementary shapes fit"
          ]
        },
        {
          "label": "Antibody action",
          "items": [
            "Destroy pathogens directly",
            "Mark them for phagocytes"
          ]
        },
        {
          "label": "Active immunity",
          "items": [
            "Your own antibodies",
            "From infection or vaccination",
            "Memory cells, long term"
          ]
        },
        {
          "label": "Vaccination",
          "items": [
            "Weakened pathogens or antigens",
            "Lymphocytes make antibodies",
            "Memory cells made",
            "Stops disease spreading"
          ]
        },
        {
          "label": "Passive immunity",
          "items": [
            "Antibodies from another person",
            "Placenta, breast milk",
            "No memory cells, short term"
          ]
        },
        {
          "label": "HIV",
          "items": [
            "Kills lymphocytes",
            "Fewer antibodies",
            "Weak immune system"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "What is active immunity?",
        "back": "Defence against a pathogen by antibody production in your own body.",
        "tag": "Active"
      },
      {
        "front": "What are antigens?",
        "back": "Molecules on a pathogen with specific shapes; each pathogen has its own.",
        "tag": "Antigens"
      },
      {
        "front": "What are antibodies?",
        "back": "Proteins that bind to antigens, destroying pathogens or marking them for phagocytes.",
        "tag": "Antibodies"
      },
      {
        "front": "Why does each antibody fit only one antigen?",
        "back": "Its shape is complementary to that specific antigen.",
        "tag": "Antibodies"
      },
      {
        "front": "Give two ways to gain active immunity.",
        "back": "Infection by the pathogen, or vaccination.",
        "tag": "Active"
      },
      {
        "front": "What does a vaccine contain?",
        "back": "Weakened pathogens or their antigens.",
        "tag": "Vaccination"
      },
      {
        "front": "Outline how vaccination gives immunity.",
        "back": "Antigens stimulate lymphocytes to make antibodies, and memory cells are made for long-term immunity.",
        "tag": "Vaccination"
      },
      {
        "front": "How does vaccination control the spread of disease?",
        "back": "If most people are immune, the pathogen cannot spread from person to person.",
        "tag": "Vaccination"
      },
      {
        "front": "What is passive immunity?",
        "back": "Short-term defence by antibodies received from another person.",
        "tag": "Passive"
      },
      {
        "front": "How does a baby get passive immunity?",
        "back": "Antibodies across the placenta and in breast milk.",
        "tag": "Passive"
      },
      {
        "front": "Why is breast-feeding important?",
        "back": "It gives the baby antibodies while its own immune system develops.",
        "tag": "Passive"
      },
      {
        "front": "Are memory cells made in passive immunity?",
        "back": "No, so the protection is short term.",
        "tag": "Passive"
      },
      {
        "front": "How does HIV weaken the immune system?",
        "back": "It reduces the number of lymphocytes, so fewer antibodies are made.",
        "tag": "HIV"
      }
    ]
  },
  "13.1": {
    "mindMap": {
      "centre": "Excretion",
      "branches": [
        {
          "label": "Definition",
          "items": [
            "Removal of toxic materials",
            "And waste products of metabolism"
          ]
        },
        {
          "label": "Carbon dioxide",
          "items": [
            "Made by respiration",
            "Excreted by the lungs"
          ]
        },
        {
          "label": "Urea",
          "items": [
            "Toxic",
            "Made in the liver",
            "From excess amino acids"
          ]
        },
        {
          "label": "Not excretion",
          "items": [
            "Egestion: faeces",
            "Undigested food"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "What is excretion?",
        "back": "The removal of toxic materials and the waste products of metabolism from organisms.",
        "tag": "Definition"
      },
      {
        "front": "Which process makes carbon dioxide?",
        "back": "Respiration.",
        "tag": "Carbon dioxide"
      },
      {
        "front": "Which organ excretes carbon dioxide?",
        "back": "The lungs.",
        "tag": "Carbon dioxide"
      },
      {
        "front": "Where is urea made?",
        "back": "In the liver.",
        "tag": "Urea"
      },
      {
        "front": "What is urea made from?",
        "back": "The breakdown of excess amino acids.",
        "tag": "Urea"
      },
      {
        "front": "Why must urea be excreted?",
        "back": "It is toxic.",
        "tag": "Urea"
      },
      {
        "front": "Which organs excrete urea?",
        "back": "The kidneys, in urine.",
        "tag": "Urea"
      },
      {
        "front": "Is passing faeces excretion?",
        "back": "No. It is egestion: removing undigested food, not waste from metabolism.",
        "tag": "Egestion"
      },
      {
        "front": "What is metabolism?",
        "back": "All the chemical reactions in the body.",
        "tag": "Definition"
      },
      {
        "front": "Name the two main excretory products in humans.",
        "back": "Carbon dioxide and urea.",
        "tag": "Products"
      }
    ]
  },
  "13.2": {
    "mindMap": {
      "centre": "Urinary system",
      "branches": [
        {
          "label": "Organs",
          "items": [
            "Kidneys: remove urea, salts, water",
            "Ureters: kidney to bladder",
            "Bladder stores urine",
            "Urethra: out of the body"
          ]
        },
        {
          "label": "Nephron parts",
          "items": [
            "Glomerulus, Bowman's capsule",
            "Tubules, loop of Henle",
            "Collecting duct"
          ]
        },
        {
          "label": "Filtration",
          "items": [
            "In the glomerulus",
            "Water, glucose, urea, ions",
            "Not cells or proteins"
          ]
        },
        {
          "label": "Reabsorption",
          "items": [
            "All glucose",
            "Some ions",
            "Most water"
          ]
        },
        {
          "label": "Liver",
          "items": [
            "Amino acids into proteins",
            "Deamination makes urea"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "What is the function of the kidneys?",
        "back": "To remove urea, excess salts and excess water from the blood as urine.",
        "tag": "Organs"
      },
      {
        "front": "What does a ureter do?",
        "back": "Carries urine from a kidney to the bladder.",
        "tag": "Organs"
      },
      {
        "front": "What does the bladder do?",
        "back": "Stores urine.",
        "tag": "Organs"
      },
      {
        "front": "What does the urethra do?",
        "back": "Carries urine out of the body.",
        "tag": "Organs"
      },
      {
        "front": "Why does the body need to excrete urea?",
        "back": "Urea is toxic.",
        "tag": "Need"
      },
      {
        "front": "Name the five parts of a nephron you must know.",
        "back": "Bowman's capsule, glomerulus, tubules, loop of Henle, collecting duct.",
        "tag": "Nephron"
      },
      {
        "front": "What happens in the glomerulus?",
        "back": "Water, glucose, urea and ions are filtered from the blood.",
        "tag": "Nephron"
      },
      {
        "front": "Which substances are reabsorbed in the nephron?",
        "back": "All the glucose, some of the ions and most of the water.",
        "tag": "Nephron"
      },
      {
        "front": "What does urine contain?",
        "back": "Urea, excess water and excess ions.",
        "tag": "Nephron"
      },
      {
        "front": "Why is there no protein in normal urine?",
        "back": "Proteins are too big to be filtered.",
        "tag": "Nephron"
      },
      {
        "front": "What is deamination?",
        "back": "Removal of the nitrogen-containing part of amino acids in the liver, forming urea.",
        "tag": "Liver"
      },
      {
        "front": "How does the liver assimilate amino acids?",
        "back": "It converts them into proteins.",
        "tag": "Liver"
      },
      {
        "front": "Name the outer and inner regions of a kidney.",
        "back": "The cortex (outer) and the medulla (inner).",
        "tag": "IGCSE Extended"
      }
    ]
  },
  "14.1": {
    "mindMap": {
      "centre": "Nervous system",
      "branches": [
        {
          "label": "Parts",
          "items": [
            "CNS: brain and spinal cord",
            "PNS: nerves outside",
            "Coordinates body functions"
          ]
        },
        {
          "label": "Neurones",
          "items": [
            "Sensory: receptor to CNS",
            "Relay: inside CNS",
            "Motor: CNS to effector"
          ]
        },
        {
          "label": "Reflex arc",
          "items": [
            "Stimulus, receptor",
            "Sensory, relay, motor neurones",
            "Effector: muscle or gland"
          ]
        },
        {
          "label": "Reflex action",
          "items": [
            "Rapid",
            "Automatic",
            "Protects the body"
          ]
        },
        {
          "label": "Synapse",
          "items": [
            "Vesicles of neurotransmitter",
            "Diffuses across gap",
            "Binds receptor proteins",
            "One direction only"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "What does the nervous system do?",
        "back": "Coordinates and regulates body functions.",
        "tag": "Basics"
      },
      {
        "front": "What is the CNS made of?",
        "back": "The brain and spinal cord.",
        "tag": "Basics"
      },
      {
        "front": "What is the PNS?",
        "back": "All the nerves outside the brain and spinal cord.",
        "tag": "Basics"
      },
      {
        "front": "What travels along neurones?",
        "back": "Electrical impulses.",
        "tag": "Neurones"
      },
      {
        "front": "What does a sensory neurone do?",
        "back": "Carries impulses from a receptor to the CNS.",
        "tag": "Neurones"
      },
      {
        "front": "What does a motor neurone do?",
        "back": "Carries impulses from the CNS to an effector.",
        "tag": "Neurones"
      },
      {
        "front": "What is a reflex action?",
        "back": "A rapid and automatic response to a stimulus.",
        "tag": "Reflex"
      },
      {
        "front": "List the parts of a reflex arc in order.",
        "back": "Receptor, sensory neurone, relay neurone, motor neurone, effector.",
        "tag": "Reflex"
      },
      {
        "front": "Name the two types of effector.",
        "back": "Muscles and glands.",
        "tag": "Reflex"
      },
      {
        "front": "What is a synapse?",
        "back": "A junction between two neurones.",
        "tag": "Synapse"
      },
      {
        "front": "Describe what happens at a synapse.",
        "back": "An impulse releases neurotransmitter from vesicles; it diffuses across the gap and binds to receptor proteins, starting an impulse in the next neurone.",
        "tag": "Synapse"
      },
      {
        "front": "Why do impulses travel in only one direction at a synapse?",
        "back": "Only the first neurone has vesicles of neurotransmitter, and only the next has receptor proteins.",
        "tag": "Synapse"
      }
    ]
  },
  "14.2": {
    "mindMap": {
      "centre": "Sense organs and the eye",
      "branches": [
        {
          "label": "Sense organs",
          "items": [
            "Groups of receptor cells",
            "Light, sound, touch",
            "Temperature, chemicals"
          ]
        },
        {
          "label": "Front of the eye",
          "items": [
            "Cornea refracts light",
            "Iris controls light entering",
            "Pupil lets light in"
          ]
        },
        {
          "label": "Focusing",
          "items": [
            "Lens focuses on retina",
            "Ciliary muscles, suspensory ligaments",
            "Change lens shape"
          ]
        },
        {
          "label": "Back of the eye",
          "items": [
            "Retina: light receptors",
            "Fovea: most receptors",
            "Optic nerve to brain",
            "Blind spot: no receptors"
          ]
        },
        {
          "label": "Pupil reflex",
          "items": [
            "Bright: circular contract, pupil small",
            "Dim: radial contract, pupil big"
          ]
        },
        {
          "label": "Accommodation",
          "items": [
            "Near: ciliary contract, lens fat",
            "Far: ciliary relax, lens thin"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "What is a sense organ?",
        "back": "A group of receptor cells responding to specific stimuli.",
        "tag": "Sense organs"
      },
      {
        "front": "Name five types of stimulus.",
        "back": "Light, sound, touch, temperature, chemicals.",
        "tag": "Sense organs"
      },
      {
        "front": "What does the cornea do?",
        "back": "Refracts (bends) light.",
        "tag": "Eye"
      },
      {
        "front": "What does the iris do?",
        "back": "Controls how much light enters the pupil.",
        "tag": "Eye"
      },
      {
        "front": "What does the lens do?",
        "back": "Focuses light onto the retina.",
        "tag": "Eye"
      },
      {
        "front": "What is the fovea?",
        "back": "The part of the retina with the greatest density of light receptors.",
        "tag": "Eye"
      },
      {
        "front": "What does the optic nerve do?",
        "back": "Carries impulses from the retina to the brain.",
        "tag": "Eye"
      },
      {
        "front": "Why can't we see at the blind spot?",
        "back": "There are no light receptors where the optic nerve leaves.",
        "tag": "Eye"
      },
      {
        "front": "What happens to the iris muscles in bright light?",
        "back": "Circular muscles contract and radial muscles relax, so the pupil gets smaller.",
        "tag": "Pupil reflex"
      },
      {
        "front": "What happens to the iris muscles in dim light?",
        "back": "Radial muscles contract and circular muscles relax, so the pupil gets bigger.",
        "tag": "Pupil reflex"
      },
      {
        "front": "How does the eye focus on a near object?",
        "back": "Ciliary muscles contract, suspensory ligaments slacken, the lens becomes fatter and refracts light more.",
        "tag": "Accommodation"
      },
      {
        "front": "How does the eye focus on a distant object?",
        "back": "Ciliary muscles relax, suspensory ligaments tighten, the lens becomes thinner and refracts light less.",
        "tag": "Accommodation"
      },
      {
        "front": "What do rods and cones do?",
        "back": "Rods work in dim light (night vision). Cones give colour vision in bright light.",
        "tag": "IGCSE Extended"
      },
      {
        "front": "Why is the fovea best for clear colour vision?",
        "back": "It has the most cones and no rods.",
        "tag": "IGCSE Extended"
      }
    ]
  },
  "14.3": {
    "mindMap": {
      "centre": "Hormones",
      "branches": [
        {
          "label": "Hormone",
          "items": [
            "Chemical made by a gland",
            "Carried in the blood",
            "Acts on target organs"
          ]
        },
        {
          "label": "Glands",
          "items": [
            "Pituitary: FSH, LH",
            "Adrenal: adrenaline",
            "Pancreas: insulin, glucagon",
            "Testes: testosterone",
            "Ovaries: oestrogen, progesterone"
          ]
        },
        {
          "label": "Adrenaline",
          "items": [
            "Fight or flight",
            "Raises blood glucose",
            "Raises heart rate"
          ]
        },
        {
          "label": "Nerves and hormones",
          "items": [
            "Nerves: fast, short effect",
            "Hormones: slower, longer effect"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "What is a hormone?",
        "back": "A chemical substance, produced by a gland and carried by the blood, that alters the activity of one or more specific target organs.",
        "tag": "Definition"
      },
      {
        "front": "Which hormone do the adrenal glands make?",
        "back": "Adrenaline.",
        "tag": "Glands"
      },
      {
        "front": "Which hormones does the pancreas make?",
        "back": "Insulin and glucagon.",
        "tag": "Glands"
      },
      {
        "front": "Which hormones does the pituitary gland make?",
        "back": "FSH and LH.",
        "tag": "Glands"
      },
      {
        "front": "Which hormone do the testes make?",
        "back": "Testosterone.",
        "tag": "Glands"
      },
      {
        "front": "Which hormones do the ovaries make?",
        "back": "Oestrogen and progesterone.",
        "tag": "Glands"
      },
      {
        "front": "Give two effects of adrenaline.",
        "back": "Increases blood glucose concentration and increases heart rate.",
        "tag": "Adrenaline"
      },
      {
        "front": "Give an example of when adrenaline is released.",
        "back": "When frightened or stressed, for example being chased or before a race.",
        "tag": "Adrenaline"
      },
      {
        "front": "Why does adrenaline increase blood glucose?",
        "back": "To give muscles more glucose for respiration and energy.",
        "tag": "Adrenaline"
      },
      {
        "front": "Compare the speed of nervous and hormonal control.",
        "back": "Nervous control is faster; hormonal control is slower.",
        "tag": "Compare"
      },
      {
        "front": "Compare how long nervous and hormonal effects last.",
        "back": "Nervous effects are short; hormonal effects last longer.",
        "tag": "Compare"
      }
    ]
  },
  "14.4": {
    "mindMap": {
      "centre": "Homeostasis",
      "branches": [
        {
          "label": "Definition",
          "items": [
            "Constant internal environment",
            "Cells and enzymes work best"
          ]
        },
        {
          "label": "Things kept constant",
          "items": [
            "Body temperature",
            "Blood glucose",
            "Water content"
          ]
        },
        {
          "label": "Negative feedback",
          "items": [
            "Change from set point",
            "Detected by receptors",
            "Control centre responds"
          ]
        },
        {
          "label": "Response",
          "items": [
            "Effectors act",
            "Factor returns to set point",
            "Works both ways: up or down"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "What is homeostasis?",
        "back": "The maintenance of a constant internal environment.",
        "tag": "Definition"
      },
      {
        "front": "Give three things kept constant by homeostasis.",
        "back": "Body temperature, blood glucose concentration, water content of the blood.",
        "tag": "Examples"
      },
      {
        "front": "What is a set point?",
        "back": "The normal level that the body keeps a factor at, such as 37 °C.",
        "tag": "Feedback"
      },
      {
        "front": "What is negative feedback?",
        "back": "When a change from the set point causes a response that brings the factor back to the set point.",
        "tag": "Feedback"
      },
      {
        "front": "What detects a change from the set point?",
        "back": "Receptors.",
        "tag": "Feedback"
      },
      {
        "front": "What makes the response in negative feedback?",
        "back": "Effectors (muscles or glands).",
        "tag": "Feedback"
      },
      {
        "front": "Why is homeostasis important for enzymes?",
        "back": "Enzymes work best at a constant temperature and pH.",
        "tag": "Definition"
      },
      {
        "front": "What happens if body temperature rises above the set point?",
        "back": "Responses happen that lower it back to the set point.",
        "tag": "Feedback"
      },
      {
        "front": "What happens if blood glucose falls below the set point?",
        "back": "Responses happen that raise it back to the set point.",
        "tag": "Feedback"
      },
      {
        "front": "Give an everyday example of negative feedback.",
        "back": "A heater with a thermostat that turns off when the room is warm and on when it is cold.",
        "tag": "Feedback"
      }
    ]
  },
  "14.5": {
    "mindMap": {
      "centre": "Temperature control",
      "branches": [
        {
          "label": "Skin parts",
          "items": [
            "Hairs, hair erector muscles",
            "Sweat glands, receptors",
            "Blood vessels, fatty tissue"
          ]
        },
        {
          "label": "Control",
          "items": [
            "Skin receptors detect temperature",
            "Hypothalamus is control centre",
            "Set point 37 °C"
          ]
        },
        {
          "label": "Too hot",
          "items": [
            "Sweating: evaporation cools",
            "Vasodilation: more heat lost",
            "Hairs lie flat"
          ]
        },
        {
          "label": "Too cold",
          "items": [
            "Shivering: respiration heat",
            "Vasoconstriction: less heat lost",
            "Hairs stand up, trap air"
          ]
        },
        {
          "label": "Insulation",
          "items": [
            "Fatty tissue",
            "Trapped air"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "Which part of the brain controls body temperature?",
        "back": "The hypothalamus.",
        "tag": "Control"
      },
      {
        "front": "What do skin temperature receptors do?",
        "back": "Detect temperature and send impulses to the brain.",
        "tag": "Control"
      },
      {
        "front": "How does sweating cool the body?",
        "back": "Water in sweat evaporates, taking heat energy from the skin.",
        "tag": "Too hot"
      },
      {
        "front": "What is vasodilation?",
        "back": "Widening of arterioles supplying skin capillaries.",
        "tag": "Too hot"
      },
      {
        "front": "How does vasodilation cool the body?",
        "back": "More blood flows near the skin surface, so more heat is lost by radiation.",
        "tag": "Too hot"
      },
      {
        "front": "What is vasoconstriction?",
        "back": "Narrowing of arterioles supplying skin capillaries.",
        "tag": "Too cold"
      },
      {
        "front": "How does vasoconstriction keep the body warm?",
        "back": "Less blood flows near the surface, so less heat is lost.",
        "tag": "Too cold"
      },
      {
        "front": "How does shivering warm the body?",
        "back": "Rapid muscle contractions increase respiration, which releases heat.",
        "tag": "Too cold"
      },
      {
        "front": "What do hair erector muscles do when you are cold?",
        "back": "They contract, making hairs stand up and trap a layer of insulating air.",
        "tag": "Too cold"
      },
      {
        "front": "How does fatty tissue help keep body temperature constant?",
        "back": "It is an insulator that reduces heat loss.",
        "tag": "Insulation"
      },
      {
        "front": "Which blood vessels dilate or constrict in temperature control?",
        "back": "The arterioles supplying skin surface capillaries.",
        "tag": "Control"
      }
    ]
  },
  "14.6": {
    "mindMap": {
      "centre": "Blood glucose control",
      "branches": [
        {
          "label": "Why control it",
          "items": [
            "Cells need glucose for respiration",
            "Too high damages cells"
          ]
        },
        {
          "label": "Too high",
          "items": [
            "Pancreas releases insulin",
            "Liver makes glucose into glycogen",
            "Glucose falls"
          ]
        },
        {
          "label": "Too low",
          "items": [
            "Pancreas releases glucagon",
            "Liver makes glycogen into glucose",
            "Glucose rises"
          ]
        },
        {
          "label": "Type 1 diabetes",
          "items": [
            "Too little insulin made",
            "High blood glucose",
            "Glucose in urine",
            "Treated with insulin"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "Why must blood glucose be controlled?",
        "back": "Cells need a steady supply for respiration, and too much glucose damages cells.",
        "tag": "Need"
      },
      {
        "front": "Which organ makes insulin and glucagon?",
        "back": "The pancreas.",
        "tag": "Hormones"
      },
      {
        "front": "When is insulin released?",
        "back": "When blood glucose concentration is too high.",
        "tag": "Insulin"
      },
      {
        "front": "What does insulin cause the liver to do?",
        "back": "Take in glucose and convert it to glycogen.",
        "tag": "Insulin"
      },
      {
        "front": "When is glucagon released?",
        "back": "When blood glucose concentration is too low.",
        "tag": "Glucagon"
      },
      {
        "front": "What does glucagon cause the liver to do?",
        "back": "Convert glycogen into glucose and release it into the blood.",
        "tag": "Glucagon"
      },
      {
        "front": "What is glycogen?",
        "back": "A storage carbohydrate made from glucose, stored in the liver and muscles.",
        "tag": "Store"
      },
      {
        "front": "What is Type 1 diabetes?",
        "back": "A condition where the pancreas does not produce enough insulin.",
        "tag": "Diabetes"
      },
      {
        "front": "Give two signs of Type 1 diabetes.",
        "back": "Increased blood glucose concentration and glucose in the urine.",
        "tag": "Diabetes"
      },
      {
        "front": "How is Type 1 diabetes treated?",
        "back": "With insulin, usually by injection.",
        "tag": "Diabetes"
      },
      {
        "front": "Which word is the hormone: glucagon or glycogen?",
        "back": "Glucagon is the hormone; glycogen is the store.",
        "tag": "Store"
      }
    ]
  },
  "15.1": {
    "mindMap": {
      "centre": "Plant responses",
      "branches": [
        {
          "label": "Tropisms",
          "items": [
            "Phototropism: light",
            "Gravitropism: gravity"
          ]
        },
        {
          "label": "Shoots",
          "items": [
            "Grow towards light",
            "Grow away from gravity"
          ]
        },
        {
          "label": "Roots",
          "items": [
            "Grow towards gravity",
            "Grow away from light"
          ]
        },
        {
          "label": "Auxin",
          "items": [
            "Made in shoot tip",
            "Spreads down the plant",
            "Moves to shaded side",
            "Stimulates cell elongation"
          ]
        },
        {
          "label": "Practicals",
          "items": [
            "Light from one side",
            "Seeds on damp cotton wool in dark",
            "Clinostat as control"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "What is phototropism?",
        "back": "Growth of plant parts towards or away from light.",
        "tag": "Tropisms"
      },
      {
        "front": "What is gravitropism?",
        "back": "Growth of plant parts towards or away from gravity.",
        "tag": "Tropisms"
      },
      {
        "front": "How do shoots respond to light and gravity?",
        "back": "They grow towards light and away from gravity.",
        "tag": "Tropisms"
      },
      {
        "front": "How do roots respond to gravity?",
        "back": "They grow towards gravity (downwards).",
        "tag": "Tropisms"
      },
      {
        "front": "Where is auxin made?",
        "back": "In the shoot tip.",
        "tag": "Auxin"
      },
      {
        "front": "What does auxin do to cells?",
        "back": "Stimulates cell elongation.",
        "tag": "Auxin"
      },
      {
        "front": "Where does auxin collect in light from one side?",
        "back": "On the shaded side of the shoot.",
        "tag": "Auxin"
      },
      {
        "front": "Explain why a shoot bends towards light.",
        "back": "Auxin moves to the shaded side; cells there elongate more, so the shoot bends towards the light.",
        "tag": "Auxin"
      },
      {
        "front": "Why does a shoot lying on its side bend upwards?",
        "back": "Auxin collects on the lower side, which grows more, so the shoot bends up.",
        "tag": "Auxin"
      },
      {
        "front": "Why are gravitropism seedlings kept in the dark?",
        "back": "So light does not affect the direction of growth.",
        "tag": "Practical"
      },
      {
        "front": "What does a clinostat do?",
        "back": "Turns seedlings slowly so light or gravity acts evenly on all sides, as a control.",
        "tag": "Practical"
      }
    ]
  },
  "16.1": {
    "mindMap": {
      "centre": "Nuclear division",
      "branches": [
        {
          "label": "Chromosomes",
          "items": [
            "Made of DNA",
            "DNA carries genes"
          ]
        },
        {
          "label": "Haploid and diploid",
          "items": [
            "Haploid: one set, 23 in humans",
            "Diploid: two sets, 23 pairs",
            "Gametes are haploid"
          ]
        },
        {
          "label": "Mitosis",
          "items": [
            "Identical cells",
            "Chromosome number kept",
            "Growth, repair, replacement",
            "Asexual reproduction"
          ]
        },
        {
          "label": "Meiosis",
          "items": [
            "Makes gametes",
            "Reduction: diploid to haploid",
            "Genetically different cells"
          ]
        },
        {
          "label": "Stem cells and cancer",
          "items": [
            "Stem cells: unspecialised, can specialise",
            "Cancer: uncontrolled cell division"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "What do chromosomes contain?",
        "back": "DNA, which carries genetic information in the form of genes.",
        "tag": "Chromosomes"
      },
      {
        "front": "What is a haploid nucleus?",
        "back": "One containing a single set of chromosomes.",
        "tag": "Haploid"
      },
      {
        "front": "What is a diploid nucleus?",
        "back": "One containing two sets of chromosomes.",
        "tag": "Diploid"
      },
      {
        "front": "How many chromosomes in a human diploid cell?",
        "back": "46, as 23 pairs.",
        "tag": "Diploid"
      },
      {
        "front": "Describe mitosis.",
        "back": "Nuclear division giving genetically identical cells with the chromosome number maintained.",
        "tag": "Mitosis"
      },
      {
        "front": "Give four uses of mitosis.",
        "back": "Growth, repair of damaged tissues, replacement of dying cells, asexual reproduction.",
        "tag": "Mitosis"
      },
      {
        "front": "What are stem cells?",
        "back": "Unspecialised cells that divide by mitosis to make cells that can become specialised.",
        "tag": "Stem cells"
      },
      {
        "front": "What is meiosis used for?",
        "back": "Making gametes.",
        "tag": "Meiosis"
      },
      {
        "front": "Why is meiosis called a reduction division?",
        "back": "It halves the chromosome number, from diploid to haploid.",
        "tag": "Meiosis"
      },
      {
        "front": "Are cells from meiosis identical?",
        "back": "No. They are genetically different.",
        "tag": "Meiosis"
      },
      {
        "front": "What causes cancer?",
        "back": "Uncontrolled cell division.",
        "tag": "Cancer"
      },
      {
        "front": "How many chromosomes are in a human gamete?",
        "back": "23.",
        "tag": "Haploid"
      }
    ]
  },
  "16.2": {
    "mindMap": {
      "centre": "Asexual and sexual reproduction",
      "branches": [
        {
          "label": "Asexual",
          "items": [
            "One parent",
            "Identical offspring",
            "No gametes"
          ]
        },
        {
          "label": "Examples",
          "items": [
            "Bacteria splitting",
            "Potato tubers",
            "Strawberry runners"
          ]
        },
        {
          "label": "Sexual",
          "items": [
            "Haploid nuclei fuse",
            "Diploid zygote",
            "Different offspring"
          ]
        },
        {
          "label": "Asexual pros and cons",
          "items": [
            "Fast, no mate needed",
            "No variation",
            "All may die if conditions change"
          ]
        },
        {
          "label": "Sexual pros and cons",
          "items": [
            "Variation helps survival",
            "Slower, needs a mate"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "What is asexual reproduction?",
        "back": "Producing genetically identical offspring from one parent.",
        "tag": "Asexual"
      },
      {
        "front": "Give two examples of asexual reproduction.",
        "back": "Any two: bacteria splitting, yeast budding, potato tubers, strawberry runners, fungal spores.",
        "tag": "Asexual"
      },
      {
        "front": "What is sexual reproduction?",
        "back": "The fusion of the nuclei of two haploid gametes to form a diploid zygote, producing genetically different offspring.",
        "tag": "Sexual"
      },
      {
        "front": "What is a zygote?",
        "back": "The first cell of a new organism, formed at fertilisation.",
        "tag": "Sexual"
      },
      {
        "front": "Give two advantages of asexual reproduction.",
        "back": "It is fast and needs only one parent.",
        "tag": "Compare"
      },
      {
        "front": "Give one disadvantage of asexual reproduction.",
        "back": "No variation, so all offspring may die if the environment changes.",
        "tag": "Compare"
      },
      {
        "front": "Give one advantage of sexual reproduction.",
        "back": "Variation, so some offspring may survive environmental change.",
        "tag": "Compare"
      },
      {
        "front": "Give one disadvantage of sexual reproduction.",
        "back": "It is slower and usually needs a mate.",
        "tag": "Compare"
      },
      {
        "front": "What are offspring from asexual reproduction called?",
        "back": "Clones.",
        "tag": "Asexual"
      },
      {
        "front": "Is the zygote haploid or diploid?",
        "back": "Diploid.",
        "tag": "Sexual"
      }
    ]
  },
  "16.3": {
    "mindMap": {
      "centre": "Reproduction in plants",
      "branches": [
        {
          "label": "Flower parts",
          "items": [
            "Sepals protect bud",
            "Petals attract insects",
            "Anther makes pollen",
            "Stigma catches pollen",
            "Ovary holds ovules"
          ]
        },
        {
          "label": "Wind and insect",
          "items": [
            "Insect: big bright petals, sticky pollen",
            "Wind: feathery stigmas, light pollen",
            "Wind: anthers hang outside"
          ]
        },
        {
          "label": "Pollination",
          "items": [
            "Pollen from anther to stigma",
            "Self: same plant, less variation",
            "Cross: other plant, more variation"
          ]
        },
        {
          "label": "Fertilisation",
          "items": [
            "Pollen tube grows to ovule",
            "Nuclei fuse",
            "Ovule becomes seed, ovary fruit"
          ]
        },
        {
          "label": "Seeds and dispersal",
          "items": [
            "Testa, radicle, plumule, cotyledons",
            "Wind: wings, parachutes",
            "Animals: hooks, juicy fruit"
          ]
        },
        {
          "label": "Germination",
          "items": [
            "Needs water, oxygen, warmth",
            "Enzymes break down food store"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "What do petals do in an insect-pollinated flower?",
        "back": "Attract insects with colour and scent.",
        "tag": "Flower"
      },
      {
        "front": "What does the anther do?",
        "back": "Makes pollen.",
        "tag": "Flower"
      },
      {
        "front": "What does the stigma do?",
        "back": "Catches pollen.",
        "tag": "Flower"
      },
      {
        "front": "What do sepals do?",
        "back": "Protect the flower in bud.",
        "tag": "Flower"
      },
      {
        "front": "Give two features of wind-pollinated flowers.",
        "back": "Any two: small dull petals, anthers hanging outside, large feathery stigmas, light smooth pollen in large amounts.",
        "tag": "Wind and insect"
      },
      {
        "front": "What is pollination?",
        "back": "The transfer of pollen from an anther to a stigma.",
        "tag": "Pollination"
      },
      {
        "front": "What is cross-pollination?",
        "back": "Transfer of pollen to a flower on a different plant of the same species.",
        "tag": "Pollination"
      },
      {
        "front": "Give one effect of self-pollination on a population.",
        "back": "Less variation, so the population is less able to respond to environmental change.",
        "tag": "Pollination"
      },
      {
        "front": "Describe what happens after pollen lands on a stigma.",
        "back": "A pollen tube grows down the style into an ovule, and the male nucleus fuses with the female nucleus.",
        "tag": "Fertilisation"
      },
      {
        "front": "What do the ovule and ovary become after fertilisation?",
        "back": "The ovule becomes a seed; the ovary becomes a fruit.",
        "tag": "Fertilisation"
      },
      {
        "front": "Name the parts of a seed embryo.",
        "back": "Radicle, plumule and cotyledons.",
        "tag": "Seeds"
      },
      {
        "front": "Why are seeds dispersed?",
        "back": "To colonise new areas and reduce competition.",
        "tag": "Dispersal"
      },
      {
        "front": "Give one feature of a wind-dispersed fruit.",
        "back": "Wings or parachutes of hairs so it is carried far.",
        "tag": "Dispersal"
      },
      {
        "front": "Name three conditions needed for germination.",
        "back": "Water, oxygen and a suitable temperature.",
        "tag": "Germination"
      },
      {
        "front": "What do enzymes do in germination?",
        "back": "Break down stored food into soluble substances for the embryo to use.",
        "tag": "Germination"
      }
    ]
  },
  "16.4": {
    "mindMap": {
      "centre": "Reproduction in humans",
      "branches": [
        {
          "label": "Male organs",
          "items": [
            "Testes: sperm, testosterone",
            "Scrotum, sperm ducts",
            "Prostate gland adds fluid",
            "Urethra, penis"
          ]
        },
        {
          "label": "Female organs",
          "items": [
            "Ovaries: eggs, hormones",
            "Oviduct: fertilisation",
            "Uterus, cervix, vagina"
          ]
        },
        {
          "label": "Gametes",
          "items": [
            "Sperm: flagellum, mitochondria, acrosome",
            "Egg: energy store, jelly coat",
            "Sperm small, many, swim"
          ]
        },
        {
          "label": "Menstrual cycle",
          "items": [
            "Days 1 to 5: period",
            "Day 14: ovulation",
            "FSH, LH, oestrogen, progesterone"
          ]
        },
        {
          "label": "Pregnancy",
          "items": [
            "Ball of cells implants",
            "Amniotic fluid protects",
            "Placenta exchanges substances",
            "Some viruses cross placenta"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "What do the testes do?",
        "back": "Make sperm and the hormone testosterone.",
        "tag": "Male"
      },
      {
        "front": "What does the prostate gland do?",
        "back": "Adds fluid to sperm to make semen.",
        "tag": "Male"
      },
      {
        "front": "Where does fertilisation happen?",
        "back": "In the oviduct.",
        "tag": "Female"
      },
      {
        "front": "What is the job of the uterus?",
        "back": "Where the baby develops.",
        "tag": "Female"
      },
      {
        "front": "How is a sperm cell adapted?",
        "back": "Flagellum to swim, many mitochondria for energy, enzymes in the acrosome to digest into the egg.",
        "tag": "Gametes"
      },
      {
        "front": "How is an egg cell adapted?",
        "back": "Energy stores to feed the embryo, and a jelly coat that changes so only one sperm enters.",
        "tag": "Gametes"
      },
      {
        "front": "What is fertilisation?",
        "back": "The fusion of the nuclei of a sperm and an egg cell.",
        "tag": "Gametes"
      },
      {
        "front": "Compare sperm and egg in size and numbers.",
        "back": "Sperm are much smaller and made in millions; eggs are larger and one is released each month.",
        "tag": "Gametes"
      },
      {
        "front": "What does testosterone do at puberty?",
        "back": "Develops male secondary sexual characteristics, such as a deeper voice and facial hair.",
        "tag": "Puberty"
      },
      {
        "front": "What does FSH do?",
        "back": "Makes an egg mature in the ovary.",
        "tag": "Cycle"
      },
      {
        "front": "What does LH do?",
        "back": "Causes ovulation.",
        "tag": "Cycle"
      },
      {
        "front": "What does oestrogen do in the menstrual cycle?",
        "back": "Makes the uterus lining build up.",
        "tag": "Cycle"
      },
      {
        "front": "What does progesterone do?",
        "back": "Keeps the uterus lining thick.",
        "tag": "Cycle"
      },
      {
        "front": "What does amniotic fluid do?",
        "back": "Protects the fetus from knocks.",
        "tag": "Pregnancy"
      },
      {
        "front": "What passes from mother to fetus across the placenta?",
        "back": "Dissolved nutrients such as glucose and amino acids, and oxygen.",
        "tag": "Pregnancy"
      },
      {
        "front": "What passes from fetus to mother across the placenta?",
        "back": "Carbon dioxide and urea.",
        "tag": "Pregnancy"
      }
    ]
  },
  "17.1": {
    "mindMap": {
      "centre": "Variation",
      "branches": [
        {
          "label": "Definition",
          "items": [
            "Differences within a species",
            "Shown by phenotypes"
          ]
        },
        {
          "label": "Continuous",
          "items": [
            "Range between two extremes",
            "Height, body mass",
            "Genes and environment"
          ]
        },
        {
          "label": "Graphs",
          "items": [
            "Continuous: histogram",
            "Discontinuous: bar chart"
          ]
        },
        {
          "label": "Discontinuous",
          "items": [
            "Few groups, no in-between",
            "ABO blood groups",
            "Pea seed shape and colour",
            "Genes only"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "What is variation?",
        "back": "Differences between individuals of the same species.",
        "tag": "Definition"
      },
      {
        "front": "What is continuous variation?",
        "back": "Variation giving a range of phenotypes between two extremes.",
        "tag": "Continuous"
      },
      {
        "front": "Give two examples of continuous variation.",
        "back": "Body length (height) and body mass.",
        "tag": "Continuous"
      },
      {
        "front": "What causes continuous variation?",
        "back": "Genes and the environment.",
        "tag": "Continuous"
      },
      {
        "front": "What is discontinuous variation?",
        "back": "Variation giving a limited number of phenotypes with no intermediates.",
        "tag": "Discontinuous"
      },
      {
        "front": "Give two examples of discontinuous variation.",
        "back": "ABO blood groups and seed shape (or seed colour) in peas.",
        "tag": "Discontinuous"
      },
      {
        "front": "What usually causes discontinuous variation?",
        "back": "Genes only.",
        "tag": "Discontinuous"
      },
      {
        "front": "Which graph shows continuous variation?",
        "back": "A histogram.",
        "tag": "Graphs"
      },
      {
        "front": "Which graph shows discontinuous variation?",
        "back": "A bar chart.",
        "tag": "Graphs"
      },
      {
        "front": "Why is height affected by the environment?",
        "back": "Factors like diet affect how tall a person grows.",
        "tag": "Continuous"
      }
    ]
  },
  "17.2": {
    "mindMap": {
      "centre": "DNA",
      "branches": [
        {
          "label": "Structure",
          "items": [
            "Two strands, double helix",
            "Chains of nucleotides",
            "Bases A, T, C, G"
          ]
        },
        {
          "label": "Base pairing",
          "items": [
            "A with T",
            "C with G",
            "Bonds hold strands together"
          ]
        },
        {
          "label": "Gene",
          "items": [
            "Length of DNA",
            "Codes for a protein"
          ]
        },
        {
          "label": "Control of the cell",
          "items": [
            "Base sequence sets amino acid order",
            "Order sets protein shape",
            "Proteins include enzymes"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "Describe the shape of DNA.",
        "back": "Two strands coiled together as a double helix.",
        "tag": "Structure"
      },
      {
        "front": "What is each DNA strand made of?",
        "back": "A chain of nucleotides.",
        "tag": "Structure"
      },
      {
        "front": "Name the four bases in DNA.",
        "back": "A, T, C and G.",
        "tag": "Structure"
      },
      {
        "front": "Which bases pair together?",
        "back": "A with T, and C with G.",
        "tag": "Pairing"
      },
      {
        "front": "What holds the two strands together?",
        "back": "Bonds between pairs of bases.",
        "tag": "Pairing"
      },
      {
        "front": "Give the complementary strand for ATGC.",
        "back": "TACG.",
        "tag": "Pairing"
      },
      {
        "front": "What is a gene?",
        "back": "A length of DNA that codes for a protein.",
        "tag": "Gene"
      },
      {
        "front": "How does DNA control cell function?",
        "back": "By controlling which proteins, including enzymes, are made.",
        "tag": "Control"
      },
      {
        "front": "What does the base sequence of a gene decide?",
        "back": "The amino acid sequence of a protein.",
        "tag": "Control"
      },
      {
        "front": "Why do proteins have different shapes?",
        "back": "They have different amino acid sequences.",
        "tag": "Control"
      },
      {
        "front": "What does mRNA do?",
        "back": "It carries a copy of a gene from the nucleus to a ribosome in the cytoplasm.",
        "tag": "IGCSE Extended"
      },
      {
        "front": "What does a ribosome do in protein synthesis?",
        "back": "It joins amino acids in the order set by the base sequence of the mRNA.",
        "tag": "IGCSE Extended"
      },
      {
        "front": "Why do a nerve cell and a muscle cell make different proteins?",
        "back": "They have the same genes, but each cell only expresses some of them.",
        "tag": "IGCSE Extended"
      }
    ]
  },
  "17.3": {
    "mindMap": {
      "centre": "Inheritance",
      "branches": [
        {
          "label": "Key terms",
          "items": [
            "Allele: form of a gene",
            "Dominant, recessive",
            "Genotype, phenotype",
            "Homozygous, heterozygous"
          ]
        },
        {
          "label": "Crosses",
          "items": [
            "Tt x Tt gives 3:1",
            "Tt x tt gives 1:1",
            "Small samples differ from ratio"
          ]
        },
        {
          "label": "Codominance",
          "items": [
            "Blood groups A, B, AB, O",
            "IA and IB codominant",
            "IO recessive"
          ]
        },
        {
          "label": "Sex",
          "items": [
            "XX female",
            "XY male",
            "Father's sperm decides"
          ]
        },
        {
          "label": "Mutation",
          "items": [
            "Gene: sickle cell anaemia",
            "Chromosome: Down's syndrome, 47",
            "Radiation, chemicals increase rate"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "What is inheritance?",
        "back": "The transmission of genetic information from generation to generation.",
        "tag": "Terms"
      },
      {
        "front": "What is an allele?",
        "back": "An alternative form of a gene.",
        "tag": "Terms"
      },
      {
        "front": "What is a recessive allele?",
        "back": "One that only shows in the phenotype when two copies are present.",
        "tag": "Terms"
      },
      {
        "front": "What does heterozygous mean?",
        "back": "Having two different alleles of a gene, such as Tt.",
        "tag": "Terms"
      },
      {
        "front": "What is the difference between genotype and phenotype?",
        "back": "Genotype is the alleles (such as Tt); phenotype is the feature shown (such as tall).",
        "tag": "Terms"
      },
      {
        "front": "What ratio comes from crossing two heterozygous parents?",
        "back": "3:1 (dominant to recessive phenotype).",
        "tag": "Crosses"
      },
      {
        "front": "What ratio comes from crossing Tt with tt?",
        "back": "1:1.",
        "tag": "Crosses"
      },
      {
        "front": "Why do real results often differ from expected ratios?",
        "back": "Fertilisation is random, and with small numbers of offspring chance has a big effect.",
        "tag": "Crosses"
      },
      {
        "front": "What does pure-breeding mean?",
        "back": "Two identical homozygous parents always produce offspring the same as themselves.",
        "tag": "Crosses"
      },
      {
        "front": "What is codominance?",
        "back": "When both alleles in a heterozygote show in the phenotype, such as blood group AB.",
        "tag": "Codominance"
      },
      {
        "front": "Which genotype gives blood group O?",
        "back": "IᴼIᴼ.",
        "tag": "Codominance"
      },
      {
        "front": "What are the sex chromosomes of a male?",
        "back": "XY.",
        "tag": "Sex"
      },
      {
        "front": "What is a gene mutation? Give an example.",
        "back": "A random change in the base sequence of DNA, such as in sickle cell anaemia.",
        "tag": "Mutation"
      },
      {
        "front": "What is a chromosome mutation? Give an example.",
        "back": "A change in chromosome number or structure, such as Down's syndrome (47 chromosomes).",
        "tag": "Mutation"
      },
      {
        "front": "Name four sources of genetic variation.",
        "back": "Mutation, meiosis, random mating and random fertilisation.",
        "tag": "Variation"
      },
      {
        "front": "What increases the rate of mutation?",
        "back": "Ionising radiation and some chemicals.",
        "tag": "Mutation"
      },
      {
        "front": "Two unaffected parents have an affected child. What does this show?",
        "back": "The condition is recessive and both parents are heterozygous carriers.",
        "tag": "IGCSE"
      },
      {
        "front": "What is a test cross?",
        "back": "Crossing an organism with the dominant feature with a homozygous recessive one to find out if it is homozygous or heterozygous.",
        "tag": "IGCSE Extended"
      },
      {
        "front": "Why is red-green colour blindness more common in males?",
        "back": "The allele is recessive on the X chromosome. Males have only one X, so one recessive allele makes them colour blind.",
        "tag": "IGCSE Extended"
      }
    ]
  },
  "17.4": {
    "mindMap": {
      "centre": "Selection",
      "branches": [
        {
          "label": "Natural selection",
          "items": [
            "Variation in population",
            "Many offspring",
            "Struggle and competition",
            "Best adapted reproduce",
            "Pass on alleles"
          ]
        },
        {
          "label": "Evolution",
          "items": [
            "Useful alleles become common",
            "Population changes over time"
          ]
        },
        {
          "label": "Antibiotic resistance",
          "items": [
            "Chance mutation",
            "Others killed",
            "Resistant ones reproduce, MRSA"
          ]
        },
        {
          "label": "Artificial selection",
          "items": [
            "Humans choose parents",
            "Cross them",
            "Select offspring, repeat"
          ]
        },
        {
          "label": "Uses",
          "items": [
            "More milk, more meat",
            "Higher crop yield",
            "Disease resistance"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "List the five points of natural selection.",
        "back": "Variation, many offspring, struggle for survival, better adapted individuals reproduce, they pass on their alleles.",
        "tag": "Natural selection"
      },
      {
        "front": "Why is there a struggle for survival?",
        "back": "More offspring are produced than can survive, so they compete for limited resources.",
        "tag": "Natural selection"
      },
      {
        "front": "What happens to better adapted individuals?",
        "back": "They are more likely to survive, reproduce and pass on their alleles.",
        "tag": "Natural selection"
      },
      {
        "front": "What is evolution?",
        "back": "A change in the inherited features of a population over many generations.",
        "tag": "Evolution"
      },
      {
        "front": "Explain how antibiotic resistance is an example of natural selection.",
        "back": "A chance mutation makes some bacteria resistant; the antibiotic kills others; resistant bacteria reproduce and pass on the allele.",
        "tag": "Resistance"
      },
      {
        "front": "Name a bacterium that is resistant to many antibiotics.",
        "back": "MRSA.",
        "tag": "Resistance"
      },
      {
        "front": "What is artificial selection?",
        "back": "Humans selecting plants or animals with desirable features to breed, over many generations.",
        "tag": "Artificial"
      },
      {
        "front": "List the steps of selective breeding.",
        "back": "Select parents with desirable features, cross them, select offspring with the features, repeat over many generations.",
        "tag": "Artificial"
      },
      {
        "front": "Give two examples of selective breeding.",
        "back": "Any two: cows for more milk, cattle for meat, high-yield wheat, disease-resistant crops.",
        "tag": "Artificial"
      },
      {
        "front": "Who does the selecting in natural selection?",
        "back": "The environment.",
        "tag": "Compare"
      },
      {
        "front": "Who does the selecting in artificial selection?",
        "back": "Humans.",
        "tag": "Compare"
      },
      {
        "front": "What is an adaptive feature?",
        "back": "An inherited feature that helps an organism survive and reproduce in its environment.",
        "tag": "IGCSE"
      },
      {
        "front": "Give two adaptations of a xerophyte.",
        "back": "Any two: thick waxy cuticle, spines instead of leaves, few or sunken stomata, deep roots, swollen water-storing stem.",
        "tag": "IGCSE Extended"
      }
    ]
  },
  "18.1": {
    "mindMap": {
      "centre": "Biotechnology",
      "branches": [
        {
          "label": "Yeast",
          "items": [
            "Bread: carbon dioxide makes dough rise",
            "Ethanol: drinks and biofuel",
            "Anaerobic respiration"
          ]
        },
        {
          "label": "Why bacteria",
          "items": [
            "Reproduce rapidly",
            "Make complex molecules",
            "No ethical concerns",
            "Have plasmids"
          ]
        },
        {
          "label": "Fermenter",
          "items": [
            "Water jacket controls temperature",
            "pH probe, sterile air for oxygen",
            "Nutrients in, wastes out",
            "Stirrer mixes"
          ]
        },
        {
          "label": "Enzymes in products",
          "items": [
            "Washing powder: protease, lipase",
            "Pectinase: more, clearer juice",
            "Lactase: lactose-free milk"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "How does yeast make bread rise?",
        "back": "It respires sugar and makes carbon dioxide bubbles that make the dough rise.",
        "tag": "Yeast"
      },
      {
        "front": "What does yeast make in anaerobic respiration that is used as a fuel?",
        "back": "Ethanol.",
        "tag": "Yeast"
      },
      {
        "front": "Give four reasons bacteria are useful in biotechnology.",
        "back": "They reproduce rapidly, make complex molecules, raise no ethical concerns, and have plasmids.",
        "tag": "Bacteria"
      },
      {
        "front": "Why are plasmids useful?",
        "back": "They are small rings of DNA that can be removed, changed and put back easily.",
        "tag": "Bacteria"
      },
      {
        "front": "What is a fermenter?",
        "back": "A large container for growing microorganisms to make products on a large scale.",
        "tag": "Fermenter"
      },
      {
        "front": "Why does a fermenter need a water jacket?",
        "back": "To remove heat from respiration and keep the temperature at the optimum.",
        "tag": "Fermenter"
      },
      {
        "front": "Why is sterile air bubbled into a fermenter?",
        "back": "To supply oxygen for aerobic respiration without letting other microorganisms in.",
        "tag": "Fermenter"
      },
      {
        "front": "Name five conditions controlled in a fermenter.",
        "back": "Temperature, pH, oxygen, nutrient supply and waste products.",
        "tag": "Fermenter"
      },
      {
        "front": "Which enzymes are in biological washing powders and what do they do?",
        "back": "Proteases and lipases, which break down protein and fat stains.",
        "tag": "Enzymes"
      },
      {
        "front": "What does pectinase do in fruit juice production?",
        "back": "Breaks down pectin in cell walls, giving more and clearer juice.",
        "tag": "Enzymes"
      },
      {
        "front": "What does lactase do?",
        "back": "Breaks down lactose to make lactose-free milk.",
        "tag": "Enzymes"
      }
    ]
  },
  "18.2": {
    "mindMap": {
      "centre": "Genetic modification",
      "branches": [
        {
          "label": "Definition",
          "items": [
            "Removing, changing or inserting genes",
            "Makes a GMO"
          ]
        },
        {
          "label": "Insulin from bacteria",
          "items": [
            "Human insulin gene cut out",
            "Inserted into a plasmid",
            "Bacteria grown in fermenter"
          ]
        },
        {
          "label": "GM crops",
          "items": [
            "Herbicide resistance",
            "Insect pest resistance",
            "Extra vitamins"
          ]
        },
        {
          "label": "Advantages",
          "items": [
            "Higher yields",
            "Less insecticide",
            "More nutritious food"
          ]
        },
        {
          "label": "Risks",
          "items": [
            "Genes spread to wild plants",
            "Harm to other insects",
            "Less variation, cost"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "What is genetic modification?",
        "back": "Changing an organism's genetic material by removing, changing or inserting individual genes.",
        "tag": "Definition"
      },
      {
        "front": "Which human gene has been put into bacteria for commercial production?",
        "back": "The human insulin gene.",
        "tag": "Insulin"
      },
      {
        "front": "Outline how bacteria are modified to make insulin.",
        "back": "The insulin gene is cut out and inserted into a plasmid, which is put into a bacterium; the bacteria multiply in a fermenter and make insulin.",
        "tag": "Insulin"
      },
      {
        "front": "Why put a herbicide-resistance gene into a crop?",
        "back": "So weedkiller can be sprayed to kill weeds without harming the crop.",
        "tag": "Crops"
      },
      {
        "front": "Why put an insect-resistance gene into a crop?",
        "back": "So the crop is protected from insect pests and less insecticide is needed.",
        "tag": "Crops"
      },
      {
        "front": "Give an example of a crop modified to provide extra vitamins.",
        "back": "Golden Rice, which provides a source of vitamin A.",
        "tag": "Crops"
      },
      {
        "front": "Give two advantages of GM crops.",
        "back": "Any two: higher yields, less insecticide, more nutritious food.",
        "tag": "Discuss"
      },
      {
        "front": "Give two risks of GM crops.",
        "back": "Any two: genes spreading to wild plants, harm to other insects, unknown health effects, less variation, costly seeds.",
        "tag": "Discuss"
      },
      {
        "front": "Give one advantage of using GM bacteria.",
        "back": "Large amounts of cheap human insulin.",
        "tag": "Discuss"
      },
      {
        "front": "What is a superweed?",
        "back": "A wild plant that has gained a herbicide-resistance gene from a GM crop.",
        "tag": "Discuss"
      },
      {
        "front": "What do restriction enzymes and DNA ligase do in genetic modification?",
        "back": "Restriction enzymes cut DNA, leaving sticky ends. DNA ligase joins the gene into the plasmid.",
        "tag": "IGCSE Extended"
      }
    ]
  },
  "19.1": {
    "mindMap": {
      "centre": "Energy flow",
      "branches": [
        {
          "label": "The Sun",
          "items": [
            "Main energy input",
            "Captured by photosynthesis",
            "Life depends on it"
          ]
        },
        {
          "label": "Food chains",
          "items": [
            "Arrows show energy flow",
            "Producer, then consumers",
            "Decomposers break down waste"
          ]
        },
        {
          "label": "Roles",
          "items": [
            "Herbivore eats plants",
            "Carnivore eats animals",
            "Decomposer: bacteria, fungi"
          ]
        },
        {
          "label": "Energy loss",
          "items": [
            "Respiration, heat",
            "Not all eaten or digested",
            "Excretion",
            "So chains are short"
          ]
        },
        {
          "label": "Pyramids",
          "items": [
            "Numbers: can be odd shape",
            "Biomass: usually a pyramid",
            "Energy: always a pyramid"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "What is the main energy input to most living systems?",
        "back": "The Sun.",
        "tag": "Sun"
      },
      {
        "front": "Why does most life depend on photosynthesis?",
        "back": "Producers capture light energy in food that all other organisms eat directly or indirectly.",
        "tag": "Sun"
      },
      {
        "front": "What do the arrows in a food chain show?",
        "back": "The direction of energy flow, from food to the eater.",
        "tag": "Food chains"
      },
      {
        "front": "What is a producer?",
        "back": "An organism that makes its own food, usually by photosynthesis.",
        "tag": "Roles"
      },
      {
        "front": "What is a herbivore?",
        "back": "An animal that eats plants.",
        "tag": "Roles"
      },
      {
        "front": "What is a decomposer?",
        "back": "An organism, such as bacteria or fungi, that gets energy from dead or waste material.",
        "tag": "Roles"
      },
      {
        "front": "What is a food web?",
        "back": "A network of interconnected food chains.",
        "tag": "Food webs"
      },
      {
        "front": "Give three ways energy is lost between trophic levels.",
        "back": "Any three: respiration and heat loss, not all parts eaten, not all digested (faeces), excretion.",
        "tag": "Energy loss"
      },
      {
        "front": "Why do food chains usually have fewer than five trophic levels?",
        "back": "So much energy is lost at each level that too little is left for more levels.",
        "tag": "Energy loss"
      },
      {
        "front": "Why is eating crops more efficient than eating livestock?",
        "back": "There is one less trophic level, so less energy is lost.",
        "tag": "Energy loss"
      },
      {
        "front": "Which pyramid is always a true pyramid shape?",
        "back": "The pyramid of energy.",
        "tag": "Pyramids"
      },
      {
        "front": "Why can a pyramid of numbers be an odd shape?",
        "back": "One large producer, like a tree, can feed many small consumers.",
        "tag": "Pyramids"
      }
    ]
  },
  "19.2": {
    "mindMap": {
      "centre": "Nutrient cycles",
      "branches": [
        {
          "label": "Carbon removed from air",
          "items": [
            "Photosynthesis by plants",
            "Carbon made into glucose"
          ]
        },
        {
          "label": "Carbon added to air",
          "items": [
            "Respiration",
            "Decomposition",
            "Combustion"
          ]
        },
        {
          "label": "Carbon stored",
          "items": [
            "Feeding passes carbon on",
            "Fossil fuels form"
          ]
        },
        {
          "label": "Nitrogen cycle",
          "items": [
            "Protein to ammonium (decomposition)",
            "Ammonium to nitrate (nitrification)",
            "Plants absorb nitrate",
            "Make amino acids, proteins"
          ]
        },
        {
          "label": "Nitrogen in and out of air",
          "items": [
            "Fixation by lightning, bacteria",
            "Denitrification to nitrogen gas"
          ]
        },
        {
          "label": "Decomposers",
          "items": [
            "Fungi and bacteria",
            "Release CO₂ and ammonium"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "Which process removes carbon dioxide from the air?",
        "back": "Photosynthesis.",
        "tag": "Carbon"
      },
      {
        "front": "Name three processes that add carbon dioxide to the air.",
        "back": "Respiration, decomposition and combustion.",
        "tag": "Carbon"
      },
      {
        "front": "How are fossil fuels formed?",
        "back": "Dead organisms that do not decompose are changed over millions of years into coal, oil and gas.",
        "tag": "Carbon"
      },
      {
        "front": "How does carbon pass from plants to animals?",
        "back": "By feeding.",
        "tag": "Carbon"
      },
      {
        "front": "What happens to protein in dead organisms in the nitrogen cycle?",
        "back": "Decomposers break it down into ammonium ions.",
        "tag": "Nitrogen"
      },
      {
        "front": "What is nitrification?",
        "back": "Bacteria converting ammonium ions into nitrate ions.",
        "tag": "Nitrogen"
      },
      {
        "front": "How do plants get nitrogen?",
        "back": "They absorb nitrate ions from the soil.",
        "tag": "Nitrogen"
      },
      {
        "front": "What is nitrogen fixation? Name two ways it happens.",
        "back": "Turning nitrogen gas into usable compounds, by lightning and by nitrogen-fixing bacteria.",
        "tag": "Nitrogen"
      },
      {
        "front": "What is denitrification?",
        "back": "Bacteria converting nitrate ions back into nitrogen gas.",
        "tag": "Nitrogen"
      },
      {
        "front": "How do animals get nitrogen?",
        "back": "By eating and digesting proteins.",
        "tag": "Nitrogen"
      },
      {
        "front": "What is the role of decomposers?",
        "back": "Break down dead material and waste, releasing carbon dioxide and ammonium ions.",
        "tag": "Decomposers"
      }
    ]
  },
  "19.3": {
    "mindMap": {
      "centre": "Ecosystems and biodiversity",
      "branches": [
        {
          "label": "Population",
          "items": [
            "One species",
            "Same area, same time"
          ]
        },
        {
          "label": "Community",
          "items": [
            "All populations of different species",
            "Living in one ecosystem"
          ]
        },
        {
          "label": "Ecosystem",
          "items": [
            "Community and environment",
            "Interacting together"
          ]
        },
        {
          "label": "Biodiversity",
          "items": [
            "Number of species in an area",
            "High in rainforests"
          ]
        },
        {
          "label": "Population growth",
          "items": [
            "Food supply",
            "Competition",
            "Predation",
            "Disease"
          ]
        },
        {
          "label": "Humans",
          "items": [
            "Population growing fast",
            "More demand for resources"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "What is a population?",
        "back": "A group of organisms of one species, living in the same area at the same time.",
        "tag": "Definitions"
      },
      {
        "front": "What is a community?",
        "back": "All the populations of different species in an ecosystem.",
        "tag": "Definitions"
      },
      {
        "front": "What is an ecosystem?",
        "back": "A unit containing the community of organisms and their environment, interacting together.",
        "tag": "Definitions"
      },
      {
        "front": "What is biodiversity?",
        "back": "The number of different species living in an area.",
        "tag": "Definitions"
      },
      {
        "front": "Name four factors affecting population growth rate.",
        "back": "Food supply, competition, predation and disease.",
        "tag": "Growth"
      },
      {
        "front": "How does predation affect prey numbers?",
        "back": "More predators means more prey are eaten, so prey numbers fall.",
        "tag": "Growth"
      },
      {
        "front": "How does food supply affect population growth?",
        "back": "More food allows the population to grow; a shortage makes it fall.",
        "tag": "Growth"
      },
      {
        "front": "Why does disease affect crowded populations most?",
        "back": "Pathogens spread more easily between organisms living close together.",
        "tag": "Growth"
      },
      {
        "front": "What is the effect of human population growth on resources?",
        "back": "It increases demand for global resources such as food, water, land and energy.",
        "tag": "Humans"
      },
      {
        "front": "Give an example of a population in a pond.",
        "back": "All the frogs in the pond.",
        "tag": "Definitions"
      },
      {
        "front": "Name the four phases of a sigmoid population growth curve.",
        "back": "Lag, exponential (log), stationary and death.",
        "tag": "IGCSE"
      },
      {
        "front": "Why does a population stop growing in the stationary phase?",
        "back": "Limiting factors such as food and space run short, so the birth rate equals the death rate.",
        "tag": "IGCSE Extended"
      }
    ]
  },
  "19.4": {
    "mindMap": {
      "centre": "Human effects on ecosystems",
      "branches": [
        {
          "label": "Deforestation",
          "items": [
            "Loss of biodiversity, extinction",
            "Soil loss, flooding",
            "More carbon dioxide"
          ]
        },
        {
          "label": "Over-harvesting and aliens",
          "items": [
            "Species taken faster than they recover",
            "Non-native species outcompete natives"
          ]
        },
        {
          "label": "Eutrophication",
          "items": [
            "Extra nitrate, algae grow",
            "Producers die, decomposed",
            "Bacteria use up oxygen",
            "Fish die"
          ]
        },
        {
          "label": "Global warming",
          "items": [
            "Carbon dioxide and methane",
            "Ice melts, sea level rises",
            "Extreme weather"
          ]
        },
        {
          "label": "Other pollution",
          "items": [
            "Insecticides kill useful insects",
            "Herbicides cut biodiversity",
            "Plastics: not biodegradable"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "Give three consequences of deforestation.",
        "back": "Any three: loss of biodiversity, extinction, soil loss, flooding, more carbon dioxide in the air.",
        "tag": "Deforestation"
      },
      {
        "front": "Why does deforestation increase flooding?",
        "back": "There are fewer trees to absorb rainwater, so it runs off quickly.",
        "tag": "Deforestation"
      },
      {
        "front": "Why does deforestation increase atmospheric carbon dioxide?",
        "back": "Fewer trees photosynthesise, and burning trees releases carbon dioxide.",
        "tag": "Deforestation"
      },
      {
        "front": "What is over-harvesting?",
        "back": "Taking a species from the wild faster than it can replace itself.",
        "tag": "Over-harvesting"
      },
      {
        "front": "Why can a non-native species harm an ecosystem?",
        "back": "It may have no predators, so it spreads and outcompetes or eats native species.",
        "tag": "Non-native"
      },
      {
        "front": "What causes eutrophication?",
        "back": "Untreated sewage or nitrogen-containing fertilisers entering water.",
        "tag": "Eutrophication"
      },
      {
        "front": "List the steps of eutrophication.",
        "back": "More nitrate, producers grow, producers die, more decomposition, decomposers respire aerobically, oxygen falls, organisms die.",
        "tag": "Eutrophication"
      },
      {
        "front": "Why does oxygen fall in eutrophication?",
        "back": "Decomposers break down dead plants and use oxygen in aerobic respiration.",
        "tag": "Eutrophication"
      },
      {
        "front": "Name two greenhouse gases.",
        "back": "Carbon dioxide and methane.",
        "tag": "Global warming"
      },
      {
        "front": "Give two likely effects of global warming.",
        "back": "Any two: melting ice and rising sea levels, extreme weather, species moving or becoming extinct, crop failure.",
        "tag": "Global warming"
      },
      {
        "front": "Give one harmful effect of insecticides.",
        "back": "They kill useful insects such as bees.",
        "tag": "Pollution"
      },
      {
        "front": "Why are non-biodegradable plastics harmful?",
        "back": "They are not broken down; animals get tangled in them or eat them.",
        "tag": "Pollution"
      },
      {
        "front": "Give two disadvantages of a monoculture.",
        "back": "Any two: low biodiversity, pests and diseases spread easily, heavy use of fertilisers and pesticides.",
        "tag": "IGCSE"
      }
    ]
  },
  "19.5": {
    "mindMap": {
      "centre": "Conservation",
      "branches": [
        {
          "label": "Reasons",
          "items": [
            "Maintain biodiversity",
            "Reduce extinction",
            "Protect vulnerable environments"
          ]
        },
        {
          "label": "Sustainable resource",
          "items": [
            "Replaced as fast as removed",
            "Does not run out"
          ]
        },
        {
          "label": "Forests",
          "items": [
            "Education",
            "Protected areas",
            "Quotas",
            "Replanting"
          ]
        },
        {
          "label": "Fish stocks",
          "items": [
            "Closed seasons, protected areas",
            "Larger mesh size",
            "Quotas, monitoring",
            "Education"
          ]
        }
      ]
    },
    "flashcards": [
      {
        "front": "Give three reasons for conserving species.",
        "back": "To maintain biodiversity, reduce extinction and protect vulnerable environments.",
        "tag": "Reasons"
      },
      {
        "front": "What is a sustainable resource?",
        "back": "One that is produced as rapidly as it is removed from the environment, so it does not run out.",
        "tag": "Sustainable"
      },
      {
        "front": "Name four ways to conserve forests.",
        "back": "Education, protected areas, quotas and replanting.",
        "tag": "Forests"
      },
      {
        "front": "How does replanting help conserve forests?",
        "back": "New trees replace those cut down.",
        "tag": "Forests"
      },
      {
        "front": "What is a closed season in fishing?",
        "back": "A time, usually the breeding season, when fishing is not allowed.",
        "tag": "Fish"
      },
      {
        "front": "How does a larger mesh size help fish stocks?",
        "back": "Young fish can escape, grow and breed.",
        "tag": "Fish"
      },
      {
        "front": "What is a fishing quota?",
        "back": "A limit on how many fish can be caught.",
        "tag": "Fish"
      },
      {
        "front": "Why is monitoring of fish stocks useful?",
        "back": "Rules can be changed if numbers fall.",
        "tag": "Fish"
      },
      {
        "front": "Why does maintaining biodiversity matter?",
        "back": "Food webs stay stable, and species provide food, medicines and materials.",
        "tag": "Reasons"
      },
      {
        "front": "Name six ways fish stocks can be conserved.",
        "back": "Education, closed seasons, protected areas, controlled net types and mesh size, quotas, monitoring.",
        "tag": "Fish"
      },
      {
        "front": "What is a seed bank?",
        "back": "A store of seeds kept cold and dry, so plant species can be grown again if they die out in the wild.",
        "tag": "IGCSE"
      },
      {
        "front": "Why are small populations at risk of extinction?",
        "back": "They have little genetic variation, so they may not survive a change in the environment or a new disease.",
        "tag": "IGCSE Extended"
      }
    ]
  }
};

export function getBiologyRevision(topic: string): TopicRevision | null {
  return O_LEVEL_BIOLOGY_REVISION[topic] ?? null;
}
