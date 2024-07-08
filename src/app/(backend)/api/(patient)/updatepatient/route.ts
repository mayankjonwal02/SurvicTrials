import { NextRequest as req, NextResponse as res } from "next/server";
import Patient from "@/models/patient";
import { connectMongo } from "@/lib/mongoconnection";



export async function POST(request: req ) {
    
    const { patient_trial_number, questions , submittedBy} = await request.json();
    try {
        await connectMongo();
        const patient = await Patient.findOne({ patient_trial_number });

        if (!patient) {
            return res.json({ message: "Patient not found", executed: false });
        }
        const date = Date.now();
        for (const questiondata of questions) {
            const { questionId, answer , question } = questiondata;
            const existingquestion = patient.data.find((data) => data.questionId === questionId);
            if (existingquestion) {
                existingquestion.answer = answer;
                existingquestion.updates.push({
                    updatedBy: submittedBy,
                    updatedOn: date,
                    answer: answer
                });
            } else {
                patient.data.push({
                    question: question,
                    answer: answer,
                    questionId: questionId,
                    updates: [
                        {
                            updatedBy: patient.submittedBy,
                            updatedOn: date,
                            answer: answer
                        }
                    ]
                });
            }
        }

        await patient.save();
        return res.json({ message: "Patient updated successfully", executed: true });

    } catch (error) {
        if (error instanceof Error) {
            return res.json({ message: error.message, executed: false });
        } else {
            return res.json({ message: "An unknown error occurred", executed: false });
        }
    }
    
}