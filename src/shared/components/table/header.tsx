import type { TableProps } from "./types";

export default function TableHeader<T>(props: TableProps<T>) {
  return (
    <thead>
      <tr>
        {props.columns.map((column) => (
          <th key={column.key as string}>
            <p>{column.title}</p>
          </th>
        ))}
      </tr>
    </thead>
  );
}
