import React from "react";

const DisplayRating = (props) => {

    return (
        <div className="rating">
            {props.CoffeeInformation.rating === '' && <div> &#9734; &#9734; &#9734; &#9734; &#9734; </div>}
            {props.CoffeeInformation.rating === '1' && <div> <span className="gold">&#9733;</span> &#9734; &#9734; &#9734; &#9734; </div>}
            {props.CoffeeInformation.rating === '2' && <div> <span className="gold">&#9733; &#9733;</span> &#9734; &#9734; &#9734; </div>}
            {props.CoffeeInformation.rating === '3' && <div> <span className="gold">&#9733; &#9733; &#9733;</span> &#9734; &#9734; </div>}
            {props.CoffeeInformation.rating === '4' && <div> <span className="gold">&#9733; &#9733; &#9733; &#9733;</span> &#9734; </div>}
            {props.CoffeeInformation.rating === '5' && <div> <span className="gold">&#9733; &#9733; &#9733; &#9733; &#9733;</span> </div>}
        </div>
    )
}

export default DisplayRating