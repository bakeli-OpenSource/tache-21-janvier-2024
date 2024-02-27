import React from "react";
import Option from "./Option";
import useProduits from "../../utils/hooks/useProduits";

const Select = ({ Title, contenus, handleSelectChange }) => {
  return (
    <fieldset className="border  border-yellow-800 w-52 text-sm/[16px] rounded-lg">
        <legend className="mx-2 px-2 ">{Title}</legend>
      <select onChange={handleSelectChange} defaultValue="" 
        className="w-48 mt- bg-inherit px-3 py-2 outline-0"
      >
        {/* <option value="" disabled>Sélectionnez {Title}</option> */}
        {Title === "Catégorie" ?
          <option value="">All {Title}</option>
          : null
        }
        <Option contenus={contenus} />
      </select>
    </fieldset>
  );
};

export default Select;
