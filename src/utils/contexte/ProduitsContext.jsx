import React, { createContext, useEffect, useState } from "react";
import { TbEyeShare } from "react-icons/tb";
import { MdEdit } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";
import useGlobal from "../hooks/useGlobal";
import { useNavigate } from "react-router";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const ProduitsContext = createContext();

const ProduitContextProvider = ({ children }) => {
  const navigate = useNavigate()
  const [produits, setProduits] = useState([])
  const [categoryNames, setCategoryNames] = useState([]);
  // Création des contexts pour formulaire
  // const [url, setUrl] = useState('')
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
  const [titreModal, setTitreModal] = useState('')
  const [corpModal, setCorpModal] = useState('')
  const [soumettre, setSoumettre] = useState('Ajouter')
  const [idAModifie, setIdAModifie] = useState('')
  const [filtreProduits, setFiltreProduits] = useState([])
  
  
  // 
  const { setShowModal } = useGlobal()
  
  

  // Suppression Produit
  const deleteProduit = async (id) => {
    try {
      // Effectuez une requête DELETE vers votre API avec axios
      await axios.delete(`https://kay-solu-api.onrender.com/api/produits/${id}`);

      // Mettez à jour l'état des catégories en filtrant la catégorie supprimée de la liste
      const updatedProd = produits.filter(
        (prod) => prod._id !== id
      );
      setProduits(updatedProd);

      console.log("Produit supprimée avec succès");
    } catch (error) {
      navigate("/error")
      console.error("Erreur lors de la suppression du produit:", error);
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
        
        const response = await axios.post('https://kay-solu-api.onrender.com/api/produits', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });


        if (response.status === 201) {
            console.log('Produit ajouté avec succès:', response.data);
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
      
      const response = await axios.put('https://kay-solu-api.onrender.com/api/produits/' + idAModifie, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
  
      if (response.status === 200) { // Corrected to check for status 200
        console.log('Produit modifié avec succès:', response.data);
        toast.success('Produit modifié avec succès!');
        setShowModal(false);
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
      const response = await axios.get("https://kay-solu-api.onrender.com/api/produits/" + id);
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

      useEffect(() => {
        const fetchCategories = async () => {
          try {
            const response = await axios.get("https://kay-solu-api.onrender.com/api/categories");
            setCategories(response.data);
            console.log("Catégories récupérées avec succès");
          } catch (error) {
            console.error("Erreur lors de la récupération des catégories:", error);
          }
        };
    
        fetchCategories();
      }, []);

      const handleSelectChange = (e) => {
        const selectedCategoryName = e.target.value;
        const selectedCategory = categories.find(cat => cat.nom === selectedCategoryName);
        if (selectedCategory) {
          setCategorie(selectedCategoryName);
          setCategorieId(selectedCategory._id);
        } 
      };

      const [categorieSelect, setCategorieSelect] = useState([]); 

      const filtreProdCategorie = () => {
        const selectedCategory = categories.find((cat) => cat.nom === categorieSelect);
        if (selectedCategory) {
          setCategorie(categorieSelect);
          setCategorieId(selectedCategory._id);
          const filteredProducts = produits.filter((produit) => produit.categorieId === selectedCategory._id);
          setFiltreProduits(filteredProducts);
        } else {
          setFiltreProduits(produits)
        }
      }

      const handleSelectChangeCategorie = (e) => {
        const selectedCategoryName = e.target.value;
        setCategorieSelect(selectedCategoryName)
        filtreProdCategorie()
      };
      

  // Récupération de tous les produits
    const fetchProduit = async () => {
      try {
        const response = await axios.get("https://kay-solu-api.onrender.com/api/produits");
        setProduits(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des produits:", error);
      }
    };
  useEffect(() => {    
    filtreProdCategorie()
    fetchProduit();
  }, [produits]);
      
  useEffect(() => {
		setCategoryNames(categories.map((categorie) => categorie.nom));
		setFiltreProduits(produits)
	  }, [categories]); 

  const value = {
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