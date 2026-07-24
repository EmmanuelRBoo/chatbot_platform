"use client";

import {
  PaletteIcon,
  BrainIcon,
  GearIcon,
  CpuIcon,
  WebhooksLogoIcon,
} from "@phosphor-icons/react/ssr";

import { Input, Avatar, Select, Range, Toggle } from "@/shared/components";
import { fontOptions } from "@/shared/constants";

import { useCreateBot } from "../hooks/useCreateBot";
import { ConfigurationPreview } from "./configurationPreview";

export function ConfigurationStage() {
  const { config, handleConfig } = useCreateBot();

  return (
    <section className="text-primary-100 flex w-full min-h-0 gap-8 items-start justify-between px-8 min-w-0">
      <div className="flex flex-col w-5/12 h-full pr-10 gap-4 overflow-auto">
        <div className="flex items-center gap-2">
          <PaletteIcon size={32} />
          <h2 className="text-2xl mb-1">Customize</h2>
        </div>
        <div className="flex items-center gap-8">
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
              full
            />

            <Input.Text
              label="Description"
              name="description"
              onChange={(description) => handleConfig({ description })}
              placeholder="e.g. Expert in data analysis and costume..."
              size="small"
              value={config.description}
              full
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
        <div className="flex items-center gap-2 mt-12">
          <BrainIcon size={32} />
          <h2 className="text-2xl mb-1">Intelligence Settings</h2>
        </div>
        <Select
          label="LLM Selection"
          onSelect={(llm) => handleConfig({ llm: llm as string })}
          options={fontOptions}
          value={config.llm}
          size="small"
          full
        />
        <div className="flex justify-between gap-8">
          <Range
            label="Temperature"
            onChange={(temperature) => handleConfig({ temperature })}
            value={config.temperature}
            showNumbers={false}
            max={100}
            min={0}
            renderValue={
              <span className="bg-gscale-300 py-1 w-14 text-center rounded-sm">
                {config.temperature / 100}
              </span>
            }
          />
          <Range
            label="Top-P"
            onChange={(topp) => handleConfig({ topp })}
            value={config.topp}
            max={100}
            min={0}
            renderValue={
              <span className="bg-gscale-300 py-1 w-14 text-center rounded-sm">
                {config.topp / 100}
              </span>
            }
          />
        </div>

        <Input.Textarea
          label="System Instructions (Personality & Guardrails)"
          name="system"
          placeholder="You are a helpful, professional assistant named Nexus Prime. Your tone should be encouraging bit concise. Avoud technical jargon unless asked..."
          onChange={(instructions) => handleConfig({ instructions })}
          value={config.instructions}
        />
        <div className="flex items-center gap-2 mt-12">
          <GearIcon size={32} />
          <h2 className="text-2xl mb-1">Advanced configurations</h2>
        </div>
        <div className="flex items-center justify-between bg-gscale-400 gap-4 p-6 rounded-lg">
          <CpuIcon size={64} className="bg-gscale-600 p-3 rounded-lg" />

          <div>
            <p className="mb-2 text-2xl font-semibold">Long-term Memory</p>
            <span>Allows the agent to remember user preferences across sessions.</span>
          </div>

          <Toggle
            onChange={(longTermMemory) => handleConfig({ longTermMemory })}
            value={config.longTermMemory}
          />
        </div>
        <div className="flex flex-col bg-gscale-400 gap-4 p-6 rounded-lg">
          <div className="flex items-center justify-start gap-8">
            <WebhooksLogoIcon size={64} className="bg-gscale-600 p-3 rounded-lg" />

            <div>
              <p className="mb-2 text-2xl font-semibold">Event Webhooks</p>
              <span>Sync real-time data with your own servers.</span>
            </div>
          </div>

          <Input.Text
            label=""
            name=""
            variant="secondary"
            onChange={() => {}}
            placeholder="https://api.yourdomain.com/hook"
            full
          />
        </div>
      </div>

      <ConfigurationPreview />
    </section>
  );
}
