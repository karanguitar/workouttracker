import React, { Component } from 'react';
import FitnessDayForm from './FitnessDayForm'
import StepProcess from './StepProcess'

class FitnessForm extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            DaysUserWorksout: [],
            showDayForm: false,
            countForNextPreviousButton: 0
        }
    }

    handleChange = (event) =>{
        let tagetValue = event.target.value
        let stringToConcat = "Day "
        let dayArray = []

        for(let i=1; i<= tagetValue; i++){
           let newDay = stringToConcat + i
           dayArray.push(newDay)
        }

        this.setState({
            DaysUserWorksout: dayArray
        })

    }
        
    onSubmit = (event) =>{
        
        event.preventDefault()

        this.setState({
            showDayForm: true
        })
    }

    render() {

        let renderForm = this.state.DaysUserWorksout.map((day) =>
        (
            <div key={day}>
                <h1>{day}</h1>
                <FitnessDayForm day={day} />
            </div>
            )
            
        )
    
        return (
            <div className="form">
               

                <form onSubmit={this.onSubmit} className="form__form form__form-p1">

                    <h1 className="heading-primary">How many days do you workout?</h1>

                    <input className="form__input form__input--number" type="number" max="7" min="1" 
                        id="inputCount"
                        onChange={this.handleChange}
                        />

                    <button className="btn btn--green form__button" type="submit">Submit</button>
                    
                </form>
                
                {this.state.showDayForm ? <StepProcess renderForm={renderForm} />  : null}

            </div>
        );
    }
}

export default FitnessForm;
