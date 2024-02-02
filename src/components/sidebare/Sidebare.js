import React from "react";
import SidebareLink from "./SidebareLink";
import { menus } from "./sidebareData";
import useSidebare from "../../utils/hooks/useSidebare";

const Sidebare = () => {
  const { open,  smallScreen } = useSidebare();

  return (
    <>{ open && smallScreen <= 767 ? "" :  <div
      className={`bg-[#fff] fixed min-h-screen ${
        open ? "sm:w-52" : "w-16"
      } duration-500 text-gray-800 px-4`}
    >
      <SidebareLink menus={menus} open={open} />
    </div> }</>
  );
};

export default Sidebare;