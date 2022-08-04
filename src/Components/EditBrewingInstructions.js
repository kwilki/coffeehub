import React from "react";

const EditBrewingInstructions = (props) => {


    let handleChange = (event) => {
        // console.log(index)
        // props.handleChange(event, index, actionName)
    }

    return (
        <div>
            <div className='form-container'>
                <label>Name:</label>
                <input className="form-input" name="Name" type="text" placeholder="Origin" value={props.BrewingInstructions.name} onChange={props.handleChange} />
                <br />
                {props.BrewingInstructions.action && props.BrewingInstructions.action.map((action, index) => {
                    let actionName = Object.keys(action).toString()
                    if(actionName === 'Bloom') {
                        return (
                            <div>
                                <span>Bloom:</span>
                                <label>Water:</label>
                                <input className="form-input" name="water" type="text" placeholder="Water" value={props.BrewingInstructions.action[index][actionName].water} onChange={props.handleChange} />
                                <label>Time:</label>
                                <input className="form-input" name="time" type="text" placeholder="time" value={props.BrewingInstructions.action[index][actionName].time} onChange={handleChange} />
                            </div>
                        )
                    } else if(actionName === 'Pour') {
                        return (
                            <div>
                                <span>Pour:</span>
                                <label>Water:</label>
                                <input className="form-input" name="water" type="text" placeholder="Water" value={props.BrewingInstructions.action[index][actionName].water} onChange={handleChange} />
                            </div>
                        )
                    } else {
                        return (
                            <div>
                                <span>Agitate:</span>
                                <label>Notes:</label>
                                <input className="form-input" name="notes" type="text" placeholder="Water" value={props.BrewingInstructions.action[index][actionName].notes} onChange={handleChange} />
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default EditBrewingInstructions