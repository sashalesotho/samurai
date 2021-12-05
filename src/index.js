import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, { subscribe } from './redux/state';
import {addMessage, addPost, updateNewMessageText, updateNewPostText} from './redux/state';

let rerender = (state) => {
	ReactDOM.render(
		<App state={state} addPost={addPost} updateNewPostText={updateNewPostText} addMessage={addMessage} updateNewMessageText={updateNewMessageText}/>,
	 document.getElementById('root')
  );
}



rerender(state);

subscribe(rerender);




