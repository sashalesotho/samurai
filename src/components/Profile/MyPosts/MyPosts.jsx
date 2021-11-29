import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

	let postsData = [
		{id: 1, message: 'Hi, how are you?', likesCount:"0"},
		{id: 2, message: "It's my first post", likesCount:"23"},
	];

  return (
    <div className={s.postsBlock}>
      <h3>my posts</h3>
      <div>
			<div>
				<textarea></textarea>
			</div>
			<div>
				<button>add post</button>
			</div>
        
      </div>
      <div className={s.posts}>
        <Post message={postsData[0].message} likesCount={postsData[0].likesCount} />
        <Post message={postsData[1].message} likesCount={postsData[1].likesCount} />
      </div>
    </div>
  );
};

export default MyPosts;
