import React from "react";
import image from "../../../assets/images/error.png";
import { Link } from "react-router-dom";

const ErreurPage = () => {
  return (
    <div className="mt-[70px] px-9 py-9  flex flex-col items-center justify-center">
      <div className="flex flex-col-reverse gap-5 items-center  justify-center w-full">
        <div>
          <h1 className="font-bold mb-5">Page non trouvée</h1>
          <Link
            to="/"
            className="px-3 py-2 bg-[#e24426] text-gray-200 texte-center shadow rounded mt-5"
          >
            RETOUR À L'ACCUEIL
          </Link>
        </div>
        <div className="">
          {" "}
          <img src={image} alt="image_error" className="" />
        </div>
      </div>
    </div>
  );
};

export default ErreurPage;
