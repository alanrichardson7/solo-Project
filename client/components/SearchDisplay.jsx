import React, { Component } from 'react';

class SearchDisplay extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputFields: []
        };
        this.createInputField = this.createInputField.bind(this);
    };

    createInputField(){
        const newInputField = [];
        newInputField.push(
            <input type="text" id="searchField" name="instrumentField" placeholder="Instrument"></input>,
            <input type="text" id="searchField" name="instrumentNumber" placeholder="Number"></input>,
            <br></br>
        );
        console.log(newInputField);
        this.setState((state, props) => {
            return state.inputFields = state.inputFields.concat(newInputField)
        });
    }

    render(){

        return(
            <div id="searchDisplay">
                <form action='/search'>
                    <p id="searchInstructions">Enter instrument name in 'Intrument' field, and number of that instrument in 'Number' field</p> <br></br>
                    <input type="text" id="searchField" name="instrumentField1" placeholder="Instrument"></input>
                    <input type="text" id="searchField" name="instrumentNumber1" placeholder="Number"></input><br></br>
                    {this.state.inputFields}
                    <input type="submit" value="Submit" id="button"></input>
                    <input onClick={this.createInputField} type="button" value="Add a Field" id="button2"></input>
                </form>
            </div>
        )            
    }
}

export default SearchDisplay;