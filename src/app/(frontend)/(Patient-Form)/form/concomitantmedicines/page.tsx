"use client"
import React, {useState,useEffect} from 'react'
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import CustomForm from '@/components/customform';

const Concomitantmedicines = () =>  {
    const { toast } = useToast()
    const router = useRouter();

    const [user, setUser] = useState<any>({});
    const userid = "mayankjonwal"
    const [patient_trial_number, setPatient_trial_number] = React.useState("2024-BTI-1");

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
        setUser(storedUser);
    }, []);
    const questionType = "concomitantmedicines";
    const formTitle = "Concomitant Medicines";
    const [tabValue, setTabValue] = useState("section1");
    const [loading, setLoading] = React.useState(false);

    // Section 1
    const [drugName, setDrugName] = useState('');
  const [dose, setDose] = useState('');
  const [frequency, setFrequency] = useState('');
  const [startDate, setStartDate] = useState('');
  const [stopDate, setStopDate] = useState('');
  const [remarks, setRemarks] = useState('');









    const questions1 = [
        { question: 'Drug Name:', questionType: questionType, questionId: 'c3-1', inputtype: 'text', options: [], value: drugName, setValue: setDrugName },
        { question: 'Dose:', questionType: questionType, questionId: 'c3-2', inputtype: 'text', options: [], value: dose, setValue: setDose },
        { question: 'Frequency:', questionType: questionType, questionId: 'c3-3', inputtype: 'text', options: [], value: frequency, setValue: setFrequency },
        { question: 'Date of Start:', questionType: 'date', questionId: 'c3-4', inputtype: 'date', options: [], value: startDate, setValue: setStartDate },
        { question: 'Date of Stop:', questionType: 'date', questionId: 'c3-5', inputtype: 'date', options: [], value: stopDate, setValue: setStopDate },
        { question: 'Remarks:', questionType: questionType, questionId: 'c3-6', inputtype: 'textarea', options: [], value: remarks, setValue: setRemarks }
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

export default Concomitantmedicines
