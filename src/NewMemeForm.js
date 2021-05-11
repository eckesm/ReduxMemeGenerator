import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Alert, Button, Form, InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import './NewMemeForm.css';

const NewMemeForm = () => {
	const INITIAL_STATE = {
		imageSrc   : '',
		topText    : '',
		bottomText : ''
	};
	const [ formData, setFormData ] = useState(INITIAL_STATE);
	const [ errorMessages, setErrorMessages ] = useState(false);
	const dispatch = useDispatch();

	const handleChange = e => {
		const { name, value } = e.target;
		setFormData(data => ({
			...data,
			[name] : value
		}));
	};
	const handleSubmit = e => {
		e.preventDefault();
		if (formData.imageSrc === '') {
			setErrorMessages(true);
		}
		else {
			setErrorMessages(false);
			dispatch({
				type       : 'ADD_MEME',
				imageSrc   : formData.imageSrc,
				topText    : formData.topText,
				bottomText : formData.bottomText
			});
		}
	};
	return (
		<Form className="NewMemeForm" onSubmit={handleSubmit}>
			<h3>Add Meme</h3>
			{errorMessages && <Alert color="danger">Image URL cannot be blank.</Alert>}
			<InputGroup className="NewMemeForm-InputGroup">
				<InputGroupAddon addonType="prepend">
					<InputGroupText>Image URL</InputGroupText>
				</InputGroupAddon>
				<Input
					type="url"
					name="imageSrc"
					id="imageSrc"
					value={formData.imageSrc}
					onChange={handleChange}
					required
				/>
			</InputGroup>
			<InputGroup className="NewMemeForm-InputGroup">
				<InputGroupAddon addonType="prepend">
					<InputGroupText>Top Text</InputGroupText>
				</InputGroupAddon>
				<Input type="text" name="topText" id="topText" value={formData.topText} onChange={handleChange} />
			</InputGroup>
			<InputGroup className="NewMemeForm-InputGroup">
				<InputGroupAddon addonType="prepend">
					<InputGroupText>Bottom Text</InputGroupText>
				</InputGroupAddon>
				<Input
					type="text"
					name="bottomText"
					id="bottomText"
					value={formData.bottomText}
					onChange={handleChange}
				/>
			</InputGroup>
			<Button color="success">Add Meme</Button>
		</Form>
	);
};

export default NewMemeForm;
