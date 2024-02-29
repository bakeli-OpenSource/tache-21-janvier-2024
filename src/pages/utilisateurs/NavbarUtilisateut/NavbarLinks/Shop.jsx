import React, { useState, useContext, useEffect } from "react";
import { BsSuitHeartFill} from "react-icons/bs";
import { ProduitsContext } from "../../../../utils/contexte/ProduitsContext";
import { CategorieContext } from "../../../../utils/contexte/CategorieContext";
import ComponentButton from "../../../../usersComponents/button/ComponentButton";
import useGlobal from "../../../../utils/hooks/useGlobal";
import { FaShoppingCart } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import { usePanier } from "../../../../utils/contexte/PanierContext";
import { Rating } from 'react-simple-star-rating'
import axiosInstance from "../../../../utils/axiosInstance";



const Shop = () => {
  const { produits } = useContext(ProduitsContext);
  const { categories, setCategories } = useContext(CategorieContext); // Accédez au contexte des catégories
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { addToCart } = usePanier();
  const [hoverArray, setHoverArray] = useState(null);
  const [rating, setRating] = useState(null);
  const [produitAimer, setProduitAimer] = useState(() => {
    const listesEnvies = localStorage.getItem("produitAimer");
    return listesEnvies ? JSON.parse(listesEnvies) : [];
  });

  const [categorieSelect, setCategorieSelect] = useState([]); 
  const [categorieId, setCategorieId] = useState('')
  const [listeProduitsCategories, setListeProduitsCategories] = useState([])

  // const handleClick = () => {
  //   // Afficher tous les produits si aucune catégorie sélectionnée
  //   setFilteredProducts(produits);
  // }

  

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
      setCategorieId(selectedCategory._id);
      fetchProduitsCategorie(categorieId)
      setFilteredProducts(listeProduitsCategories);

    } else {
      setFilteredProducts(produits)
    }
}
  const fetchFilterCategories = async () => {
    try {
      const response = await axiosInstance.get("/categories");
      setCategories(response.data);
      console.log("Catégories récupérées avec succès");
    } catch (error) {
      console.error("Erreur lors de la récupération des catégories:", error);
    }

  };

   // // Logique de filtrage des produits
   const handleChange = (selectedCategorie) => {
    setCategorieSelect(selectedCategorie)
    filtreProdCategorie()
  } 

  useEffect(() => {    
    fetchFilterCategories();
    filtreProdCategorie()
  }, []);

  useEffect(() => {
    setFilteredProducts(produits)
	  }, [categories]);

  const { setDropdown } = useGlobal()

  // Fonction pour changer la couleur du bouton "j'aime" au clic
  const handleLikeToggle = (id, produit) => {
    const isLiked = produitAimer.some(
      (produit) => produit && produit._id === id
    );

    if (isLiked) {
      const updaterProduits = produitAimer.filter(
        (produit) => produit && produit._id !== id
      );
      setProduitAimer(updaterProduits);
    } else {
      const updaterProduits = [...produitAimer, produit];
      setProduitAimer(updaterProduits);
    }
  }

  const handleAddToCart = () => {
    addToCart(produits);
  };

  useEffect(() => {
    localStorage.setItem("produitAimer", JSON.stringify(produitAimer));
  }, [produitAimer]);



  // // Fonction pour mettre à jour l'état de survol pour un produit spécifique
  // const handleHoverEtoils = (index, etoils) => {
  //   let newHoverArray = [...hoverArray]; // Copie de l'array d'états actuel
  //   newHoverArray[index] = etoils; // Met à jour l'état de survol pour le produit à l'index spécifié
  //   setHoverArray(newHoverArray); // Met à jour l'état du composant
  // };

  return (
    <>
      <div
        onClick={() => setDropdown(false)}
        className="px-9  mt-[50px] mx-auto z-0 flex flex-col  "
      >
        <div className="flex mt-10">
          <h1 className=" text-2xl mr-5">Shop</h1>
          <ComponentButton
            className="hover:bg-gray-200 text-black ml-6 w-auto px-3 py-2 text-md tracking-widest rounded"
            texte={"Tous les Produits"}
            onClick={() => handleChange()}
          />
          {categories.map((categorie, index) => (
            <div className="flex" key={index}>
              <ComponentButton
                className=" focus:bg-gray-200 active:bg-gray-200 hover:bg-gray-200  text-black ml-6 w-auto px-3 py-2 text-md tracking-widest rounded"
                texte={categorie.nom}
                onClick={() => handleChange(categorie.nom)}
              />

            </div>
          ))}
        </div>

        <div className="grid px-3 md:ps-9 md:pe-9  grid-cols-1 mt-[80px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-[30px]  mx-auto md:max-w-none md:mx-0">

            {filteredProducts.map((produit) => (
             
              <div
        key={produit && produit._id}
        className="shadow-lg  rounded bg-white"
      >
        <div className="border border-[#e4e4e4] bg-[#dedddd] h-[300px] sm:h-[200px] relative overflow-hidden group transition">
          <div className="w-full  h-auto flex ">
            <Link
                to={`/details/${produit._id}`}
                className="w-full   flex justify-center items-center"
              >
                <img
                  className="w-full h-auto group-hover:scale-110 transition duration-300"
                  src={produit.imageUrl}
                  alt="vetement"
                />
              </Link>
             
              <button
                className={`px-2 py-1 bg-red-500 text-sm ${
                  produit.promo > 0 ? "block" : "hidden"
                } font-normal text-white rounded absolute top-3 left-2 `}
              >
                -{produit.promo}%
              </button>
              
            </div>
          </div>
          <div className="p-2 flex flex-col justify-between">
            <Link to={`/details/${produit._id}`}>
              <h2 className="font-semibold text-sm mb-1">{produit.nom}</h2>
            </Link>
            <div className="font-semibold">
              <span className="text-red-600  py-1 text-sm ">
                {produit.prix} FCFA
              </span>
            </div>

            <div className="p- mt-2 text-">
              {/* star rating */}
                   <div className="w-full items-center gap-1 flex justify-center"> {/* Ajoutez la classe flex justify-center */}
                    {[...Array(5)].map((start, index) => {
                      const etoils = index + 1;
                      return (
                        <label key={index}>
                          <input type="radio"
                            name={`rating-${index}`}
                            value={etoils}
                            className="hidden"
                            onClick={() => setRating(etoils)}
                          />
                          <FaStar
                            classNeme=""
                            size={20}
                            color={etoils <= (hoverArray || rating) ? "#ffc107" : "#e4e5e9"}
                            onMouseEnter={() => setHoverArray ( etoils)}
                            onMouseLeave={() => setHoverArray ( null)}
                          />
                        </label>
                      )
                    })} 
                  </div> 
              <div className="flex gap-2 mt-4 justify-">
              
                <div className="rounded  bg-gray-200 flex items-center justify-center px-2 py-1">
                <FaShoppingCart
                onClick={() => handleAddToCart(produit)}
                className={`text-sm  text-gray-500 `}
              />
                </div>
                <div className="rounded bg-gray-200 flex items-center justify-center px-2 py-1">
                <BsSuitHeartFill
                onClick={() =>
                  handleLikeToggle(produit && produit._id, produit)
                }
                className={`text-sm   ${
                  produitAimer.some(
                    (likedProduit) =>
                      likedProduit && likedProduit._id === produit._id
                  )
                    ? "text-red-500 "
                    : "text-gray-500"
                } `}
              />
                </div>
                <Link to={`/details/${produit._id}`} className="rounded  bg-gray-200 flex items-center justify-center px-2 py-1">
                <IoEyeSharp
                
                className={`text-sm  text-gray-500 `}
              />
                </Link>
              </div>
            </div>
          </div>
        </div>
            ))}

        </div>
      </div>
    </>
  );
};

export default Shop;