import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectChannel, fetchMessages } from '../actions/index';

class Channel extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedChannel !== this.props.selectedChannel) {
      this.props.fetchMessages(nextProps.selectedChannel);
    }
  }

  handleClick = (channel) => {
    this.props.selectChannel(channel);
  }

  render() {
    console.log(this.props.channel)
    return(
      <li className={this.props.channel === this.props.selectedChannel ? "channel selected-channel" : "channel"} onClick={() => this.handleClick(this.props.channel)}>
        #{this.props.channel}
      </li>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectChannel, fetchMessages },
    dispatch);
}

function mapStateToProps(state) {
  return {
    selectedChannel: state.selectedChannel
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Channel);
