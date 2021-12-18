import Todo from './Todo';
import { v4 as uuidv4 } from 'uuid';
import react, {useState} from 'react';
import TodoForm from './TodoForm';
import {TodoListWrapper} from './styles/TodoListStyles';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import FilterTabs from './FilterTabs';
import { useEffect } from 'react';

function TodoList(){
    // states
    const initialTodos = [
        {task: "Complete online Javascript course", completed: true, id: uuidv4()},
        {task: "Jog around the park 3x", completed: false, id: uuidv4()},
        {task: "10 minutes meditation", completed: false, id: uuidv4()},
        {task: "Read for 1 hour", completed: false, id: uuidv4()},
        {task: "Pick up groceries", completed: false, id: uuidv4()},
        {task: "Complete Todo App on Frontend Mentor", completed: false, id: uuidv4()},
    ]

    const [todos, setTodos] = useState(initialTodos);
    const [currTabState, setTabState] = useState('');

    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem('todos'));
        if (todos) {
          setTodos(todos);
        }
      }, []);
    
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
      }, [todos]);

    const toggleComplete =  todoId => {
        const updatedTodos = todos.map(todo =>
          todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
      }

    const addTodo = newTodo => {
        const updatedTodos = [...todos, { id: uuidv4(), task: newTodo, completed: false }];
        setTodos(updatedTodos);
    }

    const removeTodo = todoId => {
        const updatedTodos = todos.filter(todo => todo.id !== todoId);
        setTodos(updatedTodos);
   }

    const clearComplete = () => {
        const updatedTodos = todos.filter(todo => !todo.completed);
        setTodos(updatedTodos)
    }

   const handleOnDragEnd = result => {
       if(!result.destination) return;

       
    const items = Array.from(todos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setTodos(items);
   }

   const activeTab = (e) => {
       setTabState(e.target.textContent);
   }

    return (
        <TodoListWrapper>
        <TodoForm addTodo={addTodo}  />
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="todolist-items">
                {(provided) => (
                     <div className="todolist-items" {...provided.droppableProps} ref={provided.innerRef}>
                     {todos.map((todo, index) => {
                         if(currTabState === 'All' || currTabState.length === 0){
                             return (
                                <Draggable key={todo.id} draggableId={todo.id} index={index}>
                                {(provided) => (
                                      <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                    <Todo task={todo.task} id={todo.id} key={todo.id} removeTodo={removeTodo} completed={todo.completed} toggleComplete={toggleComplete} />
                                    </li>
                                )}
                            </Draggable>
                             )
                         } else if(currTabState === 'Active'){
                             if(!todo.completed){
                                 return (
                                    <Draggable key={todo.id} draggableId={todo.id} index={index}>
                                    {(provided) => (
                                          <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                        <Todo task={todo.task} id={todo.id} key={todo.id} removeTodo={removeTodo} completed={todo.completed} toggleComplete={toggleComplete} />
                                        </li>
                                    )}
                                </Draggable>
                                 )
                             }
                         } else if(currTabState === 'Completed'){
                             if(todo.completed){
                                return (
                                    <Draggable key={todo.id} draggableId={todo.id} index={index}>
                                    {(provided) => (
                                          <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                        <Todo task={todo.task} id={todo.id} key={todo.id} removeTodo={removeTodo} completed={todo.completed} toggleComplete={toggleComplete} />
                                        </li>
                                    )}
                                </Draggable>
                                 )
                             }
                         }
                     
                        })}
                     {provided.placeholder}
                     <FilterTabs activeTab={activeTab} currTabState={currTabState} clearComplete={clearComplete} todos={todos} />
                     </div>
                )}
                </Droppable>
                </DragDropContext>
        </TodoListWrapper>
    )
}

export default TodoList;