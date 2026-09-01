import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="mx-auto flex-1 w-full max-w-6xl px-6 py-28 sm:px-10">
      {/* Skeleton Header */}
      <div className="mb-2 flex flex-col items-center justify-center">
        <Skeleton className="h-10 w-64" />
        <Skeleton className="mt-4 h-5 w-72" />
        <Skeleton className="mt-2 h-4 w-40" />
      </div>

      {/* Skeleton Badges (Horizontal Scroll) */}
      <div className="mb-12 mt-8 flex w-full gap-2 overflow-hidden pb-4">
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} className="h-10 w-24 shrink-0 rounded-full" />
        ))}
      </div>

      {/* Skeleton ProjectDetailCard */}
      <div className="w-full space-y-12 lg:space-y-20">
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} className="h-100 w-full rounded-3xl" />
        ))}
      </div>
    </main>
  );
}