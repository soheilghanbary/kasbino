import { ReactNode } from "react";
import Sidebar from "./sidebar";
import Provider from "~/components/provider";
import { getServerSession } from "next-auth";
import { authOptions } from "~/pages/api/auth/[...nextauth]";
import { redirect } from "next/navigation";
import RightSidebar from "./right-sidebar";

export default async function DashboardLayout({ children }: { children: ReactNode }) {
  const session = await getServerSession(authOptions);
  !session?.user && redirect("/login")
  return (
    <Provider>
      <div className="flex container mx-auto py-4 gap-4">
        <Sidebar />
        <section className="flex-1">{children}</section>
        {/* @ts-expect-error async component */}
        <RightSidebar />
      </div>
    </Provider>
  );
}
