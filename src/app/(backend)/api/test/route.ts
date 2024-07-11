import { NextRequest as req, NextResponse as res } from "next/server";


export async function POST() {
    return res.json({
        message:"Hello request accepted from test route",
        name:"Mayank Jonwal",

    })
}