import React, { Component } from 'react';
// import { connect } from 'react-redux';
import MainDisplay from '../components/MainDisplay.jsx';

class MainContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <MainDisplay/>
            </div>
        )
    }
};

export default MainContainer;