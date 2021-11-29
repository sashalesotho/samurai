import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let posts = [
	{id: 1, message: 'Hi, how are you?', likesCount:"3"},
	{id: 2, message: "It's my first post", likesCount:"23"},
	{id: 3, message: "Blablabla", likesCount:"1"},
	{id: 4, message: "Hello, it's me", likesCount:"42"},
];

let dialogs = [
	{id: 1, name: 'Sasha'},
	{id: 2, name: 'Lena'},
	{id: 3, name: 'Masha'},
	{id: 4, name: 'Eduardo'},
	{id: 5, name: 'Barbara'},
	{id: 6, name: 'Susie'},
];

let messages = [
	{id: 1, message: 'Hi'},
	{id: 2, message: 'How are you?'},
	{id: 3, message: 'Yo!'},
	{id: 4, message: 'Hello!'},
	{id: 5, message: 'Salut!'},
	{id: 6, message: 'Zdravstvuyte'},
];


ReactDOM.render(
    <App posts={posts} messages={messages} dialogs={dialogs} />,
  document.getElementById('root')
);


