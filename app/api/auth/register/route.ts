import { NextRequest, NextResponse } from "next/server";
import {hash} from "bcrypt";
import {sql} from "@vercel/postgres";

export async function POST(request:Request) {
    try{
        const { email, password } = await request.json();
        //validar email y password
        console.log({ email, password });

        //hash password
        const hashedPassword = await hash(password, 10);
        console.log({ hashedPassword });

        const response = await sql `INSERT INTO users (email, password)
                                    VALUES (${email}, ${hashedPassword})
                                    `;
        console.log({ response });
    }
    catch(e){
        console.log({ e });
    }
    return NextResponse.json({message: "success"});
}