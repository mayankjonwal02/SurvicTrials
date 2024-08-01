"use client"
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import CustomForm from '@/components/customform';
import { set } from 'mongoose';
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"
import HeadDrop from '@/components/HeadDrop';

  interface updateType {
    questionId: string;
    updates:any[]

  }

const Adverseeventsmanagement = () => {
    const { toast } = useToast()
    const router = useRouter();

    const [user, setUser] = useState<any>({});
    const [userid, setUserId] = useState('');
    const [patient_trial_number, setPatient_trial_number] = React.useState("2024-BTI-1");
    const [dataloading, setDataloading] = useState(true);
    const [updates, setUpdates] = useState<updateType[]>([]);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
        setUser(storedUser);
        setUserId(storedUser.unique_id);
    }, []);
    const questionType = "adverseeventsmanagement";
    const formTitle = "Adverse Events Management";
    const [tabValue, setTabValue] = useState("section1");
    const [loading, setLoading] = React.useState(false);


    const alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']



    const [a21_cycle1, setA21_cycle1] = useState('Cycle 1');
    const [a22_cycle1, setA22_cycle1] = useState('');
    const [a23_cycle1, setA23_cycle1] = useState('');
    const [a24_cycle1, setA24_cycle1] = useState('');
    const [a25_cycle1, setA25_cycle1] = useState('');
    const [a26_cycle1, setA26_cycle1] = useState('');
    const [a27_cycle1, setA27_cycle1] = useState('');
    const [a28_cycle1, setA28_cycle1] = useState('');
    const [a29_cycle1, setA29_cycle1] = useState('');
    const [a210_cycle1, setA210_cycle1] = useState('');
    const [a211_cycle1, setA211_cycle1] = useState('');
    const [a212_cycle1, setA212_cycle1] = useState('');
    const [a213_cycle1, setA213_cycle1] = useState('');
    const [a214_cycle1, setA214_cycle1] = useState('');
    const [a215_cycle1, setA215_cycle1] = useState('');
    const [a216_cycle1, setA216_cycle1] = useState('');
    const [a217_cycle1, setA217_cycle1] = useState('');
    const [a218_cycle1, setA218_cycle1] = useState('');

    const questions1 = [
        { question: 'Chemotherapy Cycle:', questionId: 'a2-1_cycle1', questionType: questionType, inputtype: 'disabled', options: ["Cycle 1", "Cycle 2", "Cycle 3"], value: a21_cycle1, setValue: setA21_cycle1 },
        { question: 'Adverse Event:', questionId: 'a2-2_cycle1', questionType: questionType, inputtype: 'text', options: [], value: a22_cycle1, setValue: setA22_cycle1 },
        { question: 'Start Date:', questionId: 'a2-3_cycle1', questionType: questionType, inputtype: 'date', options: [], value: a23_cycle1, setValue: setA23_cycle1 },
        { question: 'End Date:', questionId: 'a2-4_cycle1', questionType: questionType, inputtype: 'date', options: [], value: a24_cycle1, setValue: setA24_cycle1 },
        { question: 'Admission Required:', questionId: 'a2-5_cycle1', questionType: questionType, inputtype: 'dropdown', options: ['Yes', 'No'], value: a25_cycle1, setValue: setA25_cycle1 },
        { question: 'Duration of Admission (in Days):', questionId: 'a2-6_cycle1', questionType: questionType, inputtype: 'text', options: [], value: a26_cycle1, setValue: setA26_cycle1 },
        { question: 'Antibiotics Given:', questionId: 'a2-7_cycle1', questionType: questionType, inputtype: 'dropdown', options: ['Yes', 'No'], value: a27_cycle1, setValue: setA27_cycle1 },
        { question: 'Number of Days of Antibiotics:', questionId: 'a2-8_cycle1', questionType: questionType, inputtype: 'text', options: [], value: a28_cycle1, setValue: setA28_cycle1 , restriction:alpha.some(i => a28_cycle1.includes(i)),restrictiontext:"alphabets not allowed"},
        { question: 'Nadir ANC:', questionId: 'a2-9_cycle1', questionType: questionType, inputtype: 'text', options: [], value: a29_cycle1, setValue: setA29_cycle1 },
        { question: 'Nadir Platelets:', questionId: 'a2-10_cycle1', questionType: questionType, inputtype: 'text', options: [], value: a210_cycle1, setValue: setA210_cycle1 },
        { question: 'Focus of Infection:', questionId: 'a2-11_cycle1', questionType: questionType, inputtype: 'text', options: [], value: a211_cycle1, setValue: setA211_cycle1 },
        { question: 'Transfusion:', questionId: 'a2-12_cycle1', questionType: questionType, inputtype: 'dropdown', options: ['Yes', 'No'], value: a212_cycle1, setValue: setA212_cycle1 },
        { question: 'GCSF Given:', questionId: 'a2-13_cycle1', questionType: questionType, inputtype: 'dropdown', options: ['Yes', 'No'], value: a213_cycle1, setValue: setA213_cycle1 },
        { question: 'Dose Reduction Planned from Next Cycle:', questionId: 'a2-14_cycle1', questionType: questionType, inputtype: 'dropdown', options: ['Yes', 'No'], value: a214_cycle1, setValue: setA214_cycle1 },
        { question: 'Other Management:', questionId: 'a2-15_cycle1', questionType: questionType, inputtype: 'text', options: [], value: a215_cycle1, setValue: setA215_cycle1 },
        { question: 'Drug 1:', questionId: 'a2-16_cycle1', questionType: questionType, inputtype: 'text', options: [], value: a216_cycle1, setValue: setA216_cycle1 },
        { question: 'Drug 2:', questionId: 'a2-17_cycle1', questionType: questionType, inputtype: 'text', options: [], value: a217_cycle1, setValue: setA217_cycle1 },
        { question: 'Drug 3:', questionId: 'a2-18_cycle1', questionType: questionType, inputtype: 'text', options: [], value: a218_cycle1, setValue: setA218_cycle1 },
    ];



    const [a21_cycle2, setA21_cycle2] = useState('Cycle 2');
    const [a22_cycle2, setA22_cycle2] = useState('');
    const [a23_cycle2, setA23_cycle2] = useState('');
    const [a24_cycle2, setA24_cycle2] = useState('');
    const [a25_cycle2, setA25_cycle2] = useState('');
    const [a26_cycle2, setA26_cycle2] = useState('');
    const [a27_cycle2, setA27_cycle2] = useState('');
    const [a28_cycle2, setA28_cycle2] = useState('');
    const [a29_cycle2, setA29_cycle2] = useState('');
    const [a210_cycle2, setA210_cycle2] = useState('');
    const [a211_cycle2, setA211_cycle2] = useState('');
    const [a212_cycle2, setA212_cycle2] = useState('');
    const [a213_cycle2, setA213_cycle2] = useState('');
    const [a214_cycle2, setA214_cycle2] = useState('');
    const [a215_cycle2, setA215_cycle2] = useState('');
    const [a216_cycle2, setA216_cycle2] = useState('');
    const [a217_cycle2, setA217_cycle2] = useState('');
    const [a218_cycle2, setA218_cycle2] = useState('');

    const questions2 = [
        { question: 'Chemotherapy Cycle:', questionId: 'a2-1_cycle2', questionType: questionType, inputtype: 'disabled', options: ["Cycle 1", "Cycle 2", "Cycle 3"], value: a21_cycle2, setValue: setA21_cycle2 },
        { question: 'Adverse Event:', questionId: 'a2-2_cycle2', questionType: questionType, inputtype: 'text', options: [], value: a22_cycle2, setValue: setA22_cycle2 },
        { question: 'Start Date:', questionId: 'a2-3_cycle2', questionType: questionType, inputtype: 'date', options: [], value: a23_cycle2, setValue: setA23_cycle2 },
        { question: 'End Date:', questionId: 'a2-4_cycle2', questionType: questionType, inputtype: 'date', options: [], value: a24_cycle2, setValue: setA24_cycle2 },
        { question: 'Admission Required:', questionId: 'a2-5_cycle2', questionType: questionType, inputtype: 'dropdown', options: ['Yes', 'No'], value: a25_cycle2, setValue: setA25_cycle2 },
        { question: 'Duration of Admission (in Days):', questionId: 'a2-6_cycle2', questionType: questionType, inputtype: 'text', options: [], value: a26_cycle2, setValue: setA26_cycle2 },
        { question: 'Antibiotics Given:', questionId: 'a2-7_cycle2', questionType: questionType, inputtype: 'dropdown', options: ['Yes', 'No'], value: a27_cycle2, setValue: setA27_cycle2 },
        { question: 'Number of Days of Antibiotics:', questionId: 'a2-8_cycle2', questionType: questionType, inputtype: 'text', options: [], value: a28_cycle2, setValue: setA28_cycle2, restriction:alpha.some(i => a28_cycle2.includes(i)),restrictiontext:"alphabets not allowed" },
        { question: 'Nadir ANC:', questionId: 'a2-9_cycle2', questionType: questionType, inputtype: 'text', options: [], value: a29_cycle2, setValue: setA29_cycle2 },
        { question: 'Nadir Platelets:', questionId: 'a2-10_cycle2', questionType: questionType, inputtype: 'text', options: [], value: a210_cycle2, setValue: setA210_cycle2 },
        { question: 'Focus of Infection:', questionId: 'a2-11_cycle2', questionType: questionType, inputtype: 'text', options: [], value: a211_cycle2, setValue: setA211_cycle2 },
        { question: 'Transfusion:', questionId: 'a2-12_cycle2', questionType: questionType, inputtype: 'dropdown', options: ['Yes', 'No'], value: a212_cycle2, setValue: setA212_cycle2 },
        { question: 'GCSF Given:', questionId: 'a2-13_cycle2', questionType: questionType, inputtype: 'dropdown', options: ['Yes', 'No'], value: a213_cycle2, setValue: setA213_cycle2 },
        { question: 'Dose Reduction Planned from Next Cycle:', questionId: 'a2-14_cycle2', questionType: questionType, inputtype: 'dropdown', options: ['Yes', 'No'], value: a214_cycle2, setValue: setA214_cycle2 },
        { question: 'Other Management:', questionId: 'a2-15_cycle2', questionType: questionType, inputtype: 'text', options: [], value: a215_cycle2, setValue: setA215_cycle2 },
        { question: 'Drug 1:', questionId: 'a2-16_cycle2', questionType: questionType, inputtype: 'text', options: [], value: a216_cycle2, setValue: setA216_cycle2 },
        { question: 'Drug 2:', questionId: 'a2-17_cycle2', questionType: questionType, inputtype: 'text', options: [], value: a217_cycle2, setValue: setA217_cycle2 },
        { question: 'Drug 3:', questionId: 'a2-18_cycle2', questionType: questionType, inputtype: 'text', options: [], value: a218_cycle2, setValue: setA218_cycle2 },
    ];



    const [a21_cycle3, setA21_cycle3] = useState('Cycle 3');
    const [a22_cycle3, setA22_cycle3] = useState('');
    const [a23_cycle3, setA23_cycle3] = useState('');
    const [a24_cycle3, setA24_cycle3] = useState('');
    const [a25_cycle3, setA25_cycle3] = useState('');
    const [a26_cycle3, setA26_cycle3] = useState('');
    const [a27_cycle3, setA27_cycle3] = useState('');
    const [a28_cycle3, setA28_cycle3] = useState('');
    const [a29_cycle3, setA29_cycle3] = useState('');
    const [a210_cycle3, setA210_cycle3] = useState('');
    const [a211_cycle3, setA211_cycle3] = useState('');
    const [a212_cycle3, setA212_cycle3] = useState('');
    const [a213_cycle3, setA213_cycle3] = useState('');
    const [a214_cycle3, setA214_cycle3] = useState('');
    const [a215_cycle3, setA215_cycle3] = useState('');
    const [a216_cycle3, setA216_cycle3] = useState('');
    const [a217_cycle3, setA217_cycle3] = useState('');
    const [a218_cycle3, setA218_cycle3] = useState('');

    const questions3 = [
        { question: 'Chemotherapy Cycle:', questionId: 'a2-1_cycle3', questionType: questionType, inputtype: 'disabled', options: ["Cycle 1", "Cycle 2", "Cycle 3"], value: a21_cycle3, setValue: setA21_cycle3 },
        { question: 'Adverse Event:', questionId: 'a2-2_cycle3', questionType: questionType, inputtype: 'text', options: [], value: a22_cycle3, setValue: setA22_cycle3 },
        { question: 'Start Date:', questionId: 'a2-3_cycle3', questionType: questionType, inputtype: 'date', options: [], value: a23_cycle3, setValue: setA23_cycle3 },
        { question: 'End Date:', questionId: 'a2-4_cycle3', questionType: questionType, inputtype: 'date', options: [], value: a24_cycle3, setValue: setA24_cycle3 },
        { question: 'Admission Required:', questionId: 'a2-5_cycle3', questionType: questionType, inputtype: 'dropdown', options: ['Yes', 'No'], value: a25_cycle3, setValue: setA25_cycle3 },
        { question: 'Duration of Admission (in Days):', questionId: 'a2-6_cycle3', questionType: questionType, inputtype: 'text', options: [], value: a26_cycle3, setValue: setA26_cycle3 },
        { question: 'Antibiotics Given:', questionId: 'a2-7_cycle3', questionType: questionType, inputtype: 'dropdown', options: ['Yes', 'No'], value: a27_cycle3, setValue: setA27_cycle3 },
        { question: 'Number of Days of Antibiotics:', questionId: 'a2-8_cycle3', questionType: questionType, inputtype: 'text', options: [], value: a28_cycle3, setValue: setA28_cycle3 , restriction:alpha.some(i => a28_cycle3.includes(i)),restrictiontext:"alphabets not allowed"},
        { question: 'Nadir ANC:', questionId: 'a2-9_cycle3', questionType: questionType, inputtype: 'text', options: [], value: a29_cycle3, setValue: setA29_cycle3 },
        { question: 'Nadir Platelets:', questionId: 'a2-10_cycle3', questionType: questionType, inputtype: 'text', options: [], value: a210_cycle3, setValue: setA210_cycle3 },
        { question: 'Focus of Infection:', questionId: 'a2-11_cycle3', questionType: questionType, inputtype: 'text', options: [], value: a211_cycle3, setValue: setA211_cycle3 },
        { question: 'Transfusion:', questionId: 'a2-12_cycle3', questionType: questionType, inputtype: 'dropdown', options: ['Yes', 'No'], value: a212_cycle3, setValue: setA212_cycle3 },
        { question: 'GCSF Given:', questionId: 'a2-13_cycle3', questionType: questionType, inputtype: 'dropdown', options: ['Yes', 'No'], value: a213_cycle3, setValue: setA213_cycle3 },
        { question: 'Dose Reduction Planned from Next Cycle:', questionId: 'a2-14_cycle3', questionType: questionType, inputtype: 'dropdown', options: ['Yes', 'No'], value: a214_cycle3, setValue: setA214_cycle3 },
        { question: 'Other Management:', questionId: 'a2-15_cycle3', questionType: questionType, inputtype: 'text', options: [], value: a215_cycle3, setValue: setA215_cycle3 },
        { question: 'Drug 1:', questionId: 'a2-16_cycle3', questionType: questionType, inputtype: 'text', options: [], value: a216_cycle3, setValue: setA216_cycle3 },
        { question: 'Drug 2:', questionId: 'a2-17_cycle3', questionType: questionType, inputtype: 'text', options: [], value: a217_cycle3, setValue: setA217_cycle3 },
        { question: 'Drug 3:', questionId: 'a2-18_cycle3', questionType: questionType, inputtype: 'text', options: [], value: a218_cycle3, setValue: setA218_cycle3 },
    ];










    useEffect(() => {

        const fetchalldata = async () => {
            let updateArray: { questionId: string; updates: any; }[] = []

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
                            const questionsArray = [questions1, questions2, questions3]
                            questionsArray.forEach((question_list) => {
                                question_list.map((question) => {
                                    const requiredquestionid = question.questionId;
                                    const questionvalue = questiondata.find((this_question: { questionId: string; }) => this_question.questionId === requiredquestionid)?.answer;
                                    const questionupdates =questiondata.find((this_question: { questionId: string; }) => this_question.questionId === requiredquestionid)?.updates;

                                    questionvalue !== undefined && question.setValue(questionvalue)
                                    questionupdates !== undefined && updateArray.push({
                                        questionId: question.questionId,
                                        updates: questionupdates})

                                })
                            })
                setUpdates(updateArray);


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

            alpha.some(i => a28_cycle1.includes(i))




        ) {
            toast({
                title: "Error",
                description: "Please fill valid data for Number of Days of Antibiotics",
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

            alpha.some(i => a28_cycle2.includes(i))




        ) {
            toast({
                title: "Error",
                description: "Please fill valid data for Number of Days of Antibiotics",
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
                            setTabValue("section3")
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

            alpha.some(i => a28_cycle3.includes(i))




        ) {
            toast({
                title: "Error",
                description: "Please fill valid data for Number of Days of Antibiotics",
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
                                description: "Social History Profile Submitted",
                                variant: "success",
                            })
                            router.push("/form/protocoldeviation")
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
        <div className=' w-full h-screen'>




            {tabValue === "section1" && <CustomForm questions={questions1} handleSubmit={handleSubmit1} buttontitle="Submit & Next" formtitle={formTitle} loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} updates={updates}/>}
            {tabValue === "section2" && <CustomForm questions={questions2} handleSubmit={handleSubmit2} buttontitle="Submit & Next" formtitle={formTitle} loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} updates={updates}/>}
            {tabValue === "section3" && <CustomForm questions={questions3} handleSubmit={handleSubmit3} buttontitle="Submit & Next" formtitle={formTitle} loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} updates={updates}/>}
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

export default Adverseeventsmanagement
