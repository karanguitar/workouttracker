import React, { Component } from 'react';
import WorkOutForm from './WorkOutForm'

class FitnessDayForm extends Component {
    render() {
        return (
            <div>
                <h1>Day {this.props.day}</h1>
                <WorkOutForm />
            </div>
        );
    }
}

export default FitnessDayForm;
