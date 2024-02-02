import React, { createContext } from 'react'
import { TbEyeShare } from "react-icons/tb";
import { MdEdit } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";
import { BsEyeSlashFill } from "react-icons/bs";

const CategorieContext = createContext();

export {CategorieContext}

export default function CategorieContextProvider({children}) {
    const table = [
        'id', 'Categorie', 'Nombre produit', 'Statut', 'Actions'
    ]
      const table2 = [
        {
          id: Math.floor(Math.random()*10000000),
          article: {
            src: 'https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
            nom: "Dos Santos",
            desc: 'Un beau gas'
          },
          quantite: 50,
          statut: <BsEyeSlashFill/>
        }
    ]
    
    const actions = [
        {
          icon: <TbEyeShare/>,
          color: 'bg-green-500',
          hanldleClick: () => console.log('Ca marche 1')
        },
        {
          icon: <MdEdit />,
          color: 'bg-orange-500',
          hanldleClick: () => console.log('Ca marche 2')
        },
        {
          icon: <MdOutlineDelete />,
          color: 'bg-red-600',
          hanldleClick: () => console.log('Ca marche 3')
        }
      ]

      const valueContext = {
        table,
        table2,
        actions
      }
  return (
    <CategorieContext.Provider value={valueContext}>{children}</CategorieContext.Provider>
  )
}
