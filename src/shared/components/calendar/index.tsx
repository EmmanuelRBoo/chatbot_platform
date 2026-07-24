"use client";

import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";

import type { CalendarProps } from "./types";

import "react-datepicker/dist/react-datepicker.css";

export function Calendar(props: CalendarProps) {
  const [startDate, setStartDate] = useState<Date | undefined>(props.startDate);
  const [endDate, setEndDate] = useState<Date | undefined>(props.endDate);

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

  const getVariant = () => {
    switch (props.variant) {
      case "secondary":
        return "bg-gscale-500 focus:border-primary-200";
      case "default":
        return "bg-gscale-400 focus:border-primary-200";
      default:
        return "bg-gscale-400 focus:border-primary-200";
    }
  };

  const getMaxRange = () => {
    if (props.isRange && endDate) {
      return endDate;
    }

    return undefined;
  };

  const onChange = () => props.onChange([startDate, endDate]);

  useEffect(() => {
    onChange();
  }, [startDate, endDate]);

  useEffect(() => {
    setStartDate(props.startDate);
    setEndDate(props.endDate);
  }, [props.startDate, props.endDate]);

  return (
    <div className="font-semibold min-w-118 max-w-118">
      <p className={getFont()}>{props.label}</p>

      <div className="flex items-center relative gap-4 mt-2">
        <DatePicker
          selected={startDate}
          onChange={(v: Date | null) => setStartDate(v || undefined)}
          isClearable={props.isClearable}
          maxDate={getMaxRange()}
          placeholderText="Select date"
          className={`w-full rounded-sm py-3 px-8 border border-transparent focus:border-secondary-300 ${getVariant()} ${getSize()}`}
        />

        {props.isRange && (
          <DatePicker
            selected={endDate}
            onChange={(v: Date | null) => setEndDate(v || undefined)}
            isClearable={props.isClearable}
            minDate={startDate || undefined}
            placeholderText="Select date"
            className={`w-full rounded-sm py-3 px-8 border border-transparent focus:border-secondary-300 ${getVariant()} ${getSize()}`}
          />
        )}
      </div>
    </div>
  );
}
