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
    const [updates, setUpdates] = useState<updateType[]>([]);
    const [dataloading, setSetDataLoading] = useState(false);
    // Section 1
    const alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    const alphaspecial = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',"!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "-", "{", "}", "[", "]", ":", ";", "'", '"', "<", ">", ",", ".", "?", "/", "|", "\\", "~", "`"];
  
const [startDateCycle1, setStartDateCycle1] = useState('');
const [regimenCycle1, setRegimenCycle1] = useState('');
const [otherRegimenCycle1, setOtherRegimenCycle1] = useState('');
const [cycleCycle1, setCycleCycle1] = useState('Cycle 1');
const [cycleStartDateCycle1, setCycleStartDateCycle1] = useState('');
const [ecogPSCycle1, setEcogPSCycle1] = useState('');
const [hbCycle1, setHbCycle1] = useState('');
const [ancCycle1, setAncCycle1] = useState('');
const [plateletCountCycle1, setPlateletCountCycle1] = useState('');
const [bilirubinCycle1, setBilirubinCycle1] = useState('');
const [sgotSgptCycle1, setSgotSgptCycle1] = useState('');
const [creatinineCycle1, setCreatinineCycle1] = useState('');
const [creatinineClearanceCycle1, setCreatinineClearanceCycle1] = useState('');
const [bloodSugarCycle1, setBloodSugarCycle1] = useState('');
const [otherDetailsCycle1, setOtherDetailsCycle1] = useState('');
const [primarySecondaryGcsfCycle1, setPrimarySecondaryGcsfCycle1] = useState('');
const [doseDelayCycle1, setDoseDelayCycle1] = useState('');
const [reasonForDelayCycle1, setReasonForDelayCycle1] = useState('');
const [daysDelayedCycle1, setDaysDelayedCycle1] = useState('');
const [doseModificationCycle1, setDoseModificationCycle1] = useState('');
const [reasonForDoseModificationCycle1, setReasonForDoseModificationCycle1] = useState('');

