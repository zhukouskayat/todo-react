import React from "react";

const StatePanel = ({ state }) => {
  const labels = {
    done: "Task done",
    "in-process": "Task in progress",
    postponed: "Task postponed",
  };
  return (
      <dl className="status-panel">{labels[state]}</dl>
  );
};

export default StatePanel;
