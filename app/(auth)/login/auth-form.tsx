"use client";
import { Button } from "~/components/ui/button";
import { signIn } from "next-auth/react";
import Input from "~/components/ui/input";
import { Icons } from "~/components/icons";
import { useState } from "react";
import { GithubIcon } from "lucide-react";

export default function AuthForm() {
  const [isGitHubLoading, setisGitHubLoading] = useState(false);

  return (
    <>
      <Input type="text" placeholder="name@example.com" />
      <Button fullWidth variant={"primary"}>
        Sign In with Email
      </Button>
      <LineTitle title="OR CONTINUE WITH" />
      <Button
        variant={"outline"}
        fullWidth
        disabled={isGitHubLoading}
        onClick={() => {
          setisGitHubLoading(true);
          signIn("github");
        }}
      >
        {isGitHubLoading ? (
          <Icons.spinner className="animate-spin" />
        ) : (
          <GithubIcon/>
        )}{" "}
        Github
      </Button>
    </>
  );
}

function LineTitle({ title }: { title: string }) {
  return (
    <div className="my-2.5 flex w-full items-center">
      <hr className="mr-3 flex-1 border border-line" />
      <span className="text-xs font-medium">{title}</span>
      <hr className="ml-3 flex-1 border border-line" />
    </div>
  );
}
