import Image from "next/image";

export default function LoginPage() {
  return(
    
    <div>
      <div className= "bg-black flex min-h-screen flex-col items-center  p-2">
          
          <div className="z-11 flex-row-reverse left-0 top-0 flex w-3/4 border-b border-gray-300 
                           pb-6 pt-8 backdrop-blur-2xl 
                          dark:border-neutral-800  rounded-xl  bg-gradient-to-r from-black to-zinc-800">
              <Image src="/logoColor.png" alt="TimeZen Logo" className="object-contain w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20" width={75} height={75}/> 
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold  text-center mt-4 font-family  ">TimeZen</h1>
              
          </div>
          <div className="w-full max-w-sm p-6 bg-gradient-to-b from-zinc-800 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800  lg:static   rounded-xl lg:border  lg:p-4 mt-10">

        <div className="w-80 mt-7">
          <div className="relative w-full min-w-[200px] h-10">
            <input
              className="peer w-full h-full bg-transparent text-blue-gray-700 font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-white border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-pastel-yellow"
              placeholder=" " /><label
              className=" flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-pastel-yellow before:border-red peer-focus:before:!border-pastel-yellow after:border-pastel.yellow peer-focus:after:!border-pastel-yellow">email
            </label>
          </div>
        </div> 

        <div className="w-80 mt-7">
          <div className="relative w-full min-w-[200px] h-10">
            <input type="password"
              className="peer w-full h-full bg-transparent text-blue-gray-700 font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-white border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-pastel-yellow"
              placeholder=" " /><label
              className=" flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-pastel-yellow before:border-red peer-focus:before:!border-pastel-yellow after:border-pastel.yellow peer-focus:after:!border-pastel-yellow">password
            </label>
          </div>
        </div> 
         
        <div className="mt-2 z-11 flex-row-reverse left-0 top-0 flex ">
          <button type="button" className="left-0 top-0 flex  text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 ">Log in</button>
        </div>

        <p className="mt-6 text-center text-white">
              ¿No tienes una cuenta? <a href="/register" className="text-blue-500 hover:text-blue-700 font-bold">Regístrate</a>
        </p>
        
          </div>
      </div>
    </div>
  )
  }