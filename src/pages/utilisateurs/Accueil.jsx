import React from "react";
import Cards from "../../usersComponents/cards/Cards";
import Footer from "../../usersComponents/footer/Footer";
import Header from "../../usersComponents/headerUserComponent/Header";
import Navbar from "./NavbarUtilisateut/Navbar/Navbar";

export default function Accueil() {
  return (
    <div>
      <Navbar />
      <Header />

      <div className="container px-9 mx-auto z-0 flex flex-col items-center justify-center ">
        <div
          className="container  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 items-center mx-auto gap-[20px]
  max-w-sm  md:max-w-none md:mx-auto py-16 justify-center content-center"
        >
          <div className="w-full  mb-4">
            <Cards />
          </div>
          <div className="w-full mb-4">
            <Cards />
          </div>
          <div className="w-full  mb-4">
            <Cards />
          </div>
          <div className="w-full  mb-4">
            <Cards />
          </div>
          <div className="w-full mb-4">
            <Cards />
          </div>
          <div className="w-full mb-4">
            <Cards />
          </div>
          <div className="w-full mb-4">
            <Cards />
          </div>
        </div>
      </div>
        <Footer />
    </div>
  );
}
