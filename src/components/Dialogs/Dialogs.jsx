import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";


const Dialogs = (props) => {



	const dialogsItems = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
	const messagesItems = props.state.messages.map(m => <Message message={m.message} />)

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
       {dialogsItems}
      </div>
      <div className={s.messages}>
			{messagesItems}
      </div>
    </div>
  );
};

export default Dialogs;
