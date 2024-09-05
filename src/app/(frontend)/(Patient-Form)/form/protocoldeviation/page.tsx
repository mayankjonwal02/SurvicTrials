"use client"
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import CustomForm from '@/components/customform';
import { set } from 'mongoose';

const Protocoldeviation = () => {
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
    const questionType = "protocoldeviation";
    const formTitle = "Protocol Deviation due to Chemotherapy";
    const [tabValue, setTabValue] = useState("section1");
    const [loading, setLoading] = React.useState(false);

    // Section 1
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [otherCategory, setOtherCategory] = useState('');
    const [impactSubjectSafety, setImpactSubjectSafety] = useState('');
    const [affectDataIntegrity, setAffectDataIntegrity] = useState('');
    const [affectWillingness, setAffectWillingness] = useState('');
    const [reportingDate, setReportingDate] = useState('');
    const [piSignDate, setPiSignDate] = useState('');










    const questions1 = [
        { question: 'Start Date:', questionId: 'p2-1', questionType: questionType, inputtype: 'date', options: [], value: startDate, setValue: setStartDate, info: ["If one or more is answered yes for any event, it must be reported to the IRB promptly (14 business days from notification of or becoming aware of the event)."] },
        { question: 'End Date:', questionId: 'p2-2', questionType: questionType, inputtype: 'date', options: [], value: endDate, setValue: setEndDate },
        {
            question: 'Description:', questionId: 'p2-3', questionType: questionType, inputtype: 'dropdown',
            options: [
                "Withdrew consent",
                "Inoperable Primary Included in the study",
                "N0-N1 Patients included in the study",
                "Wrong chemotherapy dose or chemotherapy protocol other than TPF/TPX",
                "Deviation from Protocol timeline Adherence: Enrollment to resumption of treatment within 3 weeks",
                "Deviation from Protocol timeline Adherence: ICT to surgery within 6 weeks",
                "Deviation from Protocol timeline Adherence: Number of chemotherapy cycles 2",
                "Deviation from Protocol timeline Adherence: Defaulted for Surgery",
                "Deviation from Protocol timeline Adherence: Surgery to Adjuvant radiotherapy within 8 weeks",
                "Deviation from Protocol timeline Adherence: Missed or defaulted indicated adjuvant treatment",
                "Incomplete/Inaccurate data on Surgery/Chemotherapy/Radiotherapy",
                "Patient missed scheduled visits on follow ups"
            ]
            , value: description, setValue: setDescription
        },
        {
            question: 'Category:', questionId: 'p2-4', questionType: questionType, inputtype: 'dropdown', options: ["Consent Deviation",
                "Drug Administration/Accountability",
                "Enrollment Deviation",
                "Procedural Deviation",
                "Loss of Confidentiality",
                "Other"], value: category, setValue: setCategory
        },
        { question: 'Other Category:', questionId: 'p2-5', questionType: questionType, inputtype: 'text', options: [], value: otherCategory, setValue: setOtherCategory },
        { question: 'Does deviation/ unanticipated problem have the potential to*: Impact subject safety:', questionId: 'p2-6', questionType: questionType, inputtype: 'dropdown', options: ["Yes", "No", "NA"], value: impactSubjectSafety, setValue: setImpactSubjectSafety },
        { question: 'Does deviation/ unanticipated problem have the potential to*: Affect data integrity:', questionId: 'p2-7', questionType: questionType, inputtype: 'dropdown', options: ["Yes", "No", "NA"], value: affectDataIntegrity, setValue: setAffectDataIntegrity },
        { question: 'Does deviation/ unanticipated problem have the potential to*: Affect subject’s willingness to participate?:', questionId: 'p2-8', questionType: questionType, inputtype: 'dropdown', options: ["Yes", "No", "NA"], value: affectWillingness, setValue: setAffectWillingness },
        { question: 'Date of Reporting:', questionId: 'p2-9', questionType: questionType, inputtype: 'date', options: [], value: reportingDate, setValue: setReportingDate },
        { question: 'PI Sign Date:', questionId: 'p2-10', questionType: questionType, inputtype: 'date', options: [], value: piSignDate, setValue: setPiSignDate }
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
                            const questionsArray = [questions1]
                            questionsArray.forEach((question_list) => {
                                question_list.map((question) => {
                                    const requiredquestionid = question.questionId;
                                    const questionvalue = questiondata.find((this_question: { questionId: string; }) => this_question.questionId === requiredquestionid)?.answer;

                                    questionvalue !== undefined && question.setValue(questionvalue)
                                })
                            })


                        }
                        else {
                            //   toast({
                            //     title: "Error",
                            //     description: apidata.message,
                            //     variant: "destructive",
                            //   })
                            console.log("Data not found")
                        }
                    })


            }
            else {
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




            <CustomForm questions={questions1} handleSubmit={handleSubmit1} buttontitle="Submit & Next" formtitle={formTitle} loading={loading} />

        </div>
    );
}

export default Protocoldeviation
