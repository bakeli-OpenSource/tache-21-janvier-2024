import React from "react";
import image from "../../../assets/images/error.png";
import { useNavigate } from "react-router-dom";

const ErreurPage = () => {
  const navigate = useNavigate()
  const pagePrecedente = () => {
    navigate(-1)
  }
  return (
    <div className="mt-[70px] px-9 py-9  flex flex-col items-center justify-center">
      <div className="flex flex-col-reverse gap-5 items-center  justify-center w-full">
        <div>
          <h1 className="font-bold mb-5">OUPS, PAGE INTROUVABLE</h1>
          <button
            onClick={pagePrecedente}
            className="px-3 py-2 bg-gray-800 text-gray-200 texte-center shadow rounded mt-5"
          >
            RETOUR À LA PAGE PRECEDENTE
          </button>
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
