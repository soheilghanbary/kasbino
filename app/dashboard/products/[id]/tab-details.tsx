"use client";
import Input from "~/components/ui/input";
import Textarea from "~/components/ui/textarea";
import { Button } from "~/components/ui/button";
import { useParams } from "next/navigation";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { DetailsProps, updateDetails } from "~/actions/dashboard";

export default function TabDetails({ description, name, price }: DetailsProps) {
  const [isPending, startTransition] = useTransition();
  const params = useParams() as { id: string };
  const productId = params.id;
  const router = useRouter();

  function onUpdate(formData: FormData) {
    startTransition(async () => {
      await updateDetails(formData, productId);
      toast.success("Product Details has been updated!", {
        style: {
          backgroundColor: "var(--blue-primary)",
          fontSize: 14,
          color: "#ffffff",
        },
      });
      router.refresh();
      router.push('/dashboard/products');
    });
  }

  return (
    <form action={onUpdate} className="space-y-2">
      <Input defaultValue={name} name="name" type="text" label="Name" />
      <Input defaultValue={price} name="price" type="text" label="Price" />
      <Textarea
        defaultValue={description}
        name="description"
        label="Description"
      />
      <Button formAction={onUpdate} variant={"primary"} disabled={isPending}>
        {isPending ? "Updating" : "Update"}
      </Button>
    </form>
  );
}
