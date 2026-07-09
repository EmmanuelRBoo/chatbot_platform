"use client";

import Link from "next/link";
import { ArrowLeftIcon } from "@phosphor-icons/react/dist/ssr";

import { useCreateBot } from "../hooks/useCreateBot";
import { StageCard } from "./";

export function CreateBotHeader() {
  const { stage } = useCreateBot();

  return (
    <header className="p-4 relative">
      <Link
        href="/dashboard"
        className="text-primary-100 hover:text-primary-200 w-fit flex items-center gap-4 text-2xl"
      >
        <ArrowLeftIcon size={24} weight="bold" />

        <p>Agent Creation</p>
      </Link>

      <nav className="absolute -translate-1/2 top-1/2 left-1/2 mt-1">
        <div className="flex items-center gap-8">
          <StageCard name="Prompt" stage={1} selected={stage == 1} />

          <div className="w-24 h-0.5 bg-gscale-400" />

          <StageCard name="Diagram" stage={2} selected={stage == 2} />

          <div className="w-24 h-0.5 bg-gscale-400" />

          <StageCard name="Configuration" stage={3} selected={stage == 3} />
        </div>
      </nav>
    </header>
  );
}
