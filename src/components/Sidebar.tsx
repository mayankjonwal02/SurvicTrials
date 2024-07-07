"use client"
import React from 'react'
import logo from '../assets/aims_jodhpur2.png'
import { ScrollArea } from "@/components/ui/scroll-area"
import sidebaritems from '@/constants/Sidebaritems'
import { usePathname , useRouter} from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons'
const Sidebar = () => {
  const router = useRouter()
  return (
    <ScrollArea className=' rounded-3xl m-5 hidden md:flex flex-col h-[95%] w-[300px]  justify-start items-center backdrop-blur-xl bg-green-5/20' >
      <div className='flex flex-row  justify-center items-center mt-5  px-3'>
      <img src={logo.src} className='w-40 h-40 '/>
      
   
      </div>
     

      {sidebaritems.map((item, index) => {
        const pathname = usePathname()
        const isActive = item.path === pathname
        return (
          <div key={index} onClick={() => router.push(item.path)} className={`text-start text-xl my-7 mx-3 px-8 py-2 cursor-pointer ${isActive ? 'text-green-5 font-extrabold bg-white rounded-lg' : 'text-black font-extrabold'} `}><FontAwesomeIcon className='mr-3' icon={item.icon} />{item.title}</div>
        )
      })}
      
      </ScrollArea>
  )
}

export default Sidebar
