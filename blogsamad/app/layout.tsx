import Header from "@/app/components/Header";
import React from "react";
import "./globals.css";

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Header />
        <main className="max-w-[1000px] mx-auto px-10 md:px-24">{children}</main>
      </body>
    </html>
  );
}
