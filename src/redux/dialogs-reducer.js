const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
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