import React, { Component } from 'react';
import ChatAPI from '../utils/ChatAPI';

class StatusBar extends Component {
  static defaultProps = {
    friend: { id: null, name: '' },
  };
  state = { isOnline: null };

  // Notice how componentDidMount and componentWillUnmount need to mirror each other.
  componentDidMount() {
    ChatAPI.subscribeToFriendStatus(this.props.friend.id, this.handleStatusChange);
  }

  componentWillUnmount() {
    ChatAPI.unsubscribeFromFriendStatus(this.props.friend.id, this.handleStatusChange);
  }

  handleStatusChange = (status) => {
    this.setState({
      isOnline: status.isOnline,
    });
  };

  render() {
    if (this.state.isOnline === null) {
      return <div className="demo">Loading...</div>;
    }

    const statusClass = this.state.isOnline ? 'status--online' : 'status--offline';
    const statusEmoji = this.state.isOnline ? '😃' : '😴';
    return (
      <div className="demo demo--class">
        <h2>Chat</h2>
        <div className={`status ${statusClass}`}>
          {this.props.friend.name} {statusEmoji}
        </div>
      </div>
    );
  }
}

export default StatusBar;

/**
 *  componentDidUpdate(prevProps) {
    // Unsubscribe from the previous friend.id
    ChatAPI.unsubscribeFromFriendStatus(
      prevProps.friend.id,
      this.handleStatusChange
    );
    // Subscribe to the next friend.id
    ChatAPI.subscribeToFriendStatus(
      this.props.friend.id,
      this.handleStatusChange
    );
  }
 */
