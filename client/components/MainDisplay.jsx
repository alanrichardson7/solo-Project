import React, { Component } from 'react';
import SearchDisplay from './SearchDisplay.jsx'

class MainDisplay extends Component {
    constructor(props) {
        super(props);
    }
    //need to create a search field component that this component renders
    render() {
        return(
            <div>
                <h1>SEARCHABLE COMPOSITION DATABASE</h1>
                <SearchDisplay />
            </div>
        )
    }
    
}

export default MainDisplay;