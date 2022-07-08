import React, {Component} from 'react';
import '../css/RatioCalculator.css'

class RatioCalculator extends Component {

    constructor() {
        super()
        this.state = {
            placeholder: '',
            value: '',
            coffee: '',
            water: ''
        }
    }

    handleChange = (event) => {
        if(event.target.name === "value") {
            this.setState({value: event.target.value}, () => console.log(this.state))
        } else {
            this.setState({[event.target.name]: event.target.value}, () => console.log(this.state))
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if(this.state.value && this.state.coffee) {
            this.setState({water: this.state.value * this.state.coffee})
        } else if(this.state.value && this.state.water) {
            this.setState({coffee: this.state.water / this.state.value})
        } else if (this.state.water && this.state.coffee) {
            this.setState({value: this.state.water / this.state.coffee})
        }
    }

    handleReset = () => {
        this.setState({
            value: '',
            coffee: '',
            water: ''
        })
    }

    render() {
        return(
            <div className="page-content">
                <h2 className="page-heading">Ratio Calculator</h2>
                <form className='ratio-form' onSubmit={this.handleSubmit}>
                    <div className='ratio-form-item'>
                        <label className='ratio-heading'>Ratio</label>
                        {/* <div className="spacer"></div> */}

                        <div className="input-container">
                            <label>1 : </label><input name="value" inputMode="decimal" type="text" className="calculator-input" placeholder=" 0" value={this.state.value} onChange={this.handleChange} />
                        </div>
                        
                        
                    </div>
                    <div className='ratio-form-item'>
                        <label className='ratio-heading'>Coffee </label>
                        {/* <div className="spacer"></div> */}
                        <div className="input-container">
                            <input name="coffee" inputMode="decimal" type="text" className="calculator-input" placeholder=" 0.00" value={this.state.coffee} onChange={this.handleChange} />
                            <label> g</label>
                        </div>
                        
                    </div>
                    <div className='ratio-form-item'>
                        <label className='ratio-heading'>Water </label>
                        {/* <div className="spacer"></div> */}
                        <div className="input-container">
                            <input name="water" inputMode="decimal" type="text" className="calculator-input" placeholder=" 0.00" value={this.state.water} onChange={this.handleChange} />
                            <label> g</label>
                        </div>
                        
                    </div>
                    <div className='buttons'>
                        <input type="submit" />
                        <button className="reset-button" onClick={this.handleReset}>Reset</button>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default RatioCalculator