export type InputProps = {
  name: string;
  label: string;
  placeholder: React.ReactNode;
  size?: "small" | "default";
};

export type TextProps = InputProps & {
  onChange: (value: string) => void;
  type?: "email" | "text";
  value?: string;
};

export type PasswordProps = InputProps & {
  onChange: (value: string) => void;
  value?: string;
  showForgot?: () => void;
};

export type ColorProps = InputProps & {
  onChange: (value: string) => void;
  value: string;
};
