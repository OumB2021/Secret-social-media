import React, { useState } from "react";

const Publication = ({ post }) => {
  const [showComments, setShowComments] = useState(false);

  const handleToggleComments = () => {
    setShowComments(!showComments);
  };

  return (
    <div className="border border-gray-300 p-4 mb-4 rounded-md">
      <div className="flex items-center space-x-2 mb-2">
        <div className="bg-gray-200 rounded-full w-10 h-10"></div>{" "}
        {/* Replace with avatar component or image */}
        <div>
          <h2 className="font-bold">{post.user.name}</h2>
          <p className="text-gray-500">{post.createdSince}</p>
        </div>
      </div>
      <p>{post.content}</p>
      <div className="flex items-center space-x-2 mt-4">
        <button className="flex items-center text-gray-500 focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a7 7 0 100 14 7 7 0 000-14zm0 11a4 4 0 100-8 4 4 0 000 8zm0-1.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
              clipRule="evenodd"
            />
          </svg>
          <span className="ml-1">{post.likes}</span>
        </button>
        <button
          className="flex items-center text-gray-500 focus:outline-none"
          onClick={handleToggleComments}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M13.293 7.293l-3-3A.996.996 0 009.586 4H3a1 1 0 000 2h4.586l3 3a1 1 0 101.414-1.414L8.414 5H17a1 1 0 000-2h-8a.996.996 0 00-.707.293zM7 12a1 1 0 100 2H3a1 1 0 000 2h4a1 1 0 100-2H4.414l3.293-3.293a1 1 0 10-1.414-1.414L3 12H7z"
              clipRule="evenodd"
            />
          </svg>
          <span className="ml-1">{post.commentCount}</span>
        </button>
      </div>
      {showComments && (
        <div className="mt-4">
          <h3 className="font-bold">Comments</h3>
          {post.comments.map((comment) => (
            <div key={comment._id} className="mt-2">
              <h4 className="font-bold">{comment.user.name}</h4>
              <p>{comment.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Publication;
