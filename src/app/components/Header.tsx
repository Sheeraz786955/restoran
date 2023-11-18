import Button from "./Button";
import Dropdown from "./Dropdown";
import Link from "next/link";
import More from "./More";
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
        <a className="hover:text-[#fea116] pt-1" href={""}>
          Home
        </a>
        <span className="mb-1">
          <More/>
        </span>
        <Link className="hover:text-[#fea116] pt-1" href={"service"}>
          Services
        </Link>
        <Link className="hover:text-[#fea116] pt-1" href={"about"}>
          About
        </Link>
        <Link className="hover:text-[#fea116] pt-1" href={"contact"}>
          Contact
        </Link>
        <Link className="hover:text-[#fea116] pt-1" href={"manu"}>
          Manu
        </Link>

        <div className="w-fit">
          <Button />
        </div>
      </div>
    </div>
  );
}
