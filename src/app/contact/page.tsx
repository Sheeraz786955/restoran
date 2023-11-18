import Contactus from "../components/Contactus"
export default function Contact(){
    return  <div className="about bg-gray-100 ">
    <div className="container max-w-full" style={{ backgroundImage: "url('images/bg-hero.jpg')" }}>
        <div className="maim bg-transparent  h-96 w-full">
        <div className="pt-40"><h1 className="font-bold text-white md:text-6xl text-5xl text-center">Contact Us</h1></div>
        </div>
        
    </div>
    
    <div className='my-10'><h1 className='font-extrabold text-4xl text-center md:text-5xl'>Contact For Any Query</h1></div>
     <Contactus/>
    </div>
} 