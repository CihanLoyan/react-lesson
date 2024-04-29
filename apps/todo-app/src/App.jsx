import { useState } from 'react'
import './App.css'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

function App() {

  const [todos, setTodos] = useState([]);

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }
  return (
    <div className='app'>
      <div className='wrapper'>
        <TodoCreate onCreateTodo={createTodo}/>
        <TodoList todos={todos}/>
      </div>
    </div>
  )
}

export default App