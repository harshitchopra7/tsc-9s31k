import React from "react";

// styles
import "./Feed.css";

// mui icons
import CommentIcon from "@mui/icons-material/Comment";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

function Feed({ feedsData }) {
  return (
    <div className="feed-container">
      <div className="feed-head-container">
        <div className="feed-head-container-avatar">
          <img src={feedsData.userImage} alt="" />
        </div>
        <div className="feed-head-container-title">
          <p className="feed-head-container-title-name">{feedsData.userName}</p>
          <p className="feed-head-container-title-designation">
            {feedsData.designation}
          </p>
        </div>
      </div>

      <div className="feed-post-content">{feedsData.content}</div>

      <div className="feed-post-actions">
        <div className="feed-post-individual-action">
          <ThumbUpOffAltIcon
            style={{ color: feedsData.isLiked ? "blue" : null }}
          />
          <p>Like {feedsData.likeCount}</p>
        </div>
        <div className="feed-post-individual-action">
          <CommentIcon />
          <p>Comment</p>
        </div>
        <div className="feed-post-individual-action">
          <DeleteOutlineIcon />
          <p>Delete</p>
        </div>
      </div>
    </div>
  );
}

export default Feed;
