import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import useCommandes from "../../../utils/hooks/useCommandes";

const OrderDetail = () => {
  const { _id } = useParams();
  const { commandes } = useCommandes();
  const commande = commandes.find((item) => item._id === _id);

  return (
    <>
      <div className="">
        <h1 className="border flex items-center gap-4 mb-4 text-md font-medium border-t-0 border-s-0 border-e-0 pb-2 ">
          <Link to="/compte/commandes" className="">
            <FaArrowLeft className=" text-black  " />
          </Link>{" "}
          Détails de votre commandes
        </h1>
        <h2 className="text- font-bold">
          Commande N°{commande?.numeroCommande}
        </h2>
        {commande?.produit?.map((produit, index) => (
          <>
            <div className="flex text-sm sm:text-md justify-between gap-7  mt-5 p-4 border rounded">
              <div className="flex gap-3.5 bg-  w-auto sm:w-56">
                <div className="h-16 w-16 ">
                  <img
                    src={commande.imageUrl[index]}
                    alt={commande.imageUrl[index]}
                    className="w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="font-medium">{produit}</h3>
                </div>
              </div>
              <div className="list-disc pl-6">
                <div>
                  <p className="mt- flex flex-col font-medium">
                    Quantité:{" "}
                    <span className="text-center mt-2">
                      {commande.quantite[index]}
                    </span>
                  </p>
                </div>
              </div>

              <p className="mt- flex flex-col text-end font-medium">
                Prix:{" "}
                <span className="text-center mt-2">
                  {commande.prixProduit[index].toLocaleString("fr-FR")} fcfa
                </span>
              </p>
            </div>
          </>
        ))}
        <div className="w-full md:w-2/4 mx-end flex flex-col items-start justify-between gap-3  mt- p-4 border rounded">
          <p className="flex w-full justify-between items-center">
            Livraison:{" "}
            <span>{commande?.prixLivraison.toLocaleString("fr-FR")} FCFA</span>
          </p>
          <p className="uppercase font-medium flex w-full justify-between items-center">
            {" "}
            total:{" "}
            <span>{commande?.prixTotal.toLocaleString("fr-FR")} FCFA</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default OrderDetail;
