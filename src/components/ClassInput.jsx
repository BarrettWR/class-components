/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import Count from './Count';

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: ['Just some demo tasks', 'As an example'],
      inputVal: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      todos: state.todos.concat(state.inputVal),
      inputVal: '',
    }));
  }

  handleDelete(todo) {
    this.setState((state) => ({
      todos: state.todos.filter(item => item !== todo)
    }));
  }

  render() {
    return (
      <section>
        <h3>{this.props.name}</h3>
        <Count todos={this.state.todos}/>
        
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>

        <h4>All the tasks!</h4>
        <ul>
          {this.state.todos.map((todo) => (
            <div style={{display:"flex", flexDirection:"row", margin:"5px", alignItems:"center"}}>
              <li key={todo}>{todo}</li>
              <button onClick={() => {this.handleDelete(todo)}}>Delete</button>
            </div>
          ))}
        </ul>
        
      </section>
    );
  }
}

export default ClassInput;
