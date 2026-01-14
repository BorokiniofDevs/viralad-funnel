"use client";

import { ReactNode, useState, useEffect } from "react";
import { FunnelModal } from "./FunnelModal";
import { useExitIntent } from "@/hooks/useExitIntent";

export function ExitIntentProvider({ children }: { children: ReactNode }) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("funnel");
    if (!stored || !JSON.parse(stored).completed) {
      setShowModal(true);
    }
  }, []);

  useExitIntent(() => setShowModal(true));

  return (
    <>
      {children}
      {showModal && <FunnelModal onComplete={() => setShowModal(false)} />}
    </>
  );
}
