import React, { Component } from 'react';

class Form extends Component {
  state = {
    firstName: '',
    lastName: '',
    password: '',
    isSubscribed: false,
  };

  handleInputChange = (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

    this.setState({
      [event.target.name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(this.state, null, 2));
  };

  render() {
    const { firstName, lastName, password, isSubscribed } = this.state;
    return (
      <form className="demo demo--class">
        <input
          value={firstName}
          onChange={this.handleInputChange}
          placeholder="First name"
          type="text"
          name="firstName"
          required
        />
        <input
          value={lastName}
          onChange={this.handleInputChange}
          placeholder="Last name"
          type="text"
          name="lastName"
          required
        />
        <input
          value={password}
          onChange={this.handleInputChange}
          placeholder="Password"
          type="password"
          name="password"
          required
        />
        <label>
          Subscribe to Awesome Hooks newsletter&nbsp;
          <input name="isSubscribed" type="checkbox" checked={isSubscribed} onChange={this.handleInputChange} />
        </label>

        <button type="submit" onClick={this.handleSubmit}>
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
