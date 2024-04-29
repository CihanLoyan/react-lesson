import React from 'react'
import '../App.css'
import { IoIosRemoveCircle } from "react-icons/io"
import { FaEdit } from "react-icons/fa"

function Todo( {value} ) {

  const { id, content } = value;  // Object Destr.

  return (
    <div className='todo'>
        <div>
            {content}
        </div>
        <div>
            <FaEdit className='todo-icons'/>
            <IoIosRemoveCircle className='todo-icons'/>
        </div>
            
    </div>
  )
}

export default Todo