import React, { useState, useRef, useEffect, useContext } from "react";
import { BsSearch, BsX } from "react-icons/bs";
import useProduits from "../utils/hooks/useProduits";
import CardProduit from "./cards/CardProduit";
import { useNavigate } from "react-router-dom";

const SearchInput = ({ onClose }) => {
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const { produits } = useProduits();
  const [searchText, setSearchText] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const clearSearch = () => {
    setSearchText("");
  };

  useEffect(() => {
    setShowInput(true);
  }, []);

  const handleProductClick = (productId) => {
    setSelectedProductId(productId);
    onClose();
  };

  const filteredProduit = produits.filter(
    (produit) =>
      produit.nom.toLowerCase().includes(searchText.toLowerCase()) ||
      produit.categorie.toLowerCase().includes(searchText.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target) &&
        selectedProductId
      ) {
        navigate(`/details/${selectedProductId}`);
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedProductId, onClose, navigate]);

  return (
    <>
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
      <div
        className={`absolute w-11/12 mx-auto z-50 top-24 left-1/2 transform -translate-x-1/2 rounded bg-white shadow-lg p-4 ${
          searchText.trim() !== ""
            ? "visible max-h-96 overflow-y-auto"
            : "invisible"
        } transition-all duration-300 ease-in-out`}
      >
        <div className="grid px- md:ps- md:pe- z-50 grid-cols-1 mt- sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px] mx-auto md:max-w-none md:mx-0">
          {filteredProduit.length > 0
            ? searchText !== ""
              ? filteredProduit.map((produit) => (
                  <CardProduit
                    produit={produit}
                    key={produit._id}
                    onClick={() => handleProductClick(produit._id)}
                  />
                ))
              : ""
            : `Aucun resultat pour ${searchText}`}
        </div>
      </div>
      <div
        className="opacity-55 fixed inset-0 z-40 bg-black"
        onClick={() => {
          onClose();
          setSearchText(""); 
        }}
      ></div>
    </>
  );
};

export default SearchInput;
