import React from "react";
import Icon from "../Icon/Icon";
import "./Card.css";
function Card({ gameEnd, player, onPlay, index }) {
  let icon = <Icon />;
  if (player == "X") {
    icon = <Icon IconName="cross" />;
  } else if (player == "O") {
    icon = <Icon IconName="circle" />;
  }
  return (
    <div
      className="card"
      onClick={() => !gameEnd && player == "" && onPlay(index)}
    >
      {icon}
    </div>
  );
}

export default Card;
