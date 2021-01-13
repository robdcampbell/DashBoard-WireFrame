import React from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender/MessageSender";
import Post from "./Post/Post";
import profileImage from "../../images/robHeadShot.png";
import image from "../../images/detroit.jpg";

// Story component - will most likely delete
// Message sender

const Feed = () => {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic={profileImage}
        message={"It is working..."}
        timestamp={"timestamp"}
        username={"username"}
        image={image}
      />
      <Post />
      <Post />
    </div>
  );
};

export default Feed;
