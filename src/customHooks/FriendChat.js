import React, { useState } from 'react';
import StatusBar from './StatusBar';
import useFriendStatus from './hooks';

const FRIENDS = {
  id1: {
    id: 'id1',
    name: 'Harry Potter',
  },
  id2: {
    id: 'id2',
    name: 'Hermione Granger',
  },
  id3: {
    id: 'id3',
    name: 'Ron Weasly',
  },
  id4: {
    id: 'id4',
    name: 'Draco Malfoy',
  },
};

const FriendChat = (props) => {
  const [friendId, setFriendId] = useState('id1');
  const [isSpellCast, setIsSpellCast] = useState(false);

  function handleChange(event) {
    const selectedId = event.target.value;
    setFriendId(selectedId);
    if (selectedId === 'id4') {
      setIsSpellCast(true);
    } else {
      setIsSpellCast(false);
    }
  }

  return (
    <div className="demo">
      <label>
        Select Friend:{' '}
        <select value={friendId} onChange={(ev) => handleChange(ev)}>
          <Friend id="id1" name="Harry" />
          <Friend id="id2" name="Hermione" />
          <Friend id="id3" name="Ron" />
          <Friend id="id4" name="Draco" />
        </select>
      </label>
      {isSpellCast ? (
        <div>
          Magic{' '}
          <span aria-label="magic-emoji" role="img">
            ✨🌟✨
          </span>
        </div>
      ) : (
        <StatusBar friend={FRIENDS[friendId]} />
      )}
    </div>
  );
};

const Friend = (props) => {
  const isOnline = useFriendStatus(props.id);
  const statusEmoji = isOnline ? '😃' : '😴';
  return (
    <option value={props.id}>
      {props.name} {statusEmoji}
    </option>
  );
};

export default FriendChat;
