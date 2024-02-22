import { Link, useParams } from "react-router-dom";
import ComponentButton from "../button/ComponentButton";
import { ProduitContext } from "./ProduitContext";
import { useContext } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import Loader from "../../components/loader/loader";
import { usePanier } from "../../utils/contexte/PanierContext";

const DetailsCard = () => {
  const { _id } = useParams();
  const { produits } = useContext(ProduitContext);
  const produit = produits.find((item) => {
    return item._id === _id;
  });
  const { addToCart } = usePanier();
  const handleAddToCart = () => {
    addToCart(produit);
  };

  return (
    <div className="">
      {produit !== undefined ? (
        <section className="overflow-hidden py-4 mx-auto">
          <Link to="/" className="w-10 h-10">
            <IoMdArrowRoundBack className="mt-20 ml-10 text-black bg-gray-300 shadow-xl text-xl w-6 h-6" />
          </Link>

          <div key={_id}>
            <div className="max-w-6xl px-4 py-4 lg:py-8 md:px-6 shadow-xl mx-auto">
              <div className="flex flex-wrap mx-4">
                <div className="w-full px-4 md:w-1/2 ">
                  <div className=" top-0 z-50 overflow-hidden ">
                    <div className="relative mb-6 lg:mb-10 lg:h-full ">
                      <img
                        src={produit.imageUrl}
                        alt=""
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
                        <h2 className="w-16 text-xl font-bold my-2">Prix:</h2>
                        <span>{produit.prix} Fcfa</span>
                      </div>
                      <div>
                        <h3 className="text-sm font-bold ">
                          Couleur du produit
                        </h3>
                        <div className="flex gap-7 my-3">
                          <button
                            type="button"
                            className="bg-gray-600 w-8 h-8 rounded-full"
                          />
                          <button
                            type="button"
                            className="bg-gray-600 w-8 h-8 rounded-full"
                          />
                          <button
                            type="button"
                            className="bg-gray-600 w-8 h-8 rounded-full"
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-sm font-bold mt-2">
                          Taille du produit
                        </h3>
                        <div className="flex gap-7 mt-3">
                          <button type="button" className=" w-8 h-8">
                            XS
                          </button>
                          <button type="button" className=" w-8 h-8">
                            S
                          </button>
                          <button type="button" className=" w-8 h-8">
                            M
                          </button>
                          <button type="button" className=" w-8 h-8">
                            L
                          </button>
                          <button type="button" className=" w-8 h-8">
                            XL
                          </button>
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
