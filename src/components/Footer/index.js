import React from "react";
import "./style.css";

function Footer(props) {
  return <footer className="title">
  
   <div className="tag">© 2019 Cuddly Little Cuddlers Inc.</div> 
  {props.children}</footer>;
}

export default Footer;
