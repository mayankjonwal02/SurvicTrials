"use client"
import React, {useState,useEffect} from 'react'
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import CustomForm from '@/components/customform';
import { set } from 'mongoose';
import { formatDate } from 'date-fns';

const Demographic = () => {
    const { toast } = useToast()
    const router = useRouter();
    const [user, setUser] = useState<any>({});
    const [userid, setUserId] = useState('');
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
        setUser(storedUser);
        setUserId(storedUser.unique_id);
    }, []);
    
    const questionType = "demographic";
    const [loading, setLoading] = React.useState(false);
    const [patient_trial_number, setPatient_trial_number] = React.useState("");
    const [dateodopdregistration, setDateodopdregistration] = React.useState("");
    const [name, setName] = React.useState("");
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
    const [age, setAge] = React.useState("");
    const [socioeconomicclass, setSocioeconomicclass] = React.useState("");
    const [dataloading, setDataLoading] = React.useState(false);

    const [houseNumber1, setHouseNumber1] = useState('');
    const [locality1, setLocality1] = useState('');
    const [villageTown1, setVillageTown1] = useState('');
    const [district1, setDistrict1] = useState('');
    const [state1, setState1] = useState('');
    const [pinCode1, setPinCode1] = useState('');
    
    const [houseNumber2, setHouseNumber2] = useState('');
    const [locality2, setLocality2] = useState('');
    const [villageTown2, setVillageTown2] = useState('');
    const [district2, setDistrict2] = useState('');
    const [state2, setState2] = useState('');
    const [pinCode2, setPinCode2] = useState('');

    useEffect(() => {
        setAddressline1(`${houseNumber1}, ${locality1}, ${villageTown1}, ${district1}, ${state1}, ${pinCode1}`);

    }, [houseNumber1, locality1, villageTown1, district1, state1, pinCode1]);
    
    useEffect(() => {
        setAddressline2(`${houseNumber2}, ${locality2}, ${villageTown2}, ${district2}, ${state2}, ${pinCode2}`);
    }, [houseNumber2, locality2, villageTown2, district2, state2, pinCode2]);

    useEffect(() => {
        setAge(`${calculateAge(dateofbirth)}`);
    }, [dateofbirth]);

    

    const alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    //   const alphaspecial = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',"!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "-", "{", "}", "[", "]", ":", ";", "'", '"', "<", ">", ",", ".", "?", "/", "|", "\\", "~", "`"];
            const numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        const special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "-", "{", "}", "[", "]", ":", ";", "'", '"', "<", ">", ",", ".", "?", "/", "|", "\\", "~", "`"];
        const alphaspecial = [...alpha, ...special];

    
    const questions = [
        { question: 'Patient Trial Number:',questionType:questionType,questionId:'d-0', inputtype:'disabled' , options: [], value: patient_trial_number, setValue: setPatient_trial_number },

        { question: 'Date of OPD Registration:',questionType:questionType,questionId:'d-1', inputtype:'date' , options: [], value: dateodopdregistration, setValue: setDateodopdregistration },
        { question: 'Name :',questionType:questionType,questionId:'d-2', inputtype:'disabled' , options: [], value: name, setValue: setName },
        { question: 'Phone Number:',questionType:questionType,questionId:'d-5', inputtype:'text' , options: [], value: contact, setValue: setContact, restriction:( (  contact.length !== 0 && contact.length !== 10 ) ) ,restrictiontext:"Please enter a valid phone number" },
        { question: 'Name of Primary Caregiver:',questionType:questionType,questionId:'d-3', inputtype:'text' , options: [], value: name_primary_care_giver, setValue: setName_primary_care_giver },
        { question: 'Primary Caregiver Phone Number:',questionType:questionType,questionId:'d-4', inputtype:'text' , options: [], value: contact_primary_care_giver, setValue: setContact_primary_care_giver , restriction:( (  contact_primary_care_giver.length !== 0 && contact_primary_care_giver.length !== 10 ) ) ,restrictiontext:"Please enter a valid phone number" },
        { question: 'Date of Birth:',questionType:questionType,questionId:'d-6', inputtype:'date' , options: [], value: dateofbirth, setValue: setDateofbirth, restriction:( ((dateofbirth !== "" && isMoreThan18Years(dateofbirth) )== false) ) ,restrictiontext:"Patient should be atleast 18 years" },
        { question: 'Age:',questionType:questionType,questionId:'d-6_1', inputtype:'disabled' , options: [], value: age, setValue: setAge , restriction:( age !="" && islessThan18(age) ) ,restrictiontext:"Patient should be atleast 18 years" },
        {question:'Gender:',questionType:questionType,questionId:'d-7',inputtype:'dropdown',options:["Male","Female","Others"],value:gender,setValue:setGender},
        {question:'Menopausal State:',questionType:questionType,questionId:'d-8',inputtype:'dropdown',options:["Premenopausal","Postmenopausal","Not Applicable"],value: menopausalstate,setValue: setMenopausalstate},
        {question:'Address Line 1:',questionType:questionType,questionId:'d-9',inputtype:'multitext',options:[],value:addressline1,setValue: setAddressline1 ,  subParts : [
            { s_question: "House Number", s_answer: houseNumber1, s_setanswer: setHouseNumber1 },
            { s_question: "Locality", s_answer: locality1, s_setanswer: setLocality1 },
            { s_question: "Village/Town", s_answer: villageTown1, s_setanswer: setVillageTown1 },
            { s_question: "District", s_answer: district1, s_setanswer: setDistrict1 },
            { s_question: "State", s_answer: state1, s_setanswer: setState1 },
            { s_question: "Pin Code", s_answer: pinCode1, s_setanswer: setPinCode1 }
        ]},
        {question:'Address Line 2',questionType:questionType,questionId:'d-10',inputtype:'multitext',options:[],value: addressline2,setValue: setAddressline2,  subParts : [
            { s_question: "House Number", s_answer: houseNumber2, s_setanswer: setHouseNumber2 },
            { s_question: "Locality", s_answer: locality2, s_setanswer: setLocality2 },
            { s_question: "Village/Town", s_answer: villageTown2, s_setanswer: setVillageTown2 },
            { s_question: "District", s_answer: district2, s_setanswer: setDistrict2 },
            { s_question: "State", s_answer: state2, s_setanswer: setState2 },
            { s_question: "Pin Code", s_answer: pinCode2, s_setanswer: setPinCode2 }
        ]},
        {question:'Marital Status:',questionType:questionType,questionId:'d-11',inputtype:'dropdown',options:["Single","Married","Divorced","Widow-widower"],value: maritalstatus,setValue: setMaritalstatus},
        {question:'Education:',questionType:questionType,questionId:'d-12',inputtype:'dropdown',options:["Professional Degree","Graduate"," Intermediate/ Diploma","High School","Middle school","Primary school","Illiterate"],value: education,setValue: setEducation},
        {question:'Occupation:',questionType:questionType,questionId:'d-13',inputtype:'dropdown',options:["Legislators/senior officials/managers", "Professional", "Technicians/associate professionals", "Clerk", "Semi-professional/Skilled worker", "shop and market sales workers", "Skilled agricultural and fishery workers", "Craft and related trade workers", "Plant and machine operators and assemblers", "Unskilled worker: Elementary occupation", "Unemployed"],value: occupation,setValue: setOccupation},
        {question:'Family Income (per Month):',questionType:questionType,questionId:'d-14',inputtype:'dropdown',options:["185,574 or more", "92,764–185,574", "69,584–92,764", "46,405–69,584", "27,815–46,405", "9,276–27,815", "less than 9,276"],value:familyincome,setValue: setFamilyincome},
        // {question:"Socioeconomic class",questionType:questionType,questionId:'d-15',inputtype:'dropdown',options:["Upper Class", "Upper Middle", "Lower Middle", "Upper lower", "Lower"],value:socioeconomicclass,setValue:setSocioeconomicclass}

    ];

    const calculateAge = (dob: string): number => {
        const birthDate = new Date(dob);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();
        const dayDifference = today.getDate() - birthDate.getDate();
    
        // Adjust age if the current date is before the birth date in the current year
        if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
            age--;
        }
    
        return age;
    };
    function isMoreThan18Years(dateValue: string): boolean {
        const inputDate = new Date(dateValue);
        const today = new Date();
        let age = today.getFullYear() - inputDate.getFullYear();
        const monthDifference = today.getMonth() - inputDate.getMonth();
      
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < inputDate.getDate())) {
          age--;
        }
      
        return age >= 18;
      }


      function islessThan18(numStr: string) {
        // Check if the string contains only numbers
        const isNumeric = /^\d+$/.test(numStr);
    
        if (!isNumeric) {
            return false; // or handle the error as needed
        }
    
        // Convert the string to a number
        const num = Number(numStr);
    
        // Check if the number is greater than 18
        return num < 18;
    }

    useEffect( () => {

        const fetchalldata = async () => 
        {
        setDataLoading(true)
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
            setDataLoading(false)
            if (apidata.executed) {
                const questiondata = apidata.data.data;
                const questionsArray = [questions]
                questionsArray.forEach((question_list) => {
                    question_list.map((question) => {
                        const requiredquestionid = question.questionId;
                        const questionvalue = questiondata.find((this_question: { questionId: string; }) => this_question.questionId === requiredquestionid)?.answer;
                        questionvalue !== undefined && question.setValue(questionvalue)
                        if(question.inputtype === "multitext")
                        {
                            const subparts = question.subParts
                            const questionsubparts = questiondata.find((this_question: { questionId: string; }) => this_question.questionId === requiredquestionid)?.subParts
                            if(questionsubparts !== undefined && subparts !== undefined)
                            {
                                subparts.map((subpart, index) => {
                                    subpart.s_setanswer(questionsubparts[index].s_answer)
                                })
                            }
                        }
                    })
                })

                const userdata = apidata.data 
                userdata.patient_trial_number !== undefined && setPatient_trial_number(userdata.patient_trial_number)
                userdata.patientName !== undefined && setName(userdata.patientName)
                

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

    const handleSubmit = () => {
        if (
            ( (alpha.some(i => age.includes(i)) || special.some(i => age.includes(i))) || age.length > 2 ) ||
        (  contact.length !== 0 && contact.length !== 10 ) || 
        (contact_primary_care_giver.length !== 0 && contact_primary_care_giver.length !== 10) || 
        (dateofbirth !== "" && isMoreThan18Years(dateofbirth) == false)
            
        ) {
            if (contact.length !== 0 && contact.length !== 10) {
                toast({
                    title: "Error",
                    description: "Phone Number must be 10 digits long.",
                    variant: "destructive",
                });
            } else if (contact_primary_care_giver.length !== 0 && contact_primary_care_giver.length !== 10) {
                toast({
                    title: "Error",
                    description: "Primary Caregiver Phone Number must be 10 digits long.",
                    variant: "destructive",
                });
            } else if (dateofbirth !== "" && !isMoreThan18Years(dateofbirth)) {
                toast({
                    title: "Error",
                    description: "The patient must be at least 18 years old.",
                    variant: "destructive",
                });
            }

            
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
                        submittedBy : userid
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

                        router.push('/form/socialhistory')
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

    if (dataloading) {
        return <div className="flex items-center justify-center h-screen w-full text-3xl font-bold text-green-5 ">
                  <div className="w-[70px] h-[70px] border border-4 border-t-0 border-green-700 rounded-full animate-spin">
                  </div> 
                </div>;
      }
// {question:'',questionType:questionType,questionId:'',inputtype:'',options:[],value:,setValue:}
    return (
        <div className='w-full h-screen'>

            <CustomForm questions={questions} handleSubmit={handleSubmit} buttontitle="Submit" formtitle="Demographic Profile Form" loading={loading}/>
        
        </div>
    );
}

export default Demographic
