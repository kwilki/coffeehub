import React, {Component} from 'react';

class WaterInput extends Component {

    constructor() {
        super()
        this.state = {
            water: ''
        }
    }

    render() {
        return(
            <input name="water" type="text" placeholder="Water (ml)" value={this.state.water} onChange={this.handleChange}></input>
        )
    }
}

export default WaterInput