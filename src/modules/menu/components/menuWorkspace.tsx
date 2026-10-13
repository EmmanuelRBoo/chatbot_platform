"user client";

import { CaretUpIcon, CaretDownIcon, PlusIcon } from "@phosphor-icons/react";

import { Modal } from "@/shared/components";
import { useWorkspace } from "../hooks/useWorkspace";

export function WorkspaceMenu() {
  const { selectedWorkspace, openMenu, setOpenMenu, workspaces } = useWorkspace();

  return (
    <div className="relative">
      <div
        className="flex items-center border border-secondary-200 rounded-md py-2 px-4 cursor-pointer"
        onClick={() => setOpenMenu(!openMenu)}
      >
        <img src={selectedWorkspace?.image || "/assets/logo.png"} className="w-12 h-12" alt="current-workflow-image" />

        <span>{selectedWorkspace?.name}</span>

        <div className="ml-auto">
          {openMenu ? (
            <CaretUpIcon size={24} weight="bold" cursor="pointer" />
          ) : (
            <CaretDownIcon size={24} weight="bold" cursor="pointer" />
          )}
        </div>
      </div>

      {openMenu && (
        <div className="absolute z-10 w-full mt-1 rounded-md border border-primary-300 bg-gscale-500">
          <Modal
            title="Título modal"
            backdropClose
            trigger={
              <div className="flex items-center py-2 px-4 gap-4 bg-gscale-500 rounded-md cursor-pointer hover:brightness-120">
                <PlusIcon size={20} weight="bold" />

                <p className="text-lg font-semibold">Create new workspace</p>
              </div>
            }
          >
            <form></form>
          </Modal>

          <ul className="">
            {workspaces.map((workspace) => (
              <li key={workspace.id}>
                <img src={workspace?.image || "/assets/logo.png"} className="w-12 h-12" alt="current-workflow-image" />

                <span>{workspace?.name}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
