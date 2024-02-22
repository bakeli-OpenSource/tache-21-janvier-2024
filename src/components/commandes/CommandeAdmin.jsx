import React, { useEffect } from 'react';
import useCommandes from '../../utils/hooks/useCommandes';
import HeaderTable from '../headerTable/HeaderTable';
import Table from '../table/Table';
import useSidebare from '../../utils/hooks/useSidebare';
import Formulaire from '../formulaire/Formulaire';
import useGlobal from '../../utils/hooks/useGlobal';
import { useNavigate } from 'react-router-dom';
import { TbEyeShare } from 'react-icons/tb';
import { MdEdit } from 'react-icons/md';
import { MdOutlineDelete } from 'react-icons/md';
import axios from 'axios';

const CommandeAdmin = () => {
	const {
		table,
		commandes,
		email,
		quantite,
		prixTotal,
		produit,
		setProduit,
		idProduit,
		setIdProduit,
		setPrixTotal,
		setEmail,
		date,
		etat,
		setEtat,
		setDate,
		setQuantite,
		setCommandes,
		telephone,
		setTelephone,
		adresse,
		setAdresse,
		prixLivraison,
		setPrixLivraison,
		prixProduit,
		setPrixProduit,
		setModifModal,
		modif,
	} = useCommandes();

	const { open } = useSidebare();

	const inputs = [
		{
			label: 'Email',
			type: 'text',
			value: email,
			setValue: setEmail,
		},
		{
			label: 'Numero Produit',
			type: 'number',
			value: idProduit,
			setValue: setIdProduit,
		},
		{
			label: 'Nombre',
			type: 'number',
			value: quantite,
			setValue: setQuantite,
		},
		{
			label: 'Date',
			type: 'date',
			value: date,
			setValue: setDate,
		},
		{
			label: 'Etat commande',
			type: 'select',
			value: etat,
			setValue: setEtat,
		},
		{
			label: 'Prix total',
			type: 'number',
			value: prixTotal,
			setValue: setPrixTotal,
		},
		{
			label: 'Telephone',
			type: 'number',
			value: telephone,
			setValue: setTelephone,
		},
		{
			label: 'Produit',
			type: 'text',
			value: produit,
			setValue: setProduit,
		},
		{
			label: 'Adresse',
			type: 'adresse',
			value: adresse,
			setValue: setAdresse,
		},
		{
			label: 'Prix Livraison',
			type: 'number',
			value: prixLivraison,
			setValue: setPrixLivraison,
		},
		{
			label: 'Prix Produit',
			type: 'number',
			value: prixProduit,
			setValue: setPrixProduit,
		},
	];

	const navigate = useNavigate();

	const actions = [
		{
			icon: <TbEyeShare />,
			color: 'bg-green-500',
			handleClick: (commandeId) => {
				navigate('/admin/commandes/DetailsCommande');
			},
		},
		{
			icon: <MdEdit />,
			color: 'bg-orange-500',
			handleClick: (commandeId) => {
				console.log(commandeId);
				hanldleUpdate(commandeId);
			},
		},
		{
			icon: <MdOutlineDelete />,
			color: 'bg-red-600',
			handleClick: (commandeId) => {
				handleDelete(commandeId);
			},
		},
	];

	const handleSelectChange = (e) => {};

	const hanldleUpdate = async (commandeId) => {
		setShowModal(true);
		setModifModal('Modification Commande');
		try {
			const response = await axios.get(
				'https://kay-solu-api.onrender.com/api/commande/' + commandeId,
			);
			const datasUpdates = response.data;
			setEmail(datasUpdates.email);
			setIdProduit(datasUpdates.idproduit);
			setQuantite(datasUpdates.quantite);
			setDate(datasUpdates.date);
			setEtat(datasUpdates.etat);
			setTelephone(datasUpdates.telephone);
			setProduit(datasUpdates.produit);
			setAdresse(datasUpdates.adresse);
			setPrixLivraison(datasUpdates.prixLivraison);
			setPrixProduit(datasUpdates.prixProduit);
		} catch (error) {
			console.error('Erreur lors de la récupération des commandes:', error);
		}
	};

	const { setShowModal } = useGlobal();

	// const handleSubmit = async (e) => {
	//   e.preventDefault();

	//   const  ValidationCommande = {
	//     email,
	//     idProduit,
	//     setIdProduit,
	//     quantite,
	//     produit,
	//     date,
	//     etat,
	//     "prixTotal": prixTotal,
	//     telephone,
	//     adresse,
	//     prixProduit,
	//     prixLivraison
	//   };

	//   try {
	//     // Effectuer une requête POST vers votre API avec Axios
	//     const response = await axios.post('https://kay-solu-api.onrender.com/api/commande',  ValidationCommande);

	//     if (response.status === 201) {
	//       console.log('Commande ajoutée avec succès:', response.data);
	//       setShowModal(false);
	//       setEmail("");
	//       setQuantite("");
	//       setDate("");
	//       setEtat("");
	//       setPrixTotal("");
	//       setTelephone("");
	//       setAdresse("");
	//       setPrixLivraison("");
	//       setPrixProduit("");
	//     } else {
	//       console.error('Erreur lors de l\'ajout de commandes:', response.data);
	//     }

	//     fetchCommandes();
	//   } catch (error) {
	//     console.error('Erreur lors de l\'ajout de commande:', error);
	//   }
	// };

	const calculateTotalPrice = () => {
		const productPrice = parseFloat(prixProduit) || 0;
		const quantity = parseFloat(quantite) || 0;
		const deliveryPrice = parseFloat(prixLivraison) || 0;

		const totalPrice = productPrice * quantity + deliveryPrice;
		return totalPrice.toFixed(2);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const ValidationCommande = {
			email,
			idProduit,
			setIdProduit,
			quantite,
			produit,
			date,
			etat,
			prixTotal: calculateTotalPrice(),
			telephone,
			adresse,
			prixProduit,
			prixLivraison,
		};

		try {
			const response = await axios.post(
				'https://kay-solu-api.onrender.com/api/commande',
				ValidationCommande,
			);

			if (response.status === 201) {
				console.log('Commande ajoutée avec succès:', response.data);
				setShowModal(false);
				setEmail('');
				setQuantite('');
				setDate('');
				setEtat('');
				setPrixTotal('');
				setTelephone('');
				setAdresse('');
				setPrixLivraison('');
				setPrixProduit('');
			} else {
				console.error("Erreur lors de l'ajout de commandes:", response.data);
			}

			fetchCommandes();
		} catch (error) {
			console.error("Erreur lors de l'ajout de commande:", error);
		}
	};

	const handleDelete = async (commandeId) => {
		try {
			console.log('Avant la requête DELETE');
			// Effectuez une requête DELETE vers votre API avec axios
			await axios.delete(
				`https://kay-solu-api.onrender.com/api/commande/${commandeId}`,
			);
			console.log('Aprés la requête DELETE');

			// Mettez à jour l'état des catégories en filtrant la catégorie supprimée de la liste
			const updatedCommande = commandes.filter(
				(commande) => commande._id !== commandeId,
			);
			setCommandes(updatedCommande);

			console.log('Commande supprimée avec succès');
			fetchCommandes();
		} catch (error) {
			console.error('Erreur lors de la suppression de la commande:', error);
		}
	};

	const fetchCommandes = async () => {
		try {
			const response = await axios.get(
				'https://kay-solu-api.onrender.com/api/commandes',
			);
			setCommandes(response.data);
			console.log('Commandes récupérées avec succès');
		} catch (error) {
			console.error('Erreur lors de la récupération des commandes:', error);
		}
	};

	useEffect(() => {
		fetchCommandes();
	}, []);

	return (
		<div className={`${open ? 'md:ml-[225px]' : 'md:ml-[85px]'} m-4 `}>
			<HeaderTable
				title="Commandes"
				nomAjout="Ajouter des Commandes"
				body={
					<Formulaire
						inputs={inputs}
						onSubmit={handleSubmit}
						handleSelectChange={handleSelectChange}
					/>
				}
			/>
			<Table thead={table} tbody={commandes} actions={actions} />
		</div>
	);
};

export default CommandeAdmin;
