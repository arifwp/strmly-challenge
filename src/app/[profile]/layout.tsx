interface Props {
  children: React.ReactNode;
}

export default function DetailPostLayout({ children }: Props) {
  return (
    <div className="w-full max-w-sm h-screen mx-auto p-4 flex flex-col gap-4 items-center justify-center">
      {children}
    </div>
  );
}
