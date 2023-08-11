import React, { Component } from 'react';

class Count extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            count: props.todos.length
        };
    }

    componentDidUpdate(prevProps) {
        // Compare the previous props with the current props
        if (prevProps.todos !== this.props.todos) {
            // Update the count state with the length of the todos prop
            this.setState((state) => ({
            count: this.props.todos.length
            }));
        }
    }

    render() {
        return (
            <h2>
                {this.state.count}
            </h2>
        );
    }
}

export default Count;