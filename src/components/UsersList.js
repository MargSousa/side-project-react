import React from 'react';
import axios from 'axios';
import User from './User';
import './UserList.css';
import NewUser from './NewUser';

const dataUrl = `https://jsonplaceholder.typicode.com/users`;
let idNumbers = [];

class UsersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      newUser: [],
      newUsername: '',
      newUserId: 0,
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

  componentDidMount = () => {
    axios
      .get(dataUrl)
      .then((response) => response.data)
      .then((usersData) => {
        this.setState({
          users: usersData,
        });
      });
  };

  getNewUser = (newUser) => {
    let newData = this.state.users;
    let nextItemIndex = newUser.id - 1;

    newData[nextItemIndex] = newUser;

    this.setState({
      users: newData,
    });
  };

  editData = (user) => {
    let newData = this.state.users;
    let userId = user.id;

    newData[userId - 1] = user;

    this.setState({
      users: newData,
    });
  };

  deleteData = (user) => {
    let newData = this.state.users;
    let userId = user.id;

    idNumbers.push(userId);

    for (let i = 0; i < idNumbers.length; i++) {
      delete newData[idNumbers[i] - 1];
    }

    this.setState({
      users: newData,
    });
  };

  render() {
    let nextId = this.state.users.length + 1;

    return (
      <div className="UserList">
        <div className="title">User List</div>

        <div className="list">
          {this.state.users.map((person) => (
            <div>
              <User
                user={person}
                editUsers={this.editData}
                deleteUser={this.deleteData}
              />
            </div>
          ))}
        </div>

        <hr className="break" />
        <NewUser
          id={nextId}
          users={this.state.users}
          getNewData={this.getNewUser}
        />
      </div>
    );
  }
}

export default UsersList;
