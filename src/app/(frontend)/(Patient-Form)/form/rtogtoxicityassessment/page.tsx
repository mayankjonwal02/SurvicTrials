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
import HeadDrop from '@/components/HeadDrop';

const Rtogtoxicityassessment = () => {
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
    const questionType = "rtogtoxicityassessment";
    const formTitle = "Toxicity During Radiotherapy -RTOG Toxicity Assessment";
    const [tabValue, setTabValue] = useState("section1");
    const [loading, setLoading] = React.useState(false);

    // Section 1
// Section 1
const [week_1_treatmentWeek, setWeek_1_treatmentWeek] = useState('Week 1');
const [week_1_skin, setWeek_1_skin] = useState('');
const [week_1_mucosa, setWeek_1_mucosa] = useState('');
const [week_1_pharynx, setWeek_1_pharynx] = useState('');
const [week_1_larynx, setWeek_1_larynx] = useState('');
const [week_1_salivaryGland, setWeek_1_salivaryGland] = useState('');
const [week_1_weight_s, setWeek_1_weight_s] = useState('');
const [week_1_weight_e, setWeek_1_weight_e] = useState('');
const [week_1_weight, setWeek_1_weight] = useState("");
const [week_1_cbc, setWeek_1_cbc] = useState('');

const [week_2_treatmentWeek, setWeek_2_treatmentWeek] = useState('Week 2');
const [week_2_skin, setWeek_2_skin] = useState('');
const [week_2_mucosa, setWeek_2_mucosa] = useState('');
const [week_2_pharynx, setWeek_2_pharynx] = useState('');
const [week_2_larynx, setWeek_2_larynx] = useState('');
const [week_2_salivaryGland, setWeek_2_salivaryGland] = useState('');
const [week_2_weight_s, setWeek_2_weight_s] = useState('');
const [week_2_weight_e, setWeek_2_weight_e] = useState('');
const [week_2_weight, setWeek_2_weight] = useState("");
const [week_2_cbc, setWeek_2_cbc] = useState('');

const [week_3_treatmentWeek, setWeek_3_treatmentWeek] = useState('Week 3');
const [week_3_skin, setWeek_3_skin] = useState('');
const [week_3_mucosa, setWeek_3_mucosa] = useState('');
const [week_3_pharynx, setWeek_3_pharynx] = useState('');
const [week_3_larynx, setWeek_3_larynx] = useState('');
const [week_3_salivaryGland, setWeek_3_salivaryGland] = useState('');
const [week_3_weight_s, setWeek_3_weight_s] = useState('');
const [week_3_weight_e, setWeek_3_weight_e] = useState('');
const [week_3_weight, setWeek_3_weight] = useState("");
const [week_3_cbc, setWeek_3_cbc] = useState('');

const [week_4_treatmentWeek, setWeek_4_treatmentWeek] = useState('Week 4');
const [week_4_skin, setWeek_4_skin] = useState('');
const [week_4_mucosa, setWeek_4_mucosa] = useState('');
const [week_4_pharynx, setWeek_4_pharynx] = useState('');
const [week_4_larynx, setWeek_4_larynx] = useState('');
const [week_4_salivaryGland, setWeek_4_salivaryGland] = useState('');
const [week_4_weight_s, setWeek_4_weight_s] = useState('');
const [week_4_weight_e, setWeek_4_weight_e] = useState('');
const [week_4_weight, setWeek_4_weight] = useState("");
const [week_4_cbc, setWeek_4_cbc] = useState('');

const [week_5_treatmentWeek, setWeek_5_treatmentWeek] = useState('Week 5');
const [week_5_skin, setWeek_5_skin] = useState('');
const [week_5_mucosa, setWeek_5_mucosa] = useState('');
const [week_5_pharynx, setWeek_5_pharynx] = useState('');
const [week_5_larynx, setWeek_5_larynx] = useState('');
const [week_5_salivaryGland, setWeek_5_salivaryGland] = useState('');
const [week_5_weight_s, setWeek_5_weight_s] = useState('');
const [week_5_weight_e, setWeek_5_weight_e] = useState('');
const [week_5_weight, setWeek_5_weight] = useState("");
const [week_5_cbc, setWeek_5_cbc] = useState('');

const [week_6_treatmentWeek, setWeek_6_treatmentWeek] = useState('Week 6');
const [week_6_skin, setWeek_6_skin] = useState('');
const [week_6_mucosa, setWeek_6_mucosa] = useState('');
const [week_6_pharynx, setWeek_6_pharynx] = useState('');
const [week_6_larynx, setWeek_6_larynx] = useState('');
const [week_6_salivaryGland, setWeek_6_salivaryGland] = useState('');
const [week_6_weight_s, setWeek_6_weight_s] = useState('');
const [week_6_weight_e, setWeek_6_weight_e] = useState('');
const [week_6_weight, setWeek_6_weight] = useState("");
const [week_6_cbc, setWeek_6_cbc] = useState('');

const [week_7_treatmentWeek, setWeek_7_treatmentWeek] = useState('Week 7');
const [week_7_skin, setWeek_7_skin] = useState('');
const [week_7_mucosa, setWeek_7_mucosa] = useState('');
const [week_7_pharynx, setWeek_7_pharynx] = useState('');
const [week_7_larynx, setWeek_7_larynx] = useState('');
const [week_7_salivaryGland, setWeek_7_salivaryGland] = useState('');
const [week_7_weight_s, setWeek_7_weight_s] = useState('');
const [week_7_weight_e, setWeek_7_weight_e] = useState('');
const [week_7_weight, setWeek_7_weight] = useState("");
const [week_7_cbc, setWeek_7_cbc] = useState('');

const [week_8_treatmentWeek, setWeek_8_treatmentWeek] = useState('Week 8');
const [week_8_skin, setWeek_8_skin] = useState('');
const [week_8_mucosa, setWeek_8_mucosa] = useState('');
const [week_8_pharynx, setWeek_8_pharynx] = useState('');
const [week_8_larynx, setWeek_8_larynx] = useState('');
const [week_8_salivaryGland, setWeek_8_salivaryGland] = useState('');
const [week_8_weight_s, setWeek_8_weight_s] = useState('');
const [week_8_weight_e, setWeek_8_weight_e] = useState('');
const [week_8_weight, setWeek_8_weight] = useState("");
const [week_8_cbc, setWeek_8_cbc] = useState('');

useEffect( () => {

    setWeek_1_weight(week_1_weight_s + ' - ' + week_1_weight_e);
    setWeek_2_weight(week_2_weight_s + ' - ' + week_2_weight_e);
    setWeek_3_weight(week_3_weight_s + ' - ' + week_3_weight_e);
    setWeek_4_weight(week_4_weight_s + ' - ' + week_4_weight_e);
    setWeek_5_weight(week_5_weight_s + ' - ' + week_5_weight_e);
    setWeek_6_weight(week_6_weight_s + ' - ' + week_6_weight_e);
    setWeek_7_weight(week_7_weight_s + ' - ' + week_7_weight_e);
    setWeek_8_weight(week_8_weight_s + ' - ' + week_8_weight_e);
}, [week_1_weight_s, week_1_weight_e, week_2_weight_s, week_2_weight_e, week_3_weight_s, week_3_weight_e, week_4_weight_s, week_4_weight_e, week_5_weight_s, week_5_weight_e, week_6_weight_s, week_6_weight_e, week_7_weight_s, week_7_weight_e, week_8_weight_s, week_8_weight_e])

const questions1 = [
    { question: 'Treatment Week:', questionId: 'r2-1', questionType: questionType, inputtype: 'disabled', options: [
        "Week 1",
        "Week 2",
        "Week 3",
        "Week 4",
        "Week 5",
        "Week 6",
        "Week 7",
        "Week 8"], value: week_1_treatmentWeek, setValue: setWeek_1_treatmentWeek },
    { question: 'Skin:', questionId: 'r2-2', questionType: questionType, inputtype: 'dropdown', options: ["0","1","2","3"], value: week_1_skin, setValue: setWeek_1_skin },
    { question: 'Mucosa:', questionId: 'r2-3', questionType: questionType, inputtype: 'dropdown', options: ["0","1","2","3"], value: week_1_mucosa, setValue: setWeek_1_mucosa },
    { question: 'Pharynx:', questionId: 'r2-4', questionType: questionType, inputtype: 'dropdown', options: ["0","1","2","3"], value: week_1_pharynx, setValue: setWeek_1_pharynx },
    { question: 'Larynx:', questionId: 'r2-5', questionType: questionType, inputtype: 'dropdown', options: ["0","1","2","3"], value: week_1_larynx, setValue: setWeek_1_larynx },
    { question: 'Salivary Gland:', questionId: 'r2-6', questionType: questionType, inputtype: 'dropdown', options: ["0","1","2","3"], value: week_1_salivaryGland, setValue: setWeek_1_salivaryGland },
    { question: 'Weight (in kg):', questionId: 'r2-7', questionType: questionType, inputtype: 'multitext', options: ["0","1","2","3"], value: week_1_weight, setValue: setWeek_1_weight , subParts:[{s_question:"At Start of Treatment",s_answer:week_1_weight_s,s_setanswer:setWeek_1_weight_s},{s_question:"At End of Treatment",s_answer:week_1_weight_e,s_setanswer:setWeek_1_weight_e}] },
    { question: 'CBC:', questionId: 'r2-8', questionType: questionType, inputtype: 'dropdown', options: ["0","1","2","3"], value: week_1_cbc, setValue: setWeek_1_cbc },
    ]

const questions2 = [
    { question: 'Treatment Week:', questionId: 'r2-9', questionType: questionType, inputtype: 'disabled', options: [
        "Week 1",
        "Week 2",
        "Week 3",
        "Week 4",
        "Week 5",
        "Week 6",
        "Week 7",
        "Week 8"], value: week_2_treatmentWeek, setValue: setWeek_2_treatmentWeek },
    { question: 'Skin:', questionId: 'r2-10', questionType: questionType, inputtype: 'dropdown', options: ["0","1","2","3"], value: week_2_skin, setValue: setWeek_2_skin },
    { question: 'Mucosa:', questionId: 'r2-11', questionType: questionType, inputtype: 'dropdown', options: ["0","1","2","3"], value: week_2_mucosa, setValue: setWeek_2_mucosa },
    { question: 'Pharynx:', questionId: 'r2-12', questionType: questionType, inputtype: 'dropdown', options: ["0","1","2","3"], value: week_2_pharynx, setValue: setWeek_2_pharynx },
    { question: 'Larynx:', questionId: 'r2-13', questionType: questionType, inputtype: 'dropdown', options: ["0","1","2","3"], value: week_2_larynx, setValue: setWeek_2_larynx },
    { question: 'Salivary Gland:', questionId: 'r2-14', questionType: questionType, inputtype: 'dropdown', options: ["0","1","2","3"], value: week_2_salivaryGland, setValue: setWeek_2_salivaryGland },
    { question: 'Weight (in kg):', questionId: 'r2-15', questionType: questionType, inputtype: 'multitext', options: ["0","1","2","3"], value: week_2_weight, setValue: setWeek_2_weight, subParts:[{s_question:"At Start of Treatment",s_answer:week_2_weight_s,s_setanswer:setWeek_2_weight_s},{s_question:"At End of Treatment",s_answer:week_2_weight_e,s_setanswer:setWeek_2_weight_e}] },
    { question: 'CBC:', questionId: 'r2-16', questionType: questionType, inputtype: 'dropdown', options: ["0","1","2","3"], value: week_2_cbc, setValue: setWeek_2_cbc },
    ]

const questions3 = [
    { question: 'Treatment Week:', questionId: 'r2-17', questionType: questionType, inputtype: 'disabled', options: [
        "Week 1",
        "Week 2",
        "Week 3",
        "Week 4",
        "Week 5",
        "Week 6",
        "Week 7",
        "Week 8"], value: week_3_treatmentWeek, setValue: setWeek_3_treatmentWeek },
    { question: 'Skin:', questionId: 'r2-18', questionType: questionType, inputtype: 'dropdown', options: ["0","1","2","3"], value: week_3_skin, setValue: setWeek_3_skin },
    { question: 'Mucosa:', questionId: 'r2-19', questionType: questionType, inputtype: 'dropdown', options: ["0","1","2","3"], value: week_3_mucosa, setValue: setWeek_3_mucosa },
    { question: 'Pharynx:', questionId: 'r2-20', questionType: questionType, inputtype: 'dropdown', options: ["0","1","2","3"], value: week_3_pharynx, setValue: setWeek_3_pharynx },
    { question: 'Larynx:', questionId: 'r2-21', questionType: questionType, inputtype: 'dropdown', options: ["0","1","2","3"], value: week_3_larynx, setValue: setWeek_3_larynx },
    { question: 'Salivary Gland:', questionId: 'r2-22', questionType: questionType, inputtype: 'dropdown', options: ["0","1","2","3"], value: week_3_salivaryGland, setValue: setWeek_3_salivaryGland },
    { question: 'Weight (in kg):', questionId: 'r2-23', questionType: questionType, inputtype: 'multitext', options: ["0","1","2","3"], value: week_3_weight, setValue: setWeek_3_weight, subParts:[{s_question:"At Start of Treatment",s_answer:week_3_weight_s,s_setanswer:setWeek_3_weight_s},{s_question:"At End of Treatment",s_answer:week_3_weight_e,s_setanswer:setWeek_3_weight_e}] },
    { question: 'CBC:', questionId: 'r2-24', questionType: questionType, inputtype: 'dropdown', options: ["0","1","2","3"], value: week_3_cbc, setValue: setWeek_3_cbc },
    ]

const questions4 = [
    { question: 'Treatment Week:', questionId: 'r2-25', questionType: questionType, inputtype: 'disabled', options: [
        "Week 1",
        "Week 2",
        "Week 3",
        "Week 4",
        "Week 5",
        "Week 6",
        "Week 7",
        "Week 8"], value: week_4_treatmentWeek, setValue: setWeek_4_treatmentWeek },
    { question: 'Skin:', questionId: 'r2-26', questionType: questionType, inputtype: 'dropdown', options: ["0","1","2","3"], value: week_4_skin, setValue: setWeek_4_skin },
    { question: 'Mucosa:', questionId: 'r2-27', questionType: questionType, inputtype: 'dropdown', options: ["0","1","2","3"], value: week_4_mucosa, setValue: setWeek_4_mucosa },
    { question: 'Pharynx:', questionId: 'r2-28', questionType: questionType, inputtype: 'dropdown', options: ["0","1","2","3"], value: week_4_pharynx, setValue: setWeek_4_pharynx },
    { question: 'Larynx:', questionId: 'r2-29', questionType: questionType, inputtype: 'dropdown', options: ["0","1","2","3"], value: week_4_larynx, setValue: setWeek_4_larynx },
    { question: 'Salivary Gland:', questionId: 'r2-30', questionType: questionType, inputtype: 'dropdown', options: ["0","1","2","3"], value: week_4_salivaryGland, setValue: setWeek_4_salivaryGland },
    { question: 'Weight (in kg):', questionId: 'r2-31', questionType: questionType, inputtype: 'multitext', options: ["0","1","2","3"], value: week_4_weight, setValue: setWeek_4_weight ,subParts:[{s_question:"At Start of Treatment",s_answer:week_4_weight_s,s_setanswer:setWeek_4_weight_s},{s_question:"At End of Treatment",s_answer:week_4_weight_e,s_setanswer:setWeek_4_weight_e}] },
    { question: 'CBC:', questionId: 'r2-32', questionType: questionType, inputtype: 'dropdown', options: ["0","1","2","3"], value: week_4_cbc, setValue: setWeek_4_cbc },
    ]
const questions5 = [
    { question: 'Treatment Week:', questionId: 'r2-33', questionType: questionType, inputtype: 'disabled', options: [
        "Week 1",
        "Week 2",
        "Week 3",
        "Week 4",
        "Week 5",
        "Week 6",
        "Week 7",
        "Week 8"], value: week_5_treatmentWeek, setValue: setWeek_5_treatmentWeek },
    { question: 'Skin:', questionId: 'r2-34', questionType: questionType, inputtype: 'dropdown', options: ["0","1","2","3"], value: week_5_skin, setValue: setWeek_5_skin },
    { question: 'Mucosa:', questionId: 'r2-35', questionType: questionType, inputtype: 'dropdown', options: ["0","1","2","3"], value: week_5_mucosa, setValue: setWeek_5_mucosa },
    { question: 'Pharynx:', questionId: 'r2-36', questionType: questionType, inputtype: 'dropdown', options: ["0","1","2","3"], value: week_5_pharynx, setValue: setWeek_5_pharynx },
    { question: 'Larynx:', questionId: 'r2-37', questionType: questionType, inputtype: 'dropdown', options: ["0","1","2","3"], value: week_5_larynx, setValue: setWeek_5_larynx },
    { question: 'Salivary Gland:', questionId: 'r2-38', questionType: questionType, inputtype: 'dropdown', options: ["0","1","2","3"], value: week_5_salivaryGland, setValue: setWeek_5_salivaryGland },
    { question: 'Weight (in kg):', questionId: 'r2-39', questionType: questionType, inputtype: 'multitext', options: ["0","1","2","3"], value: week_5_weight, setValue: setWeek_5_weight, subParts:[{s_question:"At Start of Treatment",s_answer:week_5_weight_s,s_setanswer:setWeek_5_weight_s},{s_question:"At End of Treatment",s_answer:week_5_weight_e,s_setanswer:setWeek_5_weight_e}] },
    { question: 'CBC:', questionId: 'r2-40', questionType: questionType, inputtype: 'dropdown', options: ["0","1","2","3"], value: week_5_cbc, setValue: setWeek_5_cbc },
    ]
const questions6 = [
    { question: 'Treatment Week:', questionId: 'r2-41', questionType: questionType, inputtype: 'disabled', options: [
        "Week 1",
        "Week 2",
        "Week 3",
        "Week 4",
        "Week 5",
        "Week 6",
        "Week 7",
        "Week 8"], value: week_6_treatmentWeek, setValue: setWeek_6_treatmentWeek },
    { question: 'Skin:', questionId: 'r2-42', questionType: questionType, inputtype: 'dropdown', options: ["0","1","2","3"], value: week_6_skin, setValue: setWeek_6_skin },
    { question: 'Mucosa:', questionId: 'r2-43', questionType: questionType, inputtype: 'dropdown', options: ["0","1","2","3"], value: week_6_mucosa, setValue: setWeek_6_mucosa },
    { question: 'Pharynx:', questionId: 'r2-44', questionType: questionType, inputtype: 'dropdown', options: ["0","1","2","3"], value: week_6_pharynx, setValue: setWeek_6_pharynx },
    { question: 'Larynx:', questionId: 'r2-45', questionType: questionType, inputtype: 'dropdown', options: ["0","1","2","3"], value: week_6_larynx, setValue: setWeek_6_larynx },
    { question: 'Salivary Gland:', questionId: 'r2-46', questionType: questionType, inputtype: 'dropdown', options: ["0","1","2","3"], value: week_6_salivaryGland, setValue: setWeek_6_salivaryGland },
    { question: 'Weight (in kg):', questionId: 'r2-47', questionType: questionType, inputtype: 'multitext', options: ["0","1","2","3"], value: week_6_weight, setValue: setWeek_6_weight , subParts:[{s_question:"At Start of Treatment",s_answer:week_6_weight_s,s_setanswer:setWeek_6_weight_s},{s_question:"At End of Treatment",s_answer:week_6_weight_e,s_setanswer:setWeek_6_weight_e}] },
    { question: 'CBC:', questionId: 'r2-48', questionType: questionType, inputtype: 'dropdown', options: ["0","1","2","3"], value: week_6_cbc, setValue: setWeek_6_cbc },
    ]
const questions7 = [
    { question: 'Treatment Week:', questionId: 'r2-49', questionType: questionType, inputtype: 'disabled', options: [
        "Week 1",
        "Week 2",
        "Week 3",
        "Week 4",
        "Week 5",
        "Week 6",
        "Week 7",
        "Week 8"], value: week_7_treatmentWeek, setValue: setWeek_7_treatmentWeek },
    { question: 'Skin:', questionId: 'r2-50', questionType: questionType, inputtype: 'dropdown', options: ["0","1","2","3"], value: week_7_skin, setValue: setWeek_7_skin },
    { question: 'Mucosa:', questionId: 'r2-51', questionType: questionType, inputtype: 'dropdown', options: ["0","1","2","3"], value: week_7_mucosa, setValue: setWeek_7_mucosa },
    { question: 'Pharynx:', questionId: 'r2-52', questionType: questionType, inputtype: 'dropdown', options: ["0","1","2","3"], value: week_7_pharynx, setValue: setWeek_7_pharynx },
    { question: 'Larynx:', questionId: 'r2-53', questionType: questionType, inputtype: 'dropdown', options: ["0","1","2","3"], value: week_7_larynx, setValue: setWeek_7_larynx },
    { question: 'Salivary Gland:', questionId: 'r2-54', questionType: questionType, inputtype: 'dropdown', options: ["0","1","2","3"], value: week_7_salivaryGland, setValue: setWeek_7_salivaryGland },
    { question: 'Weight (in kg):', questionId: 'r2-55', questionType: questionType, inputtype: 'multitext', options: ["0","1","2","3"], value: week_7_weight, setValue: setWeek_7_weight, subParts:[{s_question:"At Start of Treatment",s_answer:week_7_weight_s,s_setanswer:setWeek_7_weight_s},{s_question:"At End of Treatment",s_answer:week_7_weight_e,s_setanswer:setWeek_7_weight_e}] },
    { question: 'CBC:', questionId: 'r2-56', questionType: questionType, inputtype: 'dropdown', options: ["0","1","2","3"], value: week_7_cbc, setValue: setWeek_7_cbc },
    ]
const questions8 = [
    { question: 'Treatment Week:', questionId: 'r2-57', questionType: questionType, inputtype: 'disabled', options: [
        "Week 1",
        "Week 2",
        "Week 3",
        "Week 4",
        "Week 5",
        "Week 6",
        "Week 7",
        "Week 8"], value: week_8_treatmentWeek, setValue: setWeek_8_treatmentWeek },
    { question: 'Skin:', questionId: 'r2-58', questionType: questionType, inputtype: 'dropdown', options: ["0","1","2","3"], value: week_8_skin, setValue: setWeek_8_skin },
    { question: 'Mucosa:', questionId: 'r2-59', questionType: questionType, inputtype: 'dropdown', options: ["0","1","2","3"], value: week_8_mucosa, setValue: setWeek_8_mucosa },
    { question: 'Pharynx:', questionId: 'r2-60', questionType: questionType, inputtype: 'dropdown', options: ["0","1","2","3"], value: week_8_pharynx, setValue: setWeek_8_pharynx },
    { question: 'Larynx:', questionId: 'r2-61', questionType: questionType, inputtype: 'dropdown', options: ["0","1","2","3"], value: week_8_larynx, setValue: setWeek_8_larynx },
    { question: 'Salivary Gland:', questionId: 'r2-62', questionType: questionType, inputtype: 'dropdown', options: ["0","1","2","3"], value: week_8_salivaryGland, setValue: setWeek_8_salivaryGland },
    { question: 'Weight (in kg):', questionId: 'r2-63', questionType: questionType, inputtype: 'multitext', options: ["0","1","2","3"], value: week_8_weight, setValue: setWeek_8_weight, subParts:[{s_question:"At Start of Treatment",s_answer:week_8_weight_s,s_setanswer:setWeek_8_weight_s},{s_question:"At End of Treatment",s_answer:week_8_weight_e,s_setanswer:setWeek_8_weight_e}] },
    { question: 'CBC:', questionId: 'r2-64', questionType: questionType, inputtype: 'dropdown', options: ["0","1","2","3"], value: week_8_cbc, setValue: setWeek_8_cbc }
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
                const questionsArray = [questions1, questions2, questions3, questions4, questions5, questions6, questions7, questions8]
                questionsArray.forEach((question_list) => {
                    question_list.map((question : any) => {
                        const requiredquestionid = question.questionId;
                        const questionvalue = questiondata.find((this_question: { questionId: string; }) => this_question.questionId === requiredquestionid)?.answer;
                        
                        questionvalue !== undefined && question.setValue(questionvalue)

                        if(question.inputtype === "multitext")
                            {
                                const subparts = question.subParts
                                const questionsubparts = questiondata.find((this_question: { questionId: string; }) => this_question.questionId === requiredquestionid)?.subParts
                                if(questionsubparts !== undefined && subparts !== undefined)
                                {
                                    subparts.map((subpart : any, index : number) => {
                                        subpart.s_setanswer(questionsubparts[index].s_answer)
                                    })
                                }
                            }
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
            // questions1.some((question) => question.value === '')


            alpha.some(i => week_1_weight.includes(i)) 





        ) {
            toast({
                title: "Error",
                description: "Please fill valid weight data",
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
                            setTabValue("section2")
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
            // questions1.some((question) => question.value === '')


            alpha.some(i => week_2_weight.includes(i)) 





        ) {
            toast({
                title: "Error",
                description: "Please fill valid weight data",
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
                            setTabValue("section3")
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
            // questions1.some((question) => question.value === '')


            alpha.some(i => week_3_weight.includes(i)) 





        ) {
            toast({
                title: "Error",
                description: "Please fill valid weight data",
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
                            setTabValue("section4")
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




    const handleSubmit4 = () => {
        if (
            // questions1.some((question) => question.value === '')


            alpha.some(i => week_4_weight.includes(i)) 





        ) {
            toast({
                title: "Error",
                description: "Please fill valid weight data",
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
                        questions: questions4,
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
                            setTabValue("section5")
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




    const handleSubmit5 = () => {
        if (
            // questions1.some((question) => question.value === '')


            alpha.some(i => week_5_weight.includes(i)) 





        ) {
            toast({
                title: "Error",
                description: "Please fill valid weight data",
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
                        questions: questions5,
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
                            setTabValue("section6")
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




    const handleSubmit6 = () => {
        if (
            // questions1.some((question) => question.value === '')


            alpha.some(i => week_6_weight.includes(i)) 





        ) {
            toast({
                title: "Error",
                description: "Please fill valid weight data",
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
                        questions: questions6,
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
                            setTabValue("section7")
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




    const handleSubmit7 = () => {
        if (
            // questions1.some((question) => question.value === '')


            alpha.some(i => week_7_weight.includes(i)) 





        ) {
            toast({
                title: "Error",
                description: "Please fill valid weight data",
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
                        questions: questions7,
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
                            setTabValue("section8")
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



    const handleSubmit8 = () => {
        if (
            // questions1.some((question) => question.value === '')


            alpha.some(i => week_8_weight.includes(i)) 





        ) {
            toast({
                title: "Error",
                description: "Please fill valid weight data",
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
                        questions: questions8,
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
                            router.push("/form/sae")
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




            {tabValue === "section1" ? <CustomForm questions={questions1} handleSubmit={handleSubmit1} buttontitle="Submit & Next" formtitle={formTitle} loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} /> : <></>}
            {tabValue === "section2" ? <CustomForm questions={questions2} handleSubmit={handleSubmit2} buttontitle="Submit & Next" formtitle={formTitle} loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} /> : <></>}
            {tabValue === "section3" ? <CustomForm questions={questions3} handleSubmit={handleSubmit3} buttontitle="Submit & Next" formtitle={formTitle} loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} /> : <></>}
            {tabValue === "section4" ? <CustomForm questions={questions4} handleSubmit={handleSubmit4} buttontitle="Submit & Next" formtitle={formTitle} loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} /> : <></>}
            {tabValue === "section5" ? <CustomForm questions={questions5} handleSubmit={handleSubmit5} buttontitle="Submit & Next" formtitle={formTitle} loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} /> : <></>}
            {tabValue === "section6" ? <CustomForm questions={questions6} handleSubmit={handleSubmit6} buttontitle="Submit & Next" formtitle={formTitle} loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} /> : <></>}
            {tabValue === "section7" ? <CustomForm questions={questions7} handleSubmit={handleSubmit7} buttontitle="Submit & Next" formtitle={formTitle} loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} /> : <></>}

            {tabValue === "section8" ? <CustomForm questions={questions8} handleSubmit={handleSubmit8} buttontitle="Submit & Next" formtitle={formTitle} loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} /> : <></>}


        

        </div>
    );
}


interface CustomTabsProps {
    tabValue: string;
    setTabValue: (value: string) => void;
}

const CustomTabs: React.FC<CustomTabsProps> = ({ tabValue, setTabValue }) => {
    return (
        <div className='flex flex-col justify-center items-center gap-2'>

            <Tabs value={tabValue} onValueChange={setTabValue} className="">
                <TabsList className='bg-green-1'>
                    <TabsTrigger value="section1">1</TabsTrigger>
                    <TabsTrigger value="section2">2</TabsTrigger>
                    <TabsTrigger value="section3">3</TabsTrigger>
                    <TabsTrigger value="section4">4</TabsTrigger>
                    <TabsTrigger value="section5">5</TabsTrigger>
                    <TabsTrigger value="section6">6</TabsTrigger>
                    <TabsTrigger value="section7">7</TabsTrigger>
                    <TabsTrigger value="section8">8</TabsTrigger>




                </TabsList>
            </Tabs>
            <HeadDrop
          dataArray={[
            { id: "section1", title: "Week 1" },
            { id: "section2", title: "Week 2" },
            { id: "section3", title: "Week 3" },
            { id: "section4", title: "Week 4" },
            { id: "section5", title: "Week 5" },
            { id: "section6", title: "Week 6" },
            { id: "section7", title: "Week 7" },
            { id: "section8", title: "Week 8" },
          
            
            
            
            
            
          ]}
          id={tabValue}
          setId={setTabValue}
         
        />
        </div>
    );
};

export default Rtogtoxicityassessment
