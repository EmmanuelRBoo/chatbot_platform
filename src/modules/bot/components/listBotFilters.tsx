"use client";

import { MagnifyingGlassIcon, BroomIcon } from "@phosphor-icons/react";

import { Input, Select, Button, Calendar } from "@/shared/components";
import { statusOptions } from "@/shared/constants";
import { useListBot } from "../hooks/useListBot";

export function ListBotFilters() {
  const { fetchFilters, showFilters, filter, setFilters, fetchClearFilters } = useListBot();

  return (
    <div
      className={`${showFilters ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} flex flex-col gap-8 duration-300 transition-all`}
    >
      <div className={`flex flex-wrap items-end-safe justify-between`}>
        <Input.Text
          label="Bot name"
          name="botName"
          onChange={(botName) => setFilters({ botName })}
          placeholder="Search by bot name"
          value={filter.botName}
        />

        <Select
          label="Status"
          value={filter.status}
          options={statusOptions}
          onSelect={(status) => setFilters({ status: status as string })}
        />

        <Calendar
          label="Select date range"
          startDate={filter.startDate}
          endDate={filter.endDate}
          onChange={([startDate, endDate]) => setFilters({ startDate, endDate })}
          isClearable
          isRange
        />
      </div>

      <div className="flex justify-end-safe items-center gap-8">
        <Button variant="light" onClick={fetchClearFilters}>
          <BroomIcon weight="bold" size={28} />
          <p>Clear Filters</p>
        </Button>

        <Button onClick={fetchFilters}>
          <MagnifyingGlassIcon weight="bold" size={28} />
          <p>Search</p>
        </Button>
      </div>
    </div>
  );
}
