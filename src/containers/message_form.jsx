import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createMessage } from '../actions/index';
import { emojify } from 'react-emojione';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createMessage(this.props.selectedChannel, this.props.currentUser, this.state.value);
    this.setState({ value: "" });
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleEmojiClick = (event) => {
    document.getElementById("insert-emoji").value += ` ${event.target.innerText}`;
    document.getElementById("insert-emoji").focus();
  }

  options = {
    convertShortnames: true,
    convertUnicode: true,
    convertAscii: true,
    style: {
      height: 25,
    },
    // this click handler will be set on every emoji
    onClick: event => this.handleEmojiClick(event)
  };

  render() {
    return (
      <div>
        <div className="emoji">
          {emojify(':) :cat: :tiger: ^___^ ^^U :D :unicorn: xD xDD xDDD :robot: :octopus:', this.options)}
        </div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Type your message" value={this.state.value} className="message-form" id="insert-emoji" onChange={this.handleChange} autocomplete="off" />
          <button type="submit" className="sending-button">Send message</button>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { createMessage },
    dispatch);
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    selectedChannel: state.selectedChannel
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
