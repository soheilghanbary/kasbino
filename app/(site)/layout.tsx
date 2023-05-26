import { ReactNode } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Provider from "~/components/provider";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Provider>
      <main className="container mx-auto">
        <Navbar />
        {children}
        <Footer />
      </main>
    </Provider>
  );
}
