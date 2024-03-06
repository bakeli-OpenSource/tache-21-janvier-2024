import {useNavigate, useParams } from "react-router-dom";
import ComponentButton from "../button/ComponentButton";
import { ProduitContext } from "./ProduitContext";
import { useContext } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import Loader from "../../components/loader/loader";
import { usePanier } from "../../utils/contexte/PanierContext";
import useGlobal from "../../utils/hooks/useGlobal";

const DetailsCard = () => {
  const { _id } = useParams();
  const navigate = useNavigate()
  const { produits } = useContext(ProduitContext);
  const { setDropdown } = useGlobal();
  const produit = produits.find((item) => {
    return item._id === _id;
  });

  // const {promo, prix} = produit

  // console.log(promo);

  const pagePrecedente = () => {
    navigate(-1);
  };
  
  const { addToCart } = usePanier();
  // const handleAddToCart = () => {
  //   addToCart(produit);
  // };

  // const produitCourant = produits.find((item) => item._id === _id);
  const reduction = produit ? produit?.promo : produit?.promo ? produit?.promo : 0;
  const prixAAjouter = Math.floor(produit?.prix - produit?.prix * (reduction / 100));
  const handleAddToCart = () => {
    const produitAAjouter = { ...produit, prix: prixAAjouter };
    addToCart(produitAAjouter);
  };



  return (
    <div onClick={() => setDropdown(false)} className="">
      {produit !== undefined ? (
        <section className="overflow-hidden py-4 mx-auto">
          <div  className="w-10 h-10">
            <IoMdArrowRoundBack onClick={pagePrecedente} className="mt-20 ml-10 text-black  shadow-xl text-xl w-6 h-6" />
          </div>

          <div key={_id}>
            <div className="max-w-6xl px-4 py-4 lg:py-8 md:px-6 shadow-xl mx-auto">
              <div className="flex flex-wrap mx-4">
                <div className="w-full px-4 md:w-1/2 ">
                  <div className=" top-0 z-50 overflow-hidden ">
                    <div className="relative mb-6 lg:mb-10 lg:h-full ">
                      <img
                        alt="Mon produit"
                        src={produit.imageUrl}
                        className="object-cover w-full lg:h-full "
                      />
                    </div>
                    <div className="flex-wrap hidden md:flex "></div>
                  </div>
                </div>
                <div className="w-full px-4 md:w-1/2 h-screen">
                  <div className="lg:pl-20">
                    <div className="mb-8 ">
                      <h2 className="max-w-xl mt-2 text-2xl font-bold  md:text-4xl">
                        {produit.nom}
                      </h2>
                      <div className="flex items-center mb-6 my-2">
                        <p className="">{produit.titre}</p>
                      </div>
                      <p className="max-w-md mb-8 text-gray-700 ">
                        {produit.description}
                      </p>
                      <div className="mb-8 text-4xl font-bold text-gray-700 flex ">
                            {/* <h2 className="w-14 text-xl font-bold my-2">Prix:</h2>
                            <span>{prixAAjouter.toLocaleString("DE-de")} Fcfa</span> */}
                        <h2 className="w-14 text-xl font-bold my-2">Prix:</h2>
                            {reduction ? (
                          <div className="flex items-end justify-between md:justify-start ">
                                <span className="py-1 text-xl md:text-[18px] text-red-600 my-2">
                                  {prixAAjouter.toLocaleString("DE-de")} FCFA
                                </span>
                                {/* &nbsp; */}
                                <span className="line-through text-lg md:text-[10px] text-gray-500">
                                  {produit.prix.toLocaleString("DE-de")} FCFA
                                </span>
                          </div>
                          
                              ) : (
                          <div className="flex items-end justify-between md:justify-start ">
                              <span className="py-1 text-xl md:text-[18px] py-1 font-medium text-sm text-gray-900 my-2">
                                {produit.prix.toLocaleString("DE-de")} FCFA
                              </span>
                          </div>)}
                      </div>
                      <div>
                        <h3 className="text-sm font-bold ">
                          Couleur du produit
                        </h3>
                        <div className="flex gap-7 my-3">
                          {produit.couleur}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-sm font-bold mt-2">
                          Taille du produit
                        </h3>
                        <div className="flex gap-7 mt-3">
                          {produit.taille}
                        </div>
                      </div>
                      <ComponentButton
                        onClick={handleAddToCart}
                        className="bg-slate-800 text-white w-full px-3 py-2 my-5 text-sm tracking-widest rounded"
                        texte="Ajouter au panier"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default DetailsCard;


