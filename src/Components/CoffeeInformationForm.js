import React, { Component } from 'react';

class CoffeeInformationForm extends Component {

    render() {
        return(
            <div className='form-container'>
                <input className="form-input" name="origin" form="CoffeeInformation" type="text" placeholder="Origin" value={this.props.coffeeInformation.origin} onChange={this.props.handleChange} />
                <br />
                <input className="form-input" name="varietal" form="CoffeeInformation" type="text" placeholder="Varietal" value={this.props.coffeeInformation.varietal} onChange={this.props.handleChange} />
                <br />
                <input className="form-input" name="producer" form="CoffeeInformation" type="text" placeholder="Producer" value={this.props.coffeeInformation.producer} onChange={this.props.handleChange} />
                <br />
                <input className="form-input" name="process" form="CoffeeInformation" type="text" placeholder="Process" value={this.props.coffeeInformation.process} onChange={this.props.handleChange} />
                <br />
                <input className="form-input" name="roaster" form="CoffeeInformation" type="text" placeholder="Roaster" value={this.props.coffeeInformation.roaster} onChange={this.props.handleChange} />
                <br />
                <input className="form-input" name="rating" form="CoffeeInformation" type="text" placeholder="rating/5" value={this.props.coffeeInformation.rating} onChange={this.props.handleChange} />
                <div className='text-area-container'>
                    <textarea name="notes" placeholder="Notes" value={this.props.coffeeInformation.notes} onChange={this.props.handleChange} />
                </div>
            </div>
        )
    }
}

export default CoffeeInformationForm