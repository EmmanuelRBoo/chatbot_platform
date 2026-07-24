"use client";

import { useEffect } from "react";
import Link from "next/link";

import { Table } from "@/shared/components";
import { date } from "@/shared/utils";
import { ListBotStatus, ListBotActions } from "../components";
import { useListBot } from "../hooks/useListBot";
import type { ListBotStatusProps } from "../types/listBot";

export function ListBotTable() {
  const { bots, listMeta, fetchListBots, changePagination, loading } = useListBot();

  useEffect(() => {
    fetchListBots();
  }, []);

  return (
    <Table
      data={bots}
      loading={loading}
      noDataMessage={
        <p className="text-3xl mt-20">
          No bots created,{" "}
          <Link href="/new-bot" className="text-secondary-200">
            click here to create a new bot.
          </Link>
        </p>
      }
      columns={[
        {
          key: "botName",
          title: "Bot name",
          render: (_, row) => (
            <div className="flex flex-col">
              <p className="font-semibold">{row.botName}</p>
              <p className="text-gscale-200">ID: {row.id}</p>
            </div>
          ),
        },
        {
          key: "createdAt",
          title: "Created",
          render: (createdAt) => date.format(createdAt),
        },
        {
          key: "updatedAt",
          title: "Last Update",
          render: (updatedAt) => date.format(updatedAt),
        },
        {
          key: "status",
          title: "Status",
          render: (status) => <ListBotStatus status={status as ListBotStatusProps} />,
        },
        {
          key: "actions",
          title: "Actions",
          render: (_, row) => <ListBotActions id={row.id} status={row.status} />,
        },
      ]}
      pagination={listMeta}
      setPagination={changePagination}
    />
  );
}
