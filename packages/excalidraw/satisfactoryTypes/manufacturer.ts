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
];
