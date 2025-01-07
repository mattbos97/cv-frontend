import type { Metadata } from "next";
import "./globals.css";
import SideBar from "@/app/ui/SideBar";
import {notoSansMono} from "@/app/ui/fonts";

export const metadata: Metadata = {
  title: "Matt Bos",
  description: "CV of Matt Bos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSansMono.className} antialiased flex h-screen w-screen bg-dark-primary text-white`}
      >
      <SideBar/>
        {children}
      </body>
    </html>
  );
}
