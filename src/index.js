import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/main.css';
// import './assets/css/main.min.css';
import Main from './router';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<React.StrictMode>
		<Main />
	</React.StrictMode>,
	document.getElementById('main')
);

reportWebVitals();
