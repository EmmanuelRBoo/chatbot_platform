import type { TextareaProps } from "./types";

export default function Textarea(props: TextareaProps) {
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

  return (
    <label htmlFor={props.name} className="w-full font-semibold">
      <p className={getFont()}>{props.label}</p>

      <div className="relative mt-2">
        <textarea
          id={props.name}
          name={props.name}
          className={`w-full  resize-none rounded-sm bg-gscale-400 py-3 px-8 focus:border focus:border-primary-200`}
          placeholder={props.placeholder}
          value={props.value ?? ""}
          onChange={({ target }) => props.onChange(target.value)}
          rows={props.rows || 6}
        />
      </div>
    </label>
  );
}
