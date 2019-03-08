import React, { Component } from 'react';
import Create from './Create';
import List from './List';

class Greetings extends Component {
    constructor() {
        super()
        this.state = {
            greetings: []
        }
    }

    componentDidMount() {
        const greetings = JSON.parse(localStorage.getItem('greetings'))
        this.setState({ greetings: greetings || [] })
    }

    addGreeting(greeting) {
        this.setGreetings([...this.state.greetings, greeting])
    }

    removeGreeting(i) {
        const greetings = [...this.state.greetings]
        greetings.splice(i, 1)

        this.setGreetings(greetings)
    }

    setGreetings(greetings) {
        this.setState({ greetings })
        localStorage.setItem('greetings', JSON.stringify(greetings))
    }

    render() {
        return (
            <div>
                <Create save={(data) => this.addGreeting(data)}/>
                <List data={this.state.greetings} remove={(i) => this.removeGreeting(i)}/>
            </div>
        )
    }
}

export default Greetings