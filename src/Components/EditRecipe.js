import React, { Component } from "react";
import CoffeeInformationForm from "./CoffeeInformationForm";
// import EditBrewingInstructions from "./EditBrewingInstructions";
import RecipeInformationForm from "./RecipeInformationForm";


class EditRecipe extends Component {

    constructor() {
        super()
        this.state = {
            CoffeeInformation: {
                origin: '',
                varietal: '',
                producer: '',
                process: '',
                roaster: '',
                rating: '',
                notes: ''
            },

            RecipeInformation:  {
                brewMethod: '',
                grinder: '',
                grindSetting: '',
                ratio: '',
                coffeeAmount: '',
                waterAmount: '',
                temperature: '',
                notes: ''
            },

            BrewingInstructions: {},
            userId: '',
            id: ''
        }
    }

    componentDidMount() {
        this.setState({CoffeeInformation: {...this.props.coffeeInformation}}, () => console.log(this.state.CoffeeInformation))
        this.setState({RecipeInformation: {...this.props.recipeInformation}}, () => console.log(this.state.RecipeInformation))
        this.setState({BrewingInstructions: {...this.props.BrewingInstructions}}, () => console.log(this.state.BrewingInstructions))
        this.setState({id: this.props.recipeId})
        this.setState({userId: this.props.userId})
    }

    handleCoffeeInformation = (event) => {
        this.setState(prevState => ({
            ...prevState,
            CoffeeInformation: { 
                ...prevState.CoffeeInformation,
                [event.target.name]: event.target.value
            }
        }), () => console.log(this.state.CoffeeInformation))
    }

    handleRecipeInformation = (event) => {
        this.setState(prevState => ({
            ...prevState,
            RecipeInformation: { 
                ...prevState.RecipeInformation,
                [event.target.name]: event.target.value
            }
        }), () => console.log(this.state.RecipeInformation))
    }

    handleActionValueChange = (event, index, actionName) => {
        console.log(event)
        console.log(index)
        console.log(this.state)
        console.log(this.state.action[index])
        // let int = parseInt(event.target.value)
        
        
        this.setState(prevState => ({
            BrewingInstructions: {
                ...prevState.BrewingInstructions,
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
            }
        }))
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let configObj = {
            method:"PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                ...this.state
            })
            
        }

        return (
            fetch(`http://localhost:8000/Recipes/${this.props.recipeId}`, configObj)
                .then(this.props.submit())
        )
    }

    render() {
        return (
            <div className='page-container'>
                <div className='main-heading'>
                    <h2 className="page-heading">Edit Recipe</h2>
                </div>
                <div className='page-content'>
                    <form onSubmit={this.handleSubmit}>
                        <h3>Coffee Information</h3>
                        <CoffeeInformationForm coffeeInformation={this.state.CoffeeInformation} handleChange={this.handleCoffeeInformation}/>
                        <h3>Recipe Information</h3>
                        <RecipeInformationForm recipeInformation={this.state.RecipeInformation} handleChange={this.handleRecipeInformation}/>
                        {/* <h3>BrewingInstructions</h3>
                        <EditBrewingInstructions BrewingInstructions={this.state.BrewingInstructions} handleChange={this.handleActionValueChange}/> */}
                        <input type="submit"/>
                    </form>
                    
                </div>
            </div>
        )
    }
}

export default EditRecipe

