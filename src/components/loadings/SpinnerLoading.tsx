import clsx from "clsx";

export const SpinnerLoading = ({
  title = "Loading...",
  subTitle = "Wait for a sec...",
  className,
}: {
  title?: string;
  subTitle?: string;
  className?: string;
}) => {
  return (
    <div
      className={clsx("w-full p-8 gap-0 flex flex-col items-center", className)}
    >
      <div className="spinner-loader" />

      <p className="mt-4 text-sm bnw-text text-center font-semibold">{title}</p>

      <p className="text-xs bnw-text text-center">{subTitle}</p>
    </div>
  );
};
