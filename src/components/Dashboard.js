import React, { Component } from 'react';
import QuestionsList from './QuestionsList';

class Dashboard extends Component {
    state = {
        category: 'unanswered'
    }

    handleCategory(category) {
        this.setState({
            category 
        });
    }

    render() {
        return (
            <div>
                <hr/>
                <div>Dashboard / Questions list</div>
                <div>
                    <div onClick={() => this.handleCategory('unanswered')}>{}Unanswered</div>
                    <div onClick={() => this.handleCategory('answered')}>Answered</div>
                </div>
                    <QuestionsList category={this.state.category}/>
                <hr />
            </div>
        )
    }
}

export default Dashboard;