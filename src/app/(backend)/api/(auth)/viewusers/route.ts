import { NextRequest as req , NextResponse as res } from "next/server";
import { connectMongo } from "@/lib/mongoconnection";
import User from "@/models/user";


export async function POST(request: req) {
    await connectMongo();
    
    try {

        const allusers  = await User.find();
        return res.json({ message: "User fetched successfully" ,data : allusers , executed : true});
        
    } catch (error) {

        if (error instanceof Error) {
            return res.json({ message: "Error in fetching user" ,data : error.message , executed : false});
        } else {
            return res.json({ message: "Error in fetching user" ,data : error , executed : false});
        }
        
    }
}