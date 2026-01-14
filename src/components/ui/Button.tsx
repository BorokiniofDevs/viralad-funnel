import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

export function Button({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={clsx(
        "rounded-md bg-orange-500 px-6 py-3 text-white font-semibold",
        "hover:bg-orange-600 transition-colors"
      )}
    >
      {children}
    </button>
  );
}
