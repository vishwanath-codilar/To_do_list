import { useState } from 'react';
import {FilterTab} from './styles/filterTabStyles';
function FilterTabs({activeTab, currTabState, clearComplete, todos}){

    let returnValue; 

    const todoLength = () => {
        const updatedTodos = todos.filter(todo => !todo.completed);
        returnValue = updatedTodos.length;
        return updatedTodos.length;
    }
    return (
        <FilterTab>
            <div className="items-left">
                <p>{todoLength()} item{returnValue !== 1 && 's'} left</p>
            </div>
            <div className="items-middle">
                <p onClick={activeTab} id={currTabState === 'All' && 'all'}>All</p>
                <p onClick={activeTab} id={currTabState === 'Active' && 'active'}>Active</p>
                <p onClick={activeTab} id={currTabState === 'Completed' && 'complete'}>Completed</p>
            </div>
            <div className="items-right">
                <p onClick={clearComplete}>Clear Completed</p>
            </div>
        </FilterTab>
    )
}

export default FilterTabs;