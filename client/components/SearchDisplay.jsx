import React, { Component } from 'react';

class SearchDisplay extends Component {
    constructor(props){
        super(props)
    };

    // refCreator(){
    //     const ref = React.createRef;
    //     return ref;
    // };

    render(){
        return(
            <div id="searchDisplay">
                <form action='/search'>
                    <p id="searchInstructions">{`Enter search in the format of {firstInstrumentName: number}, {secondInstrumentName: number}, etc.`}</p> <br></br>
                    <input type="text" id="searchField" name="instrumentField"></input><br></br>
                    <input type="text" id="searchField" name="instrumentNumber"></input><br></br>
                    <input type="submit" value="Submit" id="button"></input>
                </form>
            </div>
        )            
    }
}

export default SearchDisplay;