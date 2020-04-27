import React from 'react';
import './User.css';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.user.id,
      name: this.props.user.name,
      username: this.props.user.username,
      email: this.props.user.email,
      street: this.props.user.address.street,
      suite: this.props.user.address.suite,
      city: this.props.user.address.city,
      zipcode: this.props.user.address.zipcode,
      phone: this.props.user.phone,
      website: this.props.user.website,
      company: this.props.user.company.name,
      editMode: false,
    };
  }

  handleInputChange = (event) => {
    event.preventDefault();
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  updateUser = (event) => {
    this.props.editUsers(this.state);
    this.setState({ editMode: !this.state.editMode });
  };

  render() {
    let { editMode } = this.state;

    return (
      <div className="User">
        <div>
          <button
            className="edit-button button"
            onClick={() => this.setState({ editMode: !this.state.editMode })}
          >
            Edit
          </button>
          <button
            className="del-button button"
            onClick={() => this.props.deleteUser(this.state)}
          >
            Delete
          </button>
        </div>
        <div className={editMode ? 'hidden' : 'show'}>
          <div className="bold user-space">
            User {this.state.id} - {this.state.username}
          </div>
          <div className="subject space">
            Name:
            <span className="text"> {this.state.name}</span>
          </div>
          <div className="subject space">
            Email:
            <span className="text"> {this.state.email}</span>
          </div>
          <div className="subject space">
            Address:
            <span className="text">
              {' '}
              {this.state.street}, {this.state.suite}, {this.state.city}
            </span>
          </div>
          <div className="subject space">
            Phone:
            <span className="text"> {this.state.phone}</span>
          </div>
          <div className="subject space">
            Company:
            <span className="text"> {this.state.company}</span>
          </div>
          <div className="subject">
            Website:
            <span className="text"> {this.state.website}</span>
          </div>
        </div>

        {editMode && (
          <div>
            <form onSubmit={this.updateUser}>
              <div>
                <button className="save-button button" type="submit">
                  Save
                </button>
              </div>
              <label className="bold">Username:</label>
              <input
                className="name-form input-user"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChange}
              ></input>
              <br />
              <label className="bold">Name: </label>
              <input
                className="name-form input-name"
                name="name"
                value={this.state.name}
                onChange={this.handleInputChange}
              ></input>
              <br />
              <label className="subject">Email: </label>
              <input
                className="name-form input-name"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
              ></input>
              <br />
              <label className="subject">Street: </label>
              <input
                className="name-form input-street"
                name="street"
                value={this.state.street}
                onChange={this.handleInputChange}
              ></input>
              <br />
              <label className="subject">Suite: </label>
              <input
                className="name-form input-suite"
                name="suite"
                value={this.state.suite}
                onChange={this.handleInputChange}
              ></input>
              <label className="subject">City: </label>
              <input
                className="name-form input-city"
                name="city"
                value={this.state.city}
                onChange={this.handleInputChange}
              ></input>
              <br />
              <label className="subject">Phone: </label>
              <input
                className="name-form input-phrase"
                name="phone"
                value={this.state.phone}
                onChange={this.handleInputChange}
              ></input>
              <br />
              <label className="subject">Company: </label>
              <input
                className="name-form input-phrase"
                name="company"
                value={this.state.company}
                onChange={this.handleInputChange}
              ></input>
              <br />
              <label className="subject">Website: </label>
              <input
                className="name-form  input-site"
                name="website"
                value={this.state.website}
                onChange={this.handleInputChange}
              ></input>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default User;
