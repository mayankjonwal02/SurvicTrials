"use client"
import React, {useState,useEffect} from 'react'
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import CustomForm from '@/components/customform';
import { daysToWeeks, sub } from 'date-fns';
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"

const SocialHistory = () => {
    const { toast } = useToast()
    const router = useRouter();

    const [user, setUser] = useState<any>({});
    const [userid, setUserId] = useState('');
    const [patient_trial_number, setPatient_trial_number] = React.useState("2024-BTI-1");

    const [dataloading, setDataloading] = useState(false);
    const [tabValue, setTabValue] = useState("1");

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
        setUser(storedUser);
        setUserId(storedUser.unique_id);
    }, []);
    const questionType = "socialhistory";
    const [loading, setLoading] = React.useState(false);

    const [addiction1, setAddiction1] = React.useState("");
    const [addictiontype1, setAddictiontype1] = React.useState("Cigarette / beedi");
    const [ageofstarting1, setAgeofstarting1] = React.useState("");
    const [doseperday1, setDoseperday1] = React.useState("");
    const [doseperweek1, setDoseperweek1] = React.useState("");
    const [doseinyears1, setDoseinyears1] = React.useState("");
    const [currentstatus1, setCurrentstatus1] = React.useState("");
    const [quitsince1, setQuitsince1] = React.useState("");
    const [category1, setCategory1] = React.useState("");


    const [addiction2, setAddiction2] = useState("");
    const [addictiontype2, setAddictiontype2] = useState("Paan / Ghutkha / Khaini");
    const [ageofstarting2, setAgeofstarting2] = useState("");
    const [doseperday2, setDoseperday2] = useState("");
    const [doseperweek2, setDoseperweek2] = useState("");
    const [doseinyears2, setDoseinyears2] = useState("");
    const [currentstatus2, setCurrentstatus2] = useState("");
    const [quitsince2, setQuitsince2] = useState("");
    const [category2, setCategory2] = useState("");


    const [addiction3, setAddiction3] = useState("");
    const [addictiontype3, setAddictiontype3] = useState("Beer / Malt / Liquor / Wine");
    const [ageofstarting3, setAgeofstarting3] = useState("");
    const [doseperday3, setDoseperday3] = useState("");
    const [doseperweek3, setDoseperweek3] = useState("");
    const [doseinyears3, setDoseinyears3] = useState("");
    const [currentstatus3, setCurrentstatus3] = useState("");
    const [quitsince3, setQuitsince3] = useState("");
    const [category3, setCategory3] = useState("");



    const [addiction4, setAddiction4] = useState("");
    const [addictiontype4, setAddictiontype4] = useState("Opium: Bar-Prepared Dross ,Sap-Paste Raw/Doda");
    const [ageofstarting4, setAgeofstarting4] = useState("");
    const [doseperday4, setDoseperday4] = useState("");
    const [doseperweek4, setDoseperweek4] = useState("");
    const [doseinyears4, setDoseinyears4] = useState("");
    const [currentstatus4, setCurrentstatus4] = useState("");
    const [quitsince4, setQuitsince4] = useState("");
    const [category4, setCategory4] = useState("");


    const [addiction5, setAddiction5] = useState("");
    const [addictiontype5, setAddictiontype5] = useState("");
    const [ageofstarting5, setAgeofstarting5] = useState("");
    const [doseperday5, setDoseperday5] = useState("");
    const [doseperweek5, setDoseperweek5] = useState("");
    const [doseinyears5, setDoseinyears5] = useState("");
    const [currentstatus5, setCurrentstatus5] = useState("");
    const [quitsince5, setQuitsince5] = useState("");
    const [category5, setCategory5] = useState("");
    useEffect(() => {

        if(addiction1 === "No"){
            setAgeofstarting1("0");
            setDoseperday1("0");
            setDoseperweek1("0");
            setDoseinyears1("0");
            setQuitsince1("00-00-0000");
            setCurrentstatus1("Not Applicable");
            
        }
        else{
            setAgeofstarting1("");
            setDoseperday1("");
            setDoseperweek1("");
            setDoseinyears1("");
            setQuitsince1("");
            setCurrentstatus1("");
        }

        if(addiction2 === "No"){
            setAgeofstarting2("0");
            setDoseperday2("0");
            setDoseperweek2("0");
            setDoseinyears2("0");
            setQuitsince2("00-00-0000");
            setCurrentstatus2("Not Applicable");
            
        }
        else{
            setAgeofstarting2("");
            setDoseperday2("");
            setDoseperweek2("");
            setDoseinyears2("");
            setQuitsince2("");
            setCurrentstatus2("");
        }
        



        if(addiction3 === "No"){
            setAgeofstarting3("0");
            setDoseperday3("0");
            setDoseperweek3("0");
            setDoseinyears3("0");
            setQuitsince3("00-00-0000");
            setCurrentstatus3("Not Applicable");
            
        }   
        else{
            setAgeofstarting3("");
            setDoseperday3("");
            setDoseperweek3("");
            setDoseinyears3("");
            setQuitsince3("");
            setCurrentstatus3("");
        }


        if(addiction4 === "No"){
            setAgeofstarting4("0");
            setDoseperday4("0");
            setDoseperweek4("0");
            setDoseinyears4("0");
            setQuitsince4("00-00-0000");
            setCurrentstatus4("Not Applicable");
            
        }
        else{
            setAgeofstarting4("");
            setDoseperday4("");
            setDoseperweek4("");
            setDoseinyears4("");
            setQuitsince4("");
            setCurrentstatus4("");
        }



        if(addiction5 === "No"){
            setAddictiontype5("Not Applicable");
            setAgeofstarting5("0");
            setDoseperday5("0");
            setDoseperweek5("0");
            setDoseinyears5("0");
            setQuitsince5("00-00-0000");
            setCurrentstatus5("Not Applicable");
            
        }
        else{
            setAddictiontype5("");
            setAgeofstarting5("");
            setDoseperday5("");
            setDoseperweek5("");
            setDoseinyears5("");
            setQuitsince5("");
            setCurrentstatus5("");
        }



    },[addiction1,addiction2,addiction3,addiction4,addiction5])
    

    const alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
      const alphaspecial = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',"!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "-", "{", "}", "[", "]", ":", ";", "'", '"', "<", ">", ",", ".", "?", "/", "|", "\\", "~", "`"];
       const numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        const special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "-", "{", "}", "[", "]", ":", ";", "'", '"', "<", ">", ",", ".", "?", "/", "|", "\\", "~", "`"];
   
    const questions1 = [
        { question: 'Addiction:', questionType: 'text', questionId: 's1-0-type1', inputtype: 'dropdown', options: ["Yes","No"], value: addiction1, setValue: setAddiction1,heading:"Smoking" ,info: [
            "Never: never consumed the substance;",
            "Current: Consuming currently or quit for less than 3 months;",
            "Reformed: Quit for 3 months or more.",
            "",
            "Alcohol**:",
            "Alcohol consumption categorized into 4 levels:",
            "1. Light (0.01-12.4 g/day)",
            "2. Light to moderate (12.5-24.9 g/day)",
            "3. Moderate to high (25.0-49.9 g/day)",
            "4. Heavy (≥ 50.0 g/day)",
            "",
            "Various units of alcohol consumption (grams, milliliters, ounces, or number of drinks) reported in the studies can be converted to grams per day using the following conversion factors: 0.8 g/mL, 28 g/oz, and 12 g/glass.",
            "",
            "Measuring (UK):",
            "10–12 grams of pure alcohol are contained in:",
            "- 280-330 ml of beer",
            "- 150-180 ml of champagne",
            "- 30-40 ml of whisky or high-strength spirit",
            "- 60-80 ml of liqueur",
            "- 100-120 ml of red wine",
            "",
            "Measuring (USA):",
            "A standard drink is 14 gm.",
            "",
            "Opium***:",
            "Addict/user means- used opium at least once per week for at least 6 months.",
            "3 Months (Dependence) / 1 Year Former",
            "Cumulative use (year/days) was defined as the number of nokhods (a local unit, approximately 0.2 g) of opium consumed per day multiplied by the number of year/days consuming.",
            "Types of opium: Opium Bar-prepared dross / Opium sap-paste-raw / Doda",
            "",
            "Gm/Day DODA or Gm of Opium bar or Paste.",
            "SODQ scale (Dr. Navtratan)"
        ]},
        { question: 'Addiction Type:', questionType: 'text', questionId: 's1-1-type1', inputtype: 'disabled', options: [], value: addictiontype1, setValue: setAddictiontype1 },
        { question: 'Age of Starting:', questionType: 'text', questionId: 's1-2-type1', inputtype: addiction1==="No"?"disabled":'text', options: [], value: ageofstarting1, setValue: setAgeofstarting1, restriction:( ( (alpha.some(i => ageofstarting1.includes(i)) || special.some(i => ageofstarting1.includes(i))) || ageofstarting1.length > 2 ) ),restrictiontext:"Please enter valid age" },
        { question: 'Dose per Day/Intensity:', questionType: 'text', questionId: 's1-3-type1', inputtype: addiction1==="No"?"disabled":'text', options: [], value: doseperday1, setValue: setDoseperday1 , restriction:( ( (alpha.some(i => doseperday1.includes(i)) || special.some(i => doseperday1.includes(i))) || doseperday1.length > 2 ) ),restrictiontext:"Please enter valid dose" },
        { question: 'Dose per Week:', questionType: 'text', questionId: 's1-4-type1', inputtype: addiction1==="No"?"disabled":'text', options: [], value: doseperweek1, setValue: setDoseperweek1 , restriction:( ( (alpha.some(i => doseperweek1.includes(i)) || special.some(i => doseperweek1.includes(i))) || doseperweek1.length > 2 ) ),restrictiontext:"Please enter valid dose" },
        { question: 'Duration in Years:', questionType: 'text', questionId: 's1-5-type1', inputtype: addiction1==="No"?"disabled":'text', options: [], value: doseinyears1, setValue: setDoseinyears1 , restriction:( ( (alpha.some(i => doseinyears1.includes(i)) || special.some(i => doseinyears1.includes(i))) || doseinyears1.length > 2 ) ),restrictiontext:"Please enter valid dose" },
        { question: 'Current Status:', questionType: 'text', questionId: 's1-6-type1', inputtype: addiction1==="No"?"disabled":'text', options: [], value: currentstatus1, setValue: setCurrentstatus1 },
        { question: 'Quit Since:', questionType: 'text', questionId: 's1-7-type1', inputtype: addiction1==="No"?"disabled":'date', options: [], value: quitsince1, setValue: setQuitsince1 },
        {
            question: 'Category:', questionType: 'text', questionId: 's1-8-type1', inputtype: 'dropdown', options: ["Never", "Current", "Reformed"], value: category1, setValue: setCategory1,
           
        },
    ];

    const questions2 = [
        { question: 'Addiction:', questionType: 'text', questionId: 's1-0-type2', inputtype: 'dropdown', options: ["Yes","No"], value: addiction2, setValue: setAddiction2  ,heading:"Non-Smoked Tobacco" ,info: [
            "Never: never consumed the substance;",
            "Current: Consuming currently or quit for less than 3 months;",
            "Reformed: Quit for 3 months or more.",
            "",
            "Alcohol**:",
            "Alcohol consumption categorized into 4 levels:",
            "1. Light (0.01-12.4 g/day)",
            "2. Light to moderate (12.5-24.9 g/day)",
            "3. Moderate to high (25.0-49.9 g/day)",
            "4. Heavy (≥ 50.0 g/day)",
            "",
            "Various units of alcohol consumption (grams, milliliters, ounces, or number of drinks) reported in the studies can be converted to grams per day using the following conversion factors: 0.8 g/mL, 28 g/oz, and 12 g/glass.",
            "",
            "Measuring (UK):",
            "10–12 grams of pure alcohol are contained in:",
            "- 280-330 ml of beer",
            "- 150-180 ml of champagne",
            "- 30-40 ml of whisky or high-strength spirit",
            "- 60-80 ml of liqueur",
            "- 100-120 ml of red wine",
            "",
            "Measuring (USA):",
            "A standard drink is 14 gm.",
            "",
            "Opium***:",
            "Addict/user means- used opium at least once per week for at least 6 months.",
            "3 Months (Dependence) / 1 Year Former",
            "Cumulative use (year/days) was defined as the number of nokhods (a local unit, approximately 0.2 g) of opium consumed per day multiplied by the number of year/days consuming.",
            "Types of opium: Opium Bar-prepared dross / Opium sap-paste-raw / Doda",
            "",
            "Gm/Day DODA or Gm of Opium bar or Paste.",
            "SODQ scale (Dr. Navtratan)"
        ]},
        { question: 'Addiction Type:', questionType: 'text', questionId: 's1-1-type2', inputtype: 'disabled', options: [], value: addictiontype2, setValue: setAddictiontype2 },
        { question: 'Age of Starting:', questionType: 'text', questionId: 's1-2-type2', inputtype: addiction2==="No"?"disabled":'text', options: [], value: ageofstarting2, setValue: setAgeofstarting2 , restriction:( ( (alpha.some(i => ageofstarting2.includes(i)) || special.some(i => ageofstarting2.includes(i))) || ageofstarting2.length > 2 ) ),restrictiontext:"Please enter valid age" },
        { question: 'Dose per Day/Intensity:', questionType: 'text', questionId: 's1-3-type2', inputtype: addiction2==="No"?"disabled":'text', options: [], value: doseperday2, setValue: setDoseperday2 , restriction:( ( (alpha.some(i => doseperday2.includes(i)) || special.some(i => doseperday2.includes(i))) || doseperday2.length > 2 ) ),restrictiontext:"Please enter valid dose" },
        { question: 'Dose per Week:', questionType: 'text', questionId: 's1-4-type2', inputtype: addiction2==="No"?"disabled":'text', options: [], value: doseperweek2, setValue: setDoseperweek2, restriction:( ( (alpha.some(i => doseperweek2.includes(i)) || special.some(i => doseperweek2.includes(i))) || doseperweek2.length > 2 ) ),restrictiontext:"Please enter valid dose" },
        { question: 'Duration in Years:', questionType: 'text', questionId: 's1-5-type2', inputtype: addiction2==="No"?"disabled":'text', options: [], value: doseinyears2, setValue: setDoseinyears2 , restriction:( ( (alpha.some(i => doseinyears2.includes(i)) || special.some(i => doseinyears2.includes(i))) || doseinyears2.length > 2 ) ),restrictiontext:"Please enter valid dose" },
        { question: 'Current Status:', questionType: 'text', questionId: 's1-6-type2', inputtype: addiction2==="No"?"disabled":'text', options: [], value: currentstatus2, setValue: setCurrentstatus2 },
        { question: 'Quit Since:', questionType: 'text', questionId: 's1-7-type2', inputtype: addiction2==="No"?"disabled":'date', options: [], value: quitsince2, setValue: setQuitsince2 },
        {
            question: 'Category:', questionType: 'text', questionId: 's1-8-type2', inputtype: 'dropdown', options: ["Never", "Current", "Reformed"], value: category2, setValue: setCategory2,
            
        },
    ];

    const questions3 = [
        { question: 'Addiction:', questionType: 'text', questionId: 's1-0-type3', inputtype: 'dropdown', options: ["Yes","No"], value: addiction3, setValue: setAddiction3 , heading:"Alcohol Intake**" ,info: [
            "Never: never consumed the substance;",
            "Current: Consuming currently or quit for less than 3 months;",
            "Reformed: Quit for 3 months or more.",
            "",
            "Alcohol**:",
            "Alcohol consumption categorized into 4 levels:",
            "1. Light (0.01-12.4 g/day)",
            "2. Light to moderate (12.5-24.9 g/day)",
            "3. Moderate to high (25.0-49.9 g/day)",
            "4. Heavy (≥ 50.0 g/day)",
            "",
            "Various units of alcohol consumption (grams, milliliters, ounces, or number of drinks) reported in the studies can be converted to grams per day using the following conversion factors: 0.8 g/mL, 28 g/oz, and 12 g/glass.",
            "",
            "Measuring (UK):",
            "10–12 grams of pure alcohol are contained in:",
            "- 280-330 ml of beer",
            "- 150-180 ml of champagne",
            "- 30-40 ml of whisky or high-strength spirit",
            "- 60-80 ml of liqueur",
            "- 100-120 ml of red wine",
            "",
            "Measuring (USA):",
            "A standard drink is 14 gm.",
            "",
            "Opium***:",
            "Addict/user means- used opium at least once per week for at least 6 months.",
            "3 Months (Dependence) / 1 Year Former",
            "Cumulative use (year/days) was defined as the number of nokhods (a local unit, approximately 0.2 g) of opium consumed per day multiplied by the number of year/days consuming.",
            "Types of opium: Opium Bar-prepared dross / Opium sap-paste-raw / Doda",
            "",
            "Gm/Day DODA or Gm of Opium bar or Paste.",
            "SODQ scale (Dr. Navtratan)"
        ]},
        { question: 'Addiction Type:', questionType: 'text', questionId: 's1-1-type3', inputtype: 'disabled', options: [], value: addictiontype3, setValue: setAddictiontype3 },
        { question: 'Age of Starting:', questionType: 'text', questionId: 's1-2-type3', inputtype: addiction3==="No"?"disabled":'text', options: [], value: ageofstarting3, setValue: setAgeofstarting3 , restriction:( ( (alpha.some(i => ageofstarting3.includes(i)) || special.some(i => ageofstarting3.includes(i))) || ageofstarting3.length > 2 ) ),restrictiontext:"Please enter valid age" },
        { question: 'Dose per Day/Intensity:', questionType: 'text', questionId: 's1-3-type3', inputtype: addiction3==="No"?"disabled":'text', options: [], value: doseperday3, setValue: setDoseperday3 , restriction:( ( (alpha.some(i => doseperday3.includes(i)) || special.some(i => doseperday3.includes(i))) || doseperday3.length > 2 ) ),restrictiontext:"Please enter valid dose" },
        { question: 'Dose per Week:', questionType: 'text', questionId: 's1-4-type3', inputtype: addiction3==="No"?"disabled":'text', options: [], value: doseperweek3, setValue: setDoseperweek3, restriction:( ( (alpha.some(i => doseperweek3.includes(i)) || special.some(i => doseperweek3.includes(i))) || doseperweek3.length > 2 ) ),restrictiontext:"Please enter valid dose" },
        { question: 'Duration in Years:', questionType: 'text', questionId: 's1-5-type3', inputtype: addiction3==="No"?"disabled":'text', options: [], value: doseinyears3, setValue: setDoseinyears3, restriction:( ( (alpha.some(i => doseinyears3.includes(i)) || special.some(i => doseinyears3.includes(i))) || doseinyears3.length > 2 ) ),restrictiontext:"Please enter valid dose" },
        { question: 'Current Status:', questionType: 'text', questionId: 's1-6-type3', inputtype: addiction3==="No"?"disabled":'text', options: [], value: currentstatus3, setValue: setCurrentstatus3 },
        { question: 'Quit Since:', questionType: 'text', questionId: 's1-7-type3', inputtype: addiction3==="No"?"disabled":'date', options: [], value: quitsince3, setValue: setQuitsince3 },
        {
            question: 'Category:', questionType: 'text', questionId: 's1-8-type3', inputtype: 'dropdown', options: ["Never", "Current", "Reformed"], value: category3, setValue: setCategory3,
           
        },
    ];

    const questions4 = [
        { question: 'Addiction:', questionType: 'text', questionId: 's1-0-type4', inputtype: 'dropdown', options: ["Yes","No"], value: addiction4, setValue: setAddiction4 , heading:"Opium***" ,info: [
            "Never: never consumed the substance;",
            "Current: Consuming currently or quit for less than 3 months;",
            "Reformed: Quit for 3 months or more.",
            "",
            "Alcohol**:",
            "Alcohol consumption categorized into 4 levels:",
            "1. Light (0.01-12.4 g/day)",
            "2. Light to moderate (12.5-24.9 g/day)",
            "3. Moderate to high (25.0-49.9 g/day)",
            "4. Heavy (≥ 50.0 g/day)",
            "",
            "Various units of alcohol consumption (grams, milliliters, ounces, or number of drinks) reported in the studies can be converted to grams per day using the following conversion factors: 0.8 g/mL, 28 g/oz, and 12 g/glass.",
            "",
            "Measuring (UK):",
            "10–12 grams of pure alcohol are contained in:",
            "- 280-330 ml of beer",
            "- 150-180 ml of champagne",
            "- 30-40 ml of whisky or high-strength spirit",
            "- 60-80 ml of liqueur",
            "- 100-120 ml of red wine",
            "",
            "Measuring (USA):",
            "A standard drink is 14 gm.",
            "",
            "Opium***:",
            "Addict/user means- used opium at least once per week for at least 6 months.",
            "3 Months (Dependence) / 1 Year Former",
            "Cumulative use (year/days) was defined as the number of nokhods (a local unit, approximately 0.2 g) of opium consumed per day multiplied by the number of year/days consuming.",
            "Types of opium: Opium Bar-prepared dross / Opium sap-paste-raw / Doda",
            "",
            "Gm/Day DODA or Gm of Opium bar or Paste.",
            "SODQ scale (Dr. Navtratan)"
        ]},
        { question: 'Addiction Type:', questionType: 'text', questionId: 's1-1-type4', inputtype: 'disabled', options: [], value: addictiontype4, setValue: setAddictiontype4 },
        { question: 'Age of Starting:', questionType: 'text', questionId: 's1-2-type4', inputtype: addiction4==="No"?"disabled":'text', options: [], value: ageofstarting4, setValue: setAgeofstarting4 , restriction:( ( (alpha.some(i => ageofstarting4.includes(i)) || special.some(i => ageofstarting4.includes(i))) || ageofstarting4.length > 2 ) ),restrictiontext:"Please enter valid age" },
        { question: 'Dose per Day/Intensity:', questionType: 'text', questionId: 's1-3-type4', inputtype: addiction4==="No"?"disabled":'text', options: [], value: doseperday4, setValue: setDoseperday4, restriction:( ( (alpha.some(i => doseperday4.includes(i)) || special.some(i => doseperday4.includes(i))) || doseperday4.length > 2 ) ),restrictiontext:"Please enter valid dose" },
        { question: 'Dose per Week:', questionType: 'text', questionId: 's1-4-type4', inputtype: addiction4==="No"?"disabled":'text', options: [], value: doseperweek4, setValue: setDoseperweek4, restriction:( ( (alpha.some(i => doseperweek4.includes(i)) || special.some(i => doseperweek4.includes(i))) || doseperweek4.length > 2 ) ),restrictiontext:"Please enter valid dose" },
        { question: 'Duration in Years:', questionType: 'text', questionId: 's1-5-type4', inputtype: addiction4==="No"?"disabled":'text', options: [], value: doseinyears4, setValue: setDoseinyears4 , restriction:( ( (alpha.some(i => doseinyears4.includes(i)) || special.some(i => doseinyears4.includes(i))) || doseinyears4.length > 2 ) ),restrictiontext:"Please enter valid dose" },
        { question: 'Current Status:', questionType: 'text', questionId: 's1-6-type4', inputtype: addiction4==="No"?"disabled":'text', options: [], value: currentstatus4, setValue: setCurrentstatus4 },
        { question: 'Quit Since:', questionType: 'text', questionId: 's1-7-type4', inputtype: addiction4==="No"?"disabled":'date', options: [], value: quitsince4, setValue: setQuitsince4 },
        {
            question: 'Category:', questionType: 'text', questionId: 's1-8-type4', inputtype: 'dropdown', options: ["Never", "Current", "Reformed"], value: category4, setValue: setCategory4,
           
        },
    ];


    const questions5 = [
        { question: 'Addiction:', questionType: questionType, questionId: 's1-0-type5', inputtype: 'dropdown', options: ["Yes","No"], value: addiction5, setValue: setAddiction5 , heading:"Others" , 
            info: [
            "Never: never consumed the substance;",
            "Current: Consuming currently or quit for less than 3 months;",
            "Reformed: Quit for 3 months or more.",
            "",
            "Alcohol**:",
            "Alcohol consumption categorized into 4 levels:",
            "1. Light (0.01-12.4 g/day)",
            "2. Light to moderate (12.5-24.9 g/day)",
            "3. Moderate to high (25.0-49.9 g/day)",
            "4. Heavy (≥ 50.0 g/day)",
            "",
            "Various units of alcohol consumption (grams, milliliters, ounces, or number of drinks) reported in the studies can be converted to grams per day using the following conversion factors: 0.8 g/mL, 28 g/oz, and 12 g/glass.",
            "",
            "Measuring (UK):",
            "10–12 grams of pure alcohol are contained in:",
            "- 280-330 ml of beer",
            "- 150-180 ml of champagne",
            "- 30-40 ml of whisky or high-strength spirit",
            "- 60-80 ml of liqueur",
            "- 100-120 ml of red wine",
            "",
            "Measuring (USA):",
            "A standard drink is 14 gm.",
            "",
            "Opium***:",
            "Addict/user means- used opium at least once per week for at least 6 months.",
            "3 Months (Dependence) / 1 Year Former",
            "Cumulative use (year/days) was defined as the number of nokhods (a local unit, approximately 0.2 g) of opium consumed per day multiplied by the number of year/days consuming.",
            "Types of opium: Opium Bar-prepared dross / Opium sap-paste-raw / Doda",
            "",
            "Gm/Day DODA or Gm of Opium bar or Paste.",
            "SODQ scale (Dr. Navtratan)"
        ]
    },
        { question: 'Addiction Type:', questionType: questionType, questionId: 's1-1-type5', inputtype: addiction5==="No"?"disabled":'text', options: [], value: addictiontype5, setValue: setAddictiontype5 },
        { question: 'Age of Starting:', questionType: questionType, questionId: 's1-2-type5', inputtype: addiction5==="No"?"disabled":'text', options: [], value: ageofstarting5, setValue: setAgeofstarting5 , restriction:( ( (alpha.some(i => ageofstarting5.includes(i)) || special.some(i => ageofstarting5.includes(i))) || ageofstarting5.length > 2 ) ),restrictiontext:"Please enter valid age" },
        { question: 'Dose per Day/Intensity:', questionType: questionType, questionId: 's1-3-type5', inputtype: addiction5==="No"?"disabled":'text', options: [], value: doseperday5, setValue: setDoseperday5 , restriction:( ( (alpha.some(i => doseperday5.includes(i)) || special.some(i => doseperday5.includes(i))) || doseperday5.length > 2 ) ),restrictiontext:"Please enter valid dose" },
        { question: 'Dose per Week:', questionType: questionType, questionId: 's1-4-type5', inputtype: addiction5==="No"?"disabled":'text', options: [], value: doseperweek5, setValue: setDoseperweek5 , restriction:( ( (alpha.some(i => doseperweek5.includes(i)) || special.some(i => doseperweek5.includes(i))) || doseperweek5.length > 2 ) ),restrictiontext:"Please enter valid dose" },
        { question: 'Duration in Years:', questionType: questionType, questionId: 's1-5-type5', inputtype: addiction5==="No"?"disabled":'text', options: [], value: doseinyears5, setValue: setDoseinyears5 , restriction:( ( (alpha.some(i => doseinyears5.includes(i)) || special.some(i => doseinyears5.includes(i))) || doseinyears5.length > 2 ) ),restrictiontext:"Please enter valid dose" },
        { question: 'Current Status:', questionType: questionType, questionId: 's1-6-type5', inputtype: addiction5==="No"?"disabled":'text', options: [], value: currentstatus5, setValue: setCurrentstatus5 },
        { question: 'Quit Since:', questionType: questionType, questionId: 's1-7-type5', inputtype: addiction5==="No"?"disabled":'date', options: [], value: quitsince5, setValue: setQuitsince5 },
        { question: 'Category:', questionType: questionType, questionId: 's1-8-type5', inputtype: 'dropdown', options: ["Never", "Current", "Reformed"], value: category5, setValue: setCategory5, 
           
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
                const questionsArray = [questions1, questions2, questions3, questions4,questions5]
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

      
        
        const handleValidation = (ageofstarting:string, doseperday:string, doseperweek:string, doseinyears:string) => {
            if (
                ( (alpha.some(i => ageofstarting.includes(i)) || special.some(i => ageofstarting.includes(i))) || ageofstarting.length > 2 ) 
                || ( (alpha.some(i => doseperday.includes(i)) || special.some(i => doseperday.includes(i)))  )
                || ( (alpha.some(i => doseperweek.includes(i)) || special.some(i => doseperweek.includes(i)))  )
                || ( (alpha.some(i => doseinyears.includes(i)) || special.some(i => doseinyears.includes(i)))  )
            ) {
                if ((alpha.some(i => ageofstarting.includes(i)) || special.some(i => ageofstarting.includes(i))) || ageofstarting.length > 2) {
                    toast({
                        title: "Error",
                        description: "Please provide a valid answer for Age of Starting",
                        variant: "destructive",
                    });
                } else if (alpha.some(i => doseperday.includes(i)) || special.some(i => doseperday.includes(i))) {
                    toast({
                        title: "Error",
                        description: "Please provide a valid answer for Dose per Day/Intensity",
                        variant: "destructive",
                    });
                } else if (alpha.some(i => doseperweek.includes(i)) || special.some(i => doseperweek.includes(i))) {
                    toast({
                        title: "Error",
                        description: "Please provide a valid answer for Dose per Week",
                        variant: "destructive",
                    });
                } else if (alpha.some(i => doseinyears.includes(i)) || special.some(i => doseinyears.includes(i))) {
                    toast({
                        title: "Error",
                        description: "Please provide a valid answer for Duration in Years",
                        variant: "destructive",
                    });
                }
                return false;
            }
            return true;
        };
        
        const handleSubmit = (questions: any, ageofstarting:string, doseperday:string, doseperweek:string, doseinyears:string) => {
            if (handleValidation(ageofstarting, doseperday, doseperweek, doseinyears)) {
                try {
                    setLoading(true)
                    fetch('/api/updatepatient', {
                        method: 'POST',
                        headers:{
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            patient_trial_number: patient_trial_number, 
                            questions: questions, 
                            submittedBy: userid
                        })
                    })
                    .then(response => response.json())
                    .then(data => {
                        setLoading(false)
                        if(data.executed){
                            toast({
                                title: "Success",
                                description: "Social History Profile Submitted",
                                variant: "success",
                            })
                            if(questions == questions5)
                            {
                                router.push("/form/clinicalprofile")
                            }
                            else if(questions == questions4)
                            {
                                setTabValue("5")
                            }
                            else if(questions == questions3)
                            {
                                setTabValue("4")
                            }
                            else if(questions == questions2)
                            {
                                setTabValue("3")
                            }
                            else if(questions == questions1)
                            {
                                setTabValue("2")
                            }
                            
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
                        toast({
                            title: "Error",
                            description: error.message,
                            variant: "destructive",
                        })
                    });
                } catch (error) {
                    setLoading(false)
                    toast({
                        title: "Error",
                        description: (error as Error).message,
                        variant: "destructive",
                    })
                }
            }
        };
    
        const handleSubmit1 = () => handleSubmit(questions1, ageofstarting1, doseperday1, doseperweek1, doseinyears1);
        const handleSubmit2 = () => handleSubmit(questions2, ageofstarting2, doseperday2, doseperweek2, doseinyears2);
        const handleSubmit3 = () => handleSubmit(questions3, ageofstarting3, doseperday3, doseperweek3, doseinyears3);
        const handleSubmit4 = () => handleSubmit(questions4, ageofstarting4, doseperday4, doseperweek4, doseinyears4);
        const handleSubmit5 = () => handleSubmit(questions5, ageofstarting5, doseperday5, doseperweek5, doseinyears5);

    if (dataloading) {
        return <div className="flex items-center justify-center h-screen w-full text-3xl font-bold text-green-5 ">
                  <div className="w-[70px] h-[70px] border border-4 border-t-0 border-green-700 rounded-full animate-spin">
                  </div> 
                </div>;
      }

    return (
        <div className='w-full h-screen'>
            
            {tabValue==="1"?<CustomForm questions={questions1} handleSubmit={handleSubmit1} buttontitle="Submit & Next" formtitle={"Social History"} loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} />:<></>}
            {tabValue==="2"?<CustomForm questions={questions2} handleSubmit={handleSubmit2} buttontitle="Submit & Next" formtitle={"Social History"} loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} />:<></>}
            {tabValue==="3"?<CustomForm questions={questions3} handleSubmit={handleSubmit3} buttontitle="Submit & Next" formtitle={"Social History"} loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} />:<></>}
            {tabValue==="4"?<CustomForm questions={questions4} handleSubmit={handleSubmit4} buttontitle="Submit & Next" formtitle={"Social History"} loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} />:<></>}
            {tabValue==="5"?<CustomForm questions={questions5} handleSubmit={handleSubmit5} buttontitle="Submit & Next" formtitle={"Social History"} loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} />:<></>}
            
        
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
                    <TabsTrigger value="1">1</TabsTrigger>
                    <TabsTrigger value="2">2</TabsTrigger>
                    <TabsTrigger value="3">3</TabsTrigger>
                    <TabsTrigger value="4">4</TabsTrigger>
                    <TabsTrigger value="5">5</TabsTrigger>
                
                    
                </TabsList>
            </Tabs>
        </div>
    );
};
export default SocialHistory
