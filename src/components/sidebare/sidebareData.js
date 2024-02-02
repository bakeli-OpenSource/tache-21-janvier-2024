import { BsCardList } from "react-icons/bs";
import { MdOutlineDashboard } from "react-icons/md";
import { IoMdCube } from "react-icons/io";
import { FaShoppingBasket } from "react-icons/fa";

export const menus = [
  { name: "dashboard", link: "/", icon: <MdOutlineDashboard /> },
  { name: "catégories", link: "/categories", icon: <BsCardList /> },
  { name: "liste des produits", link: "/produits", icon: <IoMdCube /> },
  { name: "commandes", link: "/commandes", icon: <FaShoppingBasket />, margin: true },
];
