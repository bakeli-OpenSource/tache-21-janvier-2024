import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useGlobal from '../../utils/hooks/useGlobal';

const CompteComponent = () => {
	const navigate = useNavigate();
	const { client, setClient } = useGlobal();
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
		setClient({ ...client, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<div>
			<h1 className="pb-2 font-medium border border-t-0 border-s-0 border-e-0 ">
				Information personnelles{' '}
				<span className="font-medium text-red-500 uppercase ms-5">
					"modification indisponible pour le moment"
				</span>
			</h1>
			<form className="w-full mx-auto md:w-3/4" onSubmit={handleSubmit}>
				<div className="mt-">
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
								value={client.prenom}
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
								value={client.nom}
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
								value={client.email}
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
								value={client.password}
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
								value={client.adresse}
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
								value={client.telephone}
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
						Sauvegarder
					</button>
				</div>
			</form>
		</div>
	);
};

export default CompteComponent;
