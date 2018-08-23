import React, { Component } from 'react';
import QuestionsList from './QuestionsList';

class Dashboard extends Component {

    render() {
        return (
            <div>
                <hr/>
                <div>Dashboard / Questions list</div>
                <div>Unanswered / Answered</div>
                <QuestionsList category=""/>
                <hr />
            </div>
        )
    }
}

export default Dashboard;