import React, { Component } from 'react';

class WorkOutForm extends Component {
    render() {
        return (
            <div className="workout-form one-row">
                <input type="text" className="workout-form__input" id="name"/>
                <label htmlFor="name">Workout name / default will be day</label>
                <div className="workout-form__information one-row">
                    <input type="text" className="workout-form__input" id="exercise"/>
                    <label htmlFor="exercise">Exercise name</label>
                    <input type="text" className="workout-form__input" id="sets"/>
                    <label htmlFor="sets">Sets</label>
                    <input type="text" className="workout-form__input" id="reps"/>
                    <label htmlFor="reps">Reps</label>
                </div>
            </div>
        );
    }
}

export default WorkOutForm;
