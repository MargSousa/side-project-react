import React, { useReducer } from 'react';
import axios from 'axios';
import User from './User';
import './UserList.css'

const dataUrl = `https://jsonplaceholder.typicode.com/users`;
let idNumbers = [];

class UsersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
    this.deleteUser = this.deleteUser.bind(this)
  }

  deleteUser(event) {  
    let userId = event.target.id;
    idNumbers.push(userId);  
    
    console.log(idNumbers);

    axios.get(dataUrl)
    .then(function(response) { return response.data ;})
    .then(function(usersData) {
      
      for (let i = 0; i < idNumbers.length; i++) {
        delete usersData[idNumbers[i] - 1];
      }

      this.setState({ 
        users: usersData 
      });

      console.log(usersData)
      console.log(this.state.users)

    }.bind(this));
  };

  render() {
    return (
      <div className="UserList">
        <div className="title">User List</div>
        <div className="list">

          {this.state.users.map(person => (
            <div>
              <User user={person}/>
          <button className="delete-button" id={person.id} onClick={this.deleteUser}>Delete User {person.id}</button>
            </div>
          ))}
        </div>
      </div>
    );
  };

  componentDidMount() {  
    axios.get(dataUrl)
    .then(function(response) { return response.data ;})
    .then(function(usersData) {
      this.setState({ 
        users: usersData 
      });
    }.bind(this));
  };
}

export default UsersList;
