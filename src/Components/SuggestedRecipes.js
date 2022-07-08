import React, { Component } from "react";
import Accordion from "./Accordion";

class SuggestedRecipesPage extends Component {

    constructor() {
        super()
        this.state = {
            Recipes: []
        }
    }


    componentDidMount() {
        fetch('http://localhost:8000/SuggestedRecipes')
            .then(res => res.json())
            .then(json => {
                console.log(json)
                this.setState({
                    Recipes: json})
            })
    }

    render () {
        return (
                <div className="page-content"> 
                    <h2 className="page-heading">Suggested Recipes</h2>
                    <div className='recipe-accordions'>
                        {this.state && this.state.Recipes.map((sugRecipe, i) => {
                            return (
                                <div key={i} className="accordion-container">
                                    <Accordion  brewing={sugRecipe} />
                                </div>
                            )
                        })}
                    </div>
                    
                </div>
        )
    }
}

export default SuggestedRecipesPage