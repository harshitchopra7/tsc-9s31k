import React from "react";

// styles
import "./Feed.css";

function Feed() {
  return (
    <div className="feed-container">
      <div className="feed-head-container">
        <div className="feed-head-container-avatar">
          <img src="" alt="" />
        </div>
        <div className="feed-head-container-title">
          <p className="feed-head-container-title-name">Name</p>
          <p className="feed-head-container-title-designation">Designation</p>
        </div>
      </div>

      <div className="feed-post-content">post content</div>

      <div>like , comment, share section</div>
    </div>
  );
}

export default Feed;
