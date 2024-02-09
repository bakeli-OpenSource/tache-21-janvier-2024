import React from "react";
import Cards from "../../usersComponents/cards/Cards";
import Footer from "../../usersComponents/footer/Footer";
import NavHeader from "./NavbarUtilisateut/Navbar";
import Header from "../../usersComponents/headerUserComponent/Header";

export default function Accueil() {
  return (
    <div>
      <NavHeader />
      <Header />

      <div className="container z-0 flex flex-col items-center justify-center mx-auto">
        <div
          className="container z-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 items-center mx-auto gap-[20px]
  max-w-sm  md:max-w-none md:mx-auto py-16 justify-center content-center"
        >
          <div className="w-full mb-4">
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
