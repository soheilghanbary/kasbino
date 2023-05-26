"use client";
import { useTransition } from "react";
import { Button } from "~/components/ui/button";
import { deleteProduct } from "../../actions";
import { useParams, useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export default function TabSetting() {
  const params = useParams() as { id: string };
  const productId = params.id;
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const onDeleteProduct = () => {
    startTransition(async () => {
      await deleteProduct(productId);
      toast("Product has Been Deleted!", {
        style: {
          backgroundColor: "var(--red-primary)",
          fontSize: 14,
          color: "#ffffff",
        },
      });
      router.refresh();
      router.push("/dashboard/products");
    });
  };
  return (
    <form className="border rounded-md flex justify-between items-center p-4">
      <p className="text-foreground-accent text-sm">
        Do you want to delete this Product?
      </p>
      <Button
        size={"sm"}
        formAction={onDeleteProduct}
        variant={"danger"}
        disabled={isPending}
      >
        {isPending ? "Deleting" : "Delete"}
      </Button>
    </form>
  );
}
