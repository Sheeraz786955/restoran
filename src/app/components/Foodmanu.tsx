import Image from "next/image"
export default function Foodmanu() {
    return <div className="main">
        
        <div className="container md:flex md:w-full md:p-2 mt-2">
            <div className="left md:w-1/2 ">
                <div className="one flex space-x-6 p-2">
                    <div className=" w-24 h-24"><Image className="" src="/menu-1.jpg" alt="" /></div>
                    <div className=" w-full my-2"><h1 className="font-bold text-xl">Super Deal <div className=" float-right"><span className="text-end text-[#fea116]">Rs 1000</span></div></h1>
                        <hr className="my-1 text-black" />
                        <p className="my-1">Chest and leg pieces with extra things</p></div>
                </div>
                <div className="one flex space-x-6 p-2">
                    <div className=" w-24 h-24"><Image className="" src="/menu-2.jpg" alt="" /></div>
                    <div className=" w-full my-2"><h1 className="font-bold text-xl">Chapli Baef kabab<div className=" float-right"><span className="text-end text-[#fea116]">Rs 800</span></div></h1>
                        <hr className="my-1 text-black" />
                        <p className="my-1">it is very tasty and tender</p></div>
                </div>
                <div className="one flex space-x-6 p-2">
                    <div className=" w-24 h-24"><Image className="" src="/menu-3.jpg" alt="" /></div>
                    <div className=" w-full my-2"><h1 className="font-bold text-xl">Pizza <div className=" float-right"><span className="text-end text-[#fea116]">Rs 1200</span></div></h1>
                        <hr className="my-1 text-black" />
                        <p className="my-1">Flaver on your choice</p></div>
                </div>
                <div className="one flex space-x-6 p-2">
                    <div className=" w-24 h-24"><Image className="" src="/menu-4.jpg" alt="" /></div>
                    <div className=" w-full my-2"><h1 className="font-bold text-xl">Chicken Kabab <div className=" float-right"><span className="text-end text-[#fea116]">Rs 500</span></div></h1>
                        <hr className="my-1 text-black" />
                        <p className="my-1">it is very tasty</p></div>
                </div>
            </div>
            <div className="right md:w-1/2">
                <div className="one flex space-x-6 p-2">
                    <div className=" w-24 h-24"><Image className="" src="/menu-5.jpg" alt="" /></div>
                    <div className=" w-full my-2"><h1 className="font-bold text-xl">Burger <div className=" float-right"><span className="text-end text-[#fea116]">Rs 450</span></div></h1>
                        <hr className="my-1 text-black" />
                        <p className="my-1">it is very tasty</p></div>
                </div>
                <div className="one flex space-x-6 p-2">
                    <div className=" w-24 h-24"><Image className="" src="/menu-6.jpg" alt="" /></div>
                    <div className=" w-full my-2"><h1 className="font-bold text-xl">Frise <div className=" float-right"><span className="text-end text-[#fea116]">Rs 350</span></div></h1>
                        <hr className="my-1 text-black" />
                        <p className="my-1">Frise with hot piece</p></div>
                </div>
                <div className="one flex space-x-6 p-2">
                    <div className=" w-24 h-24"><Image className="" src="/menu-7.jpg" alt="" /></div>
                    <div className=" w-full my-2"><h1 className="font-bold text-xl">Special Pizza <div className=" float-right"><span className="text-end text-[#fea116]">Rs 1500</span></div></h1>
                        <hr className="my-1 text-black" />
                        <p className="my-1">it is our Special</p></div>
                </div>
                <div className="one flex space-x-6 p-2">
                    <div className=" w-24 h-24"><Image className="" src="/menu-8.jpg" alt="" /></div>
                    <div className=" w-full my-2"><h1 className="font-bold text-xl">Grill Fish<div className=" float-right"><span className="text-end text-[#fea116]">Rs 1100</span></div></h1>
                        <hr className="my-1 text-black" />
                        <p className="my-1">Hot fish</p></div>
                </div>
            </div>
        </div>
    </div>
}