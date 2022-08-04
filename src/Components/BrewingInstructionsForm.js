import React, { Component } from "react";
import ActionInput from "./ActionInput";
import SelectAction from "./SelectAction";

class BrewingInstructionsForm extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            water: '',
            action: []
        }
    }

    componentDidMount() {
        this.setState({water: parseInt(this.props.water)}
        // , () => console.log(this.state.waterToUse)
        )
    }

    handleName = (event) => {
        this.setState({name: event.target.value}
            // , () => console.log(this.state.name)
            )
    }

    handleSelectChange = (event) => {
        if (event.target.value === "Bloom"){
            this.setState(prevState => ({
                action: [
                    ...prevState.action, 
                    {[event.target.value]: {water: '', time: ''}} 
                ]
            })
                // , () => console.log(this.state)
            )
            // console.log(event)
        } else if(event.target.value === "Pour") {
            this.setState(prevState => ({
                action: [
                    ...prevState.action, {[event.target.value]: {water: ''}} 
                ]
            })
                // , () => console.log(this.state)
            )
        } else if(event.target.value === "Agitate") {
            this.setState(prevState => ({
                action: [
                    ...prevState.action, {[event.target.value]: {notes: ''}} 
                ]
            })
                // , () => console.log(this.state)
            )
        }
        
    }

    remove = (event) => {
        let actions = this.state.action
        console.log(actions)
        let index = event.target.name
        console.log(index)
        actions.splice(index, 1)
        this.setState({action: actions}
            // , console.log(this.state.action)
        )
        
    }

    handleActionValueChange = (event, index, actionName) => {
        // console.log(event)
        // console.log(index)
        // console.log(this.state)
        // console.log(this.state.action[index])
        // let int = parseInt(event.target.value)
        
        this.setState(prevState => ({
            action: prevState.action.map((action, i) => {
                console.log(action)
                if(i === index) {
                    return {
                        ...action,
                        [actionName]: {
                            ...action[actionName], 
                            [event.target.name]: event.target.value
                        }
                    }
                } else {
                    return {...action}
                }
            })
        })
        // , () => console.log(this.state)
        )
        // this.setState(prevState => ({ waterToUse: prevState.waterToUse - int }), () => console.log(parseInt(event.target.value)))
    }

    submitInstructions = (event) => {
        event.preventDefault()
        let instructions = this.state
        this.props.submit(instructions)
    }

    render() {
        return (
            <div>
                <h3>Add Brew Instructions</h3>
                <form onSubmit={this.submitInstructions}>
                    <input type="text" placeholder="Enter Name" value={this.state.name} onChange={this.handleName} required/>
                    <div>
                        <p>Total Water: {this.props.water + 'ml'}</p>
                    </div>
                    {(this.state.action.length > 0) && this.state.action.map((action, index) => {
                        return <ActionInput key={index} action={action} index={index} remove={this.remove} handleChange={this.handleActionValueChange}/>
                    })}
                    <SelectAction handlechange={this.handleSelectChange}/>
                    <input type="submit" value="Save"/>
                </form>
            </div>
        )
    }
}

export default BrewingInstructionsForm
