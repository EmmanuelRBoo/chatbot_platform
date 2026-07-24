export type WorkflowProps = {
  id: string;
  name: string;
  image: string;
};

export type WorkflowStore = {
  workflows: WorkflowProps[];
  setWorkflows: (workflows: WorkflowProps[]) => void;

  selectedWorkflow: WorkflowProps | null;
  setSelectedWorkflow: (workflow: WorkflowProps) => void;
};
