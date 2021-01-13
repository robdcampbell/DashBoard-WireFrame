import React from "react";
import { Avatar } from "@material-ui/core";
import "./Post.css";

// {new Date(timestamp?.toDate()).toUTCString()}

const Post = ({ profilePic, image, username, timestamp, message }) => {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>Timestamp goes here...</p>
        </div>
      </div>

      <div className="post__bottom">
        <p>{message}</p>
      </div>

      <div className="post__image">
        <img src={image} alt="post image" />
      </div>
    </div>
  );
};

export default Post;
