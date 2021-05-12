import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NewMemeForm from './NewMemeForm';
import MemesOutput from './MemesOutput';
import './App.css';

function App() {
	const memes = useSelector(store => store.memes);
	const dispatch = useDispatch();

	const addMeme = memeData => {
		dispatch({ meme:memeData, type: 'ADD' });
	};
	const deleteMeme = id => {
		dispatch({ type: 'DELETE', id });
	};

	return (
		<div className="App">
			<NewMemeForm addMeme={addMeme} />
			{memes.length > 0 && <MemesOutput deleteMeme={deleteMeme} />}
		</div>
	);
}

export default App;
