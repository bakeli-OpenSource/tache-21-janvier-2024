import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ProduitIndisponiblePage = () => {
  const navigate = useNavigate();

  const handleRetour = () => {
    navigate(-1);
  };

  return (
    <div className="text-center mt-8 ">
      <p className="text-gray-600 mb-4">
        Désolé pour le désagrément; Le produit n'est plus disponible.
      </p>
      <p>
        <Link to="/boutique" className="text-blue-300 cursor-pointer">
          Vous pouvez explorer nos autres produits similaires{" "}
        </Link>{" "}
        ou{" "}
        <span onClick={handleRetour} className="text-blue-300 cursor-pointer">
          retourner à la page précédente
        </span>
        .
      </p>
    </div>
  );
};

export default ProduitIndisponiblePage;
