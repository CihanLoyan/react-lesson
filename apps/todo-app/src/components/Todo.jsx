import React, { useState } from 'react'
import '../App.css'
import { IoIosRemoveCircle } from "react-icons/io"
import { FaEdit } from "react-icons/fa"
import { FaCheck } from "react-icons/fa"

function Todo( {value , onDeleteTodo, onUpdateTodo} ) {

  const { id, content } = value;  // Object Destr.

  const [editable, setEditable] = useState(false)

  const [newTodo, setNewTodo] = useState(content)

  const deleteTodo = () => {
    onDeleteTodo(id)
  }

  const updateTodo = () => {

    const data = {
      id: id,
      content: newTodo
    }
    onUpdateTodo(data)
    setEditable(false)
  }
 
  return (
    <div className='todo'>
        <div>
            {editable ? <input type='text' className='todo-input' onChange={(e) => setNewTodo(e.target.value)} value={newTodo}/> : content}
        </div>
        <div>
            {editable ? 
              <FaCheck className='todo-icons' onClick={updateTodo} />
              : <FaEdit className='todo-icons' onClick={() => setEditable(true)}/> 
            }
            
            <IoIosRemoveCircle className='todo-icons' onClick={deleteTodo}/>
        </div>
            
    </div>
  )
}

export default Todo