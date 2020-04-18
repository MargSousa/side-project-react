import React from 'react';

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
    let name = event.target.name;
    let value = event.target.value;
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
          zipcode: this.state.zipcode,
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
    return (
      <div className="new-user">
        <div className="title-form">Register a new user</div>
        <form className="NewUserForm">
          <div>
            <div className="user-id">User {this.props.id}</div>
          </div>
          <div>
            <label className="label">Username:</label>
            <input
              className="input"
              id="username"
              name="newUsername"
              type="text"
              value={this.state.newUsername}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label className="label" htmlFor="name">
              Name:
            </label>
            <input
              className="input"
              id="name"
              type="text"
              name="newName"
              value={this.state.newName}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label className="label" htmlFor="email">
              Email:
            </label>
            <input
              className="input"
              id="email"
              type="text"
              name="newEmail"
              value={this.state.newEmail}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label className="label" htmlFor="street">
              Street:
            </label>
            <input
              className="input"
              id="street"
              type="text"
              name="newStreet"
              value={this.state.newStreet}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label className="label" htmlFor="suite">
              Suite:
            </label>
            <input
              className="input"
              id="suite"
              type="text"
              name="newSuite"
              value={this.state.newSuite}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label className="label" htmlFor="city">
              City:
            </label>
            <input
              className="input"
              id="city"
              type="text"
              name="newCity"
              value={this.state.newCity}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label className="label" htmlFor="zipcode">
              Zipcode:
            </label>
            <input
              className="input"
              id="zipcode"
              type="text"
              name="newZipcode"
              value={this.state.newZipcode}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label className="label" htmlFor="phone">
              Phone:
            </label>
            <input
              className="input"
              id="phone"
              type="text"
              name="newPhone"
              value={this.state.newPhone}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label className="label" htmlFor="company">
              Company:
            </label>
            <input
              className="input"
              id="company"
              type="text"
              name="newCompany"
              value={this.state.newCompany}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label className="label" htmlFor="site">
              Website:
            </label>
            <input
              className="input"
              id="site"
              type="text"
              name="newSite"
              value={this.state.newSite}
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
