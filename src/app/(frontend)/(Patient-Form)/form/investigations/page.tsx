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
    const [dateoftest, setDateoftest] = React.useState("");
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
    const [findings, setFindings] = useState('');

    useEffect(() => {
        setDateoftest("");
    },[])

 


    const questions1 = [
         { question: 'Biopsy Number', questionType: questionType, questionId: 'i-1', inputtype: 'text', options: [], value: biopsynumber, setValue: setBiopsynumber , heading: "Biopsy"},
         { question: 'Date of Biopsy', questionType: questionType, questionId: 'i-2', inputtype: 'date', options: [], value: dateofbiopsy, setValue: setDateofbiopsy },
         { question: "Histology", questionType: questionType, questionId: 'i-3', inputtype: 'text', options: [], value: histology, setValue: setHistology },
         { question: "Grade (Biopsy):", questionType: questionType, questionId: 'i-4', inputtype: 'dropdown', options: ["1","2","3"], value: gradebiopsy, setValue: setGradebiopsy },
         { question: "Any Special Features", questionType: questionType, questionId: 'i-5', inputtype: 'text', options: [], value: anyspecialfeature, setValue: setAnyspecialfeature },
    ]

    const questions2 = [
        { question: 'Date of Test', questionType: questionType, questionId: 'i-6_0', inputtype: 'date', options: [], value: dateoftest, setValue: setDateoftest, heading: "Laboratory Tests " },
        { question: 'CBC (Complete Blood Count):', questionType: questionType, questionId: 'i-6', inputtype: 'text', options: [], value: cbc, setValue: setCbc },
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
        // { question: "COVID in Past:", questionType: questionType, questionId: 'i-18', inputtype: 'text', options: [], value: covidinpast, setValue: setCovidinpast },
        // { question: "COVID Vaccine:", questionType: questionType, questionId: 'i-19', inputtype: 'text', options: [], value: covidvaccine, setValue: setCovidvaccine },
        // { question: "Vaccine Name:", questionType: questionType, questionId: 'i-20', inputtype: 'text', options: [], value: vaccinename, setValue: setVaccinename },
        { question: "Renal Function Test (RFT) - Creatinine Clearance:", questionType: questionType, questionId: 'i-21', inputtype: 'text', options: [], value: rft, setValue: setRft },
        { question: "Serum Creatinine Level:",questionType: questionType, questionId: 'i-36', inputtype: 'text', options: [], value: serumcreatinelevel, setValue: setSerumcreatinelevel },
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
        { question: 'Staging Local Imaging:', questionType: questionType, questionId: 'i-37', inputtype: 'text', options: [], value: stagingLocalImaging, setValue: setStagingLocalImaging, heading:"Radiology" },
        { question: 'Subsite (Upper BA Complex or Lower BA Complex or Tongue):', questionType: questionType, questionId: 'i-38', inputtype: 'text', options: [], value: subsite, setValue: setSubsite },
        { question: 'USG/CT/MRI/PET:', questionType: questionType, questionId: 'i-39', inputtype: 'text', options: ['USG', 'CT', 'MRI', 'PET'], value: imagingType, setValue: setImagingType },
        { question: 'Site (Epicenter of tumor):', questionType: questionType, questionId: 'i-40', inputtype: 'text', options: [], value: site, setValue: setSite },
        { question: 'ITF High/Low/Free:', questionType: questionType, questionId: 'i-41', inputtype: 'text', options: ['High', 'Low', 'Free'], value: itf, setValue: setItf },
        { question: 'Supra-notch/Infra-notch:', questionType: questionType, questionId: 'i-42', inputtype: 'text', options: ['Supra-notch', 'Infra-notch'], value: notch, setValue: setNotch },
        { question: 'Size (mm):', questionType: questionType, questionId: 'i-43', inputtype: 'text', options: [], value: size, setValue: setSize },
        { question: 'DOI (mm):', questionType: questionType, questionId: 'i-44', inputtype: 'text', options: [], value: doi, setValue: setDoi },
        { question: 'Across Midline:', questionType: questionType, questionId: 'i-45', inputtype: 'text', options: ['Yes', 'No'], value: acrossMidline, setValue: setAcrossMidline },
        { question: 'Bone Invasion:', questionType: questionType, questionId: 'i-46', inputtype: 'text', options: ['Yes', 'No'], value: boneInvasion, setValue: setBoneInvasion },
        { question: 'Maxilla/Mandible:', questionType: questionType, questionId: 'i-47', inputtype: 'text', options: ['Maxilla', 'Mandible'], value: maxillaMandible, setValue: setMaxillaMandible },
        { question: 'PNI (Perineural Invasion):', questionType: questionType, questionId: 'i-48', inputtype: 'text', options: ['Yes', 'No'], value: pni, setValue: setPni },
        { question: 'Neck:', questionType: questionType, questionId: 'i-49', inputtype: 'text', options: [], value: neck, setValue: setNeck },
        { question: 'Number of Suspicious Nodes:', questionType: questionType, questionId: 'i-50', inputtype: 'text', options: [], value: numberOfSuspiciousNodes, setValue: setNumberOfSuspiciousNodes },
        { question: 'Level 1/2a/2b/3/4/5:', questionType: questionType, questionId: 'i-51', inputtype: 'text', options: [], value: levels, setValue: setLevels },
        { question: 'SAD of Largest Suspicious Nodes (mm):', questionType: questionType, questionId: 'i-52', inputtype: 'text', options: [], value: sadLargestSuspiciousNode, setValue: setSadLargestSuspiciousNode },
        { question: 'USG Correlation:', questionType: questionType, questionId: 'i-53', inputtype: 'text', options: [], value: usgCorrelation, setValue: setUsgCorrelation },
        { question: 'FNAC:', questionType: questionType, questionId: 'i-54', inputtype: 'text', options: [], value: fnac, setValue: setFnac },
        { question: 'Radiological ENE:', questionType: questionType, questionId: 'i-55', inputtype: 'text', options: ['Yes', 'No'], value: radiologicalEne, setValue: setRadiologicalEne },
        { question: 'What Suggests ENE:', questionType: questionType, questionId: 'i-56', inputtype: 'text', options: [], value: eneSuggestions, setValue: setEneSuggestions },
        { question: 'Metastatic Workup with Date CT Thorax/CXR:', questionType: questionType, questionId: 'i-57', inputtype: 'text', options: [], value: metastaticWorkup, setValue: setMetastaticWorkup },
        { question: 'Findings:', questionType: questionType, questionId: 'i-58', inputtype: 'text', options: [], value: findings, setValue: setFindings }
      ];

 
      useEffect( () => {

        const fetchalldata = async () => 
        {
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
      const alphaspecial = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',"!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "-", "{", "}", "[", "]", ":", ";", "'", '"', "<", ">", ",", ".", "?", "/", "|", "\\", "~", "`"];
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
            alpha.some( i => largeimmaturecellcount.includes(i)) ||
            alpha.some( i => lic.includes(i)) ||
            alpha.some( i => lft.includes(i)) ||
            alpha.some( i => directbilirubin.includes(i)) ||
            alpha.some( i => indirectbilirubin.includes(i)) ||
            dateoftest === "" 
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
            } else if (alpha.some(i => largeimmaturecellcount.includes(i))) {
                toast({
                    title: "Error",
                    description: "Invalid input detected in Large Immature Cells Count.",
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
            
            alpha.some( i => size.includes(i)) ||
            alpha.some( i => doi.includes(i)) ||
            alpha.some( i => sadLargestSuspiciousNode.includes(i)) 

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
                            router.push("/form/restaging")
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
