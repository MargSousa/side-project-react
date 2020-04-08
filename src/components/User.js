import React from 'react';
import './User.css'

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
      company: this.props.user.company,
      catchphrase: this.props.user.company.catchPhrase,
      editMode: false,
      example: "Hello"
    }
  }

 updateUser = (event) => {
   event.preventDefault();

   let name = event.target.name;
   let value = event.target.value;

   console.log(name);
   console.log(value);

   this.setState({ [name]: value })

   console.log(this.state.name);

   this.props.editUsers(this.state);

   this.setState({ editMode: !this.state.editMode})
 }

 deleteItem = (event) => {
  console.log(this.state.id);

  this.props.deleteUser(this.state);
 }




  render() {
    let  { editMode } = this.state;

    return (
      <div className="User" >
        
        <button className="edit-button button" onClick={() => this.setState({ editMode: !this.state.editMode})}>Edit</button>
        <button className="del-button button" onClick={this.deleteItem}>Delete</button>

        <div className={editMode ? 'hidden' : 'show'}>
          <div className="bold space">User {this.state.id} - {this.state.username}</div>
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
            <span className="text"> {this.state.street}, {this.state.suite}, {this.state.city}</span>
          </div>
          <div className="subject space">
            Phone: 
            <span className="text"> {this.state.phone}</span>
          </div>
          <div className="subject">
            Company: 
            <span className="text"> {this.state.company.name}</span>
          </div>
          <div className="text catchphrase"> {this.state.catchphrase}</div>
          <div className="subject">
            Website: 
            <span className="text"> {this.state.website}</span>
          </div>    
        </div> 

        {editMode && 
          <div>
            <form onSubmit={this.updateUser}>
              <button className="save-button button" type="submit">Save</button>
              <label className="bold">Username:</label>
              <input className="name-form" name="username" value={this.state.example}></input><br/>
              <label className="bold">Name: </label>
              <input className="name-form" name="name" value={this.state.name}></input><br/>
            
              <label className="subject">Email: </label>
              <input className="name-form" name="email" value={this.state.email}></input><br/>
              
              <label className="subject">Address Street: </label>
              <input className="name-form input-street" name="street" value={this.state.street}></input><br/>
              
              <label className="subject">Suite: </label>
              <input className="name-form input-suite" name="suite" value={this.state.suite}></input>
              
              <label className="subject">City: </label>
              <input className="name-form input-city" name="city" value={this.state.city}></input><br/>
   
              <label className="subject">Phone: </label>
              <input className="name-form input-phrase" name="phone" value={this.state.phone}></input><br/>
   
              <label className="subject">Company: </label>
              <input className="name-form input-phrase" name="company" value={this.state.company.name}></input><br/>
   
              <label className="subject">Company catchphrase: </label>
              <input className="name-form input-phrase" name="catchphrase" value={this.state.catchphrase}></input><br/>
            
              <label className="subject">Website: </label>
              <input className="name input-site" name="site" value={this.state.website}></input>
              
            </form>
          </div>
        }

      </div>
    );
  }
}

export default User;
