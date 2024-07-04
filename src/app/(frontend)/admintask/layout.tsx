import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cn } from "@/lib/utils";
const inter = Inter({ subsets: ["latin"] });



export default function AdminSidebarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <div className={cn("flex flex-row justify-center items-center h-screen w-screen bg-gradient-to-l from-green-2 from-10% via-green-4 via-60% to-green-3 to-90%",inter.className)}>
        <Sidebar/>
        <div className="grow ">

        {children}
        </div>
     
        </div>
      
     
    
  );
}
