import React from "react";
import ComponentButton from "../button/ComponentButton";
const Header = () => {
  return (
    <header
      className="bg-Hero bg-cover h-screen md:bg-top bg-center px-5"
      style={{
        backgroundImage: `url('https://feugjay.com/wp-content/uploads/2020/11/shopping-banniere.jpg')`,
      }}
    >
      <div className="flex  flex-col justify-end  px-4 items-start h-5/6">
        {/* <h2 className="text-white text-2xl font-medium ">hlKSKdjks</h2> */}
        <h2 className=" text-2xl text-white ">
          Elevate Your style <br/>
          Timeless Fashion, Choice
        </h2>
        <div className="text-xl">
        <ComponentButton className='bg-white text-black w-40 h-12 my-5 text-xl tracking-widest rounded-lg' texte='Shop Now'/>
        </div>
      </div>
    </header>
  );
};

export default Header;
