// ProductCard.js
import React from 'react';

const ProductCard = ({ product }) => {
	return (
		<div className="flex items-center p-4 mb-4 bg-white rounded-md shadow-md">
			<div className="w-1/2">
				<img
					src={product.imageUrl}
					alt={product.nom}
					className="object-cover w-16 h-16 mb-2 rounded-full ms-10"
				/>
			</div>
			<div className="w-1/2">
				<h3 className="mb-1 text-base font-semibold">{product.nom}</h3>
				<p className="mb-1 text-xs text-gray-600">Ventes: {product.vente}</p>
				<p className="mb-1 text-xs text-gray-600">
					Total: {product.prix * product.vente} FCFA
				</p>
			</div>
		</div>
	);
};

export default ProductCard;
