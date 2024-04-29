import React, { useState } from 'react'
import '../App.css'

function TodoCreate({ onCreateTodo }) {  // Aşağıda her kullanımda props.onCreateTodo yazmamak için destruct yöntemiyle yazdık.
    const [newTodo, setNewTodo] = useState('');

    const clearInput = () => {
        setNewTodo('');
    }

    const createTodo = () => {
        if (!newTodo) return;

        const data = {
            id: Math.floor(Math.random() * 999999),
            content: newTodo
        }
        onCreateTodo(data)
        clearInput();
    }

    return (
        <div className='todo-create'>
            <input 
            onChange={(e) => {
                setNewTodo(e.target.value)}
            } 
            type='text'
            placeholder='What will you do?' />
            <button onClick={createTodo}>Add</button>
        </div>
    )
}

export default TodoCreate