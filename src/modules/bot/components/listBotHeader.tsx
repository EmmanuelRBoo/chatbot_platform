"use client";

import { FunnelSimpleIcon } from "@phosphor-icons/react";

import { Button } from "@/shared/components";

export function ListBotHeader() {
  return (
    <div className="flex justify-between items-end-safe">
      <div>
        <h2 className="text-4xl mb-4">Bot Management</h2>
        <p className="text-xl">Configure, monitor and deploy your agents</p>
      </div>

      <Button>
        <FunnelSimpleIcon size={24} weight="bold" />
        <p>Filter</p>
      </Button>
    </div>
  );
}
