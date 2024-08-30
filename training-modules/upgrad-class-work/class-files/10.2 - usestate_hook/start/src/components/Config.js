import React from "react";
import ToggleButton from "./ToggleButton";

const Config = ({title, toggleState}) => (
  <div className="config-row">
    <div className="config-option">
      {title} is <b>{toggleState ? "On" : "Off"}</b>
    </div>
    <div className="config-switch">
      <ToggleButton init={toggleState} />
    </div>
  </div>
);

export default Config;
