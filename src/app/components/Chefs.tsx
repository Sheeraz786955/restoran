import Image from "next/image"

export default function Chefs(){
    return <div className="main bg-gray-100 md:pl-8 p-3 ">
        <div className="container py-10 space-y-5 md:space-y-0 bg-gray-100 md:flex md:space-x-4">
            <div className="left bg-white md:w-1/3 p-8 hover:bg-gray-200">
                <div className="py-3"><img src="images/team-1.jpg" alt="" className="w-56 rounded-full " /></div>
                <h1 className=" font-bold text-2xl py-2 ml-14">Full Name</h1>
                <p className="ml-16">Destination</p>
                <div className=" flex space-x-4 pl-8 pt-8">
                        <div><img className="w-9 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 " src="icons/facebook-color-svgrepo-com.svg" alt="" /></div>
                        <div><img className="w-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300  " src="icons/linkedin-svgrepo-com.svg" alt="" /></div>
                        <div><img className="w-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 " src="icons/twitter-color-svgrepo-com.svg" alt="" /></div>
                        
                    </div>
            </div>
            <div className="mid1 bg-white md:w-1/3 p-8 hover:bg-gray-200">
                <div className="py-3"><img src="images/team-2.jpg" alt="" className="w-56 rounded-full " /></div>
                <h1 className=" font-bold text-2xl py-2 ml-14">Full Name</h1>
                <p className="ml-16">Destination</p>
                <div className=" flex space-x-4 pl-8 pt-8">
                        <div><img className="w-9 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 " src="icons/facebook-color-svgrepo-com.svg" alt="" /></div>
                        <div><img className="w-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300  " src="icons/linkedin-svgrepo-com.svg" alt="" /></div>
                        <div><img className="w-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 " src="icons/twitter-color-svgrepo-com.svg" alt="" /></div>
                        
                    </div>
            </div>
            <div className="mid2 bg-white md:w-1/3 p-8 hover:bg-gray-200">
                <div className="py-3"><img src="images/team-3.jpg" alt="" className="w-56 rounded-full " /></div>
                <h1 className=" font-bold text-2xl py-2 ml-14">Full Name</h1>
                <p className="ml-16">Destination</p>
                <div className=" flex space-x-4 pl-8 pt-8">
                        <div><img className="w-9 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 " src="icons/facebook-color-svgrepo-com.svg" alt="" /></div>
                        <div><img className="w-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300  " src="icons/linkedin-svgrepo-com.svg" alt="" /></div>
                        <div><img className="w-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 " src="icons/twitter-color-svgrepo-com.svg" alt="" /></div>
                        
                    </div>
            </div>
            <div className="right bg-white md:w-1/3 p-8 hover:bg-gray-200">
                <div className="py-3"><img src="images/team-4.jpg" alt="" className="w-56 rounded-full " /></div>
                <h1 className=" font-bold text-2xl py-2 ml-14">Full Name</h1>
                <p className="ml-16">Destination</p>
                <div className=" flex space-x-4 pl-8 pt-8">
                        <div><img className="w-9 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 " src="icons/facebook-color-svgrepo-com.svg" alt="" /></div>
                        <div><img className="w-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300  " src="icons/linkedin-svgrepo-com.svg" alt="" /></div>
                        <div><img className="w-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 " src="icons/twitter-color-svgrepo-com.svg" alt="" /></div>
                        
                    </div>
            </div>
        </div>
    </div>
}