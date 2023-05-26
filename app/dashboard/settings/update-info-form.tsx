"use client";
import { useTransition } from "react";
import { InfoProps, updateInfo } from "../actions";
import Input from "~/components/ui/input";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Button } from "~/components/ui/button";
import { toast, Toaster } from "react-hot-toast";
import Textarea from "~/components/ui/textarea";

export default function UpdateInfoForm({ name, bio }: InfoProps) {
  const { data: session, update } = useSession();
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const onSubmit = (formData: FormData) => {
    const name = formData.get("name") as string;
    const bio = formData.get("bio") as string;
    const info = { name, bio };
    startTransition(async () => {
      const userId = session?.user?.id as string;
      await updateInfo(info, userId);
      await update({
        ...session,
        user: {
          ...session?.user,
          name: name,
        },
      });
      toast.success("Information Updated!", {
        style: {
          backgroundColor: "var(--blue-primary)",
          fontSize: 14,
          color: "#ffffff",
        },
      });
      router.refresh();
    });
  };

  return (
    <>
      <form
        action={onSubmit}
        className="flex items-start flex-col space-y-4 p-4"
      >
        <Input
          name="name"
          type="text"
          label="Full Name"
          defaultValue={session?.user?.name as string}
        />
        <Textarea defaultValue={bio} name="bio" label="Bio" />
        <Button
          formAction={onSubmit}
          type="submit"
          disabled={isPending}
          variant={"primary"}
        >
          {isPending ? "Updated..." : "Save"}
        </Button>
      </form>
    </>
  );
}
