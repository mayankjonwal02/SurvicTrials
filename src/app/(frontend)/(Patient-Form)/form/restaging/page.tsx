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

const Restaging = () => {
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

    // Existing state variables
    const [methodOfRestaging, setMethodOfRestaging] = useState('');
    const [clinicalExamination, setClinicalExamination] = useState('');
    const [responseCategory, setResponseCategory] = useState('');

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

    // New state variables for lesions
    
    const [overallResponseCategory, setOverallResponseCategory] = useState('');

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

    const createLesionQuestions = (lesion: any, setLesion: React.Dispatch<React.SetStateAction<any>>, lesionNumber: string) => [
        { question: 'Location:', questionType: questionType, questionId: `${lesionNumber}-location`, inputtype: 'text', options: [], value: lesion.location, setValue: (value: string) => setLesion({...lesion, location: value}) },
        { question: 'Preop chemo size:', questionType: questionType, questionId: `${lesionNumber}-preopSize`, inputtype: 'text', options: [], value: lesion.preopSize, setValue: (value: string) => setLesion({...lesion, preopSize: value}) },
        { question: 'Post chemo size:', questionType: questionType, questionId: `${lesionNumber}-postChemoSize`, inputtype: 'text', options: [], value: lesion.postChemoSize, setValue: (value: string) => setLesion({...lesion, postChemoSize: value}) },
        { question: 'Response Category:', questionType: questionType, questionId: `${lesionNumber}-responseCategory`, inputtype: 'dropdown', options: ["CR", "PR", "SD", "PD"], value: lesion.responseCategory, setValue: (value: string) => setLesion({...lesion, responseCategory: value}) },
    ];
    const [lesion1Location, setLesion1Location] = useState('');
    const [lesion1PreopSize, setLesion1PreopSize] = useState('');
    const [lesion1PostChemoSize, setLesion1PostChemoSize] = useState('');
    const [lesion1ResponseCategory, setLesion1ResponseCategory] = useState('');

    // Lesion 1 Questions
    const lesion1Questions = [
        {
            question: 'Location:',
            questionType: 'text',
            questionId: 'lesion1-location',
            inputtype: 'text',
            options: [],
            value: lesion1Location,
            setValue: (value: string) => setLesion1Location(value),
        },
        {
            question: 'Preop chemo size:',
            questionType: 'text',
            questionId: 'lesion1-preopSize',
            inputtype: 'text',
            options: [],
            value: lesion1PreopSize,
            setValue: (value: string) => setLesion1PreopSize(value),
        },
        {
            question: 'Post chemo size:',
            questionType: 'text',
            questionId: 'lesion1-postChemoSize',
            inputtype: 'text',
            options: [],
            value: lesion1PostChemoSize,
            setValue: (value: string) => setLesion1PostChemoSize(value),
        },
        {
            question: 'Response Category:',
            questionType: 'dropdown',
            questionId: 'lesion1-responseCategory',
            inputtype: 'dropdown',
            options: ['CR', 'PR', 'SD', 'PD'],
            value: lesion1ResponseCategory,
            setValue: (value: string) => setLesion1ResponseCategory(value),
        },
    ];

    // Repeat similarly for lesion 2
    const [lesion2Location, setLesion2Location] = useState('');
    const [lesion2PreopSize, setLesion2PreopSize] = useState('');
    const [lesion2PostChemoSize, setLesion2PostChemoSize] = useState('');
    const [lesion2ResponseCategory, setLesion2ResponseCategory] = useState('');

    const lesion2Questions = [
        {
            question: 'Location:',
            questionType: 'text',
            questionId: 'lesion2-location',
            inputtype: 'text',
            options: [],
            value: lesion2Location,
            setValue: (value: string) => setLesion2Location(value),
        },
        {
            question: 'Preop chemo size:',
            questionType: 'text',
            questionId: 'lesion2-preopSize',
            inputtype: 'text',
            options: [],
            value: lesion2PreopSize,
            setValue: (value: string) => setLesion2PreopSize(value),
        },
        {
            question: 'Post chemo size:',
            questionType: 'text',
            questionId: 'lesion2-postChemoSize',
            inputtype: 'text',
            options: [],
            value: lesion2PostChemoSize,
            setValue: (value: string) => setLesion2PostChemoSize(value),
        },
        {
            question: 'Response Category:',
            questionType: 'dropdown',
            questionId: 'lesion2-responseCategory',
            inputtype: 'dropdown',
            options: ['CR', 'PR', 'SD', 'PD'],
            value: lesion2ResponseCategory,
            setValue: (value: string) => setLesion2ResponseCategory(value),
        },
    ];

    // Repeat similarly for lesion 3
    const [lesion3Location, setLesion3Location] = useState('');
    const [lesion3PreopSize, setLesion3PreopSize] = useState('');
    const [lesion3PostChemoSize, setLesion3PostChemoSize] = useState('');
    const [lesion3ResponseCategory, setLesion3ResponseCategory] = useState('');

    const lesion3Questions = [
        {
            question: 'Location:',
            questionType: 'text',
            questionId: 'lesion3-location',
            inputtype: 'text',
            options: [],
            value: lesion3Location,
            setValue: (value: string) => setLesion3Location(value),
        },
        {
            question: 'Preop chemo size:',
            questionType: 'text',
            questionId: 'lesion3-preopSize',
            inputtype: 'text',
            options: [],
            value: lesion3PreopSize,
            setValue: (value: string) => setLesion3PreopSize(value),
        },
        {
            question: 'Post chemo size:',
            questionType: 'text',
            questionId: 'lesion3-postChemoSize',
            inputtype: 'text',
            options: [],
            value: lesion3PostChemoSize,
            setValue: (value: string) => setLesion3PostChemoSize(value),
        },
        {
            question: 'Response Category:',
            questionType: 'dropdown',
            questionId: 'lesion3-responseCategory',
            inputtype: 'dropdown',
            options: ['CR', 'PR', 'SD', 'PD'],
            value: lesion3ResponseCategory,
            setValue: (value: string) => setLesion3ResponseCategory(value),
        },
    ];

    // Repeat similarly for lesion 4 and lesion 5
    const [lesion4Location, setLesion4Location] = useState('');
    const [lesion4PreopSize, setLesion4PreopSize] = useState('');
    const [lesion4PostChemoSize, setLesion4PostChemoSize] = useState('');
    const [lesion4ResponseCategory, setLesion4ResponseCategory] = useState('');

    const lesion4Questions = [
        {
            question: 'Location:',
            questionType: 'text',
            questionId: 'lesion4-location',
            inputtype: 'text',
            options: [],
            value: lesion4Location,
            setValue: (value: string) => setLesion4Location(value),
        },
        {
            question: 'Preop chemo size:',
            questionType: 'text',
            questionId: 'lesion4-preopSize',
            inputtype: 'text',
            options: [],
            value: lesion4PreopSize,
            setValue: (value: string) => setLesion4PreopSize(value),
        },
        {
            question: 'Post chemo size:',
            questionType: 'text',
            questionId: 'lesion4-postChemoSize',
            inputtype: 'text',
            options: [],
            value: lesion4PostChemoSize,
            setValue: (value: string) => setLesion4PostChemoSize(value),
        },
        {
            question: 'Response Category:',
            questionType: 'dropdown',
            questionId: 'lesion4-responseCategory',
            inputtype: 'dropdown',
            options: ['CR', 'PR', 'SD', 'PD'],
            value: lesion4ResponseCategory,
            setValue: (value: string) => setLesion4ResponseCategory(value),
        },
    ];

    const [lesion5Location, setLesion5Location] = useState('');
    const [lesion5PreopSize, setLesion5PreopSize] = useState('');
    const [lesion5PostChemoSize, setLesion5PostChemoSize] = useState('');
    const [lesion5ResponseCategory, setLesion5ResponseCategory] = useState('');

    const lesion5Questions = [
        {
            question: 'Location:',
            questionType: 'text',
            questionId: 'lesion5-location',
            inputtype: 'text',
            options: [],
            value: lesion5Location,
            setValue: (value: string) => setLesion5Location(value),
        },
        {
            question: 'Preop chemo size:',
            questionType: 'text',
            questionId: 'lesion5-preopSize',
            inputtype: 'text',
            options: [],
            value: lesion5PreopSize,
            setValue: (value: string) => setLesion5PreopSize(value),
        },
        {
            question: 'Post chemo size:',
            questionType: 'text',
            questionId: 'lesion5-postChemoSize',
            inputtype: 'text',
            options: [],
            value: lesion5PostChemoSize,
            setValue: (value: string) => setLesion5PostChemoSize(value),
        },
        {
            question: 'Response Category:',
            questionType: 'dropdown',
            questionId: 'lesion5-responseCategory',
            inputtype: 'dropdown',
            options: ['CR', 'PR', 'SD', 'PD'],
            value: lesion5ResponseCategory,
            setValue: (value: string) => setLesion5ResponseCategory(value),
        },
    ];


    const [newLesionLocation, setNewLesionLocation] = useState('');
    const [newLesionPreopSize, setNewLesionPreopSize] = useState('');
    const [newLesionPostChemoSize, setNewLesionPostChemoSize] = useState('');
    const [newLesionResponseCategory, setNewLesionResponseCategory] = useState('');

    // New Lesion Questions
    const newLesionQuestions = [
        {
            question: 'Location:',
            questionType: 'text',
            questionId: 'newLesion-location',
            inputtype: 'text',
            options: [],
            value: newLesionLocation,
            setValue: (value: string) => setNewLesionLocation(value),
        },
        {
            question: 'Preop chemo size:',
            questionType: 'text',
            questionId: 'newLesion-preopSize',
            inputtype: 'text',
            options: [],
            value: newLesionPreopSize,
            setValue: (value: string) => setNewLesionPreopSize(value),
        },
        {
            question: 'Post chemo size:',
            questionType: 'text',
            questionId: 'newLesion-postChemoSize',
            inputtype: 'text',
            options: [],
            value: newLesionPostChemoSize,
            setValue: (value: string) => setNewLesionPostChemoSize(value),
        },
        {
            question: 'Response Category:',
            questionType: 'dropdown',
            questionId: 'newLesion-responseCategory',
            inputtype: 'dropdown',
            options: ['CR', 'PR', 'SD', 'PD'],
            value: newLesionResponseCategory,
            setValue: (value: string) => setNewLesionResponseCategory(value),
        },
    ];


    const overallResponseQuestions = [
        { question: 'Overall Response Category:', questionType: questionType, questionId: 'overall-response', inputtype: 'dropdown', options: ["CR", "PR", "SD", "PD"], value: overallResponseCategory, setValue: setOverallResponseCategory },
    ];

    useEffect(() => {
        const fetchalldata = async () => {
          setDataloading(true);
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
                  const questionsArray = [
                    questions1,
                    questions2,
                    lesion1Questions,
                    lesion2Questions,
                    lesion3Questions,
                    lesion4Questions,
                    lesion5Questions,
                    newLesionQuestions,
                    overallResponseQuestions
                  ];
                  questionsArray.forEach((question_list) => {
                    question_list.map((question: any) => {
                      const requiredquestionid = question.questionId;
                      const questionvalue = questiondata.find((this_question: { questionId: string; }) => this_question.questionId === requiredquestionid)?.answer;
                      questionvalue !== undefined && question.setValue(questionvalue);
                      if (question.inputtype === "multitext") {
                        const subparts = question.subParts;
                        const questionsubparts = questiondata.find((this_question: { questionId: string; }) => this_question.questionId === requiredquestionid)?.subParts;
                        if (questionsubparts !== undefined && subparts !== undefined) {
                          subparts.map((subpart: any, index: number) => {
                            subpart.s_setanswer(questionsubparts[index].s_answer);
                          });
                        }
                      }
                    });
                  });
                } else {
                  console.log("Data not found");
                }
              });
          } else {
            setPatient_trial_number("ID not found");
          }
        };
        fetchalldata();
      }, []);
    const handleSubmit1 = () => {
        if (false) {
            toast({
                title: "Error",
                description: "Please fill in all the fields",
                variant: "destructive",
            })
        } else {
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
                                description: "Restaging data submitted",
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
        }
    }

    const handleSubmit2 = () => {
        if (alpha.some(i => doi.includes(i)) || alpha.some(i => (i!=="x" && size.includes(i))) ||  alpha.some(i => numberOfSuspiciousNodes.includes(i)) ||  alpha.some(i => sadLargestSuspiciousNode.includes(i))) {
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
            } else if (alpha.some(i => numberOfSuspiciousNodes.includes(i))) {
                toast({
                    title: "Error",
                    description: "Please provide a valid answer for Number of Suspicious Nodes",
                    variant: "destructive",
                });
            } else if (alpha.some(i => sadLargestSuspiciousNode.includes(i))) {
                toast({
                    title: "Error",
                    description: "Please provide a valid answer for Sad Largest Suspicious Node",
                    variant: "destructive",
                });
            }
        } else {
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
                                description: "Restaging Local Imaging data submitted",
                                variant: "success",
                            })
                            setTabValue("Lesion1")
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
        }
    }

    const handleSubmitLesion = (lesionQuestions: any[], nextTab: string) => {
        try {
            setLoading(true)
            fetch('/api/updatepatient', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    patient_trial_number: patient_trial_number,
                    questions: lesionQuestions,
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
                            description: "Lesion data submitted",
                            variant: "success",
                        })
                        setTabValue(nextTab)
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
    }

    const handleSubmitOverall = () => {
        try {
            setLoading(true)
            fetch('/api/updatepatient', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    patient_trial_number: patient_trial_number,
                    questions: overallResponseQuestions,
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
                            description: "Overall Response Category submitted",
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
    }

    if (dataloading) {
        return <div className="flex items-center justify-center h-screen w-full text-3xl font-bold text-green-5 ">
                  <div className="w-[70px] h-[70px] border border-4 border-t-0 border-green-700 rounded-full animate-spin">
                  </div> 
                </div>;
    }

    return (
        <div className='w-full h-screen'>
            {tabValue === "Restaging" && <CustomForm questions={questions1} handleSubmit={handleSubmit1} buttontitle="Submit & Next" formtitle={questionType} loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} />}
            {tabValue === "RestagingLocalImaging" && <CustomForm questions={questions2} handleSubmit={handleSubmit2} buttontitle="Submit & Next" formtitle={questionType} loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} />}
            {tabValue === "Lesion1" && <CustomForm questions={lesion1Questions} handleSubmit={() => handleSubmitLesion(lesion1Questions, "Lesion2")} buttontitle="Next Lesion" formtitle="Lesion 1" loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} />}
            {tabValue === "Lesion2" && <CustomForm questions={lesion2Questions} handleSubmit={() => handleSubmitLesion(lesion2Questions, "Lesion3")} buttontitle="Next Lesion" formtitle="Lesion 2" loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} />}
            {tabValue === "Lesion3" && <CustomForm questions={lesion3Questions} handleSubmit={() => handleSubmitLesion(lesion3Questions, "Lesion4")} buttontitle="Next Lesion" formtitle="Lesion 3" loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} />}
            {tabValue === "Lesion4" && <CustomForm questions={lesion4Questions} handleSubmit={() => handleSubmitLesion(lesion4Questions, "Lesion5")} buttontitle="Next Lesion" formtitle="Lesion 4" loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} />}
            {tabValue === "Lesion5" && <CustomForm questions={lesion5Questions} handleSubmit={() => handleSubmitLesion(lesion5Questions, "NewLesion")} buttontitle="Next" formtitle="Lesion 5" loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} />}
            {tabValue === "NewLesion" && <CustomForm questions={newLesionQuestions} handleSubmit={() => handleSubmitLesion(newLesionQuestions, "OverallResponseCategory")} buttontitle="Next" formtitle="New Lesion" loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} />}
            {tabValue === "OverallResponseCategory" && <CustomForm questions={overallResponseQuestions} handleSubmit={handleSubmitOverall} buttontitle="Submit All" formtitle="Overall Response Category" loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} />}
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
                    <TabsTrigger value="Lesion1">L1</TabsTrigger>
                    <TabsTrigger value="Lesion2">L2</TabsTrigger>
                    <TabsTrigger value="Lesion3">L3</TabsTrigger>
                    <TabsTrigger value="Lesion4">L4</TabsTrigger>
                    <TabsTrigger value="Lesion5">L5</TabsTrigger>
                    <TabsTrigger value="NewLesion">NL</TabsTrigger>
                    <TabsTrigger value="OverallResponseCategory">ORC</TabsTrigger>
                </TabsList>
            </Tabs>
            <HeadDrop
                dataArray={[
                    { id: "Restaging", title: "Restaging" },
                    { id: "RestagingLocalImaging", title: "Restaging Local Imaging" },
                    { id: "Lesion1", title: "Lesion 1" },
                    { id: "Lesion2", title: "Lesion 2" },
                    { id: "Lesion3", title: "Lesion 3" },
                    { id: "Lesion4", title: "Lesion 4" },
                    { id: "Lesion5", title: "Lesion 5" },
                    { id: "NewLesion", title: "New Lesion" },
                    { id: "OverallResponseCategory", title: "Overall Response Category" },
                ]}
                id={tabValue}
                setId={setTabValue}
            />
        </div>
    );
};

export default Restaging;