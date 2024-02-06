// Import des modules React
import React, { useState } from 'react';
import image4 from '../../../assets/images/image4.jpg';
import image6 from '../../../assets/images/image6.jpg';
import { Link } from 'react-router-dom';

function Panier() {
  const [panier, setPanier] = useState([
    { id: 1, nom: 'Produit 1', prix: 5000, quantite: 2, image: image4 },
    { id: 2, nom: 'Produit 2', prix: 10000, quantite: 1, image: image6 },
  ]);

  const supprimerProduit = (id) => {
    const nouveauPanier = panier.filter((produit) => produit.id !== id);
    setPanier(nouveauPanier);
  };

  const augmenterQuantite = (id) => {
    const nouveauPanier = panier.map((produit) => {
      if (produit.id === id) {
        return { ...produit, quantite: produit.quantite + 1 };
      }
      return produit;
    });
    setPanier(nouveauPanier);
  };

  const diminuerQuantite = (id) => {
    const nouveauPanier = panier.map((produit) => {
      if (produit.id === id && produit.quantite > 1) {
        return { ...produit, quantite: produit.quantite - 1 };
      }
      return produit;
    });
    setPanier(nouveauPanier);
  };

  const validerCommande = () => {
    console.log('Commande validée !');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Votre Panier</h1>
      <table className="min-w-full border border-gray-300">
        <thead className="bg-black text-white">
          <tr>
            <th className="py-2 px-4 border-b text-center">Produit</th>
            <th className="py-2 px-4 border-b text-center">Nom</th>
            <th className="py-2 px-4 border-b text-center">Prix</th>
            <th className="py-2 px-4 border-b text-center">Quantité</th>
            <th className="py-2 px-4 border-b text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {panier.map((produit) => (
            <tr key={produit.id}>
              <td className="py-2 px-4 border-b text-center">
                <img src={produit.image} alt={produit.nom} className="w-16 h-16 object-cover" />
              </td>
              <td className="py-2 px-4 border-b text-center">{produit.nom}</td>

              <td className="py-2 px-4 border-b text-center">{produit.prix} FCFA</td>
              <td className="py-2 px-4 border-b text-center">
                <button onClick={() => diminuerQuantite(produit.id)} className="mr-2">
                  -
                </button>
                {produit.quantite}
                <button onClick={() => augmenterQuantite(produit.id)} className="ml-2">
                  +
                </button>
              </td>
              <td className="py-2 px-4 border-b text-center">
                <button onClick={() => supprimerProduit(produit.id)} className="text-red-500">
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="mt-10 text-lg font-bold">Total: {panier.reduce((total, produit) => total + produit.prix * produit.quantite, 0)} FCFA</p>

      <div className="flex justify-between mt-4">
        <button onClick={validerCommande} className="bg-green-500 text-white px-4 py-2 rounded">
          Valider la commande
        </button>

        <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded">
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}

export default Panier;
