import React from "react";
import "./Widgets.css";
import SearchIcon from "@mui/icons-material/Search";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widget__searchIcon" />
        <input placeholder="Search Trash" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's trash-ening</h2>
        <TwitterTweetEmbed tweetId={"1573086176810078209"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="MrTrashWheel"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://facebook.com/cleverprogrammer"}
          options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
        />
      </div>
    </div>
  );
};

export default Widgets;
