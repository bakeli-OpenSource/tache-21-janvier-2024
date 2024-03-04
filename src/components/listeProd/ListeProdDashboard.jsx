// ListeProdDashboard.js
import React from 'react';
import Table from '../table/Table';
import ProductCard from '../productCard/ProductCard'; // Importez le nouveau composant

export default function ListeProdDashboard({ tbody }) {
	const table = ['Article', 'Quantité', 'Prix'];

	return (
		<div className="w-full my-3 mr-5">
			<div className="bg-blue-950 flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED] mb-[20px]">
				<h2 className="text-white text-[16px] leading-[19px] font-bold">
					Liste des Produits
				</h2>
			</div>
			{tbody.length !== 0 ? (
				<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
					{tbody.map((product, index) => (
						<ProductCard key={index} product={product} />
					))}
				</div>
			) : (
				<p className="text-center text-gray-600">Aucun produit disponible.</p>
			)}
		</div>
	);
}
