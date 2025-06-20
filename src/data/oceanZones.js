export const oceanZones = [
  {
    name: "Sunlight Zone (Epipelagic)",
    depth: "0-200m",
    temp: "20-25°C",
    pressure: "1-20 atm",
    light: "100% sunlight",
    description: "The ocean's surface layer where photosynthesis occurs and most marine life thrives. This vibrant zone supports coral reefs, kelp forests, and countless species.",
    backgroundImage: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg",
    zoneColor: "from-cyan-400 to-blue-500",
    marineLife: [
      {
        name: "Bottlenose Dolphin",
        image: "https://images.pexels.com/photos/64219/dolphin-marine-mammals-water-sea-64219.jpeg",
        description: "Highly intelligent marine mammals known for their playful behavior and echolocation abilities.",
        size: "2-4 meters",
        habitat: "Warm coastal waters",
        scientificName: "Tursiops truncatus",
        funFact: "Dolphins can recognize themselves in mirrors and have unique signature whistles like names."
      },
      {
        name: "Green Sea Turtle",
        image: "https://images.pexels.com/photos/847393/pexels-photo-847393.jpeg",
        description: "Large sea turtles that migrate thousands of miles between feeding and nesting grounds.",
        size: "1-1.5 meters",
        habitat: "Tropical and subtropical waters",
        scientificName: "Chelonia mydas",
        funFact: "Sea turtles use Earth's magnetic field to navigate across vast ocean distances."
      },
      {
        name: "Clownfish",
        image: "https://images.pexels.com/photos/128756/pexels-photo-128756.jpeg?_gl=1*975tmd*_ga*MTM4NTMzNzU2LjE3NTAzODIyNDA.*_ga_8JE65Q40S6*czE3NTAzODIyMzkkbzEkZzEkdDE3NTAzODIyNTIkajQ3JGwwJGgw",
        description: "Colorful reef fish living symbiotically with sea anemones for protection.",
        size: "7-11 cm",
        habitat: "Coral reefs",
        scientificName: "Amphiprioninae",
        funFact: "All clownfish are born male and can change to female when needed for reproduction."
      },
      {
        name: "Coral Polyps",
        image: "https://images.pexels.com/photos/920160/pexels-photo-920160.jpeg",
        description: "Tiny animals that build massive reef structures over thousands of years.",
        size: "1-3mm",
        habitat: "Shallow tropical waters",
        scientificName: "Anthozoa",
        funFact: "Coral reefs support 25% of all marine species despite covering less than 1% of the ocean."
      },
      {
        name: "Great White Shark",
        image: "https://images.pexels.com/photos/18659794/pexels-photo-18659794.jpeg",
        description: "Apex predator with incredible hunting abilities and electroreception.",
        size: "4-6 meters",
        habitat: "Coastal waters worldwide",
        scientificName: "Carcharodon carcharias",
        funFact: "Great whites can detect a single drop of blood in 25 gallons of water."
      },
      {
        name: "Manta Ray",
        image: "https://images.pexels.com/photos/5547006/pexels-photo-5547006.jpeg",
        description: "Gentle giants that filter-feed on plankton with their massive wingspan.",
        size: "3-7 meters wingspan",
        habitat: "Tropical and subtropical waters",
        scientificName: "Mobula birostris",
        funFact: "Manta rays have the largest brain-to-body ratio of any fish and can recognize themselves in mirrors."
      },
      {
        name: "Parrotfish",
        image: "https://images.pexels.com/photos/9004436/pexels-photo-9004436.jpeg",
        description: "Colorful fish that eat algae from coral and produce sand through digestion.",
        size: "30-120 cm",
        habitat: "Coral reefs",
        scientificName: "Scaridae",
        funFact: "A single parrotfish can produce up to 840 pounds of sand per year by eating coral."
      },
      {
        name: "Sea Otter",
        image: "https://images.pexels.com/photos/31301889/pexels-photo-31301889.jpeg",
        description: "Marine mammals that use tools and float on their backs while eating.",
        size: "1-1.5 meters",
        habitat: "Kelp forests and coastal waters",
        scientificName: "Enhydra lutris",
        funFact: "Sea otters hold hands while sleeping to prevent drifting apart in ocean currents."
      },
      {
        name: "Jellyfish",
        image: "https://images.pexels.com/photos/1076758/pexels-photo-1076758.jpeg",
        description: "Ancient gelatinous creatures that have survived for over 500 million years.",
        size: "1cm - 2 meters",
        habitat: "All ocean zones",
        scientificName: "Cnidaria",
        funFact: "Jellyfish are 95% water and have no brain, heart, or blood, yet they've survived longer than dinosaurs."
      },
      {
        name: "Kelp",
        image: "https://images.pexels.com/photos/12829689/pexels-photo-12829689.jpeg",
        description: "Giant brown algae that forms underwater forests and grows incredibly fast.",
        size: "Up to 60 meters",
        habitat: "Cold, nutrient-rich waters",
        scientificName: "Macrocystis pyrifera",
        funFact: "Giant kelp can grow up to 2 feet per day, making it one of the fastest-growing organisms on Earth."
      }
    ],
    features: ["Coral reefs", "Kelp forests", "Plankton blooms", "Surface currents", "Photosynthesis", "High biodiversity"],
    history: [
      {
        year: "1872-1876",
        event: "HMS Challenger Expedition",
        discoverer: "Charles Wyville Thomson",
        significance: "First comprehensive study of ocean zones and marine life distribution, establishing modern oceanography."
      },
      {
        year: "1943",
        event: "Invention of Scuba Diving",
        discoverer: "Jacques Cousteau & Émile Gagnan",
        significance: "Revolutionized underwater exploration and marine biology research in shallow waters."
      }
    ]
  },
  {
    name: "Twilight Zone (Mesopelagic)",
    depth: "200-1000m",
    temp: "5-20°C",
    pressure: "20-100 atm",
    light: "1% sunlight",
    description: "The dimly lit zone where bioluminescence begins and the largest migration on Earth occurs daily as creatures follow food sources.",
    backgroundImage: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg",
    zoneColor: "from-blue-600 to-indigo-700",
    marineLife: [
      {
        name: "Lanternfish",
        image: "https://marinesanctuary.org/wp-content/uploads/2019/10/Lanternfish-_-SEFSC-Pascagoula-Laboratory-Collection-of-Brandi-Noble-NOAA-NMFS-SEFSC.jpg",
        description: "Small bioluminescent fish that migrate vertically each day, forming the deep scattering layer.",
        size: "2-30 cm",
        habitat: "Open ocean twilight zone",
        scientificName: "Myctophidae",
        funFact: "Lanternfish make up 65% of all deep-sea fish biomass and migrate 1000+ meters daily."
      },
      {
        name: "Vampire Squid",
        image: "https://www.aquariumofpacific.org/images/olc/Vamp_squid.jpg",
        description: "A unique cephalopod that can turn itself inside out when threatened, feeding on marine snow.",
        size: "15-30 cm",
        habitat: "Oxygen minimum zones",
        scientificName: "Vampyroteuthis infernalis",
        funFact: "Despite its name, it doesn't suck blood but feeds on organic particles falling from above."
      },
      {
        name: "Hatchetfish",
        image: "https://www.fishi-pedia.com/wp-content/uploads/2019/02/Gasteropelecus-maculatus-2.jpg",
        description: "Silver fish with light-producing organs on their bellies for camouflage.",
        size: "2-12 cm",
        habitat: "Mid-water depths",
        scientificName: "Sternoptychidae",
        funFact: "They use counter-illumination to match the light from above, becoming invisible to predators below."
      },
      {
        name: "Barreleye Fish",
        image: "https://www.montereybayaquarium.org/globalassets/mba/images/animals/deep-sea/mbari-owned/barreleye-macropinna_microstoma-mbari.jpg?width=608&height=404&mode=crop&format=webp&quality=60",
        description: "Transparent-headed fish with tubular eyes that can rotate upward to spot prey.",
        size: "15 cm",
        habitat: "600-800m depth",
        scientificName: "Macropinna microstoma",
        funFact: "Its transparent head allows its tubular eyes to rotate upward through its skull to look for food."
      },
      {
        name: "Bristlemouth",
        image: "https://twilightzone.whoi.edu/wp-content/uploads/2020/03/Elongated-bristlemouthSigmops-elongatus.jpg",
        description: "The most abundant vertebrate on Earth, with billions living in the twilight zone.",
        size: "2-8 cm",
        habitat: "Deep ocean waters",
        scientificName: "Cyclothone",
        funFact: "There are more bristlemouth fish than any other vertebrate species on the planet."
      },
      {
        name: "Cookiecutter Shark",
        image: "https://media.australian.museum/media/dd/images/Large-tooth_Cookie-cutter_Shark_Isistius_plut.width-1600.709f1aa.jpg",
        description: "Small shark that takes circular bites from larger marine animals.",
        size: "42-56 cm",
        habitat: "Tropical and warm waters",
        scientificName: "Isistius brasiliensis",
        funFact: "They attach to whales and large fish, spinning to cut out circular plugs of flesh."
      },
      {
        name: "Siphonophore",
        image: "https://static.wikia.nocookie.net/marine/images/9/97/Galaxy-siph-v3571-2.jpg/revision/latest/scale-to-width-down/1000?cb=20190527150528",
        description: "Colonial organisms that can stretch longer than blue whales.",
        size: "Up to 40 meters",
        habitat: "Open ocean",
        scientificName: "Siphonophorae",
        funFact: "Though they look like single animals, they're actually colonies of specialized individuals working together."
      },
      {
        name: "Sperm Whale",
        image: "https://c02.purpledshub.com/uploads/sites/62/2023/05/Sperm-whale-4e62454.jpg?w=1175&webp=1",
        description: "Deep-diving whales that hunt giant squid in the twilight zone.",
        size: "11-20 meters",
        habitat: "Deep ocean waters",
        scientificName: "Physeter macrocephalus",
        funFact: "Sperm whales can dive to 2,000 meters and hold their breath for up to 90 minutes."
      }
    ],
    features: ["Bioluminescence", "Vertical migration", "Oxygen minimum zones", "Marine snow", "Counter-illumination", "Deep scattering layer"],
    history: [
      {
        year: "1930s",
        event: "Discovery of Deep Scattering Layer",
        discoverer: "Sonar operators",
        significance: "Revealed massive daily migrations of marine life, initially mistaken for the seafloor."
      },
      {
        year: "2004",
        event: "First Live Barreleye Fish Filmed",
        discoverer: "Monterey Bay Aquarium Research Institute",
        significance: "Revealed the transparent head and rotating eyes of this mysterious deep-sea fish."
      }
    ]
  },
  {
    name: "Midnight Zone (Bathypelagic)",
    depth: "1000-4000m",
    temp: "4°C",
    pressure: "100-400 atm",
    light: "No sunlight",
    description: "The perpetually dark zone where only bioluminescence provides light and food is extremely scarce, leading to unique predatory adaptations.",
    backgroundImage: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg",
    zoneColor: "from-indigo-800 to-purple-900",
    marineLife: [
      {
        name: "Anglerfish",
        image: "https://www.usatoday.com/gcdn/authoring/authoring-images/2025/02/10/USAT/78385535007-trnd-deep-sea-angler-fish-spotted-thumb.jpg?crop=1919,1079,x0,y0&width=1320&height=742&format=pjpg&auto=webp",
        description: "Predatory fish with a bioluminescent lure to attract prey in the complete darkness.",
        size: "20 cm - 1 meter",
        habitat: "Deep ocean waters",
        scientificName: "Lophiiformes",
        funFact: "Male anglerfish are much smaller and permanently fuse to females, becoming living sperm producers."
      },
      {
        name: "Giant Squid",
        image: "https://i0.wp.com/onwildlife.org/wp-content/uploads/2024/07/giant-squid-underwater.jpg?resize=1024%2C768&ssl=1",
        description: "Legendary deep-sea cephalopod with the largest eyes in the animal kingdom.",
        size: "10-13 meters",
        habitat: "Deep ocean waters",
        scientificName: "Architeuthis dux",
        funFact: "Their eyes are the size of dinner plates - the largest of any animal - to capture minimal light."
      },
      {
        name: "Gulper Eel",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhoZA8ZTNGPRaxggUehmIsThoXtLGvVS4yAm8CoRoiTEdw3YSA-v1eHRAgJWO6Uv364WZS7rnld5ozTpMTvj2MiP1vB4DEapcFd2oUhQB2vTF-cHgl6VCMkn3Y_qMx8QhIUEG0nVORDEmYp/s1600/gulper_eel_saccopharynx.jpg",
        description: "Eel with a massive expandable mouth that can swallow prey larger than itself.",
        size: "60-75 cm",
        habitat: "Deep mid-water",
        scientificName: "Eurypharynx pelecanoides",
        funFact: "Its stomach can stretch to accommodate prey much larger than the eel's normal body size."
      },
      {
        name: "Viperfish",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Head_of_a_pacific_Viperfish_4037.jpg/1920px-Head_of_a_pacific_Viperfish_4037.jpg",
        description: "Predator with needle-like teeth and a bioluminescent lure on its dorsal fin.",
        size: "30-60 cm",
        habitat: "Deep ocean",
        scientificName: "Chauliodus sloani",
        funFact: "Its teeth are so large they don't fit in its mouth and curve back toward its eyes."
      },
      {
        name: "Fangtooth Fish",
        image: "http://montereybayaquarium.org/globalassets/mba/images/animals/fishes/fangtooth-ap091.jpg?format=webp&quality=60",
        description: "Fish with the largest teeth relative to body size of any marine animal.",
        size: "15-18 cm",
        habitat: "Deep ocean waters",
        scientificName: "Anoplogaster cornuta",
        funFact: "Their teeth are so large they have special sockets in their skull to accommodate them when their mouth closes."
      },
      {
        name: "Blobfish",
        image: "https://fpk.unair.ac.id/wp-content/uploads/2022/09/blobfish.webp",
        description: "Gelatinous fish that looks normal at depth but becomes blob-like at surface pressure.",
        size: "30 cm",
        habitat: "Deep waters off Australia",
        scientificName: "Psychrolutes marcidus",
        funFact: "The blobfish only looks 'blobby' when brought to the surface - at depth, it looks like a normal fish."
      },
      {
        name: "Giant Isopod",
        image: "https://en.wikipedia.org/wiki/Giant_isopod#/media/File:Bathynomus_kensleyi_and_Bathynomus_doederleinii_NMMBA.jpg",
        description: "Giant deep-sea crustaceans related to pill bugs that can survive years without food.",
        size: "20-50 cm",
        habitat: "Deep ocean floor",
        scientificName: "Bathynomus giganteus",
        funFact: "Giant isopods can survive up to 5 years without eating by slowing their metabolism dramatically."
      },
      {
        name: "Colossal Squid",
        image: "https://static.wikia.nocookie.net/fictionrulezforever/images/0/08/Colossal_Squid.jpg/revision/latest/scale-to-width-down/1000?cb=20230518123252",
        description: "Even larger than giant squid, with rotating hooks on their tentacles.",
        size: "12-14 meters",
        habitat: "Antarctic deep waters",
        scientificName: "Mesonychoteuthis hamiltoni",
        funFact: "Colossal squid have rotating hooks on their tentacles and are the largest invertebrates on Earth."
      },
      {
        name: "Deep-sea Dragonfish",
        image: "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2019/06/d3b86214-a66f-4359-9e53-fdcfd533a155-large16x9-ap19155755177085-1559809077.jpg",
        description: "Bioluminescent predator with a chin barbel that acts as a fishing lure.",
        size: "15-32 cm",
        habitat: "Deep ocean waters",
        scientificName: "Stomiidae",
        funFact: "They can produce red bioluminescence, which most deep-sea creatures cannot see, giving them a stealth advantage."
      }
    ],
    features: ["Complete darkness", "Bioluminescent communication", "Sparse food sources", "Extreme pressure", "Gigantism", "Unique predatory adaptations"],
    history: [
      {
        year: "1960",
        event: "Trieste Deep Dive",
        discoverer: "Jacques Piccard & Don Walsh",
        significance: "First human descent to the deepest part of the ocean, reaching Challenger Deep."
      },
      {
        year: "2007",
        event: "First Live Giant Squid Filmed",
        discoverer: "Japanese researchers",
        significance: "Captured the first footage of a living giant squid in its natural habitat."
      }
    ]
  },
  {
    name: "Abyssal Zone (Abyssopelagic)",
    depth: "4000-6000m",
    temp: "1-4°C",
    pressure: "400-600 atm",
    light: "No sunlight",
    description: "The vast, cold, and dark zone covering most of the ocean floor with unique ecosystems around hydrothermal vents and cold seeps.",
    backgroundImage: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg",
    zoneColor: "from-purple-900 to-gray-900",
    marineLife: [
      {
        name: "Dumbo Octopus",
        image: "https://www.nhm.ac.uk/content/dam/nhm-www/discover/dumbo-octopus/dumbo-octopus-seafloor-two-column.jpg.thumb.1920.1920.png",
        description: "Deep-sea octopus with ear-like fins that lives at extreme depths, the deepest-living octopus.",
        size: "20-30 cm",
        habitat: "Abyssal plains",
        scientificName: "Grimpoteuthis",
        funFact: "They flap their ear-like fins to swim and can change color instantly despite living in darkness."
      },
      {
        name: "Sea Pig",
        image: "https://media.wired.com/photos/593256cdb8eb31692072ed3e/3:2/w_1920,c_limit/Sea-Pig1.jpg",
        description: "Deep-sea sea cucumbers that move in herds across the abyssal seafloor, feeding on organic matter.",
        size: "10-15 cm",
        habitat: "Abyssal seafloor",
        scientificName: "Scotoplanes",
        funFact: "They move in herds of hundreds, following chemical trails to find the best feeding spots."
      },
      {
        name: "Tripod Fish",
        image: "https://azure2.wgp-cdn.co.uk/app-practicalfishkeeping/news/4d092ef353f82.jpg?&format=webp&webp.quality=40&scale=both",
        description: "Fish that stands on the seafloor using elongated fins like stilts to catch food.",
        size: "30-40 cm",
        habitat: "Abyssal seafloor",
        scientificName: "Bathypterois grallator",
        funFact: "It can stand motionless on the seafloor for hours, using its fins like fishing rods."
      },
      {
        name: "Giant Tube Worms",
        image: "https://www.mbari.org/wp-content/uploads/2020/07/Riftia_pachyptila_T522_04_riftia4.jpg",
        description: "Massive worms living around hydrothermal vents, with no mouth or stomach.",
        size: "1-2 meters",
        habitat: "Hydrothermal vents",
        scientificName: "Riftia pachyptila",
        funFact: "They have no digestive system and rely on symbiotic bacteria to convert chemicals into food."
      },
      {
        name: "Yeti Crab",
        image: "https://www.mbari.org/wp-content/uploads/2016/01/yeti-crab-photo-350.jpg",
        description: "Hairy crab discovered near hydrothermal vents with bacteria-covered claws.",
        size: "15 cm",
        habitat: "Hydrothermal vents",
        scientificName: "Kiwa hirsuta",
        funFact: "The 'hair' on their claws contains bacteria that may help detoxify poisonous minerals from the vents."
      },
      {
        name: "Abyssal Grenadier",
        image: "https://pbs.twimg.com/media/FZNKruPUIAEZOjv?format=jpg&name=900x900",
        description: "Most common fish in the abyssal zone, with a large head and tapering body.",
        size: "30-150 cm",
        habitat: "Abyssal plains",
        scientificName: "Coryphaenoides",
        funFact: "They're also called rattails and can live for over 100 years in the deep ocean."
      },
      {
        name: "Deep-sea Mushroom",
        image: "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/92DF/production/_89899573_dendrogrammaenigmatica_1_credithughmacintosh.jpg.webp",
        description: "Mysterious mushroom-shaped organisms found on the deep seafloor.",
        size: "1-2 cm",
        habitat: "Deep ocean floor",
        scientificName: "Dendrogramma",
        funFact: "These organisms are so unique that scientists aren't sure if they're animals or belong to an entirely new group."
      },
      {
        name: "Glass Sponge",
        image: "https://oceanconservancy.org/wp-content/uploads/2023/11/glass-sponge-1024x571.webp",
        description: "Ancient sponges with skeletons made of silica that can live for thousands of years.",
        size: "Up to 1 meter",
        habitat: "Deep ocean floor",
        scientificName: "Hexactinellida",
        funFact: "Some glass sponges are over 11,000 years old, making them among the oldest living animals on Earth."
      },
      {
        name: "Zombie Worm",
        image: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1000w,f_auto,q_auto:best/MSNBC/Components/Photo/_new/120703-ZombieWormPhoto-hmed-0140p_files.jpg",
        description: "Bone-eating worms that dissolve whale bones with acid to access nutrients.",
        size: "1-7 cm",
        habitat: "Whale falls",
        scientificName: "Osedax",
        funFact: "Female zombie worms keep microscopic males inside their bodies and can dissolve whale bones with acid."
      }
    ],
    features: ["Abyssal plains", "Hydrothermal vents", "Cold seeps", "Manganese nodules", "Chemosynthesis", "Extreme longevity"],
    history: [
      {
        year: "1977",
        event: "Discovery of Hydrothermal Vents",
        discoverer: "Robert Ballard & team",
        significance: "Revealed unique ecosystems independent of sunlight, revolutionizing our understanding of life."
      },
      {
        year: "1986",
        event: "Discovery of Cold Seeps",
        discoverer: "Charles Paull",
        significance: "Found another type of chemosynthetic ecosystem in the deep ocean."
      }
    ]
  },
  {
    name: "Hadal Zone (Hadalpelagic)",
    depth: "6000-11000m",
    temp: "1-4°C",
    pressure: "600-1100 atm",
    light: "No sunlight",
    description: "The deepest ocean trenches where life exists under the most extreme conditions on Earth, representing our planet's final frontier.",
    backgroundImage: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg",
    zoneColor: "from-gray-900 to-black",
    marineLife: [
      {
        name: "Snailfish",
        image: "https://images.theconversation.com/files/521579/original/file-20230418-18-25ec26.jpg?ixlib=rb-4.1.0&rect=7%2C9%2C1014%2C527&q=45&auto=format&w=926&fit=clip",
        description: "The deepest-living fish ever recorded, found at depths over 8,000 meters.",
        size: "10-25 cm",
        habitat: "Ocean trenches",
        scientificName: "Pseudoliparis",
        funFact: "They hold the record for deepest fish, found at 8,178 meters in the Mariana Trench."
      },
      {
        name: "Amphipod",
        image: "https://emso.eu/wp-content/uploads/2020/04/Eurythenes.jpg",
        description: "Small crustaceans that thrive in the deepest ocean trenches, some growing unusually large.",
        size: "1-34 cm",
        habitat: "Hadal trenches",
        scientificName: "Hirondellea gigas",
        funFact: "Some deep-sea amphipods grow to giant sizes, over 30cm long - 10 times larger than shallow-water relatives."
      },
      {
        name: "Xenophyophore",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/64/XenophyophoreNOAA.jpg",
        description: "Giant single-celled organisms that can grow to the size of dinner plates.",
        size: "10-20 cm",
        habitat: "Trench floors",
        scientificName: "Xenophyophorea",
        funFact: "These are among the largest single-celled organisms on Earth, visible to the naked eye."
      },
      {
        name: "Barophilic Bacteria",
        image: "https://cdn.serc.carleton.edu/images/microbelife/Subsurface_remnants_of_bacterial_metabolism.jpg",
        description: "Pressure-loving microorganisms that can only survive under extreme pressure.",
        size: "Microscopic",
        habitat: "Extreme depths",
        scientificName: "Pyrococcus yayanosii",
        funFact: "Some can only reproduce under pressures 1000 times greater than at sea level."
      },
      {
        name: "Hadal Cusk Eel",
        image: "https://www.mbari.org/wp-content/uploads/Spectrunculus_grandis_T0426_01_1150.jpg",
        description: "Eel-like fish adapted to extreme pressure in the deepest trenches.",
        size: "20-30 cm",
        habitat: "Deep ocean trenches",
        scientificName: "Abyssobrotula galatheae",
        funFact: "They were among the first fish discovered in the hadal zone and can withstand crushing pressures."
      },
      {
        name: "Deep-sea Foraminifera",
        image: "https://animalsasobjects.org/images/filo/Foram-elphidium_hg.jpg",
        description: "Single-celled organisms with shells that accumulate on the deep ocean floor.",
        size: "Microscopic to 20cm",
        habitat: "Deep ocean sediments",
        scientificName: "Foraminifera",
        funFact: "Their shells form much of the deep-sea sediment and provide records of ancient ocean conditions."
      },
      {
        name: "Mariana Trench Amoeba",
        image: "https://i.dailymail.co.uk/i/pix/2011/10/24/article-2052727-0E818C0500000578-417_468x286.jpg",
        description: "Single-celled organisms thriving at the deepest point on Earth.",
        size: "Microscopic",
        habitat: "Challenger Deep",
        scientificName: "Various species",
        funFact: "These amoebas survive at pressures over 1,000 times greater than at sea level."
      },
      {
        name: "Hadal Polychaete Worms",
        image: "https://en.wikipedia.org/wiki/Polynoidae#/media/File:Lepidonotus_oculatus_MV_F164625.png",
        description: "Segmented worms that burrow in the sediment of the deepest trenches.",
        size: "2-10 cm",
        habitat: "Trench sediments",
        scientificName: "Polychaeta",
        funFact: "These worms help recycle organic matter in the deepest parts of the ocean."
      }
    ],
    features: ["Ocean trenches", "Extreme pressure", "Unique microbial life", "Tectonic activity", "Hadal gigantism", "Pressure adaptation"],
    history: [
      {
        year: "2019",
        event: "Deepest Fish Discovery",
        discoverer: "International team",
        significance: "Found fish living at record depths of 8,178 meters in the Mariana Trench."
      },
      {
        year: "2012",
        event: "James Cameron's Solo Dive",
        discoverer: "James Cameron",
        significance: "First solo dive to Challenger Deep, bringing deep-sea exploration to public attention."
      }
    ]
  },
  {
    name: "Mythical Zone (Legendary Depths)",
    depth: "Beyond Reality",
    temp: "Variable",
    pressure: "Immeasurable",
    light: "Mystical glow",
    description: "A realm where prehistoric giants and legendary sea monsters once ruled the oceans. Explore the fascinating world of extinct marine megafauna and mythical creatures that have captured human imagination for millennia.",
    backgroundImage: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg",
    zoneColor: "from-emerald-800 to-teal-900",
    marineLife: [
      {
        name: "Megalodon",
        image: "https://asset.kompas.com/crops/QqTiGIL3lFxiX78TcdE7HI9DNRQ=/0x0:1000x667/750x500/data/photo/2022/07/07/62c5e3a270f42.jpg",
        description: "The largest shark that ever lived, ruling ancient oceans with teeth the size of human hands.",
        size: "15-18 meters",
        habitat: "Prehistoric warm seas",
        scientificName: "Carcharocles megalodon",
        funFact: "Megalodon had a bite force of 40,000 pounds per square inch - 10 times stronger than a great white shark."
      },
      {
        name: "The Kraken",
        image: "http://morbidlybeautiful.com/wp-content/uploads/2020/10/kraken.jpg",
        description: "Legendary colossal squid of Norse mythology, capable of destroying entire ships with its massive tentacles.",
        size: "30+ meters",
        habitat: "Deep Nordic seas",
        scientificName: "Mythicus giganteus",
        funFact: "Sailors' tales of the Kraken may have been inspired by real encounters with giant and colossal squid."
      },
      {
        name: "Leviathan Whale",
        image: "https://i2-prod.mirror.co.uk/article26833958.ece/ALTERNATES/s1023/0_Livyatan-melvillei.jpg",
        description: "Prehistoric sperm whale with massive teeth, the apex predator of ancient seas.",
        size: "13-17 meters",
        habitat: "Miocene oceans",
        scientificName: "Livyatan melvillei",
        funFact: "Named after the biblical sea monster and Herman Melville, it had teeth up to 36cm long."
      },
      {
        name: "Dunkleosteus",
        image: "https://static.wikia.nocookie.net/animals/images/e/e5/Dunkleosteus.png/revision/latest/scale-to-width-down/1000?cb=20240728151402",
        description: "Armored prehistoric fish with bone-crushing jaws instead of teeth, terror of Devonian seas.",
        size: "8-10 meters",
        habitat: "Devonian seas",
        scientificName: "Dunkleosteus terrelli",
        funFact: "Its bite force was comparable to T. rex, despite living 150 million years before dinosaurs."
      },
      {
        name: "Basilosaurus",
        image: "https://static.wikia.nocookie.net/walkingwith/images/7/7a/Promo_Basilosaurus.jpg/revision/latest/scale-to-width-down/1000?cb=20130629083626",
        description: "Ancient serpentine whale, one of the first fully aquatic whales with a snake-like body.",
        size: "15-20 meters",
        habitat: "Eocene seas",
        scientificName: "Basilosaurus cetoides",
        funFact: "Despite its name meaning 'king lizard,' it was actually an early whale, not a reptile."
      },
      {
        name: "Leedsichthys",
        image: "https://static.wikia.nocookie.net/animals/images/e/e7/MA_00203280_jzzkfv.jpg/revision/latest/scale-to-width-down/1000?cb=20200531131037",
        description: "The largest bony fish that ever lived, a gentle giant that filter-fed like modern whale sharks.",
        size: "16-17 meters",
        habitat: "Jurassic seas",
        scientificName: "Leedsichthys problematicus",
        funFact: "This prehistoric fish was larger than most modern whales and lived alongside marine dinosaurs."
      },
      {
        name: "Helicoprion",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjt3CIQHy-Iy5Du-Xff1d8nuv9WJbtyoEUlkrClNrqhZz2-gUxiiyaVMDjmUrIK3BIEX-QgiLVjCeLx5TRyBYcpXIC5t3NXhH4zycX8mQjevo37zep3_pyFcCgRTmt74vEQ8jyLk5lCHdk/s1280/Helicoprion.+Photo+James+St.+John++Flickr++CC+BY+2.0+%25281%2529.jpg",
        description: "Bizarre prehistoric shark with a spiral whorl of teeth, nicknamed the 'buzz-saw shark.'",
        size: "3-12 meters",
        habitat: "Permian seas",
        scientificName: "Helicoprion bessonowi",
        funFact: "Scientists are still debating how this shark used its strange spiral tooth whorl to catch prey."
      },
      {
        name: "Pliosaurus",
        image: "https://static.wikia.nocookie.net/jurassic-world-the-moblie-game/images/b/b1/Pliosaurus_lvl_20.jpg/revision/latest/scale-to-width-down/1000?cb=20230406054629",
        description: "Massive marine reptile with the strongest bite of any known animal, the 'T. rex of the seas.'",
        size: "10-15 meters",
        habitat: "Jurassic oceans",
        scientificName: "Pliosaurus funkei",
        funFact: "Its bite force was four times stronger than T. rex, making it the ultimate marine predator."
      },
      {
        name: "Ammonite Giant",
        image: "https://www.syfy.com/sites/syfy/files/styles/hero_image__large__computer__alt_1_5x/public/2021/11/gettyimages-1301755096.jpg",
        description: "Massive spiral-shelled cephalopods that dominated ancient seas for over 300 million years.",
        size: "Up to 2 meters",
        habitat: "Ancient seas worldwide",
        scientificName: "Parapuzosia seppenradensis",
        funFact: "The largest ammonite shells were over 6 feet across, making them giants among cephalopods."
      },
      {
        name: "Sea Serpent",
        image: "https://wiki.leagueoflegends.com/en-us/images/thumb/02BW030-full.png/1920px-02BW030-full.png?af08a",
        description: "Legendary marine creature reported by sailors worldwide, possibly inspired by oarfish or whale sightings.",
        size: "20-60 meters",
        habitat: "Deep ocean waters",
        scientificName: "Serpentis marinus",
        funFact: "Modern sightings of 'sea serpents' are often giant oarfish, which can grow up to 11 meters long."
      },
      {
        name: "Mosasaurus",
        image: "https://images.dinosaurpictures.org/mosasaurus3_8967.jpg",
        description: "Gigantic marine lizard that ruled the seas during the age of dinosaurs with powerful flippers.",
        size: "12-18 meters",
        habitat: "Cretaceous seas",
        scientificName: "Mosasaurus hoffmanni",
        funFact: "Mosasaurus had a second set of teeth in its throat to prevent prey from escaping."
      },
      {
        name: "Charybdis",
        image: "https://static.wikia.nocookie.net/the-demonic-paradise/images/d/d1/Charybdis.jpg/revision/latest/scale-to-width-down/1000?cb=20151003164751",
        description: "Mythical whirlpool monster from Greek mythology that could swallow entire ships.",
        size: "Massive whirlpool",
        habitat: "Strait of Messina",
        scientificName: "Vortex mythicus",
        funFact: "The myth of Charybdis may have been inspired by real dangerous whirlpools in the Mediterranean."
      }
    ],
    features: ["Prehistoric megafauna", "Maritime legends", "Extinct ecosystems", "Mythical encounters", "Paleontological wonders", "Cultural mythology"],
    history: [
      {
        year: "1667",
        event: "First Megalodon Tooth Discovery",
        discoverer: "Niels Stensen",
        significance: "Danish scientist correctly identified giant triangular fossils as shark teeth, not dragon tongues."
      },
      {
        year: "1840",
        event: "Kraken Documented",
        discoverer: "Pierre Denys de Montfort",
        significance: "First scientific attempt to classify the legendary Kraken as a real cephalopod species."
      },
      {
        year: "2010",
        event: "Leviathan Whale Discovery",
        discoverer: "International team",
        significance: "Found fossils of the largest predatory whale, proving ancient oceans had massive toothed whales."
      },
      {
        year: "2008",
        event: "Helicoprion Mystery Solved",
        discoverer: "Tapanila & Pruitt",
        significance: "CT scans revealed how the buzz-saw shark's spiral teeth actually worked."
      }
    ]
  }
];
