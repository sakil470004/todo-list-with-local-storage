import React, { useState } from "react";
import { IoTrashBin } from "react-icons/io5";
import {
  deleteAllTodos,
  getTodos,
  removeSingleTodo,
  updatedTodosDB,
} from "../../utilites/fakedb";
import toast from "react-hot-toast";
import { MdEdit } from "react-icons/md";
import TodoCard from "./TodoCard";

export default function TodoList({ todos, setTodos }) {
  
  return (
    <div>
      <div className=" my-5 max-h-[350px] overflow-y-auto">
        <ul>
          {todos.map((todo) => (
            <TodoCard key={todo.id} todo={todo} setTodos={setTodos}/>
          ))}
        </ul>
      </div>
    </div>
  );
}
