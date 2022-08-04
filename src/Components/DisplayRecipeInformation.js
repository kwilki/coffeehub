import React from "react";

const DisplayRecipeInformation = (props) => {

    return (
        <div className="recipeInformation">
            <strong>Method:</strong> {props.RecipeInformation.brewMethod}
            <table>
                <tbody>
                    <tr>
                        <td>
                            <strong>Grinder:</strong>
                            <br/>
                            {props.RecipeInformation.grinder}
                        </td>
                        <td>
                            <strong>Grind Setting:</strong>
                            <br/>
                            {props.RecipeInformation.grindSetting}
                        </td>
                        <td>
                            <strong>Water Temp:</strong>
                            <br/>
                            {props.RecipeInformation.temperature}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Ratio:</strong>
                            <br/>
                            {props.RecipeInformation.ratio}
                        </td>
                        <td>
                            <strong>Coffee:</strong>
                            <br/>
                            {props.RecipeInformation.coffeeAmount}g
                        </td>
                        <td>
                            <strong>Water:</strong>
                            <br/>
                            {props.RecipeInformation.waterAmount}ml
                        </td>
                    </tr>
                </tbody>
            </table>
            <div>
                <strong>Recipe Notes: </strong>
                <br/>
                {props.RecipeInformation.notes}
            </div>
        </div>
    )
}

export default DisplayRecipeInformation