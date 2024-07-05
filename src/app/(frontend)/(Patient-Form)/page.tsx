"use client"
import React, { useState } from 'react'
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
import { useToast } from "@/components/ui/use-toast"
import mylogo from '@/assets/aims_jodhpur2.png' 




const DoctorLogin = () => {
    const router = useRouter();
    const { toast } = useToast()
    const [passwordShown, setPasswordShown] = useState(false);
    const [admin, setAdmin] = useState("");
    const [password, setPassword] = useState('');
    const [loading, setloading] = useState(false)

    const handleLogin = () => {
        if (admin !== '' && password !== '') {
            try {
                setloading(true)
                fetch('/api/userlogin', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        unique_id: admin,
                        password: password
                    }),
                })
                    .then((response) => response.json())
                    .then((data) => {
                        setloading(false)
                        if(data.executed)
                            {
                                router.push('/home')
                                toast({
                                    title: 'Login Successful',
                                    description: 'Welcome Back',
                                    variant: 'success',
                                })
                            }
                            else
                            {
                                toast({
                                    title: 'Login Failed',
                                    description: data.message,
                                    variant: 'destructive',
                                })
                            }
                    });
            } catch (error : any) {
                setloading(false)
                toast({
                    title: 'Login Failed',
                    description: error.message,
                    variant: 'destructive',
                })
            }
            
            

        } else {
            console.log('Login Failed')
            toast({
                title: 'Missing Credentials',
               
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
            <div className='text-black text-4xl md:text-5xl font-extrabold my-3 '>Login</div>
            <div className='flex flex-row justify-center items-center w-screen grow gap-[200px]'>
                {/* <div className=' w-3/12 text-center hidden md:flex justify-center items-center '>
                <FontAwesomeIcon icon={faUser} className='text-green-5 w-[270px] h-[270px]' size="3x" />
                <img src={mylogo.src} alt="Description of my image" />               
                </div> */}
                <Card className=' drop-shadow-lg relative backdrop-blur-xl bg-white/30 w-4/5 md:w-2/5 lg:w-4/12  py-10 mt-[90px]  border-4 border-green-5 '>
                    <div className='absolute flex flex-row justify-center items-center w-full top-[-70px] '>

                        <img src={mylogo.src} alt="Description of my image" className='w-[150px] h-[150px] border-4 rounded-full border-green-5 ' /> </div>
                    <CardHeader>

                    </CardHeader>
                    <CardContent className=' mt-[50px]'>


                        <Label htmlFor="email">Unique ID</Label>
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
                        <div className='flex flex-row justify-center items-center mt-6'>

                            <Button className='bg-green-5 text-white hover:bg-green-4 hover:text-green-5 mt-7 px-9 py-5 text-lg' variant="outline" onClick={handleLogin}>Submit

                            {loading && <div className='animate-spin h-[25px] w-[25px] border-4 border-t-4 border-green-3 border-t-transparent rounded-full ms-3'></div>}
                            {/* <div className='animate-spin h-[25px] w-[25px] border-4 border-t-4 border-green-3 border-t-transparent rounded-full ms-3'></div> */}
                            </Button>
                        </div>

                    </CardContent>
                    <CardFooter>
                    </CardFooter>
                </Card>
            </div>

        </div>
    )
}

export default DoctorLogin
