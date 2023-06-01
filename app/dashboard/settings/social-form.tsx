"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { Button } from "~/components/ui/button";
import Input from "~/components/ui/input";
import { toast } from "react-hot-toast";
import { updateSocials } from "~/actions/dashboard";

interface Props {
  website?: string | undefined;
  linkedin?: string | undefined;
  twitter?: string | undefined;
  instagram?: string | undefined;
}

export default function SocialForm({
  website,
  linkedin,
  twitter,
  instagram,
}: Props) {
  const [isPending, startTransition] = useTransition();
  const { data: session } = useSession();
  const router = useRouter()

  async function onSubmit(formData: FormData) {
    const socials = {
      twitter: formData.get("twitter"),
      instagram: formData.get("instagram"),
      website: formData.get("website"),
      linkedin: formData.get("linkedin"),
    };
    startTransition(async () => {
      await updateSocials(socials, session?.user?.id as string);
      toast.success("Social Media Updated!", {
        style: {
          backgroundColor: "var(--blue-primary)",
          fontSize: 14,
          color: "#ffffff",
        },
      });
      router.refresh()
    });
  }

  return (
    <form action={onSubmit} className="p-4">
      <div className="grid grid-cols-2 gap-4 mb-4">
        <Input defaultValue={website} name="website" label="Website" />
        <Input defaultValue={instagram} name="instagram" label="Instagram" />
        <Input
          defaultValue={twitter}
          name="twitter"
          label="Twitter"
          placeholder="@username"
        />
        <Input
          defaultValue={linkedin}
          name="linkedin"
          label="LinkedIn"
          placeholder="username"
        />
      </div>
      <Button variant={"primary"} disabled={isPending}>
        {isPending ? "Saving ..." : "Save"}
      </Button>
    </form>
  );
}
