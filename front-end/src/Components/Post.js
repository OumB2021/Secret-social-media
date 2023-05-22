import React from "react";
import Avatar from "./Avatar";

const Post = ({ avatar }) => {
  return (
    <div className="flex justify-center items-center bg-slate-600">
      <Avatar src="https://marketplace.canva.com/EAFEits4-uw/1/0/800w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-r0bPCSjUqg0.jpg" />
      <form action="/" method="post">
        <textarea name="post" id="post" placeholder="what is your secret ?" />
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default Post;
