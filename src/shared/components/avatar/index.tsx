"use client";

import { useState, useRef } from "react";

import { image } from "@/shared/utils";
import type { AvatarProps } from "./types";

export function Avatar(props: AvatarProps) {
  const [file, setFile] = useState(props.defaultValue || "/assets/logo.png");
  const [hover, setHover] = useState(false);

  const ref = useRef<HTMLInputElement>(null);

  const mouseOver = () => {
    if (!props.readonly) {
      setHover(true);
    }
  };

  const mouseOut = () => {
    if (!props.readonly) {
      setHover(false);
    }
  };

  const onClickFile = () => {
    ref.current?.click();
  };

  const handleFile = async (value: File) => {
    const result = await image.transformToBase64(value);

    setFile(result);
    props.setImage && props.setImage(result);
  };

  return (
    <div className="text-base font-semibold w-fit flex flex-col gap-2">
      {props.label && <p>{props.label}</p>}

      <div
        onMouseOut={mouseOut}
        onMouseOver={mouseOver}
        className="border border-primary-500 rounded-lg relative transition-all"
      >
        <img
          src={file}
          alt="Bot image"
          className="min-w-38 min-h-38 max-w-38 max-h-38 rounded-lg"
        />

        {hover && (
          <div
            onClick={onClickFile}
            className="absolute cursor-pointer inset-0 z-10 w-full h-full bg-gscale-400 opacity-80 flex items-center justify-center"
          >
            <p>Upload file</p>
          </div>
        )}
      </div>

      <input
        ref={ref}
        type="file"
        className="hidden"
        onChange={({ target }) => handleFile(target.files![0])}
      />
    </div>
  );
}
