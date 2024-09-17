import { isIframeElement } from "../element/typeChecks";
import type {
  ExcalidrawIframeElement,
  NonDeletedExcalidrawElement,
} from "../element/types";
import type { ElementOrToolType } from "../types";

export const hasBackground = (type: ElementOrToolType) =>
  type === "rectangle" ||
  type === "iframe" ||
  type === "embeddable" ||
  type === "ellipse" ||
  type === "diamond" ||
  type === "line" ||
  type === "freedraw";

export const hasStrokeColor = (type: ElementOrToolType) =>
  type !== "image" &&
  type !== "frame" &&
  type !== "magicframe" &&
  type !== "resourceNode" &&
  type !== "splitter" &&
  type !== "pipe" &&
  type !== "merger" &&
  type !== "constructor" &&
  type !== "assembler" &&
  type !== "manufacturer" &&
  type !== "smelter" &&
  type !== "foundry" &&
  type !== "coalGenerator" &&
  type !== "fuelGenerator" &&
  type !== "oilRefinery" &&
  type !== "packager" &&
  type !== "oilExtractor" &&
  type !== "waterExtractor";

export const hasStrokeWidth = (type: ElementOrToolType) =>
  type === "rectangle" ||
  type === "iframe" ||
  type === "embeddable" ||
  type === "ellipse" ||
  type === "diamond" ||
  type === "freedraw" ||
  type === "arrow" ||
  type === "line";

export const hasStrokeStyle = (type: ElementOrToolType) =>
  type === "rectangle" ||
  type === "iframe" ||
  type === "embeddable" ||
  type === "ellipse" ||
  type === "diamond" ||
  type === "arrow" ||
  type === "line";

export const canChangeRoundness = (type: ElementOrToolType) =>
  type === "rectangle" ||
  type === "iframe" ||
  type === "embeddable" ||
  type === "line" ||
  type === "diamond" ||
  type === "image";

export const toolIsArrow = (type: ElementOrToolType) => type === "arrow";

export const canHaveArrowheads = (type: ElementOrToolType) => type === "arrow";

export const isResourceNode = (type: ElementOrToolType) =>
  type === "resourceNode";
export const isSplitter = (type: ElementOrToolType) => type === "splitter";
export const isMerger = (type: ElementOrToolType) => type === "merger";
export const isPipe = (type: ElementOrToolType) => type === "pipe";
export const isConstructor = (type: ElementOrToolType) =>
  type === "constructor";
export const isAssembler = (type: ElementOrToolType) => type === "assembler";
export const isManufacturer = (type: ElementOrToolType) =>
  type === "manufacturer";
export const isSmelter = (type: ElementOrToolType) => type === "smelter";
export const isFoundry = (type: ElementOrToolType) => type === "foundry";
export const isCoalGenerator = (type: ElementOrToolType) =>
  type === "coalGenerator";
export const isFuelGenerator = (type: ElementOrToolType) =>
  type === "fuelGenerator";
export const isOilRefinery = (type: ElementOrToolType) =>
  type === "oilRefinery";
export const isPackager = (type: ElementOrToolType) => type === "packager";
export const isOilExtractor = (type: ElementOrToolType) =>
  type === "oilExtractor";
export const isWaterExtractor = (type: ElementOrToolType) =>
  type === "waterExtractor";

export const getElementAtPosition = (
  elements: readonly NonDeletedExcalidrawElement[],
  isAtPositionFn: (element: NonDeletedExcalidrawElement) => boolean,
) => {
  let hitElement = null;
  // We need to to hit testing from front (end of the array) to back (beginning of the array)
  // because array is ordered from lower z-index to highest and we want element z-index
  // with higher z-index
  for (let index = elements.length - 1; index >= 0; --index) {
    const element = elements[index];
    if (element.isDeleted) {
      continue;
    }
    if (isAtPositionFn(element)) {
      hitElement = element;
      break;
    }
  }

  return hitElement;
};

export const getElementsAtPosition = (
  elements: readonly NonDeletedExcalidrawElement[],
  isAtPositionFn: (element: NonDeletedExcalidrawElement) => boolean,
) => {
  const iframeLikes: ExcalidrawIframeElement[] = [];
  // The parameter elements comes ordered from lower z-index to higher.
  // We want to preserve that order on the returned array.
  // Exception being embeddables which should be on top of everything else in
  // terms of hit testing.
  const elsAtPos = elements.filter((element) => {
    const hit = !element.isDeleted && isAtPositionFn(element);
    if (hit) {
      if (isIframeElement(element)) {
        iframeLikes.push(element);
        return false;
      }
      return true;
    }
    return false;
  });
  return elsAtPos.concat(iframeLikes);
};
