import { IoMdMoon, IoMdSunny } from "react-icons/io";
import { useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { darkMode } from "../helpers/darkMode";

export const Header = () => {
  const [changed, setChanged] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const handleChange = (e) => {
    if (!changed) setChanged(true);
    if (e.target.value === "") setChanged(false);
  };

  const handleClick = () => {
    const flag = darkMode();
    setIsDark(flag);
  };
  return (
    <header
      id="home"
      className="dark:bg-cov dark:bg-no-repeatz flex h-[30.5rem] w-full flex-col gap-5 bg-sanFrancisco bg-cover bg-center bg-no-repeat p-5 dark:bg-newYork md:justify-center md:bg-sanFranciscoDesktop dark:md:bg-newYork lg:h-[42rem]"
    >
      <button className="h-8 w-14 self-end rounded-full bg-white py-2 px-5  text-primary dark:bg-gray-900 dark:text-white md:hidden">
        {isDark ? (
          <IoMdSunny onClick={handleClick} />
        ) : (
          <IoMdMoon onClick={handleClick} />
        )}
      </button>
      <SearchBar changed={changed} handleChange={handleChange} />
      <h1 className="hidden cursor-pointer justify-start text-4xl font-bold text-black transition-all hover:scale-110 dark:text-white md:ml-20 md:block md:w-1/2">
        Find your perfect trip, designed by insiders who know and love their
        cities.
      </h1>
      <button
        className=" lg: mt-64 h-12 w-48 transform self-center rounded-full bg-white px-8 pt-3 pb-4 font-bold text-primary shadow-lg transition-all  duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-primary hover:text-white hover:shadow-2xl md:mt-0 md:ml-20 md:self-start
        "
      >
        Explore More
      </button>
    </header>
  );
};
