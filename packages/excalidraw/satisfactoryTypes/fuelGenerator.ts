import { Item, RecipePart } from "./items";

export const fuelGeneratorFuels: readonly {
  id: string;
  title: string;
  input: RecipePart;
}[] = [
  {
    id: "FuelGenerator_Fuel",
    title: "Fuel",
    input: { item: Item.Fuel, rate: 15 },
  },
];
