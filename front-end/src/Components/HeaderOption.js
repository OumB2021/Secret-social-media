import React from "react";
import "../css/headerOption.css";

const HeaderOption = ({ Icon, title }) => {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      <h2 className="headerOption__title">{title}</h2>
    </div>
  );
};

export default HeaderOption;
