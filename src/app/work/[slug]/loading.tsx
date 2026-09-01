import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-28 sm:px-10">
      <Skeleton className="mb-8 h-5 w-32" />

      {/* Skeleton Gallery / Thumbnail */}
      <Skeleton className="h-[40vh] w-full rounded-3xl sm:h-[60vh]" />

      {/* Main Info Grid */}
      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {/* Badges */}
          <div className="mb-3 flex gap-2">
            <Skeleton className="h-6 w-24 rounded-full" />
            <Skeleton className="h-6 w-20 rounded-full" />
          </div>
            {/* Title & Subtitle */}
          <Skeleton className="h-10 w-3/4 sm:h-12" />
          <Skeleton className="mt-4 h-4 w-1/3" />
            {/* Description */}
          <div className="mt-8 space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-4/5" />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Skeleton className="h-12 w-36 rounded-full" />
            <Skeleton className="h-12 w-40 rounded-full" />
          </div>
        </div>

        <aside>
          <Skeleton className="h-70 w-full rounded-2xl" />
        </aside>
      </div>

      <div className="mt-14 flex flex-col gap-10 border-t border-border pt-10">
        <div>
          <Skeleton className="mb-6 h-8 w-64" />
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Skeleton className="mt-1 h-2 w-2 shrink-0 rounded-full" />
              <Skeleton className="h-4 w-full" />
            </div>
            <div className="flex items-start gap-3">
              <Skeleton className="mt-1 h-2 w-2 shrink-0 rounded-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
            <div className="flex items-start gap-3">
              <Skeleton className="mt-1 h-2 w-2 shrink-0 rounded-full" />
              <Skeleton className="h-4 w-4/5" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}