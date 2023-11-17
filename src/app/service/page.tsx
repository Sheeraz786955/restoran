import Header from "../components/Header"
import Servicebox2 from "../components/Servicebox2"
export default function Services(){
    return <div className="about bg-gray-100 ">
    <div className="container max-w-full" style={{ backgroundImage: "url('images/bg-hero.jpg')" }}>
        <div className="maim bg-transparent backdrop-brightness-50 backdrop-blur-sm h-96 w-full">
        <div className="pt-40"><h1 className="font-bold text-white md:text-6xl text-5xl text-center">Services</h1></div>
        </div>
        
    </div>
    
    <div className='mt-10'><h1 className='font-extrabold text-4xl text-center md:text-5xl'>Explore Our Services</h1></div>
     <Servicebox2></Servicebox2>
    </div>
}