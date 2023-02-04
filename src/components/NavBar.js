import { AiFillHeart, AiFillHome } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";

export const NavBar = () => {
  return (
    <nav className="fixed bottom-0 left-0 z-10 flex w-full flex-row items-center justify-center gap-10 bg-white p-4 text-3xl shadow-md lg:hidden">
      <a href="#home">
        <AiFillHome className="text-gray-300 hover:text-primary" />
      </a>
      <a href="#popular">
        <BiSearch className="text-primary" />
      </a>
      <a href="#recommended">
        <AiFillHeart className="text-gray-300 hover:text-primary" />
      </a>
      <BsFillPersonFill className="text-gray-300 hover:text-primary" />
    </nav>
  );
};
