import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import store from './store';
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import reducers from "./reducers/index";
const middleware = applyMiddleware(logger);
const initialState = window.INITIAL_STATE;
const store = createStore(reducers,initialState, middleware);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();
