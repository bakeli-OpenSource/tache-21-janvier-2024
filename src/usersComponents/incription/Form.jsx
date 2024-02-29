import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../../utils/axiosInstance';

const Form = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		prenom: '',
		nom: '',
		telephone: '',
		email: '',
		adresse: '',
		password: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
		try {
			const response = axiosInstance.post(
				'/authclient/signup',
				formData,
			);
			setFormData({
				prenom: '',
				nom: '',
				telephone: '',
				email: '',
				adresse: '',
				password: '',
			});
			alert('Inscription réussi');
			navigate('/connexion');
			console.log(response.data);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<form className="w-full md:w-3/4" onSubmit={handleSubmit}>
			<h1 className="text-2xl text-center">Inscription</h1>
			<div className="mt-5">
				<div className="flex flex-col justify-center w-full gap-5 mt-5 align-center md:flex-row">
					<div className="w-full mt-5 mb-5 md:w-1/2">
						<label htmlFor="prenom" className="block text-sm font-medium ">
							Prénom
						</label>
						<input
							required
							type="text"
							id="prenom"
							name="prenom"
							className="w-full p-2 mt-1 bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
							value={formData.prenom}
							onChange={handleChange}
						/>
					</div>
					<div className="w-full mt-5 mb-5 md:w-1/2">
						<label htmlFor="nom" className="block text-sm font-medium ">
							Nom
						</label>
						<input
							required
							type="text"
							id="nom"
							name="nom"
							className="w-full p-2 mt-1 bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
							value={formData.nom}
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className="flex flex-col justify-center w-full gap-5 mt- align-center md:flex-row">
					<div className="w-full mb-4 mt- md:w-1/2">
						<label htmlFor="email" className="block text-sm font-medium ">
							Email
						</label>
						<input
							required
							type="email"
							id="email"
							name="email"
							className="w-full p-2 mt-1 bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
							value={formData.email}
							onChange={handleChange}
						/>
					</div>
					<div className="w-full mb-5 mt- md:w-1/2">
						<label htmlFor="password" className="block text-sm font-medium ">
							Mot de pass
						</label>
						<input
							required
							type="password"
							id="password"
							name="password"
							className="w-full p-2 mt-1 bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
							value={formData.password}
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className="flex flex-col justify-center w-full gap-5 mt- align-center md:flex-row">
					<div className="w-full mb-4 mt- md:w-1/2">
						<label htmlFor="adresse" className="block text-sm font-medium ">
							Adresse
						</label>
						<input
							required
							type="adresse"
							id="adresse"
							name="adresse"
							className="w-full p-2 mt-1 bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
							value={formData.adresse}
							onChange={handleChange}
						/>
					</div>
					<div className="w-full mb-5 mt- md:w-1/2">
						<label htmlFor="telephone" className="block text-sm font-medium ">
							Telephone
						</label>
						<input
							required
							type="tel"
							id="telephone"
							name="telephone"
							className="w-full p-2 mt-1 bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
							value={formData.telephone}
							onChange={handleChange}
						/>
					</div>
				</div>
			</div>

			<div className="flex items-center justify-center mt-2">
				<button
					type="submit"
					className="px-4 py-2 text-white bg-gray-800 rounded-md hover:bg-gray-900"
				>
					Enregistrer
				</button>
			</div>
			<p className="py-2 text-center">
				Vous avez deja un compte ?{' '}
				<Link
					to="/connexion"
					className="text-blue-500 underline hover:text-blue-700"
				>
					Se connecter
				</Link>{' '}
			</p>
		</form>
	);
};

export default Form;