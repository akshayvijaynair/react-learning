import React, { Component } from "react";
import getMessages from "../services/getMessages";

class Inbox extends Component {
  state = {
    messages: []
  };
  componentDidMount = async () => {
    const fetchMessages = await getMessages();

    this.setState({
      messages: fetchMessages
    });
  };
  render() {
    return (
      <ul className="message-list">
        <button onClick={this.doSomething} />
        {this.state.messages.length !== 0
          ? this.state.messages.map(f => <li key={f.id}>{f.message}</li>)
          : "Loading Data..."}
      </ul>
    );
  }
}

export default Inbox;
