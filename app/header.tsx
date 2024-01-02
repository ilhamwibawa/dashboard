"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { useSidebar } from "@/context/SidebarContext";
import {
  Bell,
  ClipboardList,
  Cog,
  Lock,
  LogOut,
  Mail,
  Menu,
  Search,
  User,
} from "lucide-react";
import React from "react";
import UserMenu from "./user-menu";
import Notification from "./notification";

type Props = {};

const Header = (props: Props) => {
  const { toggleSidebar } = useSidebar();
  return (
    <header className="border-b bg-white p-3.5 flex items-center justify-between">
      <Button
        onClick={() => {
          toggleSidebar();
        }}
        variant="ghost"
        size="icon"
      >
        <Menu size={20} />
      </Button>

      <div className="flex gap-2 items-center">
        <Button variant="ghost" size="icon" className="rounded-lg">
          <Search size={20} />
        </Button>

        <Notification />

        <Separator orientation="vertical" className="h-8" />

        <UserMenu />
      </div>
    </header>
  );
};

export default Header;
