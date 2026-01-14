"use client";

import { useEffect } from "react";

export function useExitIntent(onExit: () => void) {
  useEffect(() => {
    let triggered = false;

    const handleMouseLeave = (e: MouseEvent) => {
      if (!triggered && e.clientY <= 0) {
        triggered = true;
        onExit();
      }
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
