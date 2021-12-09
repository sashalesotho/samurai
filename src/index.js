import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/state';

let rerender = (state) => {
	ReactDOM.render(
		<App state={state} dispatch={store.dispatch.bind(store)} store={store}/>,
	 document.getElementById('root')
  );
}



rerender(store.getState());

store.subscribe(rerender);




