import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { FaRegUser, FaRegHeart } from 'react-icons/fa';
import { DiGhostSmall } from 'react-icons/di';
import useGlobal from '../../utils/hooks/useGlobal';

const Dropdown = () => {
	const { handleLogoutUser, profileUser, dropdown, handleToggle, client } =
		useGlobal();
	let connecter;
	const navigate = useNavigate();

	useEffect(() => {
		profileUser();
	}, []);

	const tokenClient = localStorage.getItem('tokenclient');
	const deconnexion = () => {
		handleToggle();

		if (tokenClient === null) {
			navigate('/connexion');
		} else {
			handleLogoutUser();
		}
	};

	if (tokenClient === null) {
		connecter = '/connexion';
	} else {
		connecter = '/compte';
	}

	return (
		<div className="relative">
			<div
				className="flex items-center cursor-pointer font- gap-"
				onClick={handleToggle}
			>
				<FaRegUser className="mr-2 cursor-pointer" size={20} />

				{tokenClient === null
					? 'Se connecter'
					: `bonjour, ${client.prenom === undefined ? '' : client.prenom}`}
				<RiArrowDropDownLine className="p-0 mx-0 mt-2" size={30} />
			</div>

			{dropdown && (
				<div
					className={`absolute  right-0 mt- w-48  flex ${
						tokenClient === null ? ' flex-col' : 'flex-col-reverse mt-5'
					}    bg-white px-  border border-gray-200 rounded-md shadow-lg py-4`}
				>
					<button
						onClick={deconnexion}
						className={`block ${
							tokenClient === null ? ' ' : 'uppercase '
						} px-4 mb-4  py-2 mx-3 text-center text-upercase text-sm bg-gray-800 text-white rounded hover:bg-gray-900`}
					>
						{tokenClient === null ? 'se connecter' : 'deconnexion'}
					</button>
					<div
						className={`${
							tokenClient
								? 'border-b-2 border-slate-700 mb-3'
								: 'border-t-2 border-slate-700'
						}  flex flex-col`}
					>
						<Link
							to={connecter}
							onClick={handleToggle}
							className="flex items-center gap-3 px-4 py-2 my-0 text-sm  text-upercase hover:bg-gray-200"
						>
							<FaRegUser size={16} />
							Votre compte
						</Link>
						<Link
							to="/"
							onClick={handleToggle}
							className="flex items-center gap-4 px-4 py-2 my-0 text-sm mt- text-upercase hover:bg-gray-200"
						>
							<DiGhostSmall size={20} />
							Vos commandes
						</Link>
						<Link
							to="/"
							onClick={handleToggle}
							className="flex items-center gap-3 px-4 py-2 my-0 mb-3 text-sm mt- text-upercase hover:bg-gray-200"
						>
							<FaRegHeart size={16} />
							Votre Liste d'envies
						</Link>
					</div>
				</div>
			)}
		</div>
	);
};

export default Dropdown;
