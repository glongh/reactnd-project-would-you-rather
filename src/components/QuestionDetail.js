import React, { Component } from 'react';
import { connect } from 'react-redux';

class QuestionDetail extends Component {
  render() {
    const { question, category } = this.props;
    console.log(this.props);
    return (
      <div>
        <hr />
        <div>{category}</div>
        <div>{question && question.id}</div>
      </div>
    );
  }
}

function mapStateToPros({ questions, authedUser }, ownProps) {
  const { question_id } = ownProps.match.params;
  const category =
    questions[question_id].optionOne.votes.find(user => user === authedUser) ||
    questions[question_id].optionTwo.votes.find(user => user === authedUser)
      ? 'answered'
      : 'unanswered';
  return {
    question: questions[question_id],
    category
  };
}

export default connect(mapStateToPros)(QuestionDetail);
