import Button from "./Button";
import Dropdown from "./Dropdown";
import Link from "next/link";
export default function () {
  return (
    <div className="h-fit">
      <div className="py-3 md:hidden bg-[#212432] flex space-x-52 max-full">
        <div className="text-white pl-3 pt-1 ">
          <a href="home">RESTORAN</a>
        </div>
        <div className=" ">
          <Dropdown />
        </div>
      </div>
      <div className="header hidden md:flex md:space-x-10 h-fit bg-[#212432] py-3 font-bold text-2xl w-full text-white justify-end pr-3">
        <div className="pr-56 ">
          <a href="">RESTORAN</a>
        </div>
        <a className="hover:text-[#fea116]" href={""}>
          Home
        </a>
        <Link className="hover:text-[#fea116]" href={"service"}>
          Services
        </Link>
        <Link className="hover:text-[#fea116]" href={"about"}>
          About
        </Link>
        <Link className="hover:text-[#fea116]" href={"contact"}>
          Contact
        </Link>
        <Link className="hover:text-[#fea116]" href={"manu"}>
          Manu
        </Link>

        <div className="relative group">
          <button className="group-hover:bg-gray-400 hover:text-[#fea116]">
            More
          </button>
          <ul className="hidden absolute z-10 mt-2 space-y-2 bg-gray-200 text-black p-2 shadow-lg group-hover:block">
            <li>
              <Link
                href={"booking"}
                className="block px-4 py-2 hover:text-[#fea116]"
              >
                Booking
              </Link>
            </li>
            <li>
              <Link
                href={"our-team"}
                className="block px-4 py-2 hover:text-[#fea116]"
              >
                Our Team
              </Link>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:text-[#fea116]">
                Testimonial
              </a>
            </li>
          </ul>
        </div>
        <div className="w-fit">
          <Button />
        </div>
      </div>
    </div>
  );
}
