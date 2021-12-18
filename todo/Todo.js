import {TodoCard} from './styles/todoCardStyles';
import { useState } from 'react';
import cross from './images/icon-cross.svg';
import { Draggable } from 'react-beautiful-dnd';

function Todo({task, removeTodo, id, completed, toggleComplete}){
    return (
        <TodoCard className="todocard">
            <label className="container">
                <p id={completed ? 'completed' : ''}>{task}</p>
                <input type="checkbox"  id='checkbox' name='checkbox' checked={completed} onClick={() => toggleComplete(id)}  />
                <span className="checkmark-2"></span>
            </label>
            <img className="cross" src={cross} alt={task} onClick={() => removeTodo(id)} />
        </TodoCard>
    )
}

export default Todo;