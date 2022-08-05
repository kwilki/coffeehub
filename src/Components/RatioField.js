import React, { Component } from "react";

class RatioField extends Component {


    render() {
        return(
            <div className='ratio-form-item'>
                <label className='ratio-heading'>{this.props.headingLabel}</label>
                <div className="input-container">
                    <label className="calc-label">{this.props.ratioConst}</label>
                    <input className="calculator-input" name={this.props.name} inputMode={this.props.inputMode} type={this.props.type} placeholder={this.props.placeholder} value={this.props.value} onChange={this.props.handleChange} maxLength="5" />
                    <label className="calc-label"> {this.props.label}</label>
                </div>
            </div>
        )
    }
}

export default RatioField