import React from "react";

const UniteCard = ({children, bgColor}) => {
  return (
    <div className={`${bgColor} text-black pl-5 py-4 rounded-lg col-span-3 h-28`}>{children}</div>
  );
};

export default UniteCard;
