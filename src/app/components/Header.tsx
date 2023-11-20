import Button from "./Button";
import Dropdown from "./Dropdown";
import Link from "next/link";
import More from "./More";
export default function Header () {
  return (
    <div className="h-fit">
      <div className="py-3 md:hidden bg-[#212432] flex gap-48 w-full max-full">
        <div className="text-white pl-3 pt-1 ">
          <Link href="/" className=" text-[#fea116] font-serif font-extrabold hover:text-orange-400">RESTORAN</Link>
        </div>
        <div className=" ">
          <Dropdown />
        </div>
      </div>
      <div className="header hidden md:flex md:space-x-10  bg-[#212432] py-1 font-bold text-2xl text-white  w-full pr-3">
        <div className=" float-left pt-5 ml-5">
          <Link href="/" className="text-[#fea116] font-serif font-extrabold hover:text-orange-400">RESTORAN</Link>
        </div>
        <div className="flex md:space-x-10  bg-[#212432] py-3 font-bold text-2xl text-white justify-end w-full pr-3">
        <Link className="hover:text-[#fea116] pt-1" href={"/"}>
          Home
        </Link>
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
          <Link href={'book-table'}><Button /></Link>
        </div>
        </div>
      </div>
    </div>
  );
}
