"use client"
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import CustomForm from '@/components/customform';

const Histopathology = () => {
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
    const questionType = "histopathology";
    const formTitle = "Histopathology";
    const [tabValue, setTabValue] = useState("section1");
    const [loading, setLoading] = React.useState(false);

    // Section 1
    const [h1, setH1] = useState('');
    const [h2, setH2] = useState('');
    const [h3, setH3] = useState('');
    const [h4, setH4] = useState('');
    const [h5, setH5] = useState('');
    const [h6, setH6] = useState('');
    const [h7, setH7] = useState('');
    const [h8, setH8] = useState('');
    const [h9, setH9] = useState('');
    const [h10, setH10] = useState('');
    const [h11, setH11] = useState('');
    const [h12, setH12] = useState('');
    const [h13, setH13] = useState('');
    const [h14, setH14] = useState('');
    const [h15, setH15] = useState('');
    const [h16, setH16] = useState('');
    const [h17, setH17] = useState('');
    const [h18, setH18] = useState('');
    const [h19, setH19] = useState('');
    const [h20, setH20] = useState('');
    const [h21, setH21] = useState('');
    const [h22, setH22] = useState('');
    const [h23, setH23] = useState('');
    const [h24, setH24] = useState('');
    const [h25, setH25] = useState('');
    const [h26, setH26] = useState('');
    const [h27, setH27] = useState('');
    const [h28, setH28] = useState('');
    const [h29, setH29] = useState('');
    const [h30, setH30] = useState('');
    const [h31, setH31] = useState('');
    const [h32, setH32] = useState('');
    const [h33, setH33] = useState('');
    const [h34, setH34] = useState('');
    const [h35, setH35] = useState('');
    const [h36, setH36] = useState('');
    const [h37, setH37] = useState('');
    const [h38, setH38] = useState('');
    const [h39, setH39] = useState('');
    const [h40, setH40] = useState('');






    const alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    const alphaspecial = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',"!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "-", "{", "}", "[", "]", ":", ";", "'", '"', "<", ">", ",", ".", "?", "/", "|", "\\", "~", "`"];
  



    const questions1 = [
        {
            question: 'Site of Tumor:', questionId: 'h-1', questionType: questionType, inputtype: 'dropdown', options: [
                "Upper Lip", "Lower Lip", "Lateral Tongue", "Ventral Tongue", "Dorsal Tongue", "Anterior two third tongue", 
                "Upper Gingiva", "Lower Gingiva", "Anterior Floor of mouth", "Floor of mouth", "Hard palate", "Buccal mucosa", 
                "Vestibule- upper", "Vestibule- Lower", "Alveolar process- upper", "Alveolar process- Lower", "Retromolar trigone"
            ], value: h1, setValue: setH1
        },
        { 
            question: 'Date of Reporting:', questionId: 'h-2', questionType: questionType, inputtype: 'date', options: [], value: h2, setValue: setH2 
        },
        {
            question: 'Tumor Laterality:', questionId: 'h-3', questionType: questionType, inputtype: 'dropdown', options: [
                "Right", "Left", "Midline", "Unspecified"
            ], value: h3, setValue: setH3
        },
        { 
            question: 'Tumor Focality:', questionId: 'h-4', questionType: questionType, inputtype: 'dropdown', options: [
                "Unifocal", "Multifocal", "Can't determined"
            ], value: h4, setValue: setH4 
        },
        { 
            question: 'Tumor Size - Length:', questionId: 'h-5', questionType: questionType, inputtype: 'text', options: [], value: h5, setValue: setH5,
            restriction: alpha.some(i => h5.includes(i)), restrictiontext: 'Alphabets not allowed'
        },
        { 
            question: 'Tumor Size - Width:', questionId: 'h-6', questionType: questionType, inputtype: 'text', options: [], value: h6, setValue: setH6,
            restriction: alpha.some(i => h6.includes(i)), restrictiontext: 'Alphabets not allowed'
        },
        { 
            question: 'Tumor Size - Depth:', questionId: 'h-7', questionType: questionType, inputtype: 'text', options: [], value: h7, setValue: setH7,
            restriction: alpha.some(i => h7.includes(i)), restrictiontext: 'Alphabets not allowed'
        },
        { 
            question: 'Greatest Tumor Dimension (mm):', questionId: 'h-8', questionType: questionType, inputtype: 'text', options: [], value: h8, setValue: setH8,
            restriction: alpha.some(i => h8.includes(i)), restrictiontext: 'Alphabets not allowed'
        },
        { 
            question: 'Depth of Invasion (mm):', questionId: 'h-9', questionType: questionType, inputtype: 'text', options: [], value: h9, setValue: setH9,
            restriction: alpha.some(i => h9.includes(i)), restrictiontext: 'Alphabets not allowed'
        },
        { 
            question: 'Tumor Thickness (mm):', questionId: 'h-10', questionType: questionType, inputtype: 'text', options: [], value: h10, setValue: setH10,
            restriction: alpha.some(i => h10.includes(i)), restrictiontext: 'Alphabets not allowed'
        },
        { 
            question: 'Histological Type:', questionId: 'h-11', questionType: questionType, inputtype: 'dropdown', options: [
                "Squamous cell carcinoma", "Conventional Acantholytic squamous cell carcinoma", "Adenosquamous carcinoma",
                "Basaloid squamous cell carcinoma", "Carcinoma cuniculatum", "Papillary squamous cell carcinoma",
                "Spindle cell squamous cell carcinoma", "Verrucous squamous cell carcinoma", "Lymphoepithelial carcinoma"
            ], value: h11, setValue: setH11 
        },
        { 
            question: 'Histological Grade:', questionId: 'h-12', questionType: questionType, inputtype: 'dropdown', options: [
                "G1", "G2", "G3", "GX"
            ], value: h12, setValue: setH12 
        },
        { 
            question: 'Tumor Extensions:', questionId: 'h-13', questionType: questionType, inputtype: 'dropdown', options: [
                "Skin", "Bone", "Nerve", "Other"
            ], value: h13, setValue: setH13 
        },
        { 
            question: 'Specimen Margin:', questionId: 'h-14', questionType: questionType, inputtype: 'dropdown', options: [
                "Involved", "Closed", "Free"
            ], value: h14, setValue: setH14 
        },
        { 
            question: 'Closest Margin Distance (mm):', questionId: 'h-15', questionType: questionType, inputtype: 'text', options: [], value: h15, setValue: setH15,
            restriction: alpha.some(i => h15.includes(i)), restrictiontext: 'Alphabets not allowed'
        },
        { 
            question: 'Lympho Vascular Emboli:', questionId: 'h-16', questionType: questionType, inputtype: 'dropdown', options: [
                "Not Identified", "Present", "Micro", "Macro"
            ], value: h16, setValue: setH16 
        },
        { 
            question: 'Perineural Invasion:', questionId: 'h-17', questionType: questionType, inputtype: 'dropdown', options: [
                "Not Identified", "Present", "Extent of Invasion"
            ], value: h17, setValue: setH17 
        },
        { 
            question: 'Worst Pattern of Invasion:', questionId: 'h-18', questionType: questionType, inputtype: 'dropdown', options: [
                "WPOI 5", "WPOI 1-4"
            ], value: h18, setValue: setH18 
        },
        { 
            question: 'Residual tumor assessment:RX/R0/R1/R2:', questionId: 'h-19', questionType: questionType, inputtype: 'dropdown', options: ["RX","R1","R2","R3"], value: h19, setValue: setH19,
            restriction: alpha.some(i => h19.includes(i)), restrictiontext: 'Alphabets not allowed'
        },
        { 
            question: 'Major salivary gland:', questionId: 'h-20', questionType: questionType, inputtype: 'dropdown', options: [
                "Involved", "Free"
            ], value: h20, setValue: setH20 
        },
        { 
            question: 'Minor salivary gland:', questionId: 'h-21', questionType: questionType, inputtype: 'dropdown', options: [
                "Involved", "Free"
            ], value: h21, setValue: setH21 
        },
        { 
            question: 'Regional Nodes:', questionId: 'h-22', questionType: questionType, inputtype: 'dropdown', options: [
                "Nodes Submitted", "Not Submitted"
            ], value: h22, setValue: setH22 
        },
        { 
            question: 'Nodes Orientation:', questionId: 'h-23', questionType: questionType, inputtype: 'dropdown', options: [
                "Oriented", "Not Oriented"
            ], value: h23, setValue: setH23 
        },
        { 
            question: 'Total Number of Nodes Identified:', questionId: 'h-24', questionType: questionType, inputtype: 'text', options: [], value: h24, setValue: setH24,
            restriction: alphaspecial.some(i => h24.includes(i)), restrictiontext: 'Alphabets and special characters not allowed'
        },
        { 
            question: 'Number of Nodes Involved:', questionId: 'h-25', questionType: questionType, inputtype: 'text', options: [], value: h25, setValue: setH25,
            restriction: alphaspecial.some(i => h25.includes(i)), restrictiontext: 'Alphabets and special characters not allowed'
        },
        { 
            question: 'Laterality of Involved Nodes:', questionId: 'h-26', questionType: questionType, inputtype: 'dropdown', options: [
                "Ipsilateral", "Contralateral", "Bilateral"
            ], value: h26, setValue: setH26 
        },
        { 
            question: 'Size of Largest Metastatic Deposit (cm):', questionId: 'h-27', questionType: questionType, inputtype: 'text', options: [], value: h27, setValue: setH27,
            restriction: alpha.some(i => h27.includes(i)), restrictiontext: 'Alphabets not allowed'
        },
        { 
            question: 'Level 1a (Total Nodes/ Positive Nodes/size of Deposit):', questionId: 'h-28', questionType: questionType, inputtype: 'text', options: [], value: h28, setValue: setH28 
        },
        { 
            question: 'Level 1b (Total Nodes/ Positive Nodes/size of Deposit):', questionId: 'h-29', questionType: questionType, inputtype: 'text', options: [], value: h29, setValue: setH29 
        },
        { 
            question: 'Level 2a (Total Nodes/ Positive Nodes/size of Deposit):', questionId: 'h-30', questionType: questionType, inputtype: 'text', options: [], value: h30, setValue: setH30 
        },
        { 
            question: 'Level 2b (Total Nodes/ Positive Nodes/size of Deposit):', questionId: 'h-31', questionType: questionType, inputtype: 'text', options: [], value: h31, setValue: setH31 
        },
        { 
            question: 'Level 3 (Total Nodes/ Positive Nodes/size of Deposit):', questionId: 'h-32', questionType: questionType, inputtype: 'text', options: [], value: h32, setValue: setH32 
        },
        { 
            question: 'Level 4 (Total Nodes/ Positive Nodes/size of Deposit):', questionId: 'h-33', questionType: questionType, inputtype: 'text', options: [], value: h33, setValue: setH33 
        },
        { 
            question: 'Level 5 (Total Nodes/ Positive Nodes/size of Deposit):', questionId: 'h-34', questionType: questionType, inputtype: 'text', options: [], value: h34, setValue: setH34 
        },
        { 
            question: 'Extra Nodal Extension (ENE):', questionId: 'h-35', questionType: questionType, inputtype: 'dropdown', options: [
                "Yes", "No"
            ], value: h35, setValue: setH35 
        },
        { 
            question: 'Distance from Lymph Node Capsule (mm):', questionId: 'h-36', questionType: questionType, inputtype: 'text', options: [], value: h36, setValue: setH36,
            restriction: alpha.some(i => h36.includes(i)), restrictiontext: 'Alphabets not allowed'
        },
        { 
            question: 'ENE (ma) (>2 mm):', questionId: 'h-37', questionType: questionType, inputtype: 'dropdown', options: [
                "Yes", "No"
            ], value: h37, setValue: setH37 
        },
        { 
            question: 'ENE (mi) (≤2 mm):', questionId: 'h-38', questionType: questionType, inputtype: 'dropdown', options: [
                "Yes", "No"
            ], value: h38, setValue: setH38 
        },
        { 
            question: 'pT:', questionId: 'h-39', questionType: questionType, inputtype: 'dropdown', options: [
                "pT1",
                "pT2",
                "pT3",
                "pT4a",
                "pT4b"
            ], value: h39, setValue: setH39 
        },
        { 
            question: 'pN:', questionId: 'h-40', questionType: questionType, inputtype: 'dropdown', options: [
                "pN0",
                "pN1",
                "pN2a",
                "pN2b",
                "pN3a",
                "pN3b"
            ], value: h40, setValue: setH40 
        }
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
            setDataloading(false);
            console.log(apidata)
            if (apidata.executed) {
                const questiondata = apidata.data.data;
                const questionsArray = [questions1]
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

            alpha.some(i => h5.includes(i)) ||
            alpha.some(i => h6.includes(i)) ||
            alpha.some(i => h7.includes(i)) ||
            alpha.some(i => h8.includes(i)) ||
            alpha.some(i => h9.includes(i)) ||
            alpha.some(i => h10.includes(i)) ||
            alpha.some(i => h15.includes(i)) ||
            alpha.some(i => h27.includes(i)) ||
            alpha.some(i => h36.includes(i)) ||
            alphaspecial.some(i => h24.includes(i)) ||
            alphaspecial.some(i => h25.includes(i)) 




        ) {
            if (alpha.some(i => h5.includes(i))) {
                toast({
                    title: "Error",
                    description: "Invalid input detected in Tumor Size - Length.",
                    variant: "destructive",
                });
            } else if (alpha.some(i => h6.includes(i))) {
                toast({
                    title: "Error",
                    description: "Invalid input detected in Tumor Size - Width.",
                    variant: "destructive",
                });
            } else if (alpha.some(i => h7.includes(i))) {
                toast({
                    title: "Error",
                    description: "Invalid input detected in Tumor Size - Depth.",
                    variant: "destructive",
                });
            } else if (alpha.some(i => h8.includes(i))) {
                toast({
                    title: "Error",
                    description: "Invalid input detected in Greatest Tumor Dimension.",
                    variant: "destructive",
                });
            } else if (alpha.some(i => h9.includes(i))) {
                toast({
                    title: "Error",
                    description: "Invalid input detected in Depth of Invasion.",
                    variant: "destructive",
                });
            } else if (alpha.some(i => h10.includes(i))) {
                toast({
                    title: "Error",
                    description: "Invalid input detected in Tumor Thickness.",
                    variant: "destructive",
                });
            } else if (alpha.some(i => h15.includes(i))) {
                toast({
                    title: "Error",
                    description: "Invalid input detected in Closest Margin Distance.",
                    variant: "destructive",
                });
            } else if (alpha.some(i => h27.includes(i))) {
                toast({
                    title: "Error",
                    description: "Invalid input detected in Size of Largest Metastatic Deposit.",
                    variant: "destructive",
                });
            } else if (alpha.some(i => h36.includes(i))) {
                toast({
                    title: "Error",
                    description: "Invalid input detected in Distance from Lymph Node Capsule.",
                    variant: "destructive",
                });
            } else if (alphaspecial.some(i => h24.includes(i))) {
                toast({
                    title: "Error",
                    description: "Invalid input detected in Total Number of Nodes Identified.",
                    variant: "destructive",
                });
            } else if (alphaspecial.some(i => h25.includes(i))) {
                toast({
                    title: "Error",
                    description: "Invalid input detected in Number of Nodes Involved.",
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
                            router.push("/form/treatmentplanafterhpe")
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




            <CustomForm questions={questions1} handleSubmit={handleSubmit1} buttontitle="Submit & Next" formtitle={formTitle} loading={loading} />

        </div>
    );
}

export default Histopathology
