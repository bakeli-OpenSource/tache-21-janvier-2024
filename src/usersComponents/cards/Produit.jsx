import React from 'react';
import { Link } from 'react-router-dom';
import { BsPlus } from 'react-icons/bs';
import { usePanier } from '../../utils/contexte/PanierContext';

const Produit = ({ produit }) => {
	const { addToCart } = usePanier();
	const { _id, imageUrl, categorie, titre, prix } = produit;

	const handleAddToCart = () => {
		addToCart(produit);
	};

	return (
		<div className="border border-[#e4e4e4] h-[300px] relative overflow-hidden group transition">
			<div className="flex flex-col items-center justify-center h-full">
				<Link to={`/produit/${_id}`} className="w-[200px] mx-auto">
					<img
						className="max-h-[160px] group-hover:scale-110 transition duration-300"
						src={imageUrl}
						alt="vetement"
					/>
				</Link>
				<div className="absolute flex items-center justify-center p-2 bottom-1 right-1">
					<button onClick={handleAddToCart}>
						<div className="flex items-center justify-center font-bold text-black w-7 h-7">
							<BsPlus className="text-3xl" />
						</div>
					</button>
				</div>
			</div>
			<div className="mb-1 text-sm text-gray-500 capitalize">{categorie}</div>
			<Link to={`/produit/${_id}`}>
				<h2 className="mb-1 font-semibold">{titre}</h2>
			</Link>
			<div className="font-semibold">{prix} FCFA</div>
		</div>
	);
};

export default Produit;
