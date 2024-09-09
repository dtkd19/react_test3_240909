import React from 'react';
import TodoCreate from './TodoCreate';
import Todo from './Todo';
import { useState } from 'react';
import { useRef } from 'react';
import './Todo.css';


const TodoList = () => {

    const nextId = useRef(0);

    const [todos, setTodos] = useState([]);

    const [todoname , setTodoname] = useState();

    const onChange = (e) => {
        setTodoname(e.target.value);
    }

    const onAdd = () => {
        const todo = {
            id:nextId.current,
            todoname : todoname,
        };

        setTodos( todos.concat(todo));

        setTodoname('');

        nextId.current += 1;
    }

    const onRemove = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const onToggle = (id) => {
        setTodos(todos.map( todo => todo.id === id ? { ...todo, active : !todo.active} : todo))
    }

    return (
        <div className='todolist'>
            <h1 className="todo-title">My Todo List</h1>
            
            
            <TodoCreate todoname={todoname} onChange={onChange} onAdd={onAdd}/>
            

            <ul className='todo-list'>
            {
                todos.map( t => (
                    <li className='todo-item'>
                    <Todo todo = {t} key = {t.id} onRemove = {onRemove} onToggle={onToggle} />
                    </li>
                ))
            }
            </ul>
        </div>
    );
};

export default TodoList;