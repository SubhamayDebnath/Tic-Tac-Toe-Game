import React from "react";
import { FaRegCircle, FaTimes } from "react-icons/fa";
function Icon({ IconName }) {
  if (IconName == "circle") {
    return <FaRegCircle color="#3ef7cc" />;
  } else if (IconName == "cross") {
    return <FaTimes color="#f7c228" />;
  }
}

export default Icon;
