"use client"
import React , {useState,useEffect} from 'react'
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import CustomForm from '@/components/customform';
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"
import HeadDrop from '@/components/HeadDrop';

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
    const [dataloading, setDataloading] = useState(false);

    // Section 1 for Cycle 1
const [cycle1, setCycle1] = useState('Cycle 1');
const [thrombocytopenia1, setThrombocytopenia1] = useState('');
const [neutropenia1, setNeutropenia1] = useState('');
const [febrileNeutropenia1, setFebrileNeutropenia1] = useState('');
const [hyponatremia1, setHyponatremia1] = useState('');
const [hypokalemia1, setHypokalemia1] = useState('');
const [hyperbilirubinemia1, setHyperbilirubinemia1] = useState('');
const [anemia1, setAnemia1] = useState('');
const [transaminitis1, setTransaminitis1] = useState('');
const [mucositis1, setMucositis1] = useState('');
const [vomiting1, setVomiting1] = useState('');
const [diarrhea1, setDiarrhea1] = useState('');
const [constipation1, setConstipation1] = useState('');
const [skinRashes1, setSkinRashes1] = useState('');
const [handFootSyndrome1, setHandFootSyndrome1] = useState('');
const [fatigue1, setFatigue1] = useState('');
const [cardiotoxicity1, setCardiotoxicity1] = useState('');
const [neurotoxicity1, setNeurotoxicity1] = useState('');

const questions1 = [
  { question: 'Cycle:', questionId: 'a1-1_cycle1', questionType: questionType, inputtype: 'disabled', options: ["Cycle 1","Cycle 2","Cycle 3"], value: cycle1, setValue: setCycle1 },
  { question: 'Thrombocytopenia:', questionId: 'a1-2_cycle1', questionType: questionType, inputtype: 'dropdown', options: ["Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Not Applicable"], value: thrombocytopenia1, setValue: setThrombocytopenia1 },
  { question: 'Neutropenia:', questionId: 'a1-3_cycle1', questionType: questionType, inputtype: 'dropdown', options: ["Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Not Applicable"], value: neutropenia1, setValue: setNeutropenia1 },
  { question: 'Febrile Neutropenia:', questionId: 'a1-4_cycle1', questionType: questionType, inputtype: 'dropdown', options: ["Yes","No"], value: febrileNeutropenia1, setValue: setFebrileNeutropenia1 },
  { question: 'Hyponatremia:', questionId: 'a1-5_cycle1', questionType: questionType, inputtype: 'dropdown', options: ["Yes","No"], value: hyponatremia1, setValue: setHyponatremia1 },
  { question: 'Hypokalemia:', questionId: 'a1-6_cycle1', questionType: questionType, inputtype: 'dropdown', options: ["Yes","No"], value: hypokalemia1, setValue: setHypokalemia1 },
  { question: 'Hyperbilirubinemia:', questionId: 'a1-7_cycle1', questionType: questionType, inputtype: 'dropdown', options: ["Yes","No"], value: hyperbilirubinemia1, setValue: setHyperbilirubinemia1 },
  { question: 'Anemia:', questionId: 'a1-8_cycle1', questionType: questionType, inputtype: 'dropdown', options: ["Yes","No"], value: anemia1, setValue: setAnemia1 },
  { question: 'Transaminitis:', questionId: 'a1-9_cycle1', questionType: questionType, inputtype: 'dropdown', options: ["Yes","No"], value: transaminitis1, setValue: setTransaminitis1 },
  { question: 'Mucositis:', questionId: 'a1-10_cycle1', questionType: questionType, inputtype: 'dropdown', options: ["Yes","No"], value: mucositis1, setValue: setMucositis1 },
  { question: 'Vomiting:', questionId: 'a1-11_cycle1', questionType: questionType, inputtype: 'dropdown', options: ["Yes","No"], value: vomiting1, setValue: setVomiting1 },
  { question: 'Diarrhea:', questionId: 'a1-12_cycle1', questionType: questionType, inputtype: 'dropdown', options: ["Yes","No"], value: diarrhea1, setValue: setDiarrhea1 },
  { question: 'Constipation:', questionId: 'a1-13_cycle1', questionType: questionType, inputtype: 'dropdown', options: ["Yes","No"], value: constipation1, setValue: setConstipation1 },
  { question: 'Skin Rashes:', questionId: 'a1-14_cycle1', questionType: questionType, inputtype: 'dropdown', options: ["Yes","No"], value: skinRashes1, setValue: setSkinRashes1 },
  { question: 'Hand Foot Syndrome:', questionId: 'a1-15_cycle1', questionType: questionType, inputtype: 'dropdown', options: ["Yes","No"], value: handFootSyndrome1, setValue: setHandFootSyndrome1 },
  { question: 'Fatigue:', questionId: 'a1-16_cycle1', questionType: questionType, inputtype: 'dropdown', options: ["Yes","No"], value: fatigue1, setValue: setFatigue1 },
  { question: 'Cardiotoxicity:', questionId: 'a1-17_cycle1', questionType: questionType, inputtype: 'dropdown', options: ["Yes","No"], value: cardiotoxicity1, setValue: setCardiotoxicity1 },
  { question: 'Neurotoxicity:', questionId: 'a1-18_cycle1', questionType: questionType, inputtype: 'dropdown', options: ["Yes","No"], value: neurotoxicity1, setValue: setNeurotoxicity1 }
];

