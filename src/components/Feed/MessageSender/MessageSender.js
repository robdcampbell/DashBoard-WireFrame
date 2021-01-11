import { Avatar } from "@material-ui/core";
import React from "react";
import "./MessageSender.css";
import VideoCamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticon from "@material-ui/icons/InsertEmoticon";

const MessageSender = () => {
  const handleSubmit = (e) => {
    {
      e.preventDefault();
    }
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <form>
          <Avatar />
          <input
            className="messageSender__input"
            type="text"
            placeholder={"Whats next?"}
          />
          <input type="text" placeholder="Image URL (Optional)" />
          <button onClick={handleSubmit} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideoCamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
};

export default MessageSender;
