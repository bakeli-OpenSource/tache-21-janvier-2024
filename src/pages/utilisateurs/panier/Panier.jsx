// Import des modules React
import React, { useState } from 'react';
import image4 from '../../../assets/images/image4.jpg';
import image6 from '../../../assets/images/image6.jpg';
import { Link } from 'react-router-dom';

function Panier() {
  const [panier, setPanier] = useState([
    { id: 1, nom: 'Produit 1', prix: 5000, quantite: 1, image: image4 },
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
    <div className="container p-4 mx-auto">
      <h1 className="mb-4 text-3xl font-bold">Votre Panier</h1>
      <table className="min-w-full border border-gray-300">
        <thead className="text-white bg-black">
          <tr>
            <th className="px-4 py-2 text-center border-b">Produit</th>
            <th className="px-4 py-2 text-center border-b">Nom</th>
            <th className="px-4 py-2 text-center border-b">Prix</th>
            <th className="px-4 py-2 text-center border-b">Quantité</th>
            <th className="px-4 py-2 text-center border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {panier.map((produit) => (
            <tr key={produit.id}>
              <td className="px-4 py-2 text-center border-b">
                <img src={produit.image} alt={produit.nom} className="object-cover w-16 h-16" />
              </td>
              <td className="px-4 py-2 text-center border-b">{produit.nom}</td>

              <td className="px-4 py-2 text-center border-b">{produit.prix} FCFA</td>
              <td className="px-4 py-2 text-center border-b">
                <button onClick={() => diminuerQuantite(produit.id)} className="mr-2">
                  -
                </button>
                {produit.quantite}
                <button onClick={() => augmenterQuantite(produit.id)} className="ml-2">
                  +
                </button>
              </td>
              <td className="px-4 py-2 text-center border-b">
                <button onClick={() => supprimerProduit(produit.id)} className="bg-red-500 text-white-500">
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="mt-10 text-lg font-bold">Total: {panier.reduce((total, produit) => total + produit.prix * produit.quantite, 0)} FCFA</p>

      <div className="flex justify-between mt-4">
        <button onClick={validerCommande} className="px-4 py-2 text-white bg-green-500 rounded">
          Valider la commande
        </button>

        <Link to="/" className="px-4 py-2 text-white bg-blue-500 rounded">
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}

export default Panier;
