import react, {useState} from "react";
import useInputState from './hooks/useInputState';
import {Form, Input, InputText, InputSpan, Submit} from './styles/formStyles';

function TodoForm({addTodo}) {
    const [value, handleChange, reset] = useInputState("");

    const handleSubmit = e => {
        e.preventDefault();
        addTodo(value);
        reset();
    }
    return (
        <Form id="form" onSubmit={handleSubmit}>
              <Input type="checkbox" /><InputSpan /><InputText required type="text" id="text" maxLength="55" placeholder="Create a new todo..." value={value} onChange={handleChange}  />
              <Submit type="submit" />
        </Form>
    )
  }
  export default TodoForm;