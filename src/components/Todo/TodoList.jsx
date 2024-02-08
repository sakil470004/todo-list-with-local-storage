import React, { useState } from "react";
import { IoTrashBin } from "react-icons/io5";
import {
  deleteAllTodos,
  getTodos,
  removeSingleTodo,
  updatedTodosDB,
} from "../../utilites/fakedb";
import toast from "react-hot-toast";

export default function TodoList({ todos, setTodos }) {
  const deleteSingleTodo = (id) => {
    removeSingleTodo(id);
    const storedTodos = getTodos();
    setTodos(storedTodos);
    toast.success("Todo Deleted Successfully!");
  };
  const handleStatusChange = (e, id) => {
    const storedTodos = getTodos();
    const updatedTodos = storedTodos.map((todo) => {
      if (todo.id === id) {
        todo.completed = e.target.checked;
      }
      return todo;
    });
    setTodos(updatedTodos);
    updatedTodosDB(updatedTodos);
    toast.success("Todo Status Changed Successfully!");
  };
  return (
    <div>
      <div className=" my-5 max-h-[350px] overflow-y-auto">
        <ul>
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="bg-white shadow-md rounded px-8 pt-4 pb-6 mb-4 flex items-center gap-3"
            >
              <div className="flex items-center gap-3 justify-between w-full">
                <div className="flex items-center gap-4">
                  <input
                    className="checkbox checkbox-accent"
                    type="checkbox"
                    name="todo"
                    id="todo"
                    defaultChecked={todo.completed}
                    onChange={(e) => {
                      handleStatusChange(e, todo.id);
                    }}
                  />

                  <p
                    className={`${
                      todo.completed ? "line-through" : "t"
                    } text-gray-800 max-w-full overflow-hidden`}
                  >
                    {todo.text}
                  </p>
                </div>
                <div>
                  <IoTrashBin
                    onClick={() => {
                      deleteSingleTodo(todo.id);
                    }}
                    title="Delete Todo"
                    className="text-2xl text-error cursor-pointer"
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
