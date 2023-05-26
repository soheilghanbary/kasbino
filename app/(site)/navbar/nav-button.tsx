import { getServerSession } from "next-auth";
import Link from "next/link";
import SignOutButton from "~/app/(auth)/login/signout-button";
import { buttonVariants } from "~/components/ui/button";
import { authOptions } from "~/pages/api/auth/[...nextauth]";

export default async function NavButton() {
  const session = await getServerSession(authOptions);
  if (session?.user) return <SignOutButton />

  return (
    <Link href={"/login"} className={buttonVariants({ variant: "outline" })}>
      Login
    </Link>
  );
}
