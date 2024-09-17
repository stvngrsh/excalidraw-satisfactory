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
];
