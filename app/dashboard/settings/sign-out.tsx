"use client";
import { signOut } from "next-auth/react";
import { useTransition } from "react";
import { Button } from "~/components/ui/button";

export default function SignOut() {
  const [isPending, startTransition] = useTransition();
  return (
    <div className="flex justify-between items-center p-4">
      <p className="text-foreground-accent text-sm">
        Do you want to log out of your account?
      </p>
      <Button
        variant={"danger"}
        disabled={isPending}
        size={'sm'}
        onClick={() => startTransition(() => signOut())}
      >
        {isPending ? "Loading ..." : "Sign Out"}
      </Button>
    </div>
  );
}
