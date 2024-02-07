import React, { createContext, useState } from 'react'
import { TbEyeShare } from "react-icons/tb";
import { MdEdit } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import useGlobal from '../hooks/useGlobal';

const CategorieContext = createContext();

export {CategorieContext}

export default function CategorieContextProvider({children}) {
    const table = [
        'Categorie', 'Nombre produit', 'Statut', 'Actions'
    ]
    const {setShowModal} =useGlobal()
    const [categories, setCategories] = useState(JSON.parse(localStorage.getItem('categories')) || [])
    
    const [nomCategories, setNomCategories] = useState("categorie1")
    const [nombre, setNombre] = useState(0)
    const [statut, setStatut] = useState("true")
    const [image, setImage] = useState("")

    const hanldleSubmit = (e) => {
      e.preventDefault();
      let categorie
      categorie =  {
          id : Math.floor(Math.random() * 10000),
          nom : nomCategories,
          quantite : nombre,
          statut: statut,
          imageUrl: image
        }
        categorie = [...categories, categorie]
        setCategories(categorie)
        setNomCategories('')
        setNombre('')
        setStatut('')
        setImage('')
        setShowModal(false)
    }

    const handleDelete = (categorieId) => {
      const categorie = categories.filter(categorie => categorieId !== categorie.id)
      setCategories(categorie)
    }
    
  const navigate = useNavigate();

    const actions = [
        {
          icon: <TbEyeShare/>,
          color: 'bg-green-500',
          hanldleClick: () => {
            console.log('Ca marche 1')
            navigate("/admin/categories/DetailsCategorie");
          }
        },
        {
          icon: <MdEdit />,
          color: 'bg-orange-500',
          hanldleClick: () => {
            console.log('Ca marche 2')
          }
        },
        {
          icon: <MdOutlineDelete />,
          color: 'bg-red-600',
          hanldleClick: () => {
            categories.map((categorie)=>(
              handleDelete(categorie.id)
              ))
          }
        }
      ]

      const valueContext = {
        table,
        categories,
        actions,
        nomCategories,
        nombre,
        statut,
        image,
        setNomCategories,
        setNombre,
        setStatut,
        setImage,
        hanldleSubmit
      }
  return (
    <CategorieContext.Provider value={valueContext}>{children}</CategorieContext.Provider>
  )
}
