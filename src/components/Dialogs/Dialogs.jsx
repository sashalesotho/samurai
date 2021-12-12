import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";



const Dialogs = (props) => {

	let state = props.dialogsPage;



	const dialogsItems = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
	const messagesItems = state.messages.map(m => <Message message={m.message} newMessageText={state.newMessageText} dispatch={props.dispatch} />)

		let addMessage = () => {
			props.addMessage()
		}

	let onMessageChange = (event) => {
		let body = event.target.value;
		props.updateNewMessageText(body);
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
