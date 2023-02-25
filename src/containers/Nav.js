import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import { darkMode } from "../helpers/darkMode";

export const Nav = () => {
  const [isDark, setIsDark] = useState(false);
  const handleClick = () => {
    const flag = darkMode();
    setIsDark(flag);
  };
  return (
    <nav className="absolute hidden h-[4.5rem]  w-full cursor-pointer flex-row items-center justify-between px-5 text-lg font-bold dark:bg-gray-900 md:flex md:bg-white">
      <h1>Platzi Travel</h1>
      <ul className="flex flex-row gap-10">
        <li>Locations</li>
        <li>Stays</li>
        <li>FAQs</li>
        <li>About Us</li>
      </ul>
      <div className="flex flex-row gap-5 text-2xl">
        <BiSearch />
        {isDark ? (
          <IoMdSunny onClick={handleClick} />
        ) : (
          <IoMdMoon onClick={handleClick} />
        )}
        <BsFillPersonFill className=" text-gray-300" />
      </div>
    </nav>
  );
};
