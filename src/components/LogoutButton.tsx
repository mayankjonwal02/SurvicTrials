import React from 'react'
import { faRightFromBracket,faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/navigation'

const LogoutButton = () => {
    const router = useRouter();
  return (
    <div className='w-full'>
      <div className=' w-full p-3 flex flex-row justify-end items-center text-green-5 '>
      <div className='border border-2 me-4 p-1 rounded-full border-green-5 flex flex-row justify-end items-center bg-green-4 hover:bg-green-1 font-bold cursor-pointer' onClick={() => {
                    
                    
                    router.push('/home')}}>

                    <FontAwesomeIcon icon={faHome} className='w-[20px] me-1' /> Home</div>
                <div className='border border-2 p-1 rounded-full border-green-5 flex flex-row justify-end items-center bg-green-4 hover:bg-green-1 font-bold cursor-pointer' onClick={() => {
                    
                    localStorage.clear()
                    router.push('/')}}>

                    <FontAwesomeIcon icon={faRightFromBracket} className='w-[20px] me-1' /> Logout</div>
            </div>
    </div>
  )
}

export default LogoutButton
