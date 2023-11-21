import Image from "next/image"

export default function Servicesbox(){
    return <div className="main bg-gray-100 md:pl-8 p-3 ">
        <div className="container py-10 space-y-5 md:space-y-0 bg-gray-100 md:flex md:space-x-4">
            <div className="left bg-white md:w-1/3 p-8 hover:bg-[#fea116] hover:scale-110 duration-300 hover:text-white">
                <div className="py-3"><Image src="/user-profile-svgrepo-com.svg" alt="" width={500} height={500} className="w-28 " /></div>
                <h1 className=" font-bold text-2xl py-2">Master Chefs</h1>
                <p>Our master chefs stand as paragons of gastronomic excellence, weaving magic with every ingredient and infusing their creations with passion and precision.</p>
            </div>
            <div className="mid1 bg-white md:w-1/3 p-8 hover:bg-[#fea116] hover:scale-110 duration-300 hover:text-white ">
            <div className="py-3"><Image src="/plate-fork-spon-svgrepo-com.svg" alt="" width={500} height={500} className="w-28" /></div>
                <h1 className=" font-bold text-2xl py-2">Quality Food</h1>
                <p>Our food Quality is the one of the best in the city </p>
            </div>
            <div className="mid2 bg-white md:w-1/3 p-8 hover:bg-[#fea116] hover:scale-110 duration-300 hover:text-white">
            <div className="py-3"><Image src="/shopping-cart-svgrepo-com.svg" alt="" width={500} height={500} className="w-28" /></div>
                <h1 className=" font-bold text-2xl py-2">Online Order</h1>
                <p>You can order your food online. Home Delivery is absolutely free</p>
            </div>
            <div className="right bg-white md:w-1/3 p-8 hover:bg-[#fea116] hover:scale-110 duration-300 hover:text-white">
            <div className="py-3"><Image src="/customer-service-mic-svgrepo-com.svg" alt="" width={500} height={500} className="w-28" /></div>
                <h1 className=" font-bold text-2xl py-2">24/7 Service</h1>
                <p>You can call us for your complaints and suggestions</p>
            </div>
        </div>
    </div>
}