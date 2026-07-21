import type { TableProps } from "./types";

import TableBody from "./body";
import TableHeader from "./header";
import TableFooter from "./footer";
import TableLoading from "./loading";

export function Table<T>(props: TableProps<T>) {
  if (props.loading) {
    return <TableLoading />;
  }

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
