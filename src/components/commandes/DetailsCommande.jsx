import React from 'react'
import useCommandes from '../../utils/hooks/useCommandes';
import HeaderTable from '../headerTable/HeaderTable';
import Table from '../table/Table';
import useSidebare from '../../utils/hooks/useSidebare';
// import { useParams } from 'react-router-dom';
import { useState } from 'react';

const DetailsCommande = () => {
  // const {prix} = useParams()
  const {table1} = useCommandes();
  const {setIsOpen} = useState([]);
  const {open} = useSidebare()


  const renderTable = table1 && Array.isArray(table1) && table1.map((item, index) => (
    // votre logique de rendu ici
    <div key={index}>
      <p>Email: {item.email}</p>
      <p>Quantité: {item.quantite}</p>
      {/* Ajoutez d'autres propriétés que vous souhaitez afficher */}
    </div>
  ));

  const prixTotal = table1 ? table1.reduce((acc, item) => acc + parseFloat(item.prix.replace(/\s+/g, '')), 0) : 0;
  

  return (
    <div className={`${open ? "md:ml-[225px]" : "md:ml-[85px]"} m-4 `}>
      <HeaderTable title="Détails Commandes"  />
      <Table thead={table1} tbody={setIsOpen}  />
      <h1>PRIX TOTAL : {prixTotal.toFixed(2)}fr</h1>
      {renderTable}
      <div className="my-4">
        <label  className="block mb-2 text-sm font-medium ">Etat de la Commande</label>
        <select  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option selected>Etat du Commande ....</option>
          <option value="NT">Nom traitée</option>
          <option value="EN">En cours de traitement</option>
          <option value="PT">Préte</option>
          <option value="AR">Archivée</option>
          <option value="AN">Annulée</option>
          <option value="PY">Payée</option>
          <option value="RC">Réceptionnée</option>
        </select>
        <div className="flex justify-end py-4">
          <button class="my-4 bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Commander
          </button>
        </div>
      </div>
    </div>
  )
}

export default DetailsCommande;
