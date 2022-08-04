import React, { Component } from "react";
import BrewingInstructionsForm from "./BrewingInstructionsForm";

class BrewingIstructionsWater extends Component {

    constructor() {
        super()
        this.state = {
            showMe: false,
            water: ''
        }
    }

    updateWater = (event) => {
        this.setState({water: event.target.value}, () => console.log(this.state))
    }

    handleClick = () => {
        this.setState({showMe: true})
    }

    render() {
        return(
            <div>
                {(this.state.showMe === false) && 
                <div>
                    <label className="water-amount">Water to use:</label>
                        <input type="text" placeholder="Enter Amount (ml)" onChange={this.updateWater}/>
                        <button onClick={this.handleClick}>Save</button>
                    </div>
                }
                {this.state.showMe && <BrewingInstructionsForm submit={this.props.submit} water={this.state.water}/>}
            </div>
        )
    }
}

export default BrewingIstructionsWater