"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface FunnelModalProps {
  onComplete: () => void;
}

const TOTAL_STEPS = 3;

export function FunnelModal({ onComplete }: FunnelModalProps) {
  const [step, setStep] = useState(0);
  const router = useRouter();

  function nextStep() {
    if (step < TOTAL_STEPS - 1) {
      setStep((s) => s + 1);
    } else {
      // Funnel complete → save + redirect
      localStorage.setItem("funnel", JSON.stringify({ completed: true }));
      onComplete();
      router.push("/blog");
    }
  }

  return (
    <div className="fixed inset-0 z-[9999] bg-black/70 flex items-center justify-center">
      <div className="relative w-full max-w-2xl bg-white px-8 py-10 rounded-lg">
        {/* CLOSE */}
        <button
          onClick={onComplete}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>

        {/* PROGRESS BAR */}
        <div className="mb-10">
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-orange-500 transition-all duration-500"
              style={{
                width: `${((step + 1) / TOTAL_STEPS) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* STEP CONTENT */}
        <div className="min-h-[260px] flex flex-col items-center justify-center text-center transition-all duration-300">
          {/* STEP 1 */}
          {step === 0 && (
            <>
              <h2 className="text-3xl font-bold mb-4">
                Want More SEO Traffic?
              </h2>

              <p className="text-gray-600 mb-8 max-w-md">
                Answer a few quick questions and I’ll give you a step-by-step{" "}
                <strong>7-week action plan</strong>.
              </p>

              <input
                type="text"
                placeholder="Enter your website URL"
                className="w-full max-w-md border px-4 py-3 rounded mb-6 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              <button
                onClick={nextStep}
                className="bg-orange-500 text-white px-8 py-3 rounded font-semibold hover:bg-orange-600 transition"
              >
                NEXT
              </button>
            </>
          )}

          {/* STEP 2 */}
          {step === 1 && (
            <>
              <h2 className="text-3xl font-bold mb-6">
                What do you want to achieve with more traffic?
              </h2>

              <div className="space-y-4 w-full max-w-md">
                {[
                  "Generate more leads",
                  "Increase number of sales",
                  "Increase brand awareness",
                ].map((item) => (
                  <button
                    key={item}
                    onClick={nextStep}
                    className="w-full border py-3 rounded hover:border-orange-500 hover:text-orange-500 transition"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </>
          )}

          {/* STEP 3 */}
          {step === 2 && (
            <>
              <h2 className="text-3xl font-bold mb-6">
                How much revenue do you generate per year?
              </h2>

              <div className="space-y-4 w-full max-w-md">
                {["0–500K", "500K–1MM", "1MM–3MM", "3MM+"].map((item) => (
                  <button
                    key={item}
                    onClick={nextStep}
                    className="w-full border py-3 rounded hover:border-orange-500 hover:text-orange-500 transition"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        {/* NEIL NOTE */}
        <div className="mt-10 flex items-center gap-3 bg-gray-100 p-4 rounded">
          <div className="w-10 h-10 rounded-full bg-gray-300" />
          <p className="text-sm text-gray-600">
            We analyze your answers to give you an action plan you can actually
            implement.
          </p>
        </div>
      </div>
    </div>
  );
}
