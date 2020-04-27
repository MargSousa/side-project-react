import React from 'react';
import './NewUser.css';

class NewUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: this.props.users,
      id: this.props.id,
      newUsername: '',
      newName: '',
      newEmail: '',
      newStreet: '',
      newSuite: '',
      newCity: '',
      newZipcode: '',
      newPhone: '',
      newCompany: '',
      newSite: '',
    };
  }

  componentDidUpdate = (prevProps) => {
    if (this.props.users !== prevProps.users) {
      let newData = this.props.users;
      let newId = this.props.id;
      this.setState({
        users: newData,
        id: newId,
      });
    }
  };

  handleInputChange = (event) => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };

  addNewUser = (event) => {
    let getUsername = this.state.users.filter(
      (user) => user.username === this.state.newUsername,
    );
    let getName = this.state.users.filter(
      (user) => user.name === this.state.newName,
    );
    if (getUsername.length > 0) {
      alert('That username is already in use, please choose another one.');
    } else if (getName.length > 0) {
      alert(
        `You are already registered with the username ${getName[0].username}.`,
      );
    } else {
      let newData = {
        id: this.state.id,
        name: this.state.newName,
        username: this.state.newUsername,
        email: this.state.newEmail,
        address: {
          street: this.state.newStreet,
          suite: this.state.newSuite,
          city: this.state.newCity,
          zipcode: this.state.newZipcode,
        },
        phone: this.state.newPhone,
        website: this.state.newSite,
        company: {
          name: this.state.newCompany,
        },
      };

      this.props.getNewData(newData);

      this.setState({
        newUsername: '',
        newName: '',
        newEmail: '',
        newStreet: '',
        newSuite: '',
        newCity: '',
        newZipcode: '',
        newPhone: '',
        newCompany: '',
        newSite: '',
      });
    }
  };

  render() {
    const {
      newUsername,
      newName,
      newEmail,
      newStreet,
      newSuite,
      newCity,
      newZipcode,
      newPhone,
      newCompany,
      newSite,
    } = this.state;

    return (
      <div className="NewUserForm">
        <div className="title-form">Register a new user</div>
        <form className="new-user-form">
          <div className="new-form">
            <div className="new-id">User {this.props.id}</div>
          </div>
          <div className="new-form">
            <label className="new-label">Username:</label>
            <input
              className="new-input"
              id="username"
              name="newUsername"
              type="text"
              value={newUsername}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="new-form">
            <label className="new-label" htmlFor="name">
              Name:
            </label>
            <input
              className="new-input"
              id="name"
              type="text"
              name="newName"
              value={newName}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="new-form">
            <label className="new-label" htmlFor="email">
              Email:
            </label>
            <input
              className="new-input"
              id="email"
              type="text"
              name="newEmail"
              value={newEmail}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="new-form">
            <label className="new-label" htmlFor="street">
              Street:
            </label>
            <input
              className="new-input"
              id="street"
              type="text"
              name="newStreet"
              value={newStreet}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="new-form">
            <label className="new-label" htmlFor="suite">
              Suite:
            </label>
            <input
              className="new-input"
              id="suite"
              type="text"
              name="newSuite"
              value={newSuite}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="new-form">
            <label className="new-label" htmlFor="city">
              City:
            </label>
            <input
              className="new-input"
              id="city"
              type="text"
              name="newCity"
              value={newCity}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="new-form">
            <label className="new-label" htmlFor="zipcode">
              Zipcode:
            </label>
            <input
              className="new-input"
              id="zipcode"
              type="text"
              name="newZipcode"
              value={newZipcode}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="new-form">
            <label className="new-label" htmlFor="phone">
              Phone:
            </label>
            <input
              className="new-input"
              id="phone"
              type="text"
              name="newPhone"
              value={newPhone}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="new-form">
            <label className="new-label" htmlFor="company">
              Company:
            </label>
            <input
              className="new-input"
              id="company"
              type="text"
              name="newCompany"
              value={newCompany}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="new-form">
            <label className="new-label" htmlFor="site">
              Website:
            </label>
            <input
              className="new-input"
              id="site"
              type="text"
              name="newSite"
              value={newSite}
              onChange={this.handleInputChange}
            />
          </div>
        </form>
        <div className="buttons">
          <button className="add-button button" onClick={this.addNewUser}>
            Add User
          </button>
        </div>
      </div>
    );
  }
}

export default NewUser;
