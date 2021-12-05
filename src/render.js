import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, addPost, updateNewMessageText, updateNewPostText} from './redux/state';

//addPost('эй хей йоу йоу!');

export let rerender = (state) => {
	ReactDOM.render(
		<App state={state} addPost={addPost} updateNewPostText={updateNewPostText} addMessage={addMessage} updateNewMessageText={updateNewMessageText}/>,
	 document.getElementById('root')
  );
}