import React from "react";

const DisplayBrewInstructions = (props) => {

    return (
        <div className="brewingInstructionsContainer">
            {Object.keys(props.BrewingInstructions).length !== 0 && <h4>Brewing Instructions</h4>}
            {props.BrewingInstructions.action && props.BrewingInstructions.action.map((instruction, index) => {
                let instructionTitle = Object.keys(instruction).toString()
                if( instructionTitle === 'Bloom') {
                    // setWaterTotal(waterTotal + parseInt(instruction[instructionTitle].water))
                    return (
                        <div key={index} className="brewingInstructions">
                            <strong>{instructionTitle}:</strong> 
                            <span className="right">
                                <span>Water: {instruction[instructionTitle].water}</span>
                                <span className="sb">Time: {instruction[instructionTitle].time}</span>
                            </span>
                        </div>
                    )
                } else if(instructionTitle === 'Pour') {
                    // setWaterTotal(waterTotal + parseInt(instruction[instructionTitle].water))
                    return (
                        <div key={index} className="brewingInstructions">
                            <strong>{instructionTitle}:</strong> <span className="right">Water: {instruction[instructionTitle].water}</span>
                        </div>
                    )
                } else {
                    return ( 
                        <div key={index} className="brewingInstructions">
                            <strong>{instructionTitle}:</strong> 
                            <br />
                            <div className="instructionNotes">
                                Notes:
                                <br />
                                {instruction[instructionTitle].notes}
                            </div>
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default DisplayBrewInstructions