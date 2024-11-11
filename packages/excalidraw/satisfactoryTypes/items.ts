export enum Item {
  // Resources
  IronOre = "IronOre",
  CopperOre = "CopperOre",
  Coal = "Coal",
  Limestone = "Limestone",
  CateriumOre = "CateriumOre",
  RawQuartz = "RawQuartz",
  Water = "Water",

  // Smelting
  IronIngot = "IronIngot",
  CopperIngot = "CopperIngot",
  CateriumIngot = "CateriumIngot",

  // Foundry
  SteelIngot = "SteelIngot",

  // Constructor
  Concrete = "Concrete",
  IronPlate = "IronPlate",
  IronRod = "IronRod",
  Wire = "Wire",
  Cable = "Cable",
  Screw = "Screw",
  SteelPipe = "SteelPipe",
  EmptyCanister = "EmptyCanister",
  SteelBeam = "SteelBeam",
  CopperSheet = "CopperSheet",
  QuartzCrystal = "QuartzCrystal",
  Silica = "Silica",
  IronRebar = "IronRebar",
  QuickWire = "QuickWire",

  // Assembler
  Rotor = "Rotor",
  ReinforcedIronPlate = "ReinforcedIronPlate",
  ModularFrame = "ModularFrame",
  EncasedIndustrialBeam = "EncasedIndustrialBeam",
  Stator = "Stator",
  Motor = "Motor",
  StunRebar = "StunRebar",
  ShatterRebar = "ShatterRebar",
  AILimiter = "AILimiter",
  CircuitBoard = "CircuitBoard",

  // Manufacturer
  HeavyModularFrame = "HeavyModularFrame",
  HighSpeedConnector = "HighSpeedConnector",
  CrystalOscillator = "CrystalOscillator",

  // Refinery
  CrudeOil = "CrudeOil",
  PolymerResin = "PolymerResin",
  Plastic = "Plastic",
  Rubber = "Rubber",
  TurboFuel = "TurboFuel",
  Fuel = "Fuel",

  // Packager
  PackagedFuel = "PackagedFuel",
  PackagedTurboFuel = "PackagedTurboFuel",
}

export type RecipePart = {
  item: Item;
  rate: number;
};
