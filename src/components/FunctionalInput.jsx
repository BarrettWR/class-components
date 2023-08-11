import React, { useState } from 'react';

// eslint-disable-next-line react/function-component-definition, react/prop-types
const FunctionalInput = ({ name }) => {

  const [todos, setTodos] = useState(['Just some demo tasks', 'As an example']);
  const [inputVal, setInputVal] = useState('');

  const handleInputChange = (e) => {
    setInputVal(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((todo) => [...todo, inputVal]);
    setInputVal('');
  };

  const handleDelete = (todo) => {
    setTodos(todos.filter(item => item !== todo));
  }

  return (
    <section>
      <h3>{name}</h3>

      <form onSubmit={handleSubmit}>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="task-entry">Enter a task: </label>
        <input
          type="text"
          name="task-entry"
          value={inputVal}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>

      <h4>All the tasks!</h4>
      {/* The list of all the To-Do's, displayed */}
      <ul>
        {todos.map((todo) => (
          <div style={{display:"flex", flexDirection:"row", margin:"5px", alignItems:"center"}}>
            <li key={todo}>{todo}</li>
            <button onClick={() => {handleDelete(todo)}}>Delete</button>
          </div>
        ))}
      </ul>
    </section>
  );
};

export default FunctionalInput;
