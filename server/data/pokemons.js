const pokemonsData = [
  {
    id: 1,
    name: {
      english: "Bulbasaur",
      japanese: "フシギダネ",
      chinese: "妙蛙种子",
      french: "Bulbizarre",
    },
    type: ["Grass", "Poison"],
    base: {
      HP: 45,
      Attack: 49,
      Defense: 49,
      "Sp. Attack": 65,
      "Sp. Defense": 65,
      Speed: 45,
    },
    species: "Seed Pokémon",
    description:
      "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun’s rays, the seed grows progressively larger.",
    evolution: { next: [["2", "Level 16"]] },
    profile: {
      height: "0.7 m",
      weight: "6.9 kg",
      egg: ["Monster", "Grass"],
      ability: [
        ["Overgrow", "false"],
        ["Chlorophyll", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/001.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/001.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/001.png",
    },
  },
  {
    id: 2,
    name: {
      english: "Ivysaur",
      japanese: "フシギソウ",
      chinese: "妙蛙草",
      french: "Herbizarre",
    },
    type: ["Grass", "Poison"],
    base: {
      HP: 60,
      Attack: 62,
      Defense: 63,
      "Sp. Attack": 80,
      "Sp. Defense": 80,
      Speed: 60,
    },
    species: "Seed Pokémon",
    description:
      "There is a bud on this Pokémon’s back. To support its weight, Ivysaur’s legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it’s a sign that the bud will bloom into a large flower soon.",
    evolution: { prev: ["1", "Level 16"], next: [["3", "Level 32"]] },
    profile: {
      height: "1 m",
      weight: "13 kg",
      egg: ["Monster", "Grass"],
      ability: [
        ["Overgrow", "false"],
        ["Chlorophyll", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/002.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/002.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/002.png",
    },
  },
  {
    id: 3,
    name: {
      english: "Venusaur",
      japanese: "フシギバナ",
      chinese: "妙蛙花",
      french: "Florizarre",
    },
    type: ["Grass", "Poison"],
    base: {
      HP: 80,
      Attack: 82,
      Defense: 83,
      "Sp. Attack": 100,
      "Sp. Defense": 100,
      Speed: 80,
    },
    species: "Seed Pokémon",
    description:
      "There is a large flower on Venusaur’s back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower’s aroma soothes the emotions of people.",
    evolution: { prev: ["2", "Level 32"] },
    profile: {
      height: "2 m",
      weight: "100 kg",
      egg: ["Monster", "Grass"],
      ability: [
        ["Overgrow", "false"],
        ["Chlorophyll", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/003.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/003.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/003.png",
    },
  },
  {
    id: 4,
    name: {
      english: "Charmander",
      japanese: "ヒトカゲ",
      chinese: "小火龙",
      french: "Salamèche",
    },
    type: ["Fire"],
    base: {
      HP: 39,
      Attack: 52,
      Defense: 43,
      "Sp. Attack": 60,
      "Sp. Defense": 50,
      Speed: 65,
    },
    species: "Lizard Pokémon",
    description:
      "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.",
    evolution: { next: [["5", "Level 16"]] },
    profile: {
      height: "0.6 m",
      weight: "8.5 kg",
      egg: ["Monster", "Dragon"],
      ability: [
        ["Blaze", "false"],
        ["Solar Power", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/004.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/004.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/004.png",
    },
  },
  {
    id: 5,
    name: {
      english: "Charmeleon",
      japanese: "リザード",
      chinese: "火恐龙",
      french: "Reptincel",
    },
    type: ["Fire"],
    base: {
      HP: 58,
      Attack: 64,
      Defense: 58,
      "Sp. Attack": 80,
      "Sp. Defense": 65,
      Speed: 80,
    },
    species: "Flame Pokémon",
    description:
      "Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color.",
    evolution: { prev: ["4", "Level 16"], next: [["6", "Level 36"]] },
    profile: {
      height: "1.1 m",
      weight: "19 kg",
      egg: ["Monster", "Dragon"],
      ability: [
        ["Blaze", "false"],
        ["Solar Power", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/005.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/005.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/005.png",
    },
  },
  {
    id: 6,
    name: {
      english: "Charizard",
      japanese: "リザードン",
      chinese: "喷火龙",
      french: "Dracaufeu",
    },
    type: ["Fire", "Flying"],
    base: {
      HP: 78,
      Attack: 84,
      Defense: 78,
      "Sp. Attack": 109,
      "Sp. Defense": 85,
      Speed: 100,
    },
    species: "Flame Pokémon",
    description:
      "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.",
    evolution: { prev: ["5", "Level 36"] },
    profile: {
      height: "1.7 m",
      weight: "90.5 kg",
      egg: ["Monster", "Dragon"],
      ability: [
        ["Blaze", "false"],
        ["Solar Power", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/006.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/006.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/006.png",
    },
  },
];

export default pokemonsData;
