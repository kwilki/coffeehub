import React, { Component } from "react";
import BrewingInstructionsWater from "./BrewingInstructionsWater";
import BrewingInstructionsForm from "./BrewingInstructionsForm";

class BrewingInstructions extends Component {

    constructor(props) {
        super(props)
        this.state = {
            water: props.water,
        }
    }

    updateWaterState = (event) => {
        this.setState({water: event.target.value}, () => console.log(this.state))
    }

    componentDidMount() {
        console.log(this.props)
    }

    render() {
        if(this.state.water !== '') {
            console.log('state')
            return(
                <BrewingInstructionsForm submit={this.props.submit} water={this.state.water} />
            )
        } else {
            console.log('BrewingInstructionsWater')
            return (
                <div>
                    <BrewingInstructionsWater submit={this.props.submit}/>
                </div>
            )
        }
        
    }
}

export default BrewingInstructions