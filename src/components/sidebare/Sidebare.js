import React from "react";
import SidebareLink from "./SidebareLink";
import { menus } from "./sidebareData";
import useSidebare from "../../utils/hooks/useSidebare";

const Sidebare = () => {
  const { open, smallScreen, screenSize } = useSidebare();

  return (
    <>
      {open && smallScreen <= 767 ? (
        screenSize()
      ) : (
        <div
          className={`bg-[#fff] w-52  ${
            !open && smallScreen <= 767 ? "opacity-95 " : ""
          }  fixed min-h-screen ${
            open ? "" : "md:w-16"
          } duration-500 text-gray-800 px-4`}
        >
          <SidebareLink menus={menus} open={open} />
        </div>
      )}
    </>
  );
};

export default Sidebare;
