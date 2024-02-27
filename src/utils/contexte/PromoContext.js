// import { createContext } from "react";
// import useProduits from "../hooks/useProduits";


// const PromoContext = createContext()

// const promoProvider = ({children}) => {
    
//     const {produits} = useProduits();
    
//     const { _id, imageUrl, categorie, titre, prix, promo} = produit;  

//     const produitCourant = produits.find(item => item._id === _id);
//     const reduction = produitCourant ? produitCourant.promo : promo ? promo : 0; 
//     const prixAAjouter = Math.floor( prix - (prix * (reduction / 100)));
//     const handleAddToCart = () => {
//       const produitAAjouter = { ...produit, prix: prixAAjouter };
//       addToCart(produitAAjouter);
//       };

// }