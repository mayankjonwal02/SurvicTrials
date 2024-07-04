import { NextRequest as req , NextResponse as res } from "next/server";
import { connectMongo } from "@/lib/mongoconnection";
import User from "@/models/user";


export async function POST(request: req) {
    await connectMongo();
    
    try {

        const allusers  = await User.find();
        return res.json({ message: "User fetched successfully" ,data : allusers , executed : true});
        
    } catch (error) {

        return res.json({ message: "Error creating user" ,data : error , executed : false});
        
    }
}