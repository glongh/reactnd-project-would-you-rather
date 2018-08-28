import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { logout } from '../actions/auth';
import { connect } from 'react-redux';

class Nav extends Component {
  handleLogout() {
    this.props.dispatch(logout());
  }

  render() {
    const { user } = this.props;
    return (
      <nav>
        <NavLink to="/" exact>
          Home
        </NavLink>
        <NavLink to="/add" exact>
          Add
        </NavLink>
        <NavLink to="/leaderboard" exact>
          Leaderboard
        </NavLink>
        {user && (
          <div>
            <span>{user.name}</span>{' '}
            <span onClick={() => this.handleLogout()}>Log out</span>
          </div>
        )}
      </nav>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    authedUser,
    user: users[authedUser]
  };
}

export default connect(mapStateToProps)(Nav);
