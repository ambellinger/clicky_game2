import React from "react";
import "./style.css";

function Header(props) {
  return <h1 className="title">
  {/* <div className="tag">Can you recognize the cutie pie?</div> */}
  {props.children}</h1>;
}

export default Header;
