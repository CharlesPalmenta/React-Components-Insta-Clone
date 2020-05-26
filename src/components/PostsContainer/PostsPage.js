//Complete the necessary code in this file
// import useState
import React from "react";
import Post from "./Post";
import dummyData from "../../dummy-data";
import "./Posts.css";
// import data 

const PostsPage = props => {
  // set up state for your data
  console.log(props.postData)
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {props.postData.map((dataDummy, i) => {
        return <div key={i}> <Post post = {dataDummy} /> </div>
      })}
    </div>
  );
};

export default PostsPage;
