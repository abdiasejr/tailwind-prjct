import { BiSearch } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { IoMdMoon } from "react-icons/io";

export const Nav = () => {
  return (
    <nav className="absolute hidden h-[4.5rem]  w-full cursor-pointer flex-row items-center justify-between px-5 text-lg font-bold text-primary md:flex md:bg-white">
      <h1>Platzi Travel</h1>
      <ul className="flex flex-row gap-10">
        <li>Locations</li>
        <li>Stays</li>
        <li>FAQs</li>
        <li>About Us</li>
      </ul>
      <div className="flex flex-row gap-5 text-2xl">
        <BiSearch />
        <IoMdMoon />
        <BsFillPersonFill className=" text-gray-300" />
      </div>
    </nav>
  );
};
