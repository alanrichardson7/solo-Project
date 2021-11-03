import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';

render(
    // will need to turn divs into a Provider component and pass store from store file into Provider component once it exists
    <div>
        <App/>
        {/* <div>This is rendering from the index.js</div> */}
    </div>,
    document.getElementById("root")
    );