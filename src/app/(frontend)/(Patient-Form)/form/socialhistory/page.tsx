"use client"
import React, {useState,useEffect} from 'react'
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import CustomForm from '@/components/customform';
import { daysToWeeks, sub } from 'date-fns';

const SocialHistory = () => {
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
    const questionType = "socialhistory";
    const [loading, setLoading] = React.useState(false);
    const [addiction, setAddiction] = React.useState("");
    const [addictiontype, setAddictiontype] = React.useState("");
    const [ageofstarting, setAgeofstarting] = React.useState("");
    const [doseperday, setDoseperday] = React.useState("");
    const [doseperweek, setDoseperweek] = React.useState("");
    const [doseinyears, setDoseinyears] = React.useState("");
    const [currentstatus, setCurrentstatus] = React.useState("");
    const [quitsince, setQuitsince] = React.useState("");
    const [category, setCategory] = React.useState("");
    
   
    const questions = [
        { question: 'Addiction:',questionType:questionType,questionId:'s1-0', inputtype:'text' , options: [], value: addiction, setValue: setAddiction },

        { question: 'Addiction Type:',questionType:questionType,questionId:'s1-1', inputtype:'text' , options: [], value: addictiontype, setValue: setAddictiontype },
        { question: 'Age of Starting:',questionType:questionType,questionId:'s1-2', inputtype:'text' , options: [], value: ageofstarting, setValue: setAgeofstarting },
        { question: 'Dose per Day/Intensity:',questionType:questionType,questionId:'s1-3', inputtype:'text' , options: [], value: doseperday, setValue: setDoseperday },
        { question: 'Dose per Week:',questionType:questionType,questionId:'s1-4', inputtype:'text' , options: [], value: doseperweek, setValue: setDoseperweek },
        { question: 'Duration in Years:',questionType:questionType,questionId:'s1-5', inputtype:'text' , options: [], value: doseinyears, setValue: setDoseinyears },
        { question: 'Current Status:',questionType:questionType,questionId:'s1-6', inputtype:'text' , options: [], value: currentstatus, setValue: setCurrentstatus },
        {question:'Quit Since:',questionType:questionType,questionId:'s1-7',inputtype:'date',options:[],value: quitsince,setValue:setQuitsince},
        {question:'Category:',questionType:questionType,questionId:'s1-8',inputtype:'dropdown',options:["Never","Current","Reformed"],value: category,setValue: setCategory, 
            subQuestions:[
                "Never: never consumed the substance;",
                "Current: Consuming currently or quit for less than 3 months;",
                "Reformed: Quit for 3 months or more."
            ]
        },
        
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
                const questionsArray = [questions]
                questionsArray.forEach((question_list) => {
                    question_list.map((question) => {
                        const requiredquestionid = question.questionId;
                        const questionvalue = questiondata.find((this_question: { questionId: string; }) => this_question.questionId === requiredquestionid)?.answer;
                        questionvalue !== undefined &&question.setValue(questionvalue)
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

      const alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        const numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        const special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "-", "{", "}", "[", "]", ":", ";", "'", '"', "<", ">", ",", ".", "?", "/", "|", "\\", "~", "`"];
    const handleSubmit = () => {
        if (

          
            ( (alpha.some(i => ageofstarting.includes(i)) || special.some(i => ageofstarting.includes(i))) || ageofstarting.length > 2 ) 

            || ( (alpha.some(i => doseperday.includes(i)) || special.some(i => doseperday.includes(i)))  )

            || ( (alpha.some(i => doseperweek.includes(i)) || special.some(i => doseperweek.includes(i)))  )

            || ( (alpha.some(i => doseinyears.includes(i)) || special.some(i => doseinyears.includes(i)))  )


            
        ) {
            toast({
                title: "Error",
                description: "Data type error in form submission",
                variant: "destructive",
            })

            
        }

        
        else {

            try {
                setLoading(true)
                fetch('/api/updatepatient', {
                    method: 'POST',
                    headers:{
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        patient_trial_number:patient_trial_number, 
                        questions: questions , 
                        submittedBy :   userid
                    })
                })
                .then(response => response.json())
                .then(data => {
                    setLoading(false)
                    console.log(data)
                    if(data.executed){
                        toast({
                            title: "Success",
                            description: "Social History Profile Submitted",
                            variant: "success",
                        })
                        router.push("/form/clinicalprofile")
                    }else{
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


            } catch (error : any) {
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
        <div className='w-full h-screen'>
            
            <CustomForm questions={questions} handleSubmit={handleSubmit} buttontitle="Submit" formtitle="Social History - Addictions" loading={loading}/>
        
        </div>
    );
}

export default SocialHistory
