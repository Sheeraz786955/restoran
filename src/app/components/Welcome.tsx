import Image from "next/image"
import Buttonreadmore from "./Buttonreadmore"
export default function Welcome() {
    return <div className="main md:p-2">
        <div className="container md:flex">
            <div className="left md:w-1/2">
                <div className="up flex">
                    <div className="one md:w-1/2">

                        <div className=""><img className="md:p-2 w-60 md:w-full mt-4 md:mt-0 p-3" src="images/about-1.jpg" alt="" /></div>
                    </div>
                    <div className="two w-1/2">
                        <div className=" "><img className="md:w-60 w-44 md:mt-20 mt-14 mr-4 md:p-2" src="images/about-2.jpg" alt="" /></div>
                    </div>
                </div>
                <div className="down flex">
                <div className="three w-1/2">
                    <div className=""><img className="md:w-60 w-44 float-right md:p-2" src="images/about-3.jpg" alt="" /></div>
                </div>
                <div className="four w-1/2">
                    <div className=""><img className="md:p-2 px-3 md:px-1 w-60 md:w-full mb-1"   src="images/about-4.jpg" alt="" /></div>
                </div>
            </div>
        </div>
        <div className="right md:w-1/2 p-3 md:p-5">
            <div className="my-10  pt-5"><h1 className="font-bold text-3xl text-center">Welcome To Restoran</h1></div>
            <div><p className="">Welcome to our Restaurant, where culinary delights and warm hospitality await you. Step into a world of delectable flavors crafted with passion and care. Our menu is a symphony of tastes, offering a diverse range of dishes that cater to every palate.<br/> <br/>
            From the moment you enter, our friendly staff is dedicated to ensuring your dining experience is nothing short of exceptional. Indulge in the ambiance, savor the flavors, and let us elevate your culinary journey. Thank you for choosing our restaurant; we look forward to serving you with a smile and creating memorable moments around the dining table.<br/></p></div>
            <div className="conatainer m-3 md:flex md:space-x-8">
                <div className="left">
                 <div className="flex"><div><h1 className="font-bold text-3xl text-[#fea116]">{"|"}  15</h1></div><div className="ml-5"><h2>Years of</h2><h1 className="font-bold">EXPERIENCE</h1></div></div>
                </div>
                <div className="right">
                <div className="flex"><div><h1 className="font-bold text-3xl text-[#fea116]">{"|"}  50</h1></div><div className="ml-4"><h2>Populer</h2><h1 className="font-bold">MASTER CHEFS</h1></div></div>  
                </div>
            </div>
             <div className="md:ml-3 ml-2"><Buttonreadmore/></div>
        </div>
    </div>
    </div >
}