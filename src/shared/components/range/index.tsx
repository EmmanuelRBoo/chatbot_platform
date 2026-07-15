import type { RangeProps } from "./types";

export function Range(props: RangeProps) {
  return (
    <label>
      <div className="flex items-center justify-between font-semibold">
        <p>{props.label}</p>

        {props.renderValue && props.renderValue}
      </div>

      <input
        type="range"
        onChange={({ target }) => props.onChange(target.valueAsNumber)}
        min={props.min || 0}
        max={props.max || 100}
        value={props.value}
        className="
          w-full
          appearance-none
          bg-transparent

          [&::-webkit-slider-runnable-track]:h-2
          [&::-webkit-slider-runnable-track]:rounded-full
          [&::-webkit-slider-runnable-track]:bg-gscale-300

          [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:-mt-1.5
          [&::-webkit-slider-thumb]:h-5
          [&::-webkit-slider-thumb]:w-5
          [&::-webkit-slider-thumb]:rounded-full
          [&::-webkit-slider-thumb]:bg-primary-400
          [&::-webkit-slider-thumb]:cursor-pointer

          [&::-moz-range-track]:h-2
          [&::-moz-range-track]:rounded-full
          [&::-moz-range-track]:bg-gscale-300

          [&::-moz-range-thumb]:h-5
          [&::-moz-range-thumb]:w-5
          [&::-moz-range-thumb]:rounded-full
          [&::-moz-range-thumb]:border-0
          [&::-moz-range-thumb]:bg-primary-400
          [&::-moz-range-thumb]:cursor-pointer
        "
      />

      <div className="flex items-center justify-between">
        <span>{props.min || 0}</span>
        <span>{props.max || 100}</span>
      </div>
    </label>
  );
}
