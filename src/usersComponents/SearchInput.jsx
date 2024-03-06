import React, { useState, useRef, useEffect } from "react";

import useProduits from "../utils/hooks/useProduits";
import CardProduit from "./cards/CardProduit";
import { useNavigate } from "react-router-dom";
import InputRechercheComponent from "./InputRechercheCompoment/InputRechercheComponent";
import ResultatsRecherche from "./InputRechercheCompoment/ResultatsRecherche";

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
      <InputRechercheComponent
        inputRef={inputRef}
        showInput={showInput}
        searchText={searchText}
        setSearchText={setSearchText}
        clearSearch={clearSearch}
      />

      <ResultatsRecherche
        searchText={searchText}
        children={
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
        }
      />

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
