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


interface updateType {
    questionId: string;
    updates: any[]
}



const Followupreport = () => {
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
    const questionType = "followupreport";
    const formTitle = "Follow-up Assessment Report";
    const [tabValue, setTabValue] = useState("section1");
    const [loading, setLoading] = React.useState(false);
    const [updates, setUpdates] = useState<updateType[]>([]);


// Timing PS
const [followUpDate_timing_PS, setFollowUpDate_timing_PS] = useState('');
const [followUpNumber_timing_PS, setFollowUpNumber_timing_PS] = useState('');
const [f3_timing_PS, setF3_timing_PS] = useState('');
const [f4_timing_PS, setF4_timing_PS] = useState('');
const [dateOfImaging_timing_PS, setDateOfImaging_timing_PS] = useState('');
const [imagingType_timing_PS, setImagingType_timing_PS] = useState('');
const [imagingFindings_timing_PS, setImagingFindings_timing_PS] = useState('');
const [biopsyDate_timing_PS, setBiopsyDate_timing_PS] = useState('');
const [biopsyReport_timing_PS, setBiopsyReport_timing_PS] = useState('');
const [statusDate_timing_PS, setStatusDate_timing_PS] = useState('');
const [followUpStatus_timing_PS, setFollowUpStatus_timing_PS] = useState('');
const [site_timing_PS, setSite_timing_PS] = useState('');
const [aliveOrDeath_timing_PS, setAliveOrDeath_timing_PS] = useState('');
const [causeOfDeath_timing_PS, setCauseOfDeath_timing_PS] = useState('');
const [dateOfDeath_timing_PS, setDateOfDeath_timing_PS] = useState('');
const [placeOfDeath_timing_PS, setPlaceOfDeath_timing_PS] = useState('');

// Timing B
const [followUpDate_timing_B, setFollowUpDate_timing_B] = useState('');
const [followUpNumber_timing_B, setFollowUpNumber_timing_B] = useState('');
const [f3_timing_B, setF3_timing_B] = useState('');
const [f4_timing_B, setF4_timing_B] = useState('');
const [dateOfImaging_timing_B, setDateOfImaging_timing_B] = useState('');
const [imagingType_timing_B, setImagingType_timing_B] = useState('');
const [imagingFindings_timing_B, setImagingFindings_timing_B] = useState('');
const [biopsyDate_timing_B, setBiopsyDate_timing_B] = useState('');
const [biopsyReport_timing_B, setBiopsyReport_timing_B] = useState('');
const [statusDate_timing_B, setStatusDate_timing_B] = useState('');
const [followUpStatus_timing_B, setFollowUpStatus_timing_B] = useState('');
const [site_timing_B, setSite_timing_B] = useState('');
const [aliveOrDeath_timing_B, setAliveOrDeath_timing_B] = useState('');
const [causeOfDeath_timing_B, setCauseOfDeath_timing_B] = useState('');
const [dateOfDeath_timing_B, setDateOfDeath_timing_B] = useState('');
const [placeOfDeath_timing_B, setPlaceOfDeath_timing_B] = useState('');

// Timing F-0
const [followUpDate_timing_F0, setFollowUpDate_timing_F0] = useState('');
const [followUpNumber_timing_F0, setFollowUpNumber_timing_F0] = useState('');
const [f3_timing_F0, setF3_timing_F0] = useState('');
const [f4_timing_F0, setF4_timing_F0] = useState('');
const [dateOfImaging_timing_F0, setDateOfImaging_timing_F0] = useState('');
const [imagingType_timing_F0, setImagingType_timing_F0] = useState('');
const [imagingFindings_timing_F0, setImagingFindings_timing_F0] = useState('');
const [biopsyDate_timing_F0, setBiopsyDate_timing_F0] = useState('');
const [biopsyReport_timing_F0, setBiopsyReport_timing_F0] = useState('');
const [statusDate_timing_F0, setStatusDate_timing_F0] = useState('');
const [followUpStatus_timing_F0, setFollowUpStatus_timing_F0] = useState('');
const [site_timing_F0, setSite_timing_F0] = useState('');
const [aliveOrDeath_timing_F0, setAliveOrDeath_timing_F0] = useState('');
const [causeOfDeath_timing_F0, setCauseOfDeath_timing_F0] = useState('');
const [dateOfDeath_timing_F0, setDateOfDeath_timing_F0] = useState('');
const [placeOfDeath_timing_F0, setPlaceOfDeath_timing_F0] = useState('');

// Timing F-3
const [followUpDate_timing_F3, setFollowUpDate_timing_F3] = useState('');
const [followUpNumber_timing_F3, setFollowUpNumber_timing_F3] = useState('');
const [f3_timing_F3, setF3_timing_F3] = useState('');
const [f4_timing_F3, setF4_timing_F3] = useState('');
const [dateOfImaging_timing_F3, setDateOfImaging_timing_F3] = useState('');
const [imagingType_timing_F3, setImagingType_timing_F3] = useState('');
const [imagingFindings_timing_F3, setImagingFindings_timing_F3] = useState('');
const [biopsyDate_timing_F3, setBiopsyDate_timing_F3] = useState('');
const [biopsyReport_timing_F3, setBiopsyReport_timing_F3] = useState('');
const [statusDate_timing_F3, setStatusDate_timing_F3] = useState('');
const [followUpStatus_timing_F3, setFollowUpStatus_timing_F3] = useState('');
const [site_timing_F3, setSite_timing_F3] = useState('');
const [aliveOrDeath_timing_F3, setAliveOrDeath_timing_F3] = useState('');
const [causeOfDeath_timing_F3, setCauseOfDeath_timing_F3] = useState('');
const [dateOfDeath_timing_F3, setDateOfDeath_timing_F3] = useState('');
const [placeOfDeath_timing_F3, setPlaceOfDeath_timing_F3] = useState('');

// Timing F-6
const [followUpDate_timing_F6, setFollowUpDate_timing_F6] = useState('');
const [followUpNumber_timing_F6, setFollowUpNumber_timing_F6] = useState('');
const [f3_timing_F6, setF3_timing_F6] = useState('');
const [f4_timing_F6, setF4_timing_F6] = useState('');
const [dateOfImaging_timing_F6, setDateOfImaging_timing_F6] = useState('');
const [imagingType_timing_F6, setImagingType_timing_F6] = useState('');
const [imagingFindings_timing_F6, setImagingFindings_timing_F6] = useState('');
const [biopsyDate_timing_F6, setBiopsyDate_timing_F6] = useState('');
const [biopsyReport_timing_F6, setBiopsyReport_timing_F6] = useState('');
const [statusDate_timing_F6, setStatusDate_timing_F6] = useState('');
const [followUpStatus_timing_F6, setFollowUpStatus_timing_F6] = useState('');
const [site_timing_F6, setSite_timing_F6] = useState('');
const [aliveOrDeath_timing_F6, setAliveOrDeath_timing_F6] = useState('');
const [causeOfDeath_timing_F6, setCauseOfDeath_timing_F6] = useState('');
const [dateOfDeath_timing_F6, setDateOfDeath_timing_F6] = useState('');
const [placeOfDeath_timing_F6, setPlaceOfDeath_timing_F6] = useState('');

// Timing F-9
const [followUpDate_timing_F9, setFollowUpDate_timing_F9] = useState('');
const [followUpNumber_timing_F9, setFollowUpNumber_timing_F9] = useState('');
const [f3_timing_F9, setF3_timing_F9] = useState('');
const [f4_timing_F9, setF4_timing_F9] = useState('');
const [dateOfImaging_timing_F9, setDateOfImaging_timing_F9] = useState('');
const [imagingType_timing_F9, setImagingType_timing_F9] = useState('');
const [imagingFindings_timing_F9, setImagingFindings_timing_F9] = useState('');
const [biopsyDate_timing_F9, setBiopsyDate_timing_F9] = useState('');
const [biopsyReport_timing_F9, setBiopsyReport_timing_F9] = useState('');
const [statusDate_timing_F9, setStatusDate_timing_F9] = useState('');
const [followUpStatus_timing_F9, setFollowUpStatus_timing_F9] = useState('');
const [site_timing_F9, setSite_timing_F9] = useState('');
const [aliveOrDeath_timing_F9, setAliveOrDeath_timing_F9] = useState('');
const [causeOfDeath_timing_F9, setCauseOfDeath_timing_F9] = useState('');
const [dateOfDeath_timing_F9, setDateOfDeath_timing_F9] = useState('');
const [placeOfDeath_timing_F9, setPlaceOfDeath_timing_F9] = useState('');

// Timing F-12
const [followUpDate_timing_F12, setFollowUpDate_timing_F12] = useState('');
const [followUpNumber_timing_F12, setFollowUpNumber_timing_F12] = useState('');
const [f3_timing_F12, setF3_timing_F12] = useState('');
const [f4_timing_F12, setF4_timing_F12] = useState('');
const [dateOfImaging_timing_F12, setDateOfImaging_timing_F12] = useState('');
const [imagingType_timing_F12, setImagingType_timing_F12] = useState('');
const [imagingFindings_timing_F12, setImagingFindings_timing_F12] = useState('');
const [biopsyDate_timing_F12, setBiopsyDate_timing_F12] = useState('');
const [biopsyReport_timing_F12, setBiopsyReport_timing_F12] = useState('');
const [statusDate_timing_F12, setStatusDate_timing_F12] = useState('');
const [followUpStatus_timing_F12, setFollowUpStatus_timing_F12] = useState('');
const [site_timing_F12, setSite_timing_F12] = useState('');
const [aliveOrDeath_timing_F12, setAliveOrDeath_timing_F12] = useState('');
const [causeOfDeath_timing_F12, setCauseOfDeath_timing_F12] = useState('');
const [dateOfDeath_timing_F12, setDateOfDeath_timing_F12] = useState('');
const [placeOfDeath_timing_F12, setPlaceOfDeath_timing_F12] = useState('');

// Timing F-18
const [followUpDate_timing_F18, setFollowUpDate_timing_F18] = useState('');
const [followUpNumber_timing_F18, setFollowUpNumber_timing_F18] = useState('');
const [f3_timing_F18, setF3_timing_F18] = useState('');
const [f4_timing_F18, setF4_timing_F18] = useState('');
const [dateOfImaging_timing_F18, setDateOfImaging_timing_F18] = useState('');
const [imagingType_timing_F18, setImagingType_timing_F18] = useState('');
const [imagingFindings_timing_F18, setImagingFindings_timing_F18] = useState('');
const [biopsyDate_timing_F18, setBiopsyDate_timing_F18] = useState('');
const [biopsyReport_timing_F18, setBiopsyReport_timing_F18] = useState('');
const [statusDate_timing_F18, setStatusDate_timing_F18] = useState('');
const [followUpStatus_timing_F18, setFollowUpStatus_timing_F18] = useState('');
const [site_timing_F18, setSite_timing_F18] = useState('');
const [aliveOrDeath_timing_F18, setAliveOrDeath_timing_F18] = useState('');
const [causeOfDeath_timing_F18, setCauseOfDeath_timing_F18] = useState('');
const [dateOfDeath_timing_F18, setDateOfDeath_timing_F18] = useState('');
const [placeOfDeath_timing_F18, setPlaceOfDeath_timing_F18] = useState('');

// Timing F-24
const [followUpDate_timing_F24, setFollowUpDate_timing_F24] = useState('');
const [followUpNumber_timing_F24, setFollowUpNumber_timing_F24] = useState('');
const [f3_timing_F24, setF3_timing_F24] = useState('');
const [f4_timing_F24, setF4_timing_F24] = useState('');
const [dateOfImaging_timing_F24, setDateOfImaging_timing_F24] = useState('');
const [imagingType_timing_F24, setImagingType_timing_F24] = useState('');
const [imagingFindings_timing_F24, setImagingFindings_timing_F24] = useState('');
const [biopsyDate_timing_F24, setBiopsyDate_timing_F24] = useState('');
const [biopsyReport_timing_F24, setBiopsyReport_timing_F24] = useState('');
const [statusDate_timing_F24, setStatusDate_timing_F24] = useState('');
const [followUpStatus_timing_F24, setFollowUpStatus_timing_F24] = useState('');
const [site_timing_F24, setSite_timing_F24] = useState('');
const [aliveOrDeath_timing_F24, setAliveOrDeath_timing_F24] = useState('');
const [causeOfDeath_timing_F24, setCauseOfDeath_timing_F24] = useState('');
const [dateOfDeath_timing_F24, setDateOfDeath_timing_F24] = useState('');
const [placeOfDeath_timing_F24, setPlaceOfDeath_timing_F24] = useState('');

// Timing F-30
const [followUpDate_timing_F30, setFollowUpDate_timing_F30] = useState('');
const [followUpNumber_timing_F30, setFollowUpNumber_timing_F30] = useState('');
const [f3_timing_F30, setF3_timing_F30] = useState('');
const [f4_timing_F30, setF4_timing_F30] = useState('');
const [dateOfImaging_timing_F30, setDateOfImaging_timing_F30] = useState('');
const [imagingType_timing_F30, setImagingType_timing_F30] = useState('');
const [imagingFindings_timing_F30, setImagingFindings_timing_F30] = useState('');
const [biopsyDate_timing_F30, setBiopsyDate_timing_F30] = useState('');
const [biopsyReport_timing_F30, setBiopsyReport_timing_F30] = useState('');
const [statusDate_timing_F30, setStatusDate_timing_F30] = useState('');
const [followUpStatus_timing_F30, setFollowUpStatus_timing_F30] = useState('');
const [site_timing_F30, setSite_timing_F30] = useState('');
const [aliveOrDeath_timing_F30, setAliveOrDeath_timing_F30] = useState('');
const [causeOfDeath_timing_F30, setCauseOfDeath_timing_F30] = useState('');
const [dateOfDeath_timing_F30, setDateOfDeath_timing_F30] = useState('');
const [placeOfDeath_timing_F30, setPlaceOfDeath_timing_F30] = useState('');

// Timing F-36
const [followUpDate_timing_F36, setFollowUpDate_timing_F36] = useState('');
const [followUpNumber_timing_F36, setFollowUpNumber_timing_F36] = useState('');
const [f3_timing_F36, setF3_timing_F36] = useState('');
const [f4_timing_F36, setF4_timing_F36] = useState('');
const [dateOfImaging_timing_F36, setDateOfImaging_timing_F36] = useState('');
const [imagingType_timing_F36, setImagingType_timing_F36] = useState('');
const [imagingFindings_timing_F36, setImagingFindings_timing_F36] = useState('');
const [biopsyDate_timing_F36, setBiopsyDate_timing_F36] = useState('');
const [biopsyReport_timing_F36, setBiopsyReport_timing_F36] = useState('');
const [statusDate_timing_F36, setStatusDate_timing_F36] = useState('');
const [followUpStatus_timing_F36, setFollowUpStatus_timing_F36] = useState('');
const [site_timing_F36, setSite_timing_F36] = useState('');
const [aliveOrDeath_timing_F36, setAliveOrDeath_timing_F36] = useState('');
const [causeOfDeath_timing_F36, setCauseOfDeath_timing_F36] = useState('');
const [dateOfDeath_timing_F36, setDateOfDeath_timing_F36] = useState('');
const [placeOfDeath_timing_F36, setPlaceOfDeath_timing_F36] = useState('');

// Timing F-48
const [followUpDate_timing_F48, setFollowUpDate_timing_F48] = useState('');
const [followUpNumber_timing_F48, setFollowUpNumber_timing_F48] = useState('');
const [f3_timing_F48, setF3_timing_F48] = useState('');
const [f4_timing_F48, setF4_timing_F48] = useState('');
const [dateOfImaging_timing_F48, setDateOfImaging_timing_F48] = useState('');
const [imagingType_timing_F48, setImagingType_timing_F48] = useState('');
const [imagingFindings_timing_F48, setImagingFindings_timing_F48] = useState('');
const [biopsyDate_timing_F48, setBiopsyDate_timing_F48] = useState('');
const [biopsyReport_timing_F48, setBiopsyReport_timing_F48] = useState('');
const [statusDate_timing_F48, setStatusDate_timing_F48] = useState('');
const [followUpStatus_timing_F48, setFollowUpStatus_timing_F48] = useState('');
const [site_timing_F48, setSite_timing_F48] = useState('');
const [aliveOrDeath_timing_F48, setAliveOrDeath_timing_F48] = useState('');
const [causeOfDeath_timing_F48, setCauseOfDeath_timing_F48] = useState('');
const [dateOfDeath_timing_F48, setDateOfDeath_timing_F48] = useState('');
const [placeOfDeath_timing_F48, setPlaceOfDeath_timing_F48] = useState('');

// Timing F-60
const [followUpDate_timing_F60, setFollowUpDate_timing_F60] = useState('');
const [followUpNumber_timing_F60, setFollowUpNumber_timing_F60] = useState('');
const [f3_timing_F60, setF3_timing_F60] = useState('');
const [f4_timing_F60, setF4_timing_F60] = useState('');
const [dateOfImaging_timing_F60, setDateOfImaging_timing_F60] = useState('');
const [imagingType_timing_F60, setImagingType_timing_F60] = useState('');
const [imagingFindings_timing_F60, setImagingFindings_timing_F60] = useState('');
const [biopsyDate_timing_F60, setBiopsyDate_timing_F60] = useState('');
const [biopsyReport_timing_F60, setBiopsyReport_timing_F60] = useState('');
const [statusDate_timing_F60, setStatusDate_timing_F60] = useState('');
const [followUpStatus_timing_F60, setFollowUpStatus_timing_F60] = useState('');
const [site_timing_F60, setSite_timing_F60] = useState('');
const [aliveOrDeath_timing_F60, setAliveOrDeath_timing_F60] = useState('');
const [causeOfDeath_timing_F60, setCauseOfDeath_timing_F60] = useState('');
const [dateOfDeath_timing_F60, setDateOfDeath_timing_F60] = useState('');
const [placeOfDeath_timing_F60, setPlaceOfDeath_timing_F60] = useState('');


// Timing F-72
const [followUpDate_timing_F72, setFollowUpDate_timing_F72] = useState('');
const [followUpNumber_timing_F72, setFollowUpNumber_timing_F72] = useState('');
const [f3_timing_F72, setF3_timing_F72] = useState('');
const [f4_timing_F72, setF4_timing_F72] = useState('');
const [dateOfImaging_timing_F72, setDateOfImaging_timing_F72] = useState('');
const [imagingType_timing_F72, setImagingType_timing_F72] = useState('');
const [imagingFindings_timing_F72, setImagingFindings_timing_F72] = useState('');
const [biopsyDate_timing_F72, setBiopsyDate_timing_F72] = useState('');
const [biopsyReport_timing_F72, setBiopsyReport_timing_F72] = useState('');
const [statusDate_timing_F72, setStatusDate_timing_F72] = useState('');
const [followUpStatus_timing_F72, setFollowUpStatus_timing_F72] = useState('');
const [site_timing_F72, setSite_timing_F72] = useState('');
const [aliveOrDeath_timing_F72, setAliveOrDeath_timing_F72] = useState('');
const [causeOfDeath_timing_F72, setCauseOfDeath_timing_F72] = useState('');
const [dateOfDeath_timing_F72, setDateOfDeath_timing_F72] = useState('');
const [placeOfDeath_timing_F72, setPlaceOfDeath_timing_F72] = useState('');







const questionsTimingB = [
    { question: 'Date of follow up assessment:', questionId: 'f-1_timing_B', questionType: questionType, inputtype: 'date', options: [], value: followUpDate_timing_B, setValue: setFollowUpDate_timing_B, heading: "Follow-Up Assessment Information" },
    { question: 'Follow-Up Number:', questionId: 'f-2_timing_B', questionType: questionType, inputtype: 'text', options: [], value: followUpNumber_timing_B, setValue: setFollowUpNumber_timing_B },
    { question: 'Clinical Examination Date:', questionId: 'f-3_timing_B', questionType: questionType, inputtype: 'date', options: [], value: f3_timing_B, setValue: setF3_timing_B, heading: "Clinical Examination" },
    { question: 'Clinical Examination Findings:', questionId: 'f-4_timing_B', questionType: questionType, inputtype: 'text', options: [], value: f4_timing_B, setValue: setF4_timing_B },
    { question: 'Date of Imaging:', questionId: 'f-5_timing_B', questionType: questionType, inputtype: 'date', options: [], value: dateOfImaging_timing_B, setValue: setDateOfImaging_timing_B, heading: "Imaging" },
    { question: 'Imaging type (USG/ CT/ MRI/ PET CT):', questionId: 'f-6_timing_B', questionType: questionType, inputtype: 'dropdown', value: imagingType_timing_B, setValue: setImagingType_timing_B, options: ["USG", "CT", "MRI", "PET CT"] },
    { question: 'Imaging Findings:', questionId: 'f-7_timing_B', questionType: questionType, inputtype: 'textarea', value: imagingFindings_timing_B, setValue: setImagingFindings_timing_B, options: [] },
    { question: 'Biopsy Date:', questionId: 'f-8_timing_B', questionType: questionType, inputtype: 'date', options: [], value: biopsyDate_timing_B, setValue: setBiopsyDate_timing_B, heading: "Biopsy" },
    { question: 'Biopsy Report:', questionId: 'f-9_timing_B', questionType: questionType, inputtype: 'text', options: [], value: biopsyReport_timing_B, setValue: setBiopsyReport_timing_B },
    { question: 'Follow-Up Status Date:', questionId: 'f-10_timing_B', questionType: questionType, inputtype: 'date', options: [], value: statusDate_timing_B, setValue: setStatusDate_timing_B, heading: "Final Status" },
    { question: 'Follow-Up Status:', questionId: 'f-11_timing_B', questionType: questionType, inputtype: 'dropdown', options: ["Disease free", "Recurrence"], value: followUpStatus_timing_B, setValue: setFollowUpStatus_timing_B },
    { question: 'Site:', questionId: 'f-12_timing_B', questionType: questionType, inputtype: 'dropdown', options: ["Local", "Loco-regional", "LR+Distant", "Distant only"], value: site_timing_B, setValue: setSite_timing_B },
    { question: 'Alive or Death:', questionId: 'f-13_timing_B', questionType: questionType, inputtype: 'dropdown', options: ["Alive", "Death"], value: aliveOrDeath_timing_B, setValue: setAliveOrDeath_timing_B },
    { question: 'Cause of Death:', questionId: 'f-14_timing_B', questionType: questionType, inputtype: 'text', options: [], value: causeOfDeath_timing_B, setValue: setCauseOfDeath_timing_B },
    { question: 'Date of Death:', questionId: 'f-15_timing_B', questionType: questionType, inputtype: 'date', options: [], value: dateOfDeath_timing_B, setValue: setDateOfDeath_timing_B },
    { question: 'Place of Death:', questionId: 'f-16_timing_B', questionType: questionType, inputtype: 'dropdown', options: ["Hospital", "Home", "Other"], value: placeOfDeath_timing_B, setValue: setPlaceOfDeath_timing_B }
];
const questionsTimingPS = [
    { question: 'Date of follow up assessment:', questionId: 'f-1_timing_PS', questionType: questionType, inputtype: 'date', options: [], value: followUpDate_timing_PS, setValue: setFollowUpDate_timing_PS, heading: "Follow-Up Assessment Information" },
    { question: 'Follow-Up Number:', questionId: 'f-2_timing_PS', questionType: questionType, inputtype: 'text', options: [], value: followUpNumber_timing_PS, setValue: setFollowUpNumber_timing_PS },
    { question: 'Clinical Examination Date:', questionId: 'f-3_timing_PS', questionType: questionType, inputtype: 'date', options: [], value: f3_timing_PS, setValue: setF3_timing_PS, heading: "Clinical Examination" },
    { question: 'Clinical Examination Findings:', questionId: 'f-4_timing_PS', questionType: questionType, inputtype: 'text', options: [], value: f4_timing_PS, setValue: setF4_timing_PS },
    { question: 'Date of Imaging:', questionId: 'f-5_timing_PS', questionType: questionType, inputtype: 'date', options: [], value: dateOfImaging_timing_PS, setValue: setDateOfImaging_timing_PS, heading: "Imaging" },
    { question: 'Imaging type (USG/ CT/ MRI/ PET CT):', questionId: 'f-6_timing_PS', questionType: questionType, inputtype: 'dropdown', value: imagingType_timing_PS, setValue: setImagingType_timing_PS, options: ["USG", "CT", "MRI", "PET CT"] },
    { question: 'Imaging Findings:', questionId: 'f-7_timing_PS', questionType: questionType, inputtype: 'textarea', value: imagingFindings_timing_PS, setValue: setImagingFindings_timing_PS, options: [] },
    { question: 'Biopsy Date:', questionId: 'f-8_timing_PS', questionType: questionType, inputtype: 'date', options: [], value: biopsyDate_timing_PS, setValue: setBiopsyDate_timing_PS, heading: "Biopsy" },
    { question: 'Biopsy Report:', questionId: 'f-9_timing_PS', questionType: questionType, inputtype: 'text', options: [], value: biopsyReport_timing_PS, setValue: setBiopsyReport_timing_PS },
    { question: 'Follow-Up Status Date:', questionId: 'f-10_timing_PS', questionType: questionType, inputtype: 'date', options: [], value: statusDate_timing_PS, setValue: setStatusDate_timing_PS, heading: "Final Status" },
    { question: 'Follow-Up Status:', questionId: 'f-11_timing_PS', questionType: questionType, inputtype: 'dropdown', options: ["Disease free", "Recurrence"], value: followUpStatus_timing_PS, setValue: setFollowUpStatus_timing_PS },
    { question: 'Site:', questionId: 'f-12_timing_PS', questionType: questionType, inputtype: 'dropdown', options: ["Local", "Loco-regional", "LR+Distant", "Distant only"], value: site_timing_PS, setValue: setSite_timing_PS },
    { question: 'Alive or Death:', questionId: 'f-13_timing_PS', questionType: questionType, inputtype: 'dropdown', options: ["Alive", "Death"], value: aliveOrDeath_timing_PS, setValue: setAliveOrDeath_timing_PS },
    { question: 'Cause of Death:', questionId: 'f-14_timing_PS', questionType: questionType, inputtype: 'text', options: [], value: causeOfDeath_timing_PS, setValue: setCauseOfDeath_timing_PS },
    { question: 'Date of Death:', questionId: 'f-15_timing_PS', questionType: questionType, inputtype: 'date', options: [], value: dateOfDeath_timing_PS, setValue: setDateOfDeath_timing_PS },
    { question: 'Place of Death:', questionId: 'f-16_timing_PS', questionType: questionType, inputtype: 'dropdown', options: ["Hospital", "Home", "Other"], value: placeOfDeath_timing_PS, setValue: setPlaceOfDeath_timing_PS }
];

const questionsTimingF0 = [
    { question: 'Date of follow up assessment:', questionId: 'f-1_timing_F-0', questionType: questionType, inputtype: 'date', options: [], value: followUpDate_timing_F0, setValue: setFollowUpDate_timing_F0, heading: "Follow-Up Assessment Information" },
    { question: 'Follow-Up Number:', questionId: 'f-2_timing_F-0', questionType: questionType, inputtype: 'text', options: [], value: followUpNumber_timing_F0, setValue: setFollowUpNumber_timing_F0 },
    { question: 'Clinical Examination Date:', questionId: 'f-3_timing_F-0', questionType: questionType, inputtype: 'date', options: [], value: f3_timing_F0, setValue: setF3_timing_F0, heading: "Clinical Examination" },
    { question: 'Clinical Examination Findings:', questionId: 'f-4_timing_F-0', questionType: questionType, inputtype: 'text', options: [], value: f4_timing_F0, setValue: setF4_timing_F0 },
    { question: 'Date of Imaging:', questionId: 'f-5_timing_F-0', questionType: questionType, inputtype: 'date', options: [], value: dateOfImaging_timing_F0, setValue: setDateOfImaging_timing_F0, heading: "Imaging" },
    { question: 'Imaging type (USG/ CT/ MRI/ PET CT):', questionId: 'f-6_timing_F-0', questionType: questionType, inputtype: 'dropdown', value: imagingType_timing_F0, setValue: setImagingType_timing_F0, options: ["USG", "CT", "MRI", "PET CT"] },
    { question: 'Imaging Findings:', questionId: 'f-7_timing_F-0', questionType: questionType, inputtype: 'textarea', value: imagingFindings_timing_F0, setValue: setImagingFindings_timing_F0, options: [] },
    { question: 'Biopsy Date:', questionId: 'f-8_timing_F-0', questionType: questionType, inputtype: 'date', options: [], value: biopsyDate_timing_F0, setValue: setBiopsyDate_timing_F0, heading: "Biopsy" },
    { question: 'Biopsy Report:', questionId: 'f-9_timing_F-0', questionType: questionType, inputtype: 'text', options: [], value: biopsyReport_timing_F0, setValue: setBiopsyReport_timing_F0 },
    { question: 'Follow-Up Status Date:', questionId: 'f-10_timing_F-0', questionType: questionType, inputtype: 'date', options: [], value: statusDate_timing_F0, setValue: setStatusDate_timing_F0, heading: "Final Status" },
    { question: 'Follow-Up Status:', questionId: 'f-11_timing_F-0', questionType: questionType, inputtype: 'dropdown', options: ["Disease free", "Recurrence"], value: followUpStatus_timing_F0, setValue: setFollowUpStatus_timing_F0 },
    { question: 'Site:', questionId: 'f-12_timing_F-0', questionType: questionType, inputtype: 'dropdown', options: ["Local", "Loco-regional", "LR+Distant", "Distant only"], value: site_timing_F0, setValue: setSite_timing_F0 },
    { question: 'Alive or Death:', questionId: 'f-13_timing_F-0', questionType: questionType, inputtype: 'dropdown', options: ["Alive", "Death"], value: aliveOrDeath_timing_F0, setValue: setAliveOrDeath_timing_F0 },
    { question: 'Cause of Death:', questionId: 'f-14_timing_F-0', questionType: questionType, inputtype: 'text', options: [], value: causeOfDeath_timing_F0, setValue: setCauseOfDeath_timing_F0 },
    { question: 'Date of Death:', questionId: 'f-15_timing_F-0', questionType: questionType, inputtype: 'date', options: [], value: dateOfDeath_timing_F0, setValue: setDateOfDeath_timing_F0 },
    { question: 'Place of Death:', questionId: 'f-16_timing_F-0', questionType: questionType, inputtype: 'dropdown', options: ["Hospital", "Home", "Other"], value: placeOfDeath_timing_F0, setValue: setPlaceOfDeath_timing_F0 }
];


const questionsTimingF3 = [
    { question: 'Date of follow up assessment:', questionId: 'f-1_timing_F-3', questionType: questionType, inputtype: 'date', options: [], value: followUpDate_timing_F3, setValue: setFollowUpDate_timing_F3, heading: "Follow-Up Assessment Information" },
    { question: 'Follow-Up Number:', questionId: 'f-2_timing_F-3', questionType: questionType, inputtype: 'text', options: [], value: followUpNumber_timing_F3, setValue: setFollowUpNumber_timing_F3 },
    { question: 'Clinical Examination Date:', questionId: 'f-3_timing_F-3', questionType: questionType, inputtype: 'date', options: [], value: f3_timing_F3, setValue: setF3_timing_F3, heading: "Clinical Examination" },
    { question: 'Clinical Examination Findings:', questionId: 'f-4_timing_F-3', questionType: questionType, inputtype: 'text', options: [], value: f4_timing_F3, setValue: setF4_timing_F3 },
    { question: 'Date of Imaging:', questionId: 'f-5_timing_F-3', questionType: questionType, inputtype: 'date', options: [], value: dateOfImaging_timing_F3, setValue: setDateOfImaging_timing_F3, heading: "Imaging" },
    { question: 'Imaging type (USG/ CT/ MRI/ PET CT):', questionId: 'f-6_timing_F-3', questionType: questionType, inputtype: 'dropdown', value: imagingType_timing_F3, setValue: setImagingType_timing_F3, options: ["USG", "CT", "MRI", "PET CT"] },
    { question: 'Imaging Findings:', questionId: 'f-7_timing_F-3', questionType: questionType, inputtype: 'textarea', value: imagingFindings_timing_F3, setValue: setImagingFindings_timing_F3, options: [] },
    { question: 'Biopsy Date:', questionId: 'f-8_timing_F-3', questionType: questionType, inputtype: 'date', options: [], value: biopsyDate_timing_F3, setValue: setBiopsyDate_timing_F3, heading: "Biopsy" },
    { question: 'Biopsy Report:', questionId: 'f-9_timing_F-3', questionType: questionType, inputtype: 'text', options: [], value: biopsyReport_timing_F3, setValue: setBiopsyReport_timing_F3 },
    { question: 'Follow-Up Status Date:', questionId: 'f-10_timing_F-3', questionType: questionType, inputtype: 'date', options: [], value: statusDate_timing_F3, setValue: setStatusDate_timing_F3, heading: "Final Status" },
    { question: 'Follow-Up Status:', questionId: 'f-11_timing_F-3', questionType: questionType, inputtype: 'dropdown', options: ["Disease free", "Recurrence"], value: followUpStatus_timing_F3, setValue: setFollowUpStatus_timing_F3 },
    { question: 'Site:', questionId: 'f-12_timing_F-3', questionType: questionType, inputtype: 'dropdown', options: ["Local", "Loco-regional", "LR+Distant", "Distant only"], value: site_timing_F3, setValue: setSite_timing_F3 },
    { question: 'Alive or Death:', questionId: 'f-13_timing_F-3', questionType: questionType, inputtype: 'dropdown', options: ["Alive", "Death"], value: aliveOrDeath_timing_F3, setValue: setAliveOrDeath_timing_F3 },
    { question: 'Cause of Death:', questionId: 'f-14_timing_F-3', questionType: questionType, inputtype: 'text', options: [], value: causeOfDeath_timing_F3, setValue: setCauseOfDeath_timing_F3 },
    { question: 'Date of Death:', questionId: 'f-15_timing_F-3', questionType: questionType, inputtype: 'date', options: [], value: dateOfDeath_timing_F3, setValue: setDateOfDeath_timing_F3 },
    { question: 'Place of Death:', questionId: 'f-16_timing_F-3', questionType: questionType, inputtype: 'dropdown', options: ["Hospital", "Home", "Other"], value: placeOfDeath_timing_F3, setValue: setPlaceOfDeath_timing_F3 }
];

const questionsTimingF6 = [
    { question: 'Date of follow up assessment:', questionId: 'f-1_timing_F-6', questionType: questionType, inputtype: 'date', options: [], value: followUpDate_timing_F6, setValue: setFollowUpDate_timing_F6, heading: "Follow-Up Assessment Information" },
    { question: 'Follow-Up Number:', questionId: 'f-2_timing_F-6', questionType: questionType, inputtype: 'text', options: [], value: followUpNumber_timing_F6, setValue: setFollowUpNumber_timing_F6 },
    { question: 'Clinical Examination Date:', questionId: 'f-3_timing_F-6', questionType: questionType, inputtype: 'date', options: [], value: f3_timing_F6, setValue: setF3_timing_F6, heading: "Clinical Examination" },
    { question: 'Clinical Examination Findings:', questionId: 'f-4_timing_F-6', questionType: questionType, inputtype: 'text', options: [], value: f4_timing_F6, setValue: setF4_timing_F6 },
    { question: 'Date of Imaging:', questionId: 'f-5_timing_F-6', questionType: questionType, inputtype: 'date', options: [], value: dateOfImaging_timing_F6, setValue: setDateOfImaging_timing_F6, heading: "Imaging" },
    { question: 'Imaging type (USG/ CT/ MRI/ PET CT):', questionId: 'f-6_timing_F-6', questionType: questionType, inputtype: 'dropdown', value: imagingType_timing_F6, setValue: setImagingType_timing_F6, options: ["USG", "CT", "MRI", "PET CT"] },
    { question: 'Imaging Findings:', questionId: 'f-7_timing_F-6', questionType: questionType, inputtype: 'textarea', value: imagingFindings_timing_F6, setValue: setImagingFindings_timing_F6, options: [] },
    { question: 'Biopsy Date:', questionId: 'f-8_timing_F-6', questionType: questionType, inputtype: 'date', options: [], value: biopsyDate_timing_F6, setValue: setBiopsyDate_timing_F6, heading: "Biopsy" },
    { question: 'Biopsy Report:', questionId: 'f-9_timing_F-6', questionType: questionType, inputtype: 'text', options: [], value: biopsyReport_timing_F6, setValue: setBiopsyReport_timing_F6 },
    { question: 'Follow-Up Status Date:', questionId: 'f-10_timing_F-6', questionType: questionType, inputtype: 'date', options: [], value: statusDate_timing_F6, setValue: setStatusDate_timing_F6, heading: "Final Status" },
    { question: 'Follow-Up Status:', questionId: 'f-11_timing_F-6', questionType: questionType, inputtype: 'dropdown', options: ["Disease free", "Recurrence"], value: followUpStatus_timing_F6, setValue: setFollowUpStatus_timing_F6 },
    { question: 'Site:', questionId: 'f-12_timing_F-6', questionType: questionType, inputtype: 'dropdown', options: ["Local", "Loco-regional", "LR+Distant", "Distant only"], value: site_timing_F6, setValue: setSite_timing_F6 },
    { question: 'Alive or Death:', questionId: 'f-13_timing_F-6', questionType: questionType, inputtype: 'dropdown', options: ["Alive", "Death"], value: aliveOrDeath_timing_F6, setValue: setAliveOrDeath_timing_F6 },
    { question: 'Cause of Death:', questionId: 'f-14_timing_F-6', questionType: questionType, inputtype: 'text', options: [], value: causeOfDeath_timing_F6, setValue: setCauseOfDeath_timing_F6 },
    { question: 'Date of Death:', questionId: 'f-15_timing_F-6', questionType: questionType, inputtype: 'date', options: [], value: dateOfDeath_timing_F6, setValue: setDateOfDeath_timing_F6 },
    { question: 'Place of Death:', questionId: 'f-16_timing_F-6', questionType: questionType, inputtype: 'dropdown', options: ["Hospital", "Home", "Other"], value: placeOfDeath_timing_F6, setValue: setPlaceOfDeath_timing_F6 }
];


const questionsTimingF9 = [
    { question: 'Date of follow up assessment:', questionId: 'f-1_timing_F-9', questionType: questionType, inputtype: 'date', options: [], value: followUpDate_timing_F9, setValue: setFollowUpDate_timing_F9, heading: "Follow-Up Assessment Information" },
    { question: 'Follow-Up Number:', questionId: 'f-2_timing_F-9', questionType: questionType, inputtype: 'text', options: [], value: followUpNumber_timing_F9, setValue: setFollowUpNumber_timing_F9 },
    { question: 'Clinical Examination Date:', questionId: 'f-3_timing_F-9', questionType: questionType, inputtype: 'date', options: [], value: f3_timing_F9, setValue: setF3_timing_F9, heading: "Clinical Examination" },
    { question: 'Clinical Examination Findings:', questionId: 'f-4_timing_F-9', questionType: questionType, inputtype: 'text', options: [], value: f4_timing_F9, setValue: setF4_timing_F9 },
    { question: 'Date of Imaging:', questionId: 'f-5_timing_F-9', questionType: questionType, inputtype: 'date', options: [], value: dateOfImaging_timing_F9, setValue: setDateOfImaging_timing_F9, heading: "Imaging" },
    { question: 'Imaging type (USG/ CT/ MRI/ PET CT):', questionId: 'f-6_timing_F-9', questionType: questionType, inputtype: 'dropdown', value: imagingType_timing_F9, setValue: setImagingType_timing_F9, options: ["USG", "CT", "MRI", "PET CT"] },
    { question: 'Imaging Findings:', questionId: 'f-7_timing_F-9', questionType: questionType, inputtype: 'textarea', value: imagingFindings_timing_F9, setValue: setImagingFindings_timing_F9, options: [] },
    { question: 'Biopsy Date:', questionId: 'f-8_timing_F-9', questionType: questionType, inputtype: 'date', options: [], value: biopsyDate_timing_F9, setValue: setBiopsyDate_timing_F9, heading: "Biopsy" },
    { question: 'Biopsy Report:', questionId: 'f-9_timing_F-9', questionType: questionType, inputtype: 'text', options: [], value: biopsyReport_timing_F9, setValue: setBiopsyReport_timing_F9 },
    { question: 'Follow-Up Status Date:', questionId: 'f-10_timing_F-9', questionType: questionType, inputtype: 'date', options: [], value: statusDate_timing_F9, setValue: setStatusDate_timing_F9, heading: "Final Status" },
    { question: 'Follow-Up Status:', questionId: 'f-11_timing_F-9', questionType: questionType, inputtype: 'dropdown', options: ["Disease free", "Recurrence"], value: followUpStatus_timing_F9, setValue: setFollowUpStatus_timing_F9 },
    { question: 'Site:', questionId: 'f-12_timing_F-9', questionType: questionType, inputtype: 'dropdown', options: ["Local", "Loco-regional", "LR+Distant", "Distant only"], value: site_timing_F9, setValue: setSite_timing_F9 },
    { question: 'Alive or Death:', questionId: 'f-13_timing_F-9', questionType: questionType, inputtype: 'dropdown', options: ["Alive", "Death"], value: aliveOrDeath_timing_F9, setValue: setAliveOrDeath_timing_F9 },
    { question: 'Cause of Death:', questionId: 'f-14_timing_F-9', questionType: questionType, inputtype: 'text', options: [], value: causeOfDeath_timing_F9, setValue: setCauseOfDeath_timing_F9 },
    { question: 'Date of Death:', questionId: 'f-15_timing_F-9', questionType: questionType, inputtype: 'date', options: [], value: dateOfDeath_timing_F9, setValue: setDateOfDeath_timing_F9 },
    { question: 'Place of Death:', questionId: 'f-16_timing_F-9', questionType: questionType, inputtype: 'dropdown', options: ["Hospital", "Home", "Other"], value: placeOfDeath_timing_F9, setValue: setPlaceOfDeath_timing_F9 }
];

const questionsTimingF12 = [
    { question: 'Date of follow up assessment:', questionId: 'f-1_timing_F-12', questionType: questionType, inputtype: 'date', options: [], value: followUpDate_timing_F12, setValue: setFollowUpDate_timing_F12, heading: "Follow-Up Assessment Information" },
    { question: 'Follow-Up Number:', questionId: 'f-2_timing_F-12', questionType: questionType, inputtype: 'text', options: [], value: followUpNumber_timing_F12, setValue: setFollowUpNumber_timing_F12 },
    { question: 'Clinical Examination Date:', questionId: 'f-3_timing_F-12', questionType: questionType, inputtype: 'date', options: [], value: f3_timing_F12, setValue: setF3_timing_F12, heading: "Clinical Examination" },
    { question: 'Clinical Examination Findings:', questionId: 'f-4_timing_F-12', questionType: questionType, inputtype: 'text', options: [], value: f4_timing_F12, setValue: setF4_timing_F12 },
    { question: 'Date of Imaging:', questionId: 'f-5_timing_F-12', questionType: questionType, inputtype: 'date', options: [], value: dateOfImaging_timing_F12, setValue: setDateOfImaging_timing_F12, heading: "Imaging" },
    { question: 'Imaging type (USG/ CT/ MRI/ PET CT):', questionId: 'f-6_timing_F-12', questionType: questionType, inputtype: 'dropdown', value: imagingType_timing_F12, setValue: setImagingType_timing_F12, options: ["USG", "CT", "MRI", "PET CT"] },
    { question: 'Imaging Findings:', questionId: 'f-7_timing_F-12', questionType: questionType, inputtype: 'textarea', value: imagingFindings_timing_F12, setValue: setImagingFindings_timing_F12, options: [] },
    { question: 'Biopsy Date:', questionId: 'f-8_timing_F-12', questionType: questionType, inputtype: 'date', options: [], value: biopsyDate_timing_F12, setValue: setBiopsyDate_timing_F12, heading: "Biopsy" },
    { question: 'Biopsy Report:', questionId: 'f-9_timing_F-12', questionType: questionType, inputtype: 'text', options: [], value: biopsyReport_timing_F12, setValue: setBiopsyReport_timing_F12 },
    { question: 'Follow-Up Status Date:', questionId: 'f-10_timing_F-12', questionType: questionType, inputtype: 'date', options: [], value: statusDate_timing_F12, setValue: setStatusDate_timing_F12, heading: "Final Status" },
    { question: 'Follow-Up Status:', questionId: 'f-11_timing_F-12', questionType: questionType, inputtype: 'dropdown', options: ["Disease free", "Recurrence"], value: followUpStatus_timing_F12, setValue: setFollowUpStatus_timing_F12 },
    { question: 'Site:', questionId: 'f-12_timing_F-12', questionType: questionType, inputtype: 'dropdown', options: ["Local", "Loco-regional", "LR+Distant", "Distant only"], value: site_timing_F12, setValue: setSite_timing_F12 },
    { question: 'Alive or Death:', questionId: 'f-13_timing_F-12', questionType: questionType, inputtype: 'dropdown', options: ["Alive", "Death"], value: aliveOrDeath_timing_F12, setValue: setAliveOrDeath_timing_F12 },
    { question: 'Cause of Death:', questionId: 'f-14_timing_F-12', questionType: questionType, inputtype: 'text', options: [], value: causeOfDeath_timing_F12, setValue: setCauseOfDeath_timing_F12 },
    { question: 'Date of Death:', questionId: 'f-15_timing_F-12', questionType: questionType, inputtype: 'date', options: [], value: dateOfDeath_timing_F12, setValue: setDateOfDeath_timing_F12 },
    { question: 'Place of Death:', questionId: 'f-16_timing_F-12', questionType: questionType, inputtype: 'dropdown', options: ["Hospital", "Home", "Other"], value: placeOfDeath_timing_F12, setValue: setPlaceOfDeath_timing_F12 }
];

const questionsTimingF18 = [
    { question: 'Date of follow up assessment:', questionId: 'f-1_timing_F-18', questionType: questionType, inputtype: 'date', options: [], value: followUpDate_timing_F18, setValue: setFollowUpDate_timing_F18, heading: "Follow-Up Assessment Information" },
    { question: 'Follow-Up Number:', questionId: 'f-2_timing_F-18', questionType: questionType, inputtype: 'text', options: [], value: followUpNumber_timing_F18, setValue: setFollowUpNumber_timing_F18 },
    { question: 'Clinical Examination Date:', questionId: 'f-3_timing_F-18', questionType: questionType, inputtype: 'date', options: [], value: f3_timing_F18, setValue: setF3_timing_F18, heading: "Clinical Examination" },
    { question: 'Clinical Examination Findings:', questionId: 'f-4_timing_F-18', questionType: questionType, inputtype: 'text', options: [], value: f4_timing_F18, setValue: setF4_timing_F18 },
    { question: 'Date of Imaging:', questionId: 'f-5_timing_F-18', questionType: questionType, inputtype: 'date', options: [], value: dateOfImaging_timing_F18, setValue: setDateOfImaging_timing_F18, heading: "Imaging" },
    { question: 'Imaging type (USG/ CT/ MRI/ PET CT):', questionId: 'f-6_timing_F-18', questionType: questionType, inputtype: 'dropdown', value: imagingType_timing_F18, setValue: setImagingType_timing_F18, options: ["USG", "CT", "MRI", "PET CT"] },
    { question: 'Imaging Findings:', questionId: 'f-7_timing_F-18', questionType: questionType, inputtype: 'textarea', value: imagingFindings_timing_F18, setValue: setImagingFindings_timing_F18, options: [] },
    { question: 'Biopsy Date:', questionId: 'f-8_timing_F-18', questionType: questionType, inputtype: 'date', options: [], value: biopsyDate_timing_F18, setValue: setBiopsyDate_timing_F18, heading: "Biopsy" },
    { question: 'Biopsy Report:', questionId: 'f-9_timing_F-18', questionType: questionType, inputtype: 'text', options: [], value: biopsyReport_timing_F18, setValue: setBiopsyReport_timing_F18 },
    { question: 'Follow-Up Status Date:', questionId: 'f-10_timing_F-18', questionType: questionType, inputtype: 'date', options: [], value: statusDate_timing_F18, setValue: setStatusDate_timing_F18, heading: "Final Status" },
    { question: 'Follow-Up Status:', questionId: 'f-11_timing_F-18', questionType: questionType, inputtype: 'dropdown', options: ["Disease free", "Recurrence"], value: followUpStatus_timing_F18, setValue: setFollowUpStatus_timing_F18 },
    { question: 'Site:', questionId: 'f-12_timing_F-18', questionType: questionType, inputtype: 'dropdown', options: ["Local", "Loco-regional", "LR+Distant", "Distant only"], value: site_timing_F18, setValue: setSite_timing_F18 },
    { question: 'Alive or Death:', questionId: 'f-13_timing_F-18', questionType: questionType, inputtype: 'dropdown', options: ["Alive", "Death"], value: aliveOrDeath_timing_F18, setValue: setAliveOrDeath_timing_F18 },
    { question: 'Cause of Death:', questionId: 'f-14_timing_F-18', questionType: questionType, inputtype: 'text', options: [], value: causeOfDeath_timing_F18, setValue: setCauseOfDeath_timing_F18 },
    { question: 'Date of Death:', questionId: 'f-15_timing_F-18', questionType: questionType, inputtype: 'date', options: [], value: dateOfDeath_timing_F18, setValue: setDateOfDeath_timing_F18 },
    { question: 'Place of Death:', questionId: 'f-16_timing_F-18', questionType: questionType, inputtype: 'dropdown', options: ["Hospital", "Home", "Other"], value: placeOfDeath_timing_F18, setValue: setPlaceOfDeath_timing_F18 }
];

const questionsTimingF24 = [
    { question: 'Date of follow up assessment:', questionId: 'f-1_timing_F-24', questionType: questionType, inputtype: 'date', options: [], value: followUpDate_timing_F24, setValue: setFollowUpDate_timing_F24, heading: "Follow-Up Assessment Information" },
    { question: 'Follow-Up Number:', questionId: 'f-2_timing_F-24', questionType: questionType, inputtype: 'text', options: [], value: followUpNumber_timing_F24, setValue: setFollowUpNumber_timing_F24 },
    { question: 'Clinical Examination Date:', questionId: 'f-3_timing_F-24', questionType: questionType, inputtype: 'date', options: [], value: f3_timing_F24, setValue: setF3_timing_F24, heading: "Clinical Examination" },
    { question: 'Clinical Examination Findings:', questionId: 'f-4_timing_F-24', questionType: questionType, inputtype: 'text', options: [], value: f4_timing_F24, setValue: setF4_timing_F24 },
    { question: 'Date of Imaging:', questionId: 'f-5_timing_F-24', questionType: questionType, inputtype: 'date', options: [], value: dateOfImaging_timing_F24, setValue: setDateOfImaging_timing_F24, heading: "Imaging" },
    { question: 'Imaging type (USG/ CT/ MRI/ PET CT):', questionId: 'f-6_timing_F-24', questionType: questionType, inputtype: 'dropdown', value: imagingType_timing_F24, setValue: setImagingType_timing_F24, options: ["USG", "CT", "MRI", "PET CT"] },
    { question: 'Imaging Findings:', questionId: 'f-7_timing_F-24', questionType: questionType, inputtype: 'textarea', value: imagingFindings_timing_F24, setValue: setImagingFindings_timing_F24, options: [] },
    { question: 'Biopsy Date:', questionId: 'f-8_timing_F-24', questionType: questionType, inputtype: 'date', options: [], value: biopsyDate_timing_F24, setValue: setBiopsyDate_timing_F24, heading: "Biopsy" },
    { question: 'Biopsy Report:', questionId: 'f-9_timing_F-24', questionType: questionType, inputtype: 'text', options: [], value: biopsyReport_timing_F24, setValue: setBiopsyReport_timing_F24 },
    { question: 'Follow-Up Status Date:', questionId: 'f-10_timing_F-24', questionType: questionType, inputtype: 'date', options: [], value: statusDate_timing_F24, setValue: setStatusDate_timing_F24, heading: "Final Status" },
    { question: 'Follow-Up Status:', questionId: 'f-11_timing_F-24', questionType: questionType, inputtype: 'dropdown', options: ["Disease free", "Recurrence"], value: followUpStatus_timing_F24, setValue: setFollowUpStatus_timing_F24 },
    { question: 'Site:', questionId: 'f-12_timing_F-24', questionType: questionType, inputtype: 'dropdown', options: ["Local", "Loco-regional", "LR+Distant", "Distant only"], value: site_timing_F24, setValue: setSite_timing_F24 },
    { question: 'Alive or Death:', questionId: 'f-13_timing_F-24', questionType: questionType, inputtype: 'dropdown', options: ["Alive", "Death"], value: aliveOrDeath_timing_F24, setValue: setAliveOrDeath_timing_F24 },
    { question: 'Cause of Death:', questionId: 'f-14_timing_F-24', questionType: questionType, inputtype: 'text', options: [], value: causeOfDeath_timing_F24, setValue: setCauseOfDeath_timing_F24 },
    { question: 'Date of Death:', questionId: 'f-15_timing_F-24', questionType: questionType, inputtype: 'date', options: [], value: dateOfDeath_timing_F24, setValue: setDateOfDeath_timing_F24 },
    { question: 'Place of Death:', questionId: 'f-16_timing_F-24', questionType: questionType, inputtype: 'dropdown', options: ["Hospital", "Home", "Other"], value: placeOfDeath_timing_F24, setValue: setPlaceOfDeath_timing_F24 }
];


const questionsTimingF30 = [
    { question: 'Date of follow up assessment:', questionId: 'f-1_timing_F-30', questionType: questionType, inputtype: 'date', options: [], value: followUpDate_timing_F30, setValue: setFollowUpDate_timing_F30, heading: "Follow-Up Assessment Information" },
    { question: 'Follow-Up Number:', questionId: 'f-2_timing_F-30', questionType: questionType, inputtype: 'text', options: [], value: followUpNumber_timing_F30, setValue: setFollowUpNumber_timing_F30 },
    { question: 'Clinical Examination Date:', questionId: 'f-3_timing_F-30', questionType: questionType, inputtype: 'date', options: [], value: f3_timing_F30, setValue: setF3_timing_F30, heading: "Clinical Examination" },
    { question: 'Clinical Examination Findings:', questionId: 'f-4_timing_F-30', questionType: questionType, inputtype: 'text', options: [], value: f4_timing_F30, setValue: setF4_timing_F30 },
    { question: 'Date of Imaging:', questionId: 'f-5_timing_F-30', questionType: questionType, inputtype: 'date', options: [], value: dateOfImaging_timing_F30, setValue: setDateOfImaging_timing_F30, heading: "Imaging" },
    { question: 'Imaging type (USG/ CT/ MRI/ PET CT):', questionId: 'f-6_timing_F-30', questionType: questionType, inputtype: 'dropdown', value: imagingType_timing_F30, setValue: setImagingType_timing_F30, options: ["USG", "CT", "MRI", "PET CT"] },
    { question: 'Imaging Findings:', questionId: 'f-7_timing_F-30', questionType: questionType, inputtype: 'textarea', value: imagingFindings_timing_F30, setValue: setImagingFindings_timing_F30, options: [] },
    { question: 'Biopsy Date:', questionId: 'f-8_timing_F-30', questionType: questionType, inputtype: 'date', options: [], value: biopsyDate_timing_F30, setValue: setBiopsyDate_timing_F30, heading: "Biopsy" },
    { question: 'Biopsy Report:', questionId: 'f-9_timing_F-30', questionType: questionType, inputtype: 'text', options: [], value: biopsyReport_timing_F30, setValue: setBiopsyReport_timing_F30 },
    { question: 'Follow-Up Status Date:', questionId: 'f-10_timing_F-30', questionType: questionType, inputtype: 'date', options: [], value: statusDate_timing_F30, setValue: setStatusDate_timing_F30, heading: "Final Status" },
    { question: 'Follow-Up Status:', questionId: 'f-11_timing_F-30', questionType: questionType, inputtype: 'dropdown', options: ["Disease free", "Recurrence"], value: followUpStatus_timing_F30, setValue: setFollowUpStatus_timing_F30 },
    { question: 'Site:', questionId: 'f-12_timing_F-30', questionType: questionType, inputtype: 'dropdown', options: ["Local", "Loco-regional", "LR+Distant", "Distant only"], value: site_timing_F30, setValue: setSite_timing_F30 },
    { question: 'Alive or Death:', questionId: 'f-13_timing_F-30', questionType: questionType, inputtype: 'dropdown', options: ["Alive", "Death"], value: aliveOrDeath_timing_F30, setValue: setAliveOrDeath_timing_F30 },
    { question: 'Cause of Death:', questionId: 'f-14_timing_F-30', questionType: questionType, inputtype: 'text', options: [], value: causeOfDeath_timing_F30, setValue: setCauseOfDeath_timing_F30 },
    { question: 'Date of Death:', questionId: 'f-15_timing_F-30', questionType: questionType, inputtype: 'date', options: [], value: dateOfDeath_timing_F30, setValue: setDateOfDeath_timing_F30 },
    { question: 'Place of Death:', questionId: 'f-16_timing_F-30', questionType: questionType, inputtype: 'dropdown', options: ["Hospital", "Home", "Other"], value: placeOfDeath_timing_F30, setValue: setPlaceOfDeath_timing_F30 }
];


const questionsTimingF36 = [
    { question: 'Date of follow up assessment:', questionId: 'f-1_timing_F-36', questionType: questionType, inputtype: 'date', options: [], value: followUpDate_timing_F36, setValue: setFollowUpDate_timing_F36, heading: "Follow-Up Assessment Information" },
    { question: 'Follow-Up Number:', questionId: 'f-2_timing_F-36', questionType: questionType, inputtype: 'text', options: [], value: followUpNumber_timing_F36, setValue: setFollowUpNumber_timing_F36 },
    { question: 'Clinical Examination Date:', questionId: 'f-3_timing_F-36', questionType: questionType, inputtype: 'date', options: [], value: f3_timing_F36, setValue: setF3_timing_F36, heading: "Clinical Examination" },
    { question: 'Clinical Examination Findings:', questionId: 'f-4_timing_F-36', questionType: questionType, inputtype: 'text', options: [], value: f4_timing_F36, setValue: setF4_timing_F36 },
    { question: 'Date of Imaging:', questionId: 'f-5_timing_F-36', questionType: questionType, inputtype: 'date', options: [], value: dateOfImaging_timing_F36, setValue: setDateOfImaging_timing_F36, heading: "Imaging" },
    { question: 'Imaging type (USG/ CT/ MRI/ PET CT):', questionId: 'f-6_timing_F-36', questionType: questionType, inputtype: 'dropdown', value: imagingType_timing_F36, setValue: setImagingType_timing_F36, options: ["USG", "CT", "MRI", "PET CT"] },
    { question: 'Imaging Findings:', questionId: 'f-7_timing_F-36', questionType: questionType, inputtype: 'textarea', value: imagingFindings_timing_F36, setValue: setImagingFindings_timing_F36, options: [] },
    { question: 'Biopsy Date:', questionId: 'f-8_timing_F-36', questionType: questionType, inputtype: 'date', options: [], value: biopsyDate_timing_F36, setValue: setBiopsyDate_timing_F36, heading: "Biopsy" },
    { question: 'Biopsy Report:', questionId: 'f-9_timing_F-36', questionType: questionType, inputtype: 'text', options: [], value: biopsyReport_timing_F36, setValue: setBiopsyReport_timing_F36 },
    { question: 'Follow-Up Status Date:', questionId: 'f-10_timing_F-36', questionType: questionType, inputtype: 'date', options: [], value: statusDate_timing_F36, setValue: setStatusDate_timing_F36, heading: "Final Status" },
    { question: 'Follow-Up Status:', questionId: 'f-11_timing_F-36', questionType: questionType, inputtype: 'dropdown', options: ["Disease free", "Recurrence"], value: followUpStatus_timing_F36, setValue: setFollowUpStatus_timing_F36 },
    { question: 'Site:', questionId: 'f-12_timing_F-36', questionType: questionType, inputtype: 'dropdown', options: ["Local", "Loco-regional", "LR+Distant", "Distant only"], value: site_timing_F36, setValue: setSite_timing_F36 },
    { question: 'Alive or Death:', questionId: 'f-13_timing_F-36', questionType: questionType, inputtype: 'dropdown', options: ["Alive", "Death"], value: aliveOrDeath_timing_F36, setValue: setAliveOrDeath_timing_F36 },
    { question: 'Cause of Death:', questionId: 'f-14_timing_F-36', questionType: questionType, inputtype: 'text', options: [], value: causeOfDeath_timing_F36, setValue: setCauseOfDeath_timing_F36 },
    { question: 'Date of Death:', questionId: 'f-15_timing_F-36', questionType: questionType, inputtype: 'date', options: [], value: dateOfDeath_timing_F36, setValue: setDateOfDeath_timing_F36 },
    { question: 'Place of Death:', questionId: 'f-16_timing_F-36', questionType: questionType, inputtype: 'dropdown', options: ["Hospital", "Home", "Other"], value: placeOfDeath_timing_F36, setValue: setPlaceOfDeath_timing_F36 }
];


const questionsTimingF48 = [
    { question: 'Date of follow up assessment:', questionId: 'f-1_timing_F-48', questionType: questionType, inputtype: 'date', options: [], value: followUpDate_timing_F48, setValue: setFollowUpDate_timing_F48, heading: "Follow-Up Assessment Information" },
    { question: 'Follow-Up Number:', questionId: 'f-2_timing_F-48', questionType: questionType, inputtype: 'text', options: [], value: followUpNumber_timing_F48, setValue: setFollowUpNumber_timing_F48 },
    { question: 'Clinical Examination Date:', questionId: 'f-3_timing_F-48', questionType: questionType, inputtype: 'date', options: [], value: f3_timing_F48, setValue: setF3_timing_F48, heading: "Clinical Examination" },
    { question: 'Clinical Examination Findings:', questionId: 'f-4_timing_F-48', questionType: questionType, inputtype: 'text', options: [], value: f4_timing_F48, setValue: setF4_timing_F48 },
    { question: 'Date of Imaging:', questionId: 'f-5_timing_F-48', questionType: questionType, inputtype: 'date', options: [], value: dateOfImaging_timing_F48, setValue: setDateOfImaging_timing_F48, heading: "Imaging" },
    { question: 'Imaging type (USG/ CT/ MRI/ PET CT):', questionId: 'f-6_timing_F-48', questionType: questionType, inputtype: 'dropdown', value: imagingType_timing_F48, setValue: setImagingType_timing_F48, options: ["USG", "CT", "MRI", "PET CT"] },
    { question: 'Imaging Findings:', questionId: 'f-7_timing_F-48', questionType: questionType, inputtype: 'textarea', value: imagingFindings_timing_F48, setValue: setImagingFindings_timing_F48, options: [] },
    { question: 'Biopsy Date:', questionId: 'f-8_timing_F-48', questionType: questionType, inputtype: 'date', options: [], value: biopsyDate_timing_F48, setValue: setBiopsyDate_timing_F48, heading: "Biopsy" },
    { question: 'Biopsy Report:', questionId: 'f-9_timing_F-48', questionType: questionType, inputtype: 'text', options: [], value: biopsyReport_timing_F48, setValue: setBiopsyReport_timing_F48 },
    { question: 'Follow-Up Status Date:', questionId: 'f-10_timing_F-48', questionType: questionType, inputtype: 'date', options: [], value: statusDate_timing_F48, setValue: setStatusDate_timing_F48, heading: "Final Status" },
    { question: 'Follow-Up Status:', questionId: 'f-11_timing_F-48', questionType: questionType, inputtype: 'dropdown', options: ["Disease free", "Recurrence"], value: followUpStatus_timing_F48, setValue: setFollowUpStatus_timing_F48 },
    { question: 'Site:', questionId: 'f-12_timing_F-48', questionType: questionType, inputtype: 'dropdown', options: ["Local", "Loco-regional", "LR+Distant", "Distant only"], value: site_timing_F48, setValue: setSite_timing_F48 },
    { question: 'Alive or Death:', questionId: 'f-13_timing_F-48', questionType: questionType, inputtype: 'dropdown', options: ["Alive", "Death"], value: aliveOrDeath_timing_F48, setValue: setAliveOrDeath_timing_F48 },
    { question: 'Cause of Death:', questionId: 'f-14_timing_F-48', questionType: questionType, inputtype: 'text', options: [], value: causeOfDeath_timing_F48, setValue: setCauseOfDeath_timing_F48 },
    { question: 'Date of Death:', questionId: 'f-15_timing_F-48', questionType: questionType, inputtype: 'date', options: [], value: dateOfDeath_timing_F48, setValue: setDateOfDeath_timing_F48 },
    { question: 'Place of Death:', questionId: 'f-16_timing_F-48', questionType: questionType, inputtype: 'dropdown', options: ["Hospital", "Home", "Other"], value: placeOfDeath_timing_F48, setValue: setPlaceOfDeath_timing_F48 }
];


const questionsTimingF60 = [
    { question: 'Date of follow up assessment:', questionId: 'f-1_timing_F-60', questionType: questionType, inputtype: 'date', options: [], value: followUpDate_timing_F60, setValue: setFollowUpDate_timing_F60, heading: "Follow-Up Assessment Information" },
    { question: 'Follow-Up Number:', questionId: 'f-2_timing_F-60', questionType: questionType, inputtype: 'text', options: [], value: followUpNumber_timing_F60, setValue: setFollowUpNumber_timing_F60 },
    { question: 'Clinical Examination Date:', questionId: 'f-3_timing_F-60', questionType: questionType, inputtype: 'date', options: [], value: f3_timing_F60, setValue: setF3_timing_F60, heading: "Clinical Examination" },
    { question: 'Clinical Examination Findings:', questionId: 'f-4_timing_F-60', questionType: questionType, inputtype: 'text', options: [], value: f4_timing_F60, setValue: setF4_timing_F60 },
    { question: 'Date of Imaging:', questionId: 'f-5_timing_F-60', questionType: questionType, inputtype: 'date', options: [], value: dateOfImaging_timing_F60, setValue: setDateOfImaging_timing_F60, heading: "Imaging" },
    { question: 'Imaging type (USG/ CT/ MRI/ PET CT):', questionId: 'f-6_timing_F-60', questionType: questionType, inputtype: 'dropdown', value: imagingType_timing_F60, setValue: setImagingType_timing_F60, options: ["USG", "CT", "MRI", "PET CT"] },
    { question: 'Imaging Findings:', questionId: 'f-7_timing_F-60', questionType: questionType, inputtype: 'textarea', value: imagingFindings_timing_F60, setValue: setImagingFindings_timing_F60, options: [] },
    { question: 'Biopsy Date:', questionId: 'f-8_timing_F-60', questionType: questionType, inputtype: 'date', options: [], value: biopsyDate_timing_F60, setValue: setBiopsyDate_timing_F60, heading: "Biopsy" },
    { question: 'Biopsy Report:', questionId: 'f-9_timing_F-60', questionType: questionType, inputtype: 'text', options: [], value: biopsyReport_timing_F60, setValue: setBiopsyReport_timing_F60 },
    { question: 'Follow-Up Status Date:', questionId: 'f-10_timing_F-60', questionType: questionType, inputtype: 'date', options: [], value: statusDate_timing_F60, setValue: setStatusDate_timing_F60, heading: "Final Status" },
    { question: 'Follow-Up Status:', questionId: 'f-11_timing_F-60', questionType: questionType, inputtype: 'dropdown', options: ["Disease free", "Recurrence"], value: followUpStatus_timing_F60, setValue: setFollowUpStatus_timing_F60 },
    { question: 'Site:', questionId: 'f-12_timing_F-60', questionType: questionType, inputtype: 'dropdown', options: ["Local", "Loco-regional", "LR+Distant", "Distant only"], value: site_timing_F60, setValue: setSite_timing_F60 },
    { question: 'Alive or Death:', questionId: 'f-13_timing_F-60', questionType: questionType, inputtype: 'dropdown', options: ["Alive", "Death"], value: aliveOrDeath_timing_F60, setValue: setAliveOrDeath_timing_F60 },
    { question: 'Cause of Death:', questionId: 'f-14_timing_F-60', questionType: questionType, inputtype: 'text', options: [], value: causeOfDeath_timing_F60, setValue: setCauseOfDeath_timing_F60 },
    { question: 'Date of Death:', questionId: 'f-15_timing_F-60', questionType: questionType, inputtype: 'date', options: [], value: dateOfDeath_timing_F60, setValue: setDateOfDeath_timing_F60 },
    { question: 'Place of Death:', questionId: 'f-16_timing_F-60', questionType: questionType, inputtype: 'dropdown', options: ["Hospital", "Home", "Other"], value: placeOfDeath_timing_F60, setValue: setPlaceOfDeath_timing_F60 }
];

const questionsTimingF72 = [
    { question: 'Date of follow up assessment:', questionId: 'f-1_timing_F-72', questionType: questionType, inputtype: 'date', options: [], value: followUpDate_timing_F72, setValue: setFollowUpDate_timing_F72, heading: "Follow-Up Assessment Information" },
    { question: 'Follow-Up Number:', questionId: 'f-2_timing_F-72', questionType: questionType, inputtype: 'text', options: [], value: followUpNumber_timing_F72, setValue: setFollowUpNumber_timing_F72 },
    { question: 'Clinical Examination Date:', questionId: 'f-3_timing_F-72', questionType: questionType, inputtype: 'date', options: [], value: f3_timing_F72, setValue: setF3_timing_F72, heading: "Clinical Examination" },
    { question: 'Clinical Examination Findings:', questionId: 'f-4_timing_F-72', questionType: questionType, inputtype: 'text', options: [], value: f4_timing_F72, setValue: setF4_timing_F72 },
    { question: 'Date of Imaging:', questionId: 'f-5_timing_F-72', questionType: questionType, inputtype: 'date', options: [], value: dateOfImaging_timing_F72, setValue: setDateOfImaging_timing_F72, heading: "Imaging" },
    { question: 'Imaging type (USG/ CT/ MRI/ PET CT):', questionId: 'f-6_timing_F-72', questionType: questionType, inputtype: 'dropdown', value: imagingType_timing_F72, setValue: setImagingType_timing_F72, options: ["USG", "CT", "MRI", "PET CT"] },
    { question: 'Imaging Findings:', questionId: 'f-7_timing_F-72', questionType: questionType, inputtype: 'textarea', value: imagingFindings_timing_F72, setValue: setImagingFindings_timing_F72, options: [] },
    { question: 'Biopsy Date:', questionId: 'f-8_timing_F-72', questionType: questionType, inputtype: 'date', options: [], value: biopsyDate_timing_F72, setValue: setBiopsyDate_timing_F72, heading: "Biopsy" },
    { question: 'Biopsy Report:', questionId: 'f-9_timing_F-72', questionType: questionType, inputtype: 'text', options: [], value: biopsyReport_timing_F72, setValue: setBiopsyReport_timing_F72 },
    { question: 'Follow-Up Status Date:', questionId: 'f-10_timing_F-72', questionType: questionType, inputtype: 'date', options: [], value: statusDate_timing_F72, setValue: setStatusDate_timing_F72, heading: "Final Status" },
    { question: 'Follow-Up Status:', questionId: 'f-11_timing_F-72', questionType: questionType, inputtype: 'dropdown', options: ["Disease free", "Recurrence"], value: followUpStatus_timing_F72, setValue: setFollowUpStatus_timing_F72 },
    { question: 'Site:', questionId: 'f-12_timing_F-72', questionType: questionType, inputtype: 'dropdown', options: ["Local", "Loco-regional", "LR+Distant", "Distant only"], value: site_timing_F72, setValue: setSite_timing_F72 },
    { question: 'Alive or Death:', questionId: 'f-13_timing_F-72', questionType: questionType, inputtype: 'dropdown', options: ["Alive", "Death"], value: aliveOrDeath_timing_F72, setValue: setAliveOrDeath_timing_F72 },
    { question: 'Cause of Death:', questionId: 'f-14_timing_F-72', questionType: questionType, inputtype: 'text', options: [], value: causeOfDeath_timing_F72, setValue: setCauseOfDeath_timing_F72 },
    { question: 'Date of Death:', questionId: 'f-15_timing_F-72', questionType: questionType, inputtype: 'date', options: [], value: dateOfDeath_timing_F72, setValue: setDateOfDeath_timing_F72 },
    { question: 'Place of Death:', questionId: 'f-16_timing_F-72', questionType: questionType, inputtype: 'dropdown', options: ["Hospital", "Home", "Other"], value: placeOfDeath_timing_F72, setValue: setPlaceOfDeath_timing_F72 }
];
























    useEffect(() => {

        const fetchalldata = async () => {
            let updateArray: { questionId: string; updates: any; }[] = []

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
                            const questionsArray = [questionsTimingB , questionsTimingPS , questionsTimingF0 ,questionsTimingF3 , questionsTimingF6, questionsTimingF9 , questionsTimingF12 , questionsTimingF18 , questionsTimingF24 , questionsTimingF30 , questionsTimingF36 , questionsTimingF48 , questionsTimingF60 , questionsTimingF72]
                            questionsArray.forEach((question_list) => {
                                question_list.map((question) => {
                                    const requiredquestionid = question.questionId;
                                    const questionvalue = questiondata.find((this_question: { questionId: string; }) => this_question.questionId === requiredquestionid)?.answer;
                                    const questionupdates = questiondata.find((this_question: { questionId: string; }) => this_question.questionId === requiredquestionid)?.updates;

                                    questionvalue !== undefined && question.setValue(questionvalue)
                                    questionupdates !== undefined && updateArray.push({
                                        questionId: question.questionId,
                                        updates: questionupdates
                                    })
                                })
                            })

                            setUpdates(updateArray);


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


    const handleSubmitB = () => {
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
                        questions: questionsTimingB,
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

    const handleSubmitPS = () => {
        if (



            //   questions2.some((question) => question.value === "")
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
                        questions: questionsTimingPS,
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

    const handleSubmitF0 = () => {
        if (
            // questions3.some((question) => question.value === '')
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
                        questions: questionsTimingF0,
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


    const handleSubmitF3 = () => {
        if (
            // questions4.some((question) => question.value === '')
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
                        questions: questionsTimingF3,
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

    const handleSubmitF6 = () => {
        if (
            // questions5.some((question) => question.value === '')
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
                        questions: questionsTimingF6,
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



    const handleSubmitF9 = () => {
        if (
            // questions5.some((question) => question.value === '')
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
                        questions: questionsTimingF9,
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



    const handleSubmitF12 = () => {
        if (
            // questions5.some((question) => question.value === '')
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
                        questions: questionsTimingF12,
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


    const handleSubmitF18 = () => {
        if (
            // questions5.some((question) => question.value === '')
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
                        questions: questionsTimingF18,
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
                            setTabValue("section9")

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

    
    const handleSubmitF24 = () => {
        if (
            // questions5.some((question) => question.value === '')
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
                        questions: questionsTimingF24,
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
                            setTabValue("section10")

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


    const handleSubmitF30 = () => {
        if (
            // questions5.some((question) => question.value === '')
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
                        questions: questionsTimingF30,
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
                            setTabValue("section11")

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



    const handleSubmitF36 = () => {
        if (
            // questions5.some((question) => question.value === '')
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
                        questions: questionsTimingF36,
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
                            setTabValue("section12")

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



    const handleSubmitF48 = () => {
        if (
            // questions5.some((question) => question.value === '')
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
                        questions: questionsTimingF48,
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

                            setTabValue("section13")

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

    const handleSubmitF60 = () => {
        if (
            // questions5.some((question) => question.value === '')
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
                        questions: questionsTimingF60,
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


                            setTabValue("section14")

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




    const handleSubmitF72 = () => {
        if (
            // questions5.some((question) => question.value === '')
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
                        questions: questionsTimingF72,
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







    if (dataloading) {
        return <div className="flex items-center justify-center h-screen w-full text-3xl font-bold text-green-5 ">
            <div className="w-[70px] h-[70px] border border-4 border-t-0 border-green-700 rounded-full animate-spin">
            </div>
        </div>;
    }

    return (
        <div className='w-full h-screen '>




            {tabValue === "section1" ? <CustomForm questions={questionsTimingB} handleSubmit={handleSubmitB} buttontitle="Submit & Next" formtitle={formTitle} loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} updates={updates} /> : <></>}
            {tabValue === "section2" ? <CustomForm questions={questionsTimingPS} handleSubmit={handleSubmitPS} buttontitle="Submit & Next" formtitle={formTitle} loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} updates={updates} /> : <></>}
            {tabValue === "section3" ? <CustomForm questions={questionsTimingF0} handleSubmit={handleSubmitF0} buttontitle="Submit & Next" formtitle={formTitle} loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} updates={updates} /> : <></>}
            {tabValue === "section4" ? <CustomForm questions={questionsTimingF3} handleSubmit={handleSubmitF3} buttontitle="Submit & Next" formtitle={formTitle} loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} updates={updates} /> : <></>}
            {tabValue === "section5" ? <CustomForm questions={questionsTimingF6} handleSubmit={handleSubmitF6} buttontitle="Submit & Next" formtitle={formTitle} loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} updates={updates} /> : <></>}
            {tabValue === "section6" ? <CustomForm questions={questionsTimingF9} handleSubmit={handleSubmitF9} buttontitle="Submit & Next" formtitle={formTitle} loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} updates={updates} /> : <></>}
            {tabValue === "section7" ? <CustomForm questions={questionsTimingF12} handleSubmit={handleSubmitF12} buttontitle="Submit & Next" formtitle={formTitle} loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} updates={updates} /> : <></>}
            {tabValue === "section8" ? <CustomForm questions={questionsTimingF18} handleSubmit={handleSubmitF18} buttontitle="Submit & Next" formtitle={formTitle} loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} updates={updates} /> : <></>}
            {tabValue === "section9" ? <CustomForm questions={questionsTimingF24} handleSubmit={handleSubmitF24} buttontitle="Submit & Next" formtitle={formTitle} loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} updates={updates} /> : <></>}
            {tabValue === "section10" ? <CustomForm questions={questionsTimingF30} handleSubmit={handleSubmitF30} buttontitle="Submit & Next" formtitle={formTitle} loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} updates={updates} /> : <></>}
            {tabValue === "section11" ? <CustomForm questions={questionsTimingF36} handleSubmit={handleSubmitF36} buttontitle="Submit & Next" formtitle={formTitle} loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} updates={updates} /> : <></>}
            {tabValue === "section12" ? <CustomForm questions={questionsTimingF48} handleSubmit={handleSubmitF48} buttontitle="Submit & Next" formtitle={formTitle} loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} updates={updates} /> : <></>}
            {tabValue === "section13" ? <CustomForm questions={questionsTimingF60} handleSubmit={handleSubmitF60} buttontitle="Submit & Next" formtitle={formTitle} loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} updates={updates} /> : <></>}
            {tabValue === "section14" ? <CustomForm questions={questionsTimingF72} handleSubmit={handleSubmitF72} buttontitle="Submit & Next" formtitle={formTitle} loading={loading} tabs={<CustomTabs tabValue={tabValue} setTabValue={setTabValue} />} updates={updates} /> : <></>}

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
                    <TabsTrigger className='active:bg-green-5' value="section1">1</TabsTrigger>
                    <TabsTrigger value="section2">2</TabsTrigger>
                    <TabsTrigger value="section3">3</TabsTrigger>
                    <TabsTrigger value="section4">4</TabsTrigger>
                    <TabsTrigger value="section5">5</TabsTrigger>
                    <TabsTrigger value="section6">6</TabsTrigger>
                    <TabsTrigger value="section7">7</TabsTrigger>
                    <TabsTrigger value="section8">8</TabsTrigger>
                    <TabsTrigger value="section9">9</TabsTrigger>
                    <TabsTrigger value="section10">10</TabsTrigger>
                    <TabsTrigger value="section11">11</TabsTrigger>
                    <TabsTrigger value="section12">12</TabsTrigger>
                    <TabsTrigger value="section13">13</TabsTrigger>
                    <TabsTrigger value="section14">14</TabsTrigger>




                </TabsList>
            </Tabs>
            <HeadDrop
                dataArray={[
                    { id: "section1", title: "Timing B" },
                    { id: "section2", title: "Timing PS" },
                    { id: "section3", title: "Timing F0" },
                    { id: "section4", title: "Timing F3" },
                    { id: "section5", title: "Timing F6" },
                    { id: "section6", title: "Timing F9" },
                    { id: "section7", title: "Timing F12" },
                    { id: "section8", title: "Timing F18" },
                    { id: "section9", title: "Timing F24" },
                    { id: "section10", title: "Timing F30" },
                    { id: "section11", title: "Timing F36" },
                    { id: "section12", title: "Timing F48" },
                    { id: "section13", title: "Timing F60" },
                    { id: "section14", title: "Timing F72" },






                ]}
                id={tabValue}
                setId={setTabValue}

            />
        </div>
    );
};

export default Followupreport
