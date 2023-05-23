import React from "react";
import "../css/banner.css";

const Banner = ({ banner, profile, name }) => {
  return (
    <div className="banner">
      <img className="bannerImg" src={banner} alt="banner" />
      <div className="profile">
        <img className="profileImg" src={profile} alt="profile" />
        <h1>{name}</h1>
      </div>
    </div>
  );
};

export default Banner;
