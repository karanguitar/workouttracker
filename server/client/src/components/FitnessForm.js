import React, { Component } from 'react';
import FitnessDayForm from './FitnessDayForm'

class FitnessForm extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            DaysUserWorksout: 0,
            showDayForm: false,
            count : 1

        }
    }
    
    onInputChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit = (event) =>{
        
        event.preventDefault()
        this.setState({
            showDayForm: true
        })
    }

    incrementNumber = (number) =>{
        number = number + 1;
        this.setState({
            count: number
        })
    }


    renderForm = () =>{

        while(this.state.count <= this.state.DaysUserWorksout){
            return (<div>
                <h1>{this.state.count }</h1>
                <FitnessDayForm day={`${this.state.count}`}/>
                <button onClick={() => this.incrementNumber(this.state.count)}>Next</button>
            </div>)
        }
    }

    render() {
        
        return (
            <div className="activeDays">
               

                <form onSubmit={this.onSubmit} >

                    <h1 className="heading-primary">How many days do you workout?</h1>
                    <input className="activeDays__input" type="number" max="7" min="1" 
                        value={this.state.DaysUserWorksout}
                        onChange={this.onInputChange}
                        name="DaysUserWorksout"
                        />

                    <button className="btn btn--green" type="submit">Submit</button>
                    
                </form>
                {this.state.showDayForm ? this.renderForm() : null}

            </div>
        );
    }
}

export default FitnessForm;
