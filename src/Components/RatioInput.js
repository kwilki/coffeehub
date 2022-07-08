import React, {Component} from 'react';

class RatioInput extends Component {

    // constructor() {
    //     super()
    //     this.state = {
    //         placeholder: 'Ratio 1 : ',
    //         value: ''
    //     }
    // }

    render() {
        return(
            <input name="value" type="number" placeholder={"Ratio 1 : x"} value={this.props.value} onChange={this.props.handleChange}></input>
        )
    }
}

export default RatioInput