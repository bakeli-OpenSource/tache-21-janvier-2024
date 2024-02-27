import React, { useEffect, useState } from 'react';
import useCommandes from '../../utils/hooks/useCommandes';
import HeaderTable from '../headerTable/HeaderTable';
import Table from '../table/Table';
import useSidebare from '../../utils/hooks/useSidebare';
import Formulaire from '../formulaire/Formulaire';
import useGlobal from '../../utils/hooks/useGlobal';
import { useNavigate } from "react-router-dom";
import { TbEyeShare } from "react-icons/tb";
import { MdEdit } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";
import axios from 'axios';

const CommandeAdmin = () => {
  const {
    table,
    commandes,
    email,
    quantite,
    // prixTotal,
    produit,
    // setProduit,
    idProduit,
    setIdProduit,
    setPrixTotal,
    setEmail,
    date,
    etat,
    setEtat,
    setDate,
    setQuantite,
    setCommandes,
    telephone,
    setTelephone,
    adresse,
    setAdresse,
    prixLivraison,
    setPrixLivraison,
    prixProduit,
    setPrixProduit,
  } = useCommandes();

  const { open } = useSidebare();

  const { setShowModal } = useGlobal();
  
  const [editingCommandeId, setEditingCommandeId] = useState(null);

  const inputs = [                                                                                                              
    // {
    //   label: 'Email',
    //   type: 'text',
    //   value: email,
    //   setValue: setEmail,
    // },
    // {
    //   label: 'Numero Produit',
    //   type: 'number',
    //   value: idProduit,
    //   setValue: setIdProduit,
    // },
    // {
    //   label: 'Nombre',
    //   type: 'number',
    //   value: quantite,
    //   setValue: setQuantite,
    // },
    // {
    //   label: 'Date',
    //   type: 'date',
    //   value: date,
    //   setValue: setDate,
    // },
    // {
    //   label: 'Etat commande',
    //   type: 'select',
    //   value: etat,
    //   setValue: setEtat,
    // },
    // {
    //   label: 'Prix total',
    //   type: 'number',
    //   value: prixTotal,
    //   setValue: setPrixTotal,
    // },
    // {
    //   label: 'Telephone',
    //   type: 'number',
    //   value: telephone,
    //   setValue: setTelephone,
    // },
    // {
    //   label: 'Produit',
    //   type: 'text',
    //   value: produit,
    //   setValue: setProduit,
    // },
    // {
    //   label: 'Adresse',
    //   type: 'adresse',
    //   value: adresse,
    //   setValue: setAdresse,
    // },
    // {
    //   label: 'Prix Livraison',
    //   type: 'number',
    //   value: prixLivraison,
    //   setValue: setPrixLivraison,
    // },
    // {
    //   label: 'Prix Produit',
    //   type: 'number',
    //   value: prixProduit,
    //   setValue: setPrixProduit,
    // },
  ];  

  const [selectsValue, setSelectsValue] = useState('');

  
  const handleSelectChange = (e) => {  
    setSelectsValue(e.target.value)
   };

  const selects = [
    {
      label: 'Etat de la commande',
      value: selectsValue,   
      options: ["en cours", "en attente", "en livraison", "livrée"],
      // setValue: handleSelectChange
    }
  ]


  const navigate = useNavigate();

  const actions = [
    {
      icon: <TbEyeShare />,
      color: 'bg-green-500',
      handleClick: (commandeId) => {
        navigate("/admin/commandes/DetailsCommande")
      }
    },
    {
      icon: <MdEdit />,
      color: 'bg-orange-500',
      handleClick: (commandeId) => {
        commandes.map((commande) => {
          if (commande._id === commandeId) {
            setEtat(commande.etat);        
          }
        })
        setIsEditing(true);
        setShowModal(true);
        setEditingCommandeId(commandeId);
      }
    },
    {
      icon: <MdOutlineDelete />,                       
      color: 'bg-red-600',
      handleClick: (commandeId) => {
        handleDelete(commandeId);
      }
    },
  ];


  
  const [editData, setEditData] = useState({});

  const hanldleUpdate = async (commandeId, newData) => {
    try {
      const response = await axios.put(
        `https://kay-solu-api.onrender.com/api/commande/${commandeId}`,
        newData
      );
      console.log("commande modifiée avec succès:", response.data);

      fetchCommandes();
    } catch (error) {
      console.error("Erreur lors de la modification de la commande:", error);
    }
  };

  

  // const handleEditCommande = (commandeId, newData) => {
  //   setEditData(newData);
  //   hanldleUpdate(commandeId, newData);
  //   setShowModal(false);

  // const [editData, setEditData] = useState({});

  // const hanldleUpdate = async (commandeId, newData) => {
  //   try {
  //     const response = await axios.put(
  //       `https://kay-solu-api.onrender.com/api/commande/${commandeId}`,
  //       newData
  //     );
  //     console.log("commande modifiée avec succès:", response.data);

  //     fetchCommandes();
  //   } catch (error) {
  //     console.error("Erreur lors de la modification de la commande:", error);
  //   }
  // };

  
  // const handleEditCommande = (commandeId, newData) => {
  //   setEditData(newData);
  //   hanldleUpdate(commandeId, newData);
  //   setShowModal(false);
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  
  //   const  ValidationCommande = {
  //     email,
  //     idProduit,
  //     setIdProduit,
  //     quantite,
  //     produit,
  //     date,
  //     etat,
  //     "prixTotal": prixTotal,
  //     telephone,
  //     adresse,
  //     prixProduit,
  //     prixLivraison
  //   };
    
  //   try {
  //     // Effectuer une requête POST vers votre API avec Axios
  //     const response = await axios.post('https://kay-solu-api.onrender.com/api/commande',  ValidationCommande);
  
  //     if (response.status === 201) {
  //       console.log('Commande ajoutée avec succès:', response.data);
  //       setShowModal(false);
  //       setEmail("");
  //       setQuantite("");
  //       setDate("");
  //       setEtat("");
  //       setPrixTotal("");
  //       setTelephone("");
  //       setAdresse("");
  //       setPrixLivraison("");
  //       setPrixProduit("");
  //     } else {
  //       console.error('Erreur lors de l\'ajout de commandes:', response.data);
  //     }
  
  //     fetchCommandes();
  //   } catch (error) {
  //     console.error('Erreur lors de l\'ajout de commande:', error);
  //   }
  // };

  const handleEditCommande = (commandeId, newData) => {
    const updatedData = { etat: newData.etat }; // Inclure uniquement le champ etat
    console.log("updated Data :", updatedData);
    setEditData(newData);
    hanldleUpdate(commandeId, updatedData);
    setShowModal(false);
  };
  
  
  const calculateTotalPrice = () => {
    const productPrice = parseFloat(prixProduit) || 0;
    const quantity = parseFloat(quantite) || 0;
    const deliveryPrice = parseFloat(prixLivraison) || 0;
  
    const totalPrice = productPrice * quantity + deliveryPrice;
    return totalPrice.toFixed(2);
  };
  
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const ValidationCommande = {
      email,
      idProduit,
      setIdProduit,
      quantite,
      produit,
      date,
      etat,
      "prixTotal": calculateTotalPrice(),
      telephone,
      adresse,
      prixProduit,
      prixLivraison
    };
    if (isEditing) {
      handleEditCommande(editingCommandeId, ValidationCommande);      
      console.log({selectsValue});
    }else{
      try {
        const response = await axios.post('https://kay-solu-api.onrender.com/api/commande', ValidationCommande);
    
        if (response.status === 201) {
          console.log('Commande ajoutée avec succès:', response.data);
          setShowModal(false);
          setEmail("");
          setQuantite("");
          setDate("");
          setEtat("");
          setPrixTotal("");
          setTelephone("");
          setAdresse("");
          setPrixLivraison("");
          setPrixProduit("");
        } else {
          console.error('Erreur lors de l\'ajout de commandes:', response.data);
        }
    
        fetchCommandes();
      } catch (error) {
        console.error('Erreur lors de l\'ajout de commande:', error);
      }
    }
  };

  const handleDelete = async (commandeId) => {
    try {
      console.log('Avant la requête DELETE');
      // Effectuez une requête DELETE vers votre API avec axios
      await axios.delete(`https://kay-solu-api.onrender.com/api/commande/${commandeId}`);
      console.log('Aprés la requête DELETE');

      // Mettez à jour l'état des catégories en filtrant la catégorie supprimée de la liste
      const updatedCommande = commandes.filter(
        (commande) => commande._id !== commandeId
      );
      setCommandes(updatedCommande);

      console.log("Commande supprimée avec succès");
      fetchCommandes();
    } catch (error) {
      console.error("Erreur lors de la suppression de la commande:", error);
    }
  };

  
  const fetchCommandes = async () => {
    try {
      const response = await axios.get('https://kay-solu-api.onrender.com/api/commandes');
      setCommandes(response.data);
      console.log('Commandes récupérées avec succès');
    } catch (error) {
      console.error('Erreur lors de la récupération des commandes:', error);
    }
  };

  useEffect(() => {
    fetchCommandes();
  }, []);

  return (
    <div className={`${open ? 'md:ml-[225px]' : 'md:ml-[85px]'} m-4 `}>
      <HeaderTable
        title="Commandes"
        // nomAjout="Ajouter des Commandes"
        body=
        {
        <Formulaire 
        inputs={inputs} 
        selects={selects}
        onSubmit={handleSubmit} 
        handleSelectChange = {handleSelectChange}  
        // selectsValue={selectsValue} 
        />}
       
      />
      <Table thead={table} tbody={commandes} actions={actions} />
    </div>
  );
};

export default CommandeAdmin;