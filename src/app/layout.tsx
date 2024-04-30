import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.scss";
import { Inter as FontSans } from "next/font/google";
import LayoutSetup from "@/components/layout/LayoutSetup";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Qoves",
  description: "Qoves Saas Dashboard",
};
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <LayoutSetup />
        {children}
      </body>
    </html>
  );
}
