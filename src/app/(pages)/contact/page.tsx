import Contactus from "../../components/Contactus"
import Image from "next/image"
export default function Contact(){
    return  <div className="about bg-gray-100 ">
    <div className="container max-w-full" style={{ backgroundImage: "url('/bg-hero.jpg')" }}>
        <div className="maim bg-transparent  h-96 w-full">
        <div className="pt-40"><h1 className="font-bold text-white md:text-6xl text-5xl text-center">Contact Us</h1></div>
        </div>
        
    </div>
    
    <div className='my-10'><h1 className='font-extrabold text-4xl text-center md:text-5xl'>Contact For Any Query</h1></div>
    <div className="md:flex space-x-10 text-center justify-center items-center m-2">
            
                    <div className="flex space-x-3 py-3 ml-9 md:ml-0"><div className=" "><Image className="  w-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 " src="icons/location-pin-svgrepo-com.svg" alt="" /></div><span className=" py-1 font-semibold text-lg">Joher Town Near Jinnah Hospital Lahore</span></div>
                    <div className="flex space-x-3 py-3"><div className=" "><Image className=" w-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 " src="icons/phone-call-svgrepo-com.svg" alt="" /></div><span className=" py-1 font-semibold text-lg">+923087267910</span></div>
                    <div className="flex space-x-3 py-3"><div className=" "><Image className=" w-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 " src="icons/email-1-svgrepo-com.svg" alt="" /></div><span className=" py-1 font-semibold text-lg">sheerazahmad.cs@gmail.com</span></div>
                   
                </div>
     <Contactus/>
    </div>
} 