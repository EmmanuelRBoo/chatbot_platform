import { TableProps } from "./types";

export default function TableBody<T>(props: TableProps<T>) {
  const hasPagination = props.pagination !== undefined && props.setPagination !== undefined;

  return (
    <tbody className="bg-gscale-400 brightness-105">
      {props.data.map((row, index) => (
        <tr
          key={index}
          className={
            !hasPagination
              ? "last:[&>td:first-child]:rounded-bl-3xl last:[&>td:last-child]:rounded-br-3xl"
              : ""
          }
        >
          {props.columns.map((column) => (
            <td key={String(column.key)} className="py-4 px-8">
              {column.render ? column.render(row[column.key], row) : String(row[column.key])}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}
