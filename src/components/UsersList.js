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
      users: [],
      newUsername: '',
      newName: '',
      newEmail: '',
      newStreet: '',
      newSuite: '',
      newCity: '',
      newZipcode: '',
      newPhone: '',
      newCompany: '',
      newSite: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.addNewUser = this.addNewUser.bind(this);
    this.deleteData = this.deleteData.bind(this);
    this.editData = this.editData.bind(this);
  }

  componentDidMount() {  
    axios.get(dataUrl)
    .then(function(response) { return response.data ;})
    .then(function(usersData) {
      this.setState({ 
        users: usersData 
      });

      console.log(usersData);
    }.bind(this));
  };


  handleInputChange(event) {
    let name = event.target.name;
    let value = event.target.value;

    this.setState({ [name]: value })
  }
  

  addNewUser(event) {

    let newData = this.state.users;
    let nextItemIndex = this.state.users.length;
    let nextItemId = this.state.users.length + 1;

    let newUser = { 
      id: nextItemId, 
      name: this.state.newName,
      username: this.state.newUsername,
      email: this.state.newEmail,
      address: {
        street: this.state.newStreet,
        suite: this.state.newSuite,
        city: this.state.newCity, 
        zipcode: this.state.zipcode,
        geo: {
          lat: '0.00',
          lng: '0.00'
        }
      },
      phone: this.state.newPhone,
      website: this.state.newSite,
      company: {
        name:this.state.newCompany,
        catchphrase:  "Some catchphrase...",
        bs: ""
      },
    }
  
    newData[nextItemIndex] = newUser;

    this.setState({ 
      users: newData,
      newUsername: '',
      newName: '',
      newEmail: '',
      newStreet: '',
      newSuite: '',
      newCity: '',
      newZipcode: '',
      newPhone: '',
      newCompany: '',
      newSite: ''
    });
  };
    

  deleteData(user) {  
    let newData = this.state.users;
    let userId = user.id;

    idNumbers.push(userId);  

    for (let i = 0; i < idNumbers.length; i++) {
      delete newData[idNumbers[i] - 1];
    }

    this.setState({ 
      users: newData 
    });
  };


  editData(user) {  
    let newData = this.state.users;
    let userId = user.id;

    newData[userId - 1] = user;

    this.setState({ 
      users: newData 
    });

  };


  render() {

    return (  
      <div className="UserList">
        <div className="title">User List</div>

        <div className="list">
          {this.state.users.map(person => (
            <div>
              <User user={person} editUsers={this.editData}  deleteUser={this.deleteData}/>
            </div>
          ))}
        </div>

        <div className="new-user">
          <div className="title-form">Register a new user</div>
          <form className="NewUserForm">
              <div>
                <label className="label" htmlFor="username">Username:</label>
                <input className="input" id="username" name="newUsername" type="text" value={this.state.newUsername} onChange={this.handleInputChange}/>
              </div>
              <div>
                <label className="label" htmlFor="name">Name:</label>
                <input className="input" id="name" type="text" name="newName" value={this.state.newName} onChange={this.handleInputChange}/>
              </div>
              <div>  
                <label className="label" htmlFor="email">Email:</label>
                <input className="input" id="email" type="text" name="newEmail" value={this.state.newEmail} onChange={this.handleInputChange}/>
              </div>
              <div>              
                <label className="label" htmlFor="street">Street:</label>
                <input className="input" id="street" type="text" name="newStreet" value={this.state.newStreet} onChange={this.handleInputChange}/>
              </div>
              <div>
                <label className="label" htmlFor="suite">Suite:</label>
                <input className="input" id="suite" type="text" name="newSuite" value={this.state.newSuite} onChange={this.handleInputChange}/>
              </div>
              <div>
                <label className="label" htmlFor="city">City:</label>
                <input className="input" id="city" type="text" name="newCity" value={this.state.newCity} onChange={this.handleInputChange}/>
              </div>
              <div>
                <label className="label" htmlFor="zipcode">Zipcode:</label>
                <input className="input" id="zipcode" type="text" name="newZipcode" value={this.state.newZipcode} onChange={this.handleInputChange}/>
              </div>
              <div>
                <label className="label" htmlFor="phone">Phone:</label>
                <input className="input" id="phone" type="text" name="newPhone" value={this.state.newPhone} onChange={this.handleInputChange}/>
              </div>
              <div>
                <label className="label" htmlFor="company">Company:</label>
                <input className="input" id="company" type="text" name="newCompany" value={this.state.newCompany} onChange={this.handleInputChange}/>
              </div>
              <div>
                <label className="label" htmlFor="site">Website:</label>
                <input className="input" id="site" type="text" name="newSite" value={this.state.newSite} onChange={this.handleInputChange}/>
              </div>
          </form>
          <div>
            <button className="add-button button" onClick={this.addNewUser}>Add User</button>
          </div>
        </div>

      </div>
    );
  };
}

export default UsersList;