const questions1 = [
  { question: 'Date of Start of Chemotherapy:', questionType: questionType, questionId: 'c1-1_cycle1', inputtype: 'date', options: [], value: startDateCycle1, setValue: setStartDateCycle1 , info:[
   
    
    "1. Haematological: Haemoglobin &gt; 9gm/dl, ANC ≥ 1500/cmm3, Platelet ≥100000/cmm3",
    "2. Liver Function test: Bilirubin ≤2 x upper limit normal (ULN), AST/ALT/ ALP ≤ 2.5 x ULN",
    "3. Renal Function test: Creatinine ≤ 1.5 ULN, Creatinine Clearance ≥60 ml/min."
  ]},
  { question: 'Regimen:', questionType: questionType, questionId: 'c1-2_cycle1', inputtype: 'dropdown', options: ["DCF", "CF", "Other"], value: regimenCycle1, setValue: setRegimenCycle1 },
  { question: 'Regimen other:', questionType: questionType, questionId: 'c1-3_cycle1', inputtype: 'text', options: [], value: otherRegimenCycle1, setValue: setOtherRegimenCycle1 },
  { question: 'Cycle:', questionType: questionType, questionId: 'c1-4_cycle1', inputtype: 'disabled', options: ["Cycle 1", "Cycle 2", "Cycle 3"], value: cycleCycle1, setValue: setCycleCycle1 },
  { question: 'Date of Start of Cycle:', questionType: questionType, questionId: 'c1-5_cycle1', inputtype: 'date', options: [], value: cycleStartDateCycle1, setValue: setCycleStartDateCycle1 },
  { question: 'ECOG PS:', questionType: questionType, questionId: 'c1-6_cycle1', inputtype: 'text', options: [], value: ecogPSCycle1, setValue: setEcogPSCycle1 },
  { question: 'Hemoglobin (Hb):', questionType: questionType, questionId: 'c1-7_cycle1', inputtype: 'text', options: [], value: hbCycle1, setValue: setHbCycle1 , restriction:(alpha.some(el => hbCycle1.includes(el))) , restrictiontext: 'Hb cannot contain alphabets' },
  { question: 'Absolute Neutrophil Count (ANC):', questionType: questionType, questionId: 'c1-8_cycle1', inputtype: 'text', options: [], value: ancCycle1, setValue: setAncCycle1, restriction:(alpha.some(el => ancCycle1.includes(el))) , restrictiontext: 'ANC cannot contain alphabets' },
  { question: 'Platelet Count:', questionType: questionType, questionId: 'c1-9_cycle1', inputtype: 'text', options: [], value: plateletCountCycle1, setValue: setPlateletCountCycle1, restriction:(alpha.some(el => plateletCountCycle1.includes(el))) , restrictiontext: 'Platelet Count cannot contain alphabets' },
  { question: 'Bilirubin:', questionType: questionType, questionId: 'c1-10_cycle1', inputtype: 'text', options: [], value: bilirubinCycle1, setValue: setBilirubinCycle1 },
  { question: 'SGOT/SGPT:', questionType: questionType, questionId: 'c1-11_cycle1', inputtype: 'text', options: [], value: sgotSgptCycle1, setValue: setSgotSgptCycle1 },
  { question: 'Creatinine:', questionType: questionType, questionId: 'c1-12_cycle1', inputtype: 'text', options: [], value: creatinineCycle1, setValue: setCreatinineCycle1 },
  { question: 'Creatinine Clearance:', questionType: questionType, questionId: 'c1-13_cycle1', inputtype: 'text', options: [], value: creatinineClearanceCycle1, setValue: setCreatinineClearanceCycle1 },
  { question: 'Blood Sugar:', questionType: questionType, questionId: 'c1-14_cycle1', inputtype: 'text', options: [], value: bloodSugarCycle1, setValue: setBloodSugarCycle1 },
  { question: 'Other Details:', questionType: questionType, questionId: 'c1-15_cycle1', inputtype: 'textarea', options: [], value: otherDetailsCycle1, setValue: setOtherDetailsCycle1 },
  { question: 'Primary/Secondary GCSF:', questionType: questionType, questionId: 'c1-16_cycle1', inputtype: 'text', options: [], value: primarySecondaryGcsfCycle1, setValue: setPrimarySecondaryGcsfCycle1 },
  { question: 'Dose Delay:', questionType: questionType, questionId: 'c1-17_cycle1', inputtype: 'dropdown', options: ["Yes", "No"], value: doseDelayCycle1, setValue: setDoseDelayCycle1 },
  { question: 'Reason for Delay:', questionType: questionType, questionId: 'c1-18_cycle1', inputtype: 'textarea', options: [], value: reasonForDelayCycle1, setValue: setReasonForDelayCycle1 },
  { question: 'Number of Days Delayed:', questionType: questionType, questionId: 'c1-19_cycle1', inputtype: 'text', options: [], value: daysDelayedCycle1, setValue: setDaysDelayedCycle1 },
  { question: 'Dose Modification:', questionType: questionType, questionId: 'c1-20_cycle1', inputtype: 'dropdown', options: ["Yes", "No"], value: doseModificationCycle1, setValue: setDoseModificationCycle1 },
  { question: 'Reason for Dose Modification:', questionType: questionType, questionId: 'c1-21_cycle1', inputtype: 'text', options: [], value: reasonForDoseModificationCycle1, setValue: setReasonForDoseModificationCycle1 }
];

// Section 2 - Cycle 2
const [startDateCycle2, setStartDateCycle2] = useState('');
const [regimenCycle2, setRegimenCycle2] = useState('');
const [otherRegimenCycle2, setOtherRegimenCycle2] = useState('');
const [cycleCycle2, setCycleCycle2] = useState('Cycle 2');
const [cycleStartDateCycle2, setCycleStartDateCycle2] = useState('');
const [ecogPSCycle2, setEcogPSCycle2] = useState('');
const [hbCycle2, setHbCycle2] = useState('');
const [ancCycle2, setAncCycle2] = useState('');
const [plateletCountCycle2, setPlateletCountCycle2] = useState('');
const [bilirubinCycle2, setBilirubinCycle2] = useState('');
const [sgotSgptCycle2, setSgotSgptCycle2] = useState('');
const [creatinineCycle2, setCreatinineCycle2] = useState('');
const [creatinineClearanceCycle2, setCreatinineClearanceCycle2] = useState('');
const [bloodSugarCycle2, setBloodSugarCycle2] = useState('');
const [otherDetailsCycle2, setOtherDetailsCycle2] = useState('');
const [primarySecondaryGcsfCycle2, setPrimarySecondaryGcsfCycle2] = useState('');
const [doseDelayCycle2, setDoseDelayCycle2] = useState('');
const [reasonForDelayCycle2, setReasonForDelayCycle2] = useState('');
const [daysDelayedCycle2, setDaysDelayedCycle2] = useState('');
const [doseModificationCycle2, setDoseModificationCycle2] = useState('');
const [reasonForDoseModificationCycle2, setReasonForDoseModificationCycle2] = useState('');

