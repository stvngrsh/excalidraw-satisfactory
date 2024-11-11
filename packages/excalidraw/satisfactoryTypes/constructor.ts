import { Item, RecipePart } from "./items";

export const constructorRecipes: readonly {
  id?: string;
  title: string;
  alt?: boolean;
  input: RecipePart;
  output: RecipePart;
}[] = [
  {
    id: "Constructor_Concrete",
    title: "Concrete",
    input: { item: Item.Limestone, rate: 45 },
    output: { item: Item.Concrete, rate: 15 },
  },
  {
    id: "Constructor_IronPlate",
    title: "Iron Plate",
    input: { item: Item.IronIngot, rate: 30 },
    output: { item: Item.IronPlate, rate: 20 },
  },
  {
    id: "Constructor_IronRod",
    title: "Iron Rod",
    input: { item: Item.IronIngot, rate: 15 },
    output: { item: Item.IronRod, rate: 15 },
  },
  {
    id: "Constructor_Wire",
    title: "Wire",
    alt: true,
    input: { item: Item.CopperIngot, rate: 15 },
    output: { item: Item.Wire, rate: 30 },
  },
  {
    id: "Constructor_IronWire",
    title: "Iron Wire",
    alt: true,
    input: { item: Item.IronIngot, rate: 12.5 },
    output: { item: Item.Wire, rate: 22.5 },
  },
  {
    id: "Constructor_Cable",
    title: "Cable",
    input: { item: Item.Wire, rate: 60 },
    output: { item: Item.Cable, rate: 30 },
  },
  {
    id: "Constructor_Screw",
    title: "Screw",
    input: { item: Item.IronRod, rate: 10 },
    output: { item: Item.Screw, rate: 40 },
  },
  {
    id: "Constructor_CastScrew",
    title: "Cast Screw",
    alt: true,
    input: { item: Item.IronIngot, rate: 12.5 },
    output: { item: Item.Screw, rate: 50 },
  },
  {
    id: "Constructor_SteelScrew",
    title: "Steel Screw",
    alt: true,
    input: { item: Item.SteelBeam, rate: 5 },
    output: { item: Item.Screw, rate: 260 },
  },
  {
    id: "Constructor_SteelPipe",
    title: "Steel Pipe",
    input: { item: Item.SteelIngot, rate: 30 },
    output: { item: Item.SteelPipe, rate: 20 },
  },
  {
    id: "Constructor_IronPipe",
    title: "Iron Pipe",
    alt: true,
    input: { item: Item.IronIngot, rate: 100 },
    output: { item: Item.SteelPipe, rate: 25 },
  },
  {
    id: "Constructor_SteelBeam",
    title: "Steel Beam",
    input: { item: Item.SteelIngot, rate: 60 },
    output: { item: Item.SteelBeam, rate: 15 },
  },
  {
    id: "Constructor_CopperSheet",
    title: "Copper Sheet",
    input: { item: Item.CopperIngot, rate: 20 },
    output: { item: Item.CopperSheet, rate: 10 },
  },
  {
    id: "Constructor_QuartzCrystal",
    title: "Quartz Crystal",
    input: { item: Item.RawQuartz, rate: 37.5 },
    output: { item: Item.QuartzCrystal, rate: 22.5 },
  },
  {
    id: "Constructor_Silica",
    title: "Silica",
    input: { item: Item.RawQuartz, rate: 22.5 },
    output: { item: Item.Silica, rate: 37.5 },
  },
  {
    id: "Constructor_IronRebar",
    title: "Iron Rebar",
    input: { item: Item.IronRod, rate: 15 },
    output: { item: Item.IronRebar, rate: 15 },
  },
  {
    id: "Constructor_QuickWire",
    title: "Quick Wire",
    input: { item: Item.CateriumIngot, rate: 12 },
    output: { item: Item.QuickWire, rate: 60 },
  },
];
