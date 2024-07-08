import { NextRequest as req, NextResponse as res } from "next/server";
import Patient  from "@/models/patient";
import { connectMongo } from "@/lib/mongoconnection";


export async function POST(request: req) {
    try {
        await connectMongo();
        const {patient_trial_number,city,citycode,submittedBy,patientName,consentTakenBy,investigatorName,date} = await request.json();
        const existingPatient = await Patient.findOne({ patient_trial_number });
        if (existingPatient) {
            return res.json({ message: "Patient already exists" ,executed : false});
        }
       
        const newPatient = new Patient({
            patient_trial_number: patient_trial_number,
            city: city,
            citycode: citycode,
            submittedBy: submittedBy,
            createdon: date,
            updatedon: date,
            patientName: patientName,
            consentTakenBy: consentTakenBy,
            investigatorName: investigatorName,
            data: []
        });
        await newPatient.save();
        console.log(date)
        return res.json({ message: "Patient created successfully" ,executed : true});
    } catch (error) {
        if (error instanceof Error) {
            return res.json({ message: error.message, executed: false });
        } else {
            return res.json({ message: "An unknown error occurred", executed: false });
        }
    }
}