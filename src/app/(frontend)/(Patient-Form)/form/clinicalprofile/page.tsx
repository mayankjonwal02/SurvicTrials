"use client"
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import CustomForm from '@/components/customform';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from '@/components/ui/button';
import { set } from 'mongoose';



const ClinicalProfile = () => {
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
    const questionType = "ClinicalProfile";
    const [loading, setLoading] = React.useState(false);
    const [tabValue, setTabValue] = useState("Symptoms");
    const [dataloading, setDataloading] = useState(false);

    // Symptoms and Signs
    const [nonhealingulcer, setNonhealingulcer] = React.useState("");
    const [nonhealingulcerduration, setNonhealingulcerduration] = React.useState("");
    const [skinfungationulcer, setSkinfungationulcer] = React.useState("");
    const [skinfungationulcerduration, setSkinfungationulcerduration] = React.useState("");
    const [pain, setPain] = React.useState("");
    const [painduration, setPainduration] = React.useState("");
    const [fatigue, setFatigue] = React.useState("");
    const [fatigueduration, setFatigueduration] = React.useState("");
    const [neckswelling, setNeckswelling] = React.useState("");
    const [neckswellingduration, setNeckswellingduration] = React.useState("");
    const [loosingteeth, setLoosingteeth] = React.useState("");
    const [loosingteethduration, setLoosingteethduration] = React.useState("");
    const [weightloss, setWeightloss] = React.useState("");
    const [weightlossduration, setWeightlossduration] = React.useState("");
    const [dentureuse, setDentureuse] = React.useState("");
    const [dentureuseduration, setDentureuseduration] = React.useState("");
    const [reducedmouthopening, setReducedmouthopening] = React.useState("");
    const [reducedmouthopeningduration, setReducedmouthopeningduration] = React.useState("");
    const [pasthistoryofcancer, setPasthistoryofcancer] = React.useState("");
    const [pasthistoryofcancerduration, setPasthistoryofcancerduration] = React.useState("");
    const [other, setOther] = React.useState("");
    const [pasthistorytreatment, setPasthistorytreatment] = React.useState("");
    const [pasthistorytreatmentduration1, setPasthistorytreatmentduration1] = React.useState("");
    const [pasthistorytreatmentduration2, setPasthistorytreatmentduration2] = React.useState("");
    const [pasthistorytreatmentduration3, setPasthistorytreatmentduration3] = React.useState("");


    // Comorbidities

    const [age, setAge] = React.useState("");
    const [myocardialinfarction, setMyocardialinfarction] = React.useState("");
    const [chf, setChf] = React.useState("");
    const [peripheralvascular, setPeripheralvascular] = React.useState("");
    const [cva, setCva] = React.useState("");
    const [dementia, setDementia] = React.useState("");
    const [copd, setCopd] = React.useState("");
    const [connectivetissuedisease, setConnectivetissuedisease] = React.useState("");
    const [pepticulcer, setPepticulcer] = React.useState("");
    const [liverrdisease, setLiverrdisease] = React.useState("");
    const [diabetes, setDiabetes] = React.useState("");
    const [hemiplegia, setHemiplegia] = React.useState("");
    const [ckd, setCkd] = React.useState("");
    const [solidtumor, setSolidtumor] = React.useState("");
    const [leukemia, setLeukemia] = React.useState("");
    const [lymphoma, setLymphoma] = React.useState("");
    const [aids, setAids] = React.useState("");
    const [pointscore, setPointscore] = React.useState("");
    const [estimatedsurvival, setEstimatedsurvival] = React.useState("");

    // Adult Comorbidity Evaluation-27 (ACE-27)

    const [myocardialinfarction1, setMyocardialinfarction1] = React.useState("");
    const [anginaandconorarydisease, setAnginaandconorarydisease] = React.useState("");
    const [congestiveheartfailure, setCongestiveheartfailure] = React.useState("");
    const [cardiacarrhythmias, setCardiacarrhythmias] = React.useState("");
    const [hypertension, setHypertension] = React.useState("");
    const [venousdisease, setVenousdisease] = React.useState("");
    const [peripheralarterydisease, setPeripheralarterydisease] = React.useState("");
    const [respiratorydisease, setRespiratorydisease] = React.useState("");
    const [hepaticdisease, setHepaticdisease] = React.useState("");
    const [stomachandintestinalinfection, setStomachandintestinalinfection] = React.useState("");
    const [pancreaticdisease, setPancreaticdisease] = React.useState("");
    const [endstageretinaldisease, setEndstageretinaldisease] = React.useState("");
    const [stroke, setStroke] = React.useState("");
    const [paralysis, setParalysis] = React.useState("");
    const [neuromusculardisorder, setNeuromusculardisorder] = React.useState("");
    const [psychiaticdisorder, setPsychiatricdisorder] = React.useState("");
    const [rheumatologicdisorder, setRheumatologicdisorder] = React.useState("");
    const [leukemiaormyeloma, setLeukemiaormyeloma] = React.useState("");
    const [alcohol, setAlcohol] = React.useState("");
    const [drug, setDrug] = React.useState("");
    const [obesity, setObesity] = React.useState("");
    const [overallcomorbidity, setOverallcomorbidity] = React.useState("");
    const [grade, setGrade] = React.useState("");
    const [moderatecomorbidity, setModeratecomorbidity] = React.useState("");
    const [severecomorbidity, setSeverecomorbidity] = React.useState("");

    // Family History of Cancers

    const [familyhistoryofcancer, setFamilyhistoryofcancer] = React.useState("");
    const [cancerdegree, setCancerdegree] = React.useState("");
    const [ageatmalignacy, setAgeatmalignacy] = React.useState("");
    const [cancertype, setCancertype] = React.useState("");
    const [testedforcancer, setTestedforcancer] = React.useState("");
    const [outcome, setOutcome] = React.useState("");
    const [doublerimary, setDoublerimary] = React.useState("");

    // Nutritional History

    const [diet, setDiet] = React.useState("");
    const [meal, setMeal] = React.useState("");


    //  Physical Examination

    const [ps, setPs] = React.useState("");
    const [height, setHeight] = React.useState("");
    const [weight, setWeight] = React.useState("");
    const [weightlosspercentage, setWeightlosspercentage] = React.useState("");
    const [bsa, setBsa] = React.useState("");
    const [bmi, setBmi] = React.useState("");
    const [musclewasting, setMusclewasting] = React.useState("");
    const [otherpositivefindings, setOtherpositivefindings] = React.useState("");

    //  Clinical Examination

    const [primarysite, setPrimarysite] = React.useState("");
    const [clinicalappropriate, setClinicalappropriate] = React.useState("");
    const [siteoftumor, setSiteoftumor] = React.useState("");
    const [tumorsize, setTumorsize] = React.useState("");
    const [reachingmidline, setReachingmidline] = React.useState("");
    const [pipi, setPipi] = React.useState("");
    const [skininvolved, setSkininvolved] = React.useState("");
    const [gfeu, setGfeu] = React.useState("");
    const [boneinvolved, setBoneinvolved] = React.useState("");
    const [osmf, setOsmf] = React.useState("");
    const [leukoplakia, setLeukoplakia] = React.useState("");
    const [erythroplakia, setErythroplakia] = React.useState("");
    const [mouthopening, setMouthopening] = React.useState("");
    const [tougueprotrusion, setTougueprotrusion] = React.useState("");
    const [ctstage, setCtstage] = React.useState("");

    //  Neck Nodes

    const [necknodes, setNecknodes] = React.useState("");
    const [levelofnodes, setLevelofnodes] = React.useState("");
    const [sizeoflargestpalpable, setSizeoflargestpalpable] = React.useState("");
    const [grossene, setGrossene] = React.useState("");
    const [whatsuggestene, setWhatsuggestene] = React.useState("");
    const [contralateralnodes, setContralateralnodes] = React.useState("");
    const [eneinclnodes, setEneinclnodes] = React.useState("");
    const [cnstage, setCnstage] = React.useState("");
    const [cstage, setCstage] = React.useState("");
    const [othersignificantfindings, setOthersignificantfindings] = React.useState("");


    const questions1 = [
        { question: 'Non-Healing Ulcer:', questionType: questionType, questionId: 'c2-0', inputtype: 'dropdown', options: ["Yes", "No"], value: nonhealingulcer, setValue: setNonhealingulcer, heading: "Symptoms and Signs" },
        { question: 'Non-Healing Ulcer Duration (days):', questionType: questionType, questionId: 'c2-1', inputtype: 'text', options: [], value: nonhealingulcerduration, setValue: setNonhealingulcerduration },
        { question: 'Skin Fungation/Ulcer:', questionType: questionType, questionId: 'c2-2', inputtype: 'dropdown', options: ["Yes", "No"], value: skinfungationulcer, setValue: setSkinfungationulcer },
        { question: 'Skin Fungation/Ulcer Duration (days):', questionType: questionType, questionId: 'c2-3', inputtype: 'text', options: [], value: skinfungationulcerduration, setValue: setSkinfungationulcerduration },
        { question: 'Pain:', questionType: questionType, questionId: 'c2-4', inputtype: 'dropdown', options: ["Yes", "No"], value: pain, setValue: setPain },
        { question: 'Pain Duration (days):', questionType: questionType, questionId: 'c2-5', inputtype: 'text', options: [], value: painduration, setValue: setPainduration },
        { question: 'Fatigue:', questionType: questionType, questionId: 'c2-6', inputtype: 'dropdown', options: ["Yes", "No"], value: fatigue, setValue: setFatigue },
        { question: 'Fatigue Duration (days):', questionType: questionType, questionId: 'c2-7', inputtype: 'text', options: [], value: fatigueduration, setValue: setFatigueduration },
        { question: 'Neck Swelling:', questionType: questionType, questionId: 'c2-8', inputtype: 'dropdown', options: ["Yes", "No"], value: neckswelling, setValue: setNeckswelling },
        { question: 'Neck Swelling Duration (days):', questionType: questionType, questionId: 'c2-9', inputtype: 'text', options: [], value: neckswellingduration, setValue: setNeckswellingduration },
        { question: 'Loosing of Teeth:', questionType: questionType, questionId: 'c2-10', inputtype: 'dropdown', options: ["Yes", "No"], value: loosingteeth, setValue: setLoosingteeth },
        { question: 'Loosing Teeth Duration (days):', questionType: questionType, questionId: 'c2-11', inputtype: 'text', options: [], value: loosingteethduration, setValue: setLoosingteethduration },
        { question: 'Weight Loss (more than 10% in 6 months or more than 5% in 3 months):', questionType: questionType, questionId: 'c2-12', inputtype: 'dropdown', options: ["Yes", "No"], value: weightloss, setValue: setWeightloss },
        { question: 'Weight Loss Duration (days):', questionType: questionType, questionId: 'c2-13', inputtype: 'text', options: [], value: weightlossduration, setValue: setWeightlossduration },
        { question: 'Denture Use:', questionType: questionType, questionId: 'c2-14', inputtype: 'dropdown', options: ["Yes", "No"], value: dentureuse, setValue: setDentureuse },
        { question: 'Denture Use Duration (days):', questionType: questionType, questionId: 'c2-15', inputtype: 'text', options: [], value: dentureuseduration, setValue: setDentureuseduration },
        { question: 'Reduced Mouth Opening:', questionType: questionType, questionId: 'c2-16', inputtype: 'dropdown', options: ["Yes", "No"], value: reducedmouthopening, setValue: setReducedmouthopening },
        { question: 'Reduced Mouth Opening Duration (days):', questionType: questionType, questionId: 'c2-17', inputtype: 'text', options: [], value: reducedmouthopeningduration, setValue: setReducedmouthopeningduration },
        { question: 'Past History of Cancer Rx:', questionType: questionType, questionId: 'c2-18', inputtype: 'dropdown', options: ["Yes", "No"], value: pasthistoryofcancer, setValue: setPasthistoryofcancer },
        { question: 'Past History of Cancer Rx Duration (days):', questionType: questionType, questionId: 'c2-19', inputtype: 'text', options: [], value: pasthistoryofcancerduration, setValue: setPasthistoryofcancerduration },
        { question: 'Others (please mention):', questionType: questionType, questionId: 'c2-24', inputtype: 'text', options: [], value: other, setValue: setOther },
        { question: 'Past History Treatment if any:', questionType: questionType, questionId: 'c2-20', inputtype: 'text', options: [], value: pasthistorytreatment, setValue: setPasthistorytreatment },
        { question: 'Duration in day (presenting symptom to presentation to first physician/ primary care):', questionType: questionType, questionId: 'c2-21', inputtype: 'text', options: [], value: pasthistorytreatmentduration1, setValue: setPasthistorytreatmentduration1 },
        { question: 'Duration in day (primary physician referred to cancer centre/enrolling institute):', questionType: questionType, questionId: 'c2-22', inputtype: 'text', options: [], value: pasthistorytreatmentduration2, setValue: setPasthistorytreatmentduration2 },
        { question: 'Duration in day (day of presentation to enrolling institute to start of treatment):', questionType: questionType, questionId: 'c2-23', inputtype: 'text', options: [], value: pasthistorytreatmentduration3, setValue: setPasthistorytreatmentduration3 },

    ]

    const questions2 = [
        { question: 'Age:', questionType: questionType, questionId: 'c2-25', inputtype: 'text', options: [], value: age, setValue: setAge, heading: "Comorbidities" },
        { question: 'Myocardial Infarction History of definite or probable MI (EKG changes and/or enzyme changes):', questionType: questionType, questionId: 'c2-26', inputtype: 'text', options: ["Yes", "No"], value: myocardialinfarction, setValue: setMyocardialinfarction },
        { question: 'CHF:', questionType: questionType, questionId: 'c2-27', inputtype: 'text', options: ["Yes", "No"], value: chf, setValue: setChf },
        { question: 'Peripheral Vascular Disease:', questionType: questionType, questionId: 'c2-28', inputtype: 'text', options: ["Yes", "No"], value: peripheralvascular, setValue: setPeripheralvascular },
        { question: 'CVA cerebrovascular accident / TIA transient ischemic attacks:', questionType: questionType, questionId: 'c2-29', inputtype: 'text', options: ["Yes", "No"], value: cva, setValue: setCva },
        { question: 'Dementia:', questionType: questionType, questionId: 'c2-30', inputtype: 'text', options: ["Yes", "No"], value: dementia, setValue: setDementia },
        { question: 'COPD:', questionType: questionType, questionId: 'c2-31', inputtype: 'text', options: ["Yes", "No"], value: copd, setValue: setCopd },
        { question: 'Connective Tissue Disease:', questionType: questionType, questionId: 'c2-32', inputtype: 'text', options: ["Yes", "No"], value: connectivetissuedisease, setValue: setConnectivetissuedisease },
        { question: 'Peptic Ulcer Disease:', questionType: questionType, questionId: 'c2-33', inputtype: 'text', options: ["Yes", "No"], value: pepticulcer, setValue: setPepticulcer },
        { question: 'Liver Disease:', questionType: questionType, questionId: 'c2-34', inputtype: 'text', options: ["Yes", "No"], value: liverrdisease, setValue: setLiverrdisease },
        { question: 'Diabetes Mellitus:', questionType: questionType, questionId: 'c2-35', inputtype: 'text', options: ["Yes", "No"], value: diabetes, setValue: setDiabetes },
        { question: 'Hemiplegia:', questionType: questionType, questionId: 'c2-36', inputtype: 'text', options: ["Yes", "No"], value: hemiplegia, setValue: setHemiplegia },
        { question: 'Moderate to Severe CKD:', questionType: questionType, questionId: 'c2-37', inputtype: 'text', options: ["Yes", "No"], value: ckd, setValue: setCkd },
        { question: 'Solid Tumor:', questionType: questionType, questionId: 'c2-38', inputtype: 'text', options: ["Yes", "No"], value: solidtumor, setValue: setSolidtumor },
        { question: 'Leukemia:', questionType: questionType, questionId: 'c2-39', inputtype: 'text', options: ["Yes", "No"], value: leukemia, setValue: setLeukemia },
        { question: 'Lymphoma:', questionType: questionType, questionId: 'c2-40', inputtype: 'text', options: ["Yes", "No"], value: lymphoma, setValue: setLymphoma },
        { question: 'AIDS:', questionType: questionType, questionId: 'c2-41', inputtype: 'text', options: ["Yes", "No"], value: aids, setValue: setAids },
        { question: 'Points Score:', questionType: questionType, questionId: 'c2-42', inputtype: 'text', options: [], value: pointscore, setValue: setPointscore },
        { question: 'Estimated 10-Year Survival:', questionType: questionType, questionId: 'c2-43', inputtype: 'text', options: [], value: estimatedsurvival, setValue: setEstimatedsurvival },

    ]

    const questions3 = [
        { question: 'Myocardial Infarction:', questionType: questionType, questionId: 'c2-44', inputtype: 'text', options: [], value: myocardialinfarction1, setValue: setMyocardialinfarction1, heading: "Adult Comorbidity Evaluation-27 (ACE-27)" },
        { question: 'Angina and Coronary Disease:', questionType: questionType, questionId: 'c2-45', inputtype: 'text', options: [], value: anginaandconorarydisease, setValue: setAnginaandconorarydisease },
        { question: "Congestive Heart Failure:", questionType: questionType, questionId: 'c2-46', inputtype: 'text', options: [], value: congestiveheartfailure, setValue: setCongestiveheartfailure },
        { question: "Cardial Arrhythmia:", questionType: questionType, questionId: 'c2-47', inputtype: 'text', options: [], value: cardiacarrhythmias, setValue: setCardiacarrhythmias },
        { question: "Hypertension:", questionType: questionType, questionId: 'c2-48', inputtype: 'text', options: [], value: hypertension, setValue: setHypertension },
        { question: "Venous Disease:", questionType: questionType, questionId: 'c2-49', inputtype: 'text', options: [], value: venousdisease, setValue: setVenousdisease },
        { question: "Peripheral Artery Disease:", questionType: questionType, questionId: 'c2-50', inputtype: 'text', options: [], value: peripheralarterydisease, setValue: setPeripheralarterydisease },
        { question: "Respiratory Disease:", questionType: questionType, questionId: 'c2-51', inputtype: 'text', options: [], value: respiratorydisease, setValue: setRespiratorydisease },
        { question: "Hepatic Disease:", questionType: questionType, questionId: 'c2-52', inputtype: 'text', options: [], value: hepaticdisease, setValue: setHepaticdisease },
        { question: "Stomach and Intestinal Disease:", questionType: questionType, questionId: 'c2-53', inputtype: 'text', options: [], value: stomachandintestinalinfection, setValue: setStomachandintestinalinfection },
        { question: "Pancreatic Disease:", questionType: questionType, questionId: 'c2-54', inputtype: 'text', options: [], value: pancreaticdisease, setValue: setPancreaticdisease },
        { question: "End Stage Renal Disease:", questionType: questionType, questionId: 'c2-55', inputtype: 'text', options: [], value: endstageretinaldisease, setValue: setEndstageretinaldisease },
        { question: "Stroke:", questionType: questionType, questionId: 'c2-56', inputtype: 'text', options: [], value: stroke, setValue: setStroke },
        { question: "Paralysis:", questionType: questionType, questionId: 'c2-57', inputtype: 'text', options: [], value: paralysis, setValue: setParalysis },
        { question: "Neuromuscular Disorder:", questionType: questionType, questionId: 'c2-58', inputtype: 'text', options: [], value: neuromusculardisorder, setValue: setNeuromusculardisorder },
        { question: "Psychiatric Disorder:", questionType: questionType, questionId: 'c2-59', inputtype: 'text', options: [], value: psychiaticdisorder, setValue: setPsychiatricdisorder },
        { question: "Rheumatologic Disorder:", questionType: questionType, questionId: 'c2-60', inputtype: 'text', options: [], value: rheumatologicdisorder, setValue: setRheumatologicdisorder },
        { question: "Leukemia or Myeloma:", questionType: questionType, questionId: 'c2-61', inputtype: 'text', options: [], value: leukemiaormyeloma, setValue: setLeukemiaormyeloma },
        // { question: "Lymphoma:", questionType: questionType, questionId: 'c2-62', inputtype: 'text', options: [], value: lymphoma, setValue: setLymphoma },
        { question: "Alcohol:", questionType: questionType, questionId: 'c2-63', inputtype: 'text', options: [], value: alcohol, setValue: setAlcohol },
        { question: "Illicit Drugs:", questionType: questionType, questionId: 'c2-64', inputtype: 'text', options: [], value: drug, setValue: setDrug },
        { question: "Obesity:", questionType: questionType, questionId: 'c2-65', inputtype: 'text', options: [], value: obesity, setValue: setObesity },
        { question: "Overall Comorbidity:", questionType: questionType, questionId: 'c2-66', inputtype: 'text', options: [], value: overallcomorbidity, setValue: setOverallcomorbidity },
        { question: "Grade:", questionType: questionType, questionId: 'c2-67', inputtype: 'text', options: [], value: grade, setValue: setGrade },
        { question: "No. of Items with Moderate Comorbidities:", questionType: questionType, questionId: 'c2-68', inputtype: 'text', options: [], value: moderatecomorbidity, setValue: setModeratecomorbidity },
        { question: "No. of Items with Severe Comorbidities:", questionType: questionType, questionId: 'c2-69', inputtype: 'text', options: [], value: severecomorbidity, setValue: setSeverecomorbidity },

    ]

    const questions4 = [
        { question: "Cancer History in Family:", questionType: questionType, questionId: 'c3-1', inputtype: 'dropdown', options: ["Yes", "No"], value: familyhistoryofcancer, setValue: setFamilyhistoryofcancer, heading: "Family History of Cancer" },
        { question: "Degree (1st Degree/2nd Degree):", questionType: questionType, questionId: 'c3-2', inputtype: 'dropdown', options: ["1st Degree", "2nd Degree", "Not Applicable"], value: cancerdegree, setValue: setCancerdegree },
        { question: "Age at Malignancy:", questionType: questionType, questionId: 'c3-3', inputtype: 'text', options: [], value: ageatmalignacy, setValue: setAgeatmalignacy },
        { question: "Type of Cancer:", questionType: questionType, questionId: 'c3-4', inputtype: 'text', options: [], value: cancertype, setValue: setCancertype },
        { question: "Tested/Non-Tested for Cancer:", questionType: questionType, questionId: 'c3-5', inputtype: 'dropdown', options: ["Tested", "Not Tested"], value: testedforcancer, setValue: setTestedforcancer },
        { question: "Outcome (Alive/Dead):", questionType: questionType, questionId: 'c3-6', inputtype: 'dropdown', options: ["Alive", "Dead"], value: outcome, setValue: setOutcome },
        { question: "Double Primary (Yes/No):", questionType: questionType, questionId: 'c3-7', inputtype: 'dropdown', options: ["Yes", "No"], value: doublerimary, setValue: setDoublerimary },

    ]

    const questions5 = [
        { question: "Diet:", questionType: questionType, questionId: 'c4-1', inputtype: 'dropdown', options: ["Vegetarian", "Non-Vegetarian", "Mixed"], value: diet, setValue: setDiet, heading: "Nutritional History" },
        { question: "Meal:", questionType: questionType, questionId: 'c4-2', inputtype: 'dropdown', options: ["Regular", "Irregular"], value: meal, setValue: setMeal },

    ]

    const questions6 = [
        { question: "PS(ECOG):", questionType: questionType, questionId: 'c5-1', inputtype: 'text', options: [], value: ps, setValue: setPs, heading: "Physical Examination" },
        { question: "Height (cms):", questionType: questionType, questionId: 'c5-2', inputtype: 'text', options: [], value: height, setValue: setHeight },
        { question: "Weight (kgs):", questionType: questionType, questionId: 'c5-3', inputtype: 'text', options: [], value: weight, setValue: setWeight },
        { question: "Weight Loss (%):", questionType: questionType, questionId: 'c5-4', inputtype: 'text', options: [], value: weightlosspercentage, setValue: setWeightlosspercentage },
        { question: "BSA (/m2):", questionType: questionType, questionId: 'c5-5', inputtype: 'text', options: [], value: bsa, setValue: setBsa },
        { question: "BMI (kg/m2):", questionType: questionType, questionId: 'c5-6', inputtype: 'text', options: [], value: bmi, setValue: setBmi },
        { question: "Muscle Wasting:", questionType: questionType, questionId: 'c5-7', inputtype: 'dropdown', options: ["General", "Temporal"], value: musclewasting, setValue: setMusclewasting },
        { question: "Other Positive Finding:", questionType: questionType, questionId: 'c5-8', inputtype: 'text', options: [], value: otherpositivefindings, setValue: setOtherpositivefindings },

    ]


    const questions7 = [
        { question: "Primary Site:", questionType: questionType, questionId: 'c6-1', inputtype: 'text', options: [], value: primarysite, setValue: setPrimarysite, heading: "Clinical Examination" },
        { question: "Select the most appropriate one:", questionType: questionType, questionId: 'c6-2', inputtype: 'dropdown', options: ["Buccal Mucosa", "Upper GBS", "Lower GBS", "Upper Alveolus", "Lower Alveolus", "RMT", "FOM", "Oral Tougue"], value: clinicalappropriate, setValue: setClinicalappropriate },
        { question: "Site of tumor (Epicenter)-Right or Left:", questionType: questionType, questionId: 'c6-3', inputtype: 'dropdown', options: ["Right", "Left"], value: siteoftumor, setValue: setSiteoftumor },
        { question: "Reaching Midline:", questionType: questionType, questionId: 'c6-4', inputtype: 'dropdown', options: ["Yes", "No"], value: reachingmidline, setValue: setReachingmidline },
        { question: "Size (cm):", questionType: questionType, questionId: 'c6-5', inputtype: 'text', options: [], value: tumorsize, setValue: setTumorsize },
        { question: "Proliferative/Infiltrative/Prolifero-infilterative:", questionType: questionType, questionId: 'c6-6', inputtype: 'dropdown', options: ["Proliferative", "Infiltrative", "Prolifero-infilterative"], value: pipi, setValue: setPipi },
        { question: "Skin Involved:", questionType: questionType, questionId: 'c6-7', inputtype: 'dropdown', options: ["Yes", "No"], value: skininvolved, setValue: setSkininvolved },
        { question: "Gross Fungation/Edema/Ulceration:", questionType: questionType, questionId: 'c6-8', inputtype: 'dropdown', options: ["Gross Fungation", "Edema", "Ulceration"], value: gfeu, setValue: setGfeu },
        { question: "Bone Involved:", questionType: questionType, questionId: 'c6-9', inputtype: 'dropdown', options: ["Yes", "No"], value: boneinvolved, setValue: setBoneinvolved },
        { question: "OSMF:", questionType: questionType, questionId: 'c6-10', inputtype: 'dropdown', options: ["Yes", "No"], value: osmf, setValue: setOsmf },
        { question: "Leukoplakia:", questionType: questionType, questionId: 'c6-11', inputtype: 'dropdown', options: ["Yes", "No"], value: leukoplakia, setValue: setLeukoplakia },
        { question: "Erythroplakia:", questionType: questionType, questionId: 'c6-12', inputtype: 'dropdown', options: ["Yes", "No"], value: erythroplakia, setValue: setErythroplakia },
        { question: "Mouth Opening (cm):", questionType: questionType, questionId: 'c6-13', inputtype: 'text', options: [], value: mouthopening, setValue: setMouthopening },
        { question: "Tongue Protrusion:", questionType: questionType, questionId: 'c6-14', inputtype: 'dropdown', options: ["Restricted", "Normal"], value: tougueprotrusion, setValue: setTougueprotrusion },
        { question: "CT Stage:", questionType: questionType, questionId: 'c6-15', inputtype: 'text', options: [], value: ctstage, setValue: setCtstage },

    ]

    const questions8 = [
        { question: "Number of Palpable Nodes:", questionType: questionType, questionId: 'c7-1', inputtype: 'text', options: [], value: necknodes, setValue: setNecknodes, heading: "Neck Nodes" },
        { question: "Level :", questionType: questionType, questionId: 'c7-2', inputtype: 'dropdown', options: ["1", "2a", "2b", "3", "4", "5"], value: levelofnodes, setValue: setLevelofnodes },
        { question: "Size of Largest Palpable Node (cm):", questionType: questionType, questionId: 'c7-3', inputtype: 'text', options: [], value: sizeoflargestpalpable, setValue: setSizeoflargestpalpable },
        { question: "Gross ENE:", questionType: questionType, questionId: 'c7-4', inputtype: 'dropdown', options: ["Yes", "No"], value: grossene, setValue: setGrossene },
        { question: "What suggests ENE:", questionType: questionType, questionId: 'c7-5', inputtype: 'dropdown', options: ["Skin Invasion", "Muscle Invasion", "Vessel"], value: whatsuggestene, setValue: setWhatsuggestene },
        { question: "Contralateral Nodes (C/L):", questionType: questionType, questionId: 'c7-6', inputtype: 'dropdown', options: ["Yes", "No"], value: contralateralnodes, setValue: setContralateralnodes },
        { question: "ENE in C/L Nodes:", questionType: questionType, questionId: 'c7-7', inputtype: 'dropdown', options: ["Yes", "No"], value: eneinclnodes, setValue: setEneinclnodes },
        { question: "c N Stage:", questionType: questionType, questionId: 'c7-8', inputtype: 'text', options: [], value: cnstage, setValue: setCnstage },
        { question: "c Stage:", questionType: questionType, questionId: 'c7-9', inputtype: 'text', options: [], value: cstage, setValue: setCstage },
        { question: "Other Significant Findings:", questionType: questionType, questionId: 'c7-10', inputtype: 'text', options: [], value: othersignificantfindings, setValue: setOthersignificantfindings },

    ]

    interface Question {
        question: string;
        subQuestions?: string[];
        options: string[];
        inputtype: string;
        value: string;
        setValue: (value: string) => void;
        heading?: string;
        
    }
    
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
                const questionsArray = [questions1, questions2, questions3, questions4, questions5, questions6, questions7, questions8]
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
    //   const alphaspecial = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',"!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "-", "{", "}", "[", "]", ":", ";", "'", '"', "<", ">", ",", ".", "?", "/", "|", "\\", "~", "`"];
            const numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        const special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "-", "{", "}", "[", "]", ":", ";", "'", '"', "<", ">", ",", ".", "?", "/", "|", "\\", "~", "`"];
        const alphaspecial = [...alpha, ...special];

    const handleSubmit1 = () => {
        if (
            
            alphaspecial.some(i => nonhealingulcerduration.includes(i)) ||
            alphaspecial.some(i => skinfungationulcerduration.includes(i)) ||
            alphaspecial.some(i => painduration.includes(i)) ||
            alphaspecial.some(i => fatigueduration.includes(i)) ||
            alphaspecial.some(i => neckswellingduration.includes(i)) ||
            alphaspecial.some(i => weightlossduration.includes(i)) ||
            alphaspecial.some(i => dentureuseduration.includes(i)) ||
            alphaspecial.some(i => reducedmouthopeningduration.includes(i)) ||
            alphaspecial.some(i => pasthistoryofcancerduration.includes(i)) ||
            alphaspecial.some(i => pasthistorytreatmentduration1.includes(i)) ||
            alphaspecial.some(i => pasthistorytreatmentduration2.includes(i)) ||
            alphaspecial.some(i => pasthistorytreatmentduration3.includes(i)) 


            


        ) {
            if (alphaspecial.some(i => nonhealingulcerduration.includes(i))) {
                toast({
                    title: "Error",
                    description: "Non-healing ulcer duration data is invalid.",
                    variant: "destructive",
                });
            }
            
            if (alphaspecial.some(i => skinfungationulcerduration.includes(i))) {
                toast({
                    title: "Error",
                    description: "Skin fungation ulcer duration data is invalid.",
                    variant: "destructive",
                });
            }
            
            if (alphaspecial.some(i => painduration.includes(i))) {
                toast({
                    title: "Error",
                    description: "Pain duration data is invalid.",
                    variant: "destructive",
                });
            }
            
            if (alphaspecial.some(i => fatigueduration.includes(i))) {
                toast({
                    title: "Error",
                    description: "Fatigue duration data is invalid.",
                    variant: "destructive",
                });
            }
            
            if (alphaspecial.some(i => neckswellingduration.includes(i))) {
                toast({
                    title: "Error",
                    description: "Neck swelling duration data is invalid.",
                    variant: "destructive",
                });
            }
            
            if (alphaspecial.some(i => weightlossduration.includes(i))) {
                toast({
                    title: "Error",
                    description: "Weight loss duration data is invalid.",
                    variant: "destructive",
                });
            }
            
            if (alphaspecial.some(i => dentureuseduration.includes(i))) {
                toast({
                    title: "Error",
                    description: "Denture use duration data is invalid.",
                    variant: "destructive",
                });
            }
            
            if (alphaspecial.some(i => reducedmouthopeningduration.includes(i))) {
                toast({
                    title: "Error",
                    description: "Reduced mouth opening duration data is invalid.",
                    variant: "destructive",
                });
            }
            
            if (alphaspecial.some(i => pasthistoryofcancerduration.includes(i))) {
                toast({
                    title: "Error",
                    description: "Past history of cancer duration data is invalid.",
                    variant: "destructive",
                });
            }
            
            if (alphaspecial.some(i => pasthistorytreatmentduration1.includes(i))) {
                toast({
                    title: "Error",
                    description: "Past history treatment duration (presenting symptom to presentation to first physician/ primary care) data is invalid.",
                    variant: "destructive",
                });
            }
            
            if (alphaspecial.some(i => pasthistorytreatmentduration2.includes(i))) {
                toast({
                    title: "Error",
                    description: "Past history treatment duration (primary physician referred to cancer centre/enrolling institute) data is invalid.",
                    variant: "destructive",
                });
            }
            
            if (alphaspecial.some(i => pasthistorytreatmentduration3.includes(i))) {
                toast({
                    title: "Error",
                    description: "Past history treatment duration (day of presentation to enrolling institute to start of treatment) data is invalid.",
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
                            setTabValue("Comorbidities")
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
           

            ( (alpha.some(i => age.includes(i)) || special.some(i => age.includes(i))) || age.length > 2 ) 

            // age === "" ||
            // myocardialinfarction === "" ||
            // chf === "" ||
            // copd === "" ||
            // connectivetissuedisease === "" ||
            // dementia === "" ||
            // pepticulcer === "" ||
            // cva === "" ||
            // peripheralvascular === "" ||
            // diabetes === "" ||
            // liverrdisease === "" ||
            // aids === "" ||
            // pointscore === "" ||
            // estimatedsurvival === "" ||
            // hemiplegia === "" ||
            // ckd === "" ||
            // solidtumor === "" ||
            // leukemia === "" ||
            // lymphoma === "" 

            
            



        ) {
            toast({
                title: "Error",
                description: "Enter valid age data",
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
                            setTabValue("Adult Comorbidity Evaluation-27")
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
            

            alphaspecial.some(i => moderatecomorbidity.includes(i)) || 
            alphaspecial.some(i => severecomorbidity.includes(i)) 
            // drug === "" ||
            // obesity === "" ||
            // overallcomorbidity === "" ||
            // grade === "" ||
            // moderatecomorbidity === "" ||
            // severecomorbidity === "" ||
            // myocardialinfarction1 === "" ||
            // anginaandconorarydisease === "" ||
            // congestiveheartfailure === "" ||
            // cardiacarrhythmias === "" ||
            // hypertension === "" ||
            // venousdisease === "" ||
            // peripheralarterydisease === "" ||
            // respiratorydisease === "" ||
            // hepaticdisease === "" ||
            // stomachandintestinalinfection === "" ||
            // pancreaticdisease === "" ||
            // endstageretinaldisease === "" ||
            // stroke === "" ||
            // paralysis === "" ||
            // neuromusculardisorder === "" ||
            // psychiaticdisorder === "" ||
            // rheumatologicdisorder === "" ||
            // leukemiaormyeloma === "" ||
            // alcohol === "" 

            

           


        ) {
            if (alphaspecial.some(i => moderatecomorbidity.includes(i))) {
                toast({
                    title: "Error",
                    description: "Invalid moderate comorbidity",
                    variant: "destructive",
                });
            } else if (alphaspecial.some(i => severecomorbidity.includes(i))) {
                toast({
                    title: "Error",
                    description: "Invalid severe comorbidity",
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
                            setTabValue("Family History of Cancers")
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
           
            alphaspecial.some(i => ageatmalignacy.includes(i)) || ageatmalignacy.length > 2
            // familyhistoryofcancer === "" ||
            // cancerdegree === "" ||
            // ageatmalignacy === "" ||
            // cancertype === "" ||
            // testedforcancer === "" ||
            // outcome === "" ||
            // doublerimary === "" 

            


            



        ) {
            toast({
                title: "Error",
                description: "Please fill valid data for age at malignancy",
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

                            setTabValue("Nutritional History")
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
            


            // diet === "" ||
            // meal === "" 

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
                            setTabValue("Physical Examination")
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

    const handleSubmit6 = () => {
        if (
            
            alpha.some(i => height.includes(i)) || 
            alpha.some(i => weight.includes(i)) || 
            alpha.some(i => weightlosspercentage.includes(i)) || 
            alpha.some(i => bsa.includes(i)) || 
            alpha.some(i => bmi.includes(i)) 

            

            



        ) {
            if (alpha.some(i => height.includes(i))) {
                toast({
                    title: "Warning",
                    description: "Invalid height data",
                    variant: "destructive",
                });
            }
            
            if (alpha.some(i => weight.includes(i))) {
                toast({
                    title: "Warning",
                    description: "Invalid weight data",
                    variant: "destructive",
                });
            }
            
            if (alpha.some(i => weightlosspercentage.includes(i))) {
                toast({
                    title: "Warning",
                    description: "Invalid weight loss percentage data",
                    variant: "destructive",
                });
            }
            
            if (alpha.some(i => bsa.includes(i))) {
                toast({
                    title: "Warning",
                    description: "Invalid BSA data",
                    variant: "destructive",
                });
            }
            
            if (alpha.some(i => bmi.includes(i))) {
                toast({
                    title: "Warning",
                    description: "Invalid BMI data",
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
                        questions: questions6,
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
                            setTabValue("Clinical Examination")
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


    const handleSubmit7 = () => {
        if (
            

            alpha.some(i => tumorsize.includes(i)) || 
            alpha.some(i => mouthopening.includes(i)) 
            // ctstage === ""

            



        ) {
            if (alpha.some(i => tumorsize.includes(i))) {
                toast({
                    title: "Warning",
                    description: "Invalid tumor size data",
                    variant: "destructive",
                });
            }
            
            if (alpha.some(i => mouthopening.includes(i))) {
                toast({
                    title: "Warning",
                    description: "Invalid mouth opening data",
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
                        questions: questions7,
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
                            setTabValue("Neck Nodes")
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


    const handleSubmit8 = () => {
        if (


            

            // necknodes === "" ||
           
            // sizeoflargestpalpable === "" ||

            alpha.some(i => sizeoflargestpalpable.includes(i)) || 
            alphaspecial.some(i => necknodes.includes(i))
            

            



        ) {
            if (alpha.some(i => sizeoflargestpalpable.includes(i))) {
                toast({
                    title: "Warning",
                    description: "Invalid size of largest palpable data",
                    variant: "destructive",
                });
            }
            
            if (alphaspecial.some(i => necknodes.includes(i))) {
                toast({
                    title: "Warning",
                    description: "Invalid neck nodes data",
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
                        questions: questions8,
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
                            router.push("/form/investigations")
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
    if (dataloading) {
        return <div className="flex items-center justify-center h-screen w-full text-3xl font-bold text-green-5 ">
                  <div className="w-[70px] h-[70px] border border-4 border-t-0 border-green-700 rounded-full animate-spin">
                  </div> 
                </div>;
      }


    return (
        <div className=' w-full h-screen'>




            {tabValue==="Symptoms"?<CustomForm questions={questions1} handleSubmit={handleSubmit1} buttontitle="Submit & Next" formtitle="Clinical Profile" loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} />:<></>}
            {tabValue==="Comorbidities"?<CustomForm questions={questions2} handleSubmit={handleSubmit2} buttontitle="Submit & Next" formtitle="Clinical Profile" loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} />:<></>}
            {tabValue==="Adult Comorbidity Evaluation-27"?<CustomForm questions={questions3} handleSubmit={handleSubmit3} buttontitle="Submit & Next" formtitle="Clinical Profile" loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} />:<></>}
            {tabValue==="Family History of Cancers"?<CustomForm questions={questions4} handleSubmit={handleSubmit4} buttontitle="Submit & Next" formtitle="Clinical Profile" loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} />:<></>}
            {tabValue==="Nutritional History"?<CustomForm questions={questions5} handleSubmit={handleSubmit5} buttontitle="Submit & Next" formtitle="Clinical Profile" loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} />:<></>}
            {tabValue==="Physical Examination"?<CustomForm questions={questions6} handleSubmit={handleSubmit6} buttontitle="Submit & Next" formtitle="Clinical Profile" loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} />:<></>}
            {tabValue==="Clinical Examination"?<CustomForm questions={questions7} handleSubmit={handleSubmit7} buttontitle="Submit & Next" formtitle="Clinical Profile" loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} />:<></>}
            {tabValue==="Neck Nodes"?<CustomForm questions={questions8} handleSubmit={handleSubmit8} buttontitle="Submit & Next" formtitle="Clinical Profile" loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} />:<></>}

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
                    <TabsTrigger className='active:bg-green-5' value="Symptoms">1</TabsTrigger>
                    <TabsTrigger value="Comorbidities">2</TabsTrigger>
                    <TabsTrigger value="Adult Comorbidity Evaluation-27">3</TabsTrigger>
                    <TabsTrigger value="Family History of Cancers">4</TabsTrigger>
                    <TabsTrigger value="Nutritional History">5</TabsTrigger>
                    <TabsTrigger value="Physical Examination">6</TabsTrigger>
                    <TabsTrigger value="Clinical Examination">7</TabsTrigger>
                    <TabsTrigger value="Neck Nodes">8</TabsTrigger>
                </TabsList>
            </Tabs>
        </div>
    );
};


export default ClinicalProfile
