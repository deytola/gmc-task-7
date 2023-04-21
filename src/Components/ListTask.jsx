import React from 'react';
import Task from './Task';


export default function ListTask(props) {
    const {todos} = props;
    const todoCards = todos.map((todo, index) => {
        return (
            <Task 
                key = {index}
                id = {todo.id}
                description={todo.description}
                isDone={todo.isDone}
            />
        )
    })
    return(
        <div className='flex flex-col justify-between'>{todoCards}</div>
    )
}
