"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import CustomForm from '@/components/customform';

const PatientRemoval = () => {
    const { toast } = useToast();
    const router = useRouter();
    const [user, setUser] = useState<any>({});
    const [userid, setUserId] = useState('');
    const [loading, setLoading] = useState(false);
    const [dataloading, setDataloading] = useState(false);

    const [patient_trial_number, setPatient_trial_number] = useState("");
    const [removal_reason, setRemovalReason] = useState("");
    const [removal_date, setRemovalDate] = useState("");
    const [comments, setComments] = useState("");
    const [name, setName] = useState("");
    const [hospital_number, setHospitalNumber] = useState("");
    const [evaluation_done_by, setEvaluationDoneBy] = useState("");
    const [who_present, setWhoPresent] = useState("");
    const [time_spent, setTimeSpent] = useState("");
    const [location_counselling, setLocationCounselling] = useState("");
    const [alternate_treatment, setAlternateTreatment] = useState("");
    const [patient_asked_queries, setPatientAskedQueries] = useState("");
    const [specific_queries, setSpecificQueries] = useState("");
    const [edc_entries, setEdcEntries] = useState("");
    const [iec_intimation, setIecIntimation] = useState("");
    const [next_treatment_plan, setNextTreatmentPlan] = useState("");
    const [next_follow_up, setNextFollowUp] = useState("");
    const [other_remarks, setOtherRemarks] = useState("");

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
        setUser(storedUser);
        setUserId(storedUser.unique_id);
    }, []);

    // useEffect(() => {
    //     const fetchPatientData = async () => {
    //         const storedPatientTrialNumber = localStorage.getItem("patienttrialnumber");
    //         if (storedPatientTrialNumber) {
    //             setPatient_trial_number(storedPatientTrialNumber);
    //             try {
    //                 const response = await fetch("/api/getpatientbytrialid", {
    //                     method: "POST",
    //                     headers: { 'Content-Type': 'application/json' },
    //                     body: JSON.stringify({ trialid: storedPatientTrialNumber }),
    //                 });
    //                 const data = await response.json();
    //                 if (data.executed) {
    //                     setPatient_trial_number(data.data.patient_trial_number || "");
    //                 } else {
    //                     toast({
    //                         title: "Error",
    //                         description: data.message,
    //                         variant: "destructive",
    //                     });
    //                 }
    //             } catch (error:any) {
    //                 console.error(error);
    //                 toast({
    //                     title: "Error",
    //                     description: error.message,
    //                     variant: "destructive",
    //                 });
    //             }
    //         }
    //     };
    //     fetchPatientData();
    // }, []);

    const questions = [
        { question: 'Patient Trial Number:', questionType: 'removal', questionId: 'pr-0', inputtype: 'disabled', options: [], value: patient_trial_number, setValue: setPatient_trial_number },
        { question: 'Name:', questionType: 'removal', questionId: 'pr-1', inputtype: 'text', options: [], value: name, setValue: setName },
        { question: 'Hospital Number:', questionType: 'removal', questionId: 'pr-2', inputtype: 'text', options: [], value: hospital_number, setValue: setHospitalNumber },
        { question: 'Evaluation done by (Doctor):', questionType: 'removal', questionId: 'pr-3', inputtype: 'text', options: [], value: evaluation_done_by, setValue: setEvaluationDoneBy },
        { question: 'Who was present during evaluation:', questionType: 'removal', questionId: 'pr-4', inputtype: 'text', options: [], value: who_present, setValue: setWhoPresent },
        { question: 'Reason for removal from clinical trial:', questionType: 'removal', questionId: 'pr-5', inputtype: 'dropdown', options: [
            "Completed protocol treatment and follow up",
            "Patient wishes to withdraw",
            "Withdrawn due to toxicity",
            "Withdrawn due to alternate treatment plan",
            "Withdrawn due to lack of benefit from trial medicine",
            "All", "Other Reason"
        ], value: removal_reason, setValue: setRemovalReason },
        { question: 'Time spent in counselling:', questionType: 'removal', questionId: 'pr-6', inputtype: 'text', options: [], value: time_spent, setValue: setTimeSpent },
        { question: 'Location where counselling done:', questionType: 'removal', questionId: 'pr-7', inputtype: 'text', options: [], value: location_counselling, setValue: setLocationCounselling },
        { question: 'Alternate treatment options explained details:', questionType: 'removal', questionId: 'pr-8', inputtype: 'text', options: [], value: alternate_treatment, setValue: setAlternateTreatment },
        { question: 'Patient asked for queries:', questionType: 'removal', questionId: 'pr-9', inputtype: 'dropdown', options: ["Yes", "No"], value: patient_asked_queries, setValue: setPatientAskedQueries },
        { question: 'Specific queries, if any:', questionType: 'removal', questionId: 'pr-10', inputtype: 'text', options: [], value: specific_queries, setValue: setSpecificQueries },
        { question: 'EDC entries (date of completion):', questionType: 'removal', questionId: 'pr-11', inputtype: 'date', options: [], value: edc_entries, setValue: setEdcEntries },
        { question: 'IEC intimation, if applicable:', questionType: 'removal', questionId: 'pr-12', inputtype: 'text', options: [], value: iec_intimation, setValue: setIecIntimation },
        { question: 'Next Treatment Plan:', questionType: 'removal', questionId: 'pr-13', inputtype: 'text', options: [], value: next_treatment_plan, setValue: setNextTreatmentPlan },
        { question: 'Next follow up visit planned on:', questionType: 'removal', questionId: 'pr-14', inputtype: 'date', options: [], value: next_follow_up, setValue: setNextFollowUp },
        { question: 'Other remarks:', questionType: 'removal', questionId: 'pr-15', inputtype: 'textarea', options: [], value: other_remarks, setValue: setOtherRemarks },
    ];
    useEffect(() => {

        const fetchalldata = async () => {
            setDataloading(true)
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
                            const questionsArray = [questions];
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

    const handleSubmit = () => {
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
                        questions: questions,
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
                                description: "Patient Removal Submitted",
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


    if (dataloading) {
        return <div className="flex items-center justify-center h-screen w-full text-3xl font-bold text-green-5 ">
            <div className="w-[70px] h-[70px] border border-4 border-t-0 border-green-700 rounded-full animate-spin">
            </div>
        </div>;
    }

    return (
        <div className='w-full h-screen'>
            <CustomForm
                questions={questions}
                handleSubmit={handleSubmit}
                buttontitle="Submit"
                formtitle="Patient Removal From Study"
                loading={loading}
                alertRequired={true}
            />
        </div>
    );
};

export default PatientRemoval;
