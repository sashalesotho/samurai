import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store';
import StoreContext from './store-context';

let rerender = (state) => {
	ReactDOM.render(
		<StoreContext.Provider value={store}>
			<App />
		</StoreContext.Provider>
		,
	 document.getElementById('root')
  );
}



rerender(store.getState());

store.subscribe( () => {
	let state = store.getState();
	rerender(state);
});




