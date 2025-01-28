import type { Metadata } from "next";
import "./globals.css";
import {notoSansMono} from "@/app/ui/fonts";
import SideBar from "@/app/ui/SideBar";

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
        className={`${notoSansMono.className} antialiased flex h-screen w-full bg-dark-primary text-white`}
      >
      <div className={'flex items-center pl-8 pr-24'}><SideBar/></div>
        <main className={"flex flex-1"}>{children}</main>
      </body>
    </html>
  );
}
