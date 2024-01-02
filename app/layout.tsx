"use client";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Sidebar from "./sidebar";
import Header from "./header";
import { SidebarProvider } from "@/context/SidebarContext";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin-ext"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-gray-100`}>
        <SidebarProvider>
          <div className="flex">
            <div className="flex-shrink-0">
              <Sidebar />
            </div>
            <div className="flex-grow ">
              <Header />
              <main className="p-8 container mx-auto">{children}</main>
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
