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
import { useToast } from "@/components/ui/use-toast"
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



const CreateUser = () => {
    const router = useRouter();
    // useEffect(() => {
    //     const login = localStorage.getItem("login_admin");
    
    //     if (login === "true") {
    //         router.push('/admin')
    //     }
    
    // }, []);
    const { toast } = useToast()
    const [passwordShown, setPasswordShown] = useState(false);
    const [passwordShown1, setPasswordShown1] = useState(false);
    const [admin, setAdmin] = useState("");
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [city , setCity] = useState('');
    const [citycode , setCitycode] = useState('');
    const [loading, setloading] = useState(false)
    const handleregister = () => {
        if (password === confirmPassword) {
            
            if(admin !== '' && password !== '' && city !== '' && citycode !== '')
                {
                    setloading(true)
                    fetch('/api/createuser', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            unique_id: admin,
                            password: password,
                            city: city,
                            citycode: citycode
                        }),
                    })
                        .then((response) => response.json())
                        .then((data) => {
                            setloading(false)
                            if(data.executed)
                            {
                                toast({
                                    title: data.message,
                                    
                                    variant: 'success',
                                })
                                
                            }
                            else
                            {
                                toast({
                                    title: data.message,
                                    variant: 'destructive',
                                    description: data.error
                                })
                            }
                        })
                        .catch((error) => {
                            setloading(false)
                            console.error('Error:', error);
                            toast({
                                title: "Error",
                                variant: 'destructive',
                                description: error
                            })
                        });
                }
            else{
                toast({
                    title: 'Please fill all the fields',
                    variant: 'destructive',
            
                })
            }

        }
        else {
            toast({
                title: 'Password Mismatch',
                variant: 'destructive',
            })
        }
    };
    const togglePasswordVisibility = () => {
        setPasswordShown(!passwordShown);
    };

    const toggleConfirmPasswordVisibility = () => {
        setPasswordShown1(!passwordShown1);
    };
    return (
        <div className='flex flex-col w-full h-screen items-center justify-center'>

            <div className=' w-full text-center text-5xl text-green-5 font-extrabold justify-center items-center mb-10'>

                Register New User
            </div>
            <Card className=' drop-shadow-lg relative backdrop-blur-xl bg-white/30 w-4/5 md:w-2/5 lg:w-5/12  py-10 mt-[90px]  border-4 border-green-5 '>
                <div className='absolute flex flex-row justify-center items-center w-full top-[-100px] '>
                    <FontAwesomeIcon icon={faUser} className='text-green-5 w-[120px] h-[120px] bg-green-2 rounded-full p-6 border border-4 border-green-5' size="3x" />

                </div>
                <CardHeader>

                </CardHeader>
                <CardContent className=' mt-[50px] flex flex-col justify-start items-start'>


                    <Label htmlFor="email">User ID</Label>
                    <Input className='mb-6'
                        type="text"
                        placeholder="Admin ID"
                        value={admin}
                        onChange={(e) => setAdmin(e.target.value)} />

                    <div className='flex flex-row justify-start items-center w-full mb-6'>

                    <DropdownMenu >
                        <DropdownMenuTrigger><Button className='bg-green-5 text-white hover:bg-green-4 hover:text-green-5   text-sm' variant="outline" >Choose City</Button></DropdownMenuTrigger>
                        <DropdownMenuContent>
                            
                            {   cities.map((city) => (
                                <DropdownMenuItem key={city.city} onClick={() => {setCity(city.city);setCitycode(city.city_id)}}>{city.city}</DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <div className='flex grow font-bold text-green-5  text-center justify-center'>
                            {city!==""?city:"No City Chosen"}
                    </div>
                    </div>



                    <Label htmlFor="password">Password</Label>

                    <div className='relative mb-4 w-full' style={{ display: 'flex', alignItems: 'center' }}>
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


                    <Label htmlFor="password mt-7">Confirm Password</Label>

                    <div className='relative w-full' style={{ display: 'flex', alignItems: 'center' }}>
                        <Input
                            className='pr-10'
                            type={passwordShown1 ? 'text' : 'password'}
                            placeholder="Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <button
                            className='absolute inset-y-0 right-0  h-full px-4'
                            onClick={toggleConfirmPasswordVisibility}
                            style={{ cursor: 'pointer' }}
                        >
                            {passwordShown1 ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
                        </button>
                    </div>
                    <div className='flex flex-col justify-center items-center mt-6 w-full'>

                        <Button className='bg-green-5 text-white hover:bg-green-4 hover:text-green-5 mt-7 px-9 py-5 text-lg' variant="outline" onClick={handleregister}>Submit 
                        {loading?<div className="animate-spin w-[25px] h-[25px] border-4 border-t-4 border-white border-t-transparent  rounded-full ms-3"></div>
:<></>}
                        {/* <div className="animate-spin w-[25px] h-[25px] border-4 border-t-4 border-white border-t-transparent  rounded-full ms-3"></div> */}

                        </Button>
                        </div>

                </CardContent>
                <CardFooter>
                </CardFooter>
            </Card>
        </div>

    )
}

export default CreateUser
