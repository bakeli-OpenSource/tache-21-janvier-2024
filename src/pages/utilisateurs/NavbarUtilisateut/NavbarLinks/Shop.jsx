import React, { useState, useContext, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../../../../usersComponents/footer/Footer";
import { BsSuitHeartFill, BsPlus } from "react-icons/bs";
import axios from "axios";
import { ProduitsContext } from "../../../../utils/contexte/ProduitsContext";
import { CategorieContext } from "../../../../utils/contexte/CategorieContext";
import ComponentButton from "../../../../usersComponents/button/ComponentButton";
import useGlobal from "../../../../utils/hooks/useGlobal";

const Shop = () => {
    const [heartColors, setHeartColors] = useState(Array(10).fill("white"));
    const { produits } = useContext(ProduitsContext);
    const { categories, setCategories } = useContext(CategorieContext); // Accédez au contexte des catégories
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const fetchFilterCategories = async () => {
            try {
                const response = await axios.get("https://kay-solu-api.onrender.com/api/categories");
                setCategories(response.data);
                console.log("Catégories récupérées avec succès");
            } catch (error) {
                console.error("Erreur lors de la récupération des catégories:", error);
            }
        };
        fetchFilterCategories();
        
        setFilteredProducts(produits); 
    }, [produits]); 

    const handleChange = (selectedCategorie) => {
        let updatedProducts = produits; 

        if (selectedCategorie !== "Tous") { 
            updatedProducts = produits.filter((produit) => produit.categorie === selectedCategorie);
        }

        setFilteredProducts(updatedProducts);
    };

    // Fonction pour changer la couleur du bouton "j'aime" au clic
    const changeHeartColor = (index) => {
        const newHeartColors = [...heartColors];
        newHeartColors[index] =
            newHeartColors[index] === "white" ? "red" : "white";
        setHeartColors(newHeartColors);
    };
    const {setDropdown} = useGlobal()
    return (
        <>
            <div className="mb-9">
                <Navbar className="border-2 bg-white  border-b-gray-400 z-50 fixed top-0 w-full" />
            </div>
            <div onClick={() => setDropdown(false)} className=" bg-white px-9 mx-auto z-0 flex flex-col  ">
                <div className="flex mt-10">
                    <h1 className=" text-2xl mr-5">Shop</h1>
                    {categories.map((categorie, index) => (
                        <div className="flex" key={index}>
                        <ComponentButton
                           className="bg-gray-200 text-black ml-6 w-auto px-3 py-2 text-md tracking-widest rounded"
                           texte={categorie.nom}
                           onClick={() => handleChange(categorie.nom)}
                           />
                           
                        </div>
                    ))}
                </div>
                <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 items-center mx-auto gap-[20px] max-w-sm md:max-w-none md:mx-auto py-16 justify-center content-center">
                    {filteredProducts.map((produit, index) => (
                        <div key={index} className="items-center justify-center w-full h-full static border">
                            <div className="relative">
                                <img className="h-[17rem] w-[50rem]" src={produit.imageUrl} alt={produit.nom} />
                                {/*  */}
                            </div>
                            <div className="p-3">
                            <div className="mb-1 text-gray-500 capitalize text-md">{produit.categorie}</div>
                                <div className="mb-1 text-gray-500 capitalize text-md">{produit.nom}</div>
                                <div className="font-semi-bold">{produit.prix} FCFA</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );

};

export default Shop;
