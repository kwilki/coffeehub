import React, {Component} from 'react';

class CoffeeInput extends Component {

    constructor() {
        super()
        this.state = {
            coffee: ''
        }
    }

    render() {
        return(
            <input name="coffee" type="text" placeholder="Coffee (g)" value={this.state.coffee} onChange={this.handleChange}></input>
        )
    }
}

export default CoffeeInput