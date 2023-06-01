import { Skeleton } from "~/components/ui/skeleton";

export default function ProductSkeletons() {
  return (
    <section className="space-y-4">
      {Array(3)
        .fill(0)
        .map((_, index) => (
          <div key={index} className="p-3 border rounded-md flex space-x-4">
            <Skeleton className="md:w-32 md:h-32 w-28 h-28 rounded-md bg-background-secondary" />
            <div className="flex-1 flex space-y-2 flex-col">
              <Skeleton className="w-1/2 h-4 rounded-full bg-background-secondary" />
              <Skeleton className="w-1/3 h-4 rounded-full bg-background-secondary" />
            </div>
          </div>
        ))}
    </section>
  );
}
