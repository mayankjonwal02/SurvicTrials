"use client"
import React, {useState,useEffect} from 'react'
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import CustomForm from '@/components/customform';

const Rtogtoxicityassessment = () => {
    const { toast } = useToast()
    const router = useRouter();

    const [user, setUser] = useState<any>({});
    const [userid, setUserId] = useState('');
    const [patient_trial_number, setPatient_trial_number] = React.useState("2024-BTI-1");

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
        setUser(storedUser);
        setUserId(storedUser.unique_id);
    }, []);
    const questionType = "rtogtoxicityassessment";
    const formTitle = "Toxicity During Radiotherapy -RTOG Toxicity Assessment";
    const [tabValue, setTabValue] = useState("section1");
    const [loading, setLoading] = React.useState(false);

    // Section 1
 const [treatmentWeek, setTreatmentWeek] = useState('');
  const [skin, setSkin] = useState('');
  const [mucosa, setMucosa] = useState('');
  const [pharynx, setPharynx] = useState('');
  const [larynx, setLarynx] = useState('');
  const [salivaryGland, setSalivaryGland] = useState('');
  const [weight, setWeight] = useState('');
  const [cbc, setCbc] = useState('');









    const questions1 = [
        { question: 'Treatment Week:', questionId: 'r2-1', questionType: questionType, inputtype: 'dropdown', options: [
            "Week 1",
            "Week 2",
            "Week 3",
            "Week 4",
            "Week 5",
            "Week 6",
            "Week 7",
            "Week 8"], value: treatmentWeek, setValue: setTreatmentWeek },
        { question: 'Skin:', questionId: 'r2-2', questionType: questionType, inputtype: 'text', options: [], value: skin, setValue: setSkin },
        { question: 'Mucosa:', questionId: 'r2-3', questionType: questionType, inputtype: 'text', options: [], value: mucosa, setValue: setMucosa },
        { question: 'Pharynx:', questionId: 'r2-4', questionType: questionType, inputtype: 'text', options: [], value: pharynx, setValue: setPharynx },
        { question: 'Larynx:', questionId: 'r2-5', questionType: questionType, inputtype: 'text', options: [], value: larynx, setValue: setLarynx },
        { question: 'Salivary Gland:', questionId: 'r2-6', questionType: questionType, inputtype: 'text', options: [], value: salivaryGland, setValue: setSalivaryGland },
        { question: 'Weight (in kg):', questionId: 'r2-7', questionType: questionType, inputtype: 'text', options: [], value: weight, setValue: setWeight },
        { question: 'CBC:', questionId: 'r2-8', questionType: questionType, inputtype: 'text', options: [], value: cbc, setValue: setCbc }
      ];



      useEffect( () => {

        const fetchalldata = async () => 
        {
        const storedpatient_trial_number = localStorage.getItem("patienttrialnumber");
        if (storedpatient_trial_number) {
          await setPatient_trial_number(storedpatient_trial_number);
          fetch("/api/getpatientbytrialid", {
            method:"Post",
            headers:{
              'Content-Type': 'application/json'
            },
            body:JSON.stringify({trialid:storedpatient_trial_number})
          })
          .then((res) => res.json())
          .then((apidata: any) => {
            console.log(apidata)
            if (apidata.executed) {
                const questiondata = apidata.data.data;
                const questionsArray = [questions1]
                questionsArray.forEach((question_list) => {
                    question_list.map((question) => {
                        const requiredquestionid = question.questionId;
                        const questionvalue = questiondata.find((this_question: { questionId: string; }) => this_question.questionId === requiredquestionid)?.answer;
                        
                        questionvalue !== undefined && question.setValue(questionvalue)
                    })
                })
                

            }
            else
            {
            //   toast({
            //     title: "Error",
            //     description: apidata.message,
            //     variant: "destructive",
            //   })
            console.log("Data not found")
            }
          })


        }
        else
        {
          setPatient_trial_number("ID not found")
        }

        }


        fetchalldata();
        
      }, []);



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
                            router.push("/form/chemotherapyform")
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

export default Rtogtoxicityassessment
