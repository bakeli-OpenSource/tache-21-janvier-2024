import React from 'react';
import Footer from '../../usersComponents/footer/Footer'
import { Link } from 'react-router-dom'; 
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
    <footer>
        <Footer/>
    </footer>
    </div>
  )
}
