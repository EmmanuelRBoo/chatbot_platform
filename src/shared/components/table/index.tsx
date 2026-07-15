import type { TableProps } from "./types";

import TableBody from "./body";
import TableHeader from "./header";
import TableFooter from "./footer";

export function Table<T>(props: TableProps<T>) {
  return (
    <div className="flex flex-col flex-1">
      <table>
        <TableHeader {...props} />
        <TableBody {...props} />
      </table>

      <TableFooter {...props} />
    </div>
  );
}
