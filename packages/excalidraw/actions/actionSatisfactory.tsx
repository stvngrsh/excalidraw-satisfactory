import { useState } from "react";
import { DEFAULT_CANVAS_BACKGROUND_PICKS } from "../colors";
import { ColorPicker } from "../components/ColorPicker/ColorPicker";
import { languages, t } from "../i18n";
import { StoreAction } from "../store";
import { register } from "./register";
import DropdownMenu from "../components/dropdownMenu/DropdownMenu";
import { arrayToMap } from "../utils";
import { changeProperty, getFormValue } from "./actionProperties";
import { newElementWith } from "../element/mutateElement";
import {
  ExcalidrawAssemblerElement,
  ExcalidrawCoalGeneratorElement,
  ExcalidrawConstructorElement,
  ExcalidrawFoundryElement,
  ExcalidrawFuelGeneratorElement,
  ExcalidrawManufacturerElement,
  ExcalidrawOilRefineryElement,
  ExcalidrawOverclockableElement,
  ExcalidrawPackagerElement,
  ExcalidrawResourceNodeElement,
  ExcalidrawSmelterElement,
  ExcalidrawSplitterElement,
  ExcalidrawPipeElement,
} from "../element/types";
import {
  resourcePurities,
  minerTiers,
  resourceTypes,
} from "../satisfactoryTypes/resourceNode";
import { constructorRecipes } from "../satisfactoryTypes/constructor";
import { assemblerRecipes } from "../satisfactoryTypes/assembler";
import { manufacturerRecipes } from "../satisfactoryTypes/manufacturer";
import { smelterRecipes } from "../satisfactoryTypes/smelter";
import { foundryRecipes } from "../satisfactoryTypes/foundry";
import { coalGeneratorFuels } from "../satisfactoryTypes/coalGenerator";
import { fuelGeneratorFuels } from "../satisfactoryTypes/fuelGenerator";
import { refineryRecipes } from "../satisfactoryTypes/refineryRecipes";
import { packagerRecipes } from "../satisfactoryTypes/packager";
import { ButtonIconSelect } from "../components/ButtonIconSelect";
import {
  ArrowsForkIcon,
  ArrowsManifoldIcon,
  StrokeStyleDashedIcon,
} from "../components/icons";

export const actionClockSpeed = register({
  name: "changeClockSpeed",
  label: "labels.clockSpeed",
  paletteName: "Change clock speed",
  trackEvent: false,
  perform: (elements, appState, value) => {
    return {
      ...(value.currentItemClockSpeed && {
        elements: changeProperty(elements, appState, (el) =>
          newElementWith<ExcalidrawOverclockableElement>(
            el as ExcalidrawOverclockableElement,
            {
              clockSpeed: value.currentItemClockSpeed,
            },
          ),
        ),
      }),
      appState: {
        ...appState,
        ...value,
      },
      storeAction: StoreAction.CAPTURE,
    };
  },
  PanelComponent: ({ elements, appState, updateData, appProps }) => {
    return (
      <label className="control-label">
        {t("labels.clockSpeed")}
        <input
          type="range"
          min="0"
          max="250"
          step="1"
          onChange={(event) =>
            updateData({ currentItemClockSpeed: +event.target.value })
          }
          value={
            getFormValue(
              elements,
              appState,
              (element) =>
                (element as ExcalidrawOverclockableElement).clockSpeed,
              true,
              appState.currentItemClockSpeed,
            ) ?? undefined
          }
        />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <input
            type="number"
            value={
              getFormValue(
                elements,
                appState,
                (element) =>
                  (element as ExcalidrawOverclockableElement).clockSpeed,
                true,
                appState.currentItemClockSpeed,
              ) ?? undefined
            }
            onChange={(event) => {
              updateData({ currentItemClockSpeed: +event.target.value });
            }}
          />
          <button onClick={() => updateData({ currentItemClockSpeed: 100 })}>
            {t("labels.reset")}
          </button>
        </div>
      </label>
    );
  },
});

