import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Island_Moments,
  JetBrains_Mono,
  Lemonada,
} from "next/font/google";

import "./globals.css";
import { cn } from "@/lib/utils";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const lemonada = Lemonada({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-lemonada",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const islandMoments = Island_Moments({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-island",
});

export const metadata: Metadata = {
  title: "Raízes do Nordeste",
  description: "Sistema do restaurante",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        islandMoments.variable,
        lemonada.variable,
        jetbrainsMono.variable,
        "font-mono"
      )}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}