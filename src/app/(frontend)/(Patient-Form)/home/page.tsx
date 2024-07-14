"use client"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import React, { useEffect } from 'react'
import { motion } from "framer-motion";
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import LogoutButton from '@/components/LogoutButton';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const home = () => {
    const router = useRouter();
    const { toast } = useToast()
    const [patient_trial_number, setPatient_trial_number] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [citycode, setCitycode] = React.useState("");
    const [idlist, setIdlist] = React.useState([]);

    useEffect(() => {
        const login = localStorage.getItem("login");

        if (login !== "true") {
            router.push('/')
        }

    }, []);


    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
        
        setCitycode(storedUser.citycode);
        console.log(citycode);
        if(citycode !== ''){
            fetch(`/api/getallpatients/${citycode}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.data && data.data.length > 0) {
              setIdlist(data.data.map((item: any) => item.patient_trial_number));
            }
          })
          .catch((error) => {
            console.error("Error fetching patients:", error);
          });}
      }, [citycode]);
    

    const handlesubmit = async () => {

        if (patient_trial_number === "") {
            toast({
                title: "Error",
                description: "Please enter patient trial number",
                variant: "destructive",
            })
            return
        }
        try {
            setLoading(true)
            const response = await fetch('/api/getpatientbytrialid', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    trialid: patient_trial_number
                }),
            })
            const data = await response.json();
            if (data.executed) {

                setLoading(false)
                localStorage.setItem("patienttrialnumber", patient_trial_number)
                localStorage.setItem("task","update")
                router.push('/form/demographic')
            }
            else {

                setLoading(false)
                toast({
                    title: "Error",
                    description: data.message,
                    variant: "destructive",
                })
            }
            console.log(data)
        }
        catch (error: any) {

            setLoading(false)
            console.log(error)
            toast({
                title: "Error",
                description: error.message,
                variant: "destructive",
            })
        }
    }


    const handlesubmit_data = async () => {

        if (patient_trial_number === "") {
            toast({
                title: "Error",
                description: "Please enter patient trial number",
                variant: "destructive",
            })
            return
        }
        try {
            setLoading(true)
            const response = await fetch('/api/getpatientbytrialid', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    trialid: patient_trial_number
                }),
            })
            const data = await response.json();
            if (data.executed) {

                setLoading(false)
                localStorage.setItem("patienttrialnumber", patient_trial_number)
                
                router.push('/institutebaseddata')
            }
            else {

                setLoading(false)
                toast({
                    title: "Error",
                    description: data.message,
                    variant: "destructive",
                })
            }
            console.log(data)
        }
        catch (error: any) {

            setLoading(false)
            console.log(error)
            toast({
                title: "Error",
                description: error.message,
                variant: "destructive",
            })
        }
    }


    return (
        <div className='flex flex-col justify-start items-center h-screen w-screen '>
            <LogoutButton />
            <h1 className='text-sm md:text-2xl mt-7 mx-[20px] md:mx-[100px] text-green-5 font-bold text-center bg-white/30 py-6 px-3'>Upfront Surgery Vs Induction Chemotherapy Followed By Surgery In Oral Cavity Squamous Cell Cancers With Advanced Nodal Disease</h1>
            <h1 className='mt-4 font-bold '>{"(SurVic Trial)"}</h1>

            <h1 className='mt-1 font-bold text-center'>{"A Phase 3 Multicentric Randomized Controlled Trial"}</h1>
            <div className='grow w-full flex flex-col  lg:flex-row justify-center items-center gap-[30px] mt-[30px]'>
                {/* <div>Add New Patient</div>
        <div>Update Patient Data</div>
        <div>View Data</div> */}
                <motion.button
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 1 },
                    }}
                    whileTap={{ scale: 0.9 }}
                ><Button className='bg-green-5 h-[40px] md:h-[70px] text-lg md:text-xl lg:text-2xl ' onClick={() => router.push('/inclusion_criteria')}>Add New Patient</Button></motion.button>

                {/* <motion.button
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 1 },
                    }}
                    whileTap={{ scale: 0.9 }}

                ><Button className='bg-green-5 h-[70px] text-2xl' >Update Patient Data</Button></motion.button> */}

                <Dialog >
                    <DialogTrigger asChild>
                        <motion.button
                            whileHover={{
                                scale: 1.2,
                                transition: { duration: 1 },
                            }}
                            whileTap={{ scale: 0.9 }}

                        ><Button className='bg-green-5 h-[40px] md:h-[70px] text-lg md:text-xl lg:text-2xl' >Update Patient Data</Button></motion.button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md backdrop-blur-sm bg-green-1">
                        <DialogHeader>
                            <DialogTitle className='text-xl text-center font-bold'>Enter Patient Trial Number</DialogTitle>

                        </DialogHeader>
                        <div className='flex flex-row justify-around items-center'>

                            {/* <Input className="w-[70%] mx-1 mt-7 mb-3" placeholder='Patient Trial Number' value={patient_trial_number} onChange={(e) => setPatient_trial_number(e.target.value)} /> */}
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild><Button className='bg-green-3 text-green-5 hover:bg-green-4 hover:text-green-5 text-sm border border-2 border-green-5' >
                                    {patient_trial_number !== "" ? patient_trial_number : "Select Patient Trial Number"} <FontAwesomeIcon icon={faChevronDown} className='ms-2' />
                                </Button></DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    {idlist.map((id) => (
                                        <DropdownMenuItem key={id} onClick={() => setPatient_trial_number(id)}>
                                            {id}
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>
                            <Button className='bg-green-5 h-[40px] md:h-[70px] text-lg md:text-xl lg:text-2xl' onClick={handlesubmit}>Submit
                                {loading ? <div className='animate-spin w-[25px] h-[25px] ms-2 border-4 border-t-4 border-white border-t-transparent rounded-full'></div>
                                    : <></>}
                            </Button>

                            {/* {idlist.map((id) => (
                                <div className='w-full flex flex-row justify-between items-center py-1 px-3 my-2 bg-white/30 rounded-lg'>
                                    {id}
                                </div>
                            ))} */}
                        </div>

                    </DialogContent>
                </Dialog>

                
                <motion.button
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 1 },
                    }}
                    whileTap={{ scale: 0.9 }}
                ><Button className='bg-green-5 h-[40px] md:h-[70px] text-lg md:text-xl lg:text-2xl' onClick={() => router.push('/institutebaseddata')}>View Individual Data</Button></motion.button>

                <motion.button
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 1 },
                    }}
                    whileTap={{ scale: 0.9 }}
                ><Button className='bg-green-5 h-[40px] md:h-[70px] text-lg md:text-xl lg:text-2xl' onClick={() => router.push('/institutebasedtable')}>View Overall Data</Button></motion.button>

            </div>
        </div >
    )
}

export default home
