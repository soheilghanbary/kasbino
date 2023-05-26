"use client";
import { dashboard } from "~/config/dashboard";
import SidebarItem from "./side-item";

export default function SidebarList() {
  return (
    <>
      {dashboard.navs.map((item, i) => (
        <SidebarItem key={i} {...item} />
      ))}
    </>
  );
}
