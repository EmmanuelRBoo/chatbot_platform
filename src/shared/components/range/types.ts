export type RangeProps = {
  label: string;
  value: number;
  onChange: (value: number) => void;
  renderValue?: React.ReactNode;
  min?: number;
  max?: number;
};
