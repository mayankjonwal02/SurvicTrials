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
const Investigations = () =>  {
    const { toast } = useToast()
    const router = useRouter();

    const [user, setUser] = useState<any>({});
    const userid = "mayankjonwal"
    const [patient_trial_number, setPatient_trial_number] = React.useState("2024-BTI-1");

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
        setUser(storedUser);
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
    const [hhh, setHhh] = React.useState("");
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

 


    const questions1 = [
         { question: 'Biopsy Number', questionType: questionType, questionId: 'i-1', inputtype: 'text', options: [], value: biopsynumber, setValue: setBiopsynumber , heading: "Biopsy"},
         { question: 'Date of Biopsy', questionType: questionType, questionId: 'i-2', inputtype: 'date', options: [], value: dateofbiopsy, setValue: setDateofbiopsy },
         { question: "Histology", questionType: questionType, questionId: 'i-3', inputtype: 'text', options: [], value: histology, setValue: setHistology },
         { question: "Grade (Biopsy):", questionType: questionType, questionId: 'i-4', inputtype: 'text', options: [], value: gradebiopsy, setValue: setGradebiopsy },
         { question: "Any Special Features", questionType: questionType, questionId: 'i-5', inputtype: 'text', options: [], value: anyspecialfeature, setValue: setAnyspecialfeature },
    ]

    const questions2 = [
        { question: 'CBC (Complete Blood Count):', questionType: questionType, questionId: 'i-6', inputtype: 'text', options: [], value: cbc, setValue: setCbc, heading: "Laboratory Tests (on first admission for treatment)" },
        { question: 'Hemoglobin (Hb):', questionType: questionType, questionId: 'i-7', inputtype: 'text', options: [], value: hb, setValue: setHb },
        { question: "Red Blood Cell Count (RBC) (10^6/uL):" , questionType: questionType, questionId: 'i-8', inputtype: 'text', options: [], value: rbc, setValue: setRbc },
        { question: "Total Leukocyte Count (TLC) (10^3/uL):", questionType: questionType, questionId: 'i-9', inputtype: 'text', options: [], value: tlc, setValue: setTlc },
        { question: "Neutrophil Count (10^3/uL):", questionType: questionType, questionId: 'i-10', inputtype: 'text', options: [], value: neutrophilcount, setValue: setNeutrophilcount },
        { question: "Lymphocyte Count (10^3/uL):", questionType: questionType, questionId: 'i-11', inputtype: 'text', options: [], value: lymphocytecount, setValue: setLymphocytecount },
        { question: "Monocyte Count (10^3/uL):", questionType: questionType, questionId: 'i-12', inputtype: 'text', options: [], value: monocytecount, setValue: setMonocytecount },
        { question: "Eosinophil Count (10^3/uL):", questionType: questionType, questionId: 'i-13', inputtype: 'text', options: [], value: eosinophilcount, setValue: setEosinophilcount },
        { question: "Basophil Count (10^3/uL):", questionType: questionType, questionId: 'i-14', inputtype: 'text', options: [], value: basophilcount, setValue: setBasophilcount },
        { question: "Large Immature Cells Count:", questionType: questionType, questionId: 'i-15', inputtype: 'text', options: [], value: largeimmaturecellcount, setValue: setLargeimmaturecellcount },
        { question: "Large Immature Cells (LIC) Count (10^3/uL):" , questionType: questionType, questionId: 'i-16', inputtype: 'text', options: [], value: lic, setValue: setLic },
        { question: "Platelet Count (10^3/uL):", questionType: questionType, questionId: 'i-17', inputtype: 'text', options: [], value: plateletcount, setValue: setPlateletcount },
        { question: "COVID in Past:", questionType: questionType, questionId: 'i-18', inputtype: 'text', options: [], value: covidinpast, setValue: setCovidinpast },
        { question: "COVID Vaccine:", questionType: questionType, questionId: 'i-19', inputtype: 'text', options: [], value: covidvaccine, setValue: setCovidvaccine },
        { question: "Vaccine Name:", questionType: questionType, questionId: 'i-20', inputtype: 'text', options: [], value: vaccinename, setValue: setVaccinename },
        { question: "Renal Function Test (RFT) - Creatinine Clearance:", questionType: questionType, questionId: 'i-21', inputtype: 'text', options: [], value: rft, setValue: setRft },
        { question: "Serum Creatinine Level:",questionType: questionType, questionId: 'i-26', inputtype: 'text', options: [], value: serumcreatinelevel, setValue: setSerumcreatinelevel },
        { question: "Blood Urea Level:", questionType: questionType, questionId: 'i-22', inputtype: 'text', options: [], value: bloodurealevel, setValue: setBloodurealevel },
        { question: "Viral Markers:", questionType: questionType, questionId: 'i-23', inputtype: 'text', options: [], value: viralmarkers, setValue: setViralmarkers },
        { question: "Hepatitis B Surface Antigen (HBsAg) / Hepatitis C Virus (HCV) / Human Immunodeficiency Virus (HIV):", questionType: questionType, questionId: 'i-24', inputtype: 'text', options: [], value: hhh, setValue: setHhh },
        { question: "Liver Function Test (LFT) - Total Bilirubin (mg%) (T):", questionType: questionType, questionId: 'i-25', inputtype: 'text', options: [], value: lft, setValue: setLft },
        { question: "Direct Bilirubin (mg%) (D):", questionType: questionType, questionId: 'i-26', inputtype: 'text', options: [], value: directbilirubin, setValue: setDirectbilirubin },
        { question: "Indirect Bilirubin (mg%) (I):", questionType: questionType, questionId: 'i-27', inputtype: 'text', options: [], value: indirectbilirubin, setValue: setIndirectbilirubin },
        { question: "Aspartate Aminotransferase (AST) / Serum Glutamic Oxaloacetic Transaminase (SGOT):", questionType: questionType, questionId: 'i-28', inputtype: 'text', options: [], value: as, setValue: setAs },
        { question: "Alanine Aminotransferase (ALT) / Serum Glutamic Pyruvic Transaminase (SGPT):" , questionType:questionType, questionId: 'i-29', inputtype: 'text', options: [], value: aasg, setValue: setAasg },
        { question: "Serum Alkaline Phosphatase (SAP):", questionType: questionType, questionId: 'i-30', inputtype: 'text', options: [], value: sap, setValue: setSap },
        { question:"Total Protein Level:", questionType: questionType, questionId: 'i-31', inputtype: 'text', options: [], value: totalprotienlevel, setValue: setTotalprotienlevel },
        { question:"Albumin Level:",questionType:questionType, questionId: 'i-32', inputtype: 'text', options: [], value: albumin, setValue: setAlbumin },
        { question:"Albumin/Globulin (A/G) Ratio:", questionType: questionType, questionId: 'i-33', inputtype: 'text', options: [], value: agratio, setValue: setAgratio },
        { question: "Ejection Fraction:" , questionType:questionType, questionId: 'i-34', inputtype: 'text', options: [], value: ejectionfraction, setValue: setEjectionfraction },
        { question: "Electrocardiogram (ECG):",questionType:questionType, questionId: 'i-35', inputtype: 'text', options: [], value: ecg, setValue: setEcg },
    
    
    
    
    
    
    
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

 


    const handleSubmit1 = () => {
        if (
            biopsynumber === "" ||
            dateofbiopsy === "" ||
            histology === "" ||
            gradebiopsy === "" ||
            anyspecialfeature === ""


            


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
           


       cbc === "" ||
       hb === "" ||
       rbc === "" ||
       tlc === "" ||
       neutrophilcount === "" ||
       lymphocytecount === "" ||
       monocytecount === "" ||
       eosinophilcount === "" ||
       basophilcount === "" ||
       plateletcount === "" ||
       largeimmaturecellcount === "" ||
       lic === "" ||
       plateletcount === "" ||
       covidinpast === "" ||
       covidvaccine === "" ||
       vaccinename === "" ||
       rft === "" ||
       serumcreatinelevel === "" ||
       bloodurealevel === "" ||
       viralmarkers === "" ||
       hhh === "" ||
       lft === "" ||
       directbilirubin === "" ||
       indirectbilirubin === "" ||
       aasg === "" ||
       as === "" ||
       sap === "" ||
       totalprotienlevel === "" ||
       albumin === "" ||
       agratio === "" ||
       ejectionfraction === "" ||
       ecg === ""


            



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

    const handleSubmit3 = () => {
        if (
            


            drug === "" ||
            obesity === "" ||
            overallcomorbidity === "" ||
            grade === "" ||
            moderatecomorbidity === "" ||
            severecomorbidity === "" ||
            myocardialinfarction1 === "" ||
            anginaandconorarydisease === "" ||
            congestiveheartfailure === "" ||
            cardiacarrhythmias === "" ||
            hypertension === "" ||
            venousdisease === "" ||
            peripheralarterydisease === "" ||
            respiratorydisease === "" ||
            hepaticdisease === "" ||
            stomachandintestinalinfection === "" ||
            pancreaticdisease === "" ||
            endstageretinaldisease === "" ||
            stroke === "" ||
            paralysis === "" ||
            neuromusculardisorder === "" ||
            psychiaticdisorder === "" ||
            rheumatologicdisorder === "" ||
            leukemiaormyeloma === "" ||
            alcohol === "" 

           


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




            {tabValue==="Biopsy"?<CustomForm questions={questions1} handleSubmit={handleSubmit1} buttontitle="Submit & Next" formtitle="Investigations" loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} />:<></>}
            {tabValue==="LaboratoryTest"?<CustomForm questions={questions2} handleSubmit={handleSubmit2} buttontitle="Submit & Next" formtitle="Investigations" loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} />:<></>}
            {tabValue==="Radiology"?<CustomForm questions={questions3} handleSubmit={handleSubmit3} buttontitle="Submit & Next" formtitle="Investigations" loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} />:<></>}
           
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
                    <TabsTrigger className='active:bg-green-5' value="Biopsy">1</TabsTrigger>
                    <TabsTrigger value="LaboratoryTest">2</TabsTrigger>
                    <TabsTrigger value="Radiology">3</TabsTrigger>
                    
                </TabsList>
            </Tabs>
        </div>
    );
};

export default Investigations
