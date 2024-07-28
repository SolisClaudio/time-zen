'use client';

import Image from "next/image";
import { signOut } from "next-auth/react";
import LogoutIcon from '@mui/icons-material/Logout';

export default function Header() {
    return (
            <div className="z-11  left-0 top-0 grid w-full border-b border-gray-300 
            pb-3 pt-6 backdrop-blur-2xl 
            border-neutral-800 bg-gradient-to-r from-black to-zinc-800">
                <div className="flex justify-between">
                    <div className = "flex" >
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold ml-2 font-family font-normal">TimeZen</h1>
                        <Image src="/logoBlanco.png" alt="TimeZen Logo" className="object-contain w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12" width={75} height={75}/>
                    </div>
                    <div>
                        <div className="mx-5 cursor-pointer hover:bg-yellow-800 text-white px-2 py-2 rounded" onClick={() => signOut()}> <LogoutIcon/> </div>
                    </div>
                </div>
                
            </div>
            
    );
}