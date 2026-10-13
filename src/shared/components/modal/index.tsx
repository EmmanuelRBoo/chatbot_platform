"use client";

import { MouseEventHandler, useState } from "react";
import { XIcon } from "@phosphor-icons/react";

import { Button } from "..";
import type { ModalTriggerProps, ModalProps } from "./types";

export function Modal(props: ModalTriggerProps) {
  const [showModal, setShowModal] = useState<boolean>(false);

  const toggle = () => setShowModal((prev) => !prev);

  return (
    <>
      <div onClick={toggle}>{props.trigger}</div>

      {showModal && <ModalContent onClose={toggle} {...props} />}
    </>
  );
}

function ModalContent(props: ModalProps) {
  const closeInBackgound: MouseEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation();

    if (props.backdropClose) {
      props.onClose();
    }
  };

  return (
    <div onClick={closeInBackgound} className="fixed inset-0 w-screen h-screen bg-[rgba(0,0,0,0.6)] z-10">
      <div
        onClick={(e) => e.stopPropagation()}
        className="fixed inset-1/2 w-max h-fit flex flex-col justify-between text-gscale-600 -translate-1/2 bg-gscale-200 min-w-120 max-w-10/12 max-h-3/4 p-4 rounded-xl"
      >
        <div className="flex items-center justify-between mb-4">
          <p className="text-3xl font-semibold">{props.title}</p>

          <XIcon className="hover:scale-125" onClick={props.onClose} size={32} weight="bold" cursor="pointer" />
        </div>

        <div className="min-h-0 overflow-auto px-4 my-6">{props.children}</div>

        <div className="flex items-center justify-end-safe gap-4">
          <Button>Cancel</Button>

          <Button>Submit</Button>
        </div>
      </div>
    </div>
  );
}
