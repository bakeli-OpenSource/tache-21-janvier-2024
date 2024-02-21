import React from "react";
import bgImage from "../../assets/images/bgImage.png";

import Form from "./Form";
import Footer from "../footer/Footer";

const UserConnexion = () => {
  return (
    <div>
      <div className="ps-9 md:ps-0 pe-9 py-9 mt-[30px] flex justify-between flex-row-reverse py-auto place-items-center gap-9">
      <Form />
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
        className="bg-gray-800 bg-bottom bg-no-repeat w-2/4 hidden md:block h-[503px] rounded-e-[80px] p-6 text-center text-"
      ></div>
    </div>
    <Footer />
    </div>
  );
};

export default UserConnexion;
