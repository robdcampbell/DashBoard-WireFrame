import React, { useState, useEffect } from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender/MessageSender";
import Post from "./Post/Post";
import profileImage from "../../images/robHeadShot.png";
import image from "../../images/detroit.jpg";
import db from "../../firebase";

// Story component - will most likely delete
// Message sender

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    );
  }, []);

  /*
            key={post.id}
            profilePic={post.data.profilePic}
            message={post.data.message}
            timestamp={post.data.timestamp}
            username={post.data.username}
            image={post.data.image}
      */

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      {posts.map((post) => {
        const {
          id,
          data: { profilePic, message, timestamp, username, image },
        } = post;
        return (
          <Post
            key={id}
            profilePic={profilePic}
            message={message}
            timestamp={timestamp}
            username={username}
            image={image}
          />
        );
      })}
    </div>
  );
};

export default Feed;
