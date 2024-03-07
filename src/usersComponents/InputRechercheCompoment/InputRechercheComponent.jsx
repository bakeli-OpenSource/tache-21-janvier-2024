import React from 'react'
import { BsSearch, BsX } from "react-icons/bs";

const InputRechercheComponent = ({inputRef, showInput, searchText, setSearchText, clearSearch}) => {
  return (
    <div
        ref={inputRef}
        className={`absolute w-11/12 rounded mx-auto z-50 top-3 left-1/2 transform -translate-x-1/2 bg-white shadow-lg p-4 ${
          showInput
            ? "translate-y-0 transition-transform duration-300 ease-in-out"
            : "translate-y-full duration-300 ease-in-out"
        }`}
      >
        <div className="flex items-center hover:border-blue-500 focus:border-blue-500 active:border-blue-500 justify-center gap-2 border-2 rounded p-2">
          <BsSearch />
          <input
            type="text"
            placeholder="Rechercher..."
            className="w-full outline-0"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          {searchText && (
            <BsX className="cursor-pointer" onClick={clearSearch} />
          )}
        </div>
      </div>
  )
}

export default InputRechercheComponent
