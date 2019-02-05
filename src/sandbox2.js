import React from 'react';
import { render } from 'react-dom';

const rootElement2 = document.getElementById("root2");

class App extends React.Component {
    state = {
        counter: 10
    };
    increase = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    };
    clear = () => {
        this.setState({
            counter: 0
        });
    };
    render() {
        return <div>
            <input type="text" value={this.state.counter}></input>
            <button onClick={this.increase}>increase me</button>
            <button onClick={this.clear}>clear</button>
        </div>;
    }
}

render(<App />, rootElement2);
