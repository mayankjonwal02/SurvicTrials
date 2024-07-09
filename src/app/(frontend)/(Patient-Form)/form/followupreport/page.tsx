"use client"
import React, {useState,useEffect} from 'react'
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import CustomForm from '@/components/customform';

const Followupreport = () => {
    const { toast } = useToast()
    const router = useRouter();

    const [criteria1, setCriteria1] = React.useState("");
    const [criteria2, setCriteria2] = React.useState("");
    const [criteria3, setCriteria3] = React.useState("");
    const [criteria4, setCriteria4] = React.useState("");
    const [criteria5, setCriteria5] = React.useState("");
    const [criteria6, setCriteria6] = React.useState("");
    const [user, setUser] = useState<any>({});
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
        setUser(storedUser);
    }, []);
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
        { question: 'Age 18-75 years; ECOG PS 0-2', inputtype:'dropdown' , options: ['Yes', 'No'], value: criteria1, setValue: setCriteria1 },
        { question: 'Clinical Stage cT1-4a, cN2-N3*, M0- as per UICC 2018', inputtype:'dropdown' , options: ['Yes', 'No'], value: criteria2, setValue: setCriteria2 },
        { question: 'Newly diagnosed, treatment-naive, biopsy or cytology proven OSCC', inputtype:'dropdown' , options: ['Yes', 'No'], value: criteria3, setValue: setCriteria3 },
        { question: 'No contraindication to Cisplatin or radiotherapy', inputtype:'dropdown' , options: ['Yes', 'No'], value: criteria4, setValue: setCriteria4 },
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
        <div>

            <CustomForm questions={questions} handleSubmit={handleSubmit} buttontitle="Submit" formtitle="Follow-Up Assessment Form" loading={false}/>
        
        </div>
    );
}

export default Followupreport
