import React, { Component } from 'react';
import WorkOutForm from './WorkOutForm'

class FitnessDayForm extends Component {
    render() {
        return (
            <div className="form__form form__form-p2">
                <h1>Day {this.props.day}</h1>
                <WorkOutForm day={this.props.day}/>
            </div>
        );
    }
}

export default FitnessDayForm;
