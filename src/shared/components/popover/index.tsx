"use client";

import { useState } from "react";

import type { PopoverProps } from "./types";

export function Popover(props: PopoverProps) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseLeave={() => setHover(false)}
      onMouseEnter={() => setHover(true)}
      className="relative w-fit"
    >
      {hover && (
        <div className="absolute -top-6 -translate-1/2 left-1/2 bg-gscale-600 p-2 rounded-md text-nowrap">
          {props.text}
        </div>
      )}

      {props.children}
    </div>
  );
}
