import React from "react";
import { FaHeart } from "react-icons/fa";
import Choix from "../../../usersComponents/compteComponent/Choix";

const FavorisPage = () => {
  return (
    <div>
      <h1 className="border border-t-0 border-s-0 border-e-0 pb-2 ">
        Votre liste d'envies
      </h1>
      <Choix
        icon={<FaHeart size={30} className="mx-auto text-white  bg-inherit" />}
        titre="Votre liste d'envies est vide !"
        texte="Vous avez trouvé quelque chose que vous aimez ? Tapez sur l'icône en forme"
        texte1="de cœur à côté de l'article pour l'ajouter à votre liste d'envies!"
        textButton="Continuer vos achats"
      />
    </div>
  );
};

export default FavorisPage;
