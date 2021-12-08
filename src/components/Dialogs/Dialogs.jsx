import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";


const Dialogs = (props) => {



	const dialogsItems = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
	const messagesItems = props.dialogsPage.messages.map(m => <Message message={m.message} newMessageText={props.dialogsPage.newMessageText} dispatch={props.dispatch} />)

		let addMessage = () => {
			props.dispatch({type: 'ADD-MESSAGE'})
		}

		let newMessage = React.createRef();

	let onMessageChange = () => {
		let text = newMessage.current.value;
		let action = {type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text};
		props.dispatch(action);
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
				<textarea ref={newMessage} value={props.newMessageText} onChange={onMessageChange}></textarea>
		</div>
		<div>
				<button onClick={addMessage}>add message</button>
		</div>
		</div>
		
    </div>
  );
};

export default Dialogs;
