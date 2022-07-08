import React, { useState } from 'react';

const Accordion = ({ brewing }) => {
    const [isActive, setIsActive] = useState(false);

    let methodName = Object.keys(brewing).toString()
    let recipeInformation = brewing[methodName].RecipeInformation
    let brewInstructions = brewing[methodName].BrewInstructions
    let brewMethodKeys = Object.keys(brewInstructions)

    return (
        <div className="accordion">
            <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                <div>{methodName}</div>
                <div className="symbol">{isActive ? '-' : '+'}</div>
            </div>
            {isActive && <div className="accordion-content">
                <div className="recipe-card">
                    <div className="recipeInfo">
                        <span>Ratio: </span> <span className="value">{recipeInformation.Ratio}</span>
                    </div>
                    <div className="recipeInfo">
                        <span>Grind Setting: </span> <span className="value">{recipeInformation.GrindSetting}</span>
                    </div>
                    <div className="recipeInfo">
                        <span>Coffee: </span> <span className="value">{recipeInformation.Coffee}</span>
                    </div>
                    <div className="recipeInfo">
                        <span>Water: </span> <span className="value">{recipeInformation.Water}</span>
                    </div>
                    <div className="recipeInfo">
                        <span>Temperature: </span> <span className="value">{recipeInformation.Temperature}</span>
                    </div>
                    <div className="recipe-method">
                        {brewMethodKeys.map((keyName, i) => {
                        
                            if (keyName === 'Agitate') {
                                return (
                                    <div key={i + 10} className="brew-instructions">
                                        <img src={require("../Images/agitationicon.png")} alt="Agitation Icon"/><span>{keyName}:</span>
                                        <br />
                                        <span>Note: </span> 
                                        <span>{brewInstructions[keyName]['Note']}</span>
                                    </div>
                                )
                            } else if (keyName === 'Bloom') {
                                return (
                                    <div key={i + 10} className="brew-instructions">
                                        <img src={require("../Images/iconbloom.png")} alt="Bloom Icon"/><span>{keyName}:</span><span>Water:</span><span>{brewInstructions[keyName]['Water']}</span><span>Time:</span><span>
                                            {brewInstructions[keyName]['Time']}</span>
                                    </div>
                                )
                            } else if (keyName.slice(0, -1) === 'Pour') {
                                return (
                                    <div key={i + 10} className="brew-instructions">
                                        <img src={require("../Images/waterdrop.png")} alt="Water Icon"/><span>{keyName.slice(0, -1)}:</span><span>{brewInstructions[keyName]}</span>
                                    </div>
                                )
                            } else {
                                return (
                                    <div key={i + 10} className="brew-instructions">
                                        <span>{keyName}:</span><span>{brewInstructions[keyName]}</span>
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>
            </div>}
        </div>
    );
};

export default Accordion;