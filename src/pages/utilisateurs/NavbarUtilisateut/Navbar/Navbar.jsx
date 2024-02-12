import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import { MdMenu, MdClose } from "react-icons/md";
import { BsPersonCircle, BsSearch } from "react-icons/bs";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import NavInput from "../NavInput";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);

  return (
    <nav className="bg-white  z-50 fixed top-0 w-full">
      <div className="flex px-8 py-3 items-center justify-between">
        <div className="flex items-center gap-8 w-full md:w-auto justify-between ">
          <div className="z-50 p- md:w-auto w-full flex justify-between">
            <h1 className="md:cursor-pointer  text-2xl uppercase font-bold">
              Cein.
            </h1>
            <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
              {open ? <MdClose /> : <MdMenu />}
            </div>
          </div>
          <ul className="md:flex hidden  items-center gap- ">
            <NavLinks />
          </ul>
        </div>

        <div className="md:block hidden">
          <div className=" text-gray-800 py-1 flex items-center gap-9 justify-around ">
            <div
              className={`flex flex-row-reverse   items-center ${
                search ? "rounded-2xl border  py-1 px-3" : " "
              } `}
            >
              <div
                className="cursor-pointer duration-500 mt text-gray-900"
                onClick={() => setSearch(!search)}
                size={20}
              >
                {!search ? <BsSearch /> : <MdClose />}
              </div>

              <NavInput type="text" search={search} />
            </div>
            <BsPersonCircle className="cursor-pointer " size={20} />
            <Link to="/Panier" className="flex items-center">
              <span className="mr-">
                <ShoppingCartIcon className="w-6 h-6" />
              </span>
            </Link>
          </div>
        </div>

        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white fixed w-full text-2xl h-[80%] top-0 overflow-y-auto bottom-0 py-16 flex flex-col items-center justify-center opacity- pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <NavLinks />
          <div className="py-5">
            <div
              className={` text-gray-800 flex items-center ${
                search ? "flex-col-reverse" : ""
              } gap-4 justify-around `}
            >
              <div
                className={`flex flex-row-reverse   items-center ${
                  search ? "rounded-2xl border  py-1 px-3" : " "
                } `}
              >
                <div
                  className="cursor-pointer duration-500 mt text-gray-900"
                  onClick={() => setSearch(!search)}
                  size={20}
                >
                  {!search ? <BsSearch /> : <MdClose />}
                </div>

                <NavInput type="text" search={search} />
              </div>
              <div className="flex gap-6">
                <BsPersonCircle className="cursor-pointer" size={20} />
                <Link to="/Panier" className="flex items-center">
                  <span className="mr-2">
                    <ShoppingCartIcon className="w-6 h-6" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
