"use client"
import React, { useState, useEffect } from 'react'
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


const Postoperativecomplications = () => {
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
    const questionType = "postoperativecomplications";
    const formTitle = "Postoperative complications";
    const [tabValue, setTabValue] = useState("section1");
    const [loading, setLoading] = React.useState(false);




        // Early complications state variables
        const [earlyDate, setEarlyDate] = useState('');
        const [earlyComplications, setEarlyComplications] = useState('');
        const [earlyLocalWoundInfection, setEarlyLocalWoundInfection] = useState('');
        const [earlyLocalWoundInfectionType, setEarlyLocalWoundInfectionType] = useState('');
        const [earlyLocalWoundInfectionTreatment, setEarlyLocalWoundInfectionTreatment] = useState('');
        const [earlyLocalWoundInfectionCategory, setEarlyLocalWoundInfectionCategory] = useState('');
        const [earlyLocalWoundInfectionPOD, setEarlyLocalWoundInfectionPOD] = useState('');
        const [earlySystemicInfection, setEarlySystemicInfection] = useState('');
        const [earlySystemicInfectionType, setEarlySystemicInfectionType] = useState('');
        const [earlySystemicInfectionTreatment, setEarlySystemicInfectionTreatment] = useState('');
        const [earlySystemicInfectionCategory, setEarlySystemicInfectionCategory] = useState('');
        const [earlySystemicInfectionPOD, setEarlySystemicInfectionPOD] = useState('');
        const [earlyFlapRelated, setEarlyFlapRelated] = useState('');
        const [earlyFlapRelatedType, setEarlyFlapRelatedType] = useState('');
        const [earlyFlapRelatedTreatment, setEarlyFlapRelatedTreatment] = useState('');
        const [earlyFlapRelatedCategory, setEarlyFlapRelatedCategory] = useState('');
        const [earlyFlapRelatedPOD, setEarlyFlapRelatedPOD] = useState('');
        const [earlyOtherWoundRelated, setEarlyOtherWoundRelated] = useState('');
        const [earlyOtherWoundRelatedType, setEarlyOtherWoundRelatedType] = useState('');
        const [earlyOtherWoundRelatedTreatment, setEarlyOtherWoundRelatedTreatment] = useState('');
        const [earlyOtherWoundRelatedCategory, setEarlyOtherWoundRelatedCategory] = useState('');
        const [earlyOtherWoundRelatedPOD, setEarlyOtherWoundRelatedPOD] = useState('');
        const [earlyGIHPB, setEarlyGIHPB] = useState('');
        const [earlyGIHPBType, setEarlyGIHPBType] = useState('');
        const [earlyGIHPBTreatment, setEarlyGIHPBTreatment] = useState('');
        const [earlyGIHPBCategory, setEarlyGIHPBCategory] = useState('');
        const [earlyGIHPBPOD, setEarlyGIHPBPOD] = useState('');
        const [earlyPulmonaryTE, setEarlyPulmonaryTE] = useState('');
        const [earlyPulmonaryTEType, setEarlyPulmonaryTEType] = useState('');
        const [earlyPulmonaryTETreatment, setEarlyPulmonaryTETreatment] = useState('');
        const [earlyPulmonaryTECategory, setEarlyPulmonaryTECategory] = useState('');
        const [earlyPulmonaryTEPOD, setEarlyPulmonaryTEPOD] = useState('');
        const [earlyRenal, setEarlyRenal] = useState('');
        const [earlyRenalType, setEarlyRenalType] = useState('');
        const [earlyRenalTreatment, setEarlyRenalTreatment] = useState('');
        const [earlyRenalCategory, setEarlyRenalCategory] = useState('');
        const [earlyRenalPOD, setEarlyRenalPOD] = useState('');
        const [earlyCardiovascular, setEarlyCardiovascular] = useState('');
        const [earlyCardiovascularType, setEarlyCardiovascularType] = useState('');
        const [earlyCardiovascularTreatment, setEarlyCardiovascularTreatment] = useState('');
        const [earlyCardiovascularCategory, setEarlyCardiovascularCategory] = useState('');
        const [earlyCardiovascularPOD, setEarlyCardiovascularPOD] = useState('');
        const [earlyOtherSystemic, setEarlyOtherSystemic] = useState('');
        const [earlyOtherSystemicType, setEarlyOtherSystemicType] = useState('');
        const [earlyOtherSystemicTreatment, setEarlyOtherSystemicTreatment] = useState('');
        const [earlyOtherSystemicCategory, setEarlyOtherSystemicCategory] = useState('');
        const [earlyOtherSystemicPOD, setEarlyOtherSystemicPOD] = useState('');
        const [earlyOther, setEarlyOther] = useState('');
        const [earlyOtherTreatment, setEarlyOtherTreatment] = useState('');
        const [earlyOtherCategory, setEarlyOtherCategory] = useState('');
        const [earlyOtherPOD, setEarlyOtherPOD] = useState('');
    
        // Delayed complications state
        const [delayedDate, setDelayedDate] = useState('');
        const [delayedComplications, setDelayedComplications] = useState('');
        const [delayedLocalWoundInfection, setDelayedLocalWoundInfection] = useState('');
        const [delayedLocalWoundInfectionType, setDelayedLocalWoundInfectionType] = useState('');
        const [delayedLocalWoundInfectionTreatment, setDelayedLocalWoundInfectionTreatment] = useState('');
        const [delayedLocalWoundInfectionCategory, setDelayedLocalWoundInfectionCategory] = useState('');
        const [delayedLocalWoundInfectionPOD, setDelayedLocalWoundInfectionPOD] = useState('');
        const [delayedSystemicInfection, setDelayedSystemicInfection] = useState('');
        const [delayedSystemicInfectionType, setDelayedSystemicInfectionType] = useState('');
        const [delayedSystemicInfectionTreatment, setDelayedSystemicInfectionTreatment] = useState('');
        const [delayedSystemicInfectionCategory, setDelayedSystemicInfectionCategory] = useState('');
        const [delayedSystemicInfectionPOD, setDelayedSystemicInfectionPOD] = useState('');
        const [delayedFlapRelated, setDelayedFlapRelated] = useState('');
        const [delayedFlapRelatedType, setDelayedFlapRelatedType] = useState('');
        const [delayedFlapRelatedTreatment, setDelayedFlapRelatedTreatment] = useState('');
        const [delayedFlapRelatedCategory, setDelayedFlapRelatedCategory] = useState('');
        const [delayedFlapRelatedPOD, setDelayedFlapRelatedPOD] = useState('');
        const [delayedOtherWoundRelated, setDelayedOtherWoundRelated] = useState('');
        const [delayedOtherWoundRelatedType, setDelayedOtherWoundRelatedType] = useState('');
        const [delayedOtherWoundRelatedTreatment, setDelayedOtherWoundRelatedTreatment] = useState('');
        const [delayedOtherWoundRelatedCategory, setDelayedOtherWoundRelatedCategory] = useState('');
        const [delayedOtherWoundRelatedPOD, setDelayedOtherWoundRelatedPOD] = useState('');
        const [delayedGIHPB, setDelayedGIHPB] = useState('');
        const [delayedGIHPBType, setDelayedGIHPBType] = useState('');
        const [delayedGIHPBTreatment, setDelayedGIHPBTreatment] = useState('');
        const [delayedGIHPBCategory, setDelayedGIHPBCategory] = useState('');
        const [delayedGIHPBPOD, setDelayedGIHPBPOD] = useState('');
        const [delayedPulmonaryTE, setDelayedPulmonaryTE] = useState('');
        const [delayedPulmonaryTEType, setDelayedPulmonaryTEType] = useState('');
        const [delayedPulmonaryTETreatment, setDelayedPulmonaryTETreatment] = useState('');
        const [delayedPulmonaryTECategory, setDelayedPulmonaryTECategory] = useState('');
        const [delayedPulmonaryTEPOD, setDelayedPulmonaryTEPOD] = useState('');
        const [delayedRenal, setDelayedRenal] = useState('');
        const [delayedRenalType, setDelayedRenalType] = useState('');
        const [delayedRenalTreatment, setDelayedRenalTreatment] = useState('');
        const [delayedRenalCategory, setDelayedRenalCategory] = useState('');
        const [delayedRenalPOD, setDelayedRenalPOD] = useState('');
        const [delayedCardiovascular, setDelayedCardiovascular] = useState('');
        const [delayedCardiovascularType, setDelayedCardiovascularType] = useState('');
        const [delayedCardiovascularTreatment, setDelayedCardiovascularTreatment] = useState('');
        const [delayedCardiovascularCategory, setDelayedCardiovascularCategory] = useState('');
        const [delayedCardiovascularPOD, setDelayedCardiovascularPOD] = useState('');
        const [delayedOtherSystemic, setDelayedOtherSystemic] = useState('');
        const [delayedOtherSystemicType, setDelayedOtherSystemicType] = useState('');
        const [delayedOtherSystemicTreatment, setDelayedOtherSystemicTreatment] = useState('');
        const [delayedOtherSystemicCategory, setDelayedOtherSystemicCategory] = useState('');
        const [delayedOtherSystemicPOD, setDelayedOtherSystemicPOD] = useState('');
        const [delayedOther, setDelayedOther] = useState('');
        const [delayedOtherTreatment, setDelayedOtherTreatment] = useState('');
        const [delayedOtherCategory, setDelayedOtherCategory] = useState('');
        const [delayedOtherPOD, setDelayedOtherPOD] = useState('');
    
        const categoryOptions = ["I", "II", "IIIa", "IIIb", "IVa", "IVb", "V"];
    
        const questions1 = [
            { question: 'Date (Early):', questionId: 'early-date', questionType: 'date', inputtype: 'date', options: [], value: earlyDate, setValue: setEarlyDate, heading: "Postoperative Complication (up to 30d) : Early" },
            
            { question: 'Postoperative Complications (Early):', questionId: 'early-complications', questionType: 'dropdown', inputtype: 'dropdown', options: ["Yes", "No"], value: earlyComplications, setValue: setEarlyComplications },
            
            { question: 'Local Wound Infection:', questionId: 'early-local-wound-infection', questionType: 'dropdown', inputtype: 'dropdown', options: ["Yes", "No"], value: earlyLocalWoundInfection, setValue: setEarlyLocalWoundInfection },
            
            { question: 'Type of Local Wound Infection:', questionId: 'early-local-wound-infection-type', questionType: 'dropdown', inputtype: 'dropdown', options: ["Superficial wound infection", "Deep wound infection"], value: earlyLocalWoundInfectionType, setValue: setEarlyLocalWoundInfectionType },
            
            { question: 'Details of Treatment:', questionId: 'early-local-wound-infection-details', questionType: 'textarea', inputtype: 'textarea', options: [], value: earlyLocalWoundInfectionTreatment, setValue: setEarlyLocalWoundInfectionTreatment },
            
            { question: 'Category:', questionId: 'early-local-wound-infection-category', questionType: 'dropdown', inputtype: 'dropdown', options: categoryOptions, value: earlyLocalWoundInfectionCategory, setValue: setEarlyLocalWoundInfectionCategory },
            
            { question: 'POD of Occurrence:', questionId: 'early-local-wound-infection-pod', questionType: 'text', inputtype: 'text', options: [], value: earlyLocalWoundInfectionPOD, setValue: setEarlyLocalWoundInfectionPOD },
            
            { question: 'Systemic Infection:', questionId: 'early-systemic-infection', questionType: 'dropdown', inputtype: 'dropdown', options: ["Yes", "No"], value: earlySystemicInfection, setValue: setEarlySystemicInfection },
            
            { question: 'Type of Systemic Infection:', questionId: 'early-systemic-infection-type', questionType: 'dropdown', inputtype: 'dropdown', options: ["Chest infection", "Sepsis", "Septicemia", "Urinary"], value: earlySystemicInfectionType, setValue: setEarlySystemicInfectionType },
            
            { question: 'Details of Treatment:', questionId: 'early-systemic-infection-details', questionType: 'textarea', inputtype: 'textarea', options: [], value: earlySystemicInfectionTreatment, setValue: setEarlySystemicInfectionTreatment },
            
            { question: 'Category:', questionId: 'early-systemic-infection-category', questionType: 'dropdown', inputtype: 'dropdown', options: categoryOptions, value: earlySystemicInfectionCategory, setValue: setEarlySystemicInfectionCategory },
            
            { question: 'POD of Occurrence:', questionId: 'early-systemic-infection-pod', questionType: 'text', inputtype: 'text', options: [], value: earlySystemicInfectionPOD, setValue: setEarlySystemicInfectionPOD },
            
            { question: 'Flap Related:', questionId: 'early-flap-related', questionType: 'dropdown', inputtype: 'dropdown', options: ["Yes", "No"], value: earlyFlapRelated, setValue: setEarlyFlapRelated },
            
            { question: 'Type of Flap Related Complications:', questionId: 'early-flap-related-type', questionType: 'dropdown', inputtype: 'dropdown', options: ["Wound dehiscence", "Partial flap loss", "Total flap loss"], value: earlyFlapRelatedType, setValue: setEarlyFlapRelatedType },
            
            { question: 'Details of Treatment:', questionId: 'early-flap-related-details', questionType: 'textarea', inputtype: 'textarea', options: [], value: earlyFlapRelatedTreatment, setValue: setEarlyFlapRelatedTreatment },
            
            { question: 'Category:', questionId: 'early-flap-related-category', questionType: 'dropdown', inputtype: 'dropdown', options: categoryOptions, value: earlyFlapRelatedCategory, setValue: setEarlyFlapRelatedCategory },
            
            { question: 'POD of Occurrence:', questionId: 'early-flap-related-pod', questionType: 'text', inputtype: 'text', options: [], value: earlyFlapRelatedPOD, setValue: setEarlyFlapRelatedPOD },
            
            { question: 'Other Wound Related Complications:', questionId: 'early-other-wound-related', questionType: 'dropdown', inputtype: 'dropdown', options: ["Yes", "No"], value: earlyOtherWoundRelated, setValue: setEarlyOtherWoundRelated },
            
            { question: 'Type of Other Wound Related Complications:', questionId: 'early-other-wound-related-type', questionType: 'dropdown', inputtype: 'dropdown', options: ["Hemorrhage", "Chyle leak", "OC fistula", "Salivary fistula"], value: earlyOtherWoundRelatedType, setValue: setEarlyOtherWoundRelatedType },
            
            { question: 'Details of Treatment:', questionId: 'early-other-wound-related-details', questionType: 'textarea', inputtype: 'textarea', options: [], value: earlyOtherWoundRelatedTreatment, setValue: setEarlyOtherWoundRelatedTreatment },
            
            { question: 'Category:', questionId: 'early-other-wound-related-category', questionType: 'dropdown', inputtype: 'dropdown', options: categoryOptions, value: earlyOtherWoundRelatedCategory, setValue: setEarlyOtherWoundRelatedCategory },
            
            { question: 'POD of Occurrence:', questionId: 'early-other-wound-related-pod', questionType: 'text', inputtype: 'text', options: [], value: earlyOtherWoundRelatedPOD, setValue: setEarlyOtherWoundRelatedPOD },
            
            { question: 'GI-HPB:', questionId: 'early-gihpb', questionType: 'dropdown', inputtype: 'dropdown', options: ["Yes", "No"], value: earlyGIHPB, setValue: setEarlyGIHPB },
            
            { question: 'Type of GI-HPB Complications:', questionId: 'early-gihpb-type', questionType: 'dropdown', inputtype: 'dropdown', options: ["Gastroparesis", "Delayed gastric emptying", "Aspiration", "Deranged liver functions", "Liver Failure"], value: earlyGIHPBType, setValue: setEarlyGIHPBType },
            
            { question: 'Details of Treatment:', questionId: 'early-gihpb-details', questionType: 'textarea', inputtype: 'textarea', options: [], value: earlyGIHPBTreatment, setValue: setEarlyGIHPBTreatment },
            
            { question: 'Category:', questionId: 'early-gihpb-category', questionType: 'dropdown', inputtype: 'dropdown', options: categoryOptions, value: earlyGIHPBCategory, setValue: setEarlyGIHPBCategory },
            
            { question: 'POD of Occurrence:', questionId: 'early-gihpb-pod', questionType: 'text', inputtype: 'text', options: [], value: earlyGIHPBPOD, setValue: setEarlyGIHPBPOD },
            
            { question: 'Pulmonary or TE:', questionId: 'early-pulmonary-te', questionType: 'dropdown', inputtype: 'dropdown', options: ["Yes", "No"], value: earlyPulmonaryTE, setValue: setEarlyPulmonaryTE },
            
            { question: 'Type of Pulmonary or TE Complications:', questionId: 'early-pulmonary-te-type', questionType: 'dropdown', inputtype: 'dropdown', options: ["DVT", "Pleural effusion", "Embolism", "Respiratory Failure"], value: earlyPulmonaryTEType, setValue: setEarlyPulmonaryTEType },
            
            { question: 'Details of Treatment:', questionId: 'early-pulmonary-te-details', questionType: 'textarea', inputtype: 'textarea', options: [], value: earlyPulmonaryTETreatment, setValue: setEarlyPulmonaryTETreatment },
            
            { question: 'Category:', questionId: 'early-pulmonary-te-category', questionType: 'dropdown', inputtype: 'dropdown', options: categoryOptions, value: earlyPulmonaryTECategory, setValue: setEarlyPulmonaryTECategory },
            
            { question: 'POD of Occurrence:', questionId: 'early-pulmonary-te-pod', questionType: 'text', inputtype: 'text', options: [], value: earlyPulmonaryTEPOD, setValue: setEarlyPulmonaryTEPOD },
            
            { question: 'Renal:', questionId: 'early-renal', questionType: 'dropdown', inputtype: 'dropdown', options: ["Yes", "No"], value: earlyRenal, setValue: setEarlyRenal },
            
            { question: 'Type of Renal Complications:', questionId: 'early-renal-type', questionType: 'dropdown', inputtype: 'dropdown', options: ["Electrolyte imbalance", "Deranged renal function", "Renal Failure"], value: earlyRenalType, setValue: setEarlyRenalType },
            
            { question: 'Details of Treatment:', questionId: 'early-renal-details', questionType: 'textarea', inputtype: 'textarea', options: [], value: earlyRenalTreatment, setValue: setEarlyRenalTreatment },
            
            { question: 'Category:', questionId: 'early-renal-category', questionType: 'dropdown', inputtype: 'dropdown', options: categoryOptions, value: earlyRenalCategory, setValue: setEarlyRenalCategory },
            
            { question: 'POD of Occurrence:', questionId: 'early-renal-pod', questionType: 'text', inputtype: 'text', options: [], value: earlyRenalPOD, setValue: setEarlyRenalPOD },
            
            { question: 'Cardiovascular:', questionId: 'early-cardiovascular', questionType: 'dropdown', inputtype: 'dropdown', options: ["Yes", "No"], value: earlyCardiovascular, setValue: setEarlyCardiovascular },
            
            { question: 'Type of CVS Complications:', questionId: 'early-cardiovascular-type', questionType: 'dropdown', inputtype: 'dropdown', options: ["Hypotension", "Cardiac failure", "Hemorrhagic shock"], value: earlyCardiovascularType, setValue: setEarlyCardiovascularType },
            
            { question: 'Details of Treatment:', questionId: 'early-cardiovascular-details', questionType: 'textarea', inputtype: 'textarea', options: [], value: earlyCardiovascularTreatment, setValue: setEarlyCardiovascularTreatment },
            
            { question: 'Category:', questionId: 'early-cardiovascular-category', questionType: 'dropdown', inputtype: 'dropdown', options: categoryOptions, value: earlyCardiovascularCategory, setValue: setEarlyCardiovascularCategory },
            
            { question: 'POD of Occurrence:', questionId: 'early-cardiovascular-pod', questionType: 'text', inputtype: 'text', options: [], value: earlyCardiovascularPOD, setValue: setEarlyCardiovascularPOD },
            
            { question: 'Other Systemic Complications:', questionId: 'early-other-systemic', questionType: 'dropdown', inputtype: 'dropdown', options: ["Yes", "No"], value: earlyOtherSystemic, setValue: setEarlyOtherSystemic },
            
            { question: 'Type of Other Systemic Complications:', questionId: 'early-other-systemic-type', questionType: 'dropdown', inputtype: 'dropdown', options: ["Anemia", "Fever of unknown origin", "Convulsions"], value: earlyOtherSystemicType, setValue: setEarlyOtherSystemicType },
            
            { question: 'Details of Treatment:', questionId: 'early-other-systemic-details', questionType: 'textarea', inputtype: 'textarea', options: [], value: earlyOtherSystemicTreatment, setValue: setEarlyOtherSystemicTreatment },
            
            { question: 'Category:', questionId: 'early-other-systemic-category', questionType: 'dropdown', inputtype: 'dropdown', options: categoryOptions, value: earlyOtherSystemicCategory, setValue: setEarlyOtherSystemicCategory },
            
            { question: 'POD of Occurrence:', questionId: 'early-other-systemic-pod', questionType: 'text', inputtype: 'text', options: [], value: earlyOtherSystemicPOD, setValue: setEarlyOtherSystemicPOD },
            
            { question: 'Other:', questionId: 'early-other', questionType: 'textarea', inputtype: 'textarea', options: [], value: earlyOther, setValue: setEarlyOther },
            
            { question: 'Details of Treatment:', questionId: 'early-other-details', questionType: 'textarea', inputtype: 'textarea', options: [], value: earlyOtherTreatment, setValue: setEarlyOtherTreatment },
            
            { question: 'Category:', questionId: 'early-other-category', questionType: 'dropdown', inputtype: 'dropdown', options: categoryOptions, value: earlyOtherCategory, setValue: setEarlyOtherCategory },
            
            { question: 'POD of Occurrence:', questionId: 'early-other-pod', questionType: 'text', inputtype: 'text', options: [], value: earlyOtherPOD, setValue: setEarlyOtherPOD },
        ];
        
       
    
        const questions2 = [
            { question: 'Date (Delayed):', questionId: 'delayed-date', questionType: 'date', inputtype: 'date', options: [], value: delayedDate, setValue: setDelayedDate, heading: "Postoperative Complication (1m - 3m) : Delayed" },
        
            { question: 'Postoperative Complications (Delayed):', questionId: 'delayed-complications', questionType: 'dropdown', inputtype: 'dropdown', options: ["Yes", "No"], value: delayedComplications, setValue: setDelayedComplications },
        
            { question: 'Local Wound Infection:', questionId: 'delayed-local-wound-infection', questionType: 'dropdown', inputtype: 'dropdown', options: ["Yes", "No"], value: delayedLocalWoundInfection, setValue: setDelayedLocalWoundInfection },
        
            { question: 'Type of Local Wound Infection:', questionId: 'delayed-local-wound-infection-type', questionType: 'dropdown', inputtype: 'dropdown', options: ["Superficial wound infection", "Deep wound infection"], value: delayedLocalWoundInfectionType, setValue: setDelayedLocalWoundInfectionType },
        
            { question: 'Details of Treatment:', questionId: 'delayed-local-wound-infection-details', questionType: 'textarea', inputtype: 'textarea', options: [], value: delayedLocalWoundInfectionTreatment, setValue: setDelayedLocalWoundInfectionTreatment },
        
            { question: 'Category:', questionId: 'delayed-local-wound-infection-category', questionType: 'dropdown', inputtype: 'dropdown', options: categoryOptions, value: delayedLocalWoundInfectionCategory, setValue: setDelayedLocalWoundInfectionCategory },
        
            { question: 'POD of Occurrence:', questionId: 'delayed-local-wound-infection-pod', questionType: 'text', inputtype: 'text', options: [], value: delayedLocalWoundInfectionPOD, setValue: setDelayedLocalWoundInfectionPOD },
        
            { question: 'Systemic Infection:', questionId: 'delayed-systemic-infection', questionType: 'dropdown', inputtype: 'dropdown', options: ["Yes", "No"], value: delayedSystemicInfection, setValue: setDelayedSystemicInfection },
        
            { question: 'Type of Systemic Infection:', questionId: 'delayed-systemic-infection-type', questionType: 'dropdown', inputtype: 'dropdown', options: ["Chest infection", "Sepsis", "Septicemia", "Urinary"], value: delayedSystemicInfectionType, setValue: setDelayedSystemicInfectionType },
        
            { question: 'Details of Treatment:', questionId: 'delayed-systemic-infection-details', questionType: 'textarea', inputtype: 'textarea', options: [], value: delayedSystemicInfectionTreatment, setValue: setDelayedSystemicInfectionTreatment },
        
            { question: 'Category:', questionId: 'delayed-systemic-infection-category', questionType: 'dropdown', inputtype: 'dropdown', options: categoryOptions, value: delayedSystemicInfectionCategory, setValue: setDelayedSystemicInfectionCategory },
        
            { question: 'POD of Occurrence:', questionId: 'delayed-systemic-infection-pod', questionType: 'text', inputtype: 'text', options: [], value: delayedSystemicInfectionPOD, setValue: setDelayedSystemicInfectionPOD },
        
            { question: 'Flap Related:', questionId: 'delayed-flap-related', questionType: 'dropdown', inputtype: 'dropdown', options: ["Yes", "No"], value: delayedFlapRelated, setValue: setDelayedFlapRelated },
        
            { question: 'Type of Flap Related Complications:', questionId: 'delayed-flap-related-type', questionType: 'dropdown', inputtype: 'dropdown', options: ["Wound dehiscence", "Partial flap loss", "Total flap loss"], value: delayedFlapRelatedType, setValue: setDelayedFlapRelatedType },
        
            { question: 'Details of Treatment:', questionId: 'delayed-flap-related-details', questionType: 'textarea', inputtype: 'textarea', options: [], value: delayedFlapRelatedTreatment, setValue: setDelayedFlapRelatedTreatment },
        
            { question: 'Category:', questionId: 'delayed-flap-related-category', questionType: 'dropdown', inputtype: 'dropdown', options: categoryOptions, value: delayedFlapRelatedCategory, setValue: setDelayedFlapRelatedCategory },
        
            { question: 'POD of Occurrence:', questionId: 'delayed-flap-related-pod', questionType: 'text', inputtype: 'text', options: [], value: delayedFlapRelatedPOD, setValue: setDelayedFlapRelatedPOD },
        
            { question: 'Other Wound Related Complications:', questionId: 'delayed-other-wound-related', questionType: 'dropdown', inputtype: 'dropdown', options: ["Yes", "No"], value: delayedOtherWoundRelated, setValue: setDelayedOtherWoundRelated },
        
            { question: 'Type of Other Wound Related Complications:', questionId: 'delayed-other-wound-related-type', questionType: 'dropdown', inputtype: 'dropdown', options: ["Hemorrhage", "Chyle leak", "OC fistula", "Salivary fistula"], value: delayedOtherWoundRelatedType, setValue: setDelayedOtherWoundRelatedType },
        
            { question: 'Details of Treatment:', questionId: 'delayed-other-wound-related-details', questionType: 'textarea', inputtype: 'textarea', options: [], value: delayedOtherWoundRelatedTreatment, setValue: setDelayedOtherWoundRelatedTreatment },
        
            { question: 'Category:', questionId: 'delayed-other-wound-related-category', questionType: 'dropdown', inputtype: 'dropdown', options: categoryOptions, value: delayedOtherWoundRelatedCategory, setValue: setDelayedOtherWoundRelatedCategory },
        
            { question: 'POD of Occurrence:', questionId: 'delayed-other-wound-related-pod', questionType: 'text', inputtype: 'text', options: [], value: delayedOtherWoundRelatedPOD, setValue: setDelayedOtherWoundRelatedPOD },
        
            { question: 'GI-HPB:', questionId: 'delayed-gihpb', questionType: 'dropdown', inputtype: 'dropdown', options: ["Yes", "No"], value: delayedGIHPB, setValue: setDelayedGIHPB },
        
            { question: 'Type of GI-HPB Complications:', questionId: 'delayed-gihpb-type', questionType: 'dropdown', inputtype: 'dropdown', options: ["Gastroparesis", "Delayed gastric emptying", "Aspiration", "Deranged liver functions", "Liver Failure"], value: delayedGIHPBType, setValue: setDelayedGIHPBType },
        
            { question: 'Details of Treatment:', questionId: 'delayed-gihpb-details', questionType: 'textarea', inputtype: 'textarea', options: [], value: delayedGIHPBTreatment, setValue: setDelayedGIHPBTreatment },
        
            { question: 'Category:', questionId: 'delayed-gihpb-category', questionType: 'dropdown', inputtype: 'dropdown', options: categoryOptions, value: delayedGIHPBCategory, setValue: setDelayedGIHPBCategory },
        
            { question: 'POD of Occurrence:', questionId: 'delayed-gihpb-pod', questionType: 'text', inputtype: 'text', options: [], value: delayedGIHPBPOD, setValue: setDelayedGIHPBPOD },
        
            { question: 'Pulmonary or TE:', questionId: 'delayed-pulmonary-te', questionType: 'dropdown', inputtype: 'dropdown', options: ["Yes", "No"], value: delayedPulmonaryTE, setValue: setDelayedPulmonaryTE },
        
            { question: 'Type of Pulmonary or TE Complications:', questionId: 'delayed-pulmonary-te-type', questionType: 'dropdown', inputtype: 'dropdown', options: ["DVT", "Pleural effusion", "Embolism", "Respiratory Failure"], value: delayedPulmonaryTEType, setValue: setDelayedPulmonaryTEType },
        
            { question: 'Details of Treatment:', questionId: 'delayed-pulmonary-te-details', questionType: 'textarea', inputtype: 'textarea', options: [], value: delayedPulmonaryTETreatment, setValue: setDelayedPulmonaryTETreatment },
        
            { question: 'Category:', questionId: 'delayed-pulmonary-te-category', questionType: 'dropdown', inputtype: 'dropdown', options: categoryOptions, value: delayedPulmonaryTECategory, setValue: setDelayedPulmonaryTECategory },
        
            { question: 'POD of Occurrence:', questionId: 'delayed-pulmonary-te-pod', questionType: 'text', inputtype: 'text', options: [], value: delayedPulmonaryTEPOD, setValue: setDelayedPulmonaryTEPOD },
        
            { question: 'Renal:', questionId: 'delayed-renal', questionType: 'dropdown', inputtype: 'dropdown', options: ["Yes", "No"], value: delayedRenal, setValue: setDelayedRenal },
        
            { question: 'Type of Renal Complications:', questionId: 'delayed-renal-type', questionType: 'dropdown', inputtype: 'dropdown', options: ["Electrolyte imbalance", "Deranged renal function", "Renal Failure"], value: delayedRenalType, setValue: setDelayedRenalType },
        
            { question: 'Details of Treatment:', questionId: 'delayed-renal-details', questionType: 'textarea', inputtype: 'textarea', options: [], value: delayedRenalTreatment, setValue: setDelayedRenalTreatment },
        
            { question: 'Category:', questionId: 'delayed-renal-category', questionType: 'dropdown', inputtype: 'dropdown', options: categoryOptions, value: delayedRenalCategory, setValue: setDelayedRenalCategory },
        
            { question: 'POD of Occurrence:', questionId: 'delayed-renal-pod', questionType: 'text', inputtype: 'text', options: [], value: delayedRenalPOD, setValue: setDelayedRenalPOD },
        
            { question: 'Cardiovascular:', questionId: 'delayed-cardiovascular', questionType: 'dropdown', inputtype: 'dropdown', options: ["Yes", "No"], value: delayedCardiovascular, setValue: setDelayedCardiovascular },
        
            { question: 'Type of CVS Complications:', questionId: 'delayed-cardiovascular-type', questionType: 'dropdown', inputtype: 'dropdown', options: ["Hypotension", "Cardiac failure", "Hemorrhagic shock"], value: delayedCardiovascularType, setValue: setDelayedCardiovascularType },
        
            { question: 'Details of Treatment:', questionId: 'delayed-cardiovascular-details', questionType: 'textarea', inputtype: 'textarea', options: [], value: delayedCardiovascularTreatment, setValue: setDelayedCardiovascularTreatment },
        
            { question: 'Category:', questionId: 'delayed-cardiovascular-category', questionType: 'dropdown', inputtype: 'dropdown', options: categoryOptions, value: delayedCardiovascularCategory, setValue: setDelayedCardiovascularCategory },
        
            { question: 'POD of Occurrence:', questionId: 'delayed-cardiovascular-pod', questionType: 'text', inputtype: 'text', options: [], value: delayedCardiovascularPOD, setValue: setDelayedCardiovascularPOD },
        
            { question: 'Other Systemic Complications:', questionId: 'delayed-other-systemic', questionType: 'dropdown', inputtype: 'dropdown', options: ["Yes", "No"], value: delayedOtherSystemic, setValue: setDelayedOtherSystemic },
        
            { question: 'Type of Other Systemic Complications:', questionId: 'delayed-other-systemic-type', questionType: 'dropdown', inputtype: 'dropdown', options: ["Anemia", "Fever of unknown origin", "Convulsions"], value: delayedOtherSystemicType, setValue: setDelayedOtherSystemicType },
        
            { question: 'Details of Treatment:', questionId: 'delayed-other-systemic-details', questionType: 'textarea', inputtype: 'textarea', options: [], value: delayedOtherSystemicTreatment, setValue: setDelayedOtherSystemicTreatment },
        
            { question: 'Category:', questionId: 'delayed-other-systemic-category', questionType: 'dropdown', inputtype: 'dropdown', options: categoryOptions, value: delayedOtherSystemicCategory, setValue: setDelayedOtherSystemicCategory },
        
            { question: 'POD of Occurrence:', questionId: 'delayed-other-systemic-pod', questionType: 'text', inputtype: 'text', options: [], value: delayedOtherSystemicPOD, setValue: setDelayedOtherSystemicPOD },
        
            { question: 'Other:', questionId: 'delayed-other', questionType: 'textarea', inputtype: 'textarea', options: [], value: delayedOther, setValue: setDelayedOther },
        
            { question: 'Details of Treatment:', questionId: 'delayed-other-details', questionType: 'textarea', inputtype: 'textarea', options: [], value: delayedOtherTreatment, setValue: setDelayedOtherTreatment },
        
            { question: 'Category:', questionId: 'delayed-other-category', questionType: 'dropdown', inputtype: 'dropdown', options: categoryOptions, value: delayedOtherCategory, setValue: setDelayedOtherCategory },
        
            { question: 'POD of Occurrence:', questionId: 'delayed-other-pod', questionType: 'text', inputtype: 'text', options: [], value: delayedOtherPOD, setValue: setDelayedOtherPOD },
        ];
        
        // Example of how to use the delayedQuestions array

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
                            const questionsArray = [questions1, questions2];
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
                                description: "Post-Operative Complications Form Submitted",
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
                                description: "Post-Operative Complications Form Submitted",
                                variant: "success",
                            })
                            router.push("/form/histopathology")
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




                </TabsList>
            </Tabs>
            <HeadDrop
          dataArray={[
            { id: "section1", title: "Early" },
            { id: "section2", title: "Delayed" },
            
            
            
          ]}
          id={tabValue}
          setId={setTabValue}
         
        />
        </div>
    );
};
export default Postoperativecomplications
