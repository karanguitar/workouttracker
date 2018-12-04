import React, { Component } from 'react';
import Exercise from './Exercise'

class FitnessDayForm extends Component {

    constructor(props){
        super(props)
        this.state ={
            inputs: [`${this.props.day} exercise-1`]
        }
    }

    appendInput = (event) =>{
        console.log(this.state)
        event.preventDefault()
        let newInput = `${this.props.day} exercise-${this.state.inputs.length + 1}`

        this.setState({
           
            inputs:  this.state.inputs.concat(newInput)
        })       
    }
    
    removeInput = (event) =>{
        event.preventDefault()
        if(this.state.inputs.length > 1){
            let stateCopy = this.state.inputs
            stateCopy.splice(-1, 1)

            this.setState({
                inputs: stateCopy
            })
            console.log(this.state)
        }
    }


    render() {
        const {day} = this.props
        return (
            <div className="form__form form__form-p2">
            <form className="form__form form__form-p3" name={`day${day}`}>
                <input type="text" className="form__input" id="name" name={`day${this.props.day}`}/>
                <label htmlFor="name" className="form__label">Workout name / default will be day</label>
                <div className="form__information">
                    {this.state.inputs.map((exercise) => {
                        return (
                            <Exercise key={exercise} day={day} exercise={exercise}/>
                            
                            );
                    })}
                </div>  
                <button onClick={this.appendInput} className="btn">+</button>
                <button onClick={this.removeInput} className="btn">-</button>
            </form>
            </div>
        );
    }
}

export default FitnessDayForm;
