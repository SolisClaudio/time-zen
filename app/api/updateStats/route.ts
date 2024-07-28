import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import {sql} from "@vercel/postgres";

export async function POST(request: Request){
    try{
        const { duration } = await request.json();
        const session = await getServerSession();
        const response = await sql `INSERT INTO timestats (email, tiempo)
                                    VALUES (${session?.user?.email}, ${duration})`
    }
    catch(e){
        console.log({ e });
    }
    return NextResponse.json({message: "success"});
}