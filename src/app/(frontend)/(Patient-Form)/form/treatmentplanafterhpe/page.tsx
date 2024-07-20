"use client"
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import CustomForm from '@/components/customform';

const Treatmentplanafterhpe = () => {
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
    const questionType = "treatmentplanafterhpe";
    const formTitle = "Treatment plan after HPE";
    const [tabValue, setTabValue] = useState("section1");
    const [loading, setLoading] = React.useState(false);

    // Section 1
    const [t1, setT1] = useState('');
    const [t2, setT2] = useState('');
    const [t3, setT3] = useState('');
    const [t4, setT4] = useState('');
    const [t5, setT5] = useState('');
    const [t6, setT6] = useState('');
    const [t7, setT7] = useState('');
    const [t8, setT8] = useState('');
    const [t9, setT9] = useState('');
    const [t10, setT10] = useState('');
    const [t11, setT11] = useState('');
    const [t12, setT12] = useState('');
    const [t13, setT13] = useState('');
    const [t14, setT14] = useState('');
    const [t15, setT15] = useState('');
    const [t16, setT16] = useState('');
    const [t17, setT17] = useState('');
    const [t18, setT18] = useState('');
    const [t19, setT19] = useState('');
    const [t20, setT20] = useState('');
    const [t21, setT21] = useState('');
    const [t22, setT22] = useState('');
    const [t23, setT23] = useState('');
    const [t24, setT24] = useState('');
    const [t25, setT25] = useState('');
    const [t26, setT26] = useState('');
    const [t27, setT27] = useState('');
    const [t28, setT28] = useState('');
    const [t29, setT29] = useState('');
    const [t30, setT30] = useState('');
    const [t31, setT31] = useState('');
    const [t32, setT32] = useState('');
    const [t33, setT33] = useState('');
    const [t34, setT34] = useState('');
    const [t35, setT35] = useState('');
    const [t36, setT36] = useState('');









    const questions1 = [
        { question: 'Plan as per HPE:', questionType: questionType, questionId: 't-1', inputtype: 'text', options: [], value: t1, setValue: setT1 },
        { question: 'Dose of radiation planned (Total dose):', questionType: questionType, questionId: 't-2', inputtype: 'text', options: [], value: t2, setValue: setT2 },
        { question: 'Number of fractions:', questionType: questionType, questionId: 't-3', inputtype: 'text', options: [], value: t3, setValue: setT3 },
        { question: 'Dose per fraction:', questionType: questionType, questionId: 't-4', inputtype: 'text', options: [], value: t4, setValue: setT4 },
        { question: 'RT Technique:', questionType: questionType, questionId: 't-5', inputtype: 'dropdown', options: ["2D",
  "3D CRT",
  "IMRT-VMAT (SIB)",
  "IMRT-VMAT (Sequential)"], value: t5, setValue: setT5 },
        { question: 'Date of RT start: (dd-mm-yyyy)', questionType: questionType, questionId: 't-6', inputtype: 'date', options: [], value: t6, setValue: setT6 },
        { question: 'Date of RT completion: (dd-mm-yyyy)', questionType: questionType, questionId: 't-7', inputtype: 'date', options: [], value: t7, setValue: setT7 },
        { question: 'Concurrent CT required:', questionType: questionType, questionId: 't-8', inputtype: 'dropdown', options: ["Yes", "No"], value: t8, setValue: setT8 },
        { question: 'Concurrent drug:', questionType: questionType, questionId: 't-9', inputtype: 'dropdown', options: [ "Cisplatin",
            "Carboplatin",
            "Cetuximab",
            "Nimotuzumab",
            "Other"], value: t9, setValue: setT9 },
        { question: 'Other concurrent drug:', questionType: questionType, questionId: 't-10', inputtype: 'text', options: [], value: t10, setValue: setT10 },
        { question: 'Indicated but not given (reason):', questionType: questionType, questionId: 't-11', inputtype: 'dropdown', options: [ "Age",
            "Tolerance issues",
            "Deranged Renal function",
            "Other"], value: t11, setValue: setT11 },
        { question: 'Other (reason):', questionType: questionType, questionId: 't-12', inputtype: 'textarea', options: [], value: t12, setValue: setT12 },
        { question: 'Cycles of chemotherapy:', questionType: questionType, questionId: 't-13', inputtype: 'text', options: [], value: t13, setValue: setT13 },
        { question: 'Chemotherapy schedule:', questionType: questionType, questionId: 't-14', inputtype: 'dropdown', options: ["Weekly","3-Weekly"], value: t14, setValue: setT14 },
        { question: 'Dose of chemotherapy:', questionType: questionType, questionId: 't-15', inputtype: 'text', options: [], value: t15, setValue: setT15 },
        { question: 'Actual treatment delivery:', questionType: questionType, questionId: 't-16', inputtype: 'text', options: [], value: t16, setValue: setT16 },
        { question: 'Dose delivered:', questionType: questionType, questionId: 't-17', inputtype: 'text', options: [], value: t17, setValue: setT17 },
        { question: 'No of fractions:', questionType: questionType, questionId: 't-18', inputtype: 'text', options: [], value: t18, setValue: setT18 },
        { question: 'Dose per fraction:', questionType: questionType, questionId: 't-19', inputtype: 'text', options: [], value: t19, setValue: setT19 },
        { question: 'RT Technique:', questionType: questionType, questionId: 't-20', inputtype: 'dropdown', options: ["2D",
  "3D CRT",
  "IMRT-VMAT (SIB)",
  "IMRT-VMAT (Sequential)"], value: t20, setValue: setT20 },
        { question: 'Date of RT start: (dd-mm-yyyy)', questionType: questionType, questionId: 't-21', inputtype: 'date', options: [], value: t21, setValue: setT21 },
        { question: 'Date of RT completion: (dd-mm-yyyy)', questionType: questionType, questionId: 't-22', inputtype: 'date', options: [], value: t22, setValue: setT22 },
        { question: 'Adaptive planning (re-plan) needed:', questionType: questionType, questionId: 't-23', inputtype: 'dropdown', options: ["Yes","No"], value: t23, setValue: setT23 },
        { question: 'Reason for re-plan:', questionType: questionType, questionId: 't-24', inputtype: 'textarea', options: [], value: t24, setValue: setT24 },
        { question: 'Treatment break:', questionType: questionType, questionId: 't-25', inputtype: 'dropdown', options: ["Yes","No"], value: t25, setValue: setT25 },
        { question: 'How many days break:', questionType: questionType, questionId: 't-26', inputtype: 'text', options: [], value: t26, setValue: setT26 },
        { question: 'Reason for break:', questionType: questionType, questionId: 't-27', inputtype: 'dropdown', options: ["Grade > III toxicity",
  "Defaulted",
  "Logistics",
  "Other"], value: t27, setValue: setT27 },
        { question: 'Other (Reason):', questionType: questionType, questionId: 't-28', inputtype: 'textarea', options: [], value: t28, setValue: setT28 },
        { question: 'Gap correction of any:', questionType: questionType, questionId: 't-29', inputtype: 'text', options: [], value: t29, setValue: setT29 },
        { question: 'Concurrent CT (Y/N):', questionType: questionType, questionId: 't-30', inputtype: 'text', options: [], value: t30, setValue: setT30 },
        { question: 'Cisplatin/ Carbo/ Nimotuzumab/other…:', questionType: questionType, questionId: 't-31', inputtype: 'text', options: [], value: t31, setValue: setT31 },
        { question: 'Dose of chemo:', questionType: questionType, questionId: 't-32', inputtype: 'text', options: [], value: t32, setValue: setT32 },
        { question: 'Cycles of chemotherapy:', questionType: questionType, questionId: 't-33', inputtype: 'text', options: [], value: t33, setValue: setT33 },
        { question: 'Dose of chemotherapy:', questionType: questionType, questionId: 't-34', inputtype: 'text', options: [], value: t34, setValue: setT34 },
        { question: 'Dose modification:', questionType: questionType, questionId: 't-35', inputtype: 'dropdown', options: ["Yes","No"], value: t35, setValue: setT35 },
        { question: 'Reason for dose modification:', questionType: questionType, questionId: 't-36', inputtype: 'text', options: [], value: t36, setValue: setT36 },
    ];



    useEffect( () => {

        const fetchalldata = async () => 
        {
            setDataloading(true);
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

      const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
      const alphaspecial = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',"!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "-", "{", "}", "[", "]", ":", ";", "'", '"', "<", ">", ",", ".", "?", "/", "|", "\\", "~", "`"];
    
  

    const handleSubmit1 = () => {
        if (
            // questions1.some((question) => question.value === '')

            alpha.some(i => t3.includes(i)) ||
            alpha.some(i => t18.includes(i)) ||
            alphaspecial.some(i => t26.includes(i)) 





        ) {
            toast({
                title: "Error",
                description: "Please fill valid data",
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
                            router.push("/form/rtogtoxicityassessment")
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




            <CustomForm questions={questions1} handleSubmit={handleSubmit1} buttontitle="Submit & Next" formtitle={formTitle} loading={loading} />

        </div>
    );
}

export default Treatmentplanafterhpe
