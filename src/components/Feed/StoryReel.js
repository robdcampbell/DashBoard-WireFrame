import React from "react";
import Story from "./Story";
import "./StoryReel.css";
//import image from "../../images/robHeadShot.png"

const StoryReel = () => {
  return (
    <div className="storyReel">
      <Story
        image="../../images/robHeadShot.png"
        profileSrc="https://github.com/robdcampbell"
        title="Rob Campbell"
      />
      <Story
        image="../../images/robHeadShot.png"
        profileSrc="https://github.com/robdcampbell"
        title="Rob Campbell"
      />
      <Story
        image="../../images/robHeadShot.png"
        profileSrc="https://github.com/robdcampbell"
        title="Rob Campbell"
      />
      <Story
        image="../../images/robHeadShot.png"
        profileSrc="https://github.com/robdcampbell"
        title="Rob Campbell"
      />
      <Story
        image="../../images/robHeadShot.png"
        profileSrc="https://github.com/robdcampbell"
        title="Rob Campbell"
      />
    </div>
  );
};

export default StoryReel;
