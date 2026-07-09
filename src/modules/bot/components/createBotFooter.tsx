"use client";

import {
  ArrowLeftIcon,
  ArrowRightIcon,
  RocketLaunchIcon,
  DownloadSimpleIcon,
  FloppyDiskBackIcon,
} from "@phosphor-icons/react";

import { Button } from "@/shared/components";
import { useCreateBot } from "../hooks/useCreateBot";
import type { CreateBotFooterProps } from "../types/createBot";

export function CreateBotFooter() {
  const { stage, fetchPromptStage, prevStage, loading } = useCreateBot();

  const stages: Record<string, CreateBotFooterProps> = {
    "1": {
      title: (
        <>
          <p>Next: Create Diagram</p> <ArrowRightIcon size={24} weight="bold" />
        </>
      ),
      action: fetchPromptStage,
    },
    "2": {
      title: (
        <>
          <p>Next: Customize Style</p> <ArrowRightIcon size={24} weight="bold" />
        </>
      ),
      action: fetchPromptStage,
    },
    "3": {
      title: (
        <>
          <p>Finalize & Publish</p> <RocketLaunchIcon size={24} weight="bold" />
        </>
      ),
      action: fetchPromptStage,
    },
  };

  const secondBtn: Record<string, CreateBotFooterProps> = {
    "2": {
      title: (
        <>
          <DownloadSimpleIcon size={24} weight="bold" /> <p>Export Diagram</p>
        </>
      ),
      action: () => {},
    },
    "3": {
      title: (
        <>
          <FloppyDiskBackIcon size={24} weight="bold" /> <p>Save Draft</p>
        </>
      ),
      action: () => {},
    },
  };

  return (
    <footer className="flex justify-between p-4">
      {stage > 1 && (
        <div
          onClick={prevStage}
          className="flex items-center gap-2 text-primary-100 cursor-pointer text-lg hover:text-primary-200"
        >
          <ArrowLeftIcon size={24} weight="bold" />

          <p>Back to previous stage</p>
        </div>
      )}

      <div className="ml-auto flex items-center gap-8">
        {stage >= 2 && (
          <Button loading={loading} variant="secondary" onClick={secondBtn[String(stage)].action}>
            {secondBtn[String(stage)].title}
          </Button>
        )}

        <Button loading={loading} variant="light" onClick={stages[String(stage)].action} shadow>
          {stages[String(stage)].title}
        </Button>
      </div>
    </footer>
  );
}
