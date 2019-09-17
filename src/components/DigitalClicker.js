// Code DigitalClicker Component Here
import React from 'react'; 

export default class DigitalClicker extends React.Component {
    constructor(){
        super(); 
        this.state = {
            timesClicked: 0
        }; 
    }

    handleClick = () => {
        let x = this.state.timesClicked + 1; 
        this.setState({
            timesClicked: x
        });
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                <label>
                    {this.state.timesClicked}
                </label>
            </button>
        ); 
    }
}
