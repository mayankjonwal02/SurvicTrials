"use client"
import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cn } from "@/lib/utils";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import React, {useEffect} from "react";
import logo from '@/assets/aims_jodhpur2.png'
import { ScrollArea } from "@/components/ui/scroll-area"
import sidebaritems from '@/constants/PatientSidebarItem'
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
import { use, useState } from "react";



export default function PatientSidebarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const router = useRouter()
  const [patient_trial_number, setpatient_trial_number] = React.useState("")
  useEffect(() => {
    const login = localStorage.getItem("login");

    if (login !== "true") {
        router.push('/')
    }

}, []);
  useEffect(() => {
    const storedpatient_trial_number = localStorage.getItem("patienttrialnumber");
    if (storedpatient_trial_number) {
      setpatient_trial_number(storedpatient_trial_number);
    }
    else
    {
      setpatient_trial_number("ID not found")
    }
  }, []);
  return (

    <div className={cn("flex flex-row justify-center items-start h-screen w-screen bg-gradient-to-l from-green-2 from-10% via-green-4 via-60% to-green-3 to-90%", inter.className)}>
      

      <Sheet>
        <SheetTrigger>
          <FontAwesomeIcon className="absolute top-7 left-5 text-green-5 text-2xl flex md:hidden " icon={faBars} />
        </SheetTrigger>
        <SheetContent side={"left"} className="rounded-3xl bg-green-2 border border-transparent w-[300px] h-screen flex flex-col justify-center items-center">
        <SheetHeader><div className="text-xl font-bold text-green-5">Trial No : {patient_trial_number}</div></SheetHeader>
          <SheetClose asChild>

          <ScrollArea className=' rounded-3xl m-5 mt-0 flex md:hidden flex-col h-[95%] w-[300px]  justify-start items-center bg-green-2' >
            <div className='flex flex-row  justify-center items-center mt-5  px-3'>
              <img src={logo.src} className='w-40 h-40 ' />


            </div>


            {sidebaritems.map((item, index) => {
              const pathname = usePathname()
              const isActive = item.path === pathname
              return (
                <div  key={index} onClick={() => router.push(item.path)} className={`text-start text-xl my-4 mx-3 px-8 py-1  cursor-pointer ${isActive ? 'text-green-5 font-extrabold bg-white rounded-lg' : 'text-black font-extrabold'} `}>
                    {item.icon === undefined ? null : <FontAwesomeIcon className='mr-3 w-[20px] h-[20px]' icon={item.icon} />}{item.title}
                    {/* <FontAwesomeIcon className='mr-3 w-[20px] h-[20px]' icon={item.icon} />{item.title} */}
                
                </div>
              )
            })}

          </ScrollArea>

          </SheetClose>

        </SheetContent>
      </Sheet>


      <Sidebar items={sidebaritems} patient_trial_number={patient_trial_number} />

      <div className="grow ">

        {children}
      </div>

    </div>



  );
}
