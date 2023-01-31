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
          <BiSearch className=" absolute left-28 bottom-[0.88rem] block text-xl  text-primary " />
        )}
        <input
          type="search"
          className="peer h-12 w-[21.5rem] self-center rounded-full border-none bg-white py-2 px-5 text-center shadow-lg focus:border-none focus:outline-none"
          placeholder="        San Francisco"
          onChange={(e) => handleChange(e)}
        />
      </label>
      <button
        className=" mt-64 h-12 w-48 self-center rounded-full bg-white px-11 pt-3 pb-4 font-bold text-primary shadow-lg hover:bg-primary hover:text-white
        "
      >
        Explore More
      </button>
    </header>
  );
};
