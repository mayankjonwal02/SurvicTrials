"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { Input } from "@/components/ui/input"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import mylogo from '@/assets/aims_jodhpur2.png' 

const Admin = () => {
    const router = useRouter();
    const { toast } = useToast()
    const [passwordShown, setPasswordShown] = useState(false);
    const [admin, setAdmin] = useState("");
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (admin.trim() === process.env.adminid && password.trim() === process.env.adminpassword) {
            console.log('Login Successful')

            localStorage.setItem("login_admin", "true")
            toast({
                title: 'Login Successful',
                description: 'Welcome Back',
                variant: 'success',
            })
            router.push('/admintask/createuser')

        } else {
            console.log('Login Failed')
            toast({
                title: 'Login Failed',
                description: 'Invalid Credentials',
                variant: 'destructive',
            })
        }
    };
         // Event handler for key press
         const handleKeyPress = (event: { key: string; }) => {
            if (event.key === 'Enter') {
                handleLogin();
            }
        };
    
        // Use useEffect to add event listener when component mounts
        useEffect(() => {
            window.addEventListener('keydown', handleKeyPress);
    
            // Cleanup the event listener when the component unmounts
            return () => {
                window.removeEventListener('keydown', handleKeyPress);
            };
        }, [admin, password]); // Dependencies array ensures the function updates if these values change
    
    const togglePasswordVisibility = () => {
        setPasswordShown(!passwordShown);
    };

    return (
        <div className='flex flex-col justify-start items-center h-screen w-screen overflow-x-hidden '>
            <div className='text-green-5 text-5xl md:text-5xl lg:text-6xl font-extrabold mt-8'>SurVic Trials</div>
            <div className='text-black text-4xl md:text-4xl font-extrabold my-7 '>Admin Panel</div>
            <div className='flex flex-col justify-center items-center w-full grow'>
                <Card className='drop-shadow-lg relative backdrop-blur-xl bg-white/30 w-11/12 md:w-2/5 lg:w-3/12 pt-10 mt-16 border-4 border-green-5'>
                    <div className='absolute flex justify-center w-full top-[-70px]'>
                        <img src={mylogo.src} alt="Description of my image" className='w-[130px] h-[130px] border-4 rounded-full border-green-5' />
                    </div>
                    <CardHeader />
                    <CardContent className='mt-[10px]'>
                        <Label htmlFor="email">Admin ID</Label>
                        <Input
                            className='mb-6'
                            type="text"
                            placeholder="Admin ID"
                            value={admin}
                            onChange={(e) => setAdmin(e.target.value)}
                        />
                        <Label htmlFor="password">Password</Label>
                        <div className='relative flex items-center'>
                            <Input
                                className='pr-10'
                                type={passwordShown ? 'text' : 'password'}
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                className='absolute inset-y-0 right-0 h-full px-4'
                                onClick={togglePasswordVisibility}
                                style={{ cursor: 'pointer' }}
                            >
                                {passwordShown ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
                            </button>
                        </div>
                        <div className='flex justify-center mt-6'>
                            <Button className='bg-green-5 text-white hover:bg-green-4 hover:text-green-5 mt-7 px-9 py-3 text-lg' variant="outline" onClick={handleLogin}>
                                Submit
                            </Button>
                        </div>
                    </CardContent>
                    <CardFooter />
                </Card>
            </div>
        </div>
    )
}

export default Admin
