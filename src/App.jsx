import React 				from 'react'
import ReactDOM 		from 'react-dom/client'
import {Provider}		from 'react-redux';
import {store} 			from './code/store/store.js';
import Main 				from './gui/main.jsx'
// ========================================================================= //
// The main React component defining the structure of the application.
// ========================================================================= //

const App = receivedProps => (
	<React.StrictMode>
		<Provider store={store}>
			<Main />
		</Provider>
	</React.StrictMode>
);

// ========================================================================= //
// Integrating a React application into a web application.
// ========================================================================= //

async function enableMocking() {
	if (process.env.NODE_ENV === "development") {
		const { worker } = await import("./code/development/mocks/index.js");    
		return worker.start();  
	}
}

console.log("Start Application")
const root = ReactDOM.createRoot(document.getElementById('root'));
enableMocking().then(() => {root.render(<App/>);});

// ========================================================================= //