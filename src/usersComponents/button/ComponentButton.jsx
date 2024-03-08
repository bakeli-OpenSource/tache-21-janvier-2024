import React from 'react';
import { Link } from 'react-router-dom';

const ComponentButton = ({ className, texte, onClick, disabled, link }) => {
	return (
		<div>
			{link ? (
				<Link to={link}>
					<button className={className} onClick={onClick} disabled={disabled}>
						{texte}
					</button>
				</Link>
			) : (
				<button className={className} onClick={onClick} disabled={disabled}>
					{texte}
				</button>
			)}
		</div>
	);
};

export default ComponentButton;
