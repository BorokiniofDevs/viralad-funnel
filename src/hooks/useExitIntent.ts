"use client";

import { useEffect } from "react";

export function useExitIntent(onExit: () => void) {
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) onExit();
    };

    const handleVisibility = () => {
      if (document.visibilityState === "hidden") {
        onExit();
      }
    };

    window.addEventListener("mouseout", handleMouseLeave);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      window.removeEventListener("mouseout", handleMouseLeave);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [onExit]);
}
