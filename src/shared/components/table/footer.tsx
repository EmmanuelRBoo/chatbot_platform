import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react/ssr";

import { Button } from "../button";
import type { TableProps } from "./types";

export default function TableFooter<T>(props: TableProps<T>) {
  if (props.setPagination && props.pagination) {
    const maxPage = Math.ceil(props.pagination.total / 4);

    return (
      <div className="w-full flex items-center-safe justify-between px-8 py-2 bg-gscale-400 rounded-b-2xl">
        <span>
          page {props.pagination.page} of {maxPage}
        </span>

        <div className="flex items-center gap-4">
          <Button
            disable={props.pagination.page <= 1}
            onClick={() => props.setPagination!(props.pagination!.page - 1)}
            size="sm"
          >
            <CaretLeftIcon weight="bold" />
            <p className="mb-1">Prev</p>
          </Button>

          <Button
            disable={props.pagination.page >= maxPage}
            onClick={() => props.setPagination!(props.pagination!.page + 1)}
            size="sm"
          >
            <p className="mb-1">Next</p>
            <CaretRightIcon weight="bold" />
          </Button>
        </div>
      </div>
    );
  }

  return null;
}
