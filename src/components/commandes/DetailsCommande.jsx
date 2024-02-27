import React from 'react'
import useCommandes from '../../utils/hooks/useCommandes';
import HeaderTable from '../headerTable/HeaderTable';
// import Table from '../table/Table';
import useSidebare from '../../utils/hooks/useSidebare';


const DetailsCommande = () => {
 
  const {  commandes } = useCommandes([]);
  const { open } = useSidebare();
  console.log(commandes);
  // Utilisez la fonction map pour extraire les valeurs correctes des commandes
  const tbodyData = commandes.map((commande) => ({
    référence: commande['Référence'],
    produit: commande['Produit'],
    etat: commande['Etat de la commande'],
    quantité: commande['Quantité'],
    prixProduit: commande['Prix Produit'],
    prixTotal: commande['Prix total'],
  }));

  return (
    <div className={`${open ? "md:ml-[225px]" : "md:ml-[85px]"} m-4 `}>
      <HeaderTable title="Détails Commandes" />
      <div className="grid grid-cols-2 gap-4">
        
        {tbodyData.map((item, index) => (
          <div key={index} className="border p-2">
            <h3>{item.produit}</h3>
            <p>Référence: {item.référence}</p>
            <p>État: {item.etat}</p>
            <p>Quantité: {item.quantité}</p>
            <p>Prix Produit: {item.prixProduit}</p>
            <p>Prix Total: {item.prixTotal}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DetailsCommande;
