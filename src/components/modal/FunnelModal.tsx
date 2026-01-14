"use client";
import { useEffect } from "react";

import { useState } from "react";
import { FUNNEL_QUESTIONS } from "@/lib/constants";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { FunnelState } from "@/types/funnel";

export function FunnelModal({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const [state, setState] = useLocalStorage<FunnelState>("funnel", {
    completed: false,
    responses: [],
  });

  const [step, setStep] = useState(state.responses.length);
  const [answer, setAnswer] = useState("");

  if (state.completed) return null;

  const submitStep = () => {
    if (!answer) return;

    const updated = {
      ...state,
      responses: [
        ...state.responses,
        {
          step,
          question: FUNNEL_QUESTIONS[step],
          answer,
        },
      ],
    };

    // if (step === FUNNEL_QUESTIONS.length - 1) {
    //   updated.completed = true;
    //   setState(updated);
    //   onComplete();
    //   return;
    // }
    if (step === FUNNEL_QUESTIONS.length - 1) {
      const finalState = {
        completed: true,
        responses: updated.responses,
      };

      setState(finalState);

      fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalState),
      });

      onComplete();
      return;
    }

    setState(updated);
    setAnswer("");
    setStep(step + 1);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
      <div className="bg-white w-full max-w-lg rounded-lg p-8">
        <div className="mb-4 text-sm text-gray-400">
          Step {step + 1} of {FUNNEL_QUESTIONS.length}
        </div>

        <label className="block text-sm font-medium mb-2">
          {FUNNEL_QUESTIONS[step]}
        </label>

        <input
          aria-label={FUNNEL_QUESTIONS[step]}
          className="w-full border px-4 py-3 rounded-md mb-6"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />

        <button
          aria-disabled={!answer}
          disabled={!answer}
          className="w-full bg-orange-500 disabled:opacity-50 text-white py-3 rounded-md font-semibold"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
