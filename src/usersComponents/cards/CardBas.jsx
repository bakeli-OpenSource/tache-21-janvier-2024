import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import image6 from '../../assets/images/image6.jpg';

const CardBas = () => {
	return (
		<div className="relative transition group">
			<div>
				<img className="w-full h-full rounded-lg" src={image6} alt="vêtement" />
			</div>

			<div className="absolute inset-0 flex items-center justify-center transition-opacity bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
				<a
					href="https://www.instagram.com/direct/t/104457564393183"
					target="_blank"
					rel="noopener noreferrer"
				>
					<button className="flex items-center justify-center text-white rounded-full w-7 h-7">
						<BsInstagram className="text-3xl" />
					</button>
				</a>
			</div>
		</div>
	);
};

export default CardBas;
