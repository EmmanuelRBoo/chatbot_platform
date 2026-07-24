import { useWorkflowStore } from "../stores/workflow";

export function useWorkflow() {
  const { workflows, setWorkflows, selectedWorkflow, setSelectedWorkflow } = useWorkflowStore();

  const fetchWorkflows = () => {};

  const fetchUpdateSelectedWorkflow = () => {};

  return {
    workflows,

    selectedWorkflow,
    setSelectedWorkflow,

    fetchWorkflows,
  };
}
