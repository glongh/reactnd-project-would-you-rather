import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Login";
import Nav from "./Nav";
import AddQuestion from "./AddQuestion";
import Dashboard from "./Dashboard";
import QuestionDetail from "./QuestionDetail";
import Leaderboard from "./Leaderboard";
import { handleReceiveUsers } from '../actions/users'
import { connect } from 'react-redux'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleReceiveUsers());
  }

  render() {
    return (
      <Router>
        <div>
          { this.props.authedUser ? (
          <div>
            <Nav />
            <Route exact path="/add" component={AddQuestion} />
            <Route exact path="/" component={Dashboard} />
            <Route
              exact
              path="/questions/:question_id"
              component={QuestionDetail}
            />
            <Route exact path="/leaderboard" component={Leaderboard} />
          </div>
          ) : (
            <Login />
          )}
        </div>
      </Router>
    );
  }
}


function mapStateToProps({authedUser}){
  return {
    authedUser: authedUser ? authedUser : null
  }
}

export default connect(mapStateToProps)(App);
