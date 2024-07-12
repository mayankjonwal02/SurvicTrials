"use client"
import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cn } from "@/lib/utils";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import React, { useEffect } from "react";
import logo from '@/assets/aims_jodhpur2.png'
import { ScrollArea } from "@/components/ui/scroll-area"
import sidebaritems from '@/constants/PatientSidebarItem'
import { usePathname, useRouter } from 'next/navigation'
import AllQuestions from "@/constants/QuestionList";
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




export default function PatientSidebarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const router = useRouter()
  const [patient_trial_number, setpatient_trial_number] = React.useState("")

  const [qtypes, setqtypes] = React.useState<string[]>([])
  const [reload, setReload] = React.useState("")
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
    else {
      setpatient_trial_number("ID not found")
    }
  }, []);

  useEffect(() => {

    const fetchalldata = async () => {

      // const storedpatient_trial_number = localStorage.getItem("patienttrialnumber");
      if (patient_trial_number) {

        fetch("/api/getpatientbytrialid", {
          method: "Post",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ trialid: patient_trial_number })
        })
          .then((res) => res.json())
          .then((apidata: any) => {
            console.log(apidata)
            if (apidata.executed) {
              const questiondata = apidata.data.data;
              const temp: any = []
              Object.keys(AllQuestions).forEach((category: string) => {
                const questionList = AllQuestions[category];

                questionList.forEach((question: any) => {
                  const matchingQuestion = questiondata.find(
                    (pd: any) => pd.questionId === question.questionId
                  );
                  if (matchingQuestion) {
                    if (matchingQuestion.answer === "" && !temp.includes(category)) {
                      temp.push(category)
                    }
                  } else {
                    if (!temp.includes(category)) {

                      temp.push(category)
                    }
                  }
                });
              });

              setqtypes(temp)


            }
            else {
              //   toast({
              //     title: "Error",
              //     description: apidata.message,
              //     variant: "destructive",
              //   })
              console.log("Data not found")
            }
          })


      }


    }

    const task = localStorage.getItem("task")
    if (task === "update") {

      fetchalldata();
    }

  }, [patient_trial_number,reload]);
  return (

    <div className={cn("flex flex-row justify-center items-start h-screen w-screen bg-gradient-to-l from-green-2 from-10% via-green-4 via-60% to-green-3 to-90%", inter.className)}>

      {/* <div>
      {qtypes.map((qtype, index) => (
        <div key={index} className="specific-div">
          {qtype}
        </div>
      ))}
    </div> */}
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


              {sidebaritems.map((item: {
                path: string;
                title: string;
                icon?: any;
                category: string;
              }, index) => {
                const pathname = usePathname()
                const isActive = item.path === pathname
                const cus_category = item.category
                // if (setReload && isActive) {
                //   setReload(pathname)
                // }
                return (
                  <div key={index} onClick={() => router.push(item.path)} className={cn(`text-start text-lg my-4 mx-3 px-5 py-2 cursor-pointer hover:bg-white/30 ${isActive ? 'text-green-5 font-extrabold bg-white rounded-lg' : 'font-extrabold'} `, (qtypes && qtypes.includes(cus_category)) ? 'text-red-500' : 'text-black ')}>
                    {item.icon === undefined ? null : <FontAwesomeIcon className='mr-3 w-[20px] h-[20px]' icon={item.icon} />}{item.title}
                    {/* <FontAwesomeIcon className='mr-3 w-[20px] h-[20px]' icon={item.icon} />{item.title} */}

                  </div>
                )
              })}

            </ScrollArea>

          </SheetClose>

        </SheetContent>
      </Sheet>


      <Sidebar items={sidebaritems} patient_trial_number={patient_trial_number} qtypes={qtypes} setReload={setReload} />

      <div className="grow ">

        {children}
      </div>

    </div>



  );
}
