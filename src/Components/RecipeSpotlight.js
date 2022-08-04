import React from "react";
import { useState } from "react";
import '../css/recipeSpotlight.css'
import DisplayRating from "./displayRating";
import DisplayCoffeeInformation from "./DisplayCoffeeInformation";
import DisplayRecipeInformation from "./DisplayRecipeInformation";
import DisplayBrewInstructions from "./DisplayBrewInstructionSpot";
import EditRecipe from "./EditRecipe";

const RecipeSpotlight = (props) => {

    const [ showEdit, setShowEdit ] = useState(false)
    // const [ reRender, setReRender ] = useState(0)

    // const [ waterTotal, setWaterTotal ] = useState(0)

    console.log(props.brew)
    let date = props.brew.dateCreated
    let time = props.brew.timeCreated
    let CoffeeInformation = props.brew.CoffeeInformation
    let RecipeInformation = props.brew.RecipeInformation
    let BrewingInstructions = props.brew.BrewingInstructions

    let deleteRecipe = () => {
        let configObj = {
            method:"DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }

        fetch(`http://localhost:8000/Recipes/${props.brew.id}`, configObj)
            .then(props.returnToRecipes())
    }

    let editRecipe = () => {
        setShowEdit(!showEdit)
    }

    let submit = () => {
        console.log('submit')
        setShowEdit(!showEdit)
        // setReRender(reRender + 1)
    }

    return (
        <div className="page-container">
            
            {!showEdit && 
                <div className="page-content">
                    <div>
                    <div className="buttons">
                        <button onClick={editRecipe}>edit</button>
                        <button onClick={props.returnToRecipes}>back</button>
                    </div>
                        <div className="brew-container">
                            <div className="ratingDateTime">
                                <DisplayRating CoffeeInformation={CoffeeInformation}/>
                                <div className="dateTimeSpot">
                                    {date} {time}
                                </div>
                            </div>

                            <h3>Producer: {CoffeeInformation.producer}</h3>
                            <h4>Origin: {CoffeeInformation.origin}</h4>
                            <DisplayCoffeeInformation CoffeeInformation={CoffeeInformation} />
                            <DisplayRecipeInformation RecipeInformation={RecipeInformation}/>
                            <DisplayBrewInstructions BrewingInstructions={BrewingInstructions}/>
                        </div>
                        <div className="buttons">
                            <button onClick={deleteRecipe}>Delete</button>
                        </div>
                    </div>
                </div>
            }
            {showEdit && <EditRecipe editRecipe={editRecipe} coffeeInformation={CoffeeInformation} recipeInformation={RecipeInformation} BrewingInstructions={BrewingInstructions} submit={submit} recipeId={props.brew.id} userId={props.brew.userId}/> }
        </div>
    )
}

export default RecipeSpotlight