import React, { useState, useEffect } from "react";
import ComponentButton from "../button/ComponentButton";
import banniere1 from "../../../src/assets/images/bg.jpg";
import banniere2 from "../../../src/assets/images/banner-3.png";
import banniere3 from "../../../src/assets/images/main-banner.jpg";

import { Link } from "react-router-dom";


const Header = () => {
  const [backgroundImage, setBackgroundImage] = useState(banniere1);
  const banners = [banniere1, banniere2, banniere3];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    setBackgroundImage(banners[index])
  }, [index])
  return (
    <header
      className="bg-Hero bg-cover h-screen md:bg-top bg-right px-5 transition-opacity duration-1000"
      style={{
        backgroundImage: `url(${backgroundImage})` ,

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
          <ComponentButton className='bg-white text-black w-auto px-3 py-2 my-5 text-xl tracking-widest rounded' texte='Shop Now'/>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;


