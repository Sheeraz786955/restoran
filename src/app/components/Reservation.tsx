import Buttonbooknow from "./Buttonbooknow"
export default function Reservation(){
   return<div className="reservation md:px-8 md:py-4 mb-3">
    <div className="container md:flex h-fit  bg-[#0f172b]">
        <div className="left w-full h-72 md:h-96 md:w-1/2">
        <video className="h-full w-fit md:mt-28"controls>
        <source src="movie.mp4" type="video/mp4"/>
        <source src="movie.ogg" type="video/ogg"/>
        Your browser does not support the video tag.
       </video>
        </div>
        <div className="right w-full md:w-1/2 ">
            <form action="" className="p-11 md:pl-48 w-fit">
                <span className="text-white font-bold text-2xl ml-8 mb-7">Book a Online Table</span><br />
                <span className="font-semibold text-xl text-white">Name</span><br />
                <input className="p-3 w-80 mb-3 mt-1" type="text" placeholder="Your Name"/><br/>
                <span className="font-semibold text-xl text-white">Email</span><br />
                <input className="p-3 w-80 mb-3 mt-1" type="email" placeholder="Your Email"/><br/>
                <span className="font-semibold text-xl text-white">Date and Time</span><br />
                <input className="p-3 w-80 mb-3 mt-1" type="datetime-local" placeholder="Date & Time"/><br />
                <span className="font-semibold text-xl text-white">number of Persons</span><br />
                <select className="p-3 w-80 mb-3 mt-1" id="persons" name="cars">
                  <option >1 person</option>
                  <option >2 persons</option>
                  <option >3 persons</option>
                  <option >4 persons</option>
                  <option >5 persons</option>
                </select><br />
                <span className="font-semibold text-xl text-white">Special Request</span><br />
                <textarea className="p-3 w-80 mb-3 mt-1" name="message" placeholder="Special request"/><br />
                <div className=" mt-2"><Buttonbooknow/></div>
            </form>
        </div>
    </div>
   </div>

}