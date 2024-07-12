import { NextRequest, NextResponse } from "next/server";
import {hash} from "bcrypt";
import {sql} from "@vercel/postgres";

export async function POST(request:Request) {
    
    try{
        const { email, password1, password2 } = await request.json();
        //validar email y password
        if(!email || !password1 || !password2){
            return NextResponse.json("Email y password son requeridos", {status: 400});
        }    
        if(password1 !== password2){
            return NextResponse.json("Las contraseñas no coinciden", {status: 400});
        }
        const result = await sql `SELECT * FROM users WHERE email = ${email}`
        console.log({ result });
        if( (result?.rowCount ?? 0) > 0){
            return NextResponse.json("Usuario existente", {status: 400});
        }

        console.log({ email, password1 });

        //hash password
        const hashedPassword = await hash(password1, 10);
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