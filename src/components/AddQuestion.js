import React, { Component } from "react";

class AddQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: ""
  };

  handleOptionOne = e => {
    const text = e.target.value;
    this.setState({
      optionOne: text
    });
  };

  handleOptionTwo = e => {
    const text = e.target.value;
    this.setState({
      optionTwo: text
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <div>Would you rather?</div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleOptionOne} /> or{" "}
            <input type="text" onChange={this.handleOptionTwo} />
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default AddQuestion;
