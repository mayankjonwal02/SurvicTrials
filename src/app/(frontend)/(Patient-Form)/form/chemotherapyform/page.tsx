"use client"
import React, {useState,useEffect} from 'react'
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import CustomForm from '@/components/customform';

const Chemotherapyform = () => {
    const { toast } = useToast()
    const router = useRouter();

    const [user, setUser] = useState<any>({});
    const userid = "mayankjonwal"
    const [patient_trial_number, setPatient_trial_number] = React.useState("2024-BTI-1");

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
        setUser(storedUser);
    }, []);
    const questionType = "chemotherapy";
    const formTitle = "Chemotherapy Form";
    const [tabValue, setTabValue] = useState("section1");
    const [loading, setLoading] = React.useState(false);

    // Section 1
    const [startDate, setStartDate] = useState('');
    const [regimen, setRegimen] = useState('');
    const [otherRegimen, setOtherRegimen] = useState('');
    const [cycle, setCycle] = useState('');
    const [cycleStartDate, setCycleStartDate] = useState('');
    const [ecogPS, setEcogPS] = useState('');
    const [hb, setHb] = useState('');
    const [anc, setAnc] = useState('');
    const [plateletCount, setPlateletCount] = useState('');
    const [bilirubin, setBilirubin] = useState('');
    const [sgotSgpt, setSgotSgpt] = useState('');
    const [creatinine, setCreatinine] = useState('');
    const [creatinineClearance, setCreatinineClearance] = useState('');
    const [bloodSugar, setBloodSugar] = useState('');
    const [otherDetails, setOtherDetails] = useState('');
    const [primarySecondaryGcsf, setPrimarySecondaryGcsf] = useState('');
    const [doseDelay, setDoseDelay] = useState('');
    const [reasonForDelay, setReasonForDelay] = useState('');
    const [daysDelayed, setDaysDelayed] = useState('');
    const [doseModification, setDoseModification] = useState('');
    const [reasonForDoseModification, setReasonForDoseModification] = useState('');









    const questions1 = [
        { question: 'Date of Start of Chemotherapy:', questionType:questionType,questionId: 'c1-1', inputtype: 'date',options:[], value: startDate, setValue: setStartDate },
        { question: 'Regimen:', questionType:questionType,questionId: 'c1-2', inputtype: 'dropdown',options:["DCF","CF","Other"], value: regimen, setValue: setRegimen },
        { question: 'Regimen other:', questionType:questionType,questionId: 'c1-3', inputtype: 'text',options:[], value: otherRegimen, setValue: setOtherRegimen },
        { question: 'Cycle:', questionType:questionType,questionId: 'c1-4', inputtype: 'dropdown',options:["Cycle 1","Cycle 2","Cycle 3"], value: cycle, setValue: setCycle },
        { question: 'Date of Start of Cycle:', questionType:questionType,questionId: 'c1-5', inputtype: 'date',options:[], value: cycleStartDate, setValue: setCycleStartDate },
        { question: 'ECOG PS:', questionType:questionType,questionId: 'c1-6', inputtype: 'text',options:[], value: ecogPS, setValue: setEcogPS },
        { question: 'Hemoglobin (Hb):', questionType:questionType,questionId: 'c1-7', inputtype: 'text',options:[], value: hb, setValue: setHb },
        { question: 'Absolute Neutrophil Count (ANC):', questionType:questionType,questionId: 'c1-8', inputtype: 'text',options:[], value: anc, setValue: setAnc },
        { question: 'Platelet Count:', questionType:questionType,questionId: 'c1-9', inputtype: 'text',options:[], value: plateletCount, setValue: setPlateletCount },
        { question: 'Bilirubin:', questionType:questionType,questionId: 'c1-10', inputtype: 'text',options:[], value: bilirubin, setValue: setBilirubin },
        { question: 'SGOT/SGPT:', questionType:questionType,questionId: 'c1-11', inputtype: 'text',options:[], value: sgotSgpt, setValue: setSgotSgpt },
        { question: 'Creatinine:', questionType:questionType,questionId: 'c1-12', inputtype: 'text',options:[], value: creatinine, setValue: setCreatinine },
        { question: 'Creatinine Clearance:', questionType:questionType,questionId: 'c1-13', inputtype: 'text',options:[], value: creatinineClearance, setValue: setCreatinineClearance },
        { question: 'Blood Sugar:', questionType:questionType,questionId: 'c1-14', inputtype: 'text',options:[], value: bloodSugar, setValue: setBloodSugar },
        { question: 'Other Details:', questionType:questionType,questionId: 'c1-15', inputtype: 'textarea',options:[], value: otherDetails, setValue: setOtherDetails },
        { question: 'Primary/Secondary GCSF:', questionType:questionType,questionId: 'c1-16', inputtype: 'text',options:[], value: primarySecondaryGcsf, setValue: setPrimarySecondaryGcsf },
        { question: 'Dose Delay:', questionType:questionType,questionId: 'c1-17', inputtype: 'dropdown',options:["Yes","No"], value: doseDelay, setValue: setDoseDelay },
        { question: 'Reason for Delay:', questionType:questionType,questionId: 'c1-18', inputtype: 'textarea',options:[], value: reasonForDelay, setValue: setReasonForDelay },
        { question: 'Number of Days Delayed:', questionType:questionType,questionId: 'c1-19', inputtype: 'text',options:[], value: daysDelayed, setValue: setDaysDelayed },
        { question: 'Dose Modification:', questionType:questionType,questionId: 'c1-20', inputtype: 'dropdown',options:["Yes","No"], value: doseModification, setValue: setDoseModification },
        { question: 'Reason for Dose Modification:', questionType:questionType,questionId: 'c1-21', inputtype: 'text',options:[], value: reasonForDoseModification, setValue: setReasonForDoseModification }
      ];
    







    const handleSubmit1 = () => {
        if (
            questions1.some((question) => question.value === '')





        ) {
            toast({
                title: "Error",
                description: "Please fill in all the fields",
                variant: "destructive",
            })


        }


        else {

            try {
                setLoading(true)
                fetch('/api/updatepatient', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        patient_trial_number: patient_trial_number,
                        questions: questions1,
                        submittedBy: userid
                    })
                })
                    .then(response => response.json())
                    .then(data => {
                        setLoading(false)
                        console.log(data)
                        if (data.executed) {
                            toast({
                                title: "Success",
                                description: "Social History Profile Submitted",
                                variant: "success",
                            })
                        } else {
                            toast({
                                title: "Error",
                                description: data.message,
                                variant: "destructive",
                            })
                        }
                    })
                    .catch(error => {
                        setLoading(false)
                        console.log(error)
                        toast({
                            title: "Error",
                            description: error.message,
                            variant: "destructive",
                        })
                    });


            } catch (error: any) {
                setLoading(false)
                console.log(error)
                toast({
                    title: "Error",
                    description: error.message,
                    variant: "destructive",
                })

            }


            // router.push('/exclusion_criteria')
        }
    }












    return (
        <div className=' '>




            <CustomForm questions={questions1} handleSubmit={handleSubmit1} buttontitle="Submit & Next" formtitle={formTitle} loading={loading} />

        </div>
    );
}

export default Chemotherapyform
