import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Survic Trials",
  description: "An initiative taken collectively by IIT Jodhpur and AIIMS Jodhpur for research on Oral Cancers. Portal developed by Mayank Jonwal , Btech (expected 2025) , AIDE ,IIT Jodhpur",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("bg-gradient-to-l from-green-2 from-10% via-green-4 via-60% to-green-3 to-90%",inter.className)}>
        {children}
     
        </body>
      
      <Toaster />
    </html>
  );
}