export const actionChangeResourceNodeResourceType = register({
  name: "changeResourceNodeResourceType",
  label: "labels.changeResourceNodeResourceType",
  paletteName: "Change resource node resource type",
  trackEvent: false,
  perform: (elements, appState, value) => {
    return {
      ...(value.currentItemResourceType && {
        elements: changeProperty(elements, appState, (el) =>
          newElementWith<ExcalidrawResourceNodeElement>(
            el as ExcalidrawResourceNodeElement,
            {
              resourceNodeResourceType: value.currentItemResourceType,
            },
          ),
        ),
      }),
      appState: {
        ...appState,
        ...value,
      },
      storeAction: StoreAction.CAPTURE,
    };
  },
  PanelComponent: ({ elements, appState, updateData, appProps }) => {
    return (
      <fieldset>
        <legend>{t("labels.resourceNodeResourceType")}</legend>

        <select
          className="dropdown-select"
          onChange={({ target }) =>
            updateData({ currentItemResourceType: target.value })
          }
          value={getFormValue(
            elements,
            appState,
            (element) =>
              (element as ExcalidrawResourceNodeElement)
                .resourceNodeResourceType,
            true,
            (hasSelection) =>
              hasSelection ? "" : appState.currentItemResourceType,
          )}
          aria-label={t("labels.resourceNodeResourceType")}
          style={{ width: "100%" }}
        >
          {resourceTypes.map((type) => (
            <option key={type.type} value={type.type}>
              {type.name}
            </option>
          ))}
        </select>
      </fieldset>
    );
  },
});

export const actionChangeResourceNodeResourcePurity = register({
  name: "changeResourceNodeResourcePurity",
  label: "labels.changeResourceNodeResourcePurity",
  paletteName: "Change resource node resource purity",
  trackEvent: false,
  perform: (elements, appState, value) => {
    return {
      ...(value.currentItemResourcePurity && {
        elements: changeProperty(elements, appState, (el) =>
          newElementWith<ExcalidrawResourceNodeElement>(
            el as ExcalidrawResourceNodeElement,
            {
              resourceNodeResourcePurity: value.currentItemResourcePurity,
            },
          ),
        ),
      }),
      appState: {
        ...appState,
        ...value,
      },
      storeAction: StoreAction.CAPTURE,
    };
  },
  PanelComponent: ({ elements, appState, updateData, appProps }) => {
    return (
      <fieldset>
        <legend>{t("labels.resourceNodeResourcePurity")}</legend>

        <select
          className="dropdown-select"
          onChange={({ target }) =>
            updateData({ currentItemResourcePurity: target.value })
          }
          value={getFormValue(
            elements,
            appState,
            (element) =>
              (element as ExcalidrawResourceNodeElement)
                .resourceNodeResourcePurity,
            true,
            (hasSelection) =>
              hasSelection ? "" : appState.currentItemResourcePurity,
          )}
          aria-label={t("labels.resourceNodeResourcePurity")}
          style={{ width: "100%" }}
        >
          {resourcePurities.map((type) => (
            <option key={type.purity} value={type.purity}>
              {type.name}
            </option>
          ))}
        </select>
      </fieldset>
    );
  },
});

