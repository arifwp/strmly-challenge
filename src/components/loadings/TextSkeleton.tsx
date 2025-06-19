import clsx from "clsx";

export const TextSkeleton = ({ className }: { className?: string }) => {
  return (
    <div
      className={clsx(
        "w-full h-3 primary-rounded bg-gray-200 dark:bg-gray-800 animate-pulse",
        className
      )}
    />
  );
};
