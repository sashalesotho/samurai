import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store';
import {Provider} from 'react-redux';
import StoreContext from './StoreContext';


	ReactDOM.render(
		<StoreContext.Provider value={store}>
			<App />
		</StoreContext.Provider>
		,
	 document.getElementById('root')
  );






