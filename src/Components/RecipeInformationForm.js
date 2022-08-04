import React, { Component } from 'react';

class RecipeInformationForm extends Component {

    render() {
        return(
            <div className='form-container'>
                <input className="form-input" name="brewMethod" type="text" placeholder="Brew Method" value={this.props.recipeInformation.brewMethod} onChange={this.props.handleChange} />
                <br />
                <input className="form-input" name="grinder" type="text" placeholder="Grinder" value={this.props.recipeInformation.grinder} onChange={this.props.handleChange} />
                <br />
                <input className="form-input" name="grindSetting" type="text" placeholder="Grind Setting" value={this.props.recipeInformation.grindSetting} onChange={this.props.handleChange} />
                <br />
                <input className="form-input" name="ratio" type="text" placeholder="Ratio" value={this.props.recipeInformation.ratio} onChange={this.props.handleChange} />
                <br />
                <input className="form-input" name="coffeeAmount" type="text" placeholder="Coffee (g)" value={this.props.recipeInformation.coffeeAmount} onChange={this.props.handleChange} />
                <br />
                <input className="form-input" name="waterAmount" type="text" placeholder="Water (ml)" value={this.props.recipeInformation.waterAmount} onChange={this.props.handleChange} required/>
                <br />
                <input className="form-input" name="temperature" type="text" placeholder="Temperature (&#8451;)" value={this.props.recipeInformation.temperature} onChange={this.props.handleChange} />
                <br />
                <div className='text-area-container'>
                    <textarea name="notes" placeholder="Notes" value={this.props.recipeInformation.notes} onChange={this.props.handleChange} />
                </div>
            </div>
        )
    }
}

export default RecipeInformationForm