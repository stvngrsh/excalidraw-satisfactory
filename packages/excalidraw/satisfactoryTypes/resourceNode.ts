export enum ResourceType {
  IronOre = "IronOre",
  CopperOre = "CopperOre",
  Limestone = "Limestone",
  Coal = "Coal",
  CateriumOre = "CateriumOre",
  RawQuartz = "RawQuartz",
  Sulfur = "Sulfur",
  Uranium = "Uranium",
  Bauxite = "Bauxite",
  SAM = "SAM",
}

export const resourceTypes: readonly {
  type: ResourceType;
  name: string;
}[] = [
  { type: ResourceType.IronOre, name: "Iron Ore" },
  { type: ResourceType.CopperOre, name: "Copper Ore" },
  { type: ResourceType.Limestone, name: "Limestone" },
  { type: ResourceType.Coal, name: "Coal" },
  { type: ResourceType.CateriumOre, name: "Caterium Ore" },
  { type: ResourceType.RawQuartz, name: "Raw Quartz" },
  { type: ResourceType.Sulfur, name: "Sulfur" },
  { type: ResourceType.Uranium, name: "Uranium" },
  { type: ResourceType.Bauxite, name: "Bauxite" },
  { type: ResourceType.SAM, name: "S.A.M." },
] as const;

export enum ResourcePurity {
  Impure = "Impure",
  Normal = "Normal",
  Pure = "Pure",
}

export const resourcePurities: readonly {
  purity: ResourcePurity;
  name: string;
}[] = [
  { purity: ResourcePurity.Impure, name: "Impure" },
  { purity: ResourcePurity.Normal, name: "Normal" },
  { purity: ResourcePurity.Pure, name: "Pure" },
] as const;

export enum MinerTier {
  Mk1 = "Mk1",
  Mk2 = "Mk2",
  Mk3 = "Mk3",
}

export const minerTiers: readonly {
  tier: MinerTier;
  name: string;
}[] = [
  { tier: MinerTier.Mk1, name: "Mk.1" },
  { tier: MinerTier.Mk2, name: "Mk.2" },
  { tier: MinerTier.Mk3, name: "Mk.3" },
] as const;

export const getResourceNodeText = (
  type: ResourceType,
  purity: ResourcePurity,
  minerTier: MinerTier,
) => {
  let line1 = resourceTypes.find((r) => r.type === type)?.name;
  let line2 = resourcePurities.find((r) => r.purity === purity)?.name;
  let line3 = minerTiers.find((r) => r.tier === minerTier)?.name;
  return [line1, line2, line3].join("\n");
};

export const getResourceRate = (
  purity: ResourcePurity,
  minerTier: MinerTier,
) => {
  let rate = 0;
  switch (minerTier) {
    case MinerTier.Mk1:
      rate = 60;
      break;
    case MinerTier.Mk2:
      rate = 120;
      break;
    case MinerTier.Mk3:
      rate = 240;
      break;
  }

  switch (purity) {
    case ResourcePurity.Impure:
      rate *= 0.5;
      break;
    case ResourcePurity.Pure:
      rate *= 2;
      break;
  }

  return rate;
};
