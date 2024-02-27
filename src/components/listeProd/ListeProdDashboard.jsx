import React, {  useEffect, useState } from 'react'
import Table from '../table/Table';
import useProduits from '../../utils/hooks/useProduits';

export default function ListeProdDashboard({tbody}) {	
	
	const table = [
		'Article', 'Quantité', 'Prix'
	  ]


	return (
		<div className="w-full my-3 mr-5">
			<div className="bg-blue-950 flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED] mb-[20px]">
				<h2 className="text-white text-[16px] leading-[19px] font-bold">
					Revenue
				</h2>
			</div>
			<Table thead={table} tbody={tbody} />
		</div>
	);
}
