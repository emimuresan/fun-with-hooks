export default {
  subscribeToFriendStatus: (id, callback) => {
    if (['id1', 'id2'].includes(id)) {
      callback({ isOnline: true });
    } else {
      callback({ isOnline: false });
    }
  },

  unsubscribeFromFriendStatus: (id, callback) => {
    callback({ isOnline: false });
  },
};
