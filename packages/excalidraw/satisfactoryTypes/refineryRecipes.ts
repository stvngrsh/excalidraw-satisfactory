import { Item, RecipePart } from "./items";

export const refineryRecipes: readonly {
  id: string;
  title: string;
  alt?: boolean;
  input: RecipePart[];
  output: RecipePart;
  byProduct?: RecipePart;
}[] = [
  {
    id: "Refinery_Fuel",
    title: "Fuel",
    input: [{ item: Item.CrudeOil, rate: 60 }],
    output: {
      item: Item.Fuel,
      rate: 40,
    },
    byProduct: {
      item: Item.PolymerResin,
      rate: 30,
    },
  },
  {
    id: "Refinery_WetConcrete",
    title: "Wet Concrete",
    alt: true,
    input: [
      { item: Item.Limestone, rate: 120 },
      { item: Item.Water, rate: 100 },
    ],
    output: {
      item: Item.Concrete,
      rate: 80,
    },
  },
];
