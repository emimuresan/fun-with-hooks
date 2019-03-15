import React, { useState } from 'react';

const handleSubmit = (event, state) => {
  event.preventDefault();
  alert(JSON.stringify(state, null, 2));
};

const Form = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [isSubscribed, setSubscribed] = useState(false);
  const [state, setAll] = useState({ name: '', lastName: '' });

  const currentState = { firstName, lastName, password, isSubscribed };
  return (
    <form className="demo">
      <input
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="First name"
        type="text"
        name="firstName"
        required
      />
      <input
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Last name"
        type="text"
        name="lastName"
        required
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
        name="password"
        required
      />
      <label>
        Subscribe to Awesome Hooks newsletter&nbsp;
        <input
          name="isSubscribed"
          type="checkbox"
          checked={isSubscribed}
          onChange={(e) => setSubscribed(e.target.checked)}
        />
      </label>

      <button type="submit" onClick={(e) => handleSubmit(e, currentState)}>
        Submit
      </button>
    </form>
  );
};

export default Form;

/**
 * Notes:
 * State variables can hold objects and arrays just fine, so you can still group related data together.
 *
 * However, unlike this.setState in a class,
 * updating a state variable always replaces it
 * instead of merging it.
 */
