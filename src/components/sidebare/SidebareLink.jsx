import React from "react";
import { Link } from "react-router-dom";

const SidebareLink = ({menus, open}) => {
  return (
    <div className="mt-4 flex flex-col gap-4 relative">
      {menus?.map((menu, i) => (
        <Link
          to={menu?.link}
          key={i}
          className={` ${
            menu?.margin && "mt-"
          } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-100 rounded-md`}
        >
          <div className={"text-xl"} size={20}>
            {menu?.icon}
          </div>
          <h2
            className={`whitespace-pre duration-500 ${
              !open && "opacity-0 translate-x-28 overflow-hidden"
            }`}
          >
            {menu?.name}
          </h2>
          <h2
            className={`${
              open && "hidden"
            } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
          >
            {menu?.name}
          </h2>
        </Link>
      ))}
    </div>
  );
};

export default SidebareLink;
