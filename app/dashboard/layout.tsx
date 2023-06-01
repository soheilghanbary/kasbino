import { ReactNode } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "~/pages/api/auth/[...nextauth]";
import { redirect } from "next/navigation";
import LayoutContent from "./layout-content";

type Props = {
  children: ReactNode;
};

export default async function DashboardLayout({ children }: Props) {
  const session = await getServerSession(authOptions);
  !session?.user && redirect("/login");
  return (
    <>
      <LayoutContent>{children}</LayoutContent>
    </>
  );
}
