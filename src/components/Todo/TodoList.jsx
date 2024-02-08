import React, { useState } from "react";
import { IoTrashBin } from "react-icons/io5";

export default function TodoList({todos, setTodos}) {
  
  return (
    <div>
    
      <div className="w-full max-w-lg mx-auto my-5">
        <ul>
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex items-center gap-3"
            >
              <div className="flex items-center gap-3 justify-between w-full">
                <div className="flex items-center gap-3">
                  <input
                    className="checkbox checkbox-accent"
                    type="checkbox"
                    name="todo"
                    id="todo"
                    checked={todo.completed}
                  />

                  <p
                    className={`${
                      todo.completed ? "line-through" : ""
                    } text-gray-800`}
                  >
                    {todo.text}
                  </p>
                </div>
                <IoTrashBin
                  title="Delete Todo"
                  className="text-2xl text-error cursor-pointer"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
