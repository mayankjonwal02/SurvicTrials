import { NextRequest as req, NextResponse as res } from "next/server";
import Patient from "@/models/patient";
import { connectMongo } from "@/lib/mongoconnection";




export async function POST(request: req) {
    
    try {
        await connectMongo();
        const patient = await Patient.find();
        return res.json({ message: "Patients fetched successfully",data : patient  , executed : true });
    } catch (error) {
        if (error instanceof Error) {
            return res.json({ message: error.message, executed: false });
        } else {
            return res.json({ message: "An unknown error occurred", executed: false });
        }
    }
    
}