export const actionChangeResourceNodeMinerTier = register({
  name: "changeResourceNodeMinerTier",
  label: "labels.changeResourceNodeMinerTier",
  paletteName: "Change resource node miner tier",
  trackEvent: false,
  perform: (elements, appState, value) => {
    return {
      ...(value.currentItemMinerTier && {
        elements: changeProperty(elements, appState, (el) =>
          newElementWith<ExcalidrawResourceNodeElement>(
            el as ExcalidrawResourceNodeElement,
            {
              resourceNodeMinerTier: value.currentItemMinerTier,
            },
          ),
        ),
      }),
      appState: {
        ...appState,
        ...value,
      },
      storeAction: StoreAction.CAPTURE,
    };
  },
  PanelComponent: ({ elements, appState, updateData, appProps }) => {
    return (
      <fieldset>
        <legend>{t("labels.resourceNodeMinerTier")}</legend>

        <select
          className="dropdown-select"
          onChange={({ target }) =>
            updateData({ currentItemMinerTier: target.value })
          }
          value={getFormValue(
            elements,
            appState,
            (element) =>
              (element as ExcalidrawResourceNodeElement).resourceNodeMinerTier,
            true,
            (hasSelection) =>
              hasSelection ? "" : appState.currentItemMinerTier,
          )}
          aria-label={t("labels.resourceNodeMinerTier")}
          style={{ width: "100%" }}
        >
          {minerTiers.map((type) => (
            <option key={type.tier} value={type.tier}>
              {type.name}
            </option>
          ))}
        </select>
      </fieldset>
    );
  },
});

export const actionChangeConstructorRecipe = register({
  name: "changeConstructorRecipe",
  label: "labels.recipe",
  paletteName: "Change constructor recipe",
  trackEvent: false,
  perform: (elements, appState, value) => {
    return {
      ...(value.currentItemRecipe && {
        elements: changeProperty(elements, appState, (el) =>
          newElementWith<ExcalidrawConstructorElement>(
            el as ExcalidrawConstructorElement,
            {
              recipe: value.currentItemRecipe,
            },
          ),
        ),
      }),
      appState: {
        ...appState,
        ...value,
      },
      storeAction: StoreAction.CAPTURE,
    };
  },
  PanelComponent: ({ elements, appState, updateData, appProps }) => {
    return (
      <fieldset>
        <legend>{t("labels.recipe")}</legend>

        <select
          className="dropdown-select"
          onChange={({ target }) =>
            updateData({ currentItemRecipe: target.value })
          }
          value={getFormValue(
            elements,
            appState,
            (element) => (element as ExcalidrawConstructorElement).recipe,
            true,
            (hasSelection) =>
              hasSelection ? "" : appState.currentItemConstructorRecipe,
          )}
          aria-label={t("labels.recipe")}
          style={{ width: "100%" }}
        >
          {constructorRecipes.map((recipe, i) => (
            <option key={recipe.id} value={recipe.id}>
              {recipe.title}
            </option>
          ))}
        </select>
      </fieldset>
    );
  },
});

export const actionChangeAssemblerRecipe = register({
  name: "changeAssemblerRecipe",
  label: "labels.recipe",
  paletteName: "Change assembler recipe",
  trackEvent: false,
  perform: (elements, appState, value) => {
    return {
      ...(value.currentItemAssemblerRecipe && {
        elements: changeProperty(elements, appState, (el) =>
          newElementWith<ExcalidrawAssemblerElement>(
            el as ExcalidrawAssemblerElement,
            {
              recipe: value.currentItemAssemblerRecipe,
            },
          ),
        ),
      }),
      appState: {
        ...appState,
        ...value,
      },
      storeAction: StoreAction.CAPTURE,
    };
  },
  PanelComponent: ({ elements, appState, updateData, appProps }) => {
    return (
      <fieldset>
        <legend>{t("labels.recipe")}</legend>

        <select
          className="dropdown-select"
          onChange={({ target }) =>
            updateData({ currentItemAssemblerRecipe: target.value })
          }
          value={getFormValue(
            elements,
            appState,
            (element) => (element as ExcalidrawAssemblerElement).recipe,
            true,
            (hasSelection) =>
              hasSelection ? "" : appState.currentItemAssemblerRecipe,
          )}
          aria-label={t("labels.recipe")}
          style={{ width: "100%" }}
        >
          {assemblerRecipes.map((recipe, i) => (
            <option key={recipe.id} value={recipe.id}>
              {recipe.title}
            </option>
          ))}
        </select>
      </fieldset>
    );
  },
});

