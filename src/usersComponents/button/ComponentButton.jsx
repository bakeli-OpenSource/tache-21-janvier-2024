import React from 'react';

const ComponentButton = ({ className, texte, onClick, disabled }) => {
	return (
		<div>
			<button className={className} onClick={onClick} disabled={disabled}>
				{texte}
			</button>
		</div>
	);
};

export default ComponentButton;
