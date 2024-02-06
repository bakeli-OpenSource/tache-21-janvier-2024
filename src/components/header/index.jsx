import React from "react";
import { FaBars } from "react-icons/fa";
import { FaSquareEnvelope } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
import useSidebare from "../../utils/hooks/useSidebare";
import UserDropdown from "../user/UserDropdown";

const Header = () => {
  const { toggleSidebare } = useSidebare();

  return (
    <header className="z-[10] bg-gray-800 fixed w-full m-0 flex justify-between text-gray-100 w-100 px-5 py-3">
      <FaBars
        className="cursor-pointer mt-0.75"
        size={26}
        onClick={toggleSidebare}
      />
      <div className="flex gap-1 justify-around align-center">
        <div className="  hover:bg-slate-50 p-1.5 hover:rounded-md hover:text-gray-700">
          <FaSquareEnvelope className="cursor-pointer p-" size={20} />
        </div>
        <div className="  hover:bg-slate-50 p-1.5 hover:rounded-md hover:text-gray-700">
          <IoIosNotifications className="cursor-pointer p-" size={20} />
        </div>
        <div className="  hover:bg-slate-50 p-1.5 hover:rounded-md hover:text-gray-700">
          <UserDropdown />
        </div>
      </div>
    </header>
  );
};

export default Header;
