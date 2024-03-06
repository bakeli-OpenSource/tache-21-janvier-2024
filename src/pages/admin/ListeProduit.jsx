import React from 'react';
import ListeProdDashboard from '../../components/listeProd/ListeProdDashboard';
import ProduitContextProvider from '../../utils/contexte/ProduitsContext';

export default function ListeProduit({ tbody }) {
	const produitsAvecVentes = tbody.filter((product) => product.vente > 0);

	return (
		<ProduitContextProvider>
			<ListeProdDashboard produits={produitsAvecVentes} />
		</ProduitContextProvider>
	);
}
