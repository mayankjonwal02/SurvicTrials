"use client"
import React, {useState,useEffect} from 'react'
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import CustomForm from '@/components/customform';

const Counselling = () =>  {
    const { toast } = useToast()
    const router = useRouter();

    const [user, setUser] = useState<any>({});
    const [userid, setUserId] = useState('');
    const [patient_trial_number, setPatient_trial_number] = React.useState("2024-BTI-1");
    const [dataloading, setDataloading] = useState(true);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
        setUser(storedUser);
        setUserId(storedUser.unique_id);
    }, []);
    const questionType = "Counselling";
    const formTitle = "Counselling Form";
    const [tabValue, setTabValue] = useState("section1");
    const [loading, setLoading] = React.useState(false);

    // Section 1
    const [patientName, setPatientName] = useState('');
    const [hospitalCRNumber, setHospitalCRNumber] = useState('');
    const [dateOfVisit, setDateOfVisit] = useState('');
    const [counsellingDoneBy, setCounsellingDoneBy] = useState('');
    const [resultOfScreening, setResultOfScreening] = useState('');
    const [patientInfoSheetHandOver, setPatientInfoSheetHandOver] = useState('');
    const [patientQueries, setPatientQueries] = useState("");
    const [patientQueryAnswered, setPatientQueryAnswered] = useState('');
    const [outcomeOfCounselling, setOutcomeOfCounselling] = useState('');
    const [reasonIfDisagree, setReasonIfDisagree] = useState('');
    const [plannedDateOfEnrollment, setPlannedDateOfEnrollment] = useState('');
    const [trialNumber, setTrialNumber] = useState(patient_trial_number);

    const questions1 = [
        { question: 'Patient Name:', questionId: 'cc_1', questionType: questionType, inputtype: 'disabled', options: [], value: patientName, setValue: setPatientName },
        { question: 'Hospital CR Number:', questionId: 'cc_2', questionType: questionType, inputtype: 'text', options: [], value: hospitalCRNumber, setValue: setHospitalCRNumber },
        { question: 'Date of Visit:', questionId: 'cc_3', questionType: questionType, inputtype: 'date', options: [], value: dateOfVisit, setValue: setDateOfVisit },
        { question: 'Counselling Done By:', questionId: 'cc_4', questionType: questionType, inputtype: 'text', options: [], value: counsellingDoneBy, setValue: setCounsellingDoneBy },
        { question: 'Result of Screening (Eligible/Ineligible):', questionId: 'cc_5', questionType: questionType, inputtype: 'dropdown', options: ['Eligible', 'Ineligible'], value: resultOfScreening, setValue: setResultOfScreening },
        { question: 'Patient Information Sheet Hand Over (Yes/No):', questionId: 'cc_6', questionType: questionType, inputtype: 'dropdown', options: ['Yes', 'No'], value: patientInfoSheetHandOver, setValue: setPatientInfoSheetHandOver },
        { question: 'Patient Queries (Enumerate):', questionId: 'cc_7', questionType: questionType, inputtype: 'textarea', options: [], value: patientQueries, setValue: setPatientQueries },
        { question: 'Patient Query Answered (Yes/No):', questionId: 'cc_8', questionType: questionType, inputtype: 'dropdown', options: ['Yes', 'No',"NA"], value: patientQueryAnswered, setValue: setPatientQueryAnswered },
        { question: 'Outcome of Counselling (Agree/Disagree):', questionId: 'cc_9', questionType: questionType, inputtype: 'dropdown', options: ['Agree', 'Disagree'], value: outcomeOfCounselling, setValue: setOutcomeOfCounselling },
        { question: 'If Disagree - Mention Reason:', questionId: 'cc_10', questionType: questionType, inputtype: 'textarea', options: [], value: reasonIfDisagree, setValue: setReasonIfDisagree },
        { question: 'Planned Date of Enrollment:', questionId: 'cc_11', questionType: questionType, inputtype: 'date', options: [], value: plannedDateOfEnrollment, setValue: setPlannedDateOfEnrollment },
        { question: 'Trial Number:', questionId: 'cc_12', questionType: questionType, inputtype: 'disabled', options: [], value: trialNumber, setValue: setTrialNumber },
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

                const userdata = apidata.data 

                userdata.patientName !== undefined && setPatientName(userdata.patientName)
                userdata.patient_trial_number !== undefined && setTrialNumber(userdata.patient_trial_number)
                
                

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
                            router.push("/form/demographic")
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




            <CustomForm questions={questions1} handleSubmit={handleSubmit1} buttontitle="Submit & Next" formtitle={formTitle} loading={loading} />

        </div>
    );
}

export default Counselling
