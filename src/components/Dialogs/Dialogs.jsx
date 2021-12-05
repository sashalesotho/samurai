import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";


const Dialogs = (props) => {



	const dialogsItems = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
	const messagesItems = props.dialogsPage.messages.map(m => <Message message={m.message} newMessageText={props.dialogsPage.newMessageText} addMessage={props.addMessage}
		updateNewMessageText={props.updateNewMessageText}/>)

		let addMessage = () => {props.addMessage();}

		let newMessage = React.createRef();

	let onMessageChange = () => {
		let text = newMessage.current.value;
		props.updateNewMessageText(text);
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
