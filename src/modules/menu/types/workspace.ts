export type WorkspaceProps = {
  id: string;
  name: string;
  image: string;
};

export type WorkspaceStore = {
  workspaces: WorkspaceProps[];
  setWorkspaces: (workspaces: WorkspaceProps[]) => void;

  selectedWorkspace: WorkspaceProps | null;
  setSelectedWorkspace: (workspacew: WorkspaceProps) => void;

  openMenu: boolean;
  setOpenMenu: (openMenu: boolean) => void;
};
