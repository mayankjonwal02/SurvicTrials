import { NextRequest as req , NextResponse as res } from "next/server";
import { connectMongo } from "@/lib/mongoconnection";
import User from "@/models/user";


export async function POST(request: req) {
    await connectMongo();
    const { city ,citycode, unique_id , password } = await request.json();
    try {

        const existinguser = await User.findOne({ unique_id });

        if (existinguser) {
            return res.json({ message: "UserID already exists" ,data : existinguser , executed : false});
        }

        const user = new User({ city ,citycode, unique_id , password });
        await user.save();
        return res.json({ message: "User created successfully" ,data : user , executed : true});
        
    } catch (error) {

        return res.json({ message: "Error creating user" ,data : error , executed : false});
        
    }
}