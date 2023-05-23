import React, { useState } from "react";
import Avatar from "./Avatar";

const Post = ({ avatar }) => {
  const [postText, setPostText] = useState("");

  const handlePostTextChange = (e) => {
    setPostText(e.target.value);
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();
    // Handle post submission logic here
    console.log("Post submitted:", postText);
    setPostText("");
  };

  return (
    <div className="max-w-xl mx-auto bg-slate-100 rounded-lg p-4 shadow-md">
      <div className="flex items-center space-x-4">
        <Avatar avatar={avatar} />
        <form className="flex-grow" action="/" method="POST">
          <textarea
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring focus:border-blue-300"
            placeholder="What is your secret..."
            value={postText}
            onChange={handlePostTextChange}
          ></textarea>
        </form>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
          onClick={handlePostSubmit}
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default Post;
