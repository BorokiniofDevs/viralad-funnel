"use client";

import { ReactNode, useState } from "react";
import { FunnelModal } from "./FunnelModal";
import { useExitIntent } from "@/hooks/useExitIntent";

export function ExitIntentProvider({ children }: { children: ReactNode }) {
  //   const [showModal, setShowModal] = useState(true);
  const [showModal, setShowModal] = useState(() => {
    if (typeof window === "undefined") return true;
    const stored = localStorage.getItem("funnel");
    return !stored || !JSON.parse(stored).completed;
  });

  useExitIntent(() => setShowModal(true));

  return (
    <>
      {children}
      {showModal && <FunnelModal onComplete={() => setShowModal(false)} />}
    </>
  );
}
