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
		deliveryCosts,
	} = usePanier();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (deliveryOption === '') {
			alert('Veuillez choisir une option de livraison.');
			return;
		}
		alert(
			`Votre commande a bien été prise en compte. Vous recevrez un courriel de confirmation dans 24 heures.`,
		);
	};

	return (
		<div>
			<div className="p-5 mx-3">
				<h3 className="text-2xl font-bold">Commande</h3>

				<hr className="my-6 border-black" />

				<div className="flex justify-between mb-4">
					<h5 className="text-uppercase text-[20px] font-bold">
						Produits {totalItems}
					</h5>
					<h5 className="text-[20px] font-bold">{totalPrice} FCFA</h5>
				</div>

				<form action="" onSubmit={handleSubmit}>
					<h5 className="mb-3 text-uppercase">Livraison</h5>

					<div className="pb-2 mb-4">
						<select
							className="w-full p-2 bg-white rounded"
							value={deliveryOption}
							onChange={(e) => setDeliveryOption(e.target.value)}
						>
							<option value="" disabled hidden>
								Choisir votre livraison
							</option>
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
						/>
						<ComponentButton
							className={`w-20 h-10 my-3 text-white bg-purple-500 ${
								isPromoCodeApplied ? 'bg-gray-500 cursor-not-allowed' : ''
							}`}
							texte="Appliquez"
							onClick={handleApplyPromoCode}
							disabled={isPromoCodeApplied}
						/>
					</div>

					<div className="flex justify-between">
						<h4 className="text-uppercase mt-1 text-[15px]">Prix total</h4>
						<h4 className="font-bold text-[20px]">{totalPrice} FCFA</h4>
					</div>
					<div className="flex justify-between">
						<h4 className="text-uppercase mt-2 text-[15px]">Livraison</h4>
						<h4 className="font-bold text-[20px]">
							{deliveryCosts[deliveryOption]} FCFA
						</h4>
					</div>

					<hr className="my-4 border-black" />

					<div className="flex justify-between mb-5">
						<h4 className="text-uppercase mt-2 text-[25px] text-blue-400">
							Total
						</h4>
						<h4 className="font-bold text-[35px] text-red-500">
							{Number(totalPrice) + Number(deliveryCosts[deliveryOption])}
							FCFA
						</h4>
					</div>

					<ComponentButton
						type="submit"
						className="w-full px-2 py-2 rounded-lg text-[18px] text-white bg-black"
						texte="Valider la commande"
					></ComponentButton>
				</form>
			</div>
		</div>
	);
};

export default Commande;
