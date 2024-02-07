import React from 'react'
import useCommandes from '../../utils/hooks/useCommandes';
import HeaderTable from '../headerTable/HeaderTable';
import Table from '../table/Table';
import useSidebare from '../../utils/hooks/useSidebare';
// import { useParams } from 'react-router-dom';

const DetailsCommande = () => {
  // const {prix} = useParams()
  const {table3, table4} = useCommandes();
  const {open} = useSidebare()

  const prixTotal = table4.reduce((acc, item) => acc + parseFloat(item.prix.replace(/\s+/g, '')), 0);

  return (
    <div className={`${open ? "md:ml-[225px]" : "md:ml-[85px]"} m-4 `}>
      <HeaderTable title="Détails Commandes"  />
      <Table thead={table3} tbody={table4}  />
      <h1>PRIX TOTAL : {prixTotal.toFixed(2)}fr</h1>

      <div className="my-4">
        <label for="countries" class="block mb-2 text-sm font-medium ">Etat de la Commande</label>
        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option selected>Etat du Commande</option>
          <option value="US">Nom traitée</option>
          <option value="CA">En cours de traitement</option>
          <option value="FR">Préte</option>
          <option value="DE">Archivée</option>
          <option value="DE">Annulée</option>
          <option value="DE">Payée</option>
          <option value="DE">Réceptionnée</option>
        </select>
        <button type='submit'>Envoyer la commande</button>
      </div>
    </div>
  )
}

export default DetailsCommande;
