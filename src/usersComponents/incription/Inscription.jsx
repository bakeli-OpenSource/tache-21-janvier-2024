import React from "react";
import bgImage from "../../assets/images/bgImage.png";
import Form from "./Form";
import Footer from "../footer/Footer";

const Inscription = () => {
  return (
   <div>
     <div className="ps-9 md:ps-0 pe-9 py-6 pt-10 mt-[50px] flex justify-between flex-row-reverse place-items-center gap-9">
      <Form />
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
        className="bg-gray-800 bg-bottom bg-no-repeat w-2/4 hidden md:block h-[503px] rounded-e-[80px] p-6 text-end text-"
      ></div>
    </div>
    <Footer />
   </div>
  );
};

export default Inscription;
