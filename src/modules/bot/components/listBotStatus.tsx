import { PlayIcon, PencilIcon, PauseIcon } from "@phosphor-icons/react/ssr";

import type { ListBotStatusProps } from "../types/listBot";

export function ListBotStatus(props: { status: ListBotStatusProps }) {
  const statusList: Record<
    ListBotStatusProps,
    { text: string; icon: React.ReactNode; classname: string }
  > = {
    live: {
      classname: "bg-green-600",
      text: "Live",
      icon: <PlayIcon weight="fill" size={18} />,
    },
    draft: {
      classname: "bg-gscale-600",
      text: "Draft",
      icon: <PencilIcon weight="fill" size={18} />,
    },
    stopped: {
      classname: "bg-gray-600",
      text: "Stopped",
      icon: <PauseIcon weight="fill" size={18} />,
    },
  };

  return (
    <div
      className={`${statusList[props.status].classname} flex items-center-safe justify-center-safe gap-2 w-30 h-8 rounded-full text-white`}
    >
      {statusList[props.status].icon} {statusList[props.status].text}
    </div>
  );
}
