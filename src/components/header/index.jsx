import React from "react";
import { FaUser, FaBars } from "react-icons/fa";
import { FaSquareEnvelope } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
import useSidebare from "../../utils/hooks/useSidebare";

const Header = () => {
  const { toggleSidebare } = useSidebare();

  return (
    <header className="bg-gray-800 fixed w-full m-0 flex justify-between text-gray-100 w-100 px-5 py-5">
      <FaBars
        className="cursor-pointer"
        size={26}
        onClick={toggleSidebare}
      />
      <div className="flex gap-4 justify-around align-center">
      <FaSquareEnvelope
        className="cursor-pointer"
        size={20}
      />
      <IoIosNotifications
        className="cursor-pointer"
        size={20}
      />
      <FaUser
        className="cursor-pointer"
        size={16}
      />
      </div>
    </header>
  );
};

export default Header;
