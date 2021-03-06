import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		updateNewMessageText: (body) => {dispatch(updateNewMessageTextActionCreator(body))},
		addMessage: () => {dispatch(addMessageActionCreator())},
	}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
