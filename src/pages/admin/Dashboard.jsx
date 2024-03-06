import React, { useEffect, useState } from 'react';
import Filtre from '../../components/cards-et-filtre/Filtre';
import Revenue from './Revenue';
import useSidebare from '../../utils/hooks/useSidebare';
import ListeProduit from './ListeProduit';
import Graphique2 from './graphique2/Graph';
import Cards from '../../components/cards-et-filtre/Cards';
import ProduitContextProvider from '../../utils/contexte/ProduitsContext';
import useProduits from '../../utils/hooks/useProduits';

const Dashboard = () => {
	const { open, closedrop } = useSidebare();

	const { filtreProduits, handleSelectChangeCategorie } = useProduits();

	return (
		<div
			onClick={closedrop}
			className={`${
				open ? 'md:ml-[230px] ' : 'md:ml-[85px] m-3 mb-0'
			} m-5 mb-0`}
		>
			<div className="container text-xl font-bold ">
				<div className="flex justify-end">
					<ProduitContextProvider>
						<Filtre handleSelectChange={handleSelectChangeCategorie} />
					</ProduitContextProvider>
				</div>
				<div>
					<Cards />
				</div>
			</div>

			<div className="w-full gap-8  md:grid md:grid-cols-1 lg:grid-cols-2">
				<div className="">
					<Revenue />
				</div>
				<div className="pie-chart-container md:w-full lg:w-auto">
					<Graphique2 />
				</div>
			</div>

			<div className="mt-5">
				<ListeProduit tbody={filtreProduits} />
			</div>
		</div>
	);
};

export default Dashboard;
