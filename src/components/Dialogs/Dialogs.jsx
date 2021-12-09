import React from "react";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/state";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";


const Dialogs = (props) => {

	let state = props.store.getState().dialogsPage;



	const dialogsItems = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
	const messagesItems = state.messages.map(m => <Message message={m.message} newMessageText={state.newMessageText} dispatch={props.dispatch} />)

		let addMessage = () => {
			props.store.dispatch(addMessageActionCreator())
		}

	let onMessageChange = (event) => {
		let body = event.target.value;
		props.store.dispatch(updateNewMessageTextActionCreator(body));
	}
	

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
       {dialogsItems}
      </div>
      <div className={s.messages}>
			{messagesItems}
      </div>
		<div className={s.newMessage}>
		<div>
				<textarea value={props.newMessageText} onChange={onMessageChange}></textarea>
		</div>
		<div>
				<button onClick={addMessage}>add message</button>
		</div>
		</div>
		
    </div>
  );
};

export default Dialogs;
