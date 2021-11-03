import React, { Component } from 'react';

class SearchDisplay extends Component {
    constructor(props){
        super(props)
    }

    refCreator(){
        const ref = React.createRef;
        return ref;
    };

    render(){
        return(
            <div>
                <form>
                    <p>{`Enter search in the format of {firstInstrumentName: number}, {secondInstrumentName: number}, etc.`}</p> <br></br>
                    <input ref={this.refCreator()} type="text" id="searchField" name="search"></input><br></br>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        )            
    }
}

export default SearchDisplay;