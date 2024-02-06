import React from 'react';
import { Link } from 'react-router-dom'; // Assurez-vous d'importer Link depuis 'react-router-dom'
import { ShoppingCartIcon } from '@heroicons/react/outline';

export default function Accueil() {
  return (
    <div>
        <h1>Accueil</h1>

      <Link to="/Panier" className="flex items-center">
      <span className="mr-2">
        <ShoppingCartIcon className="w-6 h-6" />
      </span>
      <span className="text-sm font-semibold">Aller au panier</span>
    </Link>
    </div>
  )
}
