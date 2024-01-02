"use client";

import { Button } from "@/components/ui/button";
import { useSidebar } from "@/context/SidebarContext";
import {
  Calendar,
  LayoutDashboard,
  LayoutGrid,
  Mail,
  MessageSquare,
  ShoppingBag,
} from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

const menus = [
  {
    title: "Dashboard",
    icon: LayoutGrid,
    href: "/",
  },
  {
    title: "E-Commerce",
    icon: ShoppingBag,
    href: "/",
  },
  {
    title: "Calendar",
    icon: Calendar,
    href: "/",
  },
  {
    title: "Mail",
    icon: Mail,
    href: "/",
  },
  {
    title: "Chat",
    icon: MessageSquare,
    href: "/",
  },
];

const Sidebar = (props: Props) => {
  const { isOpen } = useSidebar();
  return (
    <div
      className={`h-screen bg-white border-r w-72 flex flex-col transition-all duration-300 ${
        isOpen ? "ml-0" : "-ml-72"
      }`}
    >
      <div className="flex items-center justify-between p-5 border-b">
        <div className="font-bold text-xl">Dashboard</div>
      </div>
      {menus.map((menu) => (
        <Link
          key={menu.title}
          href={menu.href}
          className="flex items-center gap-4 p-5 hover:bg-gray-100"
        >
          <menu.icon size={21} />
          <span>{menu.title}</span>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
