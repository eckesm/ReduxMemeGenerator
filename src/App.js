import React from 'react';
import { useSelector } from 'react-redux';
import NewMemeForm from './NewMemeForm';
import MemesOutput from './MemesOutput';
import './App.css';

function App() {
	const memes = useSelector(store => store.memes);
	return (
		<div className="App">
			<NewMemeForm />
			{memes.length > 0 && <MemesOutput />}
		</div>
	);
}

export default App;
