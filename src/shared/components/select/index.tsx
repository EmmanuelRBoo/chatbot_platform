"use client";

import { useState, useRef } from "react";
import { CaretUpIcon, CaretDownIcon } from "@phosphor-icons/react";
import { useClickAway } from "react-use";

import type { SelectProps } from "./types";

export function Select(props: SelectProps) {
  const [open, setOpen] = useState<boolean>(false);

  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

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

  const onSelect = (value: string) => {
    if (props.multi) {
      props.onSelect([value, ...props.value]);
    } else {
      setOpen(false);
      props.onSelect(value);
    }
  };

  const renderOptions = () => {
    const opt = props.options.filter((f) => !props.value.includes(f.key));

    if (opt.length === 0) {
      return <p className="p-1">No options found</p>;
    }

    return opt.map((o) => (
      <li
        key={o.key}
        className="first:rounded-t-sm last:rounded-b-sm py-2 px-4 bg-gscale-400 cursor-pointer hover:bg-gscale-300"
        onClick={() => onSelect(o.key)}
      >
        {typeof o.label == "string" ? <p>{o.label}</p> : o.label}
      </li>
    ));
  };

  const renderLabel = () => {
    if (props.value.length === 0) {
      return <p>{props.placeholder || "Select an option"}</p>;
    }

    if (props.multi) {
      const value = props.value as string[];
      return (
        <p>
          {value.map((v) => (
            <span
              key={v}
              onClick={(e) => {
                e.stopPropagation();
                props.onSelect(value.filter((f) => f !== v));
              }}
            >
              {props.options.find((f) => f.key === v)?.label}
            </span>
          ))}
        </p>
      );
    }

    return <p>{props.options.find((f) => f.key === props.value)?.label}</p>;
  };

  return (
    <div ref={ref} className="w-full font-semibold relative">
      <p className={getFont()}>{props.label}</p>

      <div
        onClick={(e) => {
          e.stopPropagation();
          setOpen((o) => !o);
        }}
        className={`w-full cursor-pointer mt-2 flex items-center justify-between rounded-sm bg-gscale-400 py-3 px-8 focus:border focus:border-primary-200 ${getSize()}`}
      >
        {renderLabel()}

        {open ? <CaretUpIcon size={20} weight="bold" /> : <CaretDownIcon size={20} weight="bold" />}
      </div>

      {open && (
        <ul className="border border-primary-300 absolute w-full mt-1 rounded-sm max-h-60 overflow-auto">
          {renderOptions()}
        </ul>
      )}
    </div>
  );
}
