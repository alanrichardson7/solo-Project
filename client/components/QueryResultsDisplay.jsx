import React, { Component } from 'react';
import ResultCard from './ResultCard.jsx'

class QueryResultsDisplay extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchQuery: {}
        }
    };

    componentDidMount(){
        console.log('QueryResultsDisplay did mount');
        fetch('http://localhost:3000/search')
        .then(res => res.json())
        .then(data => {
            console.log('Mad it into fetch request in QueryResultsDisplay');
            console.log(`data ====> ${data}`)
            return this.setState({
                searchQuery: data
            });
        });
    };

    render(){
        const results = [];
        /* need to somehow access the search results from query, iterate through them, and push a new component into results array for each
        object. will likely need to send results to this component as well as a child component that consists of a card showing search results */
        
        return(
            <div>
                {/* <h4>Search Results</h4> */}
                {results}
            </div>
        );
    };
};

export default QueryResultsDisplay;