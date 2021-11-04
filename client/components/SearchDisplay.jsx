import React, { Component } from 'react';

class SearchDisplay extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputFields: [],
            instrumentFieldNum: 2
        };
        this.createInputField = this.createInputField.bind(this);
    };

    createInputField(){
        const newInputField = [];
        const instrumentFieldName = `instrumentField${this.state.instrumentFieldNum}`;
        const instrumentNumberName = `instrumentNumber${this.state.instrumentFieldNum}`;
        newInputField.push(
            <input type="text" id="searchField" name={instrumentFieldName} placeholder="Instrument"></input>,
            <input type="text" id="searchField" name={instrumentNumberName} placeholder="Number"></input>,
            <br></br>
        );
        this.setState((state, props) => {
            state.instrumentFieldNum = state.instrumentFieldNum + 1;
            return state.inputFields = state.inputFields.concat(newInputField);
        });
    }

    render(){

        return(
            <div id="searchDisplay">
                <form action='/search'>
                    <p id="searchInstructions">Enter instrument name in 'Instrument' field, 
                    and number of that instrument in 'Number' field <br/>
                    If you wish to search by a combination of instruments, click the 'Add a Field' button</p> <br/>
                    <p id="searchInstructions"></p> <br/>
                    <input type="text" id="searchField" name="instrumentField1" placeholder="Instrument"></input>
                    <input type="text" id="searchField" name="instrumentNumber1" placeholder="Number"></input><br/>
                    {this.state.inputFields}
                    <input type="submit" value="Submit" id="button"></input>
                    <input onClick={this.createInputField} type="button" value="Add a Field" id="button2"></input>
                </form>
            </div>
        )            
    }
}

export default SearchDisplay;