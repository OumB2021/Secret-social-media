import React from "react";
import KeyIcon from "@mui/icons-material/Key";
import "../css/header.css";
import HeaderOption from "./HeaderOption";
import InfoIcon from "@mui/icons-material/Info";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <KeyIcon />
        <h2>Secret Media</h2>
      </div>
      <div className="header__right">
        <HeaderOption Icon={InfoIcon} title="About Us" />
        <HeaderOption Icon={PersonIcon} title="Profile" />
        <HeaderOption Icon={LogoutIcon} title="Logout" />
      </div>
    </div>
  );
};

export default Header;
