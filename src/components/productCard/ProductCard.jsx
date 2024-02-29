// ProductCard.js
import React from 'react';

const ProductCard = ({ product }) => {
	return (
		<div className="flex items-center p-4 mb-4 bg-white rounded-md shadow-md">
			<div className="w-1/3">
				<img
					src={product.imageUrl}
					alt={product.nom}
					className="object-cover w-16 h-16 mb-2 rounded-full"
				/>
			</div>
			<div className="w-2/3">
				<h3 className="mb-1 text-base font-semibold">{product.nom}</h3>
				<p className="mb-1 text-xs text-gray-600">{product.titre}</p>
				<p className="mb-1 text-xs text-gray-600">
					Quantité: {product.quantite}
				</p>
				<p className="mb-1 text-xs text-gray-600">Prix: {product.prix}</p>
				{/* Ajoutez d'autres informations sur le produit ici */}
			</div>
		</div>
	);
};

export default ProductCard;
