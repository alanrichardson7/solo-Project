import React, { Component } from 'react';
import MainContainer from './containers/MainContainer.jsx'

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
       return(
           <div id="mainContainer">
               <MainContainer/>
           </div>
       ) 
    }
}

export default App;