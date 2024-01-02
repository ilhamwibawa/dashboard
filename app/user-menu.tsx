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
import { ClipboardList, Cog, Lock, LogOut, Mail, User } from "lucide-react";
import React from "react";

type Props = {};

const UserMenu = (props: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/ilhamwibawa.png" />
            <AvatarFallback>IW</AvatarFallback>
          </Avatar>

          <span>Ilham Wibawa</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-72">
        <DropdownMenuLabel className="flex gap-2">
          <Avatar>
            <AvatarImage src="https://github.com/ilhamwibawa.png" />
            <AvatarFallback>IW</AvatarFallback>
          </Avatar>

          <div className="space-y-2">
            <p>Ilham Wibawa</p>
            <span className="text-gray-400 text-xs">Manager</span>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="p-4 flex items-center gap-4">
          <User size={20} />
          <span>My Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="p-4 flex items-center gap-4">
          <Mail size={20} />
          <span>My Messages</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="p-4 flex items-center gap-4">
          <ClipboardList size={20} />
          <span>My Tasks</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="p-4 flex items-center gap-4">
          <Cog size={20} />
          <span>Settings</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="p-4 flex items-center gap-4">
          <Lock size={20} />
          <span>Lock Screen</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="p-4 flex items-center gap-4">
          <LogOut size={20} />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
