export enum Item {
  // Resources
  IronOre = "IronOre",
  CopperOre = "CopperOre",
  Coal = "Coal",

  // Smelting
  IronIngot = "IronIngot",
  CopperIngot = "CopperIngot",

  // Foundry
  SteelIngot = "SteelIngot",

  // Constructor
  IronPlate = "IronPlate",
  IronRod = "IronRod",
  Wire = "Wire",
  Cable = "Cable",
  Screw = "Screw",
  SteelPipe = "SteelPipe",
  EmptyCanister = "EmptyCanister",

  // Assembler
  Rotor = "Rotor",
  ReinforcedIronPlate = "ReinforcedIronPlate",
  ModularFrame = "ModularFrame",
  EncasedIndustrialBeam = "EncasedIndustrialBeam",

  // Manufacturer
  HeavyModularFrame = "HeavyModularFrame",

  // Refinery
  CrudeOil = "CrudeOil",
  PolymerResin = "PolymerResin",

  // Fuel
  Fuel = "Fuel",

  // Packager
  PackagedFuel = "PackagedFuel",
}

export type RecipePart = {
  item: Item;
  rate: number;
};
