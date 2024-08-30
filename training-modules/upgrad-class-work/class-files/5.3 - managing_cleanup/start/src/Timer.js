import React, {Component} from "react";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

momentDurationFormatSetup(moment);

class Timer extends Component {
  formatTime = seconds =>
    moment.duration(seconds, "seconds").format("HH:mm:ss");
  render() {
    return (
      <div className="timer">
        <div className="timer-name">{this.props.name}</div>
        <div className="timer-display">{this.formatTime(2000)}</div>
        <div class="pauseBtn" />
        <div class="removeBtn" onClick={() => this.props.onRemove()} />
      </div>
    );
  }
}

export default Timer;
