import React from "react";
import s from "./Post.module.css";

const Post = ({message, likesCount}) => {
  return (
    <div className={s.item}>
      <img src="https://images.unsplash.com/photo-1574158622682-e40e69881006?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0fGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=" "></img>
      {message}
      <div>
        <span>like {likesCount}</span>
      </div>
    </div>
  );
};

export default Post;
