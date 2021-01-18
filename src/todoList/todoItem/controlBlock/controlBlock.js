import React from "react";
import "./controlBlock.css";
import Button from "./button/button.js"

const ControlBlock = () => (
  <React.Fragment>
    <Button className="view" name="View"/>
    <Button className="postpone" name="Postpone"/>
    <Button className="done" name="Done"/>
    <Button className="delete" name="Delete"/>
  </React.Fragment>
);

export default ControlBlock;