const questions2 = [
  { question: 'Date of Start of Chemotherapy:', questionType: questionType, questionId: 'c1-1_cycle2', inputtype: 'date', options: [], value: startDateCycle2, setValue: setStartDateCycle2, info:[
   
    
    "1. Haematological: Haemoglobin &gt; 9gm/dl, ANC ≥ 1500/cmm3, Platelet ≥100000/cmm3",
    "2. Liver Function test: Bilirubin ≤2 x upper limit normal (ULN), AST/ALT/ ALP ≤ 2.5 x ULN",
    "3. Renal Function test: Creatinine ≤ 1.5 ULN, Creatinine Clearance ≥60 ml/min."
  ] },
  { question: 'Regimen:', questionType: questionType, questionId: 'c1-2_cycle2', inputtype: 'dropdown', options: ["DCF", "CF", "Other"], value: regimenCycle2, setValue: setRegimenCycle2 },
  { question: 'Regimen other:', questionType: questionType, questionId: 'c1-3_cycle2', inputtype: 'text', options: [], value: otherRegimenCycle2, setValue: setOtherRegimenCycle2 },
  { question: 'Cycle:', questionType: questionType, questionId: 'c1-4_cycle2', inputtype: 'disabled', options: ["Cycle 1", "Cycle 2", "Cycle 3"], value: cycleCycle2, setValue: setCycleCycle2 },
  { question: 'Date of Start of Cycle:', questionType: questionType, questionId: 'c1-5_cycle2', inputtype: 'date', options: [], value: cycleStartDateCycle2, setValue: setCycleStartDateCycle2 },
  { question: 'ECOG PS:', questionType: questionType, questionId: 'c1-6_cycle2', inputtype: 'text', options: [], value: ecogPSCycle2, setValue: setEcogPSCycle2 },
  { question: 'Hemoglobin (Hb):', questionType: questionType, questionId: 'c1-7_cycle2', inputtype: 'text', options: [], value: hbCycle2, setValue: setHbCycle2 , restriction:(alpha.some(el => hbCycle2.includes(el))) , restrictiontext: 'Hb cannot contain alphabets' },
  { question: 'Absolute Neutrophil Count (ANC):', questionType: questionType, questionId: 'c1-8_cycle2', inputtype: 'text', options: [], value: ancCycle2, setValue: setAncCycle2 , restriction:(alpha.some(el => ancCycle2.includes(el))) , restrictiontext: 'ANC cannot contain alphabets' },
  { question: 'Platelet Count:', questionType: questionType, questionId: 'c1-9_cycle2', inputtype: 'text', options: [], value: plateletCountCycle2, setValue: setPlateletCountCycle2 , restriction:(alpha.some(el => plateletCountCycle2.includes(el))) , restrictiontext: 'Platelet Count cannot contain alphabets' },
  { question: 'Bilirubin:', questionType: questionType, questionId: 'c1-10_cycle2', inputtype: 'text', options: [], value: bilirubinCycle2, setValue: setBilirubinCycle2 },
  { question: 'SGOT/SGPT:', questionType: questionType, questionId: 'c1-11_cycle2', inputtype: 'text', options: [], value: sgotSgptCycle2, setValue: setSgotSgptCycle2 },
  { question: 'Creatinine:', questionType: questionType, questionId: 'c1-12_cycle2', inputtype: 'text', options: [], value: creatinineCycle2, setValue: setCreatinineCycle2 },
  { question: 'Creatinine Clearance:', questionType: questionType, questionId: 'c1-13_cycle2', inputtype: 'text', options: [], value: creatinineClearanceCycle2, setValue: setCreatinineClearanceCycle2 },
  { question: 'Blood Sugar:', questionType: questionType, questionId: 'c1-14_cycle2', inputtype: 'text', options: [], value: bloodSugarCycle2, setValue: setBloodSugarCycle2 },
  { question: 'Other Details:', questionType: questionType, questionId: 'c1-15_cycle2', inputtype: 'textarea', options: [], value: otherDetailsCycle2, setValue: setOtherDetailsCycle2 },
  { question: 'Primary/Secondary GCSF:', questionType: questionType, questionId: 'c1-16_cycle2', inputtype: 'text', options: [], value: primarySecondaryGcsfCycle2, setValue: setPrimarySecondaryGcsfCycle2 },
  { question: 'Dose Delay:', questionType: questionType, questionId: 'c1-17_cycle2', inputtype: 'dropdown', options: ["Yes", "No"], value: doseDelayCycle2, setValue: setDoseDelayCycle2 },
  { question: 'Reason for Delay:', questionType: questionType, questionId: 'c1-18_cycle2', inputtype: 'textarea', options: [], value: reasonForDelayCycle2, setValue: setReasonForDelayCycle2 },
  { question: 'Number of Days Delayed:', questionType: questionType, questionId: 'c1-19_cycle2', inputtype: 'text', options: [], value: daysDelayedCycle2, setValue: setDaysDelayedCycle2 },
  { question: 'Dose Modification:', questionType: questionType, questionId: 'c1-20_cycle2', inputtype: 'dropdown', options: ["Yes", "No"], value: doseModificationCycle2, setValue: setDoseModificationCycle2 },
  { question: 'Reason for Dose Modification:', questionType: questionType, questionId: 'c1-21_cycle2', inputtype: 'text', options: [], value: reasonForDoseModificationCycle2, setValue: setReasonForDoseModificationCycle2 }
];

