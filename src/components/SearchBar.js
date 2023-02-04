import { BiSearch } from "react-icons/bi";

export const SearchBar = ({ changed, handleChange }) => {
  return (
    <label className="relative self-center md:hidden">
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
  );
};
