import {
  PauseIcon,
  PencilIcon,
  TrashIcon,
  PlayIcon,
  ChartLineIcon,
} from "@phosphor-icons/react/ssr";

import { Popover } from "@/shared/components";
import { useListBot } from "../hooks/useListBot";
import type { ListBotActionProps } from "../types/listBot";

export function ListBotActions(props: ListBotActionProps) {
  const { fetchChangeStatus } = useListBot();

  const renderPlayPauseStatus = () => {
    switch (props.status) {
      case "live":
        return (
          <Popover text={"Stop bot"}>
            <PauseIcon
              onClick={() => fetchChangeStatus(props.id, "stopped")}
              cursor="pointer"
              size={24}
              weight="fill"
            />
          </Popover>
        );
      case "stopped":
        return (
          <Popover text={"Resume bot"}>
            <PlayIcon
              onClick={() => fetchChangeStatus(props.id, "live")}
              cursor="pointer"
              size={24}
              weight="fill"
            />
          </Popover>
        );
      default:
        return null;
    }
  };
  return (
    <div className="flex items-center gap-6">
      {renderPlayPauseStatus()}

      <Popover text={"Edit bot"}>
        <PencilIcon cursor="pointer" size={24} weight="fill" />
      </Popover>

      <Popover text={"Delete bot"}>
        <TrashIcon cursor="pointer" size={24} weight="fill" />
      </Popover>

      {props.status !== "draft" && (
        <Popover text={"View analitycs"}>
          <ChartLineIcon cursor="pointer" size={24} />
        </Popover>
      )}
    </div>
  );
}
