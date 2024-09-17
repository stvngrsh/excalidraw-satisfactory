import { Item, RecipePart } from "./items";

export const coalGeneratorFuels: readonly {
  id: string;
  title: string;
  input: RecipePart;
}[] = [
  {
    id: "CoalGenerator_Coal",
    title: "Coal",
    input: { item: Item.Coal, rate: 15 },
  },
];
