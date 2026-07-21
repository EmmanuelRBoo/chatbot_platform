export default function TableLoading() {
  return (
    <div className="mt-12 flex items-center justify-center gap-2">
      <div className="h-4 w-4 animate-bounce rounded-full bg-linear-to-b from-primary-500 to-secondary-500 [animation-delay:0ms]" />

      <div className="h-4 w-4 animate-bounce rounded-full bg-linear-to-b from-primary-500 to-secondary-500 [animation-delay:150ms]" />

      <div className="h-4 w-4 animate-bounce rounded-full bg-linear-to-b from-primary-500 to-secondary-500 [animation-delay:300ms]" />
    </div>
  );
}
