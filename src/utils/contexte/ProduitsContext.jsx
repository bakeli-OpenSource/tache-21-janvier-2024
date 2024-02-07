import React, { createContext } from "react";
import { TbEyeShare } from "react-icons/tb";
import { MdEdit } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export const ProduitsContext = createContext();

const ProduitContextProvider = ({ children }) => {
  const navigate = useNavigate()
    const table = [
        'id', 'Article', 'Quantité','Prix' , 'Actions'
    ]

    
    const table2 = [
        {
          id: Math.floor(Math.random()*10000000),
          article: {
            src: 'https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
            nom: "Chaussure Adidas",
            desc: 'De beaux chaussures dins noirs'
          },
          quantite: 20,
        },
        {
          id: Math.floor(Math.random()*10000000),
          article: {
            src: 'https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
            nom: "Dos Santos",
            desc: 'Wanteer Un beau gars'
          },
          quantite: 50,
        },
    ]
    
    const actions = [
      {
        // Voire Détails
        icon: <TbEyeShare/>,
        color: 'bg-green-500',
        hanldleClick: (id) => {
          console.log('Ca marche 1')
          navigate("DetailsProd/" + id);
        }
      },
        {
          // Modification
          icon: <MdEdit />,
          color: 'bg-orange-500',
          hanldleClick: () => console.log('Modifier')
        },
        {
          // Suppression
          icon: <MdOutlineDelete />,
          color: 'bg-red-600',
          hanldleClick: (id) => {
            // useFetch('http://localhost:4000/api/supprimerproduit/' + id)
          }
        }
      ]

  const value = {
    table, 
    table2,
    actions
  };

  return <ProduitsContext.Provider value={value}>{children}</ProduitsContext.Provider>;
};

export default ProduitContextProvider;
