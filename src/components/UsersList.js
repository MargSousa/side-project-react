import React from 'react';
import axios from 'axios';
import User from './User';
import './UserList.css';
import NewUser from './NewUser';

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
    const dataUrl = `https://jsonplaceholder.typicode.com/users`;
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
    newData[newUser.id - 1] = newUser;

    this.setState({
      users: newData,
    });
  };

  editData = (user) => {
    let newData = this.state.users;
    newData[user.id - 1] = user;

    this.setState({
      users: newData,
    });
  };

  deleteData = (user) => {
    let newData = this.state.users;
    const newUsersList = newData.filter((person) => person.id !== user.id);
    this.setState({
      users: newUsersList,
    });
  };

  render() {
    let maxId = 0;
    let ids = this.state.users.forEach((person) => {
      if (person.id > maxId) {
        maxId = person.id;
      }
    });

    return (
      <div className="UserList">
        <div className="title">User List</div>

        <div className="list">
          {this.state.users.map((person) => (
            <User
              key={person.id}
              user={person}
              editUsers={this.editData}
              deleteUser={this.deleteData}
            />
          ))}
        </div>

        <hr className="break" />
        <NewUser
          id={maxId + 1}
          users={this.state.users}
          getNewData={this.getNewUser}
        />
      </div>
    );
  }
}

export default UsersList;
