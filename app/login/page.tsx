import Image from "next/image";
import Form from "./form";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await getServerSession();
  if(session){
    redirect('/');
  }
  return(
    
    <div>
      <div className= "bg-black flex min-h-screen flex-col items-center  p-2">  
        <div className="z-11 flex-row-reverse left-0 top-0 flex w-3/4 border-b border-gray-300 
                          pb-6 pt-8 backdrop-blur-2xl 
                        border-neutral-800  rounded-xl  bg-gradient-to-r from-black to-zinc-800">
            <Image src="/logoColor.png" alt="TimeZen Logo" className="object-contain w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20" width={75} height={75}/> 
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold  text-center mt-4 font-family  ">TimeZen</h1>
        </div>
        
        <Form/>
      
      </div>
    </div>
  )
  }