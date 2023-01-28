export const bodyTypes = [
  "asc",
  "mc",
  "dsc",
  "ic",
  "sun",
  "moon",
  "mercury",
  "venus",
  "mars",
  "jupiter",
  "saturn",
  "uranus",
  "neptune",
  "pluto",
  "mean_node",
  "true_node",
  "mean_apogee",
  "true_apogee",
  "vesta",
  "juno",
  "ceres",
  "pallas",
  "asbolus",
  "ixion",
  "elatus",
  "okyrhoe",
  "chariklo",
  "cyllarus",
  "chiron",
  "damocles",
  "tantalus",
  "bienor",
  "hylonome",
  "pholus",
  "nessus",
  "isis",
  "varuna",
  "osiris",
  "mithra",
  "lilith",
  "kalliope",
  "klio",
  "euterpe",
  "thalia",
  "melpomene",
  "terpsichore",
  "erato",
  "polyhymnia",
  "urania",
  "moira",
  "klotho",
  "lachesis",
  "atropos",
  "astraea",
  "admetos",
  "apollon",
  "icarus",
  "eris",
  "eros",
  "kronos",
  "zeus",
  "daphne",
  "hades",
  "pandra",
  "hygiea",
  "hekate",
  "poseidon",
  "valkanus",
  "orcus",
  "cupido",
  "sedna",
  "bacchus",
  "alexandra",
  "anpanman",
  "quaoar",
  "merlin",
  "karma",
  "sappho",
  "takoyaki",
  "part_of_fortune",
  "vertex",
  "hideakianno",
  "tezuka",
  "kinokonasu",
  "miyazakihayao",
  "yanase",
] as const;
export type Body = typeof bodyTypes[number];

const signs = [
  "aries",
  "taurus",
  "gemini",
  "cancer",
  "leo",
  "virgo",
  "libra",
  "scorpio",
  "sagittarius",
  "capricorn",
  "aquarius",
  "pisces",
] as const;
export type Sign = typeof signs[number];
export const DefaultSvgIconSize = 100;
