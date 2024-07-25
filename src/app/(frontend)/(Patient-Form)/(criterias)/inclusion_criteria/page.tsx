"use client"
import React, { useEffect } from 'react';
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
    useEffect(() => {
        const login = localStorage.getItem("login");

        if (login !== "true") {
            router.push('/')
        }

    }, []);

    const [criteria11, setCriteria11] = React.useState("");
    const [criteria12, setCriteria12] = React.useState("");
    const [criteria2, setCriteria2] = React.useState("");
    const [criteria33, setCriteria33] = React.useState("");
    const [criteria34, setCriteria34] = React.useState("");
    const [criteria4, setCriteria4] = React.useState("");
    const [criteria5, setCriteria5] = React.useState("");
    const [criteria6, setCriteria6] = React.useState("");

    const handleSubmit = () => {
        if (criteria11 === '' || criteria12 === '' || criteria2 === '' || criteria33 === '' || criteria34 === '' || criteria4 === '' || criteria5 === '' || criteria6 === '') {
            toast({
                title: "Error",
                description: "Please fill in all the fields",
                variant: "destructive",
            })

            return false
        }

        if (criteria11 === 'No' || criteria12 === 'No' || criteria2 === 'No' || criteria33 === 'No' || criteria34 === 'No' || criteria4 === 'No' || criteria5 === 'No' || criteria6 === 'No') 
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
        { question: 'Age 18-75 years', inputtype:'dropdown' , options: ['Yes', 'No'], value: criteria11, setValue: setCriteria11 },
        { question: 'ECOG PS 0-2', inputtype:'dropdown' , options: ['Yes', 'No'], value: criteria12, setValue: setCriteria12 },
        { question: 'Clinical Stage cT1-4a, cN2-N3*, M0- as per UICC 2018',
            subQuestions:["Preferably Cross section imaging in the form of CECT or MRI of the Face &amp; Neck should be done or reviewed at the accrual centers. USG neck alone would suffice to label N stage if clinician believes so. Nodal staging will be done using standard criteria of size, shape, central fatty hilum, relation with surrounding structures by radiologist. FNAC to establish N status is not mandatory, but suggested in cases of equivocal cases."]
            , inputtype:'dropdown' , options: ['Yes', 'No'], value: criteria2, setValue: setCriteria2 },
        { question: 'Newly diagnosed, treatment-naive', inputtype:'dropdown' , options: ['Yes', 'No'], value: criteria33, setValue: setCriteria33 },
        { question: ' Biopsy or Cytology proven OSCC', inputtype:'dropdown' , options: ['Yes', 'No'], value: criteria34, setValue: setCriteria34 },
        { question: 'No contraindication to Cisplatin** or Radiotherapy',
            
            subQuestions:["** ECOG Performance Status (PS) &gt; 2, Renal failure, Neurologic abnormalities, Audiometric impairment, Hepatic, and Cardiovascular disease."],inputtype:'dropdown' , options: ['Yes', 'No'], value: criteria4, setValue: setCriteria4 },
        { question: 'Patients eligible for definitive curative intent treatment after discussion in multidisciplinary tumour board', inputtype:'dropdown' , options: ['Yes', 'No'], value: criteria5, setValue: setCriteria5 },
        {
            question: 'Adequate organ function at time of participation:', inputtype:'dropdown' ,
            subQuestions: [
                'Haematological: Haemoglobin > 9gm/dl, ANC ≥ 1500/cmm3, Platelet ≥ 100000/cmm3',
                'Liver Function test: Bilirubin ≤ 2 x upper limit normal (ULN), AST/ALT/ALP ≤ 2.5 x ULN',
                'Renal Function test: Creatinine ≤ 1.5 ULN, Creatinine Clearance ≥ 60 ml/min'
            ],
            options: ['Yes', 'No'], value: criteria6, setValue: setCriteria6
        },
    ];

    return (
        <div className="w-full">

            <CustomForm questions={questions} handleSubmit={handleSubmit} buttontitle="Submit" formtitle="Inclusion Criteria" loading={false}/>
        
        </div>
    );
};

export default InclusionCriteria;
