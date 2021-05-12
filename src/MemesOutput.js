import React from 'react';
import { useSelector } from 'react-redux';
import Meme from './Meme';
import './MemesOutput.css';

const MemesOutput = ({deleteMeme}) => {
	const memes = useSelector(store => store.memes);

	return (
		<div className='MemesOutput'>
			<div className="MemesOutput-memes">
			<h3>My Memes</h3>
				{memes.map(meme => (
					<Meme
						key={meme.id}
						imageSrc={meme.imageSrc}
						topText={meme.topText}
						bottomText={meme.bottomText}
                        deleteMeme={()=>deleteMeme(meme.id)}
					/>
				))}
			</div>
		</div>
	);
};

export default MemesOutput;
