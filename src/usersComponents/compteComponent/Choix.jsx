import React from 'react'
import { Link } from "react-router-dom";

const Choix = ({titre, texte, texte1, textButton, icon}) => {
  return (
    <div className="py-5 flex flex-col items-center justify-center">
    <div className="mx-auto h-20 w-20 flex items-center justify-center   p-2 my-7 bg-slate-800  rounded-full">
      {icon}
    </div>
    <h3 className="text-center font-medium mb-3">
      {titre}
    </h3>
    <p className="text-center text-sm ">
      {texte}
    </p>
    <p className="text-center text-sm mb-4">
      {texte1}
    </p>
    <Link
      to="/"
      className="bg-slate-800 text-sm uppercase text-white px-4 py-3 my-5 mx-auto rounded"
    >
      {textButton}
    </Link>
  </div>
  )
}

export default Choix
