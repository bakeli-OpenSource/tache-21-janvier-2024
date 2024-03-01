import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import { MdMenu, MdClose } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import NavInput from "../NavInput";
import Dropdown from "../../../../usersComponents/userConnexion/Dropdown";
import { usePanier } from "../../../../utils/contexte/PanierContext";
import icone from "../../../../assets/images/icone.jpg";

const Navbar = ({ className }) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const { notificationCount } = usePanier();

  const handleOpen = () => {
   setOpen(false)
  }

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className={className}>

      <div className="flex items-center h-full justify-between px-8 py-">
        <div className="flex items-center justify-between w-full gap-3 md:w-auto ">
          <div className="z-50 flex flex-row-reverse justify-between items-center w-full md:w-auto">
            <div className="md:hidden flex  gap-4 items-center justify-center">
              <Dropdown onClick={() => setOpen(false)} />
              <Link to="/Panier" className="relative flex items-center group">
                <span className="mr-2">
                  <ShoppingCartIcon className="w-6 h-6" />
                </span>
                <span className="absolute px-2 py-1 text-xs text-white bg-red-500 rounded-full -top-2 -right-2">
                  {notificationCount}
                </span>
              </Link>
            </div>
            <Link to={"/"} className="cursor-pointer w-[60px] h-[60px]">
              {/* <button onClick={toggleTheme} className="bg-white px-4 py-3">dark</button> */}
              <img src={icone} className="w-full h-full" onClick={() => setOpen(false)}/>.
            </Link>
            <div className="text-3xl md:hidden flex  gap-5 items-center justify-center">
              {open ? (
                <MdClose onClick={() => setOpen(!open)} />
              ) : (
                <MdMenu onClick={() => setOpen(!open)} />
              )}
            </div>
          </div>
          <ul className="items-center hidden md:flex">
            <NavLinks/>
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

              <span className="absolute px-2 py-1 text-xs text-white bg-red-500 rounded-full -top-3 -right-2">
                {notificationCount}
              </span>
            </Link>
          </div>
        </div>

        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white fixed w-full px-9 text-2xl h-[80%] top-0 overflow-y-auto bottom-0 py-16 flex flex-col-reverse items-center justify-center opacity- pl-
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <NavLinks handleOpen={handleOpen}/>
          <div className="py-5 w-full ">
            <div
              className={` text-gray-800  w-full flex items-center gap-4 justify-around `}
            >
              <div
                className={`flex  duration-500 w-full flex-row-reverse items-center border-2 px-9 gap-5 hover:border-blue-500 focus:border-blue-500 active:border-blue-500 py-3 rounded-full
             `}
              >
                <div className="text-gray-900 rounded duration-500 cursor-pointer mt">
                  <BsSearch />
                </div>
                <form className="w-full">
                  <input
                    type="search"
                    className="appearance-none py-auto w-full duration-500  transition ease-in-out delay-150  m-0  text-gray-700 pl-2  py-1  mb- leading-tight outline-none focus:bg-white"
                  />
                </form>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
