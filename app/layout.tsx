import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils"

import { Inter as FontSans } from "next/font/google"
import { TooltipProvider } from "../components/ui/tooltip";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Multiagent",
  description: "Getiona tu redes sociales e intersactua con tus clientes de forma sencilla",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body  className={cn(
          "min-h-screen bg-background font-sans antialiased overflow-x-hidden w-screen h-screen ",
          fontSans.variable
        )}><TooltipProvider>
          {children}
          </TooltipProvider></body>
    </html>
  );
}
