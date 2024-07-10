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



const Restaging = () =>{
    const { toast } = useToast()
    const router = useRouter();

    const [user, setUser] = useState<any>({});
    const userid = "mayankjonwal"
    const [patient_trial_number, setPatient_trial_number] = React.useState("2024-BTI-1");

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
        setUser(storedUser);
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



 


    const questions1 = [
        { question: 'Method of restaging:', questionType: questionType, questionId: 'r-1', inputtype: 'text', options: [], value: methodOfRestaging, setValue: setMethodOfRestaging , heading:"Restaging"},
        { question: 'Clinical Examination (CE) only/ or CT Scan/ or MRI/ or PET CT:', questionType: questionType, questionId: 'r-2', inputtype: 'text', options: [], value: clinicalExamination, setValue: setClinicalExamination },
        { question: 'Response on clinical assessment (*Progressive disease/ Stable disease/ Complete Response/ Partial Response):', questionType: questionType, questionId: 'r-3', inputtype: 'text', options: [], value: responseCategory, setValue: setResponseCategory }
    ]

    const questions2 = [
    { question: 'Staging Local Imaging:', questionType: questionType, questionId: 'r-37', inputtype: 'text', options: [], value: stagingLocalImaging, setValue: setStagingLocalImaging,heading:"Restaging Local Imaging" },
    { question: 'Subsite (Upper BA Complex or Lower BA Complex or Tongue):', questionType: questionType, questionId: 'r-38', inputtype: 'text', options: [], value: subsite, setValue: setSubsite },
    { question: 'USG/CT/MRI/PET:', questionType: questionType, questionId: 'r-39', inputtype: 'text', options: ['USG', 'CT', 'MRI', 'PET'], value: imagingType, setValue: setImagingType },
    { question: 'Site (Epicenter of tumor):', questionType: questionType, questionId: 'r-40', inputtype: 'text', options: [], value: site, setValue: setSite },
    { question: 'ITF High/Low/Free:', questionType: questionType, questionId: 'r-41', inputtype: 'text', options: ['High', 'Low', 'Free'], value: itf, setValue: setItf },
    { question: 'Supra-notch/Infra-notch:', questionType: questionType, questionId: 'r-42', inputtype: 'text', options: ['Supra-notch', 'Infra-notch'], value: notch, setValue: setNotch },
    { question: 'Size (mm):', questionType: questionType, questionId: 'r-43', inputtype: 'text', options: [], value: size, setValue: setSize },
    { question: 'DOI (mm):', questionType: questionType, questionId: 'r-44', inputtype: 'text', options: [], value: doi, setValue: setDoi },
    { question: 'Across Midline:', questionType: questionType, questionId: 'r-45', inputtype: 'text', options: ['Yes', 'No'], value: acrossMidline, setValue: setAcrossMidline },
    { question: 'Bone Invasion:', questionType: questionType, questionId: 'r-46', inputtype: 'text', options: ['Yes', 'No'], value: boneInvasion, setValue: setBoneInvasion },
    { question: 'Maxilla/Mandible:', questionType: questionType, questionId: 'r-47', inputtype: 'text', options: ['Maxilla', 'Mandible'], value: maxillaMandible, setValue: setMaxillaMandible },
    { question: 'PNI:', questionType: questionType, questionId: 'r-48', inputtype: 'text', options: ['Yes', 'No'], value: pni, setValue: setPni },
    { question: 'Neck:', questionType: questionType, questionId: 'r-49', inputtype: 'text', options: [], value: neck, setValue: setNeck },
    { question: 'Number of Suspicious Nodes:', questionType: questionType, questionId: 'r-50', inputtype: 'text', options: [], value: numberOfSuspiciousNodes, setValue: setNumberOfSuspiciousNodes },
    { question: 'Level 1/2a/2b/3/4/5:', questionType: questionType, questionId: 'r-51', inputtype: 'text', options: [], value: levels, setValue: setLevels },
    { question: 'SAD of Largest Suspicious Nodes (mm):', questionType: questionType, questionId: 'r-52', inputtype: 'text', options: [], value: sadLargestSuspiciousNode, setValue: setSadLargestSuspiciousNode },
    { question: 'USG Correlation:', questionType: questionType, questionId: 'r-53', inputtype: 'text', options: [], value: usgCorrelation, setValue: setUsgCorrelation },
    { question: 'FNAC:', questionType: questionType, questionId: 'r-54', inputtype: 'text', options: [], value: fnac, setValue: setFnac },
    { question: 'Radiological ENE:', questionType: questionType, questionId: 'r-55', inputtype: 'text', options: ['Yes', 'No'], value: radiologicalEne, setValue: setRadiologicalEne },
    { question: 'What Suggests ENE:', questionType: questionType, questionId: 'r-56', inputtype: 'text', options: [], value: eneSuggestions, setValue: setEneSuggestions },
    { question: 'Response category (CR/PR/SD/PD):', questionType: questionType, questionId: 'r-57', inputtype: 'text', options: [], value: responseCategory1, setValue: setResponseCategory1 }
  
];


 


    const handleSubmit1 = () => {
        if (
            questions1.some((question) => question.value === '')


            


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
           


      questions2.some((question) => question.value === "")


            



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
        <div className=' '>




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
        <div className=''>

            <Tabs value={tabValue} onValueChange={setTabValue} className="">
                <TabsList className='bg-green-1'>
                    <TabsTrigger className='active:bg-green-5' value="Restaging">1</TabsTrigger>
                    <TabsTrigger value="RestagingLocalImaging">2</TabsTrigger>
                
                    
                </TabsList>
            </Tabs>
        </div>
    );
};

export default Restaging
