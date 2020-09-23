import React, { useState } from 'react';
import './App.css';
import Swal from 'sweetalert2';
// import todoitems from './component/todoitems';

function App() {
  const [todoitem, setodoitem] = useState([]);
  const [input, setInput] = useState('');
  const addTodo = (e) => {
    if (input == '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Text Field Are required',
        timer: 2500,
        // footer: 'Developed By Vishwajeet singh',
      });
    } else {
      setodoitem([...todoitem, input]);
      setInput([]);
    }
  };
  return (
    <div className='todo_main_outer'>
      <div className='todo_main'>
        <br />
        <h2> todo list</h2>
        <br />
        <input
          onChange={(event) => setInput(event.target.value)}
          type='text'
          value={input}
          placeholder='add item'
        />
        <button onClick={addTodo}>
          {' '}
          <bold>+</bold>{' '}
        </button>

        <ul>
          {todoitem.map((todoitem, index) => (
            <li key={index}>{todoitem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;