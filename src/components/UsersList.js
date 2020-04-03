import React from 'react';
import axios from 'axios';
import User from './User';
import './UserList.css'

class UsersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  render() {
    return (
      <div className="UserList">
        <div className="title">User List</div>
        <div className="list">
          {this.state.users.map(person => (
            <User user={person}/>
          ))}
        </div>
      </div>
    );
  };

  componentDidMount() {
    const dataUrl = `https://jsonplaceholder.typicode.com/users`; 
    
    axios.get(dataUrl)
    .then(function(response) { return response.data ;})
    .then(function(usersData) {
      this.setState({ 
        users: usersData 
      });
      console.log(this.state.users)
    }.bind(this));
  };
}

export default UsersList;
