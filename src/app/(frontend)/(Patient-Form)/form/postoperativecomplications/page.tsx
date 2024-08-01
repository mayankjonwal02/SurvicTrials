"use client"
import React, { useState, useEffect } from 'react'
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


const Postoperativecomplications = () => {
    const { toast } = useToast()
    const router = useRouter();

    const [user, setUser] = useState<any>({});
    const [userid, setUserId] = useState('');
    const [patient_trial_number, setPatient_trial_number] = React.useState("2024-BTI-1");

    const [dataloading, setDataloading] = useState(false);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
        setUser(storedUser);
        setUserId(storedUser.unique_id);
    }, []);
    const questionType = "postoperativecomplications";
    const formTitle = "Postoperative complications";
    const [tabValue, setTabValue] = useState("section1");
    const [loading, setLoading] = React.useState(false);

    // Section 1
    // Section 1
    const [p1_early, setP1_early] = useState('');
    const [p2_early, setP2_early] = useState('');
    const [p3_early, setP3_early] = useState('');
    const [p1_4_early, setP1_4_early] = useState('');
    const [p1_5_early, setP1_5_early] = useState('');
    const [p1_6_early, setP1_6_early] = useState('');
    const [p1_7_early, setP1_7_early] = useState('');
    const [p1_8_early, setP1_8_early] = useState('');
    const [p1_9_early, setP1_9_early] = useState('');
    const [p1_10_early, setP1_10_early] = useState('');
    const [p1_11_early, setP1_11_early] = useState('');
    const [p1_12_early, setP1_12_early] = useState('');
    const [p1_13_early, setP1_13_early] = useState('');
    const [p1_14_early, setP1_14_early] = useState('');
    const [p1_15_early, setP1_15_early] = useState('');
    const [p1_16_early, setP1_16_early] = useState('');
    const [p1_17_early, setP1_17_early] = useState('');
    const [p1_18_early, setP1_18_early] = useState('');
    const [p1_19_early, setP1_19_early] = useState('');
    const [p1_20_early, setP1_20_early] = useState('');
    const [p1_21_early, setP1_21_early] = useState('');

    const [p1_delayed, setP1_delayed] = useState('');
    const [p2_delayed, setP2_delayed] = useState('');
    const [p3_delayed, setP3_delayed] = useState('');
    const [p1_4_delayed, setP1_4_delayed] = useState('');
    const [p1_5_delayed, setP1_5_delayed] = useState('');
    const [p1_6_delayed, setP1_6_delayed] = useState('');
    const [p1_7_delayed, setP1_7_delayed] = useState('');
    const [p1_8_delayed, setP1_8_delayed] = useState('');
    const [p1_9_delayed, setP1_9_delayed] = useState('');
    const [p1_10_delayed, setP1_10_delayed] = useState('');
    const [p1_11_delayed, setP1_11_delayed] = useState('');
    const [p1_12_delayed, setP1_12_delayed] = useState('');
    const [p1_13_delayed, setP1_13_delayed] = useState('');
    const [p1_14_delayed, setP1_14_delayed] = useState('');
    const [p1_15_delayed, setP1_15_delayed] = useState('');
    const [p1_16_delayed, setP1_16_delayed] = useState('');
    const [p1_17_delayed, setP1_17_delayed] = useState('');
    const [p1_18_delayed, setP1_18_delayed] = useState('');
    const [p1_19_delayed, setP1_19_delayed] = useState('');
    const [p1_20_delayed, setP1_20_delayed] = useState('');
    const [p1_21_delayed, setP1_21_delayed] = useState('');

    const questions1 = [
        { question: 'Postoperative Complications (Early):', questionId: 'p1-1_early', questionType: questionType, inputtype: 'dropdown', options: ["Yes", "No"], value: p1_early, setValue: setP1_early, heading: "Postoperative Complication (up to 30d) : Early" },
        { question: 'Grade of Complications (Early):', questionId: 'p1-2_early', questionType: questionType, inputtype: 'dropdown', options: ["I", "II", "IIIa", "IIIb", "IVa", "IVb", "V"], value: p2_early, setValue: setP2_early },
        { question: 'Postoperative Day of Recording Complication (Early):', questionId: 'p1-3_early', questionType: questionType, inputtype: 'textarea', options: [], value: p3_early, setValue: setP3_early },
        { question: 'Local Wound Infection (Early):', questionId: 'p1-4_early', questionType: questionType, inputtype: 'dropdown', options: ["Superficial wound infection", "Deep wound infection", "Other","Not Applicable"], value: p1_4_early, setValue: setP1_4_early },
        { question: 'Details - Local Wound Infection (Early):', questionId: 'p1-5_early', questionType: questionType, inputtype: 'textarea', options: [], value: p1_5_early, setValue: setP1_5_early },
        { question: 'Systemic Infection (Early):', questionId: 'p1-6_early', questionType: questionType, inputtype: 'dropdown', options: ["Chest infection", "Sepsis", "Septicemia", "UTI", "Other","Not Applicable"], value: p1_6_early, setValue: setP1_6_early },
        { question: 'Details - Systemic Infection (Early):', questionId: 'p1-7_early', questionType: questionType, inputtype: 'textarea', options: [], value: p1_7_early, setValue: setP1_7_early },
        { question: 'Flap Related (Early):', questionId: 'p1-8_early', questionType: questionType, inputtype: 'dropdown', options: ["Wound dehiscence", "Partial flap loss", "Total flap loss","Not Applicable"], value: p1_8_early, setValue: setP1_8_early },
        { question: 'Details - Flap Related (Early):', questionId: 'p1-9_early', questionType: questionType, inputtype: 'textarea', options: [], value: p1_9_early, setValue: setP1_9_early },
        { question: 'Other Wound Related (Early):', questionId: 'p1-10_early', questionType: questionType, inputtype: 'dropdown', options: ["Hemorrhage", "Chyle leak", "OC fistula", "Salivary fistula","Not Applicable"], value: p1_10_early, setValue: setP1_10_early },
        { question: 'Details - Other Wound Related (Early):', questionId: 'p1-11_early', questionType: questionType, inputtype: 'textarea', options: [], value: p1_11_early, setValue: setP1_11_early },
        { question: 'GI-HPB (Early):', questionId: 'p1-12_early', questionType: questionType, inputtype: 'dropdown', options: ["Gastro-paresis", "Delayed gastric emptying", "Aspiration", "Deranged liver functions", "Liver Failure","Not Applicable"], value: p1_12_early, setValue: setP1_12_early },
        { question: 'Details - GI-HPB (Early):', questionId: 'p1-13_early', questionType: questionType, inputtype: 'textarea', options: [], value: p1_13_early, setValue: setP1_13_early },
        { question: 'Pulmonary (Early):', questionId: 'p1-14_early', questionType: questionType, inputtype: 'dropdown', options: ["DVT", "Pleural effusion", "Embolism", "Respiratory Failure","Not Applicable"], value: p1_14_early, setValue: setP1_14_early },
        { question: 'Details - Pulmonary (Early):', questionId: 'p1-15_early', questionType: questionType, inputtype: 'textarea', options: [], value: p1_15_early, setValue: setP1_15_early },
        { question: 'Renal (Early):', questionId: 'p1-16_early', questionType: questionType, inputtype: 'dropdown', options: ["Electrolyte imbalance", "Deranged renal function", "Renal Failure","Not Applicable"], value: p1_16_early, setValue: setP1_16_early },
        { question: 'Details - Renal (Early):', questionId: 'p1-17_early', questionType: questionType, inputtype: 'textarea', options: [], value: p1_17_early, setValue: setP1_17_early },
        { question: 'Cardiovascular (Early):', questionId: 'p1-18_early', questionType: questionType, inputtype: 'dropdown', options: ["Hypotension", "Cardiac failure", "Hemorrhagic shock","Not Applicable"], value: p1_18_early, setValue: setP1_18_early },
        { question: 'Details - Cardiovascular (Early):', questionId: 'p1-19_early', questionType: questionType, inputtype: 'textarea', options: [], value: p1_19_early, setValue: setP1_19_early },
        { question: 'Other Systemic (Early):', questionId: 'p1-20_early', questionType: questionType, inputtype: 'dropdown', options: ["Anemia", "Fever of unknown origin","Not Applicable"], value: p1_20_early, setValue: setP1_20_early },
        { question: 'Details - Other Systemic (Early):', questionId: 'p1-21_early', questionType: questionType, inputtype: 'textarea', options: [], value: p1_21_early, setValue: setP1_21_early },
    ]
    const questions2 = [
        { question: 'Postoperative Complications (Delayed):', questionId: 'p1-1_delayed', questionType: questionType, inputtype: 'dropdown', options: ["Yes", "No"], value: p1_delayed, setValue: setP1_delayed, heading: "Postoperative Complication (up to 30d) : Delayed" },
        { question: 'Grade of Complications (Delayed):', questionId: 'p1-2_delayed', questionType: questionType, inputtype: 'dropdown', options: ["I", "II", "IIIa", "IIIb", "IVa", "IVb", "V"], value: p2_delayed, setValue: setP2_delayed },
        { question: 'Postoperative Day of Recording Complication (Delayed):', questionId: 'p1-3_delayed', questionType: questionType, inputtype: 'textarea', options: [], value: p3_delayed, setValue: setP3_delayed },
        { question: 'Local Wound Infection (Delayed):', questionId: 'p1-4_delayed', questionType: questionType, inputtype: 'dropdown', options: ["Superficial wound infection", "Deep wound infection", "Other","Not Applicable"], value: p1_4_delayed, setValue: setP1_4_delayed },
        { question: 'Details - Local Wound Infection (Delayed):', questionId: 'p1-5_delayed', questionType: questionType, inputtype: 'textarea', options: [], value: p1_5_delayed, setValue: setP1_5_delayed },
        { question: 'Systemic Infection (Delayed):', questionId: 'p1-6_delayed', questionType: questionType, inputtype: 'dropdown', options: ["Chest infection", "Sepsis", "Septicemia", "UTI", "Other","Not Applicable"], value: p1_6_delayed, setValue: setP1_6_delayed },
        { question: 'Details - Systemic Infection (Delayed):', questionId: 'p1-7_delayed', questionType: questionType, inputtype: 'textarea', options: [], value: p1_7_delayed, setValue: setP1_7_delayed },
        { question: 'Flap Related (Delayed):', questionId: 'p1-8_delayed', questionType: questionType, inputtype: 'dropdown', options: ["Wound dehiscence", "Partial flap loss", "Total flap loss","Not Applicable"], value: p1_8_delayed, setValue: setP1_8_delayed },
        { question: 'Details - Flap Related (Delayed):', questionId: 'p1-9_delayed', questionType: questionType, inputtype: 'textarea', options: [], value: p1_9_delayed, setValue: setP1_9_delayed },
        { question: 'Other Wound Related (Delayed):', questionId: 'p1-10_delayed', questionType: questionType, inputtype: 'dropdown', options: ["Hemorrhage", "Chyle leak", "OC fistula", "Salivary fistula","Not Applicable"], value: p1_10_delayed, setValue: setP1_10_delayed },
        { question: 'Details - Other Wound Related (Delayed):', questionId: 'p1-11_delayed', questionType: questionType, inputtype: 'textarea', options: [], value: p1_11_delayed, setValue: setP1_11_delayed },
        { question: 'GI-HPB (Delayed):', questionId: 'p1-12_delayed', questionType: questionType, inputtype: 'dropdown', options: ["Gastro-paresis", "Delayed gastric emptying", "Aspiration", "Deranged liver functions", "Liver Failure","Not Applicable"], value: p1_12_delayed, setValue: setP1_12_delayed },
        { question: 'Details - GI-HPB (Delayed):', questionId: 'p1-13_delayed', questionType: questionType, inputtype: 'textarea', options: [], value: p1_13_delayed, setValue: setP1_13_delayed },
        { question: 'Pulmonary (Delayed):', questionId: 'p1-14_delayed', questionType: questionType, inputtype: 'dropdown', options: ["DVT", "Pleural effusion", "Embolism", "Respiratory Failure","Not Applicable"], value: p1_14_delayed, setValue: setP1_14_delayed },
        { question: 'Details - Pulmonary (Delayed):', questionId: 'p1-15_delayed', questionType: questionType, inputtype: 'textarea', options: [], value: p1_15_delayed, setValue: setP1_15_delayed },
        { question: 'Renal (Delayed):', questionId: 'p1-16_delayed', questionType: questionType, inputtype: 'dropdown', options: ["Electrolyte imbalance", "Deranged renal function", "Renal Failure","Not Applicable"], value: p1_16_delayed, setValue: setP1_16_delayed },
        { question: 'Details - Renal (Delayed):', questionId: 'p1-17_delayed', questionType: questionType, inputtype: 'textarea', options: [], value: p1_17_delayed, setValue: setP1_17_delayed },
        { question: 'Cardiovascular (Delayed):', questionId: 'p1-18_delayed', questionType: questionType, inputtype: 'dropdown', options: ["Hypotension", "Cardiac failure", "Hemorrhagic shock","Not Applicable"], value: p1_18_delayed, setValue: setP1_18_delayed },
        { question: 'Details - Cardiovascular (Delayed):', questionId: 'p1-19_delayed', questionType: questionType, inputtype: 'textarea', options: [], value: p1_19_delayed, setValue: setP1_19_delayed },
        { question: 'Other Systemic (Delayed):', questionId: 'p1-20_delayed', questionType: questionType, inputtype: 'dropdown', options: ["Anemia", "Fever of unknown origin","Not Applicable"], value: p1_20_delayed, setValue: setP1_20_delayed },
        { question: 'Details - Other Systemic (Delayed):', questionId: 'p1-21_delayed', questionType: questionType, inputtype: 'textarea', options: [], value: p1_21_delayed, setValue: setP1_21_delayed }
    ];


    useEffect(() => {

        const fetchalldata = async () => {
            setDataloading(true)
            const storedpatient_trial_number = localStorage.getItem("patienttrialnumber");
            if (storedpatient_trial_number) {
                await setPatient_trial_number(storedpatient_trial_number);
                fetch("/api/getpatientbytrialid", {
                    method: "Post",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ trialid: storedpatient_trial_number })
                })
                    .then((res) => res.json())
                    .then((apidata: any) => {
                        console.log(apidata)
                        setDataloading(false);
                        if (apidata.executed) {
                            const questiondata = apidata.data.data;
                            const questionsArray = [questions1, questions2];
                            questionsArray.forEach((question_list) => {
                                question_list.map((question) => {
                                    const requiredquestionid = question.questionId;
                                    const questionvalue = questiondata.find((this_question: { questionId: string; }) => this_question.questionId === requiredquestionid)?.answer;

                                    questionvalue !== undefined && question.setValue(questionvalue)
                                })
                            })


                        }
                        else {
                            //   toast({
                            //     title: "Error",
                            //     description: apidata.message,
                            //     variant: "destructive",
                            //   })
                            console.log("Data not found")
                        }
                    })


            }
            else {
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
                                description: "Social History Profile Submitted",
                                variant: "success",
                            })
                            setTabValue("section2")
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
                                description: "Social History Profile Submitted",
                                variant: "success",
                            })
                            router.push("/form/histopathology")
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




            {tabValue === "section1" ? <CustomForm questions={questions1} handleSubmit={handleSubmit1} buttontitle="Submit & Next" formtitle={formTitle} loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} /> : <></>}
            {tabValue === "section2" ? <CustomForm questions={questions2} handleSubmit={handleSubmit2} buttontitle="Submit & Next" formtitle={formTitle} loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} /> : <></>}

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
                    <TabsTrigger value="section1">1</TabsTrigger>
                    <TabsTrigger value="section2">2</TabsTrigger>




                </TabsList>
            </Tabs>
            <HeadDrop
          dataArray={[
            { id: "section1", title: "Early" },
            { id: "section2", title: "Delayed" },
            
            
            
          ]}
          id={tabValue}
          setId={setTabValue}
         
        />
        </div>
    );
};
export default Postoperativecomplications
