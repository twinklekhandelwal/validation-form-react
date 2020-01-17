
import React from 'react';
import './index.css';

function ValidationError(message='', isError=false) {
	this.isError = isError;
	this.message = message;
}

const firstNameValidation = (fieldKey) => (value) => {
	if (value.length < 5) {
		return new ValidationError('lenght atleast should be 5', true);
	}
	return new ValidationError();
}
const noValidation = (fieldKey) = (value) => new ValidationError();

const fields = {
	firstName: { labels: 'First Name', type: 'text', validation: firstNameValidation },
	lastName: { labels: 'Last Name', type: 'text', validation: noValidation },
	password: { labels: 'Password', type: 'password', validation: noValidation },
	userName: { labels: 'User Name', type: 'text', validation: noValidation },
	email: { labels: 'Email', type: 'email', validation: noValidation },
};
class Form extends React.Component {
	constructor(props) {
		super(props);
		let initialState = {};
		Object.keys(fields).forEach(fieldKey => {
			initialState[fieldKey] = {
				value: '',
				// error: '',
			};
		});
		this.state = initialState;
	}

	handelChange = e => {
		console.log(e.target);
		const { name:fieldKey, value } = e.target;
		this.setState({ 
			[fieldKey]: { 
				...this.state[fieldKey], 
				value: value 
			} 
		});
	};
	validate = () => {
		for(let fieldKey of this.state) {
			const { value } = this.state[fieldKey];
			const validationError = fields[fieldKey].validation(value)
			if(validationError.isError) {
				return { error: validationError, fieldKey};
			}
		}

		return {error: new ValidationError(), fieldKey};
	};
	handleSubmit = e => {
		e.preventDefault();
		const err = this.validate();
		if (err.isError) {
			this.setState({})
		}
	};
	render() {
		return (
			<div className="form_table">
				<form onSubmit={this.handleSubmit}>
					{Object.keys(fields).map(fieldKey => {
						return (
							<React.Fragment>
								<label>{fieldKey}</label>
								<input
									type={fields[fieldKey].type}
									name={fieldKey}
									placeholder={fields[fieldKey].name}
									value={this.state[fieldKey]}
									onChange={this.handleChange}
								/>
								<div>{this.state[fieldKey].error}</div>
							</React.Fragment>
						);
					})}
				</form>
			</div>
		);
	}
}
export default Form;
