import React from 'react'
import Table from '../../components/table/Table'
import { TbEyeShare } from "react-icons/tb";
import { MdEdit } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";
import { BsEyeSlashFill } from "react-icons/bs";
import HeaderTable from '../../components/headerTable/HeaderTable';


const Categories = () => {
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
  return (
    <div className='mr-5 my-3  w-full'>
      <HeaderTable title= "Liste categories" nomAjout='Ajouter un nouveau categorie' />
      <Table thead={table} tbody={table2} actions={actions} />
    </div>
  )
}


export default Categories