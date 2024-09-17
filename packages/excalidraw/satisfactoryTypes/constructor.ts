import { Item, RecipePart } from "./items";

export const constructorRecipes: readonly {
  id?: string;
  title: string;
  alt?: boolean;
  input: RecipePart;
  output: RecipePart;
}[] = [
  {
    id: "Constructor_IronPlate",
    title: "Iron Plate",
    input: { item: Item.IronIngot, rate: 30 },
    output: { item: Item.IronPlate, rate: 20 },
  },
  {
    id: "Constructor_CopperSheet",
    title: "Iron Rod",
    input: { item: Item.IronIngot, rate: 15 },
    output: { item: Item.IronRod, rate: 15 },
  },
  {
    id: "Constructor_Wire",
    title: "Wire",
    input: { item: Item.IronIngot, rate: 12.5 },
    output: { item: Item.Wire, rate: 22.5 },
  },
  {
    id: "Constructor_IronWire",
    title: "Iron Wire",
    alt: true,
    input: { item: Item.CopperIngot, rate: 15 },
    output: { item: Item.Wire, rate: 30 },
  },
  {
    id: "Constructor_Cable",
    title: "Cable",
    input: { item: Item.Wire, rate: 60 },
    output: { item: Item.Cable, rate: 30 },
  },
];
