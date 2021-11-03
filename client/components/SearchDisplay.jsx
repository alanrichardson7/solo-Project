import React, { Component } from 'react';

class SearchDisplay extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <form>
                    <p>{`Enter search in the format of {firstInstrumentName: number}, {secondInstrumentName: number}, etc.`}</p> <br></br>
                    <input type="text" id="searchField"></input><br></br>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        )            
    }
}

export default SearchDisplay;