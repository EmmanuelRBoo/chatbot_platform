import { useWorkspaceStore } from "../stores/workspace";

export function useWorkspace() {
  const { workspaces, setWorkspaces, selectedWorkspace, setSelectedWorkspace, openMenu, setOpenMenu } =
    useWorkspaceStore();

  const fetchWorkspaces = () => {};

  const fetchUpdateSelectedWorkspace = () => {};

  return {
    workspaces,

    selectedWorkspace,
    setSelectedWorkspace,

    openMenu,
    setOpenMenu,

    fetchWorkspaces,
  };
}
