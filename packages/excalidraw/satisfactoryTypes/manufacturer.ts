import { Item, RecipePart } from "./items";

export const manufacturerRecipes: readonly {
  id: string;
  title: string;
  alt?: boolean;
  input: RecipePart[];
  output: RecipePart;
}[] = [
  {
    id: "Manufacturer_HeavyModularFrame",
    title: "Heavy Modular Frame",
    input: [
      { item: Item.ModularFrame, rate: 10 },
      { item: Item.SteelPipe, rate: 40 },
      { item: Item.EncasedIndustrialBeam, rate: 10 },
      { item: Item.Screw, rate: 240 },
    ],
    output: {
      item: Item.HeavyModularFrame,
      rate: 2,
    },
  },
  {
    id: "Manufacturer_HeavyEncasedFrame",
    title: "Heavy Encased Frame",
    input: [
      { item: Item.ModularFrame, rate: 7.5 },
      { item: Item.SteelPipe, rate: 33.75 },
      { item: Item.EncasedIndustrialBeam, rate: 9.375 },
      { item: Item.Concrete, rate: 20.625 },
    ],
    output: {
      item: Item.HeavyModularFrame,
      rate: 2.8125,
    },
  },
  {
    id: "Manufacturer_HighSpeedConnector",
    title: "High-Speed Connector",
    input: [
      { item: Item.Cable, rate: 37.5 },
      { item: Item.QuickWire, rate: 210 },
      { item: Item.CircuitBoard, rate: 3.75 },
    ],
    output: {
      item: Item.HighSpeedConnector,
      rate: 3.75,
    },
  },
  {
    id: "Manufacturer_SiliconHighSpeedConnector",
    title: "Silicon High-Speed Connector",
    alt: true,
    input: [
      { item: Item.Silica, rate: 37.5 },
      { item: Item.QuickWire, rate: 90 },
      { item: Item.CircuitBoard, rate: 3 },
    ],
    output: {
      item: Item.HighSpeedConnector,
      rate: 3,
    },
  },
  {
    id: "Manufacturer_CrystalOscillator",
    title: "Crystal Oscillator",
    input: [
      { item: Item.QuartzCrystal, rate: 18 },
      { item: Item.Cable, rate: 14 },
      { item: Item.ReinforcedIronPlate, rate: 2.5 },
    ],
    output: {
      item: Item.CrystalOscillator,
      rate: 1,
    },
  },
];
