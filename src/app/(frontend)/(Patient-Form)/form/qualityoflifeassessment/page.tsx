"use client"
import React, {useState,useEffect} from 'react'
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import CustomForm from '@/components/customform';
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"

const Qualityoflifeassessment = () => {
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
    const questionType = "Qualityoflifeassessment";
    const formTitle = "QUALITY OF LIFE ASSESSMENT: FACTG/H&N/COST/FATIGUE SCORE";
    const [tabValue, setTabValue] = useState("section1");
    const [loading, setLoading] = React.useState(false);

    // Section 1: Physical Well-being
    const [q1, setQ1] = React.useState('');
    const [q2, setQ2] = useState('');
    const [q3, setQ3] = useState('');
    const [q4, setQ4] = useState('');
    const [q5, setQ5] = useState('');
    const [q6, setQ6] = useState('');
    const [q7, setQ7] = useState('');



    // Section 2: Social/Family Well-being

    const [q8, setQ8] = useState('');
    const [q9, setQ9] = useState('');
    const [q10, setQ10] = useState('');
    const [q11, setQ11] = useState('');
    const [q12, setQ12] = useState('');
    const [q13, setQ13] = useState('');
    const [q14, setQ14] = useState('');


    // Section 3: Emotional Well-being
    
    const [q15, setQ15] = useState('');
    const [q16, setQ16] = useState('');
    const [q17, setQ17] = useState('');
    const [q18, setQ18] = useState('');
    const [q19, setQ19] = useState('');
    const [q20, setQ20] = useState('');


    // Section 4: Functional Well-being

    const [q21, setQ21] = useState('');
    const [q22, setQ22] = useState('');
    const [q23, setQ23] = useState('');
    const [q24, setQ24] = useState('');
    const [q25, setQ25] = useState('');
    const [q26, setQ26] = useState('');
    const [q27, setQ27] = useState('');


    // Section 5: Head and Neck

    const [q28, setQ28] = useState('');
    const [q29, setQ29] = useState('');
    const [q30, setQ30] = useState('');
    const [q31, setQ31] = useState('');
    const [q32, setQ32] = useState('');
    const [q33, setQ33] = useState('');
    const [q34, setQ34] = useState('');
    const [q35, setQ35] = useState('');
    const [q36, setQ36] = useState('');
    const [q37, setQ37] = useState('');
    const [q38, setQ38] = useState('');
    const [q39, setQ39] = useState('');

    // Section 6: Fatigue

    const [q40, setQ40] = useState('');
    const [q41, setQ41] = useState('');
    const [q42, setQ42] = useState('');
    const [q43, setQ43] = useState('');
    const [q44, setQ44] = useState('');
    const [q45, setQ45] = useState('');
    const [q46, setQ46] = useState('');
    const [q47, setQ47] = useState('');
    const [q48, setQ48] = useState('');
    const [q49, setQ49] = useState('');
    const [q50, setQ50] = useState('');
    const [q51, setQ51] = useState('');
    const [q52, setQ52] = useState('');


    //  Section 7: Cost

    const [q53, setQ53] = useState('');
    const [q54, setQ54] = useState('');
    const [q55, setQ55] = useState('');
    const [q56, setQ56] = useState('');
    const [q57, setQ57] = useState('');
    const [q58, setQ58] = useState('');
    const [q59, setQ59] = useState('');
    const [q60, setQ60] = useState('');
    const [q61, setQ61] = useState('');
    const [q62, setQ62] = useState('');
    const [q63, setQ63] = useState('');
    const [q64, setQ64] = useState('');
    const [q65, setQ65] = useState('');


 


    const questions1 =  [
        { question: 'I have a lack of energy:', questionId: 'q-1', questionType: questionType, inputtype: 'dropdown', options: ["Not at All"," A little bit","Somewhat", "Quite a bit", "very much"], value: q1, setValue: setQ1 , heading:"Section 1: Physical Well-being" },
        { question: 'I have nausea:', questionId: 'q-2', questionType: questionType, inputtype: 'dropdown', options: ["Not at All"," A little bit","Somewhat", "Quite a bit", "very much"], value: q2, setValue: setQ2 },
        { question: 'Because of my physical condition, I have trouble meeting the needs of my family:', questionId: 'q-3', questionType: questionType, inputtype: 'dropdown', options: ["Not at All"," A little bit","Somewhat", "Quite a bit", "very much"], value: q3, setValue: setQ3 },
        { question: 'I have pain:', questionId: 'q-4', questionType: questionType, inputtype: 'dropdown', options: ["Not at All"," A little bit","Somewhat", "Quite a bit", "very much"], value: q4, setValue: setQ4 },
        { question: 'I am bothered by the side effects of the treatment:', questionId: 'q-5', questionType: questionType, inputtype: 'dropdown', options: ["Not at All"," A little bit","Somewhat", "Quite a bit", "very much"], value: q5, setValue: setQ5 },
        { question: 'I feel ill:', questionId: 'q-6', questionType: questionType, inputtype: 'dropdown', options: ["Not at All"," A little bit","Somewhat", "Quite a bit", "very much"], value: q6, setValue: setQ6 },
        { question: 'I am forced to spend time in bed:', questionId: 'q-7', questionType: questionType, inputtype: 'dropdown', options: ["Not at All"," A little bit","Somewhat", "Quite a bit", "very much"], value: q7, setValue: setQ7 }
      ];

    const questions2 = [
        { question: 'I feel close to my friends:', questionId: 'q8', questionType: questionType, inputtype: 'dropdown', options: ["Not at All"," A little bit","Somewhat", "Quite a bit", "very much"], value: q8, setValue: setQ8,heading:"Section 2: Social/Family Well-being" },
        { question: 'I get emotional support from my family:', questionId: 'q9', questionType: questionType, inputtype: 'dropdown', options: ["Not at All"," A little bit","Somewhat", "Quite a bit", "very much"], value: q9, setValue: setQ9 },
        { question: 'I get support from my friends:', questionId: 'q10', questionType: questionType, inputtype: 'dropdown', options: ["Not at All"," A little bit","Somewhat", "Quite a bit", "very much"], value: q10, setValue: setQ10 },
        { question: 'My family has accepted my illness:', questionId: 'q11', questionType: questionType, inputtype: 'dropdown', options: ["Not at All"," A little bit","Somewhat", "Quite a bit", "very much"], value: q11, setValue: setQ11 },
        { question: 'I am satisfied with family communication about my illness:', questionId: 'q12', questionType: questionType, inputtype: 'dropdown', options: ["Not at All"," A little bit","Somewhat", "Quite a bit", "very much"], value: q12, setValue: setQ12 },
        { question: 'I feel close to my partner (or the person who is my main support):', questionId: 'q13', questionType: questionType, inputtype: 'dropdown', options: ["Not at All"," A little bit","Somewhat", "Quite a bit", "very much"], value: q13, setValue: setQ13 },
        { question: 'I am satisfied with my sex life:', questionId: 'q14', questionType: questionType, inputtype: 'dropdown', options: ["Not at All"," A little bit","Somewhat", "Quite a bit", "very much"], value: q14, setValue: setQ14 }

    ];

    const questions3 = [
        { question: 'I feel sad:', questionId: 'q-15', questionType: questionType, inputtype: 'dropdown', options: ["Not at All"," A little bit","Somewhat", "Quite a bit", "very much"], value: q15, setValue: setQ15 ,heading:"Section 3: Emotional Well-being" },
        { question: 'I am satisfied with how I am coping with my illness:', questionId: 'q-16', questionType: questionType, inputtype: 'dropdown', options: ["Not at All"," A little bit","Somewhat", "Quite a bit", "very much"], value: q16, setValue: setQ16 },
        { question: 'I am losing hope in the fight against my illness:', questionId: 'q-17', questionType: questionType, inputtype: 'dropdown', options: ["Not at All"," A little bit","Somewhat", "Quite a bit", "very much"], value: q17, setValue: setQ17 },
        { question: 'I feel nervous:', questionId: 'q-18', questionType: questionType, inputtype: 'dropdown', options: ["Not at All"," A little bit","Somewhat", "Quite a bit", "very much"], value: q18, setValue: setQ18 },
        { question: 'I worry about dying:', questionId: 'q-19', questionType: questionType, inputtype: 'dropdown', options: ["Not at All"," A little bit","Somewhat", "Quite a bit", "very much"], value: q19, setValue: setQ19 },
        { question: 'I worry that my condition will get worse:', questionId: 'q-20', questionType: questionType, inputtype: 'dropdown', options: ["Not at All"," A little bit","Somewhat", "Quite a bit", "very much"], value: q20, setValue: setQ20 }
      ];

    const questions4 = [
        { question: 'I am able to work including work at home:', questionId: 'q21', questionType: questionType, inputtype: 'dropdown', options: ["Not at All"," A little bit","Somewhat", "Quite a bit", "very much"], value: q21, setValue: setQ21 ,heading:"Section 4: Functional Well-being" },
        { question: 'My work is (including work at home) fulfilling:', questionId: 'q22', questionType: questionType, inputtype: 'dropdown', options: ["Not at All"," A little bit","Somewhat", "Quite a bit", "very much"], value: q22, setValue: setQ22 },
        { question: 'I am able to enjoy life:', questionId: 'q23', questionType: questionType, inputtype: 'dropdown', options: ["Not at All"," A little bit","Somewhat", "Quite a bit", "very much"], value: q23, setValue: setQ23 },
        { question: 'I have accepted my illness:', questionId: 'q24', questionType: questionType, inputtype: 'dropdown', options: ["Not at All"," A little bit","Somewhat", "Quite a bit", "very much"], value: q24, setValue: setQ24 },
        { question: 'I am sleeping well:', questionId: 'q25', questionType: questionType, inputtype: 'dropdown', options: ["Not at All"," A little bit","Somewhat", "Quite a bit", "very much"], value: q25, setValue: setQ25 },
        { question: 'I am enjoying the things I usually do for fun:', questionId: 'q26', questionType: questionType, inputtype: 'dropdown', options: ["Not at All"," A little bit","Somewhat", "Quite a bit", "very much"], value: q26, setValue: setQ26 },
        { question: 'I am content with the quality of my life right now:', questionId: 'q27', questionType: questionType, inputtype: 'dropdown', options: ["Not at All"," A little bit","Somewhat", "Quite a bit", "very much"], value: q27, setValue: setQ27 }
      ];

    const questions5 = [
        { question: 'I am able to eat the foods that I like:', questionId: 'q-28', questionType: questionType, inputtype: 'dropdown', options: ["Not at All"," A little bit","Somewhat", "Quite a bit", "very much"], value: q28, setValue: setQ28 ,heading:"Section 5: Head and Neck"},
        { question: 'My mouth is dry:', questionId: 'q-29', questionType: questionType, inputtype: 'dropdown', options: ["Not at All"," A little bit","Somewhat", "Quite a bit", "very much"], value: q29, setValue: setQ29 },
        { question: 'I have trouble breathing:', questionId: 'q-30', questionType: questionType, inputtype: 'dropdown', options: ["Not at All"," A little bit","Somewhat", "Quite a bit", "very much"], value: q30, setValue: setQ30 },
        { question: 'My voice has its usual quality and strength:', questionId: 'q-31', questionType: questionType, inputtype: 'dropdown', options: ["Not at All"," A little bit","Somewhat", "Quite a bit", "very much"], value: q31, setValue: setQ31 },
        { question: 'I am able to eat as much food as I want:', questionId: 'q-32', questionType: questionType, inputtype: 'dropdown', options: ["Not at All"," A little bit","Somewhat", "Quite a bit", "very much"], value: q32, setValue: setQ32 },
        { question: 'I am unhappy with how my face and neck look:', questionId: 'q-33', questionType: questionType, inputtype: 'dropdown', options: ["Not at All"," A little bit","Somewhat", "Quite a bit", "very much"], value: q33, setValue: setQ33 },
        { question: 'I can swallow naturally and easily:', questionId: 'q-34', questionType: questionType, inputtype: 'dropdown', options: ["Not at All"," A little bit","Somewhat", "Quite a bit", "very much"], value: q34, setValue: setQ34 },
        { question: 'I smoke/consume tobacco products:', questionId: 'q-35', questionType: questionType, inputtype: 'dropdown', options: ["Not at All"," A little bit","Somewhat", "Quite a bit", "very much"], value: q35, setValue: setQ35 },
        { question: 'I drink alcohol:', questionId: 'q-36', questionType: questionType, inputtype: 'dropdown', options: ["Not at All"," A little bit","Somewhat", "Quite a bit", "very much"], value: q36, setValue: setQ36 },
        { question: 'I am able to communicate with others:', questionId: 'q-37', questionType: questionType, inputtype: 'dropdown', options: ["Not at All"," A little bit","Somewhat", "Quite a bit", "very much"], value: q37, setValue: setQ37 },
        { question: 'I can eat solid foods:', questionId: 'q-38', questionType: questionType, inputtype: 'dropdown', options: ["Not at All"," A little bit","Somewhat", "Quite a bit", "very much"], value: q38, setValue: setQ38 },
        { question: 'I have pain in my mouth throat or neck:', questionId: 'q-39', questionType: questionType, inputtype: 'dropdown', options: ["Not at All"," A little bit","Somewhat", "Quite a bit", "very much"], value: q39, setValue: setQ39 }
      ];


    const questions6 = [
        { question: 'I feel fatigued:', questionId: 'q40', questionType: questionType, inputtype: 'dropdown', options: ["Not at All"," A little bit","Somewhat", "Quite a bit", "very much"], value: q40, setValue: setQ40 ,heading:"Section 6: Fatigue"},
        { question: 'I feel weak all over:', questionId: 'q41', questionType: questionType, inputtype: 'dropdown', options: ["Not at All"," A little bit","Somewhat", "Quite a bit", "very much"], value: q41, setValue: setQ41 },
        { question: 'I feel listless (washed out):', questionId: 'q42', questionType: questionType, inputtype: 'dropdown', options: ["Not at All"," A little bit","Somewhat", "Quite a bit", "very much"], value: q42, setValue: setQ42 },
        { question: 'I feel tired:', questionId: 'q43', questionType: questionType, inputtype: 'dropdown', options: ["Not at All"," A little bit","Somewhat", "Quite a bit", "very much"], value: q43, setValue: setQ43 },
        { question: 'I have trouble starting things because I am tired:', questionId: 'q44', questionType: questionType, inputtype: 'dropdown', options: ["Not at All"," A little bit","Somewhat", "Quite a bit", "very much"], value: q44, setValue: setQ44 },
        { question: 'I have trouble finishing things because I am tired:', questionId: 'q45', questionType: questionType, inputtype: 'dropdown', options: ["Not at All"," A little bit","Somewhat", "Quite a bit", "very much"], value: q45, setValue: setQ45 },
        { question: 'I have energy:', questionId: 'q46', questionType: questionType, inputtype: 'dropdown', options: ["Not at All"," A little bit","Somewhat", "Quite a bit", "very much"], value: q46, setValue: setQ46 },
        { question: 'I am able to do my usual activities:', questionId: 'q47', questionType: questionType, inputtype: 'dropdown', options: ["Not at All"," A little bit","Somewhat", "Quite a bit", "very much"], value: q47, setValue: setQ47 },
        { question: 'I need to sleep during the day:', questionId: 'q48', questionType: questionType, inputtype: 'dropdown', options: ["Not at All"," A little bit","Somewhat", "Quite a bit", "very much"], value: q48, setValue: setQ48 },
        { question: 'I am too tired to eat:', questionId: 'q49', questionType: questionType, inputtype: 'dropdown', options: ["Not at All"," A little bit","Somewhat", "Quite a bit", "very much"], value: q49, setValue: setQ49 },
        { question: 'I need help doing my usual activities:', questionId: 'q50', questionType: questionType, inputtype: 'dropdown', options: ["Not at All"," A little bit","Somewhat", "Quite a bit", "very much"], value: q50, setValue: setQ50 },
        { question: 'I am frustrated by being too tired to do the things I want to do:', questionId: 'q51', questionType: questionType, inputtype: 'dropdown', options: ["Not at All"," A little bit","Somewhat", "Quite a bit", "very much"], value: q51, setValue: setQ51 },
        { question: 'I have to limit my social activity because I am tired:', questionId: 'q52', questionType: questionType, inputtype: 'dropdown', options: ["Not at All"," A little bit","Somewhat", "Quite a bit", "very much"], value: q52, setValue: setQ52 }
      ];

    const questions7 =  [
        { question: 'I know that I have enough money in savings, retirement, or assets to cover the costs of my treatment:', questionId: 'q-53', questionType: questionType, inputtype: 'dropdown', options: ["Not at All"," A little bit","Somewhat", "Quite a bit", "very much"], value: q53, setValue: setQ53 , heading:"Section 7: Cost"},
        { question: 'My out-of-pocket medical expenses are more than I thought they would be:', questionId: 'q-54', questionType: questionType, inputtype: 'dropdown', options: ["Not at All"," A little bit","Somewhat", "Quite a bit", "very much"], value: q54, setValue: setQ54 },
        { question: 'I worry about the financial problems I will have in the future as a result of my illness or treatment:', questionId: 'q-55', questionType: questionType, inputtype: 'dropdown', options: ["Not at All"," A little bit","Somewhat", "Quite a bit", "very much"], value: q55, setValue: setQ55 },
        { question: 'I feel I have no choice about the amount of money I spend on care:', questionId: 'q-56', questionType: questionType, inputtype: 'dropdown', options: ["Not at All"," A little bit","Somewhat", "Quite a bit", "very much"], value: q56, setValue: setQ56 },
        { question: 'I am frustrated that I cannot work or contribute as much as I usually do:', questionId: 'q-57', questionType: questionType, inputtype: 'dropdown', options: ["Not at All"," A little bit","Somewhat", "Quite a bit", "very much"], value: q57, setValue: setQ57 },
        { question: 'I am satisfied with my current financial situation:', questionId: 'q-58', questionType: questionType, inputtype: 'dropdown', options: ["Not at All"," A little bit","Somewhat", "Quite a bit", "very much"], value: q58, setValue: setQ58 },
        { question: 'I am able to meet my monthly expenses:', questionId: 'q-59', questionType: questionType, inputtype: 'dropdown', options: ["Not at All"," A little bit","Somewhat", "Quite a bit", "very much"], value: q59, setValue: setQ59 },
        { question: 'I feel financially stressed:', questionId: 'q-60', questionType: questionType, inputtype: 'dropdown', options: ["Not at All"," A little bit","Somewhat", "Quite a bit", "very much"], value: q60, setValue: setQ60 },
        { question: 'I am concerned about keeping my job and income, including paid work at home:', questionId: 'q-61', questionType: questionType, inputtype: 'dropdown', options: ["Not at All"," A little bit","Somewhat", "Quite a bit", "very much"], value: q61, setValue: setQ61 },
        { question: 'My cancer or treatment has reduced my satisfaction with my present financial situation:', questionId: 'q-62', questionType: questionType, inputtype: 'dropdown', options: ["Not at All"," A little bit","Somewhat", "Quite a bit", "very much"], value: q62, setValue: setQ62 },
        { question: 'I feel in control of my financial situation:', questionId: 'q-63', questionType: questionType, inputtype: 'dropdown', options: ["Not at All"," A little bit","Somewhat", "Quite a bit", "very much"], value: q63, setValue: setQ63 },
        { question: 'My illness has been a financial hardship to my family and me:', questionId: 'q-64', questionType: questionType, inputtype: 'dropdown', options: ["Not at All"," A little bit","Somewhat", "Quite a bit", "very much"], value: q64, setValue: setQ64 },
        { question: 'Other financial concerns:', questionId: 'q-65', questionType: questionType, inputtype: 'dropdown', options: ["Not at All"," A little bit","Somewhat", "Quite a bit", "very much"], value: q65, setValue: setQ65 }
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
                const questionsArray = [questions1, questions2, questions3, questions4, questions5, questions6, questions7]
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
           


    //   questions2.some((question) => question.value === "")

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
            // questions3.some((question) => question.value === '')
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
                                description: "Social History Profile Submitted",
                                variant: "success",
                            })
                            setTabValue("section4")
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


    const handleSubmit4 = () => {
        if (
            // questions4.some((question) => question.value === '')
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
                        questions: questions4,
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
                            setTabValue("section5")
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

    const handleSubmit5 = () => {
        if (
            // questions5.some((question) => question.value === '')
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
                        questions: questions5,
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
                            setTabValue("section6")
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


    const handleSubmit6 = () => {
        if (
            // questions6.some((question) => question.value === '')
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
                        questions: questions6,
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
                            setTabValue("section7")
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


    const handleSubmit7 = () => {
        if (
            // questions7.some((question) => question.value === '')
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
                        questions: questions7,
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
                            router.push('/form/surgicaltreatment')
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
        <div className=' w-full h-screen'>




            {tabValue==="section1"?<CustomForm questions={questions1} handleSubmit={handleSubmit1} buttontitle="Submit & Next" formtitle={formTitle} loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} />:<></>}
            {tabValue==="section2"?<CustomForm questions={questions2} handleSubmit={handleSubmit2} buttontitle="Submit & Next" formtitle={formTitle} loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} />:<></>}
            {tabValue==="section3"?<CustomForm questions={questions3} handleSubmit={handleSubmit3} buttontitle="Submit & Next" formtitle={formTitle} loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} />:<></>}
            {tabValue==="section4"?<CustomForm questions={questions4} handleSubmit={handleSubmit4} buttontitle="Submit & Next" formtitle={formTitle} loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} />:<></>}
            {tabValue==="section5"?<CustomForm questions={questions5} handleSubmit={handleSubmit5} buttontitle="Submit & Next" formtitle={formTitle} loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} />:<></>}
            {tabValue==="section6"?<CustomForm questions={questions6} handleSubmit={handleSubmit6} buttontitle="Submit & Next" formtitle={formTitle} loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} />:<></>}
            {tabValue==="section7"?<CustomForm questions={questions7} handleSubmit={handleSubmit7} buttontitle="Submit & Next" formtitle={formTitle} loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} />:<></>}
        </div>
    );
}


interface CustomTabsProps {
    tabValue: string;
    setTabValue: (value: string) => void;
}

const CustomTabs: React.FC<CustomTabsProps> = ({ tabValue, setTabValue }) => {
    return (
        <div className=''>

            <Tabs value={tabValue} onValueChange={setTabValue} className="">
                <TabsList className='bg-green-1'>
                    <TabsTrigger className='active:bg-green-5' value="section1">1</TabsTrigger>
                    <TabsTrigger value="section2">2</TabsTrigger>
                    <TabsTrigger value="section3">3</TabsTrigger>
                    <TabsTrigger value="section4">4</TabsTrigger>
                    <TabsTrigger value="section5">5</TabsTrigger>
                    <TabsTrigger value="section6">6</TabsTrigger>
                    <TabsTrigger value="section7">7</TabsTrigger>
                
                    
                </TabsList>
            </Tabs>
        </div>
    );
};

export default Qualityoflifeassessment
