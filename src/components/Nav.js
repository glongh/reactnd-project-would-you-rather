import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Nav extends Component {
  render() {
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
        {this.props.user ? (
          <div>{this.props.user} Log out</div>
        ) : (
          <div>Log In</div>
        )}
      </nav>
    );
  }
}

export default Nav;
