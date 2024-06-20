import React from "react";

// styles
import "./Feed.css";

// mui icons
import CommentIcon from "@mui/icons-material/Comment";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

function Feed({ title, body }) {
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

      <div className="feed-post-content">{body}</div>

      <div className="feed-post-actions">
        <div className="feed-post-individual-action">
          <ThumbUpOffAltIcon />
          <p>Like</p>
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
