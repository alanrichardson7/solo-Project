import React from 'react';
import { render } from 'react-dom';
import { BrowerRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
import App from './App.jsx';
import styles from './scss/application.scss'; 

render(
    // will need to turn divs into a Provider component and pass store from store file into Provider component once it exists
    <BrowserRouter>
        <App styles={styles}/>
    </BrowserRouter>,
    document.getElementById("root")
    );