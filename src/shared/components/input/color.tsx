"use client";

import { useState } from "react";

import type { ColorProps } from "./types";

export default function Color(props: ColorProps) {
  const [value, setValue] = useState<string>(props.value || "#fff");

  const getSize = () => {
    switch (props.size) {
      case "small":
        return "max-h-10";
      case "default":
        return "max-h-13";
      default:
        return "max-h-13";
    }
  };

  const getColorSize = () => {
    switch (props.size) {
      case "small":
        return "h-10 w-10 min-h-10 min-w-10 max-h-10 max-w-10";
      case "default":
        return "h-13 w-13 min-h-13 min-w-13 max-h-13 max-w-13";
      default:
        return "h-13 w-13 min-h-13 min-w-13 max-h-13 max-w-13";
    }
  };

  const getFont = () => {
    switch (props.size) {
      case "small":
        return "text-base";
      case "default":
        return "text-lg";
      default:
        return "text-lg";
    }
  };

  const isValidHex = (val: string) => {
    setValue(val);
    props.onChange(val);
  };

  return (
    <label htmlFor={props.name} className="text-xl font-semibold overflow-hidden">
      <p className={getFont()}>{props.label}</p>

      <div className="flex gap-4 items-center mt-2">
        <input
          className={`${getColorSize()} cursor-pointer border-0 bg-transparent p-0 [&::-webkit-color-swatch-wrapper]:p-0 [&::-webkit-color-swatch]:rounded-md [&::-webkit-color-swatch]:border [&::-webkit-color-swatch]:border-gscale-100 [&::-moz-color-swatch]:rounded-md [&::-moz-color-swatch]:border [&::-moz-color-swatch]:border-gscale-100`}
          type="color"
          value={value}
          onChange={({ target }) => isValidHex(target.value)}
        />

        <input
          className={`rounded-sm w-full bg-gscale-400 py-3 px-8 border border-transparent focus:border-secondary-300 ${getSize()}`}
          type="text"
          value={value}
          onChange={({ target }) => isValidHex(target.value)}
        />
      </div>
    </label>
  );
}
