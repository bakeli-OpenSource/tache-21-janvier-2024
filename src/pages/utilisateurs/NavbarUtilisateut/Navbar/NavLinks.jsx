import React from "react";
import { Link, useLocation } from "react-router-dom";
import { links } from "./MyLinks";

const NavLinks = () => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      {links.map((link, index) => (
        <div key={index} className="">
          <div className="px-2  py-5 md:py-0 text- md:cursor-pointer group">
            <Link
              className={`justify-between block relative after:  after:block after:bottom- text-sm items-center duration-500 pb-1 focus:border-b-2 focus:border-slate-800 active:border-b-2 active:border-slate-800  hover:border-b-2  hover:border-slate-800  pr- group  ${
                location.pathname === link.link ? "border-b-2 border-slate-800 pb-1 " : ""
              }`}
              to={link.link}
            >
              {link.name}
            </Link>
            
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
