import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ToxBox extends React.Component {
	render() {
		return (
			<div className="toxbox">
				<textarea
					className="tox-input"
					rows={10}
					//store the data from the textarea in a variable and pass it through to the api. then display the response on the screen
					onChange={(e) => {
						// this.props.value(e.target.value);
						// this.props.message = e.target.value
						// set the current value to a prop
						this.setState({ value: e.target.value });
					}}
				></textarea>
				<button
					className="tox-button"
					onClick={(e) => getToxicity(this.state.value)}
				>
					Detect Toxicity
				</button>
			</div>
		);
	}
}

class Page extends React.Component {
	render() {
		return <ToxBox />;
	}
}

// ========================================

ReactDOM.render(<Page />, document.getElementById('root'));

// create a function with a parameter of message to call this api endpoint: https://Toxicity-Server.dillonb07.repl.co/api/<message> and return the value
function getToxicity(message) {
	let request = fetch(
		`https://Toxicity-Server.dillonb07.repl.co/api/${message}`
	).catch(() => 'Error connecting to the API');
	console.log(request);
	return request;
}
