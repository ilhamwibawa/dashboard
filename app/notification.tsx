import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { Bell } from "lucide-react";
import React from "react";

type Props = {};

const notifications = [
  {
    id: 1,
    title: "New order has been received",
    description: "1 minute ago",
    avatar: "https://github.com/ilhamwibawa.png",
  },
  {
    id: 2,
    title: "New order has been received",
    description: "1 minute ago",
    avatar: "https://github.com/ilhamwibawa.png",
  },
  {
    id: 3,
    title: "New order has been received",
    description: "1 minute ago",
    avatar: "https://github.com/ilhamwibawa.png",
  },
];

const Notification = (props: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Bell size={21} />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-96">
        <DropdownMenuLabel className="p-4 flex items-center gap-4 text-lg">
          <span>Notifications</span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {notifications.map((notification) => (
          <DropdownMenuItem
            key={notification.id}
            className="p-4 flex items-start gap-4 rounded-xl"
          >
            <Avatar>
              <AvatarImage src="https://github.com/ilhamwibawa.png" />
              <AvatarFallback>IW</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span>{notification.title}</span>
              <span className="text-gray-400 text-xs">
                {notification.description}
              </span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Notification;
