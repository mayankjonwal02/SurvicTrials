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
import { sub } from 'date-fns';
import HeadDrop from '@/components/HeadDrop';



const Restaging = () =>{
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
    const questionType = "Restaging";
    const [loading, setLoading] = React.useState(false);
    const [tabValue, setTabValue] = useState("Restaging");

    // Restaging
    const [methodOfRestaging, setMethodOfRestaging] = useState('');
    const [clinicalExamination, setClinicalExamination] = useState('');
    const [responseCategory, setResponseCategory] = useState('');



    // Restaging Local Imaging

    const [stagingLocalImaging, setStagingLocalImaging] = useState('');
    const [subsite, setSubsite] = useState('');
    const [imagingType, setImagingType] = useState('');
    const [site, setSite] = useState('');
    const [itf, setItf] = useState('');
    const [notch, setNotch] = useState('');
    const [size, setSize] = useState('');
    const [doi, setDoi] = useState('');
    const [acrossMidline, setAcrossMidline] = useState('');
    const [boneInvasion, setBoneInvasion] = useState('');
    const [maxillaMandible, setMaxillaMandible] = useState('');
    const [pni, setPni] = useState('');
    const [neck, setNeck] = useState('');
    const [numberOfSuspiciousNodes, setNumberOfSuspiciousNodes] = useState('');
    const [levels, setLevels] = useState('');
    const [sadLargestSuspiciousNode, setSadLargestSuspiciousNode] = useState('');
    const [usgCorrelation, setUsgCorrelation] = useState('');
    const [fnac, setFnac] = useState('');
    const [radiologicalEne, setRadiologicalEne] = useState('');
    const [eneSuggestions, setEneSuggestions] = useState('');
    const [responseCategory1, setResponseCategory1] = useState('');



    const alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']



    const questions1 = [
        { question: 'Method of restaging:', questionType: questionType, questionId: 'r-1', inputtype: 'text', options: [], value: methodOfRestaging, setValue: setMethodOfRestaging , heading:"Restaging", subheading:"Applicable only for ICT arm" },
        { question: 'Clinical Examination (CE) only/ or CT Scan/ or MRI/ or PET CT:', questionType: questionType, questionId: 'r-2', inputtype: 'dropdown', options: ["CE only", "CT Scan", "MRI", "PET CT"], value: clinicalExamination, setValue: setClinicalExamination },
        { question: 'Response on clinical assessment (*Progressive disease/ Stable disease/ Complete Response/ Partial Response):', questionType: questionType, questionId: 'r-3', inputtype: 'text', options: [], value: responseCategory, setValue: setResponseCategory }
    ]



    const [height, setHeight] = useState('');
    const [width, setWidth] = useState('');
    const [length, setLength] = useState('');

    useEffect(() => {

        if(height && width && length){
            setSize(height + "x" + width + "x" + length);
        }

    }, [height, width, length]);



    const questions2 = [
    { question: 'Staging Local Imaging:', questionType: questionType, questionId: 'r-37', inputtype: 'dropdown', options: ["Yes", "No"], value: stagingLocalImaging, setValue: setStagingLocalImaging,heading:"Restaging Local Imaging" , info:[
        "1. Complete response (CR): Disappearance of all target and non-target lesions. SAD of previously pathological lymph nodes should be <10 mm",
        "2. Partial response (PR): ≥30% decrease in the SLD of target lesions.",
        "3. Stable disease (SD): neither unequivocal progression or regression.",
        "4. Progressive disease (PD): ≥20% increase in the SLD of target lesions compared to smallest SLD in the study (nadir) AND ≥5 mm SLD increase OR progression of non-target lesions OR new lesions."
    ]},
    { question: 'Subsite (Upper BA Complex or Lower BA Complex or Tongue):', questionType: questionType, questionId: 'r-38', inputtype: 'dropdown', options: ["Upper BA Complex", "Lower BA Complex", "Tongue"], value: subsite, setValue: setSubsite },
    { question: 'USG/CT/MRI/PET:', questionType: questionType, questionId: 'r-39', inputtype: 'dropdown', options: ['USG', 'CT', 'MRI', 'PET'], value: imagingType, setValue: setImagingType },
    { question: 'Site (Epicenter of tumor):', questionType: questionType, questionId: 'r-40', inputtype: 'dropdown', options: [
        "Buccal Mucosa",
        "Upper GBS",
        "Lower GBS",
        "Upper Alveolus",
        "Lower Alveolus",
        "Central Alveolus",
        "RMT",
        "FOM",
        "Oral Tongue"
    ], value: site, setValue: setSite },
    { question: 'ITF High/Low/Free:', questionType: questionType, questionId: 'r-41', inputtype: 'dropdown', options: ['High', 'Low', 'Free'], value: itf, setValue: setItf },
    { question: 'Supra-notch/Infra-notch:', questionType: questionType, questionId: 'r-42', inputtype: 'dropdown', options: ['Supra-notch', 'Infra-notch'], value: notch, setValue: setNotch },
    { question: 'Size (mm):', questionType: questionType, questionId: 'r-43', inputtype: 'multitext', options: [], value: size, setValue: setSize, subParts:[{s_question:"Height (mm):", s_answer:height, s_setanswer:setHeight},{s_question:"Width (mm):", s_answer:width, s_setanswer:setWidth},{s_question:"Length (mm):", s_answer:length, s_setanswer:setLength}] , restriction:alpha.some(i => (i!=="x" && size.includes(i))) , restrictiontext:" alphabets not allowed" },
    { question: 'DOI (mm):', questionType: questionType, questionId: 'r-44', inputtype: 'text', options: [], value: doi, setValue: setDoi, restriction:alpha.some(i => doi.includes(i)) , restrictiontext:" alphabets not allowed" },
    { question: 'Across Midline:', questionType: questionType, questionId: 'r-45', inputtype: 'dropdown', options: ['Yes', 'No'], value: acrossMidline, setValue: setAcrossMidline },
    { question: 'Bone Invasion:', questionType: questionType, questionId: 'r-46', inputtype: 'dropdown', options: ['Yes', 'No'], value: boneInvasion, setValue: setBoneInvasion },
    { question: 'Maxilla/Mandible:', questionType: questionType, questionId: 'r-47', inputtype: 'dropdown', options: ['Maxilla', 'Mandible'], value: maxillaMandible, setValue: setMaxillaMandible },
    { question: 'PNI:', questionType: questionType, questionId: 'r-48', inputtype: 'dropdown', options: ['Yes', 'No'], value: pni, setValue: setPni },
    { question: 'Neck:', questionType: questionType, questionId: 'r-49', inputtype: 'dropdown', options: ["Single","Muliple"], value: neck, setValue: setNeck },
    { question: 'Number of Suspicious Nodes:', questionType: questionType, questionId: 'r-50', inputtype: 'text', options: [], value: numberOfSuspiciousNodes, setValue: setNumberOfSuspiciousNodes , restriction:alpha.some(i => numberOfSuspiciousNodes.includes(i)) , restrictiontext:" alphabets not allowed"},
    { question: 'Level 1/2a/2b/3/4/5:', questionType: questionType, questionId: 'r-51', inputtype: 'dropdown', options: ["Level 1", "Level 2a", "Level 2b", "Level 3", "Level 4", "Level 5"], value: levels, setValue: setLevels },
    { question: 'SAD of Largest Suspicious Nodes (mm):', questionType: questionType, questionId: 'r-52', inputtype: 'text', options: [], value: sadLargestSuspiciousNode, setValue: setSadLargestSuspiciousNode , restriction:alpha.some(i => sadLargestSuspiciousNode.includes(i)) , restrictiontext:" alphabets not allowed"},
    { question: 'USG Correlation:', questionType: questionType, questionId: 'r-53', inputtype: 'text', options: [], value: usgCorrelation, setValue: setUsgCorrelation },
    { question: 'FNAC Required:', questionType: questionType, questionId: 'r-54', inputtype: 'dropdown', options: ["Yes", "No"], value: fnac, setValue: setFnac },
    { question: 'Radiological ENE:', questionType: questionType, questionId: 'r-55', inputtype: 'dropdown', options: ['Yes', 'No'], value: radiologicalEne, setValue: setRadiologicalEne },
    { question: 'What Suggests ENE:', questionType: questionType, questionId: 'r-56', inputtype: 'dropdown', options: ["Skin","Muscle","Vessel"], value: eneSuggestions, setValue: setEneSuggestions },
    { question: 'Response category (CR/PR/SD/PD):', questionType: questionType, questionId: 'r-57', inputtype: 'dropdown', options: ["CR", "PR", "SD", "PD"], value: responseCategory1, setValue: setResponseCategory1 }
  
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
            const questionsArray = [questions1, questions2]
            questionsArray.forEach((question_list) => {
                question_list.map((question : any) => {
                    const requiredquestionid = question.questionId;
                    const questionvalue = questiondata.find((this_question: { questionId: string; }) => this_question.questionId === requiredquestionid)?.answer;
                    
                    questionvalue !== undefined && question.setValue(questionvalue)
                    if(question.inputtype === "multitext")
                        {
                            const subparts = question.subParts
                            const questionsubparts = questiondata.find((this_question: { questionId: string; }) => this_question.questionId === requiredquestionid)?.subParts
                            if(questionsubparts !== undefined && subparts !== undefined)
                            {
                                subparts.map((subpart : any, index :number) => {
                                    subpart.s_setanswer(questionsubparts[index].s_answer)
                                })
                            }
                        }
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

 

  const alphaspecial = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',"!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "-", "{", "}", "[", "]", ":", ";", "'", '"', "<", ">", ",", ".", "?", "/", "|", "\\", "~", "`"];

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
                            setTabValue("RestagingLocalImaging")
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

    alpha.some(i => doi.includes(i)) || alpha.some(i => (i!=="x" && size.includes(i))) ||  alpha.some(i => numberOfSuspiciousNodes.includes(i)) ||  alpha.some(i => sadLargestSuspiciousNode.includes(i)) 


            



        ) {
            if (alpha.some(i => doi.includes(i))) {
                toast({
                    title: "Error",
                    description: "Please provide a valid answer for DOI",
                    variant: "destructive",
                });
            } else if (alpha.some(i => (i!=="x" && size.includes(i)))) {
                toast({
                    title: "Error",
                    description: "Please provide a valid answer for Size",
                    variant: "destructive",
                });
            } 
            else if (alpha.some(i => numberOfSuspiciousNodes.includes(i))) {
                toast({
                    title: "Error",
                    description: "Please provide a valid answer for Number of Suspicious Nodes",
                    variant: "destructive",
                });
            } 
            else if (alpha.some(i => sadLargestSuspiciousNode.includes(i))) {
                toast({
                    title: "Error",
                    description: "Please provide a valid answer for Sad Largest Suspicious Node",
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
                            router.push("/form/surgicaltreatment")
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




            {tabValue==="Restaging"?<CustomForm questions={questions1} handleSubmit={handleSubmit1} buttontitle="Submit & Next" formtitle={questionType} loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} />:<></>}
            {tabValue==="RestagingLocalImaging"?<CustomForm questions={questions2} handleSubmit={handleSubmit2} buttontitle="Submit & Next" formtitle={questionType} loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} />:<></>}
           
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
                    <TabsTrigger className='active:bg-green-5' value="Restaging">1</TabsTrigger>
                    <TabsTrigger value="RestagingLocalImaging">2</TabsTrigger>
                
                    
                </TabsList>
            </Tabs>
            <HeadDrop
          dataArray={[
            { id: "Restaging", title: "Restaging" },
            { id: "RestagingLocalImaging", title: "Restaging Local Imaging" },
            
            
            
          ]}
          id={tabValue}
          setId={setTabValue}
         
        />
        
        </div>
    );
};

export default Restaging
