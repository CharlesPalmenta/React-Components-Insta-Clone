// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [comments, newComment] = useState(props.comments)
  console.log('CommentSection', props);
  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {comments.map((com, index) => (
        <Comment key={index} comment={com} />
      ))}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
