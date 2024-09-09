import React from 'react';
import './Todo.css';


const TodoCreate = ({todoname, onChange, onAdd}) => {
    return (
        <div className='todocreate'>
            <div className='todo-input'>
            <input type="text" name='todoname' placeholder='Todo' onChange={onChange} value={todoname}/>
            
            <button onClick={onAdd}>add</button>
            </div>
        </div>
    );
};

export default TodoCreate;