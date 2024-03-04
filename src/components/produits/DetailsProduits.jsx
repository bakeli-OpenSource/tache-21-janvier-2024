import React, { useState } from 'react';
import useSidebare from '../../utils/hooks/useSidebare';
import HeaderTable from '../headerTable/HeaderTable';
import { useParams } from 'react-router';
import axiosInstance from '../../utils/axiosInstance';

const DetailsProduits = () => {
	const { id } = useParams();
	const [data, setData] = useState([]);
	const fetchProduit = async (id) => {
		try {
			const response = await axiosInstance.get(
				'/produits/' + id,
			);
			setData(response.data);
		} catch (error) {
			console.error('Erreur lors de la récupération des produits:', error);
		}
	};
	fetchProduit(id);
	const { open, closedrop } = useSidebare();
	return (
		<div onClick={closedrop} className={`${open ? 'md:ml-[225px]' : 'md:ml-[85px]'} m-4`}>
			<HeaderTable title="Détail du produit" />
			{data !== null ? (
				<section className="overflow-hidden py-11 font-poppins ">
					<div className="max-w-6xl py-4 mx-auto lg:py-8 md:px-6">
						<div className="flex flex-wrap">
							<div className="w-full md:w-1/2 ">
								<div className="top-0 z-50 overflow-hidden ">
									<div className="relative mb-6 lg:mb-10 lg:h-2/4 ">
										<img
											src={data.imageUrl}
											alt=""
											className="object-cover w-full lg:h-full "
										/>
									</div>
									{/* <div className="flex-wrap hidden md:flex ">
                            <Image src={data.imageUrl} />
                            <Image src={data.imageUrl} />
                            <Image src={data.imageUrl} />
                            <Image src={data.imageUrl} />
                        </div> */}
                    </div>
                </div>
                <div className="w-fullmd:w-1/2 ">
                    <div className="lg:pl-10">
                        <div className="mb-8 ">
                            <h2 className="max-w-xl mt-2 text-2xl font-bold md:text-4xl">
                              {data.nom}
                            </h2>
                            <div className="flex items-center mb-6">
                                <p className="">{data.titre}</p>
                            </div>
                            <p className="max-w-md mb-8 text-gray-700 ">
                              {data.description}
                            </p>
                            <p className="mb-8 text-4xl font-bold text-gray-700 flex ">
                            <h2 className="w-16 text-xl font-bold mt-2">
                                Prix:
                            </h2>
                                <span>{data.prix} F cfa</span>
                            </p>
                        </div>
                       <Titre cle="Catégorie" valeure={data.categorie} />
                       <Titre cle="Taille" valeure={data.taille} />
                       <Titre cle="Quantité" valeure={data.quantite} />
                       <Titre cle="Fournisseur" valeure={data.fournisseur} />
                       <Titre cle="Couleur" valeure={data.couleur} />
                        
                    </div>
                </div>
            </div>
        </div>
    </section> ) : <div>Loader...</div>
      }
    </div>
  )
}

const Titre = ({ cle, valeure }) => {
	return (
		<div className="flex items-center mb-8">
			<h2 className="text-xl font-bold ">{cle}:</h2>
			<div className="flex flex-wrap mx-2 -mb-2">
				<div className="p-2 py-1 mb-2 mr-1 text-center border hover:border-blue-400 dark:border-gray-400 hover:text-blue-600 dark:hover:border-gray-300">
					{valeure}
				</div>
			</div>
		</div>
	);
};
// const Image = ({src}) => {
//   return(
//     <div className="w-1/2 p-2 sm:w-1/4">
//        <div className="block border border-blue-300 dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300">
//           <img src={src} alt="" className="object-cover w-full lg:h-20" />
//       </div>
//     </div>
//   )
// }

export default DetailsProduits;