// Section 3 - Cycle 3
const [startDateCycle3, setStartDateCycle3] = useState('');
const [regimenCycle3, setRegimenCycle3] = useState('');
const [otherRegimenCycle3, setOtherRegimenCycle3] = useState('');
const [cycleCycle3, setCycleCycle3] = useState('Cycle 3');
const [cycleStartDateCycle3, setCycleStartDateCycle3] = useState('');
const [ecogPSCycle3, setEcogPSCycle3] = useState('');
const [hbCycle3, setHbCycle3] = useState('');
const [ancCycle3, setAncCycle3] = useState('');
const [plateletCountCycle3, setPlateletCountCycle3] = useState('');
const [bilirubinCycle3, setBilirubinCycle3] = useState('');
const [sgotSgptCycle3, setSgotSgptCycle3] = useState('');
const [creatinineCycle3, setCreatinineCycle3] = useState('');
const [creatinineClearanceCycle3, setCreatinineClearanceCycle3] = useState('');
const [bloodSugarCycle3, setBloodSugarCycle3] = useState('');
const [otherDetailsCycle3, setOtherDetailsCycle3] = useState('');
const [primarySecondaryGcsfCycle3, setPrimarySecondaryGcsfCycle3] = useState('');
const [doseDelayCycle3, setDoseDelayCycle3] = useState('');
const [reasonForDelayCycle3, setReasonForDelayCycle3] = useState('');
const [daysDelayedCycle3, setDaysDelayedCycle3] = useState('');
const [doseModificationCycle3, setDoseModificationCycle3] = useState('');
const [reasonForDoseModificationCycle3, setReasonForDoseModificationCycle3] = useState('');

