"use client";

import { MonitorIcon, PlusIcon, PaperPlaneTiltIcon } from "@phosphor-icons/react";

import { fontOptions } from "@/shared/constants";
import { useCreateBot } from "../hooks/useCreateBot";
import { Avatar } from "@/shared/components";

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
        className="flex flex-col mt-18 justify-between items-center w-full h-full"
      >
        <div className="flex bg-white flex-col justify-between h-full w-full max-w-92 max-h-132 rounded-md">
          <div style={{ backgroundColor: config.secondaryColor }} className="flex items-center p-1">
            <img className="w-14 h-14" src={config.avatar || "/assets/logo.png"} alt="bot logo" />
          </div>

          <div className="p-2 flex flex-col gap-4 justify-end h-full">
            <div
              style={{
                backgroundColor: config.secondaryColor,
                borderRadius: `${config.borderRoundness}px`,
              }}
              className="p-4 mr-18 relative"
            >
              <p className="mb-2" style={{ color: config.textColor }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maximus ullamcorper
                nisl. Nam lacinia lacus et accumsan dictum. Praesent aliquam a dui vitae viverra.
              </p>

              <small className="absolute bottom-1 right-4">10:40 AM</small>
            </div>

            <div
              style={{
                backgroundColor: config.primaryColor,
                borderRadius: `${config.borderRoundness}px`,
              }}
              className="p-4 ml-18 relative"
            >
              <p className="mb-2" style={{ color: config.textColor }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maximus ullamcorper
                nisl. Nam lacinia lacus et accumsan dictum. Praesent aliquam a dui vitae viverra.
              </p>

              <small className="absolute bottom-1 left-4">10:40 AM</small>
            </div>
          </div>

          <div
            style={{ borderColor: config.primaryColor }}
            className="flex items-center gap-4 p-2 border-t"
          >
            <PlusIcon color={config.primaryColor} size={28} weight="bold" />

            <div
              className={`border-2 rounded-md w-full h-8`}
              style={{ borderColor: config.primaryColor }}
            >
              <p className="pl-2 mt-0.5 text-zinc-600">Write something...</p>
            </div>

            <PaperPlaneTiltIcon color={config.primaryColor} size={28} weight="bold" />
          </div>
        </div>
      </div>
    </div>
  );
}
