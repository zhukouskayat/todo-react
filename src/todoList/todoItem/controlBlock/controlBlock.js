import React from "react";
import "./controlBlock.css";

const ControlBlock = () => (
  <React.Fragment>
    <button className="view-button">View</button>
    <button className="postpone-button">Postpone</button>
    <button className="done-button">Done</button>
    <button className="delete-button">Delete</button>
  </React.Fragment>
);

export default ControlBlock;
