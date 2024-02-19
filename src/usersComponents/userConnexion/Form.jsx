import React from 'react';
import { Link } from 'react-router-dom';

const Form = () => {
	return (
		<form className="w-full transition-all duration-700 md:w-3/4 translate-x-">
			<h1 className="text-2xl text-center">Connexion</h1>
			<div className="w-full mx-auto mt-5 md:w-1/2">
				<div className="w-full mb-4 mt- ">
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
				<div className="w-full mb-5 mt- ">
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

			<div className="flex items-center justify-center mt-5">
				<button
					type="submit"
					className="w-full px-4 py-2 text-white bg-gray-800 rounded-md md:w-1/2 hover:bg-gray-900"
				>
					Se connecter
				</button>
			</div>
			<p className="py-2 text-center">
				Vous n'avez pas de compte?{' '}
				<Link
					to="/inscription"
					className="text-blue-500 underline hover:text-blue-700"
				>
					S'inscrire
				</Link>{' '}
			</p>
		</form>
	);
};

export default Form;
