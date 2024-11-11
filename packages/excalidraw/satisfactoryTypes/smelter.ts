import { Item, RecipePart } from "./items";

export const smelterRecipes: readonly {
  id: string;
  title: string;
  alt?: boolean;
  input: RecipePart;
  output: RecipePart;
}[] = [
  {
    id: "Smelter_IronIngot",
    title: "Iron Ingot",
    input: { item: Item.IronOre, rate: 30 },
    output: { item: Item.IronIngot, rate: 30 },
  },
  {
    id: "Smelter_CopperIngot",
    title: "Copper Ingot",
    input: { item: Item.CopperOre, rate: 30 },
    output: { item: Item.CopperIngot, rate: 30 },
  },
  {
    id: "Smelter_CateriumIngot",
    title: "Caterium Ingot",
    input: { item: Item.CateriumOre, rate: 45 },
    output: { item: Item.CateriumIngot, rate: 15 },
  },
];
