"use client";

import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

import type { LayoutProps } from "@/shared/types/layout";

export function MobileWarning(props: LayoutProps) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth < 1024);
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!isSmallScreen) return props.children;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gscale-400 p-6 text-center">
      <div className="max-w-md">
        <h1 className="mb-3 text-xl font-semibold">View on a larger screen</h1>

        <p className="text-primary-200">
          Our platform has a variety of settings and advanced features that require more space to
          display properly. We recommend accessing it from a computer or a larger screen to take
          full advantage of all its features.
        </p>
      </div>

      <ToastContainer />
    </div>
  );
}
