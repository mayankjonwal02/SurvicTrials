"use client"
import React from 'react';
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

const InclusionCriteria = () => {

    const { toast } = useToast()
    const router = useRouter();

    const [criteria1, setCriteria1] = React.useState("");
    const [criteria2, setCriteria2] = React.useState("");
    const [criteria3, setCriteria3] = React.useState("");
    const [criteria4, setCriteria4] = React.useState("");
    const [criteria5, setCriteria5] = React.useState("");
    const [criteria6, setCriteria6] = React.useState("");

    const handleSubmit = () => {
        if (criteria1 === '' || criteria2 === '' || criteria3 === '' || criteria4 === '' || criteria5 === '' || criteria6 === '') {
            toast({
                title: "Error",
                description: "Please fill in all the fields",
                variant: "destructive",
            })

            return false
        }

        if (criteria1 === 'No' || criteria2 === 'No' || criteria3 === 'No' || criteria4 === 'No' || criteria5 === 'No' || criteria6 === 'No') 
            {
            toast({
                title: "Failed",
                description: "Criteria Not Satisfied",
                variant: "destructive",
            })

            router.push('/home')


        }
        else {
            toast({
                title: "Success",
                description: "Inclusion Criteria Submitted",
                variant: "success",
            })

            router.push('/exclusion_criteria')
        }
    }
    const questions = [
        { question: 'Age 18-75 years; ECOG PS 0-2', options: ['Yes', 'No'], value: criteria1, setValue: setCriteria1 },
        { question: 'Clinical Stage cT1-4a, cN2-N3*, M0- as per UICC 2018', options: ['Yes', 'No'], value: criteria2, setValue: setCriteria2 },
        { question: 'Newly diagnosed, treatment-naive, biopsy or cytology proven OSCC', options: ['Yes', 'No'], value: criteria3, setValue: setCriteria3 },
        { question: 'No contraindication to Cisplatin or radiotherapy', options: ['Yes', 'No'], value: criteria4, setValue: setCriteria4 },
        { question: 'Patients eligible for definitive curative intent treatment after discussion in multidisciplinary tumour board', options: ['Yes', 'No'], value: criteria5, setValue: setCriteria5 },
        {
            question: 'Adequate organ function at time of participation:',
            subQuestions: [
                'Haematological: Haemoglobin > 9gm/dl, ANC ≥ 1500/cmm3, Platelet ≥ 100000/cmm3',
                'Liver Function test: Bilirubin ≤ 2 x upper limit normal (ULN), AST/ALT/ALP ≤ 2.5 x ULN',
                'Renal Function test: Creatinine ≤ 1.5 ULN, Creatinine Clearance ≥ 60 ml/min'
            ],
            options: ['Yes', 'No'], value: criteria6, setValue: setCriteria6
        },
    ];

    return (
        <div>

            <CustomForm questions={questions} handleSubmit={handleSubmit} buttontitle="Submit" formtitle="Inclusion Criteria" loading={false}/>
        
        </div>
    );
};

export default InclusionCriteria;
