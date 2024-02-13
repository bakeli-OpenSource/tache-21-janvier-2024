import React from "react";
import { Link } from "react-router-dom";
import {links} from "./MyLinks"

const NavLinks = () => {
  return (
    <>
      {links.map((link, index) => ( 
        <div key={index}>
          <div className="px-2 py-5 md:py-0 text- md:cursor-pointer group">
            <Link
            className="justify-between items-center md:pr-0 pr-5 group"
              to={link.link}
            >
              {link.name}
            </Link>
          </div>
      </div>
      ))}
      {/* <div className="px-2 py-5 md:py-0 text- md:cursor-pointer group">
        <ul className=" flex gap-10 justify-between items-center md:pr-0 pr-5 group">
        <Link  to="/Shop"><li>Shop</li></Link>
        <Link  to="/Arrivals"><li>New arrivals</li></Link>
        <Link  to="/Sales"><li>Sales</li></Link>
        <Link  to="/Journals"><li>Journal</li></Link>
        </ul>
      </div> */}
    </>
  );
};

export default NavLinks;


