import React from 'react'
import useProduits from '../../utils/hooks/useProduits';
import HeaderTable from '../headerTable/HeaderTable';
import Table from '../table/Table';
import useSidebare from '../../utils/hooks/useSidebare';
import Formulaire from '././../formulaire/Formulaire';


const ProduitsAdmin = () => {

  const {table, produits, actions, nom, setNom, imageUrl, setImageUrl,
          titre, setTitre, description, setDescription, quantite, setQuantite,
          carracteristique, setCarracteristique, categorie, setCategorie,
          prix, setPrix, couleur, setCouleur, taille, setTaille, fournisseur, setFournisseur
        } = useProduits();
  const {open} = useSidebare()
  
  const inputs = [
    {
      label: "Nom du Produit",
      type: "text",
      value: nom,
      setValue: setNom
    },
    {
      label: "Titre du produit",
      type: "text"
    },
    // {
    //   label: "Image ",
    //   type: 'file'
    // },
    // {
    //   label: "Nombre produit",
    //   type: 'number'
    // },
    // {
    //   label: "Staut catégorie",
    //   type: 'text'
    // }
  ]
  
  const selects = [
    {
      label: 'Catégorie',
      options: [
        'categorie1',
        'categorie2',
        'categorie3',
      ]
    }
  ]

  const textarea = {
    description: 'description'
  }

  const hanldleSubmit = () => {
    
  }

  return (
    <div className={`${open ? "md:ml-[225px]" : "md:ml-[85px]"  } m-4 `}>

      <HeaderTable
       title="Produits"
       nomAjout="Ajouter des produits" 
       body={<Formulaire inputs={inputs} onSubmit={hanldleSubmit} />} 
       />
      <Table thead={table} tbody={produits} actions={actions} />
</div>
  )
}

export default ProduitsAdmin
