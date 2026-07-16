"use client";

import { MonitorIcon, PaperPlaneTiltIcon, FileArrowUpIcon } from "@phosphor-icons/react";

import { fontOptions } from "@/shared/constants";
import { useCreateBot } from "../hooks/useCreateBot";

export function ConfigurationPreview() {
  const { config } = useCreateBot();

  return (
    <div className="flex flex-col justify-start h-full flex-1">
      <div className="flex items-center gap-2">
        <MonitorIcon size={32} />
        <h2 className="text-2xl">Preview</h2>
      </div>

      <div
        style={{
          fontFamily: fontOptions.find((f) => f.key == config.typography)?.fontFamily,
        }}
        className="flex flex-col mt-18 justify-between items-center w-full h-full "
      >
        <div className="flex flex-col justify-between h-full w-full max-w-96 ">
          <div
            style={{ backgroundColor: config.primaryColor }}
            className="flex items-center p-2 rounded-t-2xl"
          >
            <img className="w-14 h-14" src={config.avatar || "/assets/logo.png"} alt="bot logo" />

            <div className="flex flex-col ml-2">
              <p style={{ color: config.textColor }} className="text-2xl font-semibold">
                {config.botName}
              </p>

              <span style={{ color: config.textColor }} className="text-lg">
                {config.description}
              </span>
            </div>
          </div>

          <div className="p-2 flex flex-col gap-4 justify-end h-full bg-zinc-300">
            <div
              style={{
                backgroundColor: config.primaryColor,
                borderRadius: `${config.borderRoundness}px`,
              }}
              className="p-4 mr-18 relative"
            >
              <p className="mb-2 font-semibold" style={{ color: config.textColor }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maximus ullamcorper
                nisl.
              </p>

              <small
                style={{ color: config.textColor }}
                className="absolute bottom-1 right-4 opacity-70"
              >
                10:40 AM
              </small>
            </div>

            <div
              style={{
                backgroundColor: config.secondaryColor,
                borderRadius: `${config.borderRoundness}px`,
              }}
              className="p-4 ml-18 relative"
            >
              <p className="mb-2 font-semibold" style={{ color: config.textColor }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maximus ullamcorper
                nisl.
              </p>

              <small
                style={{ color: config.textColor }}
                className="absolute bottom-1 left-4 opacity-70"
              >
                10:40 AM
              </small>
            </div>
          </div>

          <div
            style={{ borderColor: config.primaryColor, backgroundColor: config.primaryColor }}
            className="flex items-center gap-4 py-2 px-4 border-t rounded-b-2xl"
          >
            <FileArrowUpIcon color={config.textColor} size={28} weight="bold" />

            <div
              className={`border rounded-md w-full h-8`}
              style={{ borderColor: config.textColor }}
            >
              <p
                style={{ color: config.textColor, border: config.textColor }}
                className="pl-2 mt-0.5 opacity-60 font-semibold"
              >
                Write something...
              </p>
            </div>

            <PaperPlaneTiltIcon color={config.textColor} size={28} weight="bold" />
          </div>
        </div>
      </div>
    </div>
  );
}
