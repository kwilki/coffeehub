import React,{ Component } from 'react';

class CalcButtons extends Component {

    render() {
        return(
            <div className='buttons'>
                <input type="submit" />
                <button className="reset-button" onClick={this.props.handleReset}>Reset</button>
            </div>
        )
    }
}

export default CalcButtons