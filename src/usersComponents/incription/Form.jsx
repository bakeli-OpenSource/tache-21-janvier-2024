import React from 'react';
import { Link } from 'react-router-dom';

const Form = () => {
	return (
		<form className="w-full md:w-3/4">
			<h1 className="text-2xl text-center">Inscription</h1>
			<div className="mt-5">
				<div className="flex flex-col justify-center w-full gap-5 mt-5 align-center md:flex-row">
					<div className="w-full mt-5 mb-5 md:w-1/2">
						<label
							htmlFor="prenom"
							className="block text-sm font-medium text-gray-600"
						>
							Prénom
						</label>
						<input
							required
							type="text"
							id="prenom"
							name="prenom"
							className="w-full p-2 mt-1 text-gray-400 bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
						/>
					</div>
					<div className="w-full mt-5 mb-5 md:w-1/2">
						<label
							htmlFor="nom"
							className="block text-sm font-medium text-gray-600"
						>
							Nom
						</label>
						<input
							required
							type="text"
							id="nom"
							name="nom"
							className="w-full p-2 mt-1 text-gray-400 bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
						/>
					</div>
				</div>
				<div className="flex flex-col justify-center w-full gap-5 mt- align-center md:flex-row">
					<div className="w-full mb-4 mt- md:w-1/2">
						<label
							htmlFor="email"
							className="block text-sm font-medium text-gray-600"
						>
							Email
						</label>
						<input
							required
							type="email"
							id="email"
							name="email"
							className="w-full p-2 mt-1 text-gray-400 bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
						/>
					</div>
					<div className="w-full mb-5 mt- md:w-1/2">
						<label
							htmlFor="password"
							className="block text-sm font-medium text-gray-600"
						>
							Mot de pass
						</label>
						<input
							required
							type="password"
							id="password"
							name="password"
							className="w-full p-2 mt-1 text-gray-400 bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
						/>
					</div>
				</div>
				<div className="flex flex-col justify-center w-full gap-5 mt- align-center md:flex-row">
					<div className="w-full mb-4 mt- md:w-1/2">
						<label
							htmlFor="adresse"
							className="block text-sm font-medium text-gray-600"
						>
							Adresse
						</label>
						<input
							required
							type="adresse"
							id="adresse"
							name="adresse"
							className="w-full p-2 mt-1 text-gray-400 bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
						/>
					</div>
					<div className="w-full mb-5 mt- md:w-1/2">
						<label
							htmlFor="telephone"
							className="block text-sm font-medium text-gray-600"
						>
							Telephone
						</label>
						<input
							required
							type="tel"
							id="telephone"
							name="telephone"
							className="w-full p-2 mt-1 text-gray-400 bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
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
