"use client";

import type { ToggleProps } from "./types";

export function Toggle(props: ToggleProps) {
  return (
    <div
      className={`cursor-pointer h-10 relative transition-all duration-300 flex w-20 rounded-4xl p-1 ${props.value ? "bg-secondary-400" : "bg-gscale-300"}`}
      onClick={() => props.onChange(!props.value)}
    >
      <div
        className={`w-8 h-8 absolute transition-all duration-300 rounded-full bg-gscale-400 ${props.value ? "translate-x-10" : "translate-x-0"}`}
      ></div>
    </div>
  );
}
