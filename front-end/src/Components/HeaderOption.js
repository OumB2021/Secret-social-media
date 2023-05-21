import React from "react";
import "../css/headerOption.css";

const HeaderOption = ({ Icon, title }) => {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      <h3>{title}</h3>
    </div>
  );
};

export default HeaderOption;
