import React from 'react'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/navigation'

const LogoutButton = () => {
    const router = useRouter();
  return (
    <div>
      <div className=' w-screen p-3 flex flex-row justify-end items-center text-green-5 '>
                <div className='border border-2 p-1 rounded-full border-green-5 flex flex-row justify-end items-center bg-green-4 hover:bg-green-1 font-bold cursor-pointer' onClick={() => {
                    
                    localStorage.clear()
                    router.push('/')}}>

                    <FontAwesomeIcon icon={faRightFromBracket} className='w-[20px] me-1' /> Logout</div>
            </div>
    </div>
  )
}

export default LogoutButton
