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
                    <p id="searchInstructions">Enter instrument name in 'Intrument' field, and number of that instrument in 'Number' field</p> <br></br>
                    <input type="text" id="searchField" name="instrumentField" placeholder="Instrument"></input>
                    <input type="text" id="searchField" name="instrumentNumber" placeholder="Number"></input><br></br>
                    <input type="submit" value="Submit" id="button"></input>
                </form>
            </div>
        )            
    }
}

export default SearchDisplay;