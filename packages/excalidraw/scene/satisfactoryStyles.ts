import { ResourceType } from "../satisfactoryTypes/resourceNode";

export const getResourceNodeStroke = (type: ResourceType) => {
  if (type === ResourceType.Coal) {
    return "#ffffff";
  } else {
    return "#000000";
  }
};

export const getResourceNodeFill = (type: ResourceType) => {
  switch (type) {
    case ResourceType.IronOre:
      return "#e9ecef";
    case ResourceType.CopperOre:
      // orange
      return "#ffd8a8";
    case ResourceType.Limestone:
      // tan
      return "#fff4e6";
    case ResourceType.Coal:
      // dark gray
      return "#1e1e1e";
    case ResourceType.CateriumOre:
      // yellow
      return "#ffec99";
    case ResourceType.RawQuartz:
      // light pink
      return "#fcc2d7";
    case ResourceType.Sulfur:
      // light yellow
      return "#fff9db";
    case ResourceType.Uranium:
      // green
      return "#b2f2bb";
    case ResourceType.Bauxite:
      // light rust
      return "#eaddd7";
    case ResourceType.SAM:
      // light purple
      return "#d0bfff";
  }
};

export const getBuildingStroke = (type: string) => {
  switch (type) {
    case "merger":
    case "pipe":
      // ficsit orange
      return "#ff8000";
    case "splitter":
      // gray
      return "#808080";
    default:
      // black
      return "#000000";
  }
};

export const getBuildingFill = (type: string) => {
  switch (type) {
    case "merger":
    case "splitter":
    case "constructor":
    case "smelter":
    case "assembler":
    case "manufacturer":
      return "#e9ecef";

    case "waterExtractor":
    case "packager":
      return "#a5d8ff";

    case "foundry":
    case "coalGenerator":
    case "pipe":
      return "#ffd8a8";

    case "fuelGenerator":
      return "#ffc9c9";

    case "oilRefinery":
    case "oilExtractor":
      return "#eaddd7";

    default:
      return "#ffffff";
  }
};

export const getBuildingFillStyle = (type: string) => {
  switch (type) {
    case "assembler":
      return "hachure";
    case "foundry":
    case "fuelGenerator":
    case "manufacturer":
      return "cross-hatch";
    default:
      return "solid";
  }
};
