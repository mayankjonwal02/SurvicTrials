"use client"
import React, {useState,useEffect} from 'react'
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import CustomForm from '@/components/customform';

const Adverseeventsmanagement = () => {
    const { toast } = useToast()
    const router = useRouter();

    const [user, setUser] = useState<any>({});
    const userid = "mayankjonwal"
    const [patient_trial_number, setPatient_trial_number] = React.useState("2024-BTI-1");

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
        setUser(storedUser);
    }, []);
    const questionType = "adverseeventsmanagement";
    const formTitle = "Adverse Events Management";
    const [tabValue, setTabValue] = useState("section1");
    const [loading, setLoading] = React.useState(false);

    // Section 1
    const [a21, setA21] = useState('');
    const [a22, setA22] = useState('');
    const [a23, setA23] = useState('');
    const [a24, setA24] = useState('');
    const [a25, setA25] = useState('');
    const [a26, setA26] = useState('');
    const [a27, setA27] = useState('');
    const [a28, setA28] = useState('');
    const [a29, setA29] = useState('');
    const [a210, setA210] = useState('');
    const [a211, setA211] = useState('');
    const [a212, setA212] = useState('');
    const [a213, setA213] = useState('');
    const [a214, setA214] = useState('');
    const [a215, setA215] = useState('');
    const [a216, setA216] = useState('');
    const [a217, setA217] = useState('');
    const [a218, setA218] = useState('');
  









    const questions1 = [
        { question: 'Chemotherapy Cycle:', questionId: 'a2-1', questionType: questionType, inputtype: 'dropdown', options: ["Cycle 1","Cycle 2","Cycle 3"], value: a21, setValue: setA21 },
        { question: 'Adverse Event:', questionId: 'a2-2', questionType: questionType, inputtype: 'text', options: [], value: a22, setValue: setA22 },
        { question: 'Start Date:', questionId: 'a2-3', questionType: questionType, inputtype: 'date', options: [], value: a23, setValue: setA23 },
        { question: 'End Date:', questionId: 'a2-4', questionType: questionType, inputtype: 'date', options: [], value: a24, setValue: setA24 },
        { question: 'Admission Required:', questionId: 'a2-5', questionType: questionType, inputtype: 'dropdown', options: ['Yes', 'No'], value: a25, setValue: setA25 },
        { question: 'Duration of Admission:', questionId: 'a2-6', questionType: questionType, inputtype: 'text', options: [], value: a26, setValue: setA26 },
        { question: 'Antibiotics Given:', questionId: 'a2-7', questionType: questionType, inputtype: 'dropdown', options: ['Yes', 'No'], value: a27, setValue: setA27 },
        { question: 'Number of Days of Antibiotics:', questionId: 'a2-8', questionType: questionType, inputtype: 'text', options: [], value: a28, setValue: setA28 },
        { question: 'Nadir ANC:', questionId: 'a2-9', questionType: questionType, inputtype: 'text', options: [], value: a29, setValue: setA29 },
        { question: 'Nadir Platelets:', questionId: 'a2-10', questionType: questionType, inputtype: 'text', options: [], value: a210, setValue: setA210 },
        { question: 'Focus of Infection:', questionId: 'a2-11', questionType: questionType, inputtype: 'text', options: [], value: a211, setValue: setA211 },
        { question: 'Transfusion:', questionId: 'a2-12', questionType: questionType, inputtype: 'dropdown', options: ['Yes', 'No'], value: a212, setValue: setA212 },
        { question: 'GCSF Given:', questionId: 'a2-13', questionType: questionType, inputtype: 'dropdown', options: ['Yes', 'No'], value: a213, setValue: setA213 },
        { question: 'Dose Reduction Planned from Next Cycle:', questionId: 'a2-14', questionType: questionType, inputtype: 'dropdown', options: ['Yes', 'No'], value: a214, setValue: setA214 },
        { question: 'Other Management:', questionId: 'a2-15', questionType: questionType, inputtype: 'text', options: [], value: a215, setValue: setA215 },
        { question: 'Drug 1:', questionId: 'a2-16', questionType: questionType, inputtype: 'text', options: [], value: a216, setValue: setA216 },
        { question: 'Drug 2:', questionId: 'a2-17', questionType: questionType, inputtype: 'text', options: [], value: a217, setValue: setA217 },
        { question: 'Drug 3:', questionId: 'a2-18', questionType: questionType, inputtype: 'text', options: [], value: a218, setValue: setA218 },
        
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
export default Adverseeventsmanagement
