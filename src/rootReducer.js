// import React from 'react';
import { v4 as uuid } from 'uuid';

const INITIAL_STATE = {
	memes : [
		{
			id         : 1,
			imageSrc   :
				'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.M_5uDg2A4WmP4xbmZFj68wHaEK%26pid%3DApi&f=1',
			topText    : "Do you think I'm...",
			bottomText : '...A PRETTY KITTY!'
		}
	]
};

function rootReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case 'ADD_MEME':
			return {
				...state,
				memes : [
					...state.memes,
					{ id: uuid(), imageSrc: action.imageSrc, topText: action.topText, bottomText: action.bottomText }
				]
			};
		case 'DELETE':
			return { ...state, memes: state.memes.filter(meme => meme.id !== action.id) };
		default:
			return state;
	}
}

export default rootReducer;
