import { BsCardList } from "react-icons/bs";
import { MdOutlineDashboard } from "react-icons/md";
import { IoMdCube } from "react-icons/io";
import { FaShoppingBasket } from "react-icons/fa";

export const menus = [
  { name: "Dashboard", link: "/", icon: <MdOutlineDashboard /> },
  { name: "Catégories", link: "/categories", icon: <BsCardList /> },
  { name: "Liste des produits", link: "/produits", icon: <IoMdCube /> },
  { name: "Commandes", link: "/commandes", icon: <FaShoppingBasket />, margin: true },
];
