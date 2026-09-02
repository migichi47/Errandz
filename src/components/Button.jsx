import { twMerge } from "tailwind-merge";

export function Button({ className, onClick, children }) {
  return (
    <button
      className={twMerge(
        "bg-primary rounded-sm flex justify-center items-center gap-2 cursor-pointer hover:text-black/80 transition-colors text-white font-semibold text-xl hover:bg-primary/80 ",
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
