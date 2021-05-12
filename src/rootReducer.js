// import React from 'react';
import { v4 as uuid } from 'uuid';

const INITIAL_STATE = {
	memes : [
		{
			id         : uuid(),
			imageSrc   :
				'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.M_5uDg2A4WmP4xbmZFj68wHaEK%26pid%3DApi&f=1',
			topText    : "Do you think I'm...",
			bottomText : '...A PRETTY KITTY!'
		},
		{
			id         : uuid(),
			imageSrc   :
				'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.pL89JufRgIgXSyas0yYtXgHaE6%26pid%3DApi&f=1',
			topText    : '',
			bottomText : 'You take that back.'
		},
		{
			id         : uuid(),
			imageSrc   :
				'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Y1yCTIzLlEja1a8PvwxhFgHaE6%26pid%3DApi&f=1',
			topText    : "It's been...",
			bottomText : '...that kind of day.'
		}
	]
};

function rootReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case 'ADD':
			return {
				...state,
				memes : [ ...state.memes, { ...action.meme, id: uuid() } ]
			};
		case 'DELETE':
			return { ...state, memes: state.memes.filter(meme => meme.id !== action.id) };
		default:
			return state;
	}
}

export default rootReducer;
