import React from "react";

const Header = () => {
  return (
    <header
      className="bg-Hero bg-cover h-screen md:bg-top bg-center px-5"
      style={{
        backgroundImage: `url('https://feugjay.com/wp-content/uploads/2020/11/shopping-banniere.jpg')`,
      }}
    >
      <div className="flex  flex-col justify-end text-center px-4 items-start h-5/6">
        {/* <h2 className="text-white text-2xl font-medium ">hlKSKdjks</h2> */}
        <h3 className=" text-md text-white py-2">
          blsjrwj lijljeo ;k;iyuuu ufufuf vhnhh  yfuu
        </h3>
        <div className="text-xl">
          <button className="bg-white text-black text-sm px-6 py-2 ">
            Shop Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;