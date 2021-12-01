import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = ({posts}) => {

	const postsItems = posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

	let newPost = React.createRef();
	let addPost = () => {let text = newPost.current.value;
		alert(text)}

	
  return (
    <div className={s.postsBlock}>
      <h3>my posts</h3>
      <div>
			<div>
				<textarea ref={newPost}></textarea>
			</div>
			<div>
				<button onClick={addPost}>add post</button>
			</div>
        
      </div>
      <div className={s.posts}>
			{postsItems}
      </div>
    </div>
  );
};

export default MyPosts;
