import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';
import { MdMenu, MdClose } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';
import { ShoppingCartIcon } from '@heroicons/react/outline';
import NavInput from '../NavInput';
import { usePanier } from '../../../../utils/contexte/PanierContext';

const Navbar = ({ className }) => {
	const [open, setOpen] = useState(false);
	const [search, setSearch] = useState(false);
	const { notificationCount } = usePanier();

	return (
		<nav className={className}>
			<div className="flex items-center justify-between px-8 py-3">
				<div className="flex items-center justify-between w-full gap-8 md:w-auto ">
					<div className="z-50 flex justify-between w-full p- md:w-auto">
						<Link
							to={'/'}
							className="text-2xl font-bold uppercase md:cursor-pointer"
						>
							Cein.
						</Link>
						<div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
							{open ? <MdClose /> : <MdMenu />}
						</div>
					</div>
					<ul className="items-center hidden md:flex gap- ">
						<NavLinks />
					</ul>
				</div>

				<div className="hidden md:block">
					<div className="flex items-center justify-around py-1 text-gray-800 gap-9">
						<div
							className={`flex flex-row-reverse m-0 p-0 transition ease-in-out delay-150 items-center ${
								search ? 'rounded-full border border-gray-300 px-3 py-1' : ''
							}`}
						>
							<div
								className="text-gray-900 duration-500 cursor-pointer mt"
								onClick={() => setSearch(!search)}
							>
								{!search ? <BsSearch /> : <MdClose />}
							</div>

							<NavInput type="text" search={search} />
						</div>
						<Link to={'/connexion'} className="font-bold">
							Se connecter
						</Link>
						<Link to="/Panier" className="relative flex items-center group">
							<span className="mr-2">
								<ShoppingCartIcon className="w-6 h-6" />
							</span>

							<span className="absolute px-2 py-1 text-xs text-white bg-red-500 rounded-full -top-2 -right-2">
								{notificationCount}
							</span>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
