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
    const [p1, setP1] = useState('');
    const [p2, setP2] = useState('');
    const [p3, setP3] = useState('');
    const [p1_4, setP1_4] = useState('');
    const [p1_5, setP1_5] = useState('');
    const [p1_6, setP1_6] = useState('');
    const [p1_7, setP1_7] = useState('');
    const [p1_8, setP1_8] = useState('');
    const [p1_9, setP1_9] = useState('');
    const [p1_10, setP1_10] = useState('');
    const [p1_11, setP1_11] = useState('');
    const [p1_12, setP1_12] = useState('');
    const [p1_13, setP1_13] = useState('');
    const [p1_14, setP1_14] = useState('');
    const [p1_15, setP1_15] = useState('');
    const [p1_16, setP1_16] = useState('');
    const [p1_17, setP1_17] = useState('');
    const [p1_18, setP1_18] = useState('');
    const [p1_19, setP1_19] = useState('');
    const [p1_20, setP1_20] = useState('');
    const [p1_21, setP1_21] = useState('');



    

    

 


    const questions1 = [
        { question: 'Postoperative Complications:', questionId: 'p1-1', questionType: questionType, inputtype: 'dropdown', options: ["Yes", "No"], value: p1, setValue: setP1 , heading:"Postoperative Complication (up to 30d)" },
        { question: 'Grade of Complications:', questionId: 'p1-2', questionType: questionType, inputtype: 'dropdown', options: ["I","II","IIIa","IIIb","IVa","IVb","V"], value: p2, setValue: setP2 },
        { question: 'Postoperative Day of Recording Complication:', questionId: 'p1-3', questionType: questionType, inputtype: 'textarea', options: [], value: p3, setValue: setP3 },
        { question: 'Local Wound Infection:', questionId: 'p1-4', questionType: questionType, inputtype: 'dropdown', options: ["Superficial wound infection","Deep wound infection","Other"], value: p1_4, setValue: setP1_4 },
        { question: 'Details - Local Wound Infection:', questionId: 'p1-5', questionType: questionType, inputtype: 'textarea', options: [], value: p1_5, setValue: setP1_5 },
        { question: 'Systemic Infection:', questionId: 'p1-6', questionType: questionType, inputtype: 'dropdown', options: ["Chest infection","Sepsis","Septicemia","UTI","Other"], value: p1_6, setValue: setP1_6 },
        { question: 'Details - Systemic Infection:', questionId: 'p1-7', questionType: questionType, inputtype: 'textarea', options: [], value: p1_7, setValue: setP1_7 },
        { question: 'Flap Related:', questionId: 'p1-8', questionType: questionType, inputtype: 'dropdown', options: ["Wound dehiscence","Partial flap loss","Total flap loss"], value: p1_8, setValue: setP1_8 },
        { question: 'Details - Flap Related:', questionId: 'p1-9', questionType: questionType, inputtype: 'textarea', options: [], value: p1_9, setValue: setP1_9 },
        { question: 'Other Wound Related:', questionId: 'p1-10', questionType: questionType, inputtype: 'dropdown', options: ["Hemorrhage","Chyle leak","OC fistula","Salivary fistula"], value: p1_10, setValue: setP1_10 },
        { question: 'Details - Other Wound Related:', questionId: 'p1-11', questionType: questionType, inputtype: 'textarea', options: [], value: p1_11, setValue: setP1_11 },
        { question: 'GI-HPB:', questionId: 'p1-12', questionType: questionType, inputtype: 'dropdown', options: ["Gastro-paresis","Delayed gastric emptying","Aspiration","Deranged liver functions","Liver Failure"], value: p1_12, setValue: setP1_12 },
        { question: 'Details - GI-HPB:', questionId: 'p1-13', questionType: questionType, inputtype: 'textarea', options: [], value: p1_13, setValue: setP1_13 },
        { question: 'Pulmonary:', questionId: 'p1-14', questionType: questionType, inputtype: 'dropdown', options: ["DVT","Pleural effusion","Embolism","Respiratory Failure"], value: p1_14, setValue: setP1_14 },
        { question: 'Details - Pulmonary:', questionId: 'p1-15', questionType: questionType, inputtype: 'textarea', options: [], value: p1_15, setValue: setP1_15 },
        { question: 'Renal:', questionId: 'p1-16', questionType: questionType, inputtype: 'dropdown', options: ["Electrolyte imbalance","Deranged renal function","Renal Failure"], value: p1_16, setValue: setP1_16 },
        { question: 'Details - Renal:', questionId: 'p1-17', questionType: questionType, inputtype: 'textarea', options: [], value: p1_17, setValue: setP1_17 },
        { question: 'Cardiovascular:', questionId: 'p1-18', questionType: questionType, inputtype: 'dropdown', options: ["Hypotension","Cardiac failure","Hemorrhagic shock"], value: p1_18, setValue: setP1_18 },
        { question: 'Details - Cardiovascular:', questionId: 'p1-19', questionType: questionType, inputtype: 'textarea', options: [], value: p1_19, setValue: setP1_19 },
        { question: 'Other Systemic:', questionId: 'p1-20', questionType: questionType, inputtype: 'dropdown', options: ["Anemia","Fever of unknown origin"], value: p1_20, setValue: setP1_20 },
        { question: 'Details - Other Systemic:', questionId: 'p1-21', questionType: questionType, inputtype: 'textarea', options: [], value: p1_21, setValue: setP1_21 }
  
      ];


      useEffect( () => {

        const fetchalldata = async () => 
        {
            setDataloading(true)
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




<CustomForm questions={questions1} handleSubmit={handleSubmit1} buttontitle="Submit & Next" formtitle={formTitle} loading={loading}   />
            
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
                    
                
                    
                </TabsList>
            </Tabs>
        </div>
    );
};
export default Postoperativecomplications
