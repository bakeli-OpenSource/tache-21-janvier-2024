import React from "react";
import Option from "./Option";

const Select = ({ Title, contenus }) => {
  return (
    <fieldset className="border  border-yellow-800 w-52 text-sm/[16px] rounded-lg">
        <legend className="mx-2 px-2 ">{Title}</legend>
      <select
        id="filter"
        name="filter"
        className="w-48 mt- bg-inherit px-3 py-3 outline-0"
      >
        <Option contenus={contenus} />
      </select>
    </fieldset>
  );
};

export default Select;
