import React, { useState } from 'react';
import axios from 'axios';


function App() {
  const [newTodo, setNewTodo] = useState('');

  
  const addTodo = async () => {
    const data ={
      text: newTodo,
      completed: false
    }
    try {
      const response = await axios.post('http://localhost:3000/todo', data);
        console.log(response)
    //    fetchTodos()
    //   setTodos([...todos, response.data]);
      setNewTodo('');
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div>
      <h1>Todo App</h1>
      {/* <ul>
        {todos.map(todo => (
          <li key={todo._id}>{todo.text}</li>
        ))}
      </ul> */}
      <div>
        <input type="text" value={newTodo} onChange={(e) => {setNewTodo(e.target.value)} }/>
       
        <button onClick={addTodo}>Add Todo</button>
      </div>
    </div>
  );
}

export default App;
