"use client"
import React, {useState,useEffect} from 'react'
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import CustomForm from '@/components/customform';

const Protocoldeviation = () => {
    const { toast } = useToast()
    const router = useRouter();

    const [user, setUser] = useState<any>({});
    const userid = "mayankjonwal"
    const [patient_trial_number, setPatient_trial_number] = React.useState("2024-BTI-1");

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
        setUser(storedUser);
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
        { question: 'Start Date:', questionId: 'p2-1', questionType: questionType, inputtype: 'date', options: [], value: startDate, setValue: setStartDate },
        { question: 'End Date:', questionId: 'p2-2', questionType: questionType, inputtype: 'date', options: [], value: endDate, setValue: setEndDate },
        { question: 'Description:', questionId: 'p2-3', questionType: questionType, inputtype: 'textarea', options: [], value: description, setValue: setDescription },
        { question: 'Category:', questionId: 'p2-4', questionType: questionType, inputtype: 'dropdown', options: [ "Consent Deviation",
            "Drug Administration/Accountability",
            "Enrollment Deviation",
            "Procedural Deviation",
            "Loss of Confidentiality",
            "Other"], value: category, setValue: setCategory },
        { question: 'Other Category:', questionId: 'p2-5', questionType: questionType, inputtype: 'text', options: [], value: otherCategory, setValue: setOtherCategory },
        { question: 'Does deviation/ unanticipated problem have the potential to*: Impact subject safety:', questionId: 'p2-6', questionType: questionType, inputtype: 'dropdown', options: [ "Impact subject safety",
            "Affect data integrity",
            "Affect subject’s willingness to participate"], value: impactSubjectSafety, setValue: setImpactSubjectSafety },
        { question: 'Does deviation/ unanticipated problem have the potential to*: Affect data integrity:', questionId: 'p2-7', questionType: questionType, inputtype: 'dropdown', options: [   "Impact subject safety",
            "Affect data integrity",
            "Affect subject’s willingness to participate"], value: affectDataIntegrity, setValue: setAffectDataIntegrity },
        { question: 'Does deviation/ unanticipated problem have the potential to*: Affect subject’s willingness to participate?:', questionId: 'p2-8', questionType: questionType, inputtype: 'dropdown', options: [   "Impact subject safety",
            "Affect data integrity",
            "Affect subject’s willingness to participate"], value: affectWillingness, setValue: setAffectWillingness },
        { question: 'Date of Reporting:', questionId: 'p2-9', questionType: questionType, inputtype: 'date', options: [], value: reportingDate, setValue: setReportingDate },
        { question: 'PI Sign Date:', questionId: 'p2-10', questionType: questionType, inputtype: 'date', options: [], value: piSignDate, setValue: setPiSignDate }
      ];
    







    const handleSubmit1 = () => {
        if (
            questions1.some((question) => question.value === '')





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












    return (
        <div className=' '>




            <CustomForm questions={questions1} handleSubmit={handleSubmit1} buttontitle="Submit & Next" formtitle={formTitle} loading={loading} />

        </div>
    );
}

export default Protocoldeviation
