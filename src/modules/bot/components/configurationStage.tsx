import { PaletteIcon } from "@phosphor-icons/react/ssr";

import { Input, Avatar, Select, Range } from "@/shared/components";
import { fontOptions } from "@/shared/constants";

import { useCreateBot } from "../hooks/useCreateBot";
import { ConfigurationPreview } from "./configurationPreview";

export function ConfigurationStage() {
  const { config, handleConfig } = useCreateBot();

  return (
    <section className="text-primary-100 flex w-full h-full min-h-0 gap-8 items-start justify-between px-8 min-w-0">
      <div className="flex flex-col w-2/5 min-h-0 gap-4">
        <div className="flex items-center flex-1 gap-2">
          <PaletteIcon size={32} />
          <h2 className="text-2xl mb-1">Customize</h2>
        </div>

        <div className="flex items-center gap-8 flex-1">
          <Avatar
            label="Avatar"
            defaultValue={config.avatar}
            setImage={(avatar) => handleConfig({ avatar })}
          />

          <div className="flex flex-col flex-1 gap-8">
            <Input.Text
              label="Agent Name"
              name="botName"
              onChange={(botName) => handleConfig({ botName })}
              placeholder="Name your agent"
              size="small"
              value={config.botName}
            />

            <Input.Text
              label="Description"
              name="description"
              onChange={(description) => handleConfig({ description })}
              placeholder="e.g. Expert in data analysis and costume..."
              size="small"
              value={config.description}
            />
          </div>
        </div>

        <div className="flex items-start gap-8 flex-1">
          <div className="flex flex-col gap-2">
            <Input.Color
              label="Primary Color"
              name="color"
              onChange={(primaryColor) => handleConfig({ primaryColor })}
              placeholder=""
              value={config.primaryColor}
              size="small"
            />

            <Input.Color
              label="Secondary Color"
              name="color"
              onChange={(secondaryColor) => handleConfig({ secondaryColor })}
              placeholder=""
              value={config.secondaryColor}
              size="small"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Select
              label="Typography"
              onSelect={(typography) => handleConfig({ typography: typography as string })}
              options={fontOptions}
              value={config.typography}
              size="small"
            />

            <Input.Color
              label="Text Color"
              name="color"
              onChange={(textColor) => handleConfig({ textColor })}
              placeholder=""
              value={config.textColor}
              size="small"
            />
          </div>
        </div>

        <Range
          label="Chat Bubble Roundness"
          onChange={(borderRoundness) => handleConfig({ borderRoundness })}
          value={config.borderRoundness}
          max={32}
          min={0}
          renderValue={
            <span className="bg-gscale-300 py-1 w-14 text-center rounded-sm">
              {config.borderRoundness}px
            </span>
          }
        />
      </div>

      <ConfigurationPreview />
    </section>
  );
}
