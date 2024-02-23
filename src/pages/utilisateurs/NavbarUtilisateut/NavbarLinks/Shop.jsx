import React, { useState, useContext, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../../../../usersComponents/footer/Footer";
import { BsSuitHeartFill, BsPlus } from "react-icons/bs";
import axios from "axios";
import { ProduitsContext } from "../../../../utils/contexte/ProduitsContext";
import { CategorieContext } from "../../../../utils/contexte/CategorieContext";
import ComponentButton from "../../../../usersComponents/button/ComponentButton";
import useGlobal from "../../../../utils/hooks/useGlobal";
import { Link } from 'react-router-dom';


const Shop = () => {
    const [heartColors, setHeartColors] = useState(Array(10).fill("white"));
    const { produits, _id } = useContext(ProduitsContext);
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
    const { setDropdown } = useGlobal()
    return (
        <>
            <div className="mb-9">
                <Navbar className="border-2 bg-white  border-b-gray-400 z-50 fixed top-0 w-full" />
            </div>
            <div onClick={() => setDropdown(false)} className=" bg-white px-9 mx-auto z-0 flex flex-col  ">
                <div className="flex flex-wrap mt-10">
                    <h1 className=" text-2xl mr-5 ">Shop</h1>
                    {categories.map((categorie, index) => (
                        <div className="flex" key={index}>
                            <ComponentButton
                                className="bg-gray-200 mt-5 text-black ml-6 w-auto px-3 py-2 text-md tracking-widest rounded"
                                texte={categorie.nom}
                                onClick={() => handleChange(categorie.nom)}
                            />

                        </div>
                    ))}
                </div>
                <div className="container mx-auto mt-9">
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] 
                                max-w-sm mx-auto md:max-w-none md:mx-0"
                    >
                        {filteredProducts.map((produit, index) => (
                            <div className='shadow-lg rounded bg-white' key={index}>
                                <div className='w-full h-full flex justify-center items-center h-[250px] relative overflow-hidden group transition'>

                                    <Link to={`/details/${_id}`} className='w-[500px] mx-auto flex justify-center items-center'>
                                        <img className='max-h-[160px] group-hover:scale-110 transition duration-300' src={produit.imageUrl} alt={produit.nom} />
                                    </Link>

                                    <div className='absolute bottom-1 -right-1 p-2 flex flex-col justify-center items-center'>
                                        <button>
                                            <div className='flex justify-center items-center text-black font-bold w-7 h-7'>
                                                <BsPlus className='text-3xl' />
                                            </div>
                                        </button>
                                    </div>
                                </div>

                                <div className='p-2 flex flex-col justify-between'>
                                    <div className='text-sm text-gray-500 mb-1'>{produit.categorie}</div>
                                    <Link to={`/details/${_id}`}>
                                        <h2 className='font-semibold mb-1'>{produit.nom}</h2>
                                    </Link>
                                    <div className='font-semibold'>
                                        <span className='bg-gray-200 rounded-full px-3 py-1 text-sm text-gray-700'>{produit.prix} FCFA</span>
                                    </div>
                                </div>

                            </div>

                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );

};

export default Shop;
