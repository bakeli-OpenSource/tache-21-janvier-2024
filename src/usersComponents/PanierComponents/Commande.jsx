import React from 'react';
import { usePanier } from '../../utils/contexte/PanierContext';
import ComponentButton from '../button/ComponentButton';


const Commande = () => {
    const {
		deliveryOption,
		setDeliveryOption,
		totalItems,
		totalPrice,
		promoCode,
		setPromoCode,
		isPromoCodeApplied,
		setIsPromoCodeApplied,
		handleApplyPromoCode,
		deliveryCosts
	  } = usePanier();

  return (
    <div>
    <div className="p-5 mx-3">
    <h3 className="text-2xl font-bold">Commandes</h3>

    <hr className="border-black my-6" />

    <div className="flex justify-between mb-4">
        <h5 className="text-uppercase text-[20px] font-bold">
            Produits {totalItems}
        </h5>
        <h5 className="text-[20px] font-bold">
            {totalPrice.toFixed(2)} FCFA
        </h5>
    </div>

    <h5 className="mb-3 text-uppercase">Livraison</h5>

    <div className="pb-2 mb-4">
        <select
            className="w-full p-2 bg-white rounded"
            value={deliveryOption}
            onChange={(e) => setDeliveryOption(e.target.value)}
        >
            <option value="1">Livraison-Dakar-1000 FCFA</option>
            <option value="2">Dakar-Banlieu-1500 FCFA</option>
            <option value="3">Dakar-Rufisque-2000 FCFA</option>
            <option value="4">Dakar-Thies-2500 FCFA</option>
            <option value="5">Dakar-Regions-4000 FCFA</option>
        </select>
    </div>

    <h5 className="mb-3 text-uppercase">Code Promo</h5>

    <div className="mb-5">
        <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Enter your code"
            value={promoCode}
            onChange={(e) => {
                setPromoCode(e.target.value);
                setIsPromoCodeApplied(false);
            }}
            required
        />
        <ComponentButton
            className={`w-20 h-10 my-5 text-white bg-purple-500 ${
                isPromoCodeApplied ? 'bg-gray-500 cursor-not-allowed' : ''
            }`}
            texte="Appliquez"
            onClick={handleApplyPromoCode}
            disabled={isPromoCodeApplied}
        />
    </div>

    <hr className="border-black my-4" />

    <div className="flex justify-between mb-5">
        <h5 className="text-uppercase mt-2 text-[20px]">Prix Total</h5>
        <h5 className="font-bold text-[30px]">
            {(totalPrice + deliveryCosts[deliveryOption]).toFixed(2)}
            FCFA
        </h5>
    </div>

    <button className="w-full px-4 py-2 rounded-lg text-[20px] text-white bg-black">
        Valider la commande
    </button>
</div>
    </div>
  );
};

export default Commande;
