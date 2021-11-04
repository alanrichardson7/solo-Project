import React, { Component } from 'react';
import SearchDisplay from './SearchDisplay.jsx'
import QueryResultsDisplay from './QueryResultsDisplay.jsx';

class MainDisplay extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        console.log('MainDisplay did mount')
    }

    render() {
        return(
            <div id="mainDisplay">
                <h1>SEARCHABLE COMPOSITION DATABASE</h1>
                <SearchDisplay />
                <QueryResultsDisplay />
            </div>
        )
    }
    
}

export default MainDisplay;