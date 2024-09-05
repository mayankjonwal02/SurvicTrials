"use client"
import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cn } from "@/lib/utils";
import { faBars } from "@fortawesome/free-solid-svg-icons";


import logo from '@/assets/aims_jodhpur2.png'
import { ScrollArea } from "@/components/ui/scroll-area"
import sidebaritems from '@/constants/Sidebaritems'
import { usePathname, useRouter } from 'next/navigation'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const inter = Inter({ subsets: ["latin"] });
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetClose
} from "@/components/ui/sheet"



export default function AdminSidebarLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const router = useRouter()
    return (

        <div className={cn("flex flex-col justify-center items-start h-fit w-full bg-gradient-to-l from-green-2 from-10% via-green-4 via-60% to-green-3 to-90% S", inter.className)}>

            {children}
            {/* <div className="w-full h-fit py-3 text-center bg-green-3 text-green-5">Developed by <b><a className="underline" href="https://www.linkedin.com/in/mayank-jonwal-b79a5a1ba/">Mayank Jonwal</a></b> & <b className="underline"><a href="https://www.linkedin.com/in/dasanivishu/">Vishal Dasani</a></b> from <b><a className="underline" href="https://www.iitj.ac.in/">IIT Jodhpur</a></b></div> */}


        </div>



    );
}
