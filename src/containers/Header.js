import { IoMdMoon } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";

export const Header = () => {
  const [changed, setChanged] = useState(false);
  const handleChange = (e) => {
    if (!changed) setChanged(true);
    if (e.target.value === "") setChanged(false);
  };
  return (
    <header className="flex h-[30.5rem] w-full flex-col gap-5 bg-sanFrancisco bg-cover bg-center bg-no-repeat p-5">
      <button className="h-8 w-14 self-end rounded-full bg-white py-2  px-5 text-primary">
        <IoMdMoon />
      </button>
      <label className="relative self-center">
        {!changed && (
          <BiSearch className=" absolute left-14 bottom-[0.90rem] block text-xl  text-primary " />
        )}
        <input
          type="search"
          className="w-min-[20rem] peer h-12 w-72 self-center rounded-full border-none bg-white py-2 px-5 text-center shadow-lg "
          placeholder="        San Francisco"
          onChange={(e) => handleChange(e)}
        />
      </label>
      <button
        className=" mt-64 h-12 w-48 transform self-center rounded-full bg-white px-8 pt-3 pb-4 font-bold text-primary shadow-lg transition-all duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-primary hover:text-white hover:shadow-2xl
        "
      >
        Explore More
      </button>
    </header>
  );
};
