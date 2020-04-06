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
      company: this.props.user.company,
      catchphrase: this.props.user.company.catchPhrase,
      website: this.props.user.website,
      phone: this.props.user.phone
    }
  }

  render() {
    return (
      <div className="User">
        <div className="username bold">User {this.state.id} - {this.state.username}</div>
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
    );
  }
}

export default User;
