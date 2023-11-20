import Image from "next/image"
import Link from "next/link"
import Buttonemail from "./Buttonemail"
export default function Footer() {
    return <div className="footer bg bg-[#212432] text-white p-5 pr-4">
        <div className="container md:flex md:space-x-8">
            <div className="left py-8">
                <div className="flex flex-col pl-10">
                    <span className=" py-4">Compamy</span>
                    <Link className="py-1 hover:text-[#fea116] hover:underline" href="about">{'>'} About Us</Link>
                    <Link className="py-1 hover:text-[#fea116] hover:underline" href="contact">{'>'} Contact Us</Link>
                    <Link className="py-1 hover:text-[#fea116] hover:underline" href="book-table">{'>'} Reservation</Link>
                    <Link className="py-1 hover:text-[#fea116] hover:underline" href="#">{'>'} Privacy Policy</Link>
                    <Link className="py-1 hover:text-[#fea116] hover:underline" href="#">{'>'} Terms and Condition</Link>
                </div>
            </div>
            <div className="mid1 py-8">
                <div className="flex flex-col pl-10">
                    <h1 className="py-4">Contact</h1>
                    <div className="flex space-x-3 py-3"><div className=" "><Image className=" bg-[#fea116] w-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 " src="/location-pin-svgrepo-com.svg" alt="" /></div><span className=" py-1">Joher Town Near Jinnah Hospital Lahore</span></div>
                    <div className="flex space-x-3 py-3"><div className=" "><Image className=" bg-[#fea116] w-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 " src="/phone-call-svgrepo-com.svg" alt="" /></div><span className=" py-1">+923087267910</span></div>
                    <div className="flex space-x-3 py-3"><div className=" "><Image className=" bg-[#fea116] w-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 " src="/email-1-svgrepo-com.svg" alt="" /></div><span className=" py-1">sheerazahmad.cs@gmail.com</span></div>
                    <div className=" flex space-x-4 pl-8 pt-8">
                        <div><Image className="w-10 bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 " src="/facebook-color-svgrepo-com.svg" alt="" /></div>
                        <div><Image className="w-10 bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 " src="/linkedin-svgrepo-com.svg" alt="" /></div>
                        <div><Image className="w-10 bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 " src="/twitter-color-svgrepo-com.svg" alt="" /></div>
                        <div><Image className="w-10 bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 " src="/youtube-color-svgrepo-com.svg" alt="" /></div>
                    </div>
                </div>
            </div>
            <div className="mid2 py-8">
                <div className="flex flex-col pl-10">
                    <h1 className="py-4">Opening</h1>
                    <span className="">Monday-Saturday</span>
                    <span className=" py-1">10AM to 12AM</span>
                    <span className=" pt-1">Sunday</span>
                    <span className="">11Am to 1AM</span>
                </div>
            </div>
            <div className="right ">
                <div className="flex flex-col pl-10">
                    <h1 className=" py-10">News Letter</h1>
                    <div className="bg-white mb-5 flex w-80 border-solid border-2 border-yellow-500"> <div className="bg-white"><input type="Email" placeholder="Enter your Email" className="email " /></div><div><Buttonemail /></div></div>
                </div>
            </div>
        </div>
        <hr />
        <div className="buttom md:flex">
            <div className="left">
                <span>©Restoran, All Right Reserved. Designed By <h1 className="font-bold hover:underline">Sheeraz Ahmad</h1></span>
            </div>
            <div className="right md:px-72">
                <div className="flex space-x-4 ">
                    <Link className ="hover:text-[#fea116] hover:underline" href="home"> Home</Link>
                    <a className ="hover:text-[#fea116] hover:underline" href="">{'|'} Cokise</a>
                    <a className ="hover:text-[#fea116] hover:underline" href="">{'|'} Help</a>
                    <a className ="hover:text-[#fea116] hover:underline" href="">{'|'} FAQs</a>
                </div>
            </div>
        </div>
    </div>
}