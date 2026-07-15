"use client";

import { Table } from "@/shared/components";

import { ListBotStatus, ListBotHeader, ListBotAnalytics, ListBotActions } from "../components";
import { useListBot } from "../hooks/useListBot";
import type { ListBotStatusProps } from "../types/listBot";

export default function ListBotsScreen() {
  const { bots } = useListBot();

  return (
    <main className="flex flex-col flex-1 p-8 gap-10">
      <ListBotHeader />

      <ListBotAnalytics />

      <Table
        data={bots}
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
        pagination={{
          page: 1,
          total: 5,
        }}
        setPagination={() => {}}
      />
    </main>
  );
}
