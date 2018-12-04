import React, {Component} from 'react';

class StepProcess extends Component{
    constructor(props){
        super(props)
        this.state = {
            i: 0,
            finalStep: false
        }
    }

    nextStep = () =>{

        if(this.state.i < this.props.renderForm.length){
            let newNumber = this.state.i
            this.setState({
                i: newNumber +=1
            })
        }
      
    }

    previousStep = () =>{
        if(this.state.i > 0){
            let newNumber = this.state.i
            this.setState({
                i: newNumber -=1
            })
        } 
       
    }

    render(){
        let step = this.props.renderForm[this.state.i]
        return(
        <div>
            {step}
            <button onClick={this.nextStep}>Next</button>
            <button onClick={this.previousStep}>Back</button>
        </div>
        )
    }
    
}

export default StepProcess;
