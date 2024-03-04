import React, { useContext, useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import useSidebare from "../../utils/hooks/useSidebare";
import UserDropdown from "../user/UserDropdown";
import Notification from "../user/Notification";
import Message from "../user/Message";
import { useLocation } from "react-router";
import axiosInstance from "../../utils/axiosInstance";
import { MdMenu, MdClose } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import NavInput from "../../pages/utilisateurs/NavbarUtilisateut/NavInput";
import { ProduitsContext } from "../../utils/contexte/ProduitsContext";

const Header = () => {  
  const{valueInput, setValueInput} = useContext(ProduitsContext)
  const [search, setSearch] = useState(false);
  const { toggleSidebare } = useSidebare();
  const location = useLocation();
  const urlPageActuel = location.pathname.split("/");
  const pageActuel = urlPageActuel[urlPageActuel.length - 1];

  const [nouveauCommande, setNouveauCommande] = useState([])
  const [nouveauMessage, setNouveauMessage] = useState([])

  useEffect(() => {
    const fetchCommandes = async () => {
      try {
        const response = await axiosInstance.get("/commandes");
        const produitsNonLuTrue = response.data.filter(produit => produit.lu === false);
        setNouveauCommande(produitsNonLuTrue);
        // console.log(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des commandes :", error);
      }
    };
    fetchCommandes();
  }, [nouveauCommande]);

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await axiosInstance.get("/messages");
        const messagesNonLuTrue = response.data.filter(message => message.lu === false);
        setNouveauMessage(messagesNonLuTrue);
      } catch (error) {
        console.error("Erreur lors de la récupération des commandes :", error);
      }
    };
    fetchMessage();
  }, [nouveauMessage]);

  return (
    <header  className="z-[10] bg-gray-800 fixed w-full m-0 flex justify-between text-gray-100 w-100 px-5 py-3">
      <div className="flex gap-4 items-center">
        <FaBars
          className="cursor-pointer mt-0.75"
          size={20}
          onClick={toggleSidebare}
        />
        <h1 className="uppercase">{pageActuel}</h1>
      </div>
      <div className="flex gap-6 justify-around align-center">
        <div className="flex  p-1.5  ">
          <div className={`flex flex-row-reverse m-0 p-0 duration-500   items-center ${
                search
                  ? "rounded-full border transition ease-in-out delay-150 border-gray-300 px-3 py-1"
                  : "translate-x-1"
              }`}>
              <div
                className="flex justify-end px-4 py-1"
                onClick={() => setSearch(!search)}
              >
                {!search ? <BsSearch /> : <MdClose />}
              </div>    
              <NavInput type="text" search={search} value={valueInput} onChange={(e) => setValueInput(e.target.value)} />        
          </div>
        </div>
        <div className="flex  p-1.5">
          <div class="relative inline-flex w-fit">
            {/* <div
              class="absolute bottom-auto left-auto right-0 top-0 z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 whitespace-nowrap rounded-full bg-red-700 px-2.5 py-1 text-center align-baseline text-xs font-bold leading-none text-white">
              {nouveauMessage.length}
            </div> */}
            <Message nouveauMessage={nouveauMessage} />
            {nouveauMessage.length > 0 ? 
            <span class="relative flex h-3 w-3 right-2 bottom-1">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span class="relative inline-flex rounded-full text-sm h-3 w-3 bg-red-500"></span>
            </span> : ""}
          </div>
        </div>
        <div className="flex  p-1.5  ">
          <div class="relative inline-flex w-fit">
            {/* <div
              class="absolute bottom-auto left-auto right-0 top-0 z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 whitespace-nowrap rounded-full bg-red-700 px-2.5 py-1 text-center align-baseline text-xs font-bold leading-none text-white">
              {nouveauCommande.length}
            </div> */}
            <Notification nouveauCommande={nouveauCommande} />
            {nouveauCommande.length > 0 ? 
            <span class="relative flex h-3 w-3 right-2 bottom-1">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span class="relative inline-flex rounded-full text-sm h-3 w-3 bg-red-500"></span>
            </span> : ""}
          </div>
        </div>
        <div className="    hover:px- p-1.5 ">
          <UserDropdown />
        </div>
      </div>
    </header>
  );
};

export default Header;
