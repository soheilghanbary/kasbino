import Sidebar from "./sidebar";
import RightSidebar from "./right-sidebar";
import { ReactNode } from "react";
import Provider from "~/components/provider";
import BottomNavigation from "./bottom-navigation";
export default function LayoutContent({ children }: { children: ReactNode }) {
  return (
    <Provider>
      <main className="container mx-auto px-4 my-4 pb-16">
        <div className="flex gap-4">
          <Sidebar />
          <section className="flex-1">{children}</section>
          {/* @ts-expect-error async component */}
          <RightSidebar />
        </div>
      </main>
      <BottomNavigation />
    </Provider>
  );
}
