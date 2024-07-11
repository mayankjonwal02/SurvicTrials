"use client"
import React , {useState,useEffect} from 'react'
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import CustomForm from '@/components/customform';

const Adverseevent = () => {
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
    const questionType = "adverseevent";
    const formTitle = "Adverse Event";
    const [tabValue, setTabValue] = useState("section1");
    const [loading, setLoading] = React.useState(false);

    // Section 1
    const [cycle, setCycle] = useState('');
    const [thrombocytopenia, setThrombocytopenia] = useState('');
    const [neutropenia, setNeutropenia] = useState('');
    const [febrileNeutropenia, setFebrileNeutropenia] = useState('');
    const [hyponatremia, setHyponatremia] = useState('');
    const [hypokalemia, setHypokalemia] = useState('');
    const [hyperbilirubinemia, setHyperbilirubinemia] = useState('');
    const [anemia, setAnemia] = useState('');
    const [transaminitis, setTransaminitis] = useState('');
    const [mucositis, setMucositis] = useState('');
    const [vomiting, setVomiting] = useState('');
    const [diarrhea, setDiarrhea] = useState('');
    const [constipation, setConstipation] = useState('');
    const [skinRashes, setSkinRashes] = useState('');
    const [handFootSyndrome, setHandFootSyndrome] = useState('');
    const [fatigue, setFatigue] = useState('');
    const [cardiotoxicity, setCardiotoxicity] = useState('');
    const [neurotoxicity, setNeurotoxicity] = useState('');









    const questions1 =[
        { question: 'Cycle:', questionId: 'a1-1', questionType: questionType, inputtype: 'dropdown', options: ["Cycle 1","Cycle 2","Cycle 3"], value: cycle, setValue: setCycle },
        { question: 'Thrombocytopenia:', questionId: 'a1-2', questionType: questionType, inputtype: 'text', options: [], value: thrombocytopenia, setValue: setThrombocytopenia },
        { question: 'Neutropenia:', questionId: 'a1-3', questionType: questionType, inputtype: 'text', options: [], value: neutropenia, setValue: setNeutropenia },
        { question: 'Febrile Neutropenia:', questionId: 'a1-4', questionType: questionType, inputtype: 'text', options: [], value: febrileNeutropenia, setValue: setFebrileNeutropenia },
        { question: 'Hyponatremia:', questionId: 'a1-5', questionType: questionType, inputtype: 'text', options: [], value: hyponatremia, setValue: setHyponatremia },
        { question: 'Hypokalemia:', questionId: 'a1-6', questionType: questionType, inputtype: 'text', options: [], value: hypokalemia, setValue: setHypokalemia },
        { question: 'Hyperbilirubinemia:', questionId: 'a1-7', questionType: questionType, inputtype: 'text', options: [], value: hyperbilirubinemia, setValue: setHyperbilirubinemia },
        { question: 'Anemia:', questionId: 'a1-8', questionType: questionType, inputtype: 'text', options: [], value: anemia, setValue: setAnemia },
        { question: 'Transaminitis:', questionId: 'a1-9', questionType: questionType, inputtype: 'text', options: [], value: transaminitis, setValue: setTransaminitis },
        { question: 'Mucositis:', questionId: 'a1-10', questionType: questionType, inputtype: 'text', options: [], value: mucositis, setValue: setMucositis },
        { question: 'Vomiting:', questionId: 'a1-11', questionType: questionType, inputtype: 'text', options: [], value: vomiting, setValue: setVomiting },
        { question: 'Diarrhea:', questionId: 'a1-12', questionType: questionType, inputtype: 'text', options: [], value: diarrhea, setValue: setDiarrhea },
        { question: 'Constipation:', questionId: 'a1-13', questionType: questionType, inputtype: 'text', options: [], value: constipation, setValue: setConstipation },
        { question: 'Skin Rashes:', questionId: 'a1-14', questionType: questionType, inputtype: 'text', options: [], value: skinRashes, setValue: setSkinRashes },
        { question: 'Hand Foot Syndrome:', questionId: 'a1-15', questionType: questionType, inputtype: 'text', options: [], value: handFootSyndrome, setValue: setHandFootSyndrome },
        { question: 'Fatigue:', questionId: 'a1-16', questionType: questionType, inputtype: 'text', options: [], value: fatigue, setValue: setFatigue },
        { question: 'Cardiotoxicity:', questionId: 'a1-17', questionType: questionType, inputtype: 'text', options: [], value: cardiotoxicity, setValue: setCardiotoxicity },
        { question: 'Neurotoxicity:', questionId: 'a1-18', questionType: questionType, inputtype: 'text', options: [], value: neurotoxicity, setValue: setNeurotoxicity }
      ];
    




      useEffect( () => {

        const fetchalldata = async () => 
        {
        const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
        setUser(storedUser);
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
                            router.push("/form/adverseeventsmanagement")
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

export default Adverseevent
