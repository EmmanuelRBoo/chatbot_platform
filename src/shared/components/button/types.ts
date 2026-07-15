export type ButtonProps = {
  children: React.ReactNode | React.ReactNode[];
  variant?: "primary" | "secondary" | "ghost" | "light";
  type?: "submit" | "button";
  loading?: boolean;
  shadow?: boolean;
  disable?: boolean;
  onClick?: () => void;
  size?: "sm" | "base";
};
