import { InputHTMLAttributes } from "react";
import clsx from "clsx";

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={clsx(
        "w-full sm:w-[360px]",
        "rounded-md border border-gray-300 px-4 py-3",
        "focus:outline-none focus:ring-2 focus:ring-orange-500"
      )}
    />
  );
}