const questions3 = [
  { question: 'Date of Start of Chemotherapy:', questionType: questionType, questionId: 'c1-1_cycle3', inputtype: 'date', options: [], value: startDateCycle3, setValue: setStartDateCycle3, info:[
   
    
    "1. Haematological: Haemoglobin &gt; 9gm/dl, ANC ≥ 1500/cmm3, Platelet ≥100000/cmm3",
    "2. Liver Function test: Bilirubin ≤2 x upper limit normal (ULN), AST/ALT/ ALP ≤ 2.5 x ULN",
    "3. Renal Function test: Creatinine ≤ 1.5 ULN, Creatinine Clearance ≥60 ml/min."
  ] },
  { question: 'Regimen:', questionType: questionType, questionId: 'c1-2_cycle3', inputtype: 'dropdown', options: ["DCF", "CF", "Other"], value: regimenCycle3, setValue: setRegimenCycle3 },
  { question: 'Regimen other:', questionType: questionType, questionId: 'c1-3_cycle3', inputtype: 'text', options: [], value: otherRegimenCycle3, setValue: setOtherRegimenCycle3 },
  { question: 'Cycle:', questionType: questionType, questionId: 'c1-4_cycle3', inputtype: 'disabled', options: ["Cycle 1", "Cycle 2", "Cycle 3"], value: cycleCycle3, setValue: setCycleCycle3 },
  { question: 'Date of Start of Cycle:', questionType: questionType, questionId: 'c1-5_cycle3', inputtype: 'date', options: [], value: cycleStartDateCycle3, setValue: setCycleStartDateCycle3 },
  { question: 'ECOG PS:', questionType: questionType, questionId: 'c1-6_cycle3', inputtype: 'text', options: [], value: ecogPSCycle3, setValue: setEcogPSCycle3 },
  { question: 'Hemoglobin (Hb):', questionType: questionType, questionId: 'c1-7_cycle3', inputtype: 'text', options: [], value: hbCycle3, setValue: setHbCycle3, restriction: (alpha.some(el => hbCycle3.includes(el))) , restrictiontext: 'Hb cannot contain alphabets' },
  { question: 'Absolute Neutrophil Count (ANC):', questionType: questionType, questionId: 'c1-8_cycle3', inputtype: 'text', options: [], value: ancCycle3, setValue: setAncCycle3 , restriction: (alpha.some(el => ancCycle3.includes(el))) , restrictiontext: 'ANC cannot contain alphabets' },
  { question: 'Platelet Count:', questionType: questionType, questionId: 'c1-9_cycle3', inputtype: 'text', options: [], value: plateletCountCycle3, setValue: setPlateletCountCycle3 , restriction: (alpha.some(el => plateletCountCycle3.includes(el))) , restrictiontext: 'Platelet Count cannot contain alphabets' },
  { question: 'Bilirubin:', questionType: questionType, questionId: 'c1-10_cycle3', inputtype: 'text', options: [], value: bilirubinCycle3, setValue: setBilirubinCycle3 },
  { question: 'SGOT/SGPT:', questionType: questionType, questionId: 'c1-11_cycle3', inputtype: 'text', options: [], value: sgotSgptCycle3, setValue: setSgotSgptCycle3 },
  { question: 'Creatinine:', questionType: questionType, questionId: 'c1-12_cycle3', inputtype: 'text', options: [], value: creatinineCycle3, setValue: setCreatinineCycle3 },
  { question: 'Creatinine Clearance:', questionType: questionType, questionId: 'c1-13_cycle3', inputtype: 'text', options: [], value: creatinineClearanceCycle3, setValue: setCreatinineClearanceCycle3 },
  { question: 'Blood Sugar:', questionType: questionType, questionId: 'c1-14_cycle3', inputtype: 'text', options: [], value: bloodSugarCycle3, setValue: setBloodSugarCycle3 },
  { question: 'Other Details:', questionType: questionType, questionId: 'c1-15_cycle3', inputtype: 'textarea', options: [], value: otherDetailsCycle3, setValue: setOtherDetailsCycle3 },
  { question: 'Primary/Secondary GCSF:', questionType: questionType, questionId: 'c1-16_cycle3', inputtype: 'text', options: [], value: primarySecondaryGcsfCycle3, setValue: setPrimarySecondaryGcsfCycle3 },
  { question: 'Dose Delay:', questionType: questionType, questionId: 'c1-17_cycle3', inputtype: 'dropdown', options: ["Yes", "No"], value: doseDelayCycle3, setValue: setDoseDelayCycle3 },
  { question: 'Reason for Delay:', questionType: questionType, questionId: 'c1-18_cycle3', inputtype: 'textarea', options: [], value: reasonForDelayCycle3, setValue: setReasonForDelayCycle3 },
  { question: 'Number of Days Delayed:', questionType: questionType, questionId: 'c1-19_cycle3', inputtype: 'text', options: [], value: daysDelayedCycle3, setValue: setDaysDelayedCycle3 },
  { question: 'Dose Modification:', questionType: questionType, questionId: 'c1-20_cycle3', inputtype: 'dropdown', options: ["Yes", "No"], value: doseModificationCycle3, setValue: setDoseModificationCycle3 },
  { question: 'Reason for Dose Modification:', questionType: questionType, questionId: 'c1-21_cycle3', inputtype: 'text', options: [], value: reasonForDoseModificationCycle3, setValue: setReasonForDoseModificationCycle3 }
];

    

      useEffect( () => {

        const fetchalldata = async () => 
        {
            let updateArray: { questionId: string; updates: any; }[] = []

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
                const questionsArray = [questions1,questions2,questions3]
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
            alpha.some(i => plateletCountCycle1.includes(i)) ||
            alpha.some(i => hbCycle1.includes(i)) ||
            alpha.some(i => ancCycle1.includes(i)) 





        ) {
            if (alpha.some(i => plateletCountCycle1.includes(i))) {
                toast({
                    title: "Error",
                    description: "Invalid platelet count data",
                    variant: "destructive",
                });
            } else if (alpha.some(i => hbCycle1.includes(i))) {
                toast({
                    title: "Error",
                    description: "Invalid hemoglobin data",
                    variant: "destructive",
                });
            } else if (alpha.some(i => ancCycle1.includes(i))) {
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
                            setTabValue('section2')
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
            // questions1.some((question) => question.value === '')
            alpha.some(i => plateletCountCycle2.includes(i)) ||
            alpha.some(i => hbCycle2.includes(i)) ||
            alpha.some(i => ancCycle2.includes(i)) 





        ) {
            if (alpha.some(i => plateletCountCycle2.includes(i))) {
                toast({
                    title: "Error",
                    description: "Invalid platelet count data",
                    variant: "destructive",
                });
            } else if (alpha.some(i => hbCycle2.includes(i))) {
                toast({
                    title: "Error",
                    description: "Invalid hemoglobin data",
                    variant: "destructive",
                });
            } else if (alpha.some(i => ancCycle2.includes(i))) {
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
                            setTabValue('section3')
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
            // questions1.some((question) => question.value === '')
            alpha.some(i => plateletCountCycle3.includes(i)) ||
            alpha.some(i => hbCycle3.includes(i)) ||
            alpha.some(i => ancCycle3.includes(i)) 





        ) {
            if (alpha.some(i => plateletCountCycle3.includes(i))) {
                toast({
                    title: "Error",
                    description: "Invalid platelet count data",
                    variant: "destructive",
                });
            } else if (alpha.some(i => hbCycle3.includes(i))) {
                toast({
                    title: "Error",
                    description: "Invalid hemoglobin data",
                    variant: "destructive",
                });
            } else if (alpha.some(i => ancCycle3.includes(i))) {
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




            {tabValue === "section1" && <CustomForm questions={questions1} handleSubmit={handleSubmit1} buttontitle="Submit & Next" formtitle={formTitle} loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} updates={updates}/>}
            {tabValue === "section2" && <CustomForm questions={questions2} handleSubmit={handleSubmit2} buttontitle="Submit & Next" formtitle={formTitle} loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} updates={updates}/>}
            {tabValue === "section3" && <CustomForm questions={questions3} handleSubmit={handleSubmit3} buttontitle="Submit & Next" formtitle={formTitle} loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} updates={updates}/>}
        

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
            { id: "section1", title: "Cycle 1" },
            { id: "section2", title: "Cycle 2" },
            { id: 'section3', title: "Cycle 3" },
            
            
          ]}
          id={tabValue}
          setId={setTabValue}
         
        />
        </div>
    );
};

export default Chemotherapyform
