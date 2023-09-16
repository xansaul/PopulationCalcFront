import { FC } from "react";

interface Props{
  className?: string;
}
export const Spinner: FC<Props>= ({ className }) => {
  return (
    <div
      className={`inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] ${className || ''}`}
      role="status"
    >
    </div>
  );
};