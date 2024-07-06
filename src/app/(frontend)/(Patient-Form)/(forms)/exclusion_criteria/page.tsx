"use client"
import React,{useState,useEffect} from 'react';
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


const ExclusionCriteria = () => {
    // const user = JSON.parse(localStorage.getItem("user") || "{}");
    const { toast } = useToast()
    const router = useRouter();
    const [user, setUser] = useState<any>({});
    const [criteria1, setCriteria1] = React.useState("");
    const [criteria2, setCriteria2] = React.useState("");
    const [criteria3, setCriteria3] = React.useState("");
    const [criteria4, setCriteria4] = React.useState("");
    const [criteria5, setCriteria5] = React.useState("");
    const [criteria6, setCriteria6] = React.useState("");
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
        setUser(storedUser);
        setCriteria6(storedUser.city);
    }, []);
    const handleSubmit = async () => {
        if (criteria1 === '' || criteria2 === '' || criteria3 === '' || criteria4 === '' || criteria5 === '' || criteria6 === '') {
            toast({
                title: "Error",
                description: "Please fill in all the fields",
                variant: "destructive",
            })

            return false
        }

        if (criteria1 === 'Yes' || criteria2 === 'Yes' || criteria3 === 'Yes' || criteria4 === 'Yes' || criteria5 === 'Yes' || criteria6 === 'Yes' ) 
            {
            toast({
                title: "Failed",
                description: "Criteria Not Satisfied",
                variant: "destructive",
            })
            

            

            router.push('/home')


        }
        else {


            try {
                let responce1 = await fetch(`/api/getallpatients/${user.citycode}`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({}),
                });
                let responce = await responce1.json();
                if(responce.executed)
                    {
                        let allpatients = responce.data;
                let count = allpatients.length;
                let currentyr = new Date().getFullYear();
                
                let patient_trial_number = `${currentyr}-${user.citycode.slice(0, 3).toUpperCase()}-${count + 1}`

                try {
                    
                        let responce2 = await fetch(`/api/createpatient`, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                patient_trial_number: patient_trial_number,
                                submittedBy:  user.unique_id,
                                city: user.city,
                                citycode: user.citycode}),
                        });

                        let jsondata = await responce2.json();
                        if(jsondata.executed)
                        {
                            toast({
                                title: "Success",
                                description: jsondata.message,
                                variant: "success",
                            })
                        }
                        else
                        {
                            toast({
                                title: "Failed",
                                description: jsondata.message,
                                variant: "destructive",
                            })
                        }

                } catch (error : any) {
                    toast({
                        title: "Failed",
                        description: error.message,
                        variant: "destructive",
                    })
                    
                }
                    }
                else{
                    toast({
                        title: "Failed",
                        description: responce.message,
                        variant: "destructive",
                    })
                }
                
            } catch (error : any) {
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
    const questions = [
        { question: 'Pregnant ?', options: ['Yes', 'No'], value: criteria1, setValue: setCriteria1 },
        { question: 'History of moderate to severe hearing loss.', options: ['Yes', 'No'], value: criteria2, setValue: setCriteria2 },
        { question: 'History of previous malignancy excluding non-melanoma skin cancers or cervical carcinoma in situ.', options: ['Yes', 'No'], value: criteria3, setValue: setCriteria3 },
        { question: 'Documented Weight loss of more than 15% in the last 6 months.', options: ['Yes', 'No'], value: criteria4, setValue: setCriteria4 },
        { question: 'Patients with known HIV, hepatitis B or C infection.', options: ['Yes', 'No'], value: criteria5, setValue: setCriteria5 },
        {
            question: 'City of Institute.',
            options: [user.city], value: criteria6, setValue: setCriteria6
        },
    ];

    return (
        <div>

            <CustomForm questions={questions} handleSubmit={handleSubmit} buttontitle="Submit" formtitle="Exclusion Criteria" />
        
        </div>
    );
};

export default ExclusionCriteria;
