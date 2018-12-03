import React, { Component } from 'react';
import Exercise from './Exercise'

class WorkOutForm extends Component {

    constructor(props){
        super(props)
        this.state ={
            inputs: ['exercise-first']
        }
    }

    appendInput = (event) =>{
        event.preventDefault()
        let newInput = `exercise-${this.state.inputs.length}`

        this.setState({
            ...this.state,
            inputs:  this.state.inputs.concat(newInput)
        })
    }
    
    removeInput = (event) =>{
        event.preventDefault()
        let popInput = this.state.inputs.pop()
        this.setState({
            inputs: popInput
        })
    }

    render() {
        return (
            
            <form className="form__form form__form-p3" name={`day${this.props.day}`}>
                <input type="text" className="form__input" id="name" name={`day${this.props.day}`}/>
                <label htmlFor="name" className="form__label">Workout name / default will be day</label>
                <div className="form__information">
                    {this.state.inputs.map((setsreps) => {
                        return (
                            <Exercise key={setsreps} day={`${this.props.day}`} setsreps={setsreps}/>
                            
                            );
                    })}
                </div>  
                <button onClick={this.appendInput} className="btn">+</button>
                <button onClick={this.removeInput} className="btn">-</button>
            </form>
        );
    }
}

export default WorkOutForm;
