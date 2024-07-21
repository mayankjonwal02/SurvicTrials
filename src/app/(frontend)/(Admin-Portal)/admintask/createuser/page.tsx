"use client"
import React, { useState } from 'react'
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
import { faUser, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import mylogo from '@/assets/aims_jodhpur2.png'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import cities from '@/constants/ConstantData'

const CreateUser = () => {
    const router = useRouter();
    const { toast } = useToast()
    const [passwordShown, setPasswordShown] = useState(false);
    const [passwordShown1, setPasswordShown1] = useState(false);
    const [admin, setAdmin] = useState("");
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [city, setCity] = useState('');
    const [citycode, setCitycode] = useState('');
    const [loading, setloading] = useState(false);

    const handleregister = () => {
        if (password.trim() === confirmPassword.trim()) {
            if(admin.trim() !== '' && password.trim() !== '' && city !== '' && citycode !== '') {
                setloading(true)
                fetch('/api/createuser', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        unique_id: admin.trim(),
                        password: password.trim(),
                        city: city,
                        citycode: citycode
                    }),
                })
                .then((response) => response.json())
                .then((data) => {
                    setloading(false)
                    if(data.executed) {
                        toast({
                            title: data.message,
                            variant: 'success',
                        })
                    } else {
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
            } else {
                toast({
                    title: 'Please fill all the fields',
                    variant: 'destructive',
                })
            }
        } else {
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
        <div className='flex flex-col w-full h-screen items-center justify-center '>
            <div className='w-full text-center text-3xl mt-2 md:text-5xl text-green-5 font-extrabold justify-center items-center mb-10'>
                Register New User
            </div>
            <Card className='drop-shadow-lg relative backdrop-blur-xl bg-white/30 w-full md:w-2/5 lg:w-4/12 pt-10 mt-16 border-4 border-green-5'>
                <div className='absolute flex justify-center w-full top-[-70px]'>
                    <FontAwesomeIcon icon={faUser} className='text-green-5 w-[90px] h-[90px] bg-green-2 rounded-full p-6 border border-4 border-green-5' size="3x" />
                </div>
                <CardHeader />
                <CardContent className='mt-[10px] flex flex-col justify-start items-start '>
                    <Label htmlFor="email">User ID</Label>
                    <Input
                        className='mb-6'
                        type="text"
                        placeholder="Admin ID"
                        value={admin}
                        onChange={(e) => setAdmin(e.target.value)}
                    />
                    <div className='flex flex-row justify-start items-center w-full mb-6'>
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <Button className='bg-green-5 text-white hover:bg-green-4 hover:text-green-5 text-sm' variant="outline">
                                    Choose City
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                {cities.map((city) => (
                                    <DropdownMenuItem key={city.city} onClick={() => {setCity(city.city); setCitycode(city.city_id)}}>
                                        {city.city}
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <div className='flex grow font-bold text-green-5 text-center justify-center'>
                            {city !== "" ? city : "No City Chosen"}
                        </div>
                    </div>
                    <Label htmlFor="password">Password</Label>
                    <div className='relative mb-4 w-full flex items-center'>
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
                    <Label htmlFor="password mt-7">Confirm Password</Label>
                    <div className='relative w-full flex items-center'>
                        <Input
                            className='pr-10'
                            type={passwordShown1 ? 'text' : 'password'}
                            placeholder="Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <button
                            className='absolute inset-y-0 right-0 h-full px-4'
                            onClick={toggleConfirmPasswordVisibility}
                            style={{ cursor: 'pointer' }}
                        >
                            {passwordShown1 ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
                        </button>
                    </div>
                    <div className='flex flex-col justify-center items-center mt-6 w-full'>
                        <Button className='bg-green-5 text-white hover:bg-green-4 hover:text-green-5 mt-7 px-9 py-3 text-lg' variant="outline" onClick={handleregister}>
                            Submit
                            {loading && <div className="animate-spin w-[25px] h-[25px] border-4 border-t-4 border-white border-t-transparent rounded-full ms-3"></div>}
                        </Button>
                    </div>
                </CardContent>
                {/* <CardFooter /> */}
            </Card>
        </div>
    )
}

export default CreateUser
