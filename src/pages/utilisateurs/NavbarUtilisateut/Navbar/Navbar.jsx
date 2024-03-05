import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import { MdMenu, MdClose } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import Dropdown from "../../../../usersComponents/userConnexion/Dropdown";
import { usePanier } from "../../../../utils/contexte/PanierContext";
import icone from "../../../../assets/images/icone.jpg";
import useGlobal from "../../../../utils/hooks/useGlobal";
import SearchInput from "../../../../usersComponents/SearchInput";

const Navbar = ({ className }) => {
  const [open, setOpen] = useState(false);
  const { notificationCount } = usePanier();
  const { setDropdown } = useGlobal();

  const fermer = () => {
    setOpen(false);
    setDropdown(false);
  };

  const [searchVisible, setSearchVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  return (
    <nav className={className}>
      <div className="flex items-center h-full justify-between px-3 pe-5 md:pe-8 md:px-8 py-">
        <div className="flex items-center justify-between w-full gap-3 md:w-auto ">
          <div className="z-30 flex flex-row-reverse justify-between items-center w-full md:w-auto">
            <div className="md:hidden flex  gap-4 items-center justify-center">
              <div className="cursor-pointer mr-3" onClick={toggleSearch}>
                <BsSearch />
              </div>
              {searchVisible && <SearchInput onClose={toggleSearch} />}
              <Dropdown onClick={() => setOpen(false)} />
              <Link to="/Panier" className="relative flex items-center group">
                <span className="mr-2" onClick={fermer}>
                  <ShoppingCartIcon className="w-6 h-6" />
                </span>
                <span className="absolute px-2 py-1 text-xs text-white bg-red-500 rounded-full -top-2 -right-2">
                  {notificationCount}
                </span>
              </Link>
            </div>
            <Link to={"/"} className="cursor-pointer w-[60px] h-[60px]">
              <img src={icone} className="w-full h-full" onClick={fermer} />
            </Link>
            <div
              onClick={() => setDropdown(false)}
              className="text-3xl md:hidden flex   gap-5 items-center justify-center"
            >
              {open ? (
                <MdClose onClick={() => setOpen(!open)} />
              ) : (
                <MdMenu onClick={() => setOpen(!open)} />
              )}
            </div>
          </div>
          <ul className="items-center hidden md:flex">
            <NavLinks handleOpen={() => setDropdown(false)} />
          </ul>
        </div>

        <div className="md:block hidden">
          <div className=" text-gray-800 py-1 flex items-center gap-9 justify-around ">
            <div className="cursor-pointer" onClick={toggleSearch}>
              <BsSearch />
            </div>
            {searchVisible && <SearchInput onClose={toggleSearch} />}

            <Dropdown />
            <Link
              to="/Panier"
              onClick={fermer}
              className="relative flex items-center group"
            >
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
        md:hidden bg-white fixed w-full px-9 text-2xl h-[60%] top-0 overflow-y-auto bottom-0 py-16 flex flex-col-reverse items-center justify-center opacity- pl-
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <NavLinks handleOpen={fermer} />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
