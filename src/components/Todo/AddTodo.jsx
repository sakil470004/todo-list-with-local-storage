import React, { useEffect, useRef, useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { RiHealthBookFill } from "react-icons/ri";
import TodoList from "./TodoList";
import { addToDb, getTodos } from "../../utilites/fakedb";
import toast from "react-hot-toast";
import ExtraFunctionTodo from "./ExtraFunctionTodo";
export default function AddTodo() {
  // const data = [
  //   {
  //     id: 1,
  //     text: "Learn React JS",
  //     completed: true,
  //   },
  //   {
  //     id: 2,
  //     text: "Learn Redux",
  //     completed: false,
  //     color: "red",
  //   },
  // ];
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);
  const addTodo = (e) => {
    e.preventDefault();
    const text = inputRef.current.value;
    // console.log(text);
    // reset the input field
    inputRef.current.value = "";
    // add the todo to the list
    const uniqueId = new Date().valueOf();
    const newTodo = {
      id: uniqueId,
      text,
      completed: false,
    };
    
    addToDb(newTodo);
    const storedTodos = getTodos();
    setTodos(storedTodos);
    toast.success('Todo Added Successfully!')
  };

  useEffect(() => {
    const storedTodos = getTodos();
    setTodos(storedTodos);
  }, []);
  return (
    <div>
      {/* create a todo input design */}
      <div className="w-full max-w-lg mx-auto my-10 px-2">
        <form
          onSubmit={addTodo}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex items-center gap-3"
        >
          <RiHealthBookFill className="text-6xl text-accent" />
          <input
            ref={inputRef}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="todo"
            type="text"
            name="todo"
            placeholder="TYPE YOUR TODO HERE..."
          />

          <button
            title="Add Todo"
            className="btn btn-sm btn-outline text-2xl  text-white btn-accent"
            type="submit"
          >
            <IoAddCircleOutline />
          </button>
        </form>
        <TodoList todos={todos} setTodos={setTodos} />
        <ExtraFunctionTodo todos={todos} setTodos={setTodos}/>
      </div>
    </div>
  );
}
