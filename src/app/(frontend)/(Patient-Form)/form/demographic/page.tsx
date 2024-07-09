"use client"
import React, {useState,useEffect} from 'react'
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import CustomForm from '@/components/customform';
import { set } from 'mongoose';

const Demographic = () => {
    const { toast } = useToast()
    const router = useRouter();
    const questionType = "demographic";
    const [loading, setLoading] = React.useState(false);
    const [patient_trial_number, setPatient_trial_number] = React.useState("2024-BTI-1");
    const [dateodopdregistration, setDateodopdregistration] = React.useState("");
    const [name, setName] = React.useState("ninja");
    const [name_primary_care_giver, setName_primary_care_giver] = React.useState("");
    const [contact_primary_care_giver, setContact_primary_care_giver] = React.useState("");
    const [contact, setContact] = React.useState("");
    const [dateofbirth, setDateofbirth] = React.useState("");
    const [gender, setGender] = React.useState("");
    const [menopausalstate, setMenopausalstate] = React.useState("");
    const [addressline1, setAddressline1] = React.useState("");
    const [addressline2, setAddressline2] = React.useState("");
    const [maritalstatus , setMaritalstatus] = React.useState("");
    const [education, setEducation] = React.useState("");
    const [occupation, setOccupation] = React.useState("");
    const [ familyincome , setFamilyincome] = React.useState("");
    const [user, setUser] = useState<any>({});
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
        setUser(storedUser);
    }, []);
   
    const questions = [
        { question: 'Patient Trial Number:',questionType:questionType,questionId:'d-0', inputtype:'disabled' , options: [], value: patient_trial_number, setValue: setPatient_trial_number },

        { question: 'Date of OPD Registration:',questionType:questionType,questionId:'d-1', inputtype:'date' , options: [], value: dateodopdregistration, setValue: setDateodopdregistration },
        { question: 'Name :',questionType:questionType,questionId:'d-2', inputtype:'disabled' , options: [], value: name, setValue: setName },
        { question: 'Name of Primary Caregiver:',questionType:questionType,questionId:'d-3', inputtype:'text' , options: [], value: name_primary_care_giver, setValue: setName_primary_care_giver },
        { question: 'Primary Caregiver Phone Number:',questionType:questionType,questionId:'d-4', inputtype:'text' , options: [], value: contact_primary_care_giver, setValue: setContact_primary_care_giver },
        { question: 'Phone Number:',questionType:questionType,questionId:'d-5', inputtype:'text' , options: [], value: contact, setValue: setContact },
        { question: 'Date of Birth:',questionType:questionType,questionId:'d-6', inputtype:'date' , options: [], value: dateofbirth, setValue: setDateofbirth },
        {question:'Gender:',questionType:questionType,questionId:'d-7',inputtype:'dropdown',options:["Male","Female","Others"],value:gender,setValue:setGender},
        {question:'Menopausal State:',questionType:questionType,questionId:'d-8',inputtype:'dropdown',options:["Premenopausal","Postmenopausal","Not Applicable"],value: menopausalstate,setValue: setMenopausalstate},
        {question:'Address Line 1:',questionType:questionType,questionId:'d-9',inputtype:'text',options:[],value:addressline1,setValue: setAddressline1},
        {question:'Address Line 2',questionType:questionType,questionId:'d-10',inputtype:'text',options:[],value: addressline2,setValue: setAddressline2},
        {question:'Marital Status:',questionType:questionType,questionId:'d-11',inputtype:'dropdown',options:["Single","Married","Divorced","Widowed"],value: maritalstatus,setValue: setMaritalstatus},
        {question:'Education:',questionType:questionType,questionId:'d-12',inputtype:'dropdown',options:["Illiterate","Primary School"," Middle School","High School","Intermediate/Diploma","Graduate","Professional Degree"],value: education,setValue: setEducation},
        {question:'Occupation:',questionType:questionType,questionId:'d-13',inputtype:'dropdown',options:["Professional","Semi-professional","Student","Clerical/Shop/Farmer","Skilled Worker","Semi-Skilled Worker","Unskilled Worker","Retired","Home-Maker","Unemployed"],value: occupation,setValue: setOccupation},
        {question:'Family Income (per Month):',questionType:questionType,questionId:'d-14',inputtype:'dropdown',options:["47,348 or more","23,674 - 47,347","17,756 - 23,673","11,837 - 17,755","7,102 - 11,836","2,391 - 7,101","2,390 or less"],value:familyincome,setValue: setFamilyincome},

    ];

    const handleSubmit = () => {
        if (
            dateodopdregistration === "" ||
            name === "" ||
            name_primary_care_giver === "" ||
            contact_primary_care_giver === "" ||
            contact === "" ||
            dateofbirth === "" ||
            gender === "" ||
            menopausalstate === "" ||
            addressline1 === "" ||
            addressline2 === "" ||
            maritalstatus === "" ||
            education === "" ||
            occupation === "" ||
            familyincome === ""
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
                    headers:{
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        patient_trial_number:patient_trial_number, 
                        questions: questions , 
                        submittedBy : "mayankj"
                    })
                })
                .then(response => response.json())
                .then(data => {
                    setLoading(false)
                    console.log(data)
                    if(data.executed){
                        toast({
                            title: "Success",
                            description: "Demographic Profile Submitted",
                            variant: "success",
                        })
                    }else{
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


            } catch (error : any) {
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
// {question:'',questionType:questionType,questionId:'',inputtype:'',options:[],value:,setValue:}
    return (
        <div>

            <CustomForm questions={questions} handleSubmit={handleSubmit} buttontitle="Submit" formtitle="Demographic Profile Form" loading={loading}/>
        
        </div>
    );
}

export default Demographic
