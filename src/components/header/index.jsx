import React from "react";
import { FaBars } from "react-icons/fa";
import useSidebare from "../../utils/hooks/useSidebare";
import UserDropdown from "../user/UserDropdown";
import Notification from "../user/Notification";
import Message from "../user/Message";
import { useLocation } from "react-router";

const Header = () => {
  const { toggleSidebare } = useSidebare();
  const location = useLocation();
  const urlPageActuel = location.pathname.split("/");
  const pageActuel = urlPageActuel[urlPageActuel.length - 1];
  console.log(urlPageActuel, pageActuel);

  return (
    <header className="z-[10] bg-gray-800 fixed w-full m-0 flex justify-between text-gray-100 w-100 px-5 py-3">
      <div className="flex gap-4 items-center">
        <FaBars
          className="cursor-pointer mt-0.75"
          size={20}
          onClick={toggleSidebare}
        />
        <h1 className="uppercase">{pageActuel}</h1>
      </div>
      <div className="flex gap-4 justify-around align-center">
        <div className="  hover:bg-slate-50 p-1.5  hover:rounded-md hover:text-gray-700">
          <Message />
        </div>
        <div className="  hover:bg-slate-50 p-1.5 hover:rounded-md hover:text-gray-700">
          <Notification />
        </div>
        <div className="  hover:bg-slate-50 px-0.5 hover:px-1 p-1.5 hover:rounded-md hover:text-gray-700">
          <UserDropdown />
        </div>
      </div>
    </header>
  );
};

export default Header;
