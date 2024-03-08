import React from "react";
import Paragraphe from "./Paragraphe";
import '@fontsource/montserrat';


import { BsFacebook, BsTwitterX, BsInstagram, BsLinkedin } from "react-icons/bs";
const Footer = () => {
  const contact = ["+221 77 982 54 32", "kaysolu@gmail.com", "Dakar-bakeli"];
  
  const customers = [
    "FAQ",
  ];
  const company = [
    "A propos de nous",
  ];
  return (
    <div className="flex mt-5 pb-3 flex-wrap w-full bg-gray-200 px-[35px] font-montserrat">
      <div className="flex justify-around gap-x-10 w-full flex-wrap">
        <div className="mt-3">
          <h4 className="text-sm font-bold  tracking-widest opacity-65 lg:my-6 md:my-4 sm:my-2">
            CONTACTEZ-NOUS
          </h4>
          <Paragraphe className="cursor-pointer hover:underline" items={contact} />
        </div>
        <div className="mt-3">
          <h4 className="text-sm font-bold tracking-widest opacity-65 lg:my-6 md:my-4 sm:my-2">
            CLIENTS
          </h4>
          <a href="#">
          <Paragraphe items={customers} />
          </a>
        </div>
        <div className="mt-3">
          <h4 className="text-sm font-bold  tracking-widest opacity-65 lg:my-6 md:my-4 sm:my-2">
            ENTREPRISE
          </h4>
          <Paragraphe items={company} />
        </div>
        <div className="flex lg:flex-col sm:flex-row md:flex-row my-6 gap-2">
          <BsFacebook className="w-[21px] h-[21px] object-contain cursor-pointer text-[#3b5998]" />
          <BsTwitterX className="w-[21px] h-[21px] object-contain cursor-pointer text-[#1da1f2]" />
          <BsInstagram className="w-[21px] h-[21px] object-contain cursor-pointer text-[#c13584]" />
          <BsLinkedin className="w-[21px] h-[21px] object-contain cursor-pointer text-[#0077b5]" />
        </div>
      </div>
      
        {/* Bottom du Footer */}
      <div className="w-full flex items-center justify-center pt-4 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[15px] leading-[27px]">
          Kaay-Solu Ⓒ 2024 Tous Droits Réservés.
        </p>
      </div>
    </div>
  );
};

export default Footer;
