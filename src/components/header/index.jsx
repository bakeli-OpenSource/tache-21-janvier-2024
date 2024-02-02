import React from "react";
import { CiMenuBurger } from "react-icons/ci";
import useSidebare from "../../utils/hooks/useSidebare";

const Header = () => {
  const { open, toggleSidebare } = useSidebare();
  return (
    <header className="bg-gray-800 text-gray-100 w-100 px-4 py-3">
      <CiMenuBurger
        className="cursor-pointer"
        size={26}
        onClick={() => toggleSidebare(open)}
      />
    </header>
  );
};

export default Header;
