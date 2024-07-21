"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { Button } from "@/components/ui/button"
import { toast, useToast } from "@/components/ui/use-toast"
import mylogo from '@/assets/aims_jodhpur2.png'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import cities from '@/constants/ConstantData'
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Scrollbar } from '@radix-ui/react-scroll-area';



const Viewusers = () => {
  const [data, setData] = useState<any>([])
  const [loading, setLoading] = useState(false);
  const router = useRouter()
  //   useEffect(() => {
  //     const login = localStorage.getItem("login_admin");

  //     if (login === "true") {
  //         router.push('/admin')
  //     }

  // }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/viewusers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const userdata = await response.json();
      setLoading(false);
      if (userdata.executed) {
        setData(userdata.data);
      }
      else {
        console.log('No data found');
        toast({
          title: "Error",
          variant: "destructive",
          description: userdata.data
        })
      }

    } catch (error) {
      setLoading(false);
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {

    fetchData();
  }, []);


  const handledelete = async (unique_id: string) => {
    try {
      const response = await fetch('/api/deleteuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ unique_id }),
      });
      const data = await response.json();
      if (data.status === 200) {
        // window.location.reload();
        fetchData();
        console.log('User deleted successfully');

      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  }
  return (
    <div className='relative flex flex-col justify-start items-center w-full h-screen'>
      <h1 className='text-3xl font-bold my-6'>View Users</h1>
      <ScrollArea className="flex w-full h-full mt-[50px] px-5 ">
        <table className="w-full border-collapse border border-green-5 overflow-auto">
          <thead>
            <tr>
              <th className='text-center text-green-5 font-extrabold border border-green-5'>Unique ID</th>
              <th className='text-center text-green-5 font-extrabold border border-green-5'>Password</th>
              <th className='text-center text-green-5 font-extrabold border border-green-5'>City</th>
              <th className='text-center text-green-5 font-extrabold border border-green-5'>City Code</th>
              <th className='text-center text-green-5 font-extrabold border border-green-5'>Action</th>

            </tr>
          </thead>
          <tbody className=''>
            {data.map((user: { unique_id: string, password: string, city: string, citycode: string }, index: React.Key | null | undefined) => (
              <tr key={index}>
                <td className='text-center border border-green-5'>{user.unique_id}</td>
                <td className='text-center border border-green-5'>{user.password}</td>
                <td className='text-center border border-green-5'>{user.city}</td>
                <td className='text-center border border-green-5'>{user.citycode}</td>
                <td className=' text-center w-ful' >
                  <AlertDialog>
                    <AlertDialogTrigger className='text-center border border-green-5 bg-red-500 text-white hover:bg-red-600 cursor-pointer w-full h-full'>
                      Delete
                    </AlertDialogTrigger>
                    {/* </td> */}
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently delete {user.unique_id}'s account
                          and remove this user from our servers.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction className='bg-red-500 text-white' onClick={() => handledelete(user.unique_id)}>Continue</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
            <Scrollbar orientation="horizontal" className='h-5 w-full bg-gray-500 '/>
      </ScrollArea>
      {
        loading ? (
          <div className='absolute animate-spin h-[100px] w-[100px] top-[50%] left-[40%] border-4 border-t-4 border-green-500 border-t-transparent rounded-full'></div>
        ) : null
      }



    </div>
  )
}

export default Viewusers