export const actionChangeManufacturerRecipe = register({
  name: "changeManufacturerRecipe",
  label: "labels.recipe",
  paletteName: "Change manufacturer recipe",
  trackEvent: false,
  perform: (elements, appState, value) => {
    return {
      ...(value.currentItemRecipe && {
        elements: changeProperty(elements, appState, (el) =>
          newElementWith<ExcalidrawManufacturerElement>(
            el as ExcalidrawManufacturerElement,
            {
              recipe: value.currentItemRecipe,
            },
          ),
        ),
      }),
      appState: {
        ...appState,
        ...value,
      },
      storeAction: StoreAction.CAPTURE,
    };
  },
  PanelComponent: ({ elements, appState, updateData, appProps }) => {
    return (
      <fieldset>
        <legend>{t("labels.recipe")}</legend>

        <select
          className="dropdown-select"
          onChange={({ target }) =>
            updateData({ currentItemRecipe: target.value })
          }
          value={getFormValue(
            elements,
            appState,
            (element) => (element as ExcalidrawManufacturerElement).recipe,
            true,
            (hasSelection) =>
              hasSelection ? "" : appState.currentItemManufacturerRecipe,
          )}
          aria-label={t("labels.recipe")}
          style={{ width: "100%" }}
        >
          {manufacturerRecipes.map((recipe, i) => (
            <option key={recipe.id} value={recipe.id}>
              {recipe.title}
            </option>
          ))}
        </select>
      </fieldset>
    );
  },
});

export const actionChangeSmelterRecipe = register({
  name: "changeSmelterRecipe",
  label: "labels.recipe",
  paletteName: "Change smelter recipe",
  trackEvent: false,
  perform: (elements, appState, value) => {
    return {
      ...(value.currentItemRecipe && {
        elements: changeProperty(elements, appState, (el) =>
          newElementWith<ExcalidrawSmelterElement>(
            el as ExcalidrawSmelterElement,
            {
              recipe: value.currentItemRecipe,
            },
          ),
        ),
      }),
      appState: {
        ...appState,
        ...value,
      },
      storeAction: StoreAction.CAPTURE,
    };
  },
  PanelComponent: ({ elements, appState, updateData, appProps }) => {
    return (
      <fieldset>
        <legend>{t("labels.recipe")}</legend>

        <select
          className="dropdown-select"
          onChange={({ target }) =>
            updateData({ currentItemRecipe: target.value })
          }
          value={getFormValue(
            elements,
            appState,
            (element) => (element as ExcalidrawSmelterElement).recipe,
            true,
            (hasSelection) =>
              hasSelection ? "" : appState.currentItemSmelterRecipe,
          )}
          aria-label={t("labels.recipe")}
          style={{ width: "100%" }}
        >
          {smelterRecipes.map((recipe, i) => (
            <option key={recipe.id} value={recipe.id}>
              {recipe.title}
            </option>
          ))}
        </select>
      </fieldset>
    );
  },
});

export const actionChangeFoundryRecipe = register({
  name: "changeFoundryRecipe",
  label: "labels.recipe",
  paletteName: "Change foundry recipe",
  trackEvent: false,
  perform: (elements, appState, value) => {
    return {
      ...(value.currentItemRecipe && {
        elements: changeProperty(elements, appState, (el) =>
          newElementWith<ExcalidrawFoundryElement>(
            el as ExcalidrawFoundryElement,
            {
              recipe: value.currentItemRecipe,
            },
          ),
        ),
      }),
      appState: {
        ...appState,
        ...value,
      },
      storeAction: StoreAction.CAPTURE,
    };
  },
  PanelComponent: ({ elements, appState, updateData, appProps }) => {
    return (
      <fieldset>
        <legend>{t("labels.recipe")}</legend>

        <select
          className="dropdown-select"
          onChange={({ target }) =>
            updateData({ currentItemRecipe: target.value })
          }
          value={getFormValue(
            elements,
            appState,
            (element) => (element as ExcalidrawFoundryElement).recipe,
            true,
            (hasSelection) =>
              hasSelection ? "" : appState.currentItemFoundryRecipe,
          )}
          aria-label={t("labels.recipe")}
          style={{ width: "100%" }}
        >
          {foundryRecipes.map((recipe, i) => (
            <option key={recipe.id} value={recipe.id}>
              {recipe.title}
            </option>
          ))}
        </select>
      </fieldset>
    );
  },
});

