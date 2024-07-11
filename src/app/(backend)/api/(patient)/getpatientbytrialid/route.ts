import { NextRequest as req, NextResponse as res } from "next/server";
import { connectMongo } from "@/lib/mongoconnection";
import Patient from "@/models/patient";


export async function POST(request: req) {
    const { trialid } = await request.json();

    try {
        await connectMongo();
        const patient = await Patient.findOne({ patient_trial_number: trialid });
        if(!patient)
            {
                return res.json({ message: "Patient not found", executed: false });
            }

        return res.json({ message: "Patient fetched successfully", data: patient, executed: true });
    } catch (error) {
        console.log(error);
        if (error instanceof Error) { 
            return res.json({ message: error.message, executed: false }); 
        }
            
        else { 
            return res.json({ message: "An unknown error occurred", executed: false }); 

        }
    }

}
