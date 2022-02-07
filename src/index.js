import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ToxBox extends React.Component {
	render() {
		return (
			<div className="toxbox">
				<textarea className="tox-input" rows={10}></textarea>
				<button className="tox-button">Send</button>
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
