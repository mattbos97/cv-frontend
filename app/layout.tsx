import type { Metadata } from "next";
import "./globals.css";
import {roboto} from "@/app/ui/fonts";
import Header from "@/app/ui/components/Header";

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
        className={`${roboto.className} svg-background antialiased flex flex-col h-screen w-full bg-background-accent-2 text-text-gray-2`}
      >
      <Header />
      <main className={"flex flex-1"}>{children}</main>
      </body>
    </html>
  );
}
