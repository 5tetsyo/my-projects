import React from "react";

class ClassComponent extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            count: 0
            //тут state є в props і ми просто передаємо в нього змінну count 
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this)
    }
    increment() {
        //setState змінює значення count, бо напряму воно не міняється
        this.setState({
            count: this.state.count + 1
        })
    }
    decrement() {
        //setState змінює значення count, бо напряму воно не міняється
        this.setState({
            count: this.state.count - 1
        })
    }
    render() {
        return (
            <div>
                <p>{this.state.count}</p>
                <button onClick = {this.increment}>+</button>
                <button onClick = {this.decrement}>-</button>
            </div>
        )
    }
}
export default ClassComponent;