export const actionChangeOilRefineryRecipe = register({
  name: "changeOilRefineryRecipe",
  label: "labels.recipe",
  paletteName: "Change oilRefinery recipe",
  trackEvent: false,
  perform: (elements, appState, value) => {
    return {
      ...(value.currentItemRecipe && {
        elements: changeProperty(elements, appState, (el) =>
          newElementWith<ExcalidrawOilRefineryElement>(
            el as ExcalidrawOilRefineryElement,
            {
              recipe: value.currentItemRecipe,
            },
          ),
        ),
      }),
      appState: {
        ...appState,
        ...value,
      },
      storeAction: StoreAction.CAPTURE,
    };
  },
  PanelComponent: ({ elements, appState, updateData, appProps }) => {
    return (
      <fieldset>
        <legend>{t("labels.recipe")}</legend>

        <select
          className="dropdown-select"
          onChange={({ target }) =>
            updateData({ currentItemRecipe: target.value })
          }
          value={getFormValue(
            elements,
            appState,
            (element) => (element as ExcalidrawOilRefineryElement).recipe,
            true,
            (hasSelection) =>
              hasSelection ? "" : appState.currentItemRefineryRecipe,
          )}
          aria-label={t("labels.recipe")}
          style={{ width: "100%" }}
        >
          {refineryRecipes.map((recipe, i) => (
            <option key={recipe.id} value={recipe.id}>
              {recipe.title}
            </option>
          ))}
        </select>
      </fieldset>
    );
  },
});

export const actionChangePackagerRecipe = register({
  name: "changePackagerRecipe",
  label: "labels.recipe",
  paletteName: "Change packager recipe",
  trackEvent: false,
  perform: (elements, appState, value) => {
    return {
      ...(value.currentItemRecipe && {
        elements: changeProperty(elements, appState, (el) =>
          newElementWith<ExcalidrawPackagerElement>(
            el as ExcalidrawPackagerElement,
            {
              recipe: value.currentItemRecipe,
            },
          ),
        ),
      }),
      appState: {
        ...appState,
        ...value,
      },
      storeAction: StoreAction.CAPTURE,
    };
  },
  PanelComponent: ({ elements, appState, updateData, appProps }) => {
    return (
      <fieldset>
        <legend>{t("labels.recipe")}</legend>

        <select
          className="dropdown-select"
          onChange={({ target }) =>
            updateData({ currentItemRecipe: target.value })
          }
          value={getFormValue(
            elements,
            appState,
            (element) => (element as ExcalidrawPackagerElement).recipe,
            true,
            (hasSelection) =>
              hasSelection ? "" : appState.currentItemPackagerRecipe,
          )}
          aria-label={t("labels.recipe")}
          style={{ width: "100%" }}
        >
          {packagerRecipes.map((recipe, i) => (
            <option key={recipe.id} value={recipe.id}>
              {recipe.title}
            </option>
          ))}
        </select>
      </fieldset>
    );
  },
});

