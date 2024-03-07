import React, { createContext, useState } from "react";
import { TbEyeShare } from "react-icons/tb";
import { MdEdit } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";
import useGlobal from "../hooks/useGlobal";
import { useNavigate } from "react-router";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axiosInstance from "../axiosInstance";


export const ProduitsContext = createContext();

const ProduitContextProvider = ({ children }) => {
  const navigate = useNavigate()
  const [produits, setProduits] = useState([])
  const [categoryNames, setCategoryNames] = useState([]);
  // Création des contexts pour formulaire
  
  const [nom, setNom] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [titre, setTitre] = useState('')
  const [description, setDescription] = useState('')
  const [quantite, setQuantite] = useState('')
  const [categorie, setCategorie] = useState('')
  const [categorieId, setCategorieId] = useState('')
  const [carracteristique, setCarracteristique] = useState('')
  const [prix, setPrix] = useState('')
  const [couleur, setCouleur] = useState('')
  const [taille, setTaille] = useState('')
  const [fournisseur, setFournisseur] = useState('')
  const [promo, setPromo] = useState(0)
  const [titreModal, setTitreModal] = useState('Ajouter un produits')
  const [corpModal, setCorpModal] = useState('')
  const [soumettre, setSoumettre] = useState('Ajouter')
  const [idAModifie, setIdAModifie] = useState('')
  const [filtreProduits, setFiltreProduits] = useState([])
  const [categorieSelect, setCategorieSelect] = useState([]); 
  const [listeProduitsCategories, setListeProduitsCategories] = useState([])
  const [valueInput, setValueInput] = useState('');

  // Filtre produit par letter saisi
  const filteredByLetter = produits.filter((produit) =>
    produit.nom.toLowerCase().includes(valueInput.toLowerCase())
  );
  
  const table = [
    'Article', 'Quantité', 'Prix', 'Actions'
  ]
  
  const actions = [
    {
      // Voire Détails
      icon: <TbEyeShare/>,
      color: 'bg-green-500',
      handleClick: (id) => {
        navigate(id);
      }
    },
      {
        // Modification
        icon: <MdEdit />,
        color: 'bg-orange-500',
        handleClick: (id) => {
          setSoumettre('Modifier')
          setIdAModifie(id)
          hanldleUpdate(id)
        }
      },
      {
        // Suppression
        icon: <MdOutlineDelete />,
        color: 'bg-red-600',
        handleClick: (id) => {
          deleteProduit(id)
        }
      }
  ]
  
  const [categories, setCategories] = useState([]);  
  
  const inputs = [
    {
      label: "Nom du Produit",
      type: "text",
      value: nom,
      setValue: setNom
    },
    {
      label: "Image du produit",
      type: "file",
      name: "imageUrl",
      // value: imageUrl,
      setValue: setImageUrl
    },
    {
      label: "Titre du Produit",
      type: "text",
      value: titre,
      setValue: setTitre
    },
    {
      label: "Quantité",
      type: "number",
      value: quantite,
      setValue: setQuantite
    },
    {
      label: "Carractéristiques",
      type: "text",
      value: carracteristique,
      setValue: setCarracteristique
    },
    {
      label: "Prix",
      type: "number",
      value: prix,
      setValue: setPrix
    },
    {
      label: "Couleur",
      type: "text",
      value: couleur,
      setValue: setCouleur
    },
    {
      label: "Taille",
      type: "text",
      value: taille,
      setValue: setTaille
    },
    {
      label: "Fourniseur",
      type: "text",
      value: fournisseur,
      setValue: setFournisseur
    },
    {
      label: "Promo en %",
      type: "number",
      value: promo,
      setValue: setPromo
    }
  ]

  const textarea = {
    value: description,
    setValue: setDescription
  }
  
  const handleSelectChange = (e) => {
    const selectedCategoryName = e.target.value;
    const selectedCategory = categories.find(cat => cat.nom === selectedCategoryName);
    if (selectedCategory) {
      setCategorie(selectedCategoryName);
      setCategorieId(selectedCategory._id);
    } 
  };

  const [selectsValue] = useState('');
  
  const selects = [
    {
      label: 'Catégorie',
      value: selectsValue,
      options: categoryNames,
      setValue: handleSelectChange
    }
  ]
  
  const { setShowModal } = useGlobal()  

  // Suppression Produit
  const deleteProduit = async (id) => {
    try {
      await axiosInstance.delete(`/produits/${id}`);

      const updatedProd = produits.filter(
        (prod) => prod._id !== id
      );
      setProduits(updatedProd);
      toast.error('Produit supprimée avec succès!');
    } catch (error) {
      navigate("/error")
      console.error("Erreur lors de la suppression du produit:", error);
      toast.error('Erreur lors de la suppression du produit!');
    }
  };

  // Ajout de Produit
  const addProduit = async (produit) => {
    try {
        const formData = new FormData();
        formData.append('nom', produit.nom);
        formData.append('imageUrl', produit.imageUrl);
        formData.append('titre', produit.titre);
        formData.append('description', produit.description);
        formData.append('quantite', produit.quantite);
        formData.append('categorie', produit.categorie);
        formData.append('categorieId', produit.categorieId);
        formData.append('carracteristique', produit.carracteristique);
        formData.append('prix', produit.prix);
        formData.append('couleur', produit.couleur);
        formData.append('taille', produit.taille);
        formData.append('fournisseur', produit.fournisseur);
        formData.append('promo', produit.promo);
        
        const response = await axiosInstance.post('/produits', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });


        if (response.status === 201) {
            console.log('Produit ajouté avec succès:', response.data);
            fetchProduitsCategorie(categorieId)
            // alert('Produit ajouté avec succès:');
            toast.success('Produit ajouté avec succès!');
            
            setShowModal(false);
        }
         else {
            throw new Error('Erreur lors de l\'ajout du produit');
        }
    } catch (error) {
      navigate("/error")
        console.error('Erreur lors de l\'ajout du produit:', error);
        toast.error("Erreur lors de l'ajout du produit");
    }
  }

  const updateProduit = async (produit) => {
    try {
      const formData = new FormData();
      formData.append('nom', produit.nom);
      formData.append('imageUrl', produit.imageUrl);
      formData.append('titre', produit.titre);
      formData.append('description', produit.description);
      formData.append('quantite', produit.quantite);
      formData.append('categorie', produit.categorie);
      formData.append('categorieId', produit.categorieId);
      formData.append('carracteristique', produit.carracteristique);
      formData.append('prix', produit.prix);
      formData.append('couleur', produit.couleur);
      formData.append('taille', produit.taille);
      formData.append('fournisseur', produit.fournisseur);
      formData.append('promo', produit.promo);
      
      const response = await axiosInstance.put('/produits/' + idAModifie, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
  
      if (response.status === 200) { // Corrected to check for status 200
        console.log('Produit modifié avec succès:', response.data);
        toast.warning ('Produit modifié avec succès!');
        setShowModal(false);
        setTitreModal("Ajouter un produits")
        setSoumettre('Ajouter')
      } else {
        throw new Error('Erreur lors de la modification du produit');
      }
    } catch (error) {
      console.error('Erreur lors de la modification du produit:', error);
      toast.error('Erreur lors de la modification du produit!');
    }
  }  

  const hanldleUpdate = async (id) => {
    setShowModal(true)
    setTitreModal('Modification du produit')
    try {
      const response = await axiosInstance.get("/produits/" + id);
      const datasUpdates = response.data
        setNom(datasUpdates.nom)
        setTitre(datasUpdates.titre)
        setQuantite(datasUpdates.quantite)
        setCarracteristique(datasUpdates.carracteristique)
        setPrix(datasUpdates.prix)
        setCouleur(datasUpdates.couleur)
        setTaille(datasUpdates.taille)
        setFournisseur(datasUpdates.fournisseur)
        setPromo(datasUpdates.promo)
        setCategorie(datasUpdates.categorie)
        setCategorieId(datasUpdates.categorieId)
        setDescription(datasUpdates.description)
      } catch (error) {
        console.error("Erreur lors de la récupération des produits:", error);
      }
  }


  const fetchCategories = async () => {
    try {
      const response = await axiosInstance.get("/categories");
      setCategories(response.data);
      console.log("Catégories récupérées avec succès");
    } catch (error) {
      console.error("Erreur lors de la récupération des catégories:", error);
    }
  };

 

  const handleSelectChangeCategorie = (e) => {
    const selectedCategoryName = e.target.value;
    setCategorieSelect(selectedCategoryName)
    filtreProdCategorie()
  }; 

  // Récupération de tous les produits
  const fetchProduit = async () => {
    try {
        const response = await axiosInstance.get("/produits");
        const produitsAvecQuantiteProd = response.data.map(produit => ({
            ...produit,
            quantiteProd: produit.quantite,
            // Supprimer la clé "quantite" de l'objet
            quantite: undefined
        }));
        setProduits(produitsAvecQuantiteProd);
    } catch (error) {
        console.error("Erreur lors de la récupération des produits:", error);
    }
  };


    
  const hanldleSubmit = (e) => {
    e.preventDefault()
    const recupInput = {
      nom, imageUrl, titre, description, quantite,
      categorie, categorieId, carracteristique, prix, couleur, taille, fournisseur, promo
    }
    if (soumettre === 'Ajouter') {
      console.log('Ajout de produit');
      addProduit(recupInput)
    }else{
      console.log('modification de produit');
      updateProduit(recupInput)
    }
    setNom('')
    setImageUrl('')
    setTitre('')
    setDescription('')
    setQuantite('')
    setCategorie('')
    setCarracteristique('')
    setPrix('')
    setCouleur('')
    setTaille('')
    setFournisseur('')
    setPromo('')
    console.log(soumettre);
  }    
  
  const fetchProduitsCategorie = async (idCategory) => {
    try {
      const response = await axiosInstance.get(`/produits/categorie/${idCategory}`);      
      setListeProduitsCategories(response.data)
      console.log('Produits catégorie récupérées avec succès');
    } catch (error) {
      console.error('Erreur lors de la récupération des produits de la catégories :', error);
    }
  };
  
  const filtreProdCategorie = () => {
        const selectedCategory = categories.find((cat) => cat.nom === categorieSelect);
        
        if (selectedCategory) {
          setCategorie(categorieSelect);
          setCategorieId(selectedCategory._id);
          fetchProduitsCategorie(categorieId)
          setFiltreProduits(listeProduitsCategories);

        } else {
          setFiltreProduits(produits)
        }
   }
    
      

  const value = {
    valueInput, setValueInput,
    hanldleSubmit,
    selects,
    textarea,
    inputs,
    fetchProduitsCategorie,
    listeProduitsCategories,
    handleSelectChangeCategorie,
    categoryNames, 
    setCategoryNames,
    categories,
    handleSelectChange,
    filtreProduits, 
    setFiltreProduits,
    setProduits,
    table, 
    produits,
    addProduit,
    fetchCategories,
    setFiltreProduits,
    filtreProdCategorie,
    fetchProduit,
    updateProduit,
    actions,
    titreModal, setTitreModal, corpModal, setCorpModal,
    nom, setNom, imageUrl, setImageUrl, titre, setTitre, description, setDescription, quantite, setQuantite,
    carracteristique, setCarracteristique, categorie, setCategorie,categorieId,setCategorieId ,prix, setPrix, couleur, setCouleur, taille, setTaille, fournisseur, setFournisseur, promo, setPromo,
    soumettre, setSoumettre
  };

  return <ProduitsContext.Provider value={value}>{children}</ProduitsContext.Provider>;
};

export default ProduitContextProvider;