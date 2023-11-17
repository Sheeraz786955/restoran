import Header from "../components/Header"
import Welcome from "../components/Welcome"
import Chefs from "../components/Chefs"
export default function About(){
    return <div className="about bg-gray-100 ">
    <div className="container max-w-full" style={{ backgroundImage: "url('images/bg-hero.jpg')" }}>
        <div className="maim bg-transparent backdrop-brightness-50 backdrop-blur-sm h-96 w-full">
        <div className="pt-40"><h1 className="font-bold text-white md:text-6xl text-5xl text-center">About Us</h1></div>
        </div>
        
    </div>
    <Welcome/>
    <div className='mt-10'><h1 className='font-extrabold text-4xl text-center md:text-5xl'>Our Master Chefs</h1></div>
     <Chefs/>
    </div>
}