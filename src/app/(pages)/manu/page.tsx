import Foodmanu from "../../components/Foodmanu"
export default function Manu(){
    return <div className="about bg-gray-100 w-fit md:w-full  ">
    <div className="container max-w-full" style={{ backgroundImage: "url('/bg-hero.jpg')" }}>
        <div className="maim bg-transparent  h-96 w-full">
        <div className="pt-40"><h1 className="font-bold text-white md:text-6xl text-5xl text-center">Our Menu</h1></div>
        </div>
        
    </div>
    
    <div className='mt-10'><h1 className='font-extrabold text-4xl my-10 text-center md:text-5xl'>Most Popular Items</h1></div>
     <Foodmanu/>
     <Foodmanu/>
    </div>
}