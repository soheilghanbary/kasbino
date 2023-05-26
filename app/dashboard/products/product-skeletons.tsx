import { Skeleton } from "~/components/ui/skeleton";

export default function ProductSkeletons() {
  return (
    <section className="space-y-4">
      {Array(3)
        .fill(0)
        .map((_, index) => (
          <div key={index} className="p-4 border rounded-md flex space-x-4">
            <Skeleton className="w-32 h-32 rounded-md bg-background-secondary" />
            <div className="flex-1 flex justify-evenly flex-col">
              <Skeleton className="w-1/2 h-4 rounded-full bg-background-secondary" />
              <Skeleton className="w-1/3 h-4 rounded-full bg-background-secondary" />
              <div className="flex space-x-4">
                <Skeleton className="w-20 h-9 rounded bg-background-secondary" />
                <Skeleton className="w-20 h-9 rounded bg-background-secondary" />
              </div>
            </div>
          </div>
        ))}
    </section>
  );
}
