import type { Metadata } from "next";
import "./globals.css";
import {roboto} from "@/app/ui/fonts";
import NavMenu from "@/app/ui/components/NavMenu";
import SideBar from "@/app/ui/components/SideBar";

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
        className={`${roboto.className} antialiased flex flex-col h-screen w-full bg-background-accent-2 text-text-gray-2`}
      >
      <div className={'flex items-start py-2 px-4'}><NavMenu/></div>
        <main className={"flex flex-1 items-start"}>{children}</main>
      </body>
    </html>
  );
}
