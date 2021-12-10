const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
	dialogs: [
		{id: 1, name: 'Sasha'},
		{id: 2, name: 'Lena'},
		{id: 3, name: 'Masha'},
		{id: 4, name: 'Eduardo'},
		{id: 5, name: 'Barbara'},
		{id: 6, name: 'Susie'},
	],
	messages: [
		{id: 1, message: 'Hi'},
		{id: 2, message: 'How are you?'},
		{id: 3, message: 'Yo!'},
		{id: 4, message: 'Hello!'},
		{id: 5, message: 'Salut!'},
		{id: 6, message: 'Zdravstvuyte'},
	],
	newMessageText: '',
}

const dialogsReducer = (state = initialState, action) => {
	switch(action.type) {
		case UPDATE_NEW_MESSAGE_TEXT:
			state.newMessageText = action.body;
			return state;
		case ADD_MESSAGE:
			let body = state.newMessageText;
			state.newMessageText = '';
			state.messages.push({id: 16, message: body});
			return state;
		default:
			return state;
	}
}

export const addMessageActionCreator = () => {
	return {type: ADD_MESSAGE};
}

export const updateNewMessageTextActionCreator = (body) => {
	return {type: UPDATE_NEW_MESSAGE_TEXT, body: body}
}

export default dialogsReducer;