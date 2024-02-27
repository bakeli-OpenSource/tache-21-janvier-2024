import React from 'react'
import useCommandes from '../../utils/hooks/useCommandes';
import HeaderTable from '../headerTable/HeaderTable';
import Table from '../table/Table';
import useSidebare from '../../utils/hooks/useSidebare';


const DetailsCommande = () => {
 

  const { table1, commandes } = useCommandes([]);
  const { open } = useSidebare();

  // Utilisez la fonction map pour extraire les valeurs correctes des commandes
  const tbodyData = commandes.map((commande) => [
    commande['Référence'],
    commande['Produit'],
    commande['Etat de la commande'],
    commande['Quantité'],
    commande['Prix Produit'],
    commande['Prix total'],
  ]);


  return (
    <div className={`${open ? "md:ml-[225px]" : "md:ml-[85px]"} m-4 `}>
    
      <HeaderTable title="Détails Commandes"  />
      <Table thead={table1} tbody={tbodyData}  />
    </div>
  )
}

export default DetailsCommande;
