export type CalendarProps = {
  label: string;
  onChange: (val: Array<Date | undefined>) => void;
  maxDate?: Date;
  isClearable?: boolean;
  isRange?: boolean;
  startDate?: Date;
  endDate?: Date;
  size?: "small" | "default";
  variant?: "default" | "secondary";
};
