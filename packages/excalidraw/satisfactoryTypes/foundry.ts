import { Item, RecipePart } from "./items";

export const foundryRecipes: readonly {
  id: string;
  title: string;
  alt?: boolean;
  input: [RecipePart, RecipePart];
  output: RecipePart;
}[] = [
  {
    id: "Foundry_SteelIngot",
    title: "Steel Ingot",
    input: [
      { item: Item.IronOre, rate: 45 },
      { item: Item.Coal, rate: 45 },
    ],
    output: {
      item: Item.SteelIngot,
      rate: 45,
    },
  },
  {
    id: "Foundry_SolidSteelIngot",
    title: "Solid Steel Ingot",
    input: [
      { item: Item.IronIngot, rate: 40 },
      { item: Item.Coal, rate: 40 },
    ],
    output: {
      item: Item.SteelIngot,
      rate: 60,
    },
  },
  {
    id: "Foundry_IronAlloyIngot",
    title: "Iron Alloy Ingot",
    alt: true,
    input: [
      { item: Item.IronOre, rate: 40 },
      { item: Item.CopperOre, rate: 10 },
    ],
    output: {
      item: Item.IronIngot,
      rate: 75,
    },
  },
  {
    id: "Foundry_CopperAlloyIngot",
    title: "Copper Alloy Ingot",
    alt: true,
    input: [
      { item: Item.CopperOre, rate: 50 },
      { item: Item.IronOre, rate: 50 },
    ],
    output: {
      item: Item.CopperIngot,
      rate: 100,
    },
  },
];
