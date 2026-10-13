export type ModalTriggerProps = {
  title: React.ReactNode;
  children: React.ReactNode;
  trigger: React.ReactNode;
  cancelText?: React.ReactNode;
  submitText?: React.ReactNode;
  onSubmit?: () => void;
  backdropClose?: boolean;
};

export type ModalProps = ModalTriggerProps & {
  onClose: () => void;
};
