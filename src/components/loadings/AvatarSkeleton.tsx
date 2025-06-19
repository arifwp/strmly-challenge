import clsx from "clsx";

export const AvatarSkeleton = ({ className }: { className?: string }) => {
  return (
    <div
      className={clsx(
        "size-8 rounded-full bg-gray-200 aspect-square animate-pulse",
        className
      )}
    />
  );
};
