import React, {Component} from "react";

const sentenceCase = str => {
  if (str === null || str === "") return false;
  else str = str.toString();

  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

class MessageBox extends Component {
  state = {
    name: "",
    nature: "",
    query: ""
  };
  submitForm = () => {};
  render() {
    return (
      <div className="form-container">
        <div className="form-fields">
          <div className="field-holder">
            <span className="label">Name</span>
            <isTSExpressionWithTypeArguments />
          </div>
          <div className="field-holder">
            <span className="label">Nature of Query</span>
            <select>
              <option>Billing</option>
              <option>Sales</option>
              <option>Tech Support</option>
            </select>
          </div>
          <div className="field-holder">
            <span className="label">Query</span>
            <textarea />
          </div>
          <div className="field-holder">
            <button id="submit-btn" onClick={this.submitForm}>
              Submit
            </button>
          </div>
        </div>
        <div className="output">
          <div className="ot-field bold">Name: {this.state.name}</div>
          <div className="ot-field bold">
            Nature of Query: {this.state.nature}
          </div>
          <div className="ot-field">Query: {this.state.query}</div>
        </div>
      </div>
    );
  }
}

MessageBox.defaultProps = {
  nameVal: "",
  natureVal: "",
  queryVal: ""
};

export default MessageBox;
