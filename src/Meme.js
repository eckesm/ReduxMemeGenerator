import React from 'react';
import './Meme.css';

const Meme = ({ imageSrc, topText, bottomText, deleteMeme }) => {
	return (
		<div className="Meme">
			<h3 className="Meme-top">{topText}</h3>
			<h3 className="Meme-bottom">{bottomText}</h3>
			<img className="Meme-image" src={imageSrc} alt={`${topText} ${bottomText}`} />
			<div onClick={deleteMeme} className="Meme-discard" />
		</div>
	);
};

export default Meme;
