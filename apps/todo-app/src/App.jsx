import { useState } from 'react'
import './App.css'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

function App() {

  const [todos, setTodos] = useState([]);

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }

  const deleteTodo = (todoId) => {
    const filteredTodos = todos.filter((todo) => todo.id !== todoId)
    setTodos(filteredTodos)  // filteredTodos zaten bir dizi olduğu için setTodos içinde köşeli paranteze alınmadı.
  } 

  const updateTodo = (newTodo) => {
    const mappedTodos = todos.map((todo) => {
      if(todo.id !== newTodo.id) {
        return todo;
      }
      return newTodo;
    })
    setTodos(mappedTodos);  // mappedTodos zaten bir dizi olduğu için setTodos içinde köşeli paranteze alınmadı.
  }

  return (
    <div className='app'>
      <div className='wrapper'>
        <TodoCreate onCreateTodo={createTodo}/>
        <TodoList todos={todos} onDeleteTodo={deleteTodo} onUpdateTodo={updateTodo}/>
      </div>
    </div>
  )
}

export default App
