import React from "react";
import ComponentButton from "../button/ComponentButton";
import banniere from "../../../src/assets/images/bg.jpg";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header
      className="bg-Hero bg-cover h-screen md:bg-top bg- bg-right px-5"
      style={{
        backgroundImage: `url(${banniere})`,
      }}
    >
      <div className="flex  flex-col justify-end  px-4 items-start h-5/6">
        {/* <h2 className="text-white text-2xl font-medium ">hlKSKdjks</h2> */}
        <h2 className=" text-2xl text-white ">
          Elevate Your style <br/>
          Timeless Fashion, Choice
        </h2>
        <div className="text-xl">
          <Link to={"/panier"} >
          <ComponentButton className='bg-white text-black w-40 h-12 my-5 text-xl tracking-widest rounded-lg' texte='Shop Now'/>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
