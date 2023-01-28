import { Body, DefaultSvgIconSize } from "../../_shared/constants";
import { CommonSymbolParams } from "./symbol/commonSymbolParams";
import * as Symbols from "./symbol/Symbols";

const symbols = {
  asc: Symbols.ASC,
  mc: Symbols.MC,
  dsc: Symbols.DSC,
  ic: Symbols.IC,
  sun: Symbols.Sun,
  moon: Symbols.Moon,
  mercury: Symbols.Mercury,
  venus: Symbols.Venus,
  mars: Symbols.Mars,
  jupiter: Symbols.Jupiter,
  saturn: Symbols.Saturn,
  uranus: Symbols.Uranus,
  neptune: Symbols.Neptune,
  pluto: Symbols.Pluto,
  mean_node: Symbols.MeanNode,
  true_node: Symbols.TrueNode,
  mean_apogee: Symbols.MeanApogee,
  true_apogee: Symbols.TrueApogee,
  vesta: Symbols.Vesta,
  juno: Symbols.Juno,
  ceres: Symbols.Ceres,
  pallas: Symbols.Pallas,
  asbolus: Symbols.Asbolus,
  ixion: Symbols.Ixion,
  elatus: Symbols.Elatus,
  okyrhoe: Symbols.Okyrhoe,
  chariklo: Symbols.Chariklo,
  cyllarus: Symbols.Cyllarus,
  chiron: Symbols.Chiron,
  damocles: Symbols.Damocles,
  tantalus: Symbols.Tantalus,
  bienor: Symbols.Bienor,
  hylonome: Symbols.Hylonome,
  pholus: Symbols.Pholus,
  nessus: Symbols.Nessus,
  isis: Symbols.Isis,
  varuna: Symbols.Varuna,
  osiris: Symbols.Osiris,
  mithra: Symbols.Mithra,
  lilith: Symbols.Lilith,
  kalliope: Symbols.Kalliope,
  klio: Symbols.Klio,
  euterpe: Symbols.Euterpe,
  thalia: Symbols.Thalia,
  melpomene: Symbols.Melpomene,
  terpsichore: Symbols.Terpsichore,
  erato: Symbols.Erato,
  polyhymnia: Symbols.Polyhymnia,
  urania: Symbols.Urania,
  moira: Symbols.Moira,
  klotho: Symbols.Klotho,
  lachesis: Symbols.Lachesis,
  atropos: Symbols.Atropos,
  astraea: Symbols.Astraea,
  admetos: Symbols.Admetos,
  apollon: Symbols.Apollon,
  icarus: Symbols.Icarus,
  eris: Symbols.Eris,
  eros: Symbols.Eros,
  kronos: Symbols.Kronos,
  zeus: Symbols.Zeus,
  daphne: Symbols.Daphne,
  hades: Symbols.Hades,
  pandra: Symbols.Pandra,
  hygiea: Symbols.Hygiea,
  hekate: Symbols.Hekate,
  poseidon: Symbols.Poseidon,
  valkanus: Symbols.Valkanus,
  orcus: Symbols.Orcus,
  cupido: Symbols.Cupido,
  sedna: Symbols.Sedna,
  bacchus: Symbols.Bacchus,
  alexandra: Symbols.Alexandra,
  anpanman: Symbols.Anpanman,
  quaoar: Symbols.Quaoar,
  merlin: Symbols.Merlin,
  karma: Symbols.Karma,
  sappho: Symbols.Sappho,
  takoyaki: Symbols.Takoyaki,
  part_of_fortune: Symbols.PartOfFortune,
  vertex: Symbols.Vertex,
  hideakianno: Symbols.HideakiAnno,
  tezuka: Symbols.Tezuka,
  kinokonasu: Symbols.KinokoNasu,
  miyazakihayao: Symbols.MiyazakiHayao,
  yanase: Symbols.Yanase,
};

const Symbol = (params: { body: Body } & CommonSymbolParams) => {
  const Component = symbols[params.body];
  const translateX = params.x ?? 0;
  const translateY = params.y ?? 0;
  const scaleX = (params.width ?? DefaultSvgIconSize) / DefaultSvgIconSize;
  const scaleY = (params.height ?? DefaultSvgIconSize) / DefaultSvgIconSize;
  const width = params.width ?? DefaultSvgIconSize;
  const height = params.height ?? DefaultSvgIconSize;
  const angle = params.angle ?? 0;
  return (
    <g
      transform={`translate(${translateX - width / 2} ${
        translateY - height / 2
      }) rotate(${angle} ${width / 2} ${
        height / 2
      }) scale(${scaleX} ${scaleY})`}
      width={params.width}
      height={params.height}
    >
      <Component params={params} />
    </g>
  );
};

export default Symbol;
