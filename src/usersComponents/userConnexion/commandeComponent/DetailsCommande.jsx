import { commandes } from "../../../pages/utilisateurs/NavbarUtilisateut/Navbar/MyLinks";
import useGlobal from "../../../utils/hooks/useGlobal";
import image from "../../../assets/images/image6.jpg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProduitsContext } from "../../../utils/contexte/ProduitsContext";
import { usePanier } from "../../../utils/contexte/PanierContext";

const OrderDetail = ({ order }) => {
  // const {commandes} = useGlobal()
  const { addToCart } = usePanier();
  const { produits } = useContext(ProduitsContext);
 


  const handleAddToCart = () => {
    addToCart(produits);
  };

  return (
    <>
      <div className="">
        <h1 className="border font-medium border-t-0 border-s-0 border-e-0 pb-2 ">
          Détails de la commandes
        </h1>
        {commandes.map((order) => (
          <div className=" ">
            <div className="border-2 pb-4 border-t-0 border-s-0 border-e-0">
              <h2 className="text-s, font-meduim  mb-2">
                Commande n°{order.id}
              </h2>
              <p className="text-gray-500">1 Arcticle </p>
              <p className="text-gray-500">Effectuee le 12-24-2024</p>
              <p className="text-gray-500">Total 2 098 FCFA</p>
            </div>
            <h3 className="text-md uppercase font-meduim mt-4">
              articles dans votre commandes:
            </h3>
            <div className="flex items-center justify-between gap-7  mt-5 p-4 border rounded">
              <img src={image} alt={order?.produit} className="w-32 h-auto" />
              <div className="list-disc pl-6">
                {commandes?.map((product) => (
                  <div key={product.idProduit}>
                    <p className="mt-">{product.produit}</p>
                    <p className="mt-">Variation: 1</p>
                    <p className="mt-">Quantité: 2</p>
                    
                    <p className="mt- flex content-start">Total: {"2 990 FCFA"}</p>
                  </div>
                ))}
              </div>
              <button onClick={handleAddToCart} className="px-2 my-3 uppercase py-1 rounded text-white bg-slate-800">
                    commander  a nouveau 
                  </button>
            </div>

            {/* <p className="mt-4">Total: ${".total"}</p> */}
          </div>
        ))}
      </div>
    </>
  );
};

export default OrderDetail;
