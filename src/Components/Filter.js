import React from "react";

const Filter = (props) => {

    return (
        <div>
            <form onSubmit={props.submit}>
                <input name="origin" placeholder="Origin" />
                <input name="producer" placeholder="Producer" />
                <input name="process" placeholder="Process" />
                <br/>
                <input name="roaster" placeholder="Roaster"/>
                <input name="dateCreated" placeholder="Date Brewed" />
                <input name="waterAmount" placeholder="Water Amount" />
                <br/>
                <input name="rating" placeholder="Rating" />
                <button type="button" onClick={props.reset}>Reset</button>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default Filter