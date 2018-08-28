import React, { Component } from 'react';
import { connect } from  'react-redux';
import { login } from '../actions/auth'

class Login extends Component {

  handleOnUserLogin = (user) => {
    this.props.dispatch(login(user))
  }

  render() {
    return (
      <div>
        <h3>Select an username to login</h3>
        <ul>
            {this.props.users && Object.keys(this.props.users).map((key) => (
                <li key={key}>
                    <div onClick={() => this.handleOnUserLogin(key)}>{this.props.users[key].name}</div>
                </li>
            ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({users}){
    return {
        users
    }
}

export default connect(mapStateToProps)(Login);
