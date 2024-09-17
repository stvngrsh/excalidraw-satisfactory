import { Item, RecipePart } from "./items";

export const packagerRecipes: readonly {
  id: string;
  title: string;
  input: [RecipePart, RecipePart];
  output: RecipePart;
}[] = [
  {
    id: "Packager_PackagedFuel",
    title: "Packaged Fuel",
    input: [
      { item: Item.Fuel, rate: 40 },
      { item: Item.EmptyCanister, rate: 40 },
    ],
    output: {
      item: Item.PackagedFuel,
      rate: 40,
    },
  },
];
