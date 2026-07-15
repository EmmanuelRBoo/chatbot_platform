import type { TableProps } from "./types";

export default function TableHeader<T>(props: TableProps<T>) {
  return (
    <thead>
      <tr>
        {props.columns.map((column) => (
          <th
            className="py-4 px-8 text-start bg-gscale-400 first:rounded-ss-3xl last:rounded-se-3xl"
            key={column.key as string}
          >
            <p>{column.title}</p>
          </th>
        ))}
      </tr>
    </thead>
  );
}
