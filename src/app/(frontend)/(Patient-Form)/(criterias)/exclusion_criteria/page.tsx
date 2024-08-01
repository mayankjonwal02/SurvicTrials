"use client"
import React, { useState, useEffect } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import "@/customcss/scrollbar.css";
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from 'next/navigation';
import CustomForm from '@/components/customform';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { set } from 'mongoose';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from '@/lib/utils';


const ExclusionCriteria = () => {
    // const user = JSON.parse(localStorage.getItem("user") || "{}");
    const { toast } = useToast()
    const router = useRouter();

    useEffect(() => {
        const login = localStorage.getItem("login");

        if (login !== "true") {
            router.push('/')
        }

    }, []);


    const [user, setUser] = useState<any>({});
    const [criteria1, setCriteria1] = React.useState("");
    const [criteria2, setCriteria2] = React.useState("");
    const [criteria3, setCriteria3] = React.useState("");
    const [criteria4, setCriteria4] = React.useState("");
    const [criteria5, setCriteria5] = React.useState("");
    const [criteria6, setCriteria6] = React.useState("");
    const [Patient_trial_number, setPatient_trial_number] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [loading1, setLoading1] = React.useState(false);
    const [patientName, setPatientName] = React.useState("");
    const [consentTakenBy, setConsentTakenBy] = React.useState("");
    const [investigatorName, setInvestigatorName] = React.useState("");
    const [date, setDate] = React.useState<Date>()
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
        setUser(storedUser);
        setCriteria6(storedUser.city);
    }, []);

    const settrialno = (trialnumber : string) => {
        localStorage.setItem("patienttrialnumber", trialnumber);
    }
    const handleSubmit = async () => {
        if (criteria1 === '' || criteria2 === '' || criteria3 === '' || criteria5 === '' || criteria6 === '') {
            toast({
                title: "Error",
                description: "Please fill in all the fields",
                variant: "destructive",
            })

            return false
        }

        if (criteria1 === 'Yes' || criteria2 === 'Yes' || criteria3 === 'Yes' ||  criteria5 === 'Yes' || criteria6 === 'Yes') {
            toast({
                title: "Failed",
                description: "Criteria Not Satisfied",
                variant: "destructive",
            })




            router.push('/home')


        }
        else {


            try {
                setLoading(true);
                let responce1 = await fetch(`/api/getallpatients/${user.citycode}`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({}),
                });
                let responce = await responce1.json();
                if (responce.executed) {
                    let allpatients = responce.data;
                    let count = allpatients.length;
                    let currentyr = new Date().getFullYear();

                    let patient_trial_number = `${currentyr}-${user.citycode.slice(0, 3).toUpperCase()}-${count + 1}`
                    setPatient_trial_number(patient_trial_number);
                    setLoading(false);
                    document.getElementById("submitbutton")!.click();

                }
                else {
                    toast({
                        title: "Failed",
                        description: responce.message,
                        variant: "destructive",
                    })
                }

            } catch (error: any) {
                setLoading(false);
                toast({
                    title: "Failed",
                    description: error.message,
                    variant: "destructive",
                })
            }

            // toast({
            //     title: "Success",
            //     description: "Inclusion Criteria Submitted",
            //     variant: "success",
            // })
        }
    }


    const createpatient = async () => {
        console.log(date)
        if (patientName === '' || consentTakenBy === '' || investigatorName === '' || date === undefined) {
            toast({
                title: "Error",
                description: "Please fill in all the fields",
                variant: "destructive",
            })

        }
        else {
            try {
                setLoading1(true);
                const formattedDate = format(date, "dd-MM-yyyy");
                settrialno(Patient_trial_number);
                let responce2 = await fetch(`/api/createpatient`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    
                    body: JSON.stringify({
                        patient_trial_number: Patient_trial_number,
                        submittedBy: user.unique_id,
                        city: user.city,
                        citycode: user.citycode,
                        patientName: patientName,
                        consentTakenBy: consentTakenBy,
                        investigatorName: investigatorName,
                        date:  format(date, "dd-MM-yyyy")

                    }),
                });

                let jsondata = await responce2.json();
                setLoading1(false);
                if (jsondata.executed) {
                    toast({
                        title: "Success",
                        description: jsondata.message,
                        variant: "success",
                    })
                    router.push('/form/counselling')
                }
                else {
                    toast({
                        title: "Failed",
                        description: jsondata.message,
                        variant: "destructive",
                    })
                }

            } catch (error: any) {
                setLoading1(false);
                toast({
                    title: "Failed",
                    description: error.message,
                    variant: "destructive",
                })

            }
        }

    }
    const questions = [
        { question: 'Pregnant ?' , inputtype:'dropdown' , options: ['Yes', 'No'], value: criteria1, setValue: setCriteria1 },
        { question: 'History of moderate to severe hearing loss.' , inputtype:'dropdown' , options: ['Yes', 'No'], value: criteria2, setValue: setCriteria2 },
        { question: 'History of previous malignancy excluding non-melanoma skin cancers or cervical carcinoma in situ.' , inputtype:'dropdown' , options: ['Yes', 'No'], value: criteria3, setValue: setCriteria3 },
        // { question: 'Documented Weight loss of more than 15% in the last 6 months.', options: ['Yes', 'No'] , inputtype:'dropdown' , value: criteria4, setValue: setCriteria4 },
        { question: 'Patients with known HIV, hepatitis B or C infection (severe/uncompensated).', options: ['Yes', 'No'] , inputtype:'dropdown' , value: criteria5, setValue: setCriteria5 },
        {
            question: 'City of Institute.',
            options: [],  inputtype:'dropdown' , value: criteria6, setValue: setCriteria6
        },
    ];

    return (
        <div className='flex flex-col w-full h-screen items-center justify-center'>

            <CustomForm questions={questions} handleSubmit={handleSubmit} buttontitle="Submit" formtitle="Exclusion Criteria" loading={loading} />
            <Dialog >
                <DialogTrigger asChild>
                    <Button id='submitbutton' className='hidden' variant="outline">Share</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md backdrop-blur-sm bg-green-1">
                    <DialogHeader>
                        <DialogTitle>Patient Created Successfully</DialogTitle>

                    </DialogHeader>
                    <div className='text-lg  w-full text-center  border-b-2 border-b-green-5 mb-5'>Patient Trial Number : <b>{Patient_trial_number}</b></div>
                    <ScrollArea className="h-72">

                        <div className="flex items-center space-x-2">
                            <div className="flex-1 gap-2 flex flex-col justify-center items-center">

                                <div className='w-full h-fit flex flex-col justify-center items-start'>
                                    <Label className="text-sm mb-1">Patient Name</Label>
                                    <Input className="w-[70%] mx-1 mb-3" placeholder='Patient Name' value={patientName} onChange={(e) => setPatientName(e.target.value)} />

                                    <Label className="text-sm mb-1">Who took Consent</Label>
                                    <Input className="w-[70%] mx-1 mb-3" placeholder='Who took Consent' value={consentTakenBy} onChange={(e) => setConsentTakenBy(e.target.value)} />

                                    <Label className="text-sm mb-1">Investigator's Name</Label>
                                    <Input className="w-[70%] mx-1 mb-3" placeholder="Investigator's Name" value={investigatorName} onChange={(e) => setInvestigatorName(e.target.value)} />

                                    <Label className="text-sm mb-1">Choose Date</Label>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "w-[70%] mx-1 mb-3 justify-start text-left font-normal",
                                                    !date && "text-muted-foreground"
                                                )}
                                            >
                                                <CalendarIcon className="mr-2 h-4 w-4" />
                                                {date ? format(date, "dd-MM-yyyy") : <span>Pick a date</span>}
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0">
                                            <Calendar
                                                mode="single"
                                                selected={date}
                                                onSelect={setDate}
                                                initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>
                                </div>
                                <div className='flex flex-row gap-3 justify-around items-center w-full'>
                                    <Button variant="outline" className='w-fit bg-green-5 text-white' onClick={() => { createpatient() }}>
                                        Proceed
                                        {
                                            loading1 ? <div className='ms-2 w-[20px] h-[20px] animate-spin border border-2 border-t-2 rounded-full border-white border-t-transparent'></div> : null
                                        }
                                    </Button>


                                </div>
                            </div>

                        </div>
                    </ScrollArea>

                </DialogContent>
            </Dialog>
        </div>
    );
};

export default ExclusionCriteria;
