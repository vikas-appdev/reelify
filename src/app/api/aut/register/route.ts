import { connectToDatabase } from "@/lib/db";
import User from "@/models/User";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";


   

export async function POST(request: NextRequest){
    try {
        const {email, password} = await request.json();
        if(!email || !password){
            return NextResponse.json(
                {error: "Please fill all fields"},
                {status: 400}
            );
        }
        await connectToDatabase();
        const existingUser = await User.findOne({email});
        if(existingUser){
            return NextResponse.json(
                {error: "User already exists"},
                {status: 400}
            );
        }
        const user = await User.create({email, password});

        return NextResponse.json(
            { message: "User created successfully", user: user},
            //{user},
            {status: 201}
        );
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            {error: "Internal server error"},
            {status: 500}
        );
    }
}