import React from "react";
import { Link } from "react-router-dom";
import KeyIcon from "@mui/icons-material/Key";
import "../css/header.css";
import HeaderOption from "./HeaderOption";
import InfoIcon from "@mui/icons-material/Info";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";

const Header = () => {
  return (
    <div className="header bg-slate-100">
      <div className="header__left">
        <KeyIcon className="mr-2" />
        <h1 className="font-bold text-xl">Secret Media</h1>
      </div>
      <div className="header__right">
        <Link to="/">
          <HeaderOption Icon={HomeIcon} title="Home" />
        </Link>
        <Link to="/about">
          {" "}
          <HeaderOption Icon={InfoIcon} title="About Us" />
        </Link>
        <Link to="/profile">
          {" "}
          <HeaderOption Icon={PersonIcon} title="Profile" />
        </Link>
        <Link>
          {" "}
          <HeaderOption Icon={LogoutIcon} title="Logout" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
