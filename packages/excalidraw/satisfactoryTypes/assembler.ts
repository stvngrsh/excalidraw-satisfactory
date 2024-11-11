import { Item, RecipePart } from "./items";

export const assemblerRecipes: readonly {
  id: string;
  title: string;
  alt?: boolean;
  input: [RecipePart, RecipePart];
  output: RecipePart;
}[] = [
  {
    id: "Assembler_ReinforcedIronPlate",
    title: "Reinforced Iron Plate",
    input: [
      { item: Item.IronPlate, rate: 30 },
      { item: Item.Screw, rate: 60 },
    ],
    output: {
      item: Item.ReinforcedIronPlate,
      rate: 5,
    },
  },
  {
    id: "Assembler_StitchedIronPlate",
    title: "Stitched Iron Plate",
    input: [
      { item: Item.IronPlate, rate: 18.75 },
      { item: Item.Wire, rate: 37.5 },
    ],
    output: {
      item: Item.ReinforcedIronPlate,
      rate: 5.625,
    },
  },
  {
    id: "Assembler_Rotor",
    title: "Rotor",
    input: [
      { item: Item.IronRod, rate: 20 },
      { item: Item.Screw, rate: 100 },
    ],
    output: {
      item: Item.Rotor,
      rate: 4,
    },
  },
  {
    id: "Assembler_CopperRotor",
    title: "Copper Rotor",
    alt: true,
    input: [
      { item: Item.CopperSheet, rate: 22.5 },
      { item: Item.Screw, rate: 195 },
    ],
    output: {
      item: Item.Rotor,
      rate: 11.25,
    },
  },
  {
    id: "Assembler_SteelRotor",
    title: "Steel Rotor",
    alt: true,
    input: [
      { item: Item.SteelPipe, rate: 10 },
      { item: Item.Wire, rate: 30 },
    ],
    output: {
      item: Item.Rotor,
      rate: 5,
    },
  },
  {
    id: "Assembler_ModularFrame",
    title: "ModularFrame",
    input: [
      { item: Item.ReinforcedIronPlate, rate: 3 },
      { item: Item.IronRod, rate: 12 },
    ],
    output: {
      item: Item.ModularFrame,
      rate: 2,
    },
  },
  {
    id: "Assembler_BoltedFrame",
    title: "BoltedFrame",
    alt: true,
    input: [
      { item: Item.ReinforcedIronPlate, rate: 7.5 },
      { item: Item.Screw, rate: 140 },
    ],
    output: {
      item: Item.ModularFrame,
      rate: 5,
    },
  },
  {
    id: "Assembler_SteeledFrame",
    title: "SteeledFrame",
    alt: true,
    input: [
      { item: Item.ReinforcedIronPlate, rate: 2 },
      { item: Item.SteelPipe, rate: 10 },
    ],
    output: {
      item: Item.ModularFrame,
      rate: 3,
    },
  },
  {
    id: "Assembler_EncasedIndustrialBeam",
    title: "Encased Industrial Beam",
    input: [
      { item: Item.SteelBeam, rate: 18 },
      { item: Item.Concrete, rate: 36 },
    ],
    output: {
      item: Item.EncasedIndustrialBeam,
      rate: 6,
    },
  },
  {
    id: "Assembler_EncasedIndustrialPipe",
    title: "Encased Industrial Pipe",
    alt: true,
    input: [
      { item: Item.SteelPipe, rate: 24 },
      { item: Item.Concrete, rate: 20 },
    ],
    output: {
      item: Item.EncasedIndustrialBeam,
      rate: 4,
    },
  },
  {
    id: "Assembler_Stator",
    title: "Stator",
    input: [
      { item: Item.SteelPipe, rate: 15 },
      { item: Item.Wire, rate: 40 },
    ],
    output: {
      item: Item.Stator,
      rate: 5,
    },
  },
  {
    id: "Assembler_Motor",
    title: "Motor",
    input: [
      { item: Item.Rotor, rate: 10 },
      { item: Item.Stator, rate: 10 },
    ],
    output: {
      item: Item.Motor,
      rate: 5,
    },
  },
  {
    id: "Assembler_FusedWire",
    title: "Fused Wire",
    alt: true,
    input: [
      { item: Item.CateriumIngot, rate: 3 },
      { item: Item.CopperIngot, rate: 12 },
    ],
    output: {
      item: Item.Wire,
      rate: 90,
    },
  },
  {
    id: "Assembler_FusedQuickWire",
    title: "Fused Quick Wire",
    alt: true,
    input: [
      { item: Item.CateriumIngot, rate: 7.5 },
      { item: Item.CopperIngot, rate: 37.5 },
    ],
    output: {
      item: Item.QuickWire,
      rate: 90,
    },
  },
  {
    id: "Assembler_StunRebar",
    title: "Stun Rebar",
    alt: true,
    input: [
      { item: Item.IronRebar, rate: 10 },
      { item: Item.QuickWire, rate: 50 },
    ],
    output: {
      item: Item.StunRebar,
      rate: 10,
    },
  },
  {
    id: "Assembler_ShatterRebar",
    title: "Shatter Rebar",
    alt: true,
    input: [
      { item: Item.IronRebar, rate: 10 },
      { item: Item.QuartzCrystal, rate: 15 },
    ],
    output: {
      item: Item.ShatterRebar,
      rate: 5,
    },
  },
  {
    id: "Assembler_AILimiter",
    title: "AI Limiter",
    input: [
      { item: Item.CopperSheet, rate: 25 },
      { item: Item.QuickWire, rate: 100 },
    ],
    output: {
      item: Item.AILimiter,
      rate: 5,
    },
  },
  {
    id: "Assembler_CircuitBoard",
    title: "Circuit Board",
    input: [
      { item: Item.CopperSheet, rate: 15 },
      { item: Item.Plastic, rate: 30 },
    ],
    output: {
      item: Item.CircuitBoard,
      rate: 7.5,
    },
  },
  {
    id: "Assembler_SiliconCircuitBoard",
    title: "Silicon Circuit Board",
    input: [
      { item: Item.CopperSheet, rate: 27.5 },
      { item: Item.Silica, rate: 27.5 },
    ],
    output: {
      item: Item.CircuitBoard,
      rate: 12.5,
    },
  },
];
