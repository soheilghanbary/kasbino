"use client";
import { PackagePlus } from "lucide-react";
import { useSession } from "next-auth/react";
import { useTransition } from "react";
import { Button } from "~/components/ui/button";
import { createProduct } from "../actions";
import { redirect, usePathname } from "next/navigation";

export default function CreateProductButton() {
  const { data: session } = useSession();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname()
  function onCreateProduct() {
    startTransition(async () => {
      const userId = session?.user?.id as string;
      await createProduct(userId).then((res) => {
        return redirect(pathname + `/${res?.id}`)
      });
    });
  }
  return (
    <Button
      onClick={onCreateProduct}
      variant={"outline"}
      disabled={isPending}
    >
      <PackagePlus className="w-4 h-4 mr-2.5" />
      {isPending ? "Creating ..." : "New Product"}
    </Button>
  );
}
