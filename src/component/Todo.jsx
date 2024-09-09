import React from 'react';
import './Todo.css';

const Todo = ( {todo, onRemove, onToggle}) => {
    return (
        <div className='todo'>

        <h3>
            <span
            style={{
                color: todo.active ? "red" : "#ff6f61",
                textDecoration: todo.active ? "line-through" : "none",
                cursor:"pointer"
                }}  
            onClick={() => onToggle(todo.id)}>{todo.todoname}</span>

            <button onClick={() => onRemove(todo.id)}>X</button>
        </h3>

        </div>
    );
};

export default Todo;