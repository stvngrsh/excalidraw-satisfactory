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
      // gray
      return "#808080";
    case ResourceType.CopperOre:
      // orange
      return "#ff8000";
    case ResourceType.Limestone:
      // tan
      return "#ffbf80";
    case ResourceType.Coal:
      // dark gray
      return "#404040";
    case ResourceType.CateriumOre:
      // yellow
      return "#ffff00";
    case ResourceType.RawQuartz:
      // pink
      return "#ff0080";
    case ResourceType.Sulfur:
      // dark yellow
      return "#808000";
    case ResourceType.Uranium:
      // green
      return "#00ff00";
    case ResourceType.Bauxite:
      // brown
      return "#a52a2a";
    case ResourceType.SAM:
      // purple
      return "#800080";
  }
};

export const getBuildingStroke = (type: string) => {
  switch (type) {
    case "merger":
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
      // light orange
      return "#ffbf80";
    case "splitter":
      // light gray
      return "#d9d9d9";
    case "waterExtractor":
      // blue
      return "#0000ff";
    default:
      // white
      return "#ffffff";
  }
};
