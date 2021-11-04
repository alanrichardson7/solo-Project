import React, { Component } from 'react';

class QueryResultsDisplay extends Component {
    constructor(props){
        super(props);
    };

    render(){
        const results = [];
        /* need to somehow access the search results from query, iterate through them, and push a new component into results array for each
        object. will likely need to send results to this component as well as a child component that consists of a card showing search results */ 

        return(
            <div>
                <h4>Search Results</h4>
                {results}
            </div>
        );
    };
};

export default QueryResultsDisplay;