import type { TableProps } from "./types";

import TableBody from "./body";
import TableHeader from "./header";

export function Table<T>(props: TableProps<T>) {
  return (
    <table>
      <TableHeader {...props} />
      <TableBody {...props} />
    </table>
  );
}
