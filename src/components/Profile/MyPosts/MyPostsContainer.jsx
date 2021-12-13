import React from "react";
import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer'
import StoreContext from "../../../store-context";
import store from "../../../redux/redux-store";

const MyPostsContainer = (props) => {
	//let state = props.store.getState();

	
	return (
		<StoreContext.Consumer>
			{ (store) => {
				let state = props.store.getState();
				let onPostChange = (text) => {
					let action = updateNewPostTextActionCreator(text)
					props.store.dispatch(action)
				}
			
				let addPost = () => {
					let action = addPostActionCreator()
					props.store.dispatch(action)
				}
				return (
					<MyPosts updateNewPostText={onPostChange} 
			addPost={addPost} 
			posts={state.profilePage.posts} 
			newPostText={state.profilePage.newPostText}/>
				)
			}
			
			
			}
			</StoreContext.Consumer>
		
	)
}

export default MyPostsContainer;