import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Object } from 'core-js';

class QuestionsList extends Component {
  render() {
    const { questions } = this.props;
    return (
      <div>
        {questions &&
          questions.map(question => (
            <div key={question.id}>
              <Link to={`/questions/${question.id}`}>{question.id}</Link>
            </div>
          ))}
      </div>
    );
  }
}

function mapStateToProps({ questions, authedUser }, { category }) {

  let answeredKeys = Object.keys(questions).filter(key => {
    return (
      questions[key].optionOne.votes.find(user => user === authedUser) ||
      questions[key].optionTwo.votes.find(user => user === authedUser)
    );
  });

  let unansweredKeys = Object.keys(questions).filter(key => {
    return (
      questions[key].optionOne.votes.find(user => user !== authedUser) &&
      questions[key].optionTwo.votes.find(user => user !== authedUser)
    );
  });

  return {
    questions: (category === 'answered' ? answeredKeys : unansweredKeys).map(
      key => questions[key]
    )
  };
}

export default connect(mapStateToProps)(QuestionsList);
