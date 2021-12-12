import React from "react";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

	let state = props.store.getState().dialogsPage;

		let onAddMessage = () => {
			props.store.dispatch(addMessageActionCreator())
		}

	let onMessageChange = (body) => {
		props.store.dispatch(updateNewMessageTextActionCreator(body));
	}
	

  return (
    <Dialogs updateNewMessageText={onMessageChange} addMessage={onAddMessage} dialogsPage={state} />
  );
};

export default DialogsContainer;
