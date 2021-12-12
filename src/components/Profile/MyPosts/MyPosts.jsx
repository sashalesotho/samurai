import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

	const postsItems = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

	let newPost = React.createRef();

	let onAddPost = () => {
		props.addPost();
	}

	let onPostChange = () => {
		let text = newPost.current.value;
		props.updateNewPostText(text);
	}

	
  return (
    <div className={s.postsBlock}>
      <h3>my posts</h3>
      <div>
			<div>
				<textarea ref={newPost} value={props.newPostText} onChange={onPostChange} />
			</div>
			<div>
				<button onClick={onAddPost}>add post</button>
			</div>
      </div>
      <div className={s.posts}>
			{postsItems}
      </div>
    </div>
  );
};

export default MyPosts;
