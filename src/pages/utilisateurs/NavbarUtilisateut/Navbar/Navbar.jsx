import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import { MdMenu, MdClose } from "react-icons/md";
import { BsPersonCircle, BsSearch } from "react-icons/bs";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import NavInput from "../NavInput";
import Dropdown from "../../../../usersComponents/userConnexion/Dropdown";
import { usePanier } from "../../../../utils/contexte/PanierContext";
import icone from "../../../../assets/images/icone.jpg";

const Navbar = ({ className }) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const { notificationCount } = usePanier();

  return (
    <nav className={className}>
      <div className="flex items-center justify-between px-8 py-3">
        <div className="flex items-center justify-between w-full gap-8 md:w-auto ">
          <div className="z-50 flex justify-between w-full md:w-auto">
            <Link to={"/"} className="md:cursor-pointer w-[60px] h-[60px]">
              <img src={icone} className="w-full h-full" />
            </Link>
            <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
              {open ? <MdClose /> : <MdMenu />}
            </div>
          </div>
          <ul className="items-center hidden md:flex">
            <NavLinks />
          </ul>
        </div>

        <div className="md:block hidden">
          <div className=" text-gray-800 py-1 flex items-center gap-9 justify-around ">
            <div
              className={`flex flex-row-reverse m-0 p-0 duration-500   items-center ${
                search
                  ? "rounded-full border transition ease-in-out delay-150 border-gray-300 px-3 py-1"
                  : "translate-x-1"
              }`}
            >
              <div
                className="text-gray-900 duration-500 cursor-pointer mt"
                onClick={() => setSearch(!search)}
              >
                {!search ? <BsSearch /> : <MdClose />}
              </div>

              <NavInput type="text" search={search} />
            </div>
            <Dropdown />
            <Link to="/Panier" className="relative flex items-center group">
              <span className="mr-2">
                <ShoppingCartIcon className="w-6 h-6" />
              </span>

              <span className="absolute px-2 py-1 text-xs text-white bg-red-500 rounded-full -top-2 -right-2">
                {notificationCount}
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
