import React from "react";

const SelectAction = (props) => {

    return(
        <select name="action" onChange={props.handlechange} value="SelectAction">
            <option value="SelectAction">Select Action</option>
            <option value="Bloom">Bloom</option>
            <option value="Pour">Pour</option>
            <option value="Agitate">Agitiate</option>
        </select>
    )
}

export default SelectAction