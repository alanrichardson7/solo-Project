import React, { Component } from 'react';

class SearchDisplay extends Component {
    constructor(props){
        super(props)
        this.state = {
            numOfFields = 1
        };
    };

    // what if i created a button next to the submit button called 'add another instrument'
    // when clicked, it would 

    renderField2(){
        this.setState({show2: true})
    }

    renderField3(){
        this.setState({show3: true})
    }

    renderField4(){
        this.setState({show4: true})
    }

    renderField5(){
        this.setState({show5: true})
    }

    // initialize an empty array
    // create another button in the form that on click, calls the function below
        // create a function that while array.length is less than 10 creates a new input field

    render(){
        return(
            <div id="searchDisplay">
                <form action='/search'>
                    <p id="searchInstructions">Enter instrument name in 'Intrument' field, and number of that instrument in 'Number' field</p> <br></br>
                    <input type="text" id="searchField" name="instrumentField1" placeholder="Instrument 1"></input>
                    <input type="text" id="searchField" name="instrumentNumber1" placeholder="Number"></input><br></br>
                    <input type="text" id="searchField" name="instrumentField2" placeholder="Instrument 2"></input>
                    <input type="text" id="searchField" name="instrumentNumber2" placeholder="Number"></input><br></br>
                    <input type="text" id="searchField" name="instrumentField3" placeholder="Instrument 3"></input>
                    <input type="text" id="searchField" name="instrumentNumber3" placeholder="Number"></input><br></br>
                    <input type="text" id="searchField" name="instrumentField4" placeholder="Instrument 4"></input>
                    <input type="text" id="searchField" name="instrumentNumber4" placeholder="Number"></input><br></br>
                    <input type="text" id="searchField" name="instrumentField5" placeholder="Instrument 5"></input>
                    <input type="text" id="searchField" name="instrumentNumber5" placeholder="Number"></input><br></br>
                    <input type="submit" value="Submit" id="button"></input>
                </form>
            </div>
        )            
    }
}

export default SearchDisplay;