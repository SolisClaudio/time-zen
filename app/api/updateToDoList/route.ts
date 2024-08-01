
 import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import {sql} from "@vercel/postgres";

export async function POST(request: Request){
    try{
        const title  = await request.json();
        const session = await getServerSession();
        console.log("session: ", session);
        const response_id = await sql `SELECT id FROM users WHERE email = ${session?.user?.email}`;
        console.log("user id: ", response_id.rows[0].id);
        const response = await sql `INSERT INTO tododata (user_id, title)
                                    VALUES (${response_id.rows[0].id}, ${title.title})`;
    }
    catch(e){
        console.log({ e });
        return NextResponse.json({message: "error"});
    }
    return NextResponse.json({message: "success"});
}

export async function GET(){
    try{
        const session = await getServerSession();
        console.log("session: ", session);
        const response_id = await sql `SELECT id FROM users WHERE email = ${session?.user?.email}`;
        console.log("user id: ", response_id.rows[0].id);
        const response = await sql `SELECT * FROM tododata WHERE user_id = ${response_id.rows[0].id}`;
        console.log("response: ", response.rows);
        return NextResponse.json(response.rows);
    }
    catch(e){
        console.log({ e });
        return NextResponse.json({message: "error"});
    }


}
