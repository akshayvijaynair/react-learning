import React from "react";

const ToggleButton = ({init}) => {
  return (
    <div className={init ? "toggle-btn toggle-btn-on" : "toggle-btn"}>
      <div
        className={init ? "toggle-slider toggle-slider-on" : "toggle-slider"}
      />
    </div>
  );
};

ToggleButton.defaultProps = {
  init: false
};

export default ToggleButton;
