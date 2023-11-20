import Buttonmessage from "./Buttonmessage"
export default function Contactus(){
   return<div className="reservation md:px-8 md:py-4 mb-3">
    <div className="container md:flex h-fit  bg-[#0f172b] ">
        <div className="right w-full items-center justify-center md:px-72">
            <form action="" className="p-11 md:pl-48 ">
                <span className="text-white font-bold text-2xl ml-14 mb-7">Please write us</span><br />
                <span className="font-semibold text-xl text-white">Name</span><br />
                <input className="p-3 w-80 mb-3 mt-1 rounded-2xl" type="text" placeholder="Your Name"/><br/>
                <span className="font-semibold text-xl text-white">Email</span><br />
                <input className="p-3 w-80 mb-3 mt-1 rounded-2xl" type="email" placeholder="Your Email"/><br/>
                <span className="font-semibold text-xl text-white">Subject</span><br />
                <input className="p-3 w-80 mb-3 mt-1 rounded-2xl" type="text" placeholder="Subject"/><br />
                <span className="font-semibold text-xl text-white">Message</span><br />
                <textarea className="p-3 w-80 mb-3 mt-1" name="message" placeholder="Message"/><br />
                <div className=" mt-2"><Buttonmessage/></div>
            </form>
        </div>
    </div>
   </div>

}