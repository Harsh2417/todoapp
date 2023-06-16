// import React, { useState } from 'react';

// const TodoApp = () => {
//   const [todos, setTodos] = useState([]);
//   const [newTodo, setNewTodo] = useState('');

//   const handleInputChange = (event) => {
//     setNewTodo(event.target.value);
//   };

//   const handleFormSubmit = (event) => {
//     event.preventDefault();

//     if (newTodo.trim() !== '') {
//       const updatedTodos = [...todos, newTodo];
//       setTodos(updatedTodos);
//       setNewTodo('');
//     }
//   };

//   return (
//     <div>
//       <h1>To-Do List</h1>

//       <form onSubmit={handleFormSubmit}>
//         <input type="text" value={newTodo} onChange={handleInputChange} />
//         <button type="submit">Add</button>
//       </form>

//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index}>{todo}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TodoApp;

import React, { useState } from 'react';
import './TodoApp.css';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (newTodo.trim() !== '') {
      const updatedTodos = [...todos, { text: newTodo, completed: false }];
      setTodos(updatedTodos);
      setNewTodo('');
    }
  };

  const toggleTodoCompleted = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-app">
      <h1>To-Do List</h1>

      <form onSubmit={handleFormSubmit}>
        <input type="text" value={newTodo} onChange={handleInputChange} />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodoCompleted(index)}
            />
            <span
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
