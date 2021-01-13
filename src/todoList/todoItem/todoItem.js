import React from "react";
import LabeledDateTimePanel from "./infoBlock/todoDateTimePanel/dateTimePanel.js";
import StatePanel from "./infoBlock/todoState/todoState.js";
import "./todoItem.css";
import ControlBlock from "./controlBlock/controlBlock.js"

const Todo = ({ todo }) => (
  <React.Fragment key={todo.id}>
    <h3>{todo.text}</h3>
    <dl className="info-block">
      <StatePanel state={todo.state} />

        <LabeledDateTimePanel label={"Created"} dateTime={todo.dateCreated} />

        <LabeledDateTimePanel
          label={"Completed"}
          dateTime={todo.dateCompleted}
        />
    </dl>
    <dl className="control-block">
    <ControlBlock />
    </dl>
  </React.Fragment>
);

export default Todo;
