import React from 'react'
import '../App.css'
import Todo from './Todo'

function TodoList( {todos, onDeleteTodo, onUpdateTodo } ) {
  return (
    <div className='todo-list'>
        {todos && todos.map((todo) => (
          <Todo key={todo.id} value={todo} onDeleteTodo={onDeleteTodo} onUpdateTodo={onUpdateTodo}/>
        ))}
    </div>
  )
}

export default TodoList