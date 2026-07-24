"use client";

import { FunnelSimpleIcon, XIcon } from "@phosphor-icons/react";

import { Button } from "@/shared/components";
import { ListBotFilters } from "../components";
import { useListBot } from "../hooks/useListBot";

export function ListBotHeader() {
  const { showFilters, setShowFilters } = useListBot();

  return (
    <>
      <div className="flex justify-between items-end-safe">
        <div>
          <h2 className="text-4xl mb-4">Bot Management</h2>
          <p className="text-xl">Configure, monitor and deploy your agents</p>
        </div>

        <Button onClick={() => setShowFilters(!showFilters)}>
          {showFilters ? (
            <XIcon size={24} weight="bold" />
          ) : (
            <FunnelSimpleIcon size={24} weight="bold" />
          )}
          <p>Filters</p>
        </Button>
      </div>

      <ListBotFilters />
    </>
  );
}
