import React, { useState, useEffect } from 'react';
import ChatAPI from '../utils/ChatAPI';

function StatusBar(props) {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    console.log('- USE EFFECT', props.friend.name);
    // Specify how to clean up after this effect:
    return function cleanup() {
      console.log('- CLEAN UP', props.friend.name);
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  }, [props.friend.id]); // Only re-subscribe if props.friend.id changes

  if (isOnline === null) {
    return <div>Loading...</div>;
  }

  const statusClass = isOnline ? 'status--online' : 'status--offline';
  const statusEmoji = isOnline ? '😃' : '😴';
  console.log('- RENDER', props.friend.name);
  return (
    <div>
      <h2>Chat</h2>
      <div className={`status ${statusClass}`}>
        {props.friend.name} {statusEmoji}
      </div>
    </div>
  );
}

export default StatusBar;

/**
 * Every effect may return a function that cleans up after it (optional cleanup mechanism for effects).
 *
 * There is no special code for handling updates because useEffect handles them by default.
 *
 * It cleans up the previous effects before applying the next effects.
 *
 */
