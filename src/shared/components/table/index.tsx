import type { TableProps } from "./types";

import TableBody from "./body";
import TableHeader from "./header";
import TableFooter from "./footer";
import TableLoading from "./loading";

export function Table<T>(props: TableProps<T>) {
  if (props.loading) {
    return <TableLoading />;
  }

  if (props.data.length <= 0) {
    return <div className="text-center">{props.noDataMessage || <p className="text-3xl">No results found</p>}</div>;
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
