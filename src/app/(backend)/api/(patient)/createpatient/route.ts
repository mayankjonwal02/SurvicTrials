import { NextRequest as req, NextResponse as res } from "next/server";
import Patient  from "@/models/patient";
import { exec } from "child_process";

export async function POST(request: req) {
    try {
        const {patient_trial_number,city,citycode,submittedBy} = await request.json();
        const existingPatient = await Patient.findOne({ patient_trial_number });
        if (existingPatient) {
            return res.json({ message: "Patient already exists" ,executed : false});
        }
        const date = Date.now();
        const newPatient = new Patient({
            patient_trial_number: patient_trial_number,
            city: city,
            citycode: citycode,
            submittedBy: submittedBy,
            createdon: date,
            updatedon: date,
            data: []
        });
        await newPatient.save();
        return res.json({ message: "Patient created successfully" ,executed : true});
    } catch (error) {
        return res.json({ message: error ,executed : false});
    }
}