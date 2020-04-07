import React from 'react';
import './User.css'

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.user.id,
      username: this.props.user.username,
      name: this.props.user.name,
      email: this.props.user.email,
      street: this.props.user.address.street,
      suite: this.props.user.address.suite,
      city: this.props.user.address.city,
      zipcode: this.props.user.address.zipcode,
      company: this.props.user.company,
      catchphrase: this.props.user.company.catchPhrase,
      website: this.props.user.website,
      phone: this.props.user.phone,
      editMode: this.props.mode
    }
  }

  render() {

    let editMode = this.state.editMode;

    return (
      <div className="User" >

        <div className={editMode ? 'hidden' : 'show'}>
          <div className="bold">User {this.state.id} - {this.state.username}</div>
          <div className="name space">{this.state.name}</div>
          <div className="subject">
            Email: 
            <span className="text"> {this.state.email}</span>
          </div>
          <div className="subject">
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

        <form  className={editMode ? 'show' : 'hidden'}>
          <label className="bold">User {this.state.id} - </label>
          <input className="space" value={this.state.username}></input><br/>
          <label className="bold">Name: </label>
          <input className="name-form" value={this.state.name}></input><br/>
        
          <label className="subject">Email: </label>
          <input className="name-form" value={this.state.email}></input><br/>
          
          <label className="subject">Address Street: </label>
          <input className="name-form input-street" value={this.state.street}></input><br/>
          
          <label className="subject">Suite: </label>
          <input className="name-form" value={this.state.suite}></input>
          
          <label className="subject space-left">Zipcode: </label>
          <input className="name-form input-zipcode" value={this.state.zipcode}></input>
          
          <label className="subject">City: </label>
          <input className="name-form input-city" value={this.state.city}></input><br/>

          <label className="subject">Phone: </label>
          <input className="name-form input-phrase" value={this.state.phone}></input><br/>

          <label className="subject">Company: </label>
          <input className="name-form input-phrase" value={this.state.company.name}></input><br/>

          <label className="subject">Company catchphrase: </label>
          <input className="name-form input-phrase" value={this.state.catchphrase}></input><br/>
        
          <label className="subject">Website: </label>
          <input className="name input-phrase" value={this.state.website}></input>
        </form>

      </div>
        
    );
  }
}

export default User;
