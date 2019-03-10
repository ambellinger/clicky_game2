import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>

      {/* <div className="content">
      <ul>
        <li>
          <strong>Clicked:</strong> {props.clicked}
        </li>

        <li>
          Nickname: {props.nickname}
        </li>
      </ul>
      </div> */}
   
      <span onClick={() => props.removeFriend(props.id)} className="remove">
      ♡
      </span>
    </div>
  );
}

export default FriendCard;
