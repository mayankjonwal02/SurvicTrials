"use client"
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import CustomForm from '@/components/customform';

const SeriousAdverseEvent = () => {
    const { toast } = useToast();
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

    const questionType = "seriousadverseevent";
    const formTitle = "Serious Adverse Event"; 
    const [loading, setLoading] = React.useState(false);

    const [recordID, setRecordID] = useState('');
    const [subjectID, setSubjectID] = useState('');
    const [initialsAndCase, setInitialsAndCase] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [reportType, setReportType] = useState('');
    const [initialReportDate, setInitialReportDate] = useState('');
    const [assessmentRelatedness, setAssessmentRelatedness] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [onsetDate, setOnsetDate] = useState('');
    const [reportingDate, setReportingDate] = useState('');
    const [onsetLagTime, setOnsetLagTime] = useState('');
    const [locationSAE, setLocationSAE] = useState('');
    const [suspectedStudyDrug, setSuspectedStudyDrug] = useState('');
    const [studyDrugIndication, setStudyDrugIndication] = useState('');
    const [routeOfAdministration, setRouteOfAdministration] = useState('');
    const [therapyStartDate, setTherapyStartDate] = useState('');
    const [therapyStopDate, setTherapyStopDate] = useState('');
    const [studyInterventionDiscontinued, setStudyInterventionDiscontinued] = useState('');
    const [reactionDecline, setReactionDecline] = useState('');
    const [doseDetails, setDoseDetails] = useState('');
    const [reactionReappear, setReactionReappear] = useState('');
    const [reintroduceDoseDetails, setReintroduceDoseDetails] = useState('');
    const [concomitantDrugs, setConcomitantDrugs] = useState('');
    const [similarSAE, setSimilarSAE] = useState('');
    const [saeSeriousness, setSaeSeriousness] = useState('');
    const [medicalManagement, setMedicalManagement] = useState('');
    const [causeSAE, setCauseSAE] = useState('');
    const [outcomeSAE, setOutcomeSAE] = useState('');
    const [continuedOnTrial, setContinuedOnTrial] = useState('');
    const [piAssessment, setPiAssessment] = useState('');
    const [communicatedToAgencies, setCommunicatedToAgencies] = useState('');
    const [protocolAlteration, setProtocolAlteration] = useState('');
    const [compensationDetails, setCompensationDetails] = useState('');

    const questions1 = [
        { question: 'Record ID:', questionId: 's_1', questionType: questionType, inputtype: 'text', options: [], value: recordID, setValue: setRecordID },
        { question: 'Subject ID:', questionId: 's_2', questionType: questionType, inputtype: 'text', options: [], value: subjectID, setValue: setSubjectID },
        { question: 'Initials and Case:', questionId: 's_3', questionType: questionType, inputtype: 'text', options: [], value: initialsAndCase, setValue: setInitialsAndCase },
        { question: 'AGE:', questionId: 's_4', questionType: questionType, inputtype: 'text', options: [], value: age, setValue: setAge },
        { question: 'GENDER:', questionId: 's_5', questionType: questionType, inputtype: 'dropdown', options: ["Male", "Female"], value: gender, setValue: setGender },
        { question: 'Weight:', questionId: 's_6', questionType: questionType, inputtype: 'text', options: [], value: weight, setValue: setWeight },
        { question: 'Height:', questionId: 's_7', questionType: questionType, inputtype: 'text', options: [], value: height, setValue: setHeight },
        { question: 'Report Type:', questionId: 's_8', questionType: questionType, inputtype: 'dropdown', options: ["Initial", "Follow up", "Final"], value: reportType, setValue: setReportType },
        { question: 'Initial Report Date:', questionId: 's_9', questionType: questionType, inputtype: 'date', options: [], value: initialReportDate, setValue: setInitialReportDate },
        { question: 'Assessment of Relatedness:', questionId: 's_10', questionType: questionType, inputtype: 'dropdown', options: ["By PI- Related", "By- sponsor related", "By EC Related", "By PI- Unrelated", "By- sponsor Unrelated", "By EC unRelated"], value: assessmentRelatedness, setValue: setAssessmentRelatedness },
        { question: 'Event Description:', questionId: 's_11', questionType: questionType, inputtype: 'text', options: [], value: eventDescription, setValue: setEventDescription },
        { question: 'Date of onset SAE:', questionId: 's_12', questionType: questionType, inputtype: 'date', options: [], value: onsetDate, setValue: setOnsetDate },
        { question: 'Date of Reporting:', questionId: 's_13', questionType: questionType, inputtype: 'date', options: [], value: reportingDate, setValue: setReportingDate },
        { question: 'Onset lag time after administration of intervention:', questionId: 's_14', questionType: questionType, inputtype: 'text', options: [], value: onsetLagTime, setValue: setOnsetLagTime },
        { question: 'Location of SAE:', questionId: 's_15', questionType: questionType, inputtype: 'dropdown', options: ["Clinical", "Ward", "Home", "Other"], value: locationSAE, setValue: setLocationSAE },
        { question: 'Suspected study drug/device/procedure causing SAE:', questionId: 's_16', questionType: questionType, inputtype: 'text', options: [], value: suspectedStudyDrug, setValue: setSuspectedStudyDrug },
        { question: 'Study Drug Indication:', questionId: 's_17', questionType: questionType, inputtype: 'text', options: [], value: studyDrugIndication, setValue: setStudyDrugIndication },
        { question: 'Route of Administration:', questionId: 's_18', questionType: questionType, inputtype: 'text', options: [], value: routeOfAdministration, setValue: setRouteOfAdministration },
        { question: 'Therapy Start Date:', questionId: 's_19', questionType: questionType, inputtype: 'date', options: [], value: therapyStartDate, setValue: setTherapyStartDate },
        { question: 'Therapy Stop Date:', questionId: 's_20', questionType: questionType, inputtype: 'date', options: [], value: therapyStopDate, setValue: setTherapyStopDate },
        { question: 'Study Intervention Discontinued:', questionId: 's_21', questionType: questionType, inputtype: 'dropdown', options: ["Yes", "No", "Not Applicable"], value: studyInterventionDiscontinued, setValue: setStudyInterventionDiscontinued },
        { question: 'Reaction Decline:', questionId: 's_22', questionType: questionType, inputtype: 'dropdown', options: ["Yes", "No", "Not Applicable"], value: reactionDecline, setValue: setReactionDecline },
        { question: 'Dose Details:', questionId: 's_23', questionType: questionType, inputtype: 'text', options: [], value: doseDetails, setValue: setDoseDetails },
        { question: 'Reaction Reappear:', questionId: 's_24', questionType: questionType, inputtype: 'dropdown', options: ["Yes", "No", "Not Applicable"], value: reactionReappear, setValue: setReactionReappear },
        { question: 'Reintroduce Dose Details:', questionId: 's_25', questionType: questionType, inputtype: 'text', options: [], value: reintroduceDoseDetails, setValue: setReintroduceDoseDetails },
        { question: 'Concomitant drugs and relevant history (excluding treatment of event):', questionId: 's_26', questionType: questionType, inputtype: 'text', options: [], value: concomitantDrugs, setValue: setConcomitantDrugs },
        { question: 'Similar SAE/same pt in Past:', questionId: 's_27', questionType: questionType, inputtype: 'dropdown', options: ["Yes", "No"], value: similarSAE, setValue: setSimilarSAE },
        { question: 'SAE seriousness:', questionId: 's_28', questionType: questionType, inputtype: 'dropdown', options: ["Death", "Life threatening", "Hospitalization/Prolonged", "Significant Disability", "Congenital anomaly/Birth defect", "Requires Intervention to Prevent Permanent Impairment", "Other serious event"], value: saeSeriousness, setValue: setSaeSeriousness },
        { question: 'Medical Management:', questionId: 's_29', questionType: questionType, inputtype: 'text', options: [], value: medicalManagement, setValue: setMedicalManagement },
        { question: 'Cause of SAE:', questionId: 's_30', questionType: questionType, inputtype: 'text', options: [], value: causeSAE, setValue: setCauseSAE },
        { question: 'Outcome of SAE:', questionId: 's_31', questionType: questionType, inputtype: 'dropdown', options: ["Recovered", "Recovering", "Continuing", "Prolonged", "Recovered with Sequelae", "Death", "Not Related to SAE"], value: outcomeSAE, setValue: setOutcomeSAE },
        { question: 'Continued on Trial:', questionId: 's_32', questionType: questionType, inputtype: 'dropdown', options: ["Yes", "No"], value: continuedOnTrial, setValue: setContinuedOnTrial },
        { question: 'PI assessment of SAE:', questionId: 's_33', questionType: questionType, inputtype: 'dropdown', options: ["Definitely Related", "Probably Related", "Possibly Related", "Unlikely Related", "Not Related"], value: piAssessment, setValue: setPiAssessment },
        { question: 'Communicated to Regulatory/Other agencies:', questionId: 's_34', questionType: questionType, inputtype: 'dropdown', options: ["Yes", "No"], value: communicatedToAgencies, setValue: setCommunicatedToAgencies },
        { question: 'Protocol/ICD alteration:', questionId: 's_35', questionType: questionType, inputtype: 'dropdown', options: ["Yes", "No"], value: protocolAlteration, setValue: setProtocolAlteration },
        { question: 'Details of Compensation to Subject/Family:', questionId: 's_36', questionType: questionType, inputtype: 'text', options: [], value: compensationDetails, setValue: setCompensationDetails },
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
                            router.push("/form/followupreport")
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




            <CustomForm questions={questions1} handleSubmit={handleSubmit1} buttontitle="Submit & Next" formtitle={formTitle} loading={loading} />;

        </div>
    )
}


export default SeriousAdverseEvent;