// Section 1 for Cycle 2
const [cycle2, setCycle2] = useState('Cycle 2');
const [thrombocytopenia2, setThrombocytopenia2] = useState('');
const [neutropenia2, setNeutropenia2] = useState('');
const [febrileNeutropenia2, setFebrileNeutropenia2] = useState('');
const [hyponatremia2, setHyponatremia2] = useState('');
const [hypokalemia2, setHypokalemia2] = useState('');
const [hyperbilirubinemia2, setHyperbilirubinemia2] = useState('');
const [anemia2, setAnemia2] = useState('');
const [transaminitis2, setTransaminitis2] = useState('');
const [mucositis2, setMucositis2] = useState('');
const [vomiting2, setVomiting2] = useState('');
const [diarrhea2, setDiarrhea2] = useState('');
const [constipation2, setConstipation2] = useState('');
const [skinRashes2, setSkinRashes2] = useState('');
const [handFootSyndrome2, setHandFootSyndrome2] = useState('');
const [fatigue2, setFatigue2] = useState('');
const [cardiotoxicity2, setCardiotoxicity2] = useState('');
const [neurotoxicity2, setNeurotoxicity2] = useState('');

const questions2 = [
  { question: 'Cycle:', questionId: 'a1-1_cycle2', questionType: questionType, inputtype: 'disabled', options: ["Cycle 1","Cycle 2","Cycle 3"], value: cycle2, setValue: setCycle2 },
  { question: 'Thrombocytopenia:', questionId: 'a1-2_cycle2', questionType: questionType, inputtype: 'dropdown', options: ["Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Not Applicable"], value: thrombocytopenia2, setValue: setThrombocytopenia2 },
  { question: 'Neutropenia:', questionId: 'a1-3_cycle2', questionType: questionType, inputtype: 'dropdown', options: ["Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Not Applicable"], value: neutropenia2, setValue: setNeutropenia2 },
  { question: 'Febrile Neutropenia:', questionId: 'a1-4_cycle2', questionType: questionType, inputtype: 'dropdown', options: ["Yes","No"], value: febrileNeutropenia2, setValue: setFebrileNeutropenia2 },
  { question: 'Hyponatremia:', questionId: 'a1-5_cycle2', questionType: questionType, inputtype: 'dropdown', options: ["Yes","No"], value: hyponatremia2, setValue: setHyponatremia2 },
  { question: 'Hypokalemia:', questionId: 'a1-6_cycle2', questionType: questionType, inputtype: 'dropdown', options: ["Yes","No"], value: hypokalemia2, setValue: setHypokalemia2 },
  { question: 'Hyperbilirubinemia:', questionId: 'a1-7_cycle2', questionType: questionType, inputtype: 'dropdown', options: ["Yes","No"], value: hyperbilirubinemia2, setValue: setHyperbilirubinemia2 },
  { question: 'Anemia:', questionId: 'a1-8_cycle2', questionType: questionType, inputtype: 'dropdown', options: ["Yes","No"], value: anemia2, setValue: setAnemia2 },
  { question: 'Transaminitis:', questionId: 'a1-9_cycle2', questionType: questionType, inputtype: 'dropdown', options: ["Yes","No"], value: transaminitis2, setValue: setTransaminitis2 },
  { question: 'Mucositis:', questionId: 'a1-10_cycle2', questionType: questionType, inputtype: 'dropdown', options: ["Yes","No"], value: mucositis2, setValue: setMucositis2 },
  { question: 'Vomiting:', questionId: 'a1-11_cycle2', questionType: questionType, inputtype: 'dropdown', options: ["Yes","No"], value: vomiting2, setValue: setVomiting2 },
  { question: 'Diarrhea:', questionId: 'a1-12_cycle2', questionType: questionType, inputtype: 'dropdown', options: ["Yes","No"], value: diarrhea2, setValue: setDiarrhea2 },
  { question: 'Constipation:', questionId: 'a1-13_cycle2', questionType: questionType, inputtype: 'dropdown', options: ["Yes","No"], value: constipation2, setValue: setConstipation2 },
  { question: 'Skin Rashes:', questionId: 'a1-14_cycle2', questionType: questionType, inputtype: 'dropdown', options: ["Yes","No"], value: skinRashes2, setValue: setSkinRashes2 },
  { question: 'Hand Foot Syndrome:', questionId: 'a1-15_cycle2', questionType: questionType, inputtype: 'dropdown', options: ["Yes","No"], value: handFootSyndrome2, setValue: setHandFootSyndrome2 },
  { question: 'Fatigue:', questionId: 'a1-16_cycle2', questionType: questionType, inputtype: 'dropdown', options: ["Yes","No"], value: fatigue2, setValue: setFatigue2 },
  { question: 'Cardiotoxicity:', questionId: 'a1-17_cycle2', questionType: questionType, inputtype: 'dropdown', options: ["Yes","No"], value: cardiotoxicity2, setValue: setCardiotoxicity2 },
  { question: 'Neurotoxicity:', questionId: 'a1-18_cycle2', questionType: questionType, inputtype: 'dropdown', options: ["Yes","No"], value: neurotoxicity2, setValue: setNeurotoxicity2 }
];

