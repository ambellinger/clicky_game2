import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    <nav className="navbar  navbar-light ">
      <a className="navbar-brand" href="/">
      Puppery
      </a>
      <div className="tag">Can you recognize the cutie pie?
      <hr></hr>
      Click on the grey hearts to play
      
      </div> 
     
    
    <div className="scores" id="scores">
            <strong>Score:</strong> {props.score}
            <hr></hr>
            <strong>High Score:</strong> {props.highscore}
    </div>
    
    </nav>
    
  );
}

export default Navbar;
