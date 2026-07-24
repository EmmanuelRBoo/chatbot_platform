export type InputProps = {
  name: string;
  label: string;
  placeholder: React.ReactNode;
  size?: "small" | "default";
  full?: boolean;
};

export type TextProps = InputProps & {
  onChange: (value: string) => void;
  type?: "email" | "text";
  value?: string;
  variant?: "default" | "secondary";
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

export type TextareaProps = InputProps & {
  placeholder: string;
  onChange: (value: string) => void;
  value?: string;
  rows?: number;
};
