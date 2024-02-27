import { BsCardList } from 'react-icons/bs';
import { MdOutlineDashboard } from 'react-icons/md';
import { IoMdCube, IoMdMail } from 'react-icons/io';
import { FaShoppingBasket } from 'react-icons/fa';
import { HiUserGroup } from 'react-icons/hi2';

export const menus = [
  { name: 'Dashboard', link: '/admin/dashboard', icon: <MdOutlineDashboard /> },
  { name: 'Catégories', link: '/admin/categories', icon: <BsCardList /> },
  { name: 'Liste des produits', link: '/admin/produits', icon: <IoMdCube /> },
  {
    name: 'Commandes',
    link: '/admin/commandes',
    icon: <FaShoppingBasket />,
    margin: true,
  },
  { name: 'Clients', link: '/admin/clients', icon: <HiUserGroup /> },
  { name: 'Messages', link: '/admin/messages', icon: <IoMdMail /> },
];
