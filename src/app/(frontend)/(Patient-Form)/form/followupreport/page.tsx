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
import HeadDrop from '@/components/HeadDrop';


  interface updateType {
    questionId: string;
    updates:any[]
}



const Followupreport = () => {
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
    const questionType = "followupreport";
    const formTitle = "Follow-up Assessment Report";
    const [tabValue, setTabValue] = useState("section1");
    const [loading, setLoading] = React.useState(false);

    // Section 1
    const [followUpDate, setFollowUpDate] = useState('');
    const [followUpNumber, setFollowUpNumber] = useState('');



    // Section 2

    const [f3, setF3] = useState('');
    const [f4, setF4] = useState('');


    // Section 3
    
    const [dateOfImaging, setDateOfImaging] = useState('');
    const [imagingType, setImagingType] = useState('');
    const [imagingFindings, setImagingFindings] = useState('');


    // Section 4

    const [biopsyDate, setBiopsyDate] = useState('');
  const [biopsyReport, setBiopsyReport] = useState('');


    // Section 5

    const [statusDate, setStatusDate] = useState('');
    const [followUpStatus, setFollowUpStatus] = useState('');
    const [site, setSite] = useState('');
    const [aliveOrDeath, setAliveOrDeath] = useState('');
    const [causeOfDeath, setCauseOfDeath] = useState('');
    const [dateOfDeath, setDateOfDeath] = useState('');
    const [placeOfDeath, setPlaceOfDeath] = useState('');
   

    const [updates, setUpdates] = useState<updateType[]>([]);

 


    const questions1 =  [
        { question: 'Date of follow up assessment:', questionId: 'f-1', questionType: questionType, inputtype: 'date', options: [], value: followUpDate, setValue: setFollowUpDate,heading:"Follow-Up Assessment Information" },
        { question: 'Follow-Up Number:', questionId: 'f-2', questionType: questionType, inputtype: 'text', options: [], value: followUpNumber, setValue: setFollowUpNumber }
      ];

    const questions2 = [
        { question: 'Clinical Examination Date:', questionId: 'f-3', questionType: questionType, inputtype: 'date', options: [], value: f3, setValue: setF3 , heading:"Clinical Examination"},
        { question: 'Clinical Examination Findings:', questionId: 'f-4', questionType: questionType, inputtype: 'text', options: [], value: f4, setValue: setF4 }
      ];

    const questions3 = [
        { question: 'Date of Imaging:',questionType: questionType, questionId: 'f-5', inputtype: 'date', options: [],value: dateOfImaging, setValue: setDateOfImaging ,heading:"Imaging "},
        { question: 'Imaging type (USG/ CT/ MRI/ PET CT):',questionType: questionType, questionId: 'f-6', inputtype: 'dropdown',value: imagingType, setValue: setImagingType, options: [ "USG",
            "CT",
            "MRI",
            "PET CT"] },
        { question: 'Imaging Findings:',questionType: questionType, questionId: 'f-7', inputtype: 'textarea',value: imagingFindings, setValue: setImagingFindings, options: [] }
      ];

    const questions4 = [
        { question: 'Biopsy Date ', questionId: 'f-8', questionType: questionType, inputtype: 'date', options: [], value: biopsyDate, setValue: setBiopsyDate,heading:"Biopsy" },
        { question: 'Biopsy Report:', questionId: 'f-9', questionType: questionType, inputtype: 'text', options: [], value: biopsyReport, setValue: setBiopsyReport }
      ];

    const questions5 = [
        { question: 'Follow-Up Status Date:', questionType: questionType,questionId: 'f-10', inputtype: 'date', options:[],value: statusDate, setValue: setStatusDate , heading :"Final Status" },
        { question: 'Follow-Up Status:', questionType: questionType,questionId: 'f-11', inputtype: 'dropdown',options:[ "Disease free",
            "Recurrence"], value: followUpStatus, setValue: setFollowUpStatus },
        { question: 'Site:',questionType: questionType, questionId: 'f-12', inputtype: 'dropdown', options:[ "Local",
            "Loco-regional",
            "LR+Distant",
            "Distant only"],value: site, setValue: setSite },
        { question: 'Alive or Death:',questionType: questionType, questionId: 'f-13', inputtype: 'dropdown', options:["Alive", "Death"],value: aliveOrDeath, setValue: setAliveOrDeath },
        { question: 'Cause of Death:',questionType: questionType, questionId: 'f-14', inputtype: 'text', options:[],value: causeOfDeath, setValue: setCauseOfDeath },
        { question: 'Date of Death:', questionType: questionType,questionId: 'f-15', inputtype: 'date', options:[],value: dateOfDeath, setValue: setDateOfDeath },
        { question: 'Place of Death:',questionType: questionType, questionId: 'f-16', inputtype: 'dropdown', options:["Hospital", "Home","Other"],value: placeOfDeath, setValue: setPlaceOfDeath }
      ];

    

      useEffect( () => {

        const fetchalldata = async () => 
        {
            let updateArray: { questionId: string; updates: any; }[] = []

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
                const questionsArray = [questions1, questions2, questions3, questions4, questions5]
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




            {tabValue==="section1"?<CustomForm questions={questions1} handleSubmit={handleSubmit1} buttontitle="Submit & Next" formtitle={formTitle} loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} updates={updates}/>:<></>}
            {tabValue==="section2"?<CustomForm questions={questions2} handleSubmit={handleSubmit2} buttontitle="Submit & Next" formtitle={formTitle} loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} updates={updates}/>:<></>}
            {tabValue==="section3"?<CustomForm questions={questions3} handleSubmit={handleSubmit3} buttontitle="Submit & Next" formtitle={formTitle} loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} updates={updates}/>:<></>}
            {tabValue==="section4"?<CustomForm questions={questions4} handleSubmit={handleSubmit4} buttontitle="Submit & Next" formtitle={formTitle} loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} updates={updates}/>:<></>}
            {tabValue==="section5"?<CustomForm questions={questions5} handleSubmit={handleSubmit5} buttontitle="Submit & Next" formtitle={formTitle} loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} updates={updates}/>:<></>}
            
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
                    <TabsTrigger value="section4">4</TabsTrigger>
                    <TabsTrigger value="section5">5</TabsTrigger>
                  
                    
                
                    
                </TabsList>
            </Tabs>
            <HeadDrop
          dataArray={[
            { id: "section1", title: "Follow-Up Assessment Information" },
            { id: "section2", title: "Clinical Examination" },
            { id: "section3", title: "Imaging" },
            { id: "section4", title: "Biopsy" },
            { id: "section5", title: "Final Status" },
            
            
            
            
            
            
          ]}
          id={tabValue}
          setId={setTabValue}
         
        />
        </div>
    );
};

export default Followupreport
