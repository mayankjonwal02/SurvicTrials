"use client"
import React from 'react'
import logo from '../assets/aims_jodhpur2.png'
import { ScrollArea } from "@/components/ui/scroll-area"
import sidebaritems from '@/constants/Sidebaritems'
import { usePathname , useRouter} from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons'

interface SidebarItem {
  title: string
  path: string
  icon?: any
}


const Sidebar = ({items , patient_trial_number }: {items: SidebarItem[] , patient_trial_number?: string}) => {
  const router = useRouter()
  return (
    <ScrollArea className=' rounded-3xl m-5 hidden md:flex flex-col h-[95%] w-[300px]  justify-start items-center backdrop-blur-xl bg-green-5/20' >
      <div className='flex flex-col  justify-center items-center mt-5  px-3'>
        {patient_trial_number ? <div><div className="text-xl font-bold text-green-5 mb-4">Trial No : {patient_trial_number}</div></div> : null}
      {/* <div><div className="text-xl font-bold text-green-5 mb-4">Trial No : {patient_trial_number}</div></div> */}
      <img src={logo.src} className='w-40 h-40 '/>
      
   
      </div>
     

      {items.map((item, index) => {
        const pathname = usePathname()
        const isActive = item.path === pathname
        return (
          <div key={index} onClick={() => router.push(item.path)} className={`text-start text-lg my-4 mx-3 px-5 py-2 cursor-pointer hover:bg-white/30 ${isActive ? 'text-green-5 font-extrabold bg-white rounded-lg' : 'text-black font-extrabold'} `}>
            
            {item.icon === undefined ? null : <FontAwesomeIcon className='mr-3 w-[20px] h-[20px]' icon={item.icon} />}{item.title}

            {/* <FontAwesomeIcon className='mr-3 w-[20px] h-[20px]' icon={item.icon} />{item.title} */}
            
            </div>
        )
      })}
      
      </ScrollArea>
  )
}

export default Sidebar
