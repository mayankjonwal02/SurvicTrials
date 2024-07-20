"use client"
import React, {useState,useEffect} from 'react'
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import CustomForm from '@/components/customform';

const Chemotherapyform = () => {
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
    const [dataloading, setSetDataLoading] = useState(false);









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
    

      useEffect( () => {

        const fetchalldata = async () => 
        {
        setSetDataLoading(true);
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
            setSetDataLoading(false);
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

      const alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
      const alphaspecial = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',"!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "-", "{", "}", "[", "]", ":", ";", "'", '"', "<", ">", ",", ".", "?", "/", "|", "\\", "~", "`"];
    



    const handleSubmit1 = () => {
        if (
            // questions1.some((question) => question.value === '')
            alpha.some(i => plateletCount.includes(i)) ||
            alpha.some(i => hb.includes(i)) ||
            alpha.some(i => anc.includes(i)) 





        ) {
            if (alpha.some(i => plateletCount.includes(i))) {
                toast({
                    title: "Error",
                    description: "Invalid platelet count data",
                    variant: "destructive",
                });
            } else if (alpha.some(i => hb.includes(i))) {
                toast({
                    title: "Error",
                    description: "Invalid hemoglobin data",
                    variant: "destructive",
                });
            } else if (alpha.some(i => anc.includes(i))) {
                toast({
                    title: "Error",
                    description: "Invalid absolute neutrophil count data",
                    variant: "destructive",
                });
            }


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
                            router.push("/form/concomitantmedicines")
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

export default Chemotherapyform
