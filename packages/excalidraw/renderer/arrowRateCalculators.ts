import {
  ElementsMap,
  ExcalidrawArrowElement,
  ExcalidrawAssemblerElement,
  ExcalidrawConstructorElement,
  ExcalidrawFoundryElement,
  ExcalidrawManufacturerElement,
  ExcalidrawMergerElement,
  ExcalidrawOilExtractorElement,
  ExcalidrawOilRefineryElement,
  ExcalidrawOverclockableElement,
  ExcalidrawPackagerElement,
  ExcalidrawPipeElement,
  ExcalidrawSatisfactoryElement,
  ExcalidrawSmelterElement,
  ExcalidrawSplitterElement,
} from "../element/types";
import { assemblerRecipes } from "../satisfactoryTypes/assembler";
import { constructorRecipes } from "../satisfactoryTypes/constructor";
import { foundryRecipes } from "../satisfactoryTypes/foundry";
import { manufacturerRecipes } from "../satisfactoryTypes/manufacturer";
import { packagerRecipes } from "../satisfactoryTypes/packager";
import { refineryRecipes } from "../satisfactoryTypes/refineryRecipes";
import {
  getResourceRate,
  ResourcePurity,
} from "../satisfactoryTypes/resourceNode";
import { smelterRecipes } from "../satisfactoryTypes/smelter";

export const getConstructorRate = (
  element: ExcalidrawConstructorElement,
): number => {
  return (
    constructorRecipes.find((recipe) => recipe.id === element.recipe)?.output
      .rate || 0
  );
};

export const getAssemblerRate = (
  element: ExcalidrawAssemblerElement,
): number => {
  return (
    assemblerRecipes.find((recipe) => recipe.id === element.recipe)?.output
      .rate || 0
  );
};

export const getManufacturerRate = (
  element: ExcalidrawManufacturerElement,
): number => {
  return (
    manufacturerRecipes.find((recipe) => recipe.id === element.recipe)?.output
      .rate || 0
  );
};

export const getSmeleterRate = (element: ExcalidrawSmelterElement): number => {
  return (
    smelterRecipes.find((recipe) => recipe.id === element.recipe)?.output
      .rate || 0
  );
};

export const getFoundryRate = (element: ExcalidrawFoundryElement): number => {
  return (
    foundryRecipes.find((recipe) => recipe.id === element.recipe)?.output
      .rate || 0
  );
};

export const getPackagerRate = (element: ExcalidrawPackagerElement): number => {
  return (
    packagerRecipes.find((recipe) => recipe.id === element.recipe)?.output
      .rate || 0
  );
};

export const getRefineryRate = (
  element: ExcalidrawOilRefineryElement,
  isByProduct = false,
): number => {
  if (isByProduct) {
    return (
      refineryRecipes.find((recipe) => recipe.id === element.recipe)?.byProduct
        ?.rate || 0
    );
  }
  return (
    refineryRecipes.find((recipe) => recipe.id === element.recipe)?.output
      .rate || 0
  );
};

export const getWaterExtractorRate = (): number => {
  return 120;
};

export const getOilExtractorRate = (
  element: ExcalidrawOilExtractorElement,
): number => {
  if (element.purity === ResourcePurity.Impure) {
    return 60;
  } else if (element.purity === ResourcePurity.Pure) {
    return 240;
  }
  return 120;
};

export const getBuildingRate = (
  element: ExcalidrawOverclockableElement,
  isByProduct = false,
): number => {
  const getBaseRate = () => {
    switch (element.type) {
      case "resourceNode":
        return getResourceRate(
          element.resourceNodeResourcePurity,
          element.resourceNodeMinerTier,
        );
      case "constructor":
        return getConstructorRate(element);
      case "assembler":
        return getAssemblerRate(element);
      case "manufacturer":
        return getManufacturerRate(element);
      case "smelter":
        return getSmeleterRate(element);
      case "foundry":
        return getFoundryRate(element);
      case "packager":
        return getPackagerRate(element);
      case "oilRefinery":
        return getRefineryRate(element, isByProduct);
      case "waterExtractor":
        return getWaterExtractorRate();
      case "oilExtractor":
        return getOilExtractorRate(element);
    }
    return 0;
  };

  return (getBaseRate() * element.clockSpeed) / 100;
};

export const getSplitterIncomingRate = (
  _rate: number,
  splitter:
    | ExcalidrawSplitterElement
    | ExcalidrawMergerElement
    | ExcalidrawPipeElement,
  elementsMap: ElementsMap,
  type: "splitter" | "merger" | "pipe" = "splitter",
): number => {
  let rate = _rate;
  const incomingArrows = splitter.boundElements
    ?.filter((boundElement) => boundElement.type === "arrow")
    .filter(
      (arrow) =>
        (elementsMap.get(arrow.id) as ExcalidrawArrowElement).endBinding
          ?.elementId === splitter?.id,
    );

  if (incomingArrows) {
    for (
      let i = 0;
      i <
      Math.min(
        type === "merger" ? 3 : type === "splitter" ? 1 : 10,
        incomingArrows.length,
      );
      i++
    ) {
      const incomingArrow = incomingArrows[i];
      const sourceElementId = (
        elementsMap.get(incomingArrow.id) as ExcalidrawArrowElement
      ).startBinding?.elementId;
      const sourceElement = sourceElementId
        ? elementsMap.get(sourceElementId)
        : null;

      if (
        sourceElement?.type === "splitter" ||
        sourceElement?.type === "pipe"
      ) {
        let tempRate = getSplitterIncomingRate(
          0,
          sourceElement,
          elementsMap,
          sourceElement.type,
        );

        const sourceElementOutgoingArrows = sourceElement.boundElements
          ?.filter((boundElement) => boundElement.type === "arrow")
          .filter(
            (arrow) =>
              (elementsMap.get(arrow.id) as ExcalidrawArrowElement).startBinding
                ?.elementId === sourceElement?.id,
          );

        tempRate /= sourceElementOutgoingArrows?.length || 1;

        rate += tempRate;
      } else if (sourceElement?.type === "merger") {
        rate += getSplitterIncomingRate(
          0,
          sourceElement,
          elementsMap,
          "merger",
        );
      } else if (sourceElement) {
        rate += getBuildingRate(
          sourceElement as ExcalidrawOverclockableElement,
        );
      }
    }
  }

  return rate;
};
