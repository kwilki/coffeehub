import React from "react";

const ActionInput = (props) => {

    if(props.action) {
        let actionName = Object.keys(props.action).toString()
        // console.log(actionName)
        // console.log(props.action)
        let index = props.index

        let handleChange = (event) => {
            props.handleChange(event, index, actionName)
        }

        if(actionName === 'Bloom') {
            return (
                <div key={actionName + props.index.toString()}>
                    <img src={require('../Images/iconbloom.png')} alt="Bloom Icon"/>
                    <label>{" Bloom: "}</label> 
                    <input type="text" name="water" placeholder="water (ml)" value={props.action.water} onChange={handleChange} />
                    <input type="text" name="time" placeholder="time (sec)" value={props.action.time} onChange={handleChange} />
                    <button onClick={props.remove} name={props.index} type="button" tabIndex="-1" >x</button>
                </div>
            )
        } else if(actionName === 'Pour') {
            return (
                <div key={actionName + props.index.toString()}>
                    <img src={require('../Images/waterdrop.png')} alt="Pour Icon"/>
                    <label>{" Pour: "}</label> 
                    <input type="text" name="water" placeholder="water (ml)" onChange={handleChange}/>
                    <button type="button" onClick={props.remove} name={props.index} tabIndex="-1" >x</button>
                </div>
            )
        } else if(actionName === 'Agitate') {
            return (
                <div key={actionName + props.index.toString()}>
                    <img src={require('../Images/agitationicon.png')} alt="Agitation Icon"/>
                    <label>{" Agitate: "}</label> 
                    <div className="text-area-container">
                        <textarea type="text" name="notes" placeholder="Describe agitation method" onChange={handleChange} />
                    </div>
                    <button type="button" onClick={props.remove} name={props.index} tabIndex="-1" >x</button>
                </div>
            )
        } else return undefined
    }
    else {
        return undefined
    }
}

export default ActionInput