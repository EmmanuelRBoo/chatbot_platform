import type { TextProps } from "./types";

export default function Text(props: TextProps) {
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

  return (
    <label htmlFor={props.name} className="w-full font-semibold overflow-hidden">
      <p className={getFont()}>{props.label}</p>

      <div className="relative mt-2">
        <input
          id={props.name}
          name={props.name}
          type={props.type || "text"}
          className={`w-full rounded-sm  py-3 px-8 focus:border ${getVariant()} ${getSize()}`}
          value={props.value ?? ""}
          onChange={({ target }) => props.onChange(target.value)}
        />

        {!props.value ? (
          <div className="absolute flex items-center gap-4 cursor-text -translate-y-1/2 top-1/2 left-8 opacity-40 ">
            {props.placeholder}
          </div>
        ) : null}
      </div>
    </label>
  );
}
