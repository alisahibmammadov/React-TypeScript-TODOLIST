import React, { useRef } from "react";
import './NewTodo.css'

type NewTodoProps = {
  todoAddHandler: (todoText: string) => void;
};
const NewTodo: React.FC<NewTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current?.value;
    props.todoAddHandler(enteredText!);
  };
  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewTodo;
