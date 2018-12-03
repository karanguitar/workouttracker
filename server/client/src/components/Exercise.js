import React, {Component} from 'react';

class Exercise extends Component{

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    onInputChange = (event) =>{
        this.setState({
           
           [event.target.id] : event.target.value
        })
        console.log(this.state)
    }

    

    render(){

        
        return (
            <div>
                <input onChange={this.onInputChange}  type="text" className="form__input" id={`exercise_name_day_${this.props.day}_${this.props.setsreps}`} name={`exercise_${this.props.day}_${this.props.setsreps}`}/>
                <label htmlFor="exercise" className="form__label">exercise</label>
                <input onChange={this.onInputChange} type="number" className="form__input" id={`sets_day_${this.props.day}_${this.props.setsreps}`} name={`sets_${this.props.day}_${this.props.setsreps}`}/>
                <label htmlFor="sets" className="form__label">sets</label>
                <input onChange={this.onInputChange} type="number" className="form__input" id={`reps_day_${this.props.day}_${this.props.setsreps}`} name={`reps_${this.props.day}_${this.props.setsreps}`}/>
                <label htmlFor="reps" className="form__label">reps</label>
            </div>
        );
    }
}


export default Exercise;
