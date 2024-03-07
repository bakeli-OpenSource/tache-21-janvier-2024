import React from "react";

const ResultatsRecherche = ({ searchText, children }) => {
  return (
    <div
      className={`absolute w-11/12 mx-auto z-50 top-24 left-1/2 transform -translate-x-1/2 rounded bg-white shadow-lg p-4 ${
        searchText.trim() !== ""
          ? "visible max-h-96 overflow-y-auto"
          : "invisible"
      } transition-all duration-300 ease-in-out`}
    >
      {children}
    </div>
  );
};

export default ResultatsRecherche;
