import React from 'react';
import { useDispatch } from 'react-redux';
import './Meme.css';

const Meme = ({ id, imageSrc, topText, bottomText }) => {
	const dispatch = useDispatch();
	const handleClick = () => {
		dispatch({ type: 'DELETE', id });
	};

	return (
		<div className="Meme">
			<h3 className="Meme-top">{topText}</h3>
			<h3 className="Meme-bottom">{bottomText}</h3>
			<img className="Meme-image" src={imageSrc} alt={`${topText} ${bottomText}`} />
			<div onClick={handleClick} className="Meme-discard" />
		</div>
	);
};

export default Meme;