export const actionChangeCoalGeneratorFuel = register({
  name: "changeCoalGeneratorFuel",
  label: "labels.recipe",
  paletteName: "Change coal generator fuel",
  trackEvent: false,
  perform: (elements, appState, value) => {
    return {
      ...(value.currentItemFuel && {
        elements: changeProperty(elements, appState, (el) =>
          newElementWith<ExcalidrawCoalGeneratorElement>(
            el as ExcalidrawCoalGeneratorElement,
            {
              fuel: value.currentItemFuel,
            },
          ),
        ),
      }),
      appState: {
        ...appState,
        ...value,
      },
      storeAction: StoreAction.CAPTURE,
    };
  },
  PanelComponent: ({ elements, appState, updateData, appProps }) => {
    return (
      <fieldset>
        <legend>{t("labels.recipe")}</legend>

        <select
          className="dropdown-select"
          onChange={({ target }) =>
            updateData({ currentItemFuel: target.value })
          }
          value={getFormValue(
            elements,
            appState,
            (element) => (element as ExcalidrawCoalGeneratorElement).fuel,
            true,
            (hasSelection) =>
              hasSelection ? "" : appState.currentItemCoalGeneratorFuel,
          )}
          aria-label={t("labels.recipe")}
          style={{ width: "100%" }}
        >
          {coalGeneratorFuels.map((fuel, i) => (
            <option key={fuel.id} value={fuel.id}>
              {fuel.input.item}
            </option>
          ))}
        </select>
      </fieldset>
    );
  },
});

export const actionChangeFuelGeneratorFuel = register({
  name: "changeFuelGeneratorFuel",
  label: "labels.recipe",
  paletteName: "Change fuel generator fuel",
  trackEvent: false,
  perform: (elements, appState, value) => {
    return {
      ...(value.currentItemFuel && {
        elements: changeProperty(elements, appState, (el) =>
          newElementWith<ExcalidrawFuelGeneratorElement>(
            el as ExcalidrawFuelGeneratorElement,
            {
              fuel: value.currentItemFuel,
            },
          ),
        ),
      }),
      appState: {
        ...appState,
        ...value,
      },
      storeAction: StoreAction.CAPTURE,
    };
  },
  PanelComponent: ({ elements, appState, updateData, appProps }) => {
    return (
      <fieldset>
        <legend>{t("labels.recipe")}</legend>

        <select
          className="dropdown-select"
          onChange={({ target }) =>
            updateData({ currentItemFuel: target.value })
          }
          value={getFormValue(
            elements,
            appState,
            (element) => (element as ExcalidrawFuelGeneratorElement).fuel,
            true,
            (hasSelection) =>
              hasSelection ? "" : appState.currentItemFuelGeneratorFuel,
          )}
          aria-label={t("labels.recipe")}
          style={{ width: "100%" }}
        >
          {fuelGeneratorFuels.map((fuel, i) => (
            <option key={fuel.id} value={fuel.id}>
              {fuel.input.item}
            </option>
          ))}
        </select>
      </fieldset>
    );
  },
});

export const actionChangeSplitterMode = register({
  name: "changeSplitterMode",
  label: "labels.splitterMode",
  trackEvent: false,
  perform: (elements, appState, value) => {
    return {
      elements: changeProperty(elements, appState, (el) =>
        newElementWith<ExcalidrawSplitterElement>(
          el as ExcalidrawSplitterElement,
          {
            mode: value,
          },
        ),
      ),
      appState: { ...appState, currentItemSplitterMode: value },
      storeAction: StoreAction.CAPTURE,
    };
  },
  PanelComponent: ({ elements, appState, updateData }) => (
    <fieldset>
      <legend>{t("labels.splitterMode")}</legend>
      <ButtonIconSelect
        group="splitterMode"
        options={[
          {
            value: "balance",
            text: t("labels.balance"),
            icon: ArrowsForkIcon,
          },
          {
            value: "manifold",
            text: t("labels.manifold"),
            icon: ArrowsManifoldIcon,
          },
        ]}
        value={getFormValue(
          elements,
          appState,
          (element) => (element as ExcalidrawSplitterElement).mode,
          true,
          (hasSelection) =>
            hasSelection ? null : appState.currentItemSplitterMode,
        )}
        onChange={(value) => updateData(value)}
      />
    </fieldset>
  ),
});
