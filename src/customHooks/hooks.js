import { useState, useEffect } from 'react';
import ChatAPI from '../utils/ChatAPI';

const useFriendStatus = (friendId) => {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(friendId, handleStatusChange);
    console.log('- USE EFFECT', friendId);
    // Specify how to clean up after this effect:
    return function cleanup() {
      console.log('- CLEAN UP', friendId);
      ChatAPI.unsubscribeFromFriendStatus(friendId, handleStatusChange);
    };
  }, [friendId]); // Only re-subscribe if friendId changes

  return isOnline;
};

export default useFriendStatus;
