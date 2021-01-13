import { Hidden } from "@material-ui/core";
import { FilterNone } from "@material-ui/icons";
import React from "react";
import "./Widgets.css";

const Widgets = () => {
  return (
    <div className="widgets">
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftechcrunch%2F&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        width="340"
        height="100%"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="yes"
        frameBorder="0"
        allowFullScreen={true}
        allow="excrypted-media"
      ></iframe>

      {/* NON_FACEBOOK
      
      <iframe
        src="https://techcrunch.com/"
        width="340"
        height="100%"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="yes"
        frameBorder="0"
        allowFullScreen={true}
        allow="excrypted-media"
      ></iframe> */}
    </div>
  );
};

export default Widgets;
