import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import useSidebare from '../../utils/hooks/useSidebare';
import ComponentButton from '../button/ComponentButton';
import { ProduitContext } from './ProduitContext';
import Produit from './Produit';
import HeaderTable from '../../components/headerTable/HeaderTable';

// https://kay-solu-api.onrender.com/api/produits

const DetailsCard = () => {
  const { _id, imageUrl, categorie, titre, prix } = Produit;
  const {id} = useParams();
    const [produits, setProduits] = useState([])
    const fetchProduit = async (_id) => {
      try {
        const response = await axios.get("https://kay-solu-api.onrender.com/api/produits/" + _id);
        setProduits(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des produits:", error);
      }
    };
    fetchProduit(_id);
    const {open} = useSidebare()
  return (
    <div className={`${open ? "md:ml-[225px]" : "md:ml-[85px]"} m-4`}>
      <HeaderTable title="Détail du produit" />
      {produits !== null ?
      <section className="overflow-hidden py-11 font-poppins ">
        <div className="max-w-6xl px-4 py-4 lg:py-8 md:px-6 shadow-xl">
            <div className="flex flex-wrap -mx-4">
                <div className="w-full px-4 md:w-1/2 ">
                    <div className=" top-0 z-50 overflow-hidden ">
                        <div className="relative mb-6 lg:mb-10 lg:h-full ">
                            <img src={imageUrl} alt="" className="object-cover w-full lg:h-full " />
                        </div>
                        <div className="flex-wrap hidden md:flex ">
                            <image src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg" />
                            <image src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg" />
                            <image src={produits.imageUrl} />
                            <image src={produits.imageUrl} />
                        </div>
                    </div>
                </div>
                <div className="w-full px-4 md:w-1/2 ">
                    <div className="lg:pl-20">
                        <div className="mb-8 ">
                            <h2 className="max-w-xl mt-2 text-2xl font-bold  md:text-4xl">
                             Image de la nature {produits.nom}
                            </h2>
                            <div className="flex items-center mb-6">
                                <p className="">{produits.titre}</p>
                            </div>
                            <p className="max-w-md mb-8 text-gray-700 ">
                             Description du produit {produits.description}
                            </p>
                            <div className="mb-8 text-4xl font-bold text-gray-700 flex ">
                            <h2 className="w-16 text-xl font-bold mt-2">
                                Prix:
                            </h2>
                                <span>{prix}</span>
                            </div>
                            <div>
                              <h3 className='text-sm font-bold mt-2'>Couleur du produit</h3>
                              <div className='flex gap-7 mt-3'>
                                <button type="button" className='bg-gray-600 w-8 h-8 rounded-full'/>
                                <button type="button" className='bg-gray-600 w-8 h-8 rounded-full'/>
                                <button type="button" className='bg-gray-600 w-8 h-8 rounded-full'/>
                              </div>
                            </div>
                            <div>
                              <h3 className='text-sm font-bold mt-2'>Taille du produit</h3>
                              <div className='flex gap-7 mt-3'>
                                  <button type="button" className=' w-8 h-8'>XS</button>
                                  <button type="button" className=' w-8 h-8'>S</button>
                                  <button type="button" className=' w-8 h-8'>M</button>
                                  <button type="button" className=' w-8 h-8'>L</button>
                                  <button type="button" className=' w-8 h-8'>XL</button>
                              </div>
                            </div>
                            <ComponentButton  className="bg-black text-white w-full px-3 py-2 my-5 text-sm tracking-widest rounded" texte="Ajouter au panier"/>
                        </div>
                       {/* <Titre cle="Catégorie" valeure={data.categorie} />
                       <Titre cle="Taille" valeure={data.taille} />
                       <Titre cle="Quantité" valeure={data.quantite} />
                       <Titre cle="Fournisseur" valeure={data.fournisseur} />
                       <Titre cle="Couleur" valeure={data.couleur} /> */}
                        
                    </div>
                </div>
            </div>
        </div>
    </section> : <div>Loader...</div>
      }
    </div>
  )
}

export default DetailsCard
