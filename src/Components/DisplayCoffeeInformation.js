import React from "react";

const DisplayCoffeeInformation = (props) => {

    return (
        <div className="coffeeInformation">
            <p>
                <strong>Varietal:</strong> {props.CoffeeInformation.varietal? props.CoffeeInformation.varietal : ''}
                <br/>
                <strong>Process:</strong> {props.CoffeeInformation.process? props.CoffeeInformation.process : ''}
                <br/>
                <strong>Roaster:</strong> {props.CoffeeInformation.roaster? props.CoffeeInformation.roaster : ''}
            </p>
            <p>
                <strong>Coffee Notes:</strong>
                <br/>
                {props.CoffeeInformation.notes}
            </p>
        </div>
    )
}

export default DisplayCoffeeInformation

