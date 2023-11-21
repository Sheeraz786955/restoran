import Servicesbox from "./Servicesbox";
import Image from "next/image";
export default function Servicebox2(){
    return <div className="main">
        <div><Servicesbox/></div>

        <div className="main bg-gray-100 md:pl-8 p-3 justify-center items-center w-full ">
        <div className="container py-10 space-y-5 md:space-y-0 bg-gray-100 md:flex md:space-x-4 justify-center items-center">
            <div className="left bg-white md:w-1/3 p-8 hover:bg-[#fea116] hover:scale-110 duration-300 hover:text-white">
                <div className="py-3"><Image src="/cutlery-set-of-eating-tools-svgrepo-com.svg" alt="" width={500} height={500} className="w-28 " /></div>
                <h1 className=" font-bold text-2xl py-2">Dining Chefs</h1>
                <p>We offer a vonderfull venue for Dining pleas come and see.</p>
            </div>
            <div className="mid1 bg-white md:w-1/3 p-8 hover:bg-[#fea116] hover:scale-110 duration-300 hover:text-white ">
            <div className="py-3"><Image src="/car-svgrepo-com.svg" alt="" width={500} height={500} className="w-28" /></div>
                <h1 className=" font-bold text-2xl py-2">Drive Food</h1>
                <p>You can get your food on your car. Enjoy our services </p>
            </div>
            <div className="mid2 bg-white md:w-1/3 p-8 hover:bg-[#fea116] hover:scale-110 duration-300 hover:text-white">
            <div className="py-3"><Image src="/shopping-cart-svgrepo-com.svg" alt="" width={500} height={500} className="w-28" /></div>
                <h1 className=" font-bold text-2xl py-2">Pick Up</h1>
                <p>You can pickup your order. There are no Extra charges</p>
            </div>
            <div className="right bg-white md:w-1/3 p-8 hover:bg-[#fea116] hover:scale-110 duration-300 hover:text-white">
            <div className="py-3"><Image src="/customer-service-mic-svgrepo-com.svg" alt="" width={500} height={500} className="w-28" /></div>
                <h1 className=" font-bold text-2xl py-2">24/7 Service</h1>
                <p>You can call us for your complaints and suggestions</p>
            </div>
        </div>
    </div>

    </div>
}