// Section 1 for Cycle 3
const [cycle3, setCycle3] = useState('Cycle 3');
const [thrombocytopenia3, setThrombocytopenia3] = useState('');
const [neutropenia3, setNeutropenia3] = useState('');
const [febrileNeutropenia3, setFebrileNeutropenia3] = useState('');
const [hyponatremia3, setHyponatremia3] = useState('');
const [hypokalemia3, setHypokalemia3] = useState('');
const [hyperbilirubinemia3, setHyperbilirubinemia3] = useState('');
const [anemia3, setAnemia3] = useState('');
const [transaminitis3, setTransaminitis3] = useState('');
const [mucositis3, setMucositis3] = useState('');
const [vomiting3, setVomiting3] = useState('');
const [diarrhea3, setDiarrhea3] = useState('');
const [constipation3, setConstipation3] = useState('');
const [skinRashes3, setSkinRashes3] = useState('');
const [handFootSyndrome3, setHandFootSyndrome3] = useState('');
const [fatigue3, setFatigue3] = useState('');
const [cardiotoxicity3, setCardiotoxicity3] = useState('');
const [neurotoxicity3, setNeurotoxicity3] = useState('');

const questions3 = [
  { question: 'Cycle:', questionId: 'a1-1_cycle3', questionType: questionType, inputtype: 'disabled', options: ["Cycle 1","Cycle 2","Cycle 3"], value: cycle3, setValue: setCycle3 },
  { question: 'Thrombocytopenia:', questionId: 'a1-2_cycle3', questionType: questionType, inputtype: 'dropdown', options: ["Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Not Applicable"], value: thrombocytopenia3, setValue: setThrombocytopenia3 },
  { question: 'Neutropenia:', questionId: 'a1-3_cycle3', questionType: questionType, inputtype: 'dropdown', options: ["Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Not Applicable"], value: neutropenia3, setValue: setNeutropenia3 },
  { question: 'Febrile Neutropenia:', questionId: 'a1-4_cycle3', questionType: questionType, inputtype: 'dropdown', options: ["Yes","No"], value: febrileNeutropenia3, setValue: setFebrileNeutropenia3 },
  { question: 'Hyponatremia:', questionId: 'a1-5_cycle3', questionType: questionType, inputtype: 'dropdown', options: ["Yes","No"], value: hyponatremia3, setValue: setHyponatremia3 },
  { question: 'Hypokalemia:', questionId: 'a1-6_cycle3', questionType: questionType, inputtype: 'dropdown', options: ["Yes","No"], value: hypokalemia3, setValue: setHypokalemia3 },
  { question: 'Hyperbilirubinemia:', questionId: 'a1-7_cycle3', questionType: questionType, inputtype: 'dropdown', options: ["Yes","No"], value: hyperbilirubinemia3, setValue: setHyperbilirubinemia3 },
  { question: 'Anemia:', questionId: 'a1-8_cycle3', questionType: questionType, inputtype: 'dropdown', options: ["Yes","No"], value: anemia3, setValue: setAnemia3 },
  { question: 'Transaminitis:', questionId: 'a1-9_cycle3', questionType: questionType, inputtype: 'dropdown', options: ["Yes","No"], value: transaminitis3, setValue: setTransaminitis3 },
  { question: 'Mucositis:', questionId: 'a1-10_cycle3', questionType: questionType, inputtype: 'dropdown', options: ["Yes","No"], value: mucositis3, setValue: setMucositis3 },
  { question: 'Vomiting:', questionId: 'a1-11_cycle3', questionType: questionType, inputtype: 'dropdown', options: ["Yes","No"], value: vomiting3, setValue: setVomiting3 },
  { question: 'Diarrhea:', questionId: 'a1-12_cycle3', questionType: questionType, inputtype: 'dropdown', options: ["Yes","No"], value: diarrhea3, setValue: setDiarrhea3 },
  { question: 'Constipation:', questionId: 'a1-13_cycle3', questionType: questionType, inputtype: 'dropdown', options: ["Yes","No"], value: constipation3, setValue: setConstipation3 },
  { question: 'Skin Rashes:', questionId: 'a1-14_cycle3', questionType: questionType, inputtype: 'dropdown', options: ["Yes","No"], value: skinRashes3, setValue: setSkinRashes3 },
  { question: 'Hand Foot Syndrome:', questionId: 'a1-15_cycle3', questionType: questionType, inputtype: 'dropdown', options: ["Yes","No"], value: handFootSyndrome3, setValue: setHandFootSyndrome3 },
  { question: 'Fatigue:', questionId: 'a1-16_cycle3', questionType: questionType, inputtype: 'dropdown', options: ["Yes","No"], value: fatigue3, setValue: setFatigue3 },
  { question: 'Cardiotoxicity:', questionId: 'a1-17_cycle3', questionType: questionType, inputtype: 'dropdown', options: ["Yes","No"], value: cardiotoxicity3, setValue: setCardiotoxicity3 },
  { question: 'Neurotoxicity:', questionId: 'a1-18_cycle3', questionType: questionType, inputtype: 'dropdown', options: ["Yes","No"], value: neurotoxicity3, setValue: setNeurotoxicity3 }
];

    




      useEffect( () => {

        const fetchalldata = async () => 
        {
        setDataloading(true);
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
            setDataloading(false);
            if (apidata.executed) {
                const questiondata = apidata.data.data;
                const questionsArray = [questions1,questions2,questions3]
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
            // questions1.some((question) => question.value === '')
            false




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
                                description: "Adverse Event Submitted",
                                variant: "success",
                            })
                            setTabValue('section2')
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


    const handleSubmit2 = () => {
        if (
            // questions1.some((question) => question.value === '')
            false




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
                        questions: questions2,
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
                                description: "Adverse Event Submitted",
                                variant: "success",
                            })
                            setTabValue('section3')
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


    const handleSubmit3 = () => {
        if (
            // questions1.some((question) => question.value === '')
            false




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
                        questions: questions3,
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
                                description: "Adverse Event Submitted",
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








    if (dataloading) {
        return <div className="flex items-center justify-center h-screen w-full text-3xl font-bold text-green-5 ">
                  <div className="w-[70px] h-[70px] border border-4 border-t-0 border-green-700 rounded-full animate-spin">
                  </div> 
                </div>;
      }



    return (
        <div className='w-full h-screen '>




            {tabValue === "section1" && <CustomForm questions={questions1} handleSubmit={handleSubmit1} buttontitle="Submit & Next" formtitle={formTitle} loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} />}
            {tabValue === "section2" && <CustomForm questions={questions2} handleSubmit={handleSubmit2} buttontitle="Submit & Next" formtitle={formTitle} loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} />}
            {tabValue === "section3" && <CustomForm questions={questions3} handleSubmit={handleSubmit3} buttontitle="Submit & Next" formtitle={formTitle} loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} />}
        


        </div>
    );
}


interface CustomTabsProps {
    tabValue: string;
    setTabValue: (value: string) => void;
}

const CustomTabs: React.FC<CustomTabsProps> = ({ tabValue, setTabValue }) => {
    return (
        <div className='flex flex-col justify-center items-center gap-2'>

            <Tabs value={tabValue} onValueChange={setTabValue} className="">
                <TabsList className='bg-green-1'>
                    <TabsTrigger className='active:bg-green-5' value="section1">1</TabsTrigger>
                    <TabsTrigger value="section2">2</TabsTrigger>
                    <TabsTrigger value="section3">3</TabsTrigger>
                    
                </TabsList>
            </Tabs>
            <HeadDrop
          dataArray={[
            { id: "section1", title: "Cycle 1" },
            { id: "section2", title: "Cycle 2" },
            { id: 'section3', title: "Cycle 3" },
            
            
          ]}
          id={tabValue}
          setId={setTabValue}
         
        />
        </div>
    );
};

export default Adverseevent
