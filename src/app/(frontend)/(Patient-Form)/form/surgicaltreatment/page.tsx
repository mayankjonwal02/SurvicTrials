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
import { set } from 'mongoose';
import HeadDrop from '@/components/HeadDrop';

const Surgicaltreatment = () =>{
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
    const questionType = "surgicaltreatment";
    const formTitle = "Surgical Treatment";
    const [tabValue, setTabValue] = useState("section1");
    const [loading, setLoading] = React.useState(false);

    // Section 1
    const [dateOfSurgery, setDateOfSurgery] = useState('');
    const [resectionOfPrimary, setResectionOfPrimary] = useState('');
    const [widewith, setWidewith] = useState('');
    const [widewithout, setWidewithout] = useState('');
    const [boneResection, setBoneResection] = useState('');
    const [centralarchresection , setCentralarchresection] = useState('');
    const [zygomaresection , setZygomaresection] = useState('');
    const [itfClearance, setItfClearance] = useState('');
    const [lymphadenectomy, setLymphadenectomy] = useState('');
    const [levels, setLevels] = useState('');
    const [sternocleidomastoidMuscle, setSternocleidomastoidMuscle] = useState('');
    const [SternocleidomastoidOther, setSternocleidomastoidOther] = useState('');
    const [internalJugularVein, setInternalJugularVein] = useState('');
    const [spinalAccessoryNerve, setSpinalAccessoryNerve] = useState('');
    const [reconstruction, setReconstruction] = useState('');
    const [tracheostomy, setTracheostomy] = useState('');
    const [tracheostomyReason, setTracheostomyReason] = useState('');
    const [tracheostomyRemovedOnDay, setTracheostomyRemovedOnDay] = useState('');
    
    // New state hooks for the additional questions
    const [lymphadenectomyYesNo, setLymphadenectomyYesNo] = useState('');
    const [laterality, setLaterality] = useState('');
    const [levelOfLNDs, setLevelOfLNDs] = useState('');
    const [sternocleidomastoidMuscleNew, setSternocleidomastoidMuscleNew] = useState('');
    const [internalJugularVeinNew, setInternalJugularVeinNew] = useState('');
    const [spinalAccessoryNerveNew, setSpinalAccessoryNerveNew] = useState('');


    // Section 2

    const [rylesTubeDuration, setRylesTubeDuration] = useState('');
    const [feedingJejunostomy, setFeedingJejunostomy] = useState('');
    const [reasonForFeedingJejunostomy, setReasonForFeedingJejunostomy] = useState('');


    // Section 3: Emotional Well-being
    
    const [s2_17, setS2_17] = useState('');
    const [s2_18, setS2_18] = useState('');
    const [s2_19, setS2_19] = useState('');
    const [s2_20, setS2_20] = useState('');
    const [s2_21, setS2_21] = useState('');
    const [s2_22, setS2_22] = useState('');
    const [s2_23, setS2_23] = useState('');
    const [s2_24, setS2_24] = useState('');
    const [s2_25, setS2_25] = useState('');
    const [s2_26, setS2_26] = useState('');
    const [s2_27, setS2_27] = useState('');
    const [s2_28, setS2_28] = useState('');
    const [s2_29, setS2_29] = useState('');
    const [s2_30, setS2_30] = useState('');
    const [s2_31, setS2_31] = useState('');
    const [s2_32, setS2_32] = useState('');
    const [s2_33, setS2_33] = useState('');
    const [s2_34, setS2_34] = useState('');
    const [s2_35, setS2_35] = useState('');
    const [s2_36, setS2_36] = useState('');


    const alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    const alphaspecial = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',"!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "-", "{", "}", "[", "]", ":", ";", "'", '"', "<", ">", ",", ".", "?", "/", "|", "\\", "~", "`"];
  
    

 useEffect(() => {
    setTracheostomyReason(tracheostomy==="No" ? "Not Applicable":"");
    setTracheostomyRemovedOnDay(tracheostomy==="No" ? "Not Applicable":"")
}, [tracheostomy]);


const questions1 = [
    { question: 'Date of Surgery:', questionId: 's2-1', questionType: questionType, inputtype: 'date', options: [], value: dateOfSurgery, setValue: setDateOfSurgery ,heading:"Resection and Reconstruction"},
    { question: 'Resection of Primary:', questionId: 's2-2', questionType: questionType, inputtype: 'dropdown', options: [ "Wide excision of soft tissue Only", "WLE with Bony resection"], value: resectionOfPrimary, setValue: setResectionOfPrimary },
    { question: 'Wide excision of soft tissue with:', questionId: 's2-2_0', questionType: questionType, inputtype: 'text', options: [], value: widewith, setValue: setWidewith },
    { question: 'Wide excision of soft tissue without:', questionId: 's2-2_0_0', questionType: questionType, inputtype: 'text', options: [], value: widewithout, setValue: setWidewithout },

    { question: 'Bone Resection:', questionId: 's2-3', questionType: questionType, inputtype: 'dropdown', options: [
        "No",
        "Marginal mandibulectomy only",
        "Marginal Mandibulectomy with Upper Alveolectomy/ Infrastructure Maxillectomy",
        "Segmental Mandibulectomy Only",
        "Segmental Mandibulectomy with Upper Alveolectomy/ Infrastructure Maxillectomy"
    ], value: boneResection, setValue: setBoneResection },
    { question: 'Central Arch Resection:', questionId: 's2-3_0_0', questionType: questionType, inputtype: 'dropdown', options: ["Yes","No"], value: centralarchresection, setValue: setCentralarchresection },
    { question: 'Zygoma Resection:', questionId: 's2-3_0_1', questionType: questionType, inputtype: 'dropdown', options: ["Yes","No"], value: zygomaresection, setValue: setZygomaresection },

    { question: 'ITF Clearance:', questionId: 's2-4', questionType: questionType, inputtype: 'dropdown', options: ['Not Applicable','Standard Infratemporal Fossa Clearance','High Infratemporal Fossa Clearance'], value: itfClearance, setValue: setItfClearance },
    
    // Existing Lymphadenectomy question
    { question: 'Lymphadenectomy:', questionId: 's2-5', questionType: questionType, inputtype: 'dropdown', options: ["Yes","No"], value: lymphadenectomy, setValue: setLymphadenectomy },
    
    // New Lymphadenectomy question with Yes/No
    // { question: 'Lymphadenectomy Yes/No:', questionId: 's2-5_0', questionType: questionType, inputtype: 'dropdown', options: ["Yes", "No"], value: lymphadenectomyYesNo, setValue: setLymphadenectomyYesNo },
    
    // New Laterality question
    { question: 'Laterality:', questionId: 's2-5_1', questionType: questionType, inputtype: 'dropdown', options: ["Ipsilateral only","Bilateral"], value: laterality, setValue: setLaterality },
    
    // New Level of LNDs question
    { question: 'Level of LNDs:', questionId: 's2-6_0', questionType: questionType, inputtype: 'dropdown', options: ["Level 1-3","Level 1-4","Level 1-5"], value: levelOfLNDs, setValue: setLevelOfLNDs },
    
    // New Sternocleidomastoid Muscle question
    { question: 'Sternocleidomastoid Muscle:', questionId: 's2-7_0', questionType: questionType, inputtype: 'dropdown', options: ["Preserved","Sacrificed"], value: sternocleidomastoidMuscleNew, setValue: setSternocleidomastoidMuscleNew },
    
    // New Internal Jugular Vein question
    { question: 'Internal Jugular Vein:', questionId: 's2-8_0', questionType: questionType, inputtype: 'dropdown', options: ["Preserved","Sacrificed"], value: internalJugularVeinNew, setValue: setInternalJugularVeinNew },
    
    // New Spinal Accessory Nerve question
    { question: 'Spinal Accessory Nerve:', questionId: 's2-9_0', questionType: questionType, inputtype: 'dropdown', options: ["Preserved","Sacrificed"], value: spinalAccessoryNerveNew, setValue: setSpinalAccessoryNerveNew },
    
    { question: 'Sternocleidomastoid Muscle:', questionId: 's2-7', questionType: questionType, inputtype: 'dropdown', options: ["Preserved","Sacrificed"], value: sternocleidomastoidMuscle, setValue: setSternocleidomastoidMuscle },
    
    { question: 'Internal Jugular Vein:', questionId: 's2-8', questionType: questionType, inputtype: 'dropdown', options: ["Preserved","Sacrificed"], value: internalJugularVein, setValue: setInternalJugularVein },
    { question: 'Spinal Accessory Nerve:', questionId: 's2-9', questionType: questionType, inputtype: 'dropdown', options: ["Preserved","Sacrificed"], value: spinalAccessoryNerve, setValue: setSpinalAccessoryNerve },
    { question: 'Reconstruction:', questionId: 's2-10', questionType: questionType, inputtype: 'dropdown', options: [
        'Primary closure',
        'PMMC Flap',
        'PMMC with DP flap',
        'Free ALT/Thigh Flap',
        'Free Fibula',
        'Free Forearm',
        'Free ALT with Fibula',
        'Free ALT with Forearm',
        'DP Flap',
        'Submental Flap',
        'Nasolabial Flap',
        'Supraclavicular Flap',
        'Infrahyoid Flap',
        'Buccal Fat pad',
        'Skin Graft or Skin Temp',
        'Obturator only',
        'Temporalis',
        'Other'
    ], value: reconstruction, setValue: setReconstruction },
    { question: 'If Other:', questionId: 's2-10_0_0', questionType: questionType, inputtype: 'text', options: ["Preserved","Sacrificed"], value: SternocleidomastoidOther, setValue: setSternocleidomastoidOther },
];
useEffect(() => {
    setReasonForFeedingJejunostomy(feedingJejunostomy==="No" ? "Not Applicable":"")
}, [feedingJejunostomy])
const questions2 =  [
    { question: 'Tracheostomy:', questionId: 's2-11', questionType: questionType, inputtype: 'dropdown', options: ['Yes','No'], value: tracheostomy, setValue: setTracheostomy , heading:"Feeding Management" },
    { question: 'Reason:', questionId: 's2-12', questionType: questionType, inputtype: tracheostomy === "No" ? 'disabled' : 'textarea', options: [], value: tracheostomyReason, setValue: setTracheostomyReason },
    { question: 'Removed on Day:', questionId: 's2-13', questionType: questionType, inputtype: tracheostomy === "No" ? 'disabled' : 'text', options: [], value: tracheostomyRemovedOnDay, setValue: setTracheostomyRemovedOnDay },
    { question: 'Ryle’s Tube, kept till which postoperative day:', questionId: 's2-14', questionType: questionType, inputtype: 'text', options: [], value: rylesTubeDuration, setValue: setRylesTubeDuration , },
        { question: 'Feeding Jejunostomy/Per Cutaneous Gastrostomy:', questionId: 's2-15', questionType: questionType, inputtype: 'dropdown', options: ["Yes","No"], value: feedingJejunostomy, setValue: setFeedingJejunostomy },
        { question: 'Reason for Feeding Jejunostomy/Per Cutaneous Gastrostomy:', questionId: 's2-16', questionType: questionType, inputtype: feedingJejunostomy==="No" ? 'disabled':'textarea', options: [], value: reasonForFeedingJejunostomy, setValue: setReasonForFeedingJejunostomy }
      ];

   const questions3 = [
    { question: 'Duration of Primary Resection (Minutes):', questionId: 's2-17', questionType: questionType, inputtype: 'text', options: [], value: s2_17, setValue: setS2_17, heading:"Surgical Duration", restriction: alpha.some(i => s2_17.includes(i)), restrictiontext: "Alphabets not allowed" },
    { question: 'Duration of Neck Dissection (Minutes):', questionId: 's2-18', questionType: questionType, inputtype: 'text', options: [], value: s2_18, setValue: setS2_18, restriction: alpha.some(i => s2_18.includes(i)), restrictiontext: "Alphabets not allowed" },
    { question: 'Duration of Reconstruction (Minutes):', questionId: 's2-19', questionType: questionType, inputtype: 'text', options: [], value: s2_19, setValue: setS2_19, restriction: alpha.some(i => s2_19.includes(i)), restrictiontext: "Alphabets not allowed" },
    { question: 'Total Surgical Duration (Minutes):', questionId: 's2-20', questionType: questionType, inputtype: 'text', options: [], value: s2_20, setValue: setS2_20, restriction: alpha.some(i => s2_20.includes(i)), restrictiontext: "Alphabets not allowed" },
    { question: 'Intraoperative Complications (if any):', questionId: 's2-21', questionType: questionType, inputtype: 'text', options: [], value: s2_21, setValue: setS2_21 },
    { question: 'Blood Loss (ml):', questionId: 's2-22', questionType: questionType, inputtype: 'text', options: [], value: s2_22, setValue: setS2_22, restriction: alpha.some(i => s2_22.includes(i)), restrictiontext: "Alphabets not allowed" },
    { question: 'Intraoperative Blood Transfusions:', questionId: 's2-23', questionType: questionType, inputtype: 'dropdown', options: ["Yes","No"], value: s2_23, setValue: setS2_23 },
    { question: 'Number of units transfused (Intraoperative):', questionId: 's2-24', questionType: questionType, inputtype: 'dropdown', options: ["0","1","2","3","4","5"], value: s2_24, setValue: setS2_24 },
    { question: 'Postoperative transfusions:', questionId: 's2-25', questionType: questionType, inputtype: 'dropdown', options: ["Yes","No"], value: s2_25, setValue: setS2_25 },
    { question: 'Number of units transfused (Postoperative):', questionId: 's2-26', questionType: questionType, inputtype: 'dropdown', options: ["0","1","2","3","4","5"], value: s2_26, setValue: setS2_26, restriction: alpha.some(i => s2_26.includes(i)), restrictiontext: "Alphabets not allowed" },
    { question: 'ICU Stay:', questionId: 's2-27', questionType: questionType, inputtype: 'dropdown', options: ["Yes","No"], value: s2_27, setValue: setS2_27 },
    { question: 'ICU Days:', questionId: 's2-28', questionType: questionType, inputtype: 'text', options: [], value: s2_28, setValue: setS2_28, restriction: alphaspecial.some(i => s2_28.includes(i)), restrictiontext: "Alphabets and special characters not allowed" },
    { question: 'Revision surgery (Y/N):', questionId: 's2-29', questionType: questionType, inputtype: 'dropdown', options: ['Yes', 'No'], value: s2_29, setValue: setS2_29 },
    { question: 'Procedure for Revision Surgery:', questionId: 's2-30', questionType: questionType, inputtype: 'textarea', options: [], value: s2_30, setValue: setS2_30 },
    { question: 'Duration of Hospitalization (Days):', questionId: 's2-31', questionType: questionType, inputtype: 'text', options: [], value: s2_31, setValue: setS2_31, restriction: alphaspecial.some(i => s2_31.includes(i)), restrictiontext: "Alphabets and special characters not allowed" },
    { question: 'Parenteral Antibiotics Use (Days):', questionId: 's2-32', questionType: questionType, inputtype: 'text', options: [], value: s2_32, setValue: setS2_32, restriction: alphaspecial.some(i => s2_32.includes(i)), restrictiontext: "Alphabets and special characters not allowed" },
    { question: 'Condition on Discharge:', questionId: 's2-33', questionType: questionType, inputtype: 'dropdown', options: ["Drain out/insitu","TT out/ insitu","FT out/ Insitu","Taking Away"], value: s2_33, setValue: setS2_33 },
    { question: 'Oral Antibiotics Use (Days):', questionId: 's2-34', questionType: questionType, inputtype: 'text', options: [], value: s2_34, setValue: setS2_34, restriction: alphaspecial.some(i => s2_34.includes(i)), restrictiontext: "Alphabets and special characters not allowed" },
    { question: 'Readmission:', questionId: 's2-35', questionType: questionType, inputtype: 'dropdown', options: ["Yes","No"], value: s2_35, setValue: setS2_35 },
    { question: 'Readmission Reason:', questionId: 's2-36', questionType: questionType, inputtype: 'textarea', options: ["Yes","No"], value: s2_36, setValue: setS2_36 }
];


    useEffect(() => {

        setS2_30(s2_29==="No" ? "Not Applicable":"")
        setS2_36(s2_35==="No" ? "Not Applicable":"")

    },[s2_29,s2_35])



 
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
                const questionsArray = [questions1, questions2, questions3]
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

            

            alpha.some(i => s2_17.includes(i)) ||
            alpha.some(i => s2_18.includes(i)) ||
            alpha.some(i => s2_19.includes(i)) ||
            alpha.some(i => s2_20.includes(i)) ||
            alpha.some(i => s2_22.includes(i)) ||
            alpha.some(i => s2_26.includes(i)) ||
            alphaspecial.some(i => s2_28.includes(i)) ||
            alphaspecial.some(i => s2_31.includes(i)) ||
            alphaspecial.some(i => s2_32.includes(i)) ||
            alphaspecial.some(i => s2_34.includes(i)) 
            


        ) {
            if (alpha.some(i => s2_17.includes(i))) {
                toast({
                    title: "Error",
                    description: "Please fill valid data in Duration of Primary Resection",
                    variant: "destructive",
                });
                
            }
            if (alpha.some(i => s2_18.includes(i))) {
                toast({
                    title: "Error",
                    description: "Please fill valid data in Duration of Neck Dissection",
                    variant: "destructive",
                });
                
            }
            if (alpha.some(i => s2_19.includes(i))) {
                toast({
                    title: "Error",
                    description: "Please fill valid data in Duration of Reconstruction",
                    variant: "destructive",
                });
                
            }
            if (alpha.some(i => s2_20.includes(i))) {
                toast({
                    title: "Error",
                    description: "Please fill valid data in Total Surgical Duration",
                    variant: "destructive",
                });
                
            }
            if (alpha.some(i => s2_22.includes(i))) {
                toast({
                    title: "Error",
                    description: "Please fill valid data in Blood Loss",
                    variant: "destructive",
                });
                
            }
            if (alpha.some(i => s2_26.includes(i))) {
                toast({
                    title: "Error",
                    description: "Please fill valid data in Number of units transfused (Postoperative)",
                    variant: "destructive",
                });
                
            }
            if (alphaspecial.some(i => s2_28.includes(i))) {
                toast({
                    title: "Error",
                    description: "Please fill valid data in ICU Days",
                    variant: "destructive",
                });
                
            }
            if (alphaspecial.some(i => s2_31.includes(i))) {
                toast({
                    title: "Error",
                    description: "Please fill valid data in Duration of Hospitalization",
                    variant: "destructive",
                });
                
            }
            if (alphaspecial.some(i => s2_32.includes(i))) {
                toast({
                    title: "Error",
                    description: "Please fill valid data in Parenteral Antibiotics Use",
                    variant: "destructive",
                });
                
            }
            if (alphaspecial.some(i => s2_34.includes(i))) {
                toast({
                    title: "Error",
                    description: "Please fill valid data in Oral Antibiotics Use",
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
                            router.push("/form/postoperativecomplications")
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




            {tabValue==="section1"?<CustomForm questions={questions1} handleSubmit={handleSubmit1} buttontitle="Submit & Next" formtitle={formTitle} loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} />:<></>}
            {tabValue==="section2"?<CustomForm questions={questions2} handleSubmit={handleSubmit2} buttontitle="Submit & Next" formtitle={formTitle} loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} />:<></>}
            {tabValue==="section3"?<CustomForm questions={questions3} handleSubmit={handleSubmit3} buttontitle="Submit & Next" formtitle={formTitle} loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} />:<></>}
            
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
            { id: "section1", title: "Resection and Reconstruction" },
            { id: "section2", title: "Feeding Management" },
            { id: 'section3', title: "Surgical Duration" },
            
            
          ]}
          id={tabValue}
          setId={setTabValue}
         
        />
        </div>
    );
};

export default Surgicaltreatment
