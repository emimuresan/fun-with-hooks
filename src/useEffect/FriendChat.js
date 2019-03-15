import React from 'react';
import StatusBar from './StatusBar';

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
export default class FriendChat extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { friendId: 'id1', isSpellCast: false };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const selectedId = event.target.value;
    this.setState({ friendId: selectedId });
    if (selectedId === 'id4') {
      this.setState({ isSpellCast: true });
    } else {
      this.setState({ isSpellCast: false });
    }
  }

  render() {
    return (
      <div className="demo">
        <label>
          Select Friend:{' '}
          <select value={this.state.friendId} onChange={this.handleChange}>
            <option value="id1">Harry</option>
            <option value="id2">Hermione</option>
            <option value="id3">Ron</option>
            <option value="id4">Draco</option>
          </select>
        </label>
        {this.state.isSpellCast ? (
          <div>
            Magic{' '}
            <span aria-label="magic-emoji" role="img">
              ✨🌟✨
            </span>
          </div>
        ) : (
          <StatusBar friend={FRIENDS[this.state.friendId]} />
        )}
      </div>
    );
  }
}
