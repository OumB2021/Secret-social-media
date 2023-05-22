import React from "react";
import "../css/avatar.css";

const Avatar = ({ avatar }) => {
  return (
    <div className="avatar">
      <img alt="avatar" src={avatar} />
    </div>
  );
};

export default Avatar;
