import clsx from "clsx";
import { t } from "../i18n";
import {
  ArrowsCrossIcon,
  ArrowsMergeIcon,
  ArrowsSplitIcon,
  boltIcon,
  BottleIcon,
  BuildingFactoryIcon,
  DropletIcon,
  FlameIcon,
  GasIcon,
  OilIcon,
  ResourceNodeIcon,
} from "./icons";
import { ToolButton } from "./ToolButton";
import { AppClassProperties, UIAppState } from "../types";
import { capitalizeString } from "../utils";
import { trackEvent } from "../analytics";

const SHAPES = [
  {
    icon: ResourceNodeIcon,
    value: "resourceNode",
    fillable: true,
  },
  {
    icon: ArrowsSplitIcon,
    value: "splitter",
    fillable: true,
  },
  {
    icon: ArrowsMergeIcon,
    value: "merger",
    fillable: true,
  },
  {
    icon: ArrowsCrossIcon,
    value: "pipe",
    fillable: true,
  },
  {
    icon: BuildingFactoryIcon,
    value: "constructor",
    fillable: true,
  },
  {
    icon: BuildingFactoryIcon,
    value: "assembler",
    fillable: true,
  },
  {
    icon: BuildingFactoryIcon,
    value: "manufacturer",
    fillable: true,
  },
  {
    icon: FlameIcon,
    value: "smelter",
    fillable: true,
  },
  {
    icon: FlameIcon,
    value: "foundry",
    fillable: true,
  },
  {
    icon: boltIcon,
    value: "coalGenerator",
    fillable: true,
  },
  {
    icon: boltIcon,
    value: "fuelGenerator",
    fillable: true,
  },
  {
    icon: BottleIcon,
    value: "packager",
    fillable: true,
  },
  {
    icon: GasIcon,
    value: "oilRefinery",
    fillable: true,
  },
  {
    icon: DropletIcon,
    value: "waterExtractor",
    fillable: true,
  },
  {
    icon: OilIcon,
    value: "oilExtractor",
    fillable: true,
  },
] as const;

export const SatisfactoryToolbar = ({
  activeTool,
  appState,
  app,
}: {
  activeTool: UIAppState["activeTool"];
  appState: UIAppState;
  app: AppClassProperties;
}) => {
  return (
    <>
      {SHAPES.map(({ value, icon, fillable }, index) => {
        const label = t(`toolBar.${value}`);

        return (
          <ToolButton
            className={clsx("Shape", { fillable })}
            key={value}
            type="radio"
            icon={icon}
            checked={activeTool.type === value}
            name="editor-current-shape"
            title={`${capitalizeString(label)}`}
            aria-label={capitalizeString(label)}
            data-testid={`toolbar-${value}`}
            onPointerDown={({ pointerType }) => {
              if (!appState.penDetected && pointerType === "pen") {
                app.togglePenMode(true);
              }
            }}
            onChange={() => {
              if (appState.activeTool.type !== value) {
                trackEvent("toolbar", value, "ui");
              }

              app.setActiveTool({ type: value });
            }}
          />
        );
      })}
    </>
  );
};
