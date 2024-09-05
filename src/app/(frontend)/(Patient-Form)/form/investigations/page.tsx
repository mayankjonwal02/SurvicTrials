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

interface updateType {
    questionId: string;
    updates:any[]
}
const Investigations = () =>  {
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
    const questionType = "Investigations";
    const [loading, setLoading] = React.useState(false);
    const [tabValue, setTabValue] = useState("Biopsy");

    // Biopsy
    const [biopsynumber, setBiopsynumber] = React.useState("");
    const [dateofbiopsy, setDateofbiopsy] = React.useState("");
    const [histology, setHistology] = React.useState("");
    const [gradebiopsy, setGradebiopsy] = React.useState("");
    const [anyspecialfeature, setAnyspecialfeature] = React.useState("");



    // Laboratory Tests (on first admission for treatment)
    const [dateoftest_cbc, setDateoftest_cbc] = React.useState("");
    const [dateoftest_rft, setDateoftest_rft] = React.useState("");
    const [dateoftest_lft, setDateoftest_lft] = React.useState("");
    const [cbc, setCbc] = React.useState("");
    const [hb, setHb] = React.useState("");
    const [rbc, setRbc] = React.useState("");
    const [tlc, setTlc] = React.useState("");
    const [neutrophilcount, setNeutrophilcount] = React.useState("");
    const [lymphocytecount, setLymphocytecount] = React.useState("");
    const [monocytecount, setMonocytecount] = React.useState("");
    const [eosinophilcount, setEosinophilcount] = React.useState("");
    const [basophilcount, setBasophilcount] = React.useState("");
    const [largeimmaturecellcount, setLargeimmaturecellcount] = React.useState("");
    const [lic, setLic] = React.useState("");
    const [plateletcount, setPlateletcount] = React.useState("");
    const [covidinpast, setCovidinpast] = React.useState("");
    const [covidvaccine, setCovidvaccine] = React.useState("");
    const [vaccinename, setVaccinename] = React.useState("");
    const [rft, setRft] = React.useState("");
    const [serumcreatinelevel, setSerumcreatinelevel] = React.useState("");
    const [bloodurealevel, setBloodurealevel] = React.useState("");
    const [viralmarkers, setViralmarkers] = React.useState("");
    const [hhh1, setHhh1] = React.useState("");
    const [hhh2, setHhh2] = React.useState("");
    const [hhh3, setHhh3] = React.useState("");
    const [lft, setLft] = React.useState("");
    const [directbilirubin, setDirectbilirubin] = React.useState("");
    const [indirectbilirubin, setIndirectbilirubin] = React.useState("");
    const [as, setAs] = React.useState("");
    const [aasg, setAasg] = React.useState("");
    const [sap, setSap] = React.useState("");
    const [totalprotienlevel, setTotalprotienlevel] = React.useState("");
    const [albumin, setAlbumin] = React.useState("");
    const [agratio, setAgratio] = React.useState("");
    const [ejectionfraction, setEjectionfraction] = React.useState("");
    const [ecg, setEcg] = React.useState("");
    const [cholestrol, setCholestrol] = React.useState("");
    const [crp, setCrp] = React.useState("");



    // Radiology
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
    const [metastaticWorkup, setMetastaticWorkup] = useState('');
    const [date_part3, setDate_part3] = useState('');
    const [lesion1Location, setLesion1Location] = useState('');
    const [lesion1Size, setLesion1Size] = useState('');
    const [lesion1Marked, setLesion1Marked] = useState('');

    const [lesion2Location, setLesion2Location] = useState('');
    const [lesion2Size, setLesion2Size] = useState('');
    const [lesion2Marked, setLesion2Marked] = useState('');

    const [lesion3Location, setLesion3Location] = useState('');
    const [lesion3Size, setLesion3Size] = useState('');
    const [lesion3Marked, setLesion3Marked] = useState('');
    const [responseCategory1, setResponseCategory1] = useState('');

    const [updates, setUpdates] = useState<updateType[]>([]);

    

    const alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    const alphaspecial = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',"!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "-", "{", "}", "[", "]", ":", ";", "'", '"', "<", ">", ",", ".", "?", "/", "|", "\\", "~", "`"];



    const questions1 = [
         { question: 'Biopsy Number', questionType: questionType, questionId: 'i-1', inputtype: 'text', options: [], value: biopsynumber, setValue: setBiopsynumber , heading: "Biopsy"},
         { question: 'Date of Biopsy', questionType: questionType, questionId: 'i-2', inputtype: 'date', options: [], value: dateofbiopsy, setValue: setDateofbiopsy },
         { question: "Histology", questionType: questionType, questionId: 'i-3', inputtype: 'text', options: [], value: histology, setValue: setHistology },
         { question: "Grade (Biopsy):", questionType: questionType, questionId: 'i-4', inputtype: 'dropdown', options: ["1","2","3"], value: gradebiopsy, setValue: setGradebiopsy },
         { question: "Any Special Features", questionType: questionType, questionId: 'i-5', inputtype: 'text', options: [], value: anyspecialfeature, setValue: setAnyspecialfeature },
    ]

    const questions2 = [
        { question: 'Date of Test - CBC', questionType: questionType, questionId: 'i-6_0', inputtype: 'date', options: [], value: dateoftest_cbc, setValue: setDateoftest_cbc, heading: "Laboratory Tests " },
        { question: 'Study timeline:', questionType: questionType, questionId: 'i-6', inputtype: 'text', options: [], value: cbc, setValue: setCbc , restriction: alpha.some(i => cbc.includes(i)), restrictiontext: 'Alphabets and Numbers are not Allowed' },
        { question: 'Hemoglobin (Hb):', questionType: questionType, questionId: 'i-7', inputtype: 'text', options: [], value: hb, setValue: setHb },
        { question: "Red Blood Cell Count (RBC) (10^6/uL):", questionType: questionType, questionId: 'i-8', inputtype: 'text', options: [], value: rbc, setValue: setRbc, restriction: alpha.some(i => rbc.includes(i)), restrictiontext: 'Alphabets and Numbers are not Allowed' },
        { question: "Total Leukocyte Count (TLC) (10^3/uL):", questionType: questionType, questionId: 'i-9', inputtype: 'text', options: [], value: tlc, setValue: setTlc, restriction: alpha.some(i => tlc.includes(i)), restrictiontext: 'Alphabets and Numbers are not Allowed' },
        { question: "Neutrophil Count (10^3/uL):", questionType: questionType, questionId: 'i-10', inputtype: 'text', options: [], value: neutrophilcount, setValue: setNeutrophilcount, restriction: alpha.some(i => neutrophilcount.includes(i)), restrictiontext: 'Alphabets and Numbers are not Allowed' },
        { question: "Lymphocyte Count (10^3/uL):", questionType: questionType, questionId: 'i-11', inputtype: 'text', options: [], value: lymphocytecount, setValue: setLymphocytecount, restriction: alpha.some(i => lymphocytecount.includes(i)), restrictiontext: 'Alphabets and Numbers are not Allowed' },
        { question: "Monocyte Count (10^3/uL):", questionType: questionType, questionId: 'i-12', inputtype: 'text', options: [], value: monocytecount, setValue: setMonocytecount, restriction: alpha.some(i => monocytecount.includes(i)), restrictiontext: 'Alphabets and Numbers are not Allowed' },
        { question: "Eosinophil Count (10^3/uL):", questionType: questionType, questionId: 'i-13', inputtype: 'text', options: [], value: eosinophilcount, setValue: setEosinophilcount, restriction: alpha.some(i => eosinophilcount.includes(i)), restrictiontext: 'Alphabets and Numbers are not Allowed' },
        { question: "Basophil Count (10^3/uL):", questionType: questionType, questionId: 'i-14', inputtype: 'text', options: [], value: basophilcount, setValue: setBasophilcount, restriction: alpha.some(i => basophilcount.includes(i)), restrictiontext: 'Alphabets and Numbers are not Allowed' },
        { question: "Large Immature Cells (LIC) Count (10^3/uL):", questionType: questionType, questionId: 'i-16', inputtype: 'text', options: [], value: lic, setValue: setLic, restriction: alpha.some(i => lic.includes(i)), restrictiontext: 'Alphabets and Numbers are not Allowed' },
        { question: "Platelet Count (10^3/uL):", questionType: questionType, questionId: 'i-17', inputtype: 'text', options: [], value: plateletcount, setValue: setPlateletcount, restriction: alpha.some(i => plateletcount.includes(i)), restrictiontext: 'Alphabets and Numbers are not Allowed' },
        { question: "Date of Test - RFT:", questionType: questionType, questionId: 'i-15', inputtype: 'date', options: [], value: dateoftest_rft, setValue: setDateoftest_rft },
        { question: "Date of Test - LFT:", questionType: questionType, questionId: 'i-15_0', inputtype: 'date', options: [], value: dateoftest_lft, setValue: setDateoftest_lft },

        { question: "Renal Function Test (RFT) - Creatinine Clearance:", questionType: questionType, questionId: 'i-21', inputtype: 'text', options: [], value: rft, setValue: setRft },
        { question: "Serum Creatinine Level:",questionType: questionType, questionId: 'i-36', inputtype: 'text', options: [], value: serumcreatinelevel, setValue: setSerumcreatinelevel },
        { question: "Blood Urea Level:", questionType: questionType, questionId: 'i-22', inputtype: 'text', options: [], value: bloodurealevel, setValue: setBloodurealevel },
        { question: "Date of Viral Markers:", questionType: questionType, questionId: 'i-23', inputtype: 'date', options: [], value: viralmarkers, setValue: setViralmarkers },
        { question: "Hepatitis B Surface Antigen (HBsAg) :", questionType: questionType, questionId: 'i-24', inputtype: 'dropdown', options: ["Positive","Negative"], value: hhh1, setValue: setHhh1 },
        { question: " Hepatitis C Virus (HCV) :", questionType: questionType, questionId: 'i-24_0', inputtype: 'dropdown', options: ["Positive","Negative"], value: hhh2, setValue: setHhh2 },
        { question: "Human Immunodeficiency Virus (HIV):", questionType: questionType, questionId: 'i-24_1', inputtype: 'dropdown', options: ["Positive","Negative"], value: hhh3, setValue: setHhh3 },

        { question: "Liver Function Test (LFT) - Total Bilirubin (mg%) (T):", questionType: questionType, questionId: 'i-25', inputtype: 'text', options: [], value: lft, setValue: setLft, restriction: alpha.some(i => lft.includes(i)), restrictiontext: 'Alphabets and Numbers are not Allowed' },
        { question: "Direct Bilirubin (mg%) (D):", questionType: questionType, questionId: 'i-26', inputtype: 'text', options: [], value: directbilirubin, setValue: setDirectbilirubin, restriction: alpha.some(i => directbilirubin.includes(i)), restrictiontext: 'Alphabets and Numbers are not Allowed' },
        { question: "Indirect Bilirubin (mg%) (I):", questionType: questionType, questionId: 'i-27', inputtype: 'text', options: [], value: indirectbilirubin, setValue: setIndirectbilirubin, restriction: alpha.some(i => indirectbilirubin.includes(i)), restrictiontext: 'Alphabets and Numbers are not Allowed' },
        { question: "Aspartate Aminotransferase (AST) / Serum Glutamic Oxaloacetic Transaminase (SGOT):", questionType: questionType, questionId: 'i-28', inputtype: 'dropdown', options: ["AST", "SGOT"], value: as, setValue: setAs },
        { question: "Alanine Aminotransferase (ALT) / Serum Glutamic Pyruvic Transaminase (SGPT):", questionType:questionType, questionId: 'i-29', inputtype: 'dropdown', options: ["ALT", "SGPT"], value: aasg, setValue: setAasg },
        { question: "Serum Alkaline Phosphatase (SAP):", questionType: questionType, questionId: 'i-30', inputtype: 'text', options: [], value: sap, setValue: setSap },
        { question:"Total Protein Level:", questionType: questionType, questionId: 'i-31', inputtype: 'text', options: [], value: totalprotienlevel, setValue: setTotalprotienlevel },
        { question:"Albumin Level:",questionType:questionType, questionId: 'i-32', inputtype: 'text', options: [], value: albumin, setValue: setAlbumin },
        { question:"Albumin/Globulin (A/G) Ratio:", questionType: questionType, questionId: 'i-33', inputtype: 'text', options: [], value: agratio, setValue: setAgratio },
        { question: "Ejection Fraction:", questionType:questionType, questionId: 'i-34', inputtype: 'text', options: [], value: ejectionfraction, setValue: setEjectionfraction },
        { question: "Electrocardiogram (ECG):",questionType:questionType, questionId: 'i-35', inputtype: 'text', options: [], value: ecg, setValue: setEcg },
        { question: "S. Cholestrol Level:",questionType:questionType, questionId: 'i-35_0', inputtype: 'text', options: [], value: cholestrol, setValue: setCholestrol },
        { question: "CRP:",questionType:questionType, questionId: 'i-35_0_1', inputtype: 'text', options: [], value: crp, setValue: setCrp },


    ];

    const [height, setHeight] = useState('');
    const [width, setWidth] = useState('');
    const [depth, setDepth] = useState('');
    const [date_part4, setDate_part4] = useState('');

    useEffect(() => {
        if (height !== '' && width !== '' && depth !== '') {
            setSize(`${height} x ${width} x ${depth}`)
        }
    }, [height, width, depth])

    const questions3 = [
        { question: 'Date of Local Imaging:', questionType: questionType, questionId: 'i-37_0_0', inputtype: 'date', options: [], value: date_part4, setValue: setDate_part4, heading: "Staging Radiology", info:[
            "1. Complete response (CR): Disappearance of all target and non-target lesions. SAD of previously pathological lymph nodes should be <10 mm",
            "2. Partial response (PR): ≥30% decrease in the SLD of target lesions.",
            "3. Stable disease (SD): neither unequivocal progression or regression.",
            "4. Progressive disease (PD): ≥20% increase in the SLD of target lesions compared to smallest SLD in the study (nadir) AND ≥5 mm SLD increase OR progression of non-target lesions OR new lesions."
        ]  },

        { question: 'Staging Local Imaging:', questionType: questionType, questionId: 'i-37', inputtype: 'dropdown', options: ["CT Thorax","CXR","PET CT","Not Applicable"], value: stagingLocalImaging, setValue: setStagingLocalImaging,},
        { question: 'Subsite (Upper BA Complex or Lower BA Complex or Tongue):', questionType: questionType, questionId: 'i-38', inputtype: 'dropdown', options: ["Upper BA Complex", "Lower BA Complex", "Tongue"], value: subsite, setValue: setSubsite },
        { question: 'USG/CT/MRI/PET:', questionType: questionType, questionId: 'i-39', inputtype: 'dropdown', options: ['USG', 'CT', 'MRI', 'PET'], value: imagingType, setValue: setImagingType },
        { question: 'Site (Epicenter of tumor):', questionType: questionType, questionId: 'i-40', inputtype: 'dropdown', options: ["Buccal Mucosa", "Upper GBS", "Lower GBS", "Upper Alveolus", "Lower Alveolus", "Central Alveolus", "RMT", "FOM", "Oral Tongue"], value: site, setValue: setSite },
        { question: 'ITF High/Low/Free:', questionType: questionType, questionId: 'i-41', inputtype: 'dropdown', options: ['High', 'Low', 'Free'], value: itf, setValue: setItf },
        { question: 'Supra-notch/Infra-notch:', questionType: questionType, questionId: 'i-42', inputtype: 'dropdown', options: ['Supra-notch', 'Infra-notch'], value: notch, setValue: setNotch },
        { question: 'Size (mm):', questionType: questionType, questionId: 'i-43', inputtype: 'multitext', options: [], value: size, setValue: setSize, restriction: alpha.some(i => (i!=='x' && size.includes(i))), restrictiontext: 'Alphabets are not allowed' , subParts: [ {s_question:"Height (mm):", s_answer:height, s_setanswer:setHeight}, {s_question:"Width (mm):", s_answer:width, s_setanswer:setWidth}, {s_question:"Length (mm):", s_answer:depth, s_setanswer:setDepth} ]},
        { question: 'DOI (mm):', questionType: questionType, questionId: 'i-44', inputtype: 'text', options: [], value: doi, setValue: setDoi, restriction: alpha.some(i => doi.includes(i)), restrictiontext: 'Alphabets are not allowed' },
        { question: 'Across Midline:', questionType: questionType, questionId: 'i-45', inputtype: 'dropdown', options: ['Yes', 'No'], value: acrossMidline, setValue: setAcrossMidline },
        { question: 'Bone Invasion:', questionType: questionType, questionId: 'i-46', inputtype: 'dropdown', options: ['Yes', 'No'], value: boneInvasion, setValue: setBoneInvasion },
        { question: 'Maxilla/Mandible:', questionType: questionType, questionId: 'i-47', inputtype: 'dropdown', options: ['Maxilla', 'Mandible'], value: maxillaMandible, setValue: setMaxillaMandible },
        { question: 'PNI (Perineural Invasion):', questionType: questionType, questionId: 'i-48', inputtype: 'dropdown', options: ['Yes', 'No'], value: pni, setValue: setPni },
        { question: 'Neck:', questionType: questionType, questionId: 'i-49', inputtype: 'dropdown', options: ["Single","Multiple"], value: neck, setValue: setNeck },
        { question: 'Number of Suspicious Nodes:', questionType: questionType, questionId: 'i-50', inputtype: 'text', options: [], value: numberOfSuspiciousNodes, setValue: setNumberOfSuspiciousNodes },
        { question: 'Level 1/2a/2b/3/4/5:', questionType: questionType, questionId: 'i-51', inputtype: 'text', options: ["Level 1", "Level 2a", "Level 2b", "Level 3", "Level 4", "Level 5"], value: levels, setValue: setLevels },
        { question: 'SAD of Largest Suspicious Nodes (mm):', questionType: questionType, questionId: 'i-52', inputtype: 'text', options: [], value: sadLargestSuspiciousNode, setValue: setSadLargestSuspiciousNode, restriction: alpha.some(i => sadLargestSuspiciousNode.includes(i)), restrictiontext: 'Alphabets are not allowed' },
        // { question: 'USG Correlation:', questionType: questionType, questionId: 'i-53', inputtype: 'text', options: [], value: usgCorrelation, setValue: setUsgCorrelation },
        { question: 'FNAC Required:', questionType: questionType, questionId: 'i-54', inputtype: 'dropdown', options: ["Yes", "No"], value: fnac, setValue: setFnac },
        { question: 'Radiological ENE:', questionType: questionType, questionId: 'i-55', inputtype: 'dropdown', options: ['Yes', 'No'], value: radiologicalEne, setValue: setRadiologicalEne },
        { question: 'What Suggests ENE:', questionType: questionType, questionId: 'i-56', inputtype: 'dropdown', options: ["Skin","Muscle","Vessel","Not Applicable"], value: eneSuggestions, setValue: setEneSuggestions },
        { question: 'Metastatic Workup :', questionType: questionType, questionId: 'i-57', inputtype: 'dropdown', options: ["CT Thorax","CXR","PET CT","Not Applicable"], value: metastaticWorkup, setValue: setMetastaticWorkup },
        { question: 'Date of Metastatic Workup :', questionType: questionType, questionId: 'i-57_0', inputtype: 'date', options: [], value: date_part3, setValue: setDate_part3 },
        { question: 'Lesion 1 Location', questionType: questionType, questionId: 'i-58_0', inputtype: 'text', options: [], value: lesion1Location, setValue: setLesion1Location },
        { question: 'Lesion 1 Size', questionType: questionType, questionId: 'i-58_1', inputtype: 'text', options: [], value: lesion1Size, setValue: setLesion1Size, restriction: alpha.some(i => lesion1Size.includes(i)), restrictiontext: 'Alphabets are not allowed' },
        { question: 'Lesion 1 Marked on scan', questionType: questionType, questionId: 'i-58_2', inputtype: 'dropdown', options: ['Yes', 'No'], value: lesion1Marked, setValue: setLesion1Marked },
        { question: 'Lesion 2 Location', questionType: questionType, questionId: 'i-58_3', inputtype: 'text', options: [], value: lesion2Location, setValue: setLesion2Location },
        { question: 'Lesion 2 Size', questionType: questionType, questionId: 'i-58_4', inputtype: 'text', options: [], value: lesion2Size, setValue: setLesion2Size, restriction: alpha.some(i => lesion2Size.includes(i)), restrictiontext: 'Alphabets are not allowed' },
        { question: 'Lesion 2 Marked on scan', questionType: questionType, questionId: 'i-58_5', inputtype: 'dropdown', options: ['Yes', 'No'], value: lesion2Marked, setValue: setLesion2Marked },
        { question: 'Lesion 3 Location', questionType: questionType, questionId: 'i-58_6', inputtype: 'text', options: [], value: lesion3Location, setValue: setLesion3Location },
        { question: 'Lesion 3 Size', questionType: questionType, questionId: 'i-58_7', inputtype: 'text', options: [], value: lesion3Size, setValue: setLesion3Size, restriction: alpha.some(i => lesion3Size.includes(i)), restrictiontext: 'Alphabets are not allowed' },
        { question: 'Lesion 3 Marked on scan', questionType: questionType, questionId: 'i-58_8', inputtype: 'dropdown', options: ['Yes', 'No'], value: lesion3Marked, setValue: setLesion3Marked }     ,
        // { question: 'Response on clinical assessment', questionType: questionType, questionId: 'i-58_9', inputtype: 'dropdown', options: ['*Progressive disease', 'Stable disease','Complete Response','Partial Response'], value: responseCategory1, setValue: setResponseCategory1 }     

    ];
    

 
      useEffect( () => {

        const fetchalldata = async () => 
        {
            let updateArray: { questionId: string; updates: any; }[] = []
            setDataloading(true);
        const storedpatient_trial_number =localStorage.getItem("patienttrialnumber");
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
                    question_list.map((question : any) => {
                        const requiredquestionid = question.questionId;
                        const questionvalue = questiondata.find((this_question: { questionId: string; }) => this_question.questionId === requiredquestionid)?.answer;
                        const questionupdates =questiondata.find((this_question: { questionId: string; }) => this_question.questionId === requiredquestionid)?.updates;
                        
                        questionvalue !== undefined && question.setValue(questionvalue)
                        if(question.inputtype === "multitext")
                            {
                                const subparts = question.subParts
                                const questionsubparts = questiondata.find((this_question: { questionId: string; }) => this_question.questionId === requiredquestionid)?.subParts
                                if(questionsubparts !== undefined && subparts !== undefined)
                                {
                                    subparts.map((subpart : any , index : number) => {
                                        subpart.s_setanswer(questionsubparts[index].s_answer)
                                    })
                                }
                            }
                    //    console.log(questionupdates)

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
            // biopsynumber === "" ||
            // dateofbiopsy === "" ||
            // histology === "" ||
            // gradebiopsy === "" ||
            // anyspecialfeature === ""

            false


            


        ) {
            toast({
                title: "Error",
                description: "Please fill valid data",
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
                            setTabValue("LaboratoryTest")
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
           

            alpha.some( i => rbc.includes(i)) ||
            alpha.some( i => cbc.includes(i)) || 
            alpha.some( i => tlc.includes(i)) ||
            alpha.some( i => neutrophilcount.includes(i)) ||
            alpha.some( i => lymphocytecount.includes(i)) ||
            alpha.some( i => monocytecount.includes(i)) ||
            alpha.some( i => eosinophilcount.includes(i)) ||
            alpha.some( i => basophilcount.includes(i)) ||
            alpha.some( i => plateletcount.includes(i)) ||
            
            alpha.some( i => lic.includes(i)) ||
            alpha.some( i => lft.includes(i)) ||
            alpha.some( i => directbilirubin.includes(i)) ||
            alpha.some( i => indirectbilirubin.includes(i)) 
            
    //    cbc === "" ||
    //    hb === "" ||
    //    rbc === "" ||
    //    tlc === "" ||
    //    neutrophilcount === "" ||
    //    lymphocytecount === "" ||
    //    monocytecount === "" ||
    //    eosinophilcount === "" ||
    //    basophilcount === "" ||
    //    plateletcount === "" ||
    //    largeimmaturecellcount === "" ||
    //    lic === "" ||
    //    plateletcount === "" ||
    //    covidinpast === "" ||
    //    covidvaccine === "" ||
    //    vaccinename === "" ||
    //    rft === "" ||
    //    serumcreatinelevel === "" ||
    //    bloodurealevel === "" ||
    //    viralmarkers === "" ||
    //    hhh === "" ||
    //    lft === "" ||
    //    directbilirubin === "" ||
    //    indirectbilirubin === "" ||
    //    aasg === "" ||
    //    as === "" ||
    //    sap === "" ||
    //    totalprotienlevel === "" ||
    //    albumin === "" ||
    //    agratio === "" ||
    //    ejectionfraction === "" ||
    //    ecg === ""

    


            



        ) {
            if (alpha.some(i => rbc.includes(i))) {
                toast({
                    title: "Error",
                    description: "Invalid input detected in RBC.",
                    variant: "destructive",
                });
            } else if (alpha.some(i => cbc.includes(i))) {
                toast({
                    title: "Error",
                    description: "Invalid input detected in CBC.",
                    variant: "destructive",
                });
            } else if (alpha.some(i => tlc.includes(i))) {
                toast({
                    title: "Error",
                    description: "Invalid input detected in TLC.",
                    variant: "destructive",
                });
            } else if (alpha.some(i => neutrophilcount.includes(i))) {
                toast({
                    title: "Error",
                    description: "Invalid input detected in Neutrophil Count.",
                    variant: "destructive",
                });
            } else if (alpha.some(i => lymphocytecount.includes(i))) {
                toast({
                    title: "Error",
                    description: "Invalid input detected in Lymphocyte Count.",
                    variant: "destructive",
                });
            } else if (alpha.some(i => monocytecount.includes(i))) {
                toast({
                    title: "Error",
                    description: "Invalid input detected in Monocyte Count.",
                    variant: "destructive",
                });
            } else if (alpha.some(i => eosinophilcount.includes(i))) {
                toast({
                    title: "Error",
                    description: "Invalid input detected in Eosinophil Count.",
                    variant: "destructive",
                });
            } else if (alpha.some(i => basophilcount.includes(i))) {
                toast({
                    title: "Error",
                    description: "Invalid input detected in Basophil Count.",
                    variant: "destructive",
                });
            } else if (alpha.some(i => plateletcount.includes(i))) {
                toast({
                    title: "Error",
                    description: "Invalid input detected in Platelet Count.",
                    variant: "destructive",
                });
           
            } else if (alpha.some(i => lic.includes(i))) {
                toast({
                    title: "Error",
                    description: "Invalid input detected in LIC Count.",
                    variant: "destructive",
                });
            } else if (alpha.some(i => lft.includes(i))) {
                toast({
                    title: "Error",
                    description: "Invalid input detected in LFT.",
                    variant: "destructive",
                });
            } else if (alpha.some(i => directbilirubin.includes(i))) {
                toast({
                    title: "Error",
                    description: "Invalid input detected in Direct Bilirubin.",
                    variant: "destructive",
                });
            } else if (alpha.some(i => indirectbilirubin.includes(i))) {
                toast({
                    title: "Error",
                    description: "Invalid input detected in Indirect Bilirubin.",
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
                            setTabValue("Radiology")
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
            
            alpha.some( i => (i!=='x' && size.includes(i))) ||
            alpha.some( i => doi.includes(i)) ||
            alpha.some( i => sadLargestSuspiciousNode.includes(i)) ||
            alpha.some( i => lesion1Size.includes(i)) ||
            alpha.some( i => lesion2Size.includes(i)) ||
            alpha.some( i => lesion3Size.includes(i)) 

            // questions3.some((question) => question.value === "")

                


        ) {
            if (alpha.some(i => size.includes(i))) {
                toast({
                    title: "Error",
                    description: "Invalid input detected in Size.",
                    variant: "destructive",
                });
            } else if (alpha.some(i => doi.includes(i))) {
                toast({
                    title: "Error",
                    description: "Invalid input detected in DOI.",
                    variant: "destructive",
                });
            } else if (alpha.some(i => sadLargestSuspiciousNode.includes(i))) {
                toast({
                    title: "Error",
                    description: "Invalid input detected in SAD of Largest Suspicious Nodes.",
                    variant: "destructive",
                });
            }
            else if (alpha.some(i => lesion1Size.includes(i))) {
                toast({
                    title: "Error",
                    description: "Invalid input detected in Lesion 1 Size.",
                    variant: "destructive",
                });
            }
            else if (alpha.some(i => lesion2Size.includes(i))) {
                toast({
                    title: "Error",
                    description: "Invalid input detected in Lesion 2 Size.",
                    variant: "destructive",
                });
            }
            else if (alpha.some(i => lesion3Size.includes(i))) {
                toast({
                    title: "Error",
                    description: "Invalid input detected in Lesion 3 Size.",
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
                            router.push("/form/qualityoflifeassessment")
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




            {tabValue==="Biopsy"?<CustomForm questions={questions1} handleSubmit={handleSubmit1} buttontitle="Submit & Next" formtitle="Investigations" loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} updates={updates}/>:<></>}
            {tabValue==="LaboratoryTest"?<CustomForm questions={questions2} handleSubmit={handleSubmit2} buttontitle="Submit & Next" formtitle="Investigations" loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} updates={updates}/>:<></>}
            {tabValue==="Radiology"?<CustomForm questions={questions3} handleSubmit={handleSubmit3} buttontitle="Submit & Next" formtitle="Investigations" loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} updates={updates}/>:<></>}
           
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
                    <TabsTrigger className='active:bg-green-5' value="Biopsy">1</TabsTrigger>
                    <TabsTrigger value="LaboratoryTest">2</TabsTrigger>
                    <TabsTrigger value="Radiology">3</TabsTrigger>
                    
                </TabsList>
            </Tabs>
            <HeadDrop
          dataArray={[
            { id: "Biopsy", title: "Biopsy" },
            { id: "LaboratoryTest", title: "LaboratoryTest" },
            { id: 'Radiology', title: "Radiology" },
            
          ]}
          id={tabValue}
          setId={setTabValue}
         
        />
        </div>
    );
};

export default Investigations
