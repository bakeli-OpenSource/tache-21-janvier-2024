import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineDelete } from "react-icons/md";
import { usePanier } from "../../utils/contexte/PanierContext";

const FavorisComponent = ({ item, listesEnvies, setListesEnvies }) => {
  const { addToCart } = usePanier();
  const { _id, imageUrl, prix, promo, nom } = item;
  const handleDelete = (id) => {
    const deleteFavoris = listesEnvies.filter(
      (listeEnvie) => listeEnvie._id !== id
    );
    setListesEnvies(deleteFavoris);
    localStorage.setItem("produitAimer", JSON.stringify(deleteFavoris));
  };

  const produitCourant = listesEnvies.find((item) => item._id === _id);
  const reduction = produitCourant ? produitCourant.promo : promo ? promo : 0;
  const prixAAjouter = Math.floor(prix - prix * (reduction / 100));
  const handleAddToCart = () => {
    const produitAAjouter = { ...item, prix: prixAAjouter };
    addToCart(produitAAjouter);
  };
  return (
    <div
      className="flex flex-col md:flex-row shadow-lg rounded-md bg-white justify-between border p-4 py- mt-5 gap-"
      key={item?._id}
    >
      <div className="flex flex-col sm:flex-row items- gap-4">
        <div className="h-24 w-24">
          <img src={item?.imageUrl} alt={item?.nom} className="w-full h-full" />
        </div>
        <div className="flex flex-col justify-between  items-stretch h-full">
          <p>{item?.titre} </p>
          <div>
            {/* <p className=" mb-1 bg">
              {item?.prix} FCFA{" "}
              <span
                className={`font-medium bg-red-200 rounded   ${
                  item?.promo === 0 ? "hidden" : "inline"
                } px-1 py- text-red-500`}
              >
                -{item?.promo}%
              </span>
            </p> */}
            {reduction ? (
              <div className="flex items-end justify-between md:justify-start ">
                <span className="py-1 text-xl md:text-[16px] text-red-600">
                  {prixAAjouter} FCFA
                </span>
                &nbsp;
                <span className="line-through text-lg md:text-[10px] text-gray-500">
                  {prix} FCFA
                </span>
              </div>
            ) : (
              <span className=" py-1 font-medium text-sm text-gray-900">
                {prix} FCFA
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-col  gap-4 justify-between h-24">
        <Link
          to={`/panier`}
          onClick={handleAddToCart}
          className="px-2 my- uppercase py-2 rounded text-white text-center bg-slate-800 "
        >
          Acheter
        </Link>
        <button
          onClick={() => handleDelete(item?._id)}
          className="px-2 my- flex gap-2 items-center py-1 uppercase rounded   text-red-500 hover:bg-red-100"
        >
          <MdOutlineDelete size={20} /> supprimer
        </button>
      </div>
    </div>
  );
};

export default FavorisComponent;
