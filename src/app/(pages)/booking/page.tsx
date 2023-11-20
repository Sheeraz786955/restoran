import Reservation from "../../components/Reservation"
export default function Booking() {
    return <div className="about bg-gray-100 ">
        <div className="container max-w-full" style={{ backgroundImage: "url('/bg-hero.jpg')" }}>
            <div className="maim bg-transparent h-96 w-full">
                <div className="pt-40"><h1 className="font-bold text-white md:text-6xl text-5xl text-center">Online Booking</h1></div>
            </div>

        </div>

        <div className='mt-10'><h1 className='font-extrabold text-4xl text-center md:text-5xl'>Book a Table</h1></div>
        <Reservation />
    </div>
}