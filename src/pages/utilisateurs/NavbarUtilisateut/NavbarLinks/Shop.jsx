import React, { useState, useContext } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../../../../usersComponents/footer/Footer";
import { BsSuitHeartFill, BsPlus } from "react-icons/bs";
import { ProduitsContext } from '../../../../utils/contexte/ProduitsContext';
import { CategorieContext } from "../../../../utils/contexte/CategorieContext";
const Shop = () => {
    const [heartColors, setHeartColors] = useState(Array(10).fill('white'));
    const { produits } = useContext(ProduitsContext);
    const { categories } = useContext(CategorieContext);
    // Fonction pour changer la couleur du bouton "j'aime" au clic
    const changeHeartColor = (index) => {
        const newHeartColors = [...heartColors];
        newHeartColors[index] = newHeartColors[index] === 'white' ? 'red' : 'white';
        setHeartColors(newHeartColors);
    };

    return (
        <>
            <div className="mb-9">
                <Navbar className="border-2 bg-white  border-b-gray-400 z-50 fixed top-0 w-full" />
            </div>
            <div className=" bg-white px-9 mx-auto z-0 flex flex-col  ">
                <div className="flex">
                <h1 className="mt-9 text-2xl mr-5">Shop</h1>
                {categories.map((categorie, index) => (
              <button key={index}>{categorie.nom}</button>
            ))}
                </div>
                
                <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 items-center mx-auto gap-[20px] max-w-sm md:max-w-none md:mx-auto py-16 justify-center content-center">
                    {produits.map((produit, index) => (
                        <div key={index} className="items-center justify-center w-full h-full static border">
                            <div className="relative">
                                <img className="h-[17rem] w-[50rem]" src={produit.imageUrl} alt={produit.nom} />
                                {/*  */}
                            </div>
                            <div className="p-3">
                                <div className="mb-1 text-gray-500 capitalize text-md">{produit.nom}</div>
                                <div className="font-semi-bold">{produit.prix} FCFA</div>
                            </div>
                        </div>
                    ))}
                </div>

                
            </div>
            <Footer/>
        </>
    );
}

export default Shop;

