import React, { Component } from 'react';
import BrewingInstructions from './BrewingInstructions';
import CoffeeInformationForm from './CoffeeInformationForm';
import RecipeInformationForm from './RecipeInformationForm';
import '../css/createRecipeForm.css'

class CreateNewRecipe extends Component {

    constructor() {
        super()
        this.state = {
            showMe: false,

            timezone: '',

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
            userId: ''
        }
    }

    componentDidMount() {
        this.setState({userId: this.props.userId}, () => console.log(this.state.userId))
        this.setState({timezone: this.props.timezone}, () => console.log(this.state.timezone))
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

    createInstructions = () => {
        this.setState({showMe: !this.state.showMe})
    }

    BrewingInstructionsSubmit = (instructions) => {
        this.setState({BrewingInstructions: instructions}, () => console.log(this.state))
        this.setState({showMe: !this.state.showMe})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state.timezone)
        fetch(`http://worldtimeapi.org/api/timezone/${this.props.timezone}`)
        .then(res => res.json())
        .then(json => this.handleDate(json))
        .catch('Timezone error')
    }

    handleDate = (json) => {
        let datetimeOg = json.datetime.split('T')
            console.log(datetimeOg)
            let datetime = datetimeOg[0].split('-')
            console.log(datetime)
            let date = datetime[2] + '/' + datetime[1] + '/' + datetime[0]
            console.log(date)
            let longTime = datetimeOg[1].split('.')
            console.log(longTime)
            let timeSplit = longTime[0].split(':')
            console.log(timeSplit)

            if(timeSplit[0] > 12){
                console.log(timeSplit[0])
                let time = `${(timeSplit[0] - 12)}:${timeSplit[1]}pm`
                console.log(time)

                this.postToDb(date, time)

            } else if(parseInt(timeSplit[0]) === 12) {
                console.log(timeSplit[0])
                let time = `${timeSplit[0]}:${timeSplit[1]}pm`
                console.log(time)

                this.postToDb(date, time)

            } else {
                console.log(timeSplit[0])
                let time = `${(timeSplit[0])}:${timeSplit[1]}am`
                console.log(time)

                this.postToDb(date, time)
            }
    }

    postToDb = (date, time) => {
        let obj = {
            dateCreated: date,
            timeCreated: time,
            CoffeeInformation: this.state.CoffeeInformation,
            RecipeInformation: this.state.RecipeInformation,
            BrewingInstructions: this.state.BrewingInstructions,
            userId: this.props.userId
        }

        let configObj = {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(obj)
        }
        fetch('http://localhost:8000/Recipes', configObj)
        .then(window.location.href = `/Recipes`)
    }

    render() {

        return (
            <div className='page-container'>
                <div className='main-heading'>
                    <h2 className="page-heading">Create Recipe</h2>
                </div>
                <div className='page-content'>
                    {this.state.showMe === false && 
                        <form onSubmit={this.handleSubmit}>
                            <h3>Coffee Information</h3>
                            <CoffeeInformationForm coffeeInformation={this.state.CoffeeInformation} handleChange={this.handleCoffeeInformation}/>
                            <h3>Recipe Information</h3>
                            <RecipeInformationForm recipeInformation={this.state.RecipeInformation} handleChange={this.handleRecipeInformation}/>
                            {(Object.keys(this.state.BrewingInstructions).length === 0)? <button type="button" onClick={this.createInstructions}>Add Brew Instructions</button> : 
                                <div>
                                    <h3>Brewing Instructions</h3>
                                    <p>Name: {this.state.BrewingInstructions.name}</p>
                                    {this.state.BrewingInstructions.action.map((action, key) => {
                                        console.log(Object.keys(action))
                                        let actionName = Object.keys(action).toString()
                                        let dataName = Object.keys(action[actionName])
                                        let data = Object.values(action[actionName])
                                        console.log(dataName, data)
                                        return (
                                            <div key={key}>
                                                <p key={key*20}>{actionName}: 
                                                {dataName.map((name, index) => {
                                                    console.log(name)
                                                    return data.map((value, i) => {
                                                        if(index === i) {
                                                            if(name === 'water') {
                                                                console.log(name, value)
                                                                return <span key={key * 1.12}> {value}g</span>
                                                            } else if(name === 'time') {
                                                                console.log(name, value)
                                                                return <span key={key * 1.12}> &mdash; {value} seconds</span>
                                                            } else {
                                                                console.log(name, value)
                                                                return <span key={key * 1.12}><br/>Notes: {value}</span>
                                                            }
                                                        } else {
                                                            return null
                                                        }
                                                    })
                                                })}
                                                </p>
                                            </div>
                                        )
                                    })}
                                </div>
                            }
                            <input type="submit"/>
                        </form>}
                    {this.state.showMe && <BrewingInstructions submit={this.BrewingInstructionsSubmit} water={this.state.RecipeInformation.waterAmount} updateWaterState={this.handleRecipeInformation}/>}
                </div>
            </div>
            
        )
    }
}

export default CreateNewRecipe