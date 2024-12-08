import logo from './logo.svg';
import './App.css';
import React from 'react';


function App() {
	let today = new Date().getFullYear();

	const value = 2

	if (value === 2) {
		return React.createElement(
			'div',
			{ className: 'App' },
			React.createElement(
			  'header',
			  { className: 'App-header' },
			  React.createElement('img', {
				src: logo,
				className: 'App-logo',
				alt: 'logo',
			  }),
			  React.createElement(
				'p',
				null,
				'Edit ',
				React.createElement('code', null, 'src/App.js'),
				' and save to reload.'
			  ),
			  React.createElement(
				'a',
				{
				  className: 'App-link',
				  href: 'https://reactjs.org',
				  target: '_blank',
				  rel: 'noopener noreferrer',
				},
				'Learn React'
			  ),
			  React.createElement(
				'a',
				{ className: 'App-link' },
				today.toString()
			  )
			)
		  );
	}

	if (value === 1) {
		return (
			<div className="App">
				<header className="App-header">


					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
					<a
						className="App-link"
					>
						{today.toString()}
					</a>
				</header>
			</div>
		);
	}

}
//Декларативный стиль
export default App;
