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
];
