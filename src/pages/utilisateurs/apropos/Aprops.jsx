import React from "react";
import imagePropos from "../../../assets/images/bgImage.png";

const Aprops = () => {
  return (
    <div className="ps-9 md:ps-0 pe-9 py-4 mt-[40px] flex items-center gap-9 mb-9 px-9">
      <div
        style={{
          backgroundImage: `url(${imagePropos})`,
        }}
        className="bg-gray-800 bg-bottom bg-no-repeat w-2/4 hidden md:block h-[503px]  rounded-e-[80px] rounded-t-0 p-6 text-center text-"
      ></div>
      <div className="w-1/2 mt-6">
        <h1 className="font-medium mb-3 underline">Un petit résumé de notre boutique</h1>
        <div className="mb-4">
          <p className="mb-3">
            Bienvenue sur <span className="font-bold">Kaay-Solu</span> ! Nous sommes une équipe
            passionnée qui croit fermement en la puissance du shopping en ligne pour offrir 
            commodité, qualité et variété à nos clients. Notre mission est de fournir une 
            expérience d'achat exceptionnelle en proposant une sélection soigneusement choisie de produits
            allant des dernières tendances aux classiques intemporels.
          </p>
          <p>
            Chez <span className="font-bold">Kaay-Solu</span>, nous mettons un point d'honneur à
            offrir un service clientèle de premier ordre. Notre équipe dévouée est toujours là 
            pour répondre à vos questions, vous aider à trouver le produit parfait et garantir 
            que votre expérience d'achat soit fluide et agréable.
          </p>
        </div>
        <div className="mb-4">
          <p className="mb-3">
            Nous nous engageons également à la durabilité et à l'éthique dans tout ce que nous
            faisons. Nous travaillons avec des fournisseurs qui partagent nos valeurs pour nous 
            assurer que nos produits sont fabriqués de manière responsable et respectueuse de 
            l'environnement.
          </p>
          <p>
            Explorez notre site pour découvrir notre gamme de produits exceptionnels et 
            laissez-nous vous aider à trouver exactement ce que vous cherchez. Merci de faire 
            partie de la communauté <span className="font-bold">Kaay-Solu</span> !
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aprops;
