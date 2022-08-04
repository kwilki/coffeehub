import React from 'react';

const RecipeSummary = (props) => {

    let passRecipeInfo = (event) => {
        props.recipeSpotlight(event, props.brew)
    }

    return (
        <div className='brewCard' onClick={passRecipeInfo}>
            <div className='dateTime'>
                <span className='recipe-summary'>{props.brew.dateCreated}</span> 
                <span className='recipe-summary'>{props.brew.timeCreated}</span>
            </div>
            <div className='coffee-information'>
                <strong>PRODUCER: </strong> {props.brew.CoffeeInformation.producer}
                <br />
                <strong>ORIGIN: </strong>{props.brew.CoffeeInformation.origin}
            </div>
            <div className='recipe-information'>
                <span className='recipe-summary'>Water: {props.brew.RecipeInformation.waterAmount}ml</span>
                <span className='recipe-summary'>Ratio: {props.brew.RecipeInformation.ratio}</span>
            </div>
        </div>
    )
}

export default RecipeSummary