import React, { Component } from 'react';
import FitnessDayForm from './FitnessDayForm'

class FitnessForm extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            DaysUserWorksout: [0],
            showDayForm: false,

        }
    }


    incrementNumber = (number) =>{
        
            let newNumber = number + 1;

        this.setState({
            DaysUserWorksout: this.state.DaysUserWorksout.concat(newNumber)
        })
        console.log(this.state)
    }




    renderForm = () =>{

        this.state.DaysUserWorksout.forEach(() =>{
            return (
                <div>
                    <FitnessDayForm day={`${this.state.count}`} className={this.state.DaysUserWorksout}/>
                    <button className="btn btn--blue form__button" onClick={() => this.incrementNumber(this.state.DaysUserWorksout[-1])}>Next</button>
                </div>
                )
        })
        
    }

    onSubmit = (event) =>{
        
        event.preventDefault()
        
        let stateCopy = this.state.DaysUserWorksout
        let newList = stateCopy.map((item) =>{
            return item + 1
        })

        this.setState({
            DaysUserWorksout: newList,
            showDayForm: true
        })
        console.log(this.state)
    }

    render() {
        
        return (
            <div className="form">
               

                <form onSubmit={this.onSubmit} className="form__form form__form-p1">

                    <h1 className="heading-primary">How many days do you workout?</h1>

                    <input className="form__input form__input--number" type="number" max="7" min="1" 
                        onClick={() => this.incrementNumber(this.state.DaysUserWorksout.length -1)}
                        name="DaysUserWorksout"
                        value={this.state.DaysUserWorksout[-1]}
                        />

                    <button className="btn btn--green form__button" type="submit">Submit</button>
                    
                </form>
                
                {this.state.showDayForm ? this.renderForm() : null}

            </div>
        );
    }
}

export default FitnessForm;
