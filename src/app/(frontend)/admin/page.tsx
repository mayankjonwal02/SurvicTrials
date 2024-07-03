"use client"
import React, { useState } from 'react'
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
import { useToast } from "@/components/ui/use-toast"




const Admin = () => {
    const { toast } = useToast()
    const [passwordShown, setPasswordShown] = useState(false);
    const [admin, setAdmin] = useState("");
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (admin === process.env.adminid && password === process.env.adminpassword) {
            console.log('Login Successful')

            toast({
                title: 'Login Successful',
                description: 'Welcome Back',
                variant: 'success',
            })
            
        } else {
            console.log('Login Failed')
            toast({
                title: 'Login Failed',
                description: 'Invalid Credentials',
                variant: 'destructive',
            })

            
        }
    };
    const togglePasswordVisibility = () => {
        setPasswordShown(!passwordShown);
    };
    return (
        <div className='flex flex-col justify-top items-center h-screen'>

            <div className='text-green-5 text-5xl md:text-7xl font-extrabold my-8'>SurVic Trials</div>
            <div className='text-green-5 text-4xl md:text-5xl font-extrabold my-3 '>Admin Panel</div>
            <div className='flex flex-row justify-around items-center w-screen grow '>
                <div className=' w-1/5 text-center hidden md:flex '><FontAwesomeIcon icon={faUser} className='text-green-5 w-[270px] h-[270px]' size="3x" /></div>
                <Card className='backdrop-blur-xl bg-white/30 w-4/5 md:w-2/5 '>
                    <CardHeader>
                        {/* <CardTitle className='text-center font-extrabold text-4xl my-5'>Admin Panel</CardTitle> */}

                    </CardHeader>
                    <CardContent>
                        <Label htmlFor="email">Admin ID</Label>
                        <Input className='mb-6'
                            type="text"
                            placeholder="Admin ID"
                            value={admin}
                            onChange={(e) => setAdmin(e.target.value)} />


                        <Label htmlFor="password">Password</Label>

                        <div className='relative' style={{ display: 'flex', alignItems: 'center' }}>
                            <Input
                                className='pr-10'
                                type={passwordShown ? 'text' : 'password'}
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                className='absolute inset-y-0 right-0  h-full px-4'
                                onClick={togglePasswordVisibility}
                                style={{ cursor: 'pointer' }}
                            >
                                {passwordShown ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
                            </button>
                        </div>
                        <div className='flex flex-row justify-center items-center'>

                            <Button className='bg-green-5 text-white hover:bg-green-4 hover:text-green-5 mt-7' variant="outline" onClick={handleLogin}>Login</Button>
                        </div>

                    </CardContent>
                    <CardFooter>
                    </CardFooter>
                </Card>
            </div>

        </div>
    )
}

export default Admin
