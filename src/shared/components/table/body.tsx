import { TableProps } from "./types";

export default function TableBody<T>(props: TableProps<T>) {
  return (
    <tbody>
      {props.data.map((row, index) => (
        <tr key={index}>
          {props.columns.map((column) => (
            <td key={String(column.key)}>
              {column.render ? column.render(row[column.key], row) : String(row[column.key])}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}
