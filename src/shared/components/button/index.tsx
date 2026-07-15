import { CircleNotchIcon } from "@phosphor-icons/react/ssr";

import type { ButtonProps } from "./types";

export function Button(props: ButtonProps) {
  const renderVariant = () => {
    switch (props.variant) {
      case "primary":
        return `bg-primary-500 ${props.shadow ? "shadow-[0_0_10px_var(--color-primary-500)]" : ""}`;
      case "secondary":
        return `bg-gscale-400 ${props.shadow ? "shadow-[0_0_10px_var(--color-gscale-400)]" : ""}`;
      case "light":
        return `bg-gscale-100 text-primary-700 ${props.shadow ? "shadow-[0_0_10px_var(--color-gscale-100)]" : ""}`;
      default:
        return `bg-primary-500 ${props.shadow ? "shadow-[0_0_10px_var(--color-primary-500)]" : ""}`;
    }
  };

  const renderSize = () => {
    switch (props.size) {
      case "sm":
        return "max-h-10";
      case "base":
        return "max-h-13";
      default:
        return "max-h-13";
    }
  };

  return (
    <button
      className={`${props.disable ? "cursor-not-allowed brightness-50" : "cursor-pointer hover:brightness-130"} ${renderVariant()} ${renderSize()}  px-4 flex items-center justify-center gap-2  text-xl font-semibold py-3 rounded-sm active:scale-98 duration-75`}
      onClick={props.onClick}
      disabled={props.disable}
      type={props.type || "button"}
    >
      {props.loading ? (
        <CircleNotchIcon weight="bold" size={30} className="animate-spin" />
      ) : (
        props.children
      )}
    </button>
  );
}
