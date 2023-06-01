"use client";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

export default function Provider({ children }: { children: ReactNode }) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system">
        {children}
      </ThemeProvider>
      <Toaster position="top-center" reverseOrder={false}/>
    </>
  );
}
