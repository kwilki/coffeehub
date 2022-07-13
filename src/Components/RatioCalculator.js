import React, {Component} from 'react';
import '../css/RatioCalculator.css'
import RatioField from './RatioField';
import CalcButtons from './CalcButtons';

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
            this.setState({[event.target.name]: event.target.value}, () => console.log(this.state))
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if(this.state.value && this.state.coffee) {
            this.setState({water: this.state.value * this.state.coffee}, () => console.log(this.state))
        } else if(this.state.value && this.state.water) {
            this.setState({coffee: (this.state.water / this.state.value).toFixed(2)}, () => console.log(this.state))
        } else if (this.state.water && this.state.coffee) {
            this.setState({value: (this.state.water / this.state.coffee).toFixed(2)}, () => console.log(this.state))
        }
    }

    handleReset = () => {
        this.setState({
            value: '',
            coffee: '',
            water: ''
        }, () => console.log(this.state))
    }

    render() {
        return(
            <div className="page-content">
                <h2 className="page-heading">Ratio Calculator</h2>
                <form className='ratio-form' onSubmit={this.handleSubmit}>
                    <RatioField name="value" headingLabel="Ratio" value={this.state.value} handleChange={this.handleChange} inputMode="decimal" placeholder=" 0" ratioConst="1 : " label="" />
                    <RatioField name="coffee" headingLabel="Coffee" inputMode="decimal" placeholder=" 0.00" value={this.state.coffee} handleChange={this.handleChange} label=" g" />
                    <RatioField name="water" headingLabel="Water" inputMode="decimal" placeholder=" 0.00" value={this.state.water} handleChange={this.handleChange} label=" g" />
                    <CalcButtons className="reset-button" handleReset={this.handleReset} />
                </form>
            </div>
        )
    }
}

export default RatioCalculator