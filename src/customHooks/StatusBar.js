import React from 'react';
import useFriendStatus from './hooks';

function StatusBar(props) {
  const isOnline = useFriendStatus(props.friend.id);

  if (isOnline === null) {
    return <div>Loading...</div>;
  }

  const statusClass = isOnline ? 'status--online' : 'status--offline';
  const statusEmoji = isOnline ? '😃' : '😴';
  console.log('- RENDER', props.friend.id);
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
