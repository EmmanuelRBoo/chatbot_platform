export type TablePaginationProps = {
  page: number;
  total: number;
};

export type TableColumnProps<T, K extends keyof T = keyof T> = {
  key: K;
  title: string;
  render?: (value: T[K], row: T) => React.ReactNode;
};

export type TableProps<T> = {
  columns: TableColumnProps<T>[];
  data: T[];
  loading?: boolean;
  onClickRow?: (row: T) => void;
  pagination?: TablePaginationProps;
  setPagination?: (page: number) => void;
};
