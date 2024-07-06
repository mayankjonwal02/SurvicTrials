import { NextRequest as req,NextResponse as res } from "next/server";
import User from "@/models/user";
import { connectMongo } from "@/lib/mongoconnection";

export async function POST(request: req) {
    await connectMongo();
    const { unique_id , password } = await request.json();
    try {
        const existinguser = await User.findOne({ unique_id });
        if (!existinguser) {
            return res.json({ message: "UserID not found" ,data : existinguser , executed : false});
        }
        if(existinguser.password !== password){
            return res.json({ message: "Password is incorrect" ,data : existinguser , executed : false});
        }
        return res.json({ message: "Login successful" ,data : existinguser , executed : true});
    } catch (error) {
        
        if (error instanceof Error) {
            return res.json({ message: error.message ,data : error.message , executed : false});
        } else {
            return res.json({ message: error ,data : error , executed : false});
        }
        
    }
}