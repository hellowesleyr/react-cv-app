import React, { Component } from 'react';
// import MyComponent from './MyComponent';
import MyComponent from '../MyFunctionalComponent';
import { render } from 'react-dom';


class App extends Component {
    constructor(props) {
        super(props)

        this.onClickBtn = this.onClickBtn.bind(this);
        this.countUp = this.countUp.bind(this);
        this.state = {
            count: 0,
        }
    }
    
    countUp() {
        this.setState({
            count: this.state.count+1,
        })
    }

    onClickBtn() {
        console.log('Button has been clicked');
    }

    render() {
        return (
        <div>
            <MyComponent onButtonClicked={this.countUp} title="React"/>
            <p>{this.state.count}</p>
        </div>

        )
    }
}

export default App;