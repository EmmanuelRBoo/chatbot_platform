export type RangeProps = {
  label: string;
  value: number;
  onChange: (value: number) => void;
  renderValue?: React.ReactNode;
  showNumbers?: boolean;
  min?: number;
  max?: number;
};
