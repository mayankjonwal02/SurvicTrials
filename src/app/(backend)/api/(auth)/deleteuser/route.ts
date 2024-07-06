import { NextRequest as req, NextResponse as res } from "next/server";
import { connectMongo } from "@/lib/mongoconnection";
import User from "@/models/user";




export async function POST(request: req) {
    await connectMongo();
    const { unique_id } = await request.json();
    try {
        const existinguser = await User.findOne({ unique_id });
        if (!existinguser) {
            return res.json({ message: "UserID not found" ,data : existinguser , executed : false,status : 404});
        }
        await User.deleteOne({ unique_id });
        return res.json({ message: "User deleted successfully" ,data : existinguser , executed : true,status : 200});
    } catch (error) {
        if (error instanceof Error) {
            return res.json({ message: "Error deleting user" ,data : error.message , executed : false});
        } else {
            return res.json({ message: "Error deleting user" ,data : error , executed : false});
        }
    }
}
