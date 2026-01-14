"use client";

import React from "react";

interface FunnelModalProps {
  onComplete: () => void;
}

export function FunnelModal({ onComplete }: FunnelModalProps) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "2rem",
          borderRadius: "8px",
          maxWidth: "400px",
          textAlign: "center",
        }}
      >
        <h2>Wait! Don’t leave yet!</h2>
        <p>Check out this special offer before you go.</p>
        <button
          onClick={() => {
            localStorage.setItem("funnel", JSON.stringify({ completed: true }));
            onComplete();
          }}
          style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}
        >
          Close
        </button>
      </div>
    </div>
  );
}
