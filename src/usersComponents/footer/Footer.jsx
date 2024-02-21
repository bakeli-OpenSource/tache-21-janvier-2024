import React from "react";
import Paragraphe from "./Paragraphe";
import ComponentButton from "../button/ComponentButton";
import { BsFacebook, BsTwitterX, BsInstagram, BsLinkedin } from "react-icons/bs";
const Footer = () => {
  const contact = ["+221 77 982 54 32", "kaysolu@gmail.com", "Dakar-bakeli"];
  
  const customers = [
    "Démarrer un retour",
    "Politique de retour",
    "FAQ",
    "Catalogues et courriers",
    "À propos des cadeaux de groupe",
  ];
  const company = [
    "A propos de nous",
    "Durabilité",
    "Carriére",
    "Politique de confidentialité",
    "Termes",
  ];
  return (
    <div className="flex justify-between mt-5 pb-3 flex-wrap w-full bg-gray-200 px-[35px]">
      <div className=" flex  gap-x-10 flex-wrap  ">
        <div>
          <h4 className="text-sm font-bold  tracking-widest opacity-65 my-6">
            CONTACTEZ-NOUS
          </h4>
          <Paragraphe className="cursor-pointer hover:underline" items={contact} />
        </div>
        <div>
          <h4 className="text-sm font-bold  tracking-widest opacity-65 my-6">
            CLIENTS
          </h4>
          <Paragraphe items={customers} />
        </div>
        <div>
          <h4 className="text-sm font-bold  tracking-widest opacity-65 my-6">
            ENTREPRISE
          </h4>
          <Paragraphe items={company} />
        </div>
      </div>
      <div className="">
        <h3 className="text-xl font-bold italic tracking-widest opacity-85 my-6">
          Recevez les dernières nouveautés de notre part
        </h3>
        <input
          placeholder="Enter your email adress"
          className="w-full border-0 outline-none text-xl "
        />
        <p className="text-sm py-1 font-semibold">
          En vous inscrivant, vous acceptez notre politique privée et nos
          conditions d'utilisation.
        </p>
        <ComponentButton
          className="bg-black text-white w-auto px-3 py-2 my-5 text-xl tracking-widest rounded"
          texte="Abonnez-vous"
        />
      </div>

        {/* Bottom du Footer */}
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-4 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[15px] leading-[27px]">
          Kaay-Solu Ⓒ 2024 Tous Droits Réservés.
        </p>
        <div className="flex flex-row md:mt-0 mt-6 gap-2">
          <BsFacebook className="w-[21px] h-[21px] object-contain cursor-pointer" />
          <BsTwitterX className="w-[21px] h-[21px] object-contain cursor-pointer" />
          <BsInstagram className="w-[21px] h-[21px] object-contain cursor-pointer" />
          <BsLinkedin className="w-[21px] h-[21px] object-contain cursor-pointer" />
        </div>
      </div>

    </div>
  );
};

export default Footer;
