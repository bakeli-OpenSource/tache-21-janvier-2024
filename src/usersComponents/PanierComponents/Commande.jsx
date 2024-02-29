import React from 'react';
import { usePanier } from '../../utils/contexte/PanierContext';
import ComponentButton from '../button/ComponentButton';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useGlobal from '../../utils/hooks/useGlobal';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Commande = () => {
	const navigate = useNavigate();
	const { client } = useGlobal();
	const [loggedInUserToken, setLoggedInUserToken] = useState(null);

	const {
		deliveryOption,
		setDeliveryOption,
		totalItems,
		totalPrice,
		cartQuantities,
		items,
		deliveryCosts,
		viderPanier,
	} = usePanier();

	useEffect(() => {
		setLoggedInUserToken(localStorage.getItem('tokenclient'));
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!loggedInUserToken) {
			window.alert(
				'Veuillez vous connecter avant de passer votre commande svp.',
			);
			navigate('/connexion');
			return;
		}

		const orderItems = items.map((item) => ({
			_id: item._id,
			quantity: cartQuantities[item._id],
			prix: item.prix,
			prixTotal: item.prix * cartQuantities[item._id],
			name: item.nom,
			image: item.imageUrl,
		}));

		const prixLivraison = deliveryCosts[deliveryOption];

		const orderData = {
			prenom: client.prenom,
			nom: client.nom,
			email: client.email,
			adresse: client.adresse,
			telephone: client.telephone,
			imageUrl: orderItems.map((item) => item.image),
			idProduit: orderItems.map((item) => item._id),
			produit: orderItems.map((item) => item.name),
			quantite: orderItems.map((item) => item.quantity),
			date: new Date().toISOString().split('T')[0],
			etat: 'en attente',
			prixProduit: orderItems.map((item) => item.prix),
			prixLivraison: prixLivraison,
			prixTotal: orderItems.reduce(
				(total, item) => total + item.prixTotal,
				prixLivraison,
			),
			lu: false,
		};

		console.log('orderData', orderData);

		const urlApiAdmin = 'https://kay-solu-api.onrender.com/api/commande';

		try {
			const response = await axios.post(urlApiAdmin, orderData, {
				headers: {
					'Content-Type': 'application/json',
				},
			});

			if (response.status === 201) {
				console.log('Commande ajoutée avec succès:', response.data);
				toast.success('Commande approuvée avec succès!');
			} else {
				console.error("Erreur lors de l'ajout de commandes:", response.data);
				toast.error("Erreur lors de l'ajout de commandes");
			}
		} catch (error) {
			console.error(
				"Erreur lors de l'envoi de la commande:",
				error.response?.data || error.message,
			);
			toast.error("Erreur lors de l'envoi de la commande");
		}
		viderPanier();
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
							required
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
					{items.length > 0 && (
						<div>
							<div className="flex justify-between">
								<h4 className="text-uppercase mt-1 text-[14px]">Prix total</h4>
								<h4 className="font-bold text-[21px]">{totalPrice} FCFA</h4>
							</div>
							{deliveryCosts[deliveryOption] > 0 && (
								<div className="flex justify-between">
									<h4 className="text-uppercase mt-2 text-[14px]">Livraison</h4>
									<h4 className="font-bold text-[21px]">
										{typeof deliveryCosts[deliveryOption] === 'number'
											? `${deliveryCosts[deliveryOption]}`
											: 0}{' '}
										{'FCFA'}
									</h4>
								</div>
							)}

							<hr className="my-4 border-black" />
							{deliveryCosts[deliveryOption] > 0 && (
								<div className="flex justify-between">
									<h4 className="text-uppercase mt-2 text-[20px]">Total</h4>
									<h4 className="font-bold text-[27px] text-red-500">
										{totalPrice + deliveryCosts[deliveryOption]} FCFA
									</h4>
								</div>
							)}
						</div>
					)}
					{items.length === 0 && (
						<div className="mb-3 text-sm text-red-500">
							Veuillez ajouter au moins une commande avant de valider.
						</div>
					)}
					<ComponentButton
						type="submit"
						disabled={items.length === 0}
						className={`flex justify-center px-3 py-2 mx-auto my-5 text-sm tracking-widest text-white rounded ${
							items.length === 0
								? 'bg-gray-400 cursor-not-allowed'
								: 'bg-slate-800 hover:bg-slate-900'
						}`}
						texte="Valider la commande"
					></ComponentButton>
				</form>
			</div>
			<ToastContainer />
		</div>
	);
};

export default Commande;
