export type SelectOption = {
  key: string;
  label: React.ReactNode | React.ReactNode[];
};

export type SelectProps = {
  onSelect: (key: string | string[]) => void;
  value: string | string[];
  options: SelectOption[];
  label: string;
  placeholder?: string;
  multi?: boolean;
  size?: "small" | "default";
  full?: boolean;